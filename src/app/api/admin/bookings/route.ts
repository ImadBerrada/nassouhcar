import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient, Prisma, BookingStatus } from '@prisma/client'
import jwt from 'jsonwebtoken'

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

// GET /api/admin/bookings - Get all bookings with filters
export async function GET(request: NextRequest) {
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  try {
    const { searchParams } = new URL(request.url)
    const statusParam = searchParams.get('status')
    const status = statusParam && Object.values(BookingStatus).includes(statusParam as BookingStatus) ? (statusParam as BookingStatus) : undefined
    const userId = searchParams.get('userId')
    const carId = searchParams.get('carId')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const where: Prisma.BookingWhereInput = {}
    if (status) where.status = status
    if (userId) where.userId = userId
    if (carId) where.carId = carId

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
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
              brand: true,  // Changed from 'make' to 'brand'
              model: true,
              year: true,
              image: true,
              name: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.booking.count({ where })
    ])

    return NextResponse.json({
      bookings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (err: unknown) {
    console.error('Error fetching bookings:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to fetch bookings', message: message },
      { status: 500 }
    )
  }
}