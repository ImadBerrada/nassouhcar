import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { emailService } from '@/lib/email'

const prisma = new PrismaClient()

// Helper function to verify admin access
async function verifyAdminAccess(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  
  if (!token) {
    return { error: 'No token provided', status: 401 }
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string, role: string }
    
    if (!decoded || !decoded.userId) {
      return { error: 'Invalid token', status: 401 }
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    })

    if (!user || user.role !== 'ADMIN') {
      return { error: 'Admin access required', status: 403 }
    }

    return { user }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return { error: 'Invalid token', status: 401, message: message }
  }
}

// GET /api/admin/bookings/[id] - Get specific booking
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  const { id } = await params

  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        },
        car: {
          select: {
            id: true,
            brand: true,  // Changed from 'make' to 'brand'
            model: true,
            year: true,
            image: true,
            pricePerDay: true
          }
        }
      }
    })

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(booking)
  } catch (err: unknown) {
    console.error('Error fetching booking:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to fetch booking', message: message },
      { status: 500 }
    )
  }
}

// PUT /api/admin/bookings/[id] - Update booking status
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  try {
    const body = await request.json()
    const { status } = body

    if (!status || !['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'].includes(status)) {
      return NextResponse.json(
        { error: 'Valid status is required' },
        { status: 400 }
      )
    }

    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        car: {
          select: {
            id: true,
            brand: true,
            model: true,
            year: true
          }
        }
      }
    })

    // Send cancellation notification if status is CANCELLED
    if (status === 'CANCELLED') {
      try {
        const customerEmail = booking.user?.email || booking.guestEmail
        const customerName = booking.user?.name || booking.guestName
        
        if (customerEmail && customerName) {
          await emailService.sendBookingCancellationNotification({
            customerEmail,
            customerName,
            bookingId: booking.id,
            vehicleModel: `${booking.car.brand} ${booking.car.model} ${booking.car.year}`,
            startDate: new Date(booking.startDate).toLocaleDateString('fr-FR'),
            endDate: new Date(booking.endDate).toLocaleDateString('fr-FR'),
            totalAmount: booking.totalPrice,
            cancellationReason: body.cancellationReason || undefined
          })
        }
      } catch (emailError) {
        console.error('Failed to send cancellation notification:', emailError)
        // Don't fail the booking update if email fails
      }
    }

    return NextResponse.json(booking)
  } catch (err: unknown) {
    console.error('Error updating booking:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to update booking', message: message },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/bookings/[id] - Delete booking
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  try {
    await prisma.booking.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Booking deleted successfully' })
  } catch (err: unknown) {
    console.error('Error deleting booking:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to delete booking', message: message },
      { status: 500 }
    )
  }
}