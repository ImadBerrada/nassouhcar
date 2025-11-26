import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      )
    }
    
    const token = authHeader.substring(7)
    
    try {
      const decoded = verifyToken(token)
      
      if (!decoded || !decoded.userId) {
        return NextResponse.json(
          { error: 'Invalid token' },
          { status: 401 }
        )
      }
      
      // Get user and verify admin role
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId }
      })
      
      if (!user || user.role !== 'ADMIN') {
        return NextResponse.json(
          { error: 'Admin access required' },
          { status: 403 }
        )
      }
      
      // Fetch dashboard statistics
      const [totalCars, totalUsers, totalBookings, contactMessages, revenueBookings, activeBookingsCount, pendingBookingsCount] = await Promise.all([
        prisma.car.count(),
        prisma.user.count({ where: { role: 'USER' } }),
        prisma.booking.count({
          where: {
            status: {
              in: ['CONFIRMED', 'COMPLETED']
            }
          }
        }),
        prisma.contactMessage.count(),
        // Only fetch bookings contributing to revenue
        prisma.booking.findMany({
          where: {
            status: {
              in: ['CONFIRMED', 'COMPLETED']
            }
          },
          select: {
            totalPrice: true
          }
        }),
        // Counts for active and pending bookings
        prisma.booking.count({
          where: { status: 'CONFIRMED' }
        }),
        prisma.booking.count({
          where: { status: 'PENDING' }
        })
      ])
      
      const totalRevenue = revenueBookings.reduce((sum, booking) => sum + (booking.totalPrice || 0), 0)
      const activeBookings = activeBookingsCount
      const pendingBookings = pendingBookingsCount
      
      const stats = {
        totalCars,
        totalUsers,
        totalBookings,
        totalRevenue,
        activeBookings,
        pendingBookings,
        contactMessages
      }
      
      return NextResponse.json({ stats })
      
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unknown error occurred';
      return NextResponse.json(
        { error: 'Invalid token', message: message },
        { status: 401 }
      )
    }
    
  } catch (err: unknown) {
    console.error('Dashboard stats error:', err)
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Internal server error', message: errorMessage },
      { status: 500 }
    )
  }
}