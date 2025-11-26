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
      
      // Note: Booking trends functionality can be added here if needed in the future
      
      // Get most popular cars
      const popularCars = await prisma.booking.groupBy({
        by: ['carId'],
        where: {
          status: {
            in: ['CONFIRMED', 'COMPLETED']
          }
        },
        _count: {
          id: true
        },
        _sum: {
          totalPrice: true
        },
        orderBy: {
          _count: {
            id: 'desc'
          }
        },
        take: 10
      })
      
      // Get car details for popular cars
      const carIds = popularCars.map(car => car.carId)
      const carDetails = await prisma.car.findMany({
        where: {
          id: {
            in: carIds
          }
        },
        select: {
          id: true,
          brand: true,
          model: true,
          year: true,
          image: true
        }
      })
      
      // Combine car data with booking stats
      const popularCarsWithDetails = popularCars.map(booking => {
        const car = carDetails.find(c => c.id === booking.carId)
        return {
          ...car,
          bookingCount: booking._count.id,
          totalRevenue: booking._sum.totalPrice || 0
        }
      })
      
      // Get booking status distribution
      const statusDistribution = await prisma.booking.groupBy({
        by: ['status'],
        _count: {
          id: true
        }
      })
      
      // Get guest vs registered user bookings
      const guestBookings = await prisma.booking.count({
        where: {
          userId: null,
          status: {
            in: ['CONFIRMED', 'COMPLETED']
          }
        }
      })
      
      const registeredUserBookings = await prisma.booking.count({
        where: {
          userId: {
            not: null
          },
          status: {
            in: ['CONFIRMED', 'COMPLETED']
          }
        }
      })
      
      // Get monthly revenue trends
      const currentDate = new Date()
      const monthlyRevenue = []
      for (let i = 11; i >= 0; i--) {
        const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1)
        const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() - i + 1, 0)
        
        const monthData = await prisma.booking.aggregate({
          where: {
            createdAt: {
              gte: monthStart,
              lte: monthEnd
            },
            status: {
              in: ['CONFIRMED', 'COMPLETED']
            }
          },
          _sum: {
            totalPrice: true
          },
          _count: {
            id: true
          }
        })
        
        monthlyRevenue.push({
          month: monthStart.toISOString().slice(0, 7), // YYYY-MM format
          revenue: monthData._sum.totalPrice || 0,
          bookings: monthData._count.id
        })
      }
      
      // Get top customers (registered users only)
      const topCustomers = await prisma.booking.groupBy({
        by: ['userId'],
        where: {
          userId: {
            not: null
          },
          status: {
            in: ['CONFIRMED', 'COMPLETED']
          }
        },
        _count: {
          id: true
        },
        _sum: {
          totalPrice: true
        },
        orderBy: {
          _sum: {
            totalPrice: 'desc'
          }
        },
        take: 10
      })
      
      // Get customer details
      const customerIds = topCustomers.map(customer => customer.userId).filter(id => id !== null)
      const customerDetails = await prisma.user.findMany({
        where: {
          id: {
            in: customerIds as string[]
          }
        },
        select: {
          id: true,
          name: true,
          email: true
        }
      })
      
      const topCustomersWithDetails = topCustomers.map(booking => {
        const customer = customerDetails.find(c => c.id === booking.userId)
        return {
          ...customer,
          bookingCount: booking._count.id,
          totalSpent: booking._sum.totalPrice || 0
        }
      })
      
      const analytics = {
        monthlyRevenue,
        popularCars: popularCarsWithDetails,
        statusDistribution: statusDistribution.map(status => ({
          status: status.status,
          count: status._count.id
        })),
        userTypeDistribution: {
          guest: guestBookings,
          registered: registeredUserBookings
        },
        topCustomers: topCustomersWithDetails
      }
      
      return NextResponse.json({ analytics })
      
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unknown error occurred';
      return NextResponse.json(
        { error: 'Invalid token', message: message },
        { status: 401 }
      )
    }
    
  } catch (err: unknown) {
    console.error('Dashboard analytics error:', err)
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Internal server error', message: errorMessage },
      { status: 500 }
    )
  }
}