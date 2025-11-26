import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { emailService } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const {
      carId,
      startDate,
      endDate,
      pickupLocation,
      dropoffLocation,
      additionalNotes,
      guestName,
      guestEmail,
      guestPhone
    } = await request.json()

    // Validate required guest fields
    if (!guestName || !guestEmail || !guestPhone) {
      return NextResponse.json(
        { error: 'Guest name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(guestEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate dates
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    if (start >= end) {
      return NextResponse.json(
        { error: "La date de fin doit être après la date de début." },
        { status: 400 }
      )
    }

    // Check if start date is in the future
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (start < today) {
      return NextResponse.json(
        { error: 'Start date cannot be in the past' },
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
        carId,
        startDate: start,
        endDate: end,
        totalPrice,
        pickupLocation,
        dropoffLocation,
        additionalNotes,
        guestName,
        guestEmail,
        guestPhone,
        // userId is undefined for guest bookings
        userId: undefined
      },
      include: {
        car: true
      }
    })

    // Send email notifications
    try {
      const bookingData = {
        bookingId: booking.id,
        customerName: booking.guestName || 'N/A',
        customerEmail: booking.guestEmail || 'N/A',
        customerPhone: booking.guestPhone || 'N/A',
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
      if (booking.guestEmail) {
        await emailService.sendClientBookingConfirmation(bookingData)
      }
    } catch (emailError) {
      console.error('Failed to send email notifications:', emailError)
      // Don't fail the booking if email fails
    }

    return NextResponse.json({
      id: booking.id,
      totalPrice: booking.totalPrice,
      message: 'Guest booking created successfully! You will receive a confirmation email shortly.'
    }, { status: 201 })
    
  } catch (error) {
    console.error('Create guest booking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
