import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'
import { emailService } from '@/lib/email'

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const where = user.role === 'ADMIN' ? {} : { userId: user.id }
    
    const bookings = await prisma.booking.findMany({
      where,
      include: {
        car: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json(bookings)
    
  } catch (error) {
    console.error('Get bookings error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser(request)
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const {
      carId,
      startDate,
      endDate,
      pickupLocation,
      dropoffLocation,
      
      additionalNotes
    } = await request.json()
    
    // Validate dates
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    if (start >= end) {
      return NextResponse.json(
        { error: "La date de fin doit être après la date de début." },
        { status: 400 }
      )
    }
    
    // Check car availability
    const car = await prisma.car.findUnique({
      where: { id: carId }
    })
    
    if (!car || !car.available) {
      return NextResponse.json(
        { error: 'Car not available' },
        { status: 400 }
      )
    }
    
    // Check availability based on quantity
    const overlappingBookings = await prisma.booking.findMany({
      where: {
        carId,
        status: { in: ['PENDING', 'CONFIRMED'] },
        OR: [
          {
            startDate: { lte: end },
            endDate: { gte: start }
          }
        ]
      }
    })
    
    const bookedQuantity = overlappingBookings.length
    const availableQuantity = (car.quantity || 1) - bookedQuantity
    
    if (availableQuantity <= 0) {
      return NextResponse.json(
        { error: `La voiture n'est pas disponible aux dates sélectionnées. ${bookedQuantity} sur ${car.quantity || 1} voitures sont déjà réservées.` },
        { status: 400 }
      )
    }
    
    // Calculate total price (variable by period)
    const { calculateTotalPriceForRange } = await import('@/lib/pricing')
    const totalPrice = await calculateTotalPriceForRange(carId, start, end, car.pricePerDay, car.shortTermPricePerDay)
    
    const booking = await prisma.booking.create({
      data: {
        userId: user.id,
        carId,
        startDate: start,
        endDate: end,
        totalPrice,
        pickupLocation,
        dropoffLocation,
        
        additionalNotes
      },
      include: {
        car: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        }
      }
    })
    
    // Send email notifications
    try {
      const bookingData = {
        bookingId: booking.id,
        customerName: booking.user?.name || 'N/A',
        customerEmail: booking.user?.email || 'N/A',
        customerPhone: booking.user?.phone || 'N/A',
        car: booking.car,
        startDate: booking.startDate,
        endDate: booking.endDate,
        totalDays: Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)),
        totalPrice: booking.totalPrice,
        status: booking.status,
        createdAt: booking.createdAt,
        pickupLocation: booking.pickupLocation || undefined,
        dropoffLocation: booking.dropoffLocation || undefined,
        additionalNotes: booking.additionalNotes || undefined
      }
      
      // Send notification to admin
      await emailService.sendBookingNotification(bookingData)
      
      // Send confirmation to client
      if (booking.user?.email) {
        await emailService.sendClientBookingConfirmation(bookingData)
      }
    } catch (emailError) {
      console.error('Failed to send email notifications:', emailError)
      // Don't fail the booking if email fails
    }
    
    return NextResponse.json(booking, { status: 201 })
    
  } catch (error) {
    console.error('Create booking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
