import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// GET - Check car availability for date range
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const carId = searchParams.get('carId')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    if (!carId || !startDate || !endDate) {
      return NextResponse.json(
        { error: 'carId, startDate, and endDate are required' },
        { status: 400 }
      )
    }

    // Get car with its quantity
    const car = await prisma.car.findUnique({
      where: { id: carId }
    })

    if (!car) {
      return NextResponse.json(
        { error: 'Car not found' },
        { status: 404 }
      )
    }

    if (!car.available) {
      return NextResponse.json({
        available: false,
        availableQuantity: 0,
        totalQuantity: car.quantity,
        reason: 'Car is not available for booking'
      })
    }

    // Count overlapping bookings for the requested date range
    const overlappingBookings = await prisma.booking.count({
      where: {
        carId: carId,
        status: {
          in: ['PENDING', 'CONFIRMED']
        },
        OR: [
          {
            // Booking starts before our end date and ends after our start date
            AND: [
              { startDate: { lte: new Date(endDate) } },
              { endDate: { gte: new Date(startDate) } }
            ]
          }
        ]
      }
    })

    const availableQuantity = car.quantity - overlappingBookings
    const isAvailable = availableQuantity > 0

    return NextResponse.json({
      available: isAvailable,
      availableQuantity: Math.max(0, availableQuantity),
      totalQuantity: car.quantity,
      bookedQuantity: overlappingBookings,
      carName: car.name
    })

  } catch (error) {
    console.error('Car availability check error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - Check availability for multiple cars
export async function POST(request: NextRequest) {
  try {
    const { startDate, endDate, carIds } = await request.json()

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: 'startDate and endDate are required' },
        { status: 400 }
      )
    }

    // If no specific car IDs provided, check all cars
    const whereClause = carIds && carIds.length > 0 
      ? { id: { in: carIds }, available: true }
      : { available: true }

    // Get all cars with their quantities
    const cars = await prisma.car.findMany({
      where: whereClause
    })

    // Get overlapping bookings for all cars
    const carAvailability = await Promise.all(
      cars.map(async (car) => {
        const overlappingBookings = await prisma.booking.count({
          where: {
            carId: car.id,
            status: {
              in: ['PENDING', 'CONFIRMED']
            },
            OR: [
              {
                AND: [
                  { startDate: { lte: new Date(endDate) } },
                  { endDate: { gte: new Date(startDate) } }
                ]
              }
            ]
          }
        })

        const availableQuantity = car.quantity - overlappingBookings
        const isAvailable = availableQuantity > 0

        return {
          ...car,
          availableQuantity: Math.max(0, availableQuantity),
          bookedQuantity: overlappingBookings,
          isAvailable
        }
      })
    )

    // Filter to only return available cars
    const availableCars = carAvailability.filter(car => car.isAvailable)

    return NextResponse.json({
      cars: availableCars,
      totalCars: cars.length,
      availableCars: availableCars.length
    })

  } catch (error) {
    console.error('Multiple cars availability check error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}