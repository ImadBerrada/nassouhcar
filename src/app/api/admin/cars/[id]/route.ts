import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

// Helper function to verify admin access
async function verifyAdminAccess(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided')
  }
  
  const token = authHeader.substring(7)
  const decoded = verifyToken(token) as { userId: string, role: string }
  
  if (!decoded || !decoded.userId) {
    throw new Error('Invalid token')
  }
  
  const user = await prisma.user.findUnique({
    where: { id: decoded.userId }
  })
  
  if (!user || user.role !== 'ADMIN') {
    throw new Error('Admin access required')
  }
  
  return user
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'An unknown error occurred'
    return NextResponse.json({ message }, { status: 401 })
  }
}


// PUT - Update car
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    await verifyAdminAccess(request)
    
    const carData = await request.json()
    const carId = id
    
    // Check if car exists
    const existingCar = await prisma.car.findUnique({
      where: { id: carId }
    })
    
    if (!existingCar) {
      return NextResponse.json(
        { error: 'Car not found' },
        { status: 404 }
      )
    }
    
    const updatedCar = await prisma.car.update({
      where: { id: carId },
      data: {
        name: carData.name || existingCar.name,
        brand: carData.brand || existingCar.brand,
        model: carData.model || existingCar.model,
        year: carData.year ? parseInt(carData.year) : existingCar.year,
        category: carData.category || existingCar.category,
        transmission: carData.transmission || existingCar.transmission,
        fuelType: carData.fuelType || existingCar.fuelType,
        seats: carData.seats ? parseInt(carData.seats) : existingCar.seats,
        pricePerDay: carData.pricePerDay ? parseFloat(carData.pricePerDay) : existingCar.pricePerDay,
        quantity: carData.quantity ? parseInt(carData.quantity) : existingCar.quantity,
        image: carData.image !== undefined ? carData.image : existingCar.image,
        description: carData.description !== undefined ? carData.description : existingCar.description,
        features: carData.features !== undefined ? carData.features : existingCar.features,
        available: carData.available !== undefined ? carData.available : existingCar.available
      }
    })
    
    return NextResponse.json({ car: updatedCar })
    
  } catch (err: unknown) {
    console.error('Admin car update error:', err)
    
    const message = err instanceof Error ? err.message : 'An unknown error occurred'

    if (message === 'No token provided' || message === 'Invalid token') {
      return NextResponse.json({ error: message }, { status: 401 })
    }
    
    if (message === 'Admin access required') {
      return NextResponse.json({ error: message }, { status: 403 })
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE - Delete car
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    await verifyAdminAccess(request)
    
    const carId = id
    
    // Check if car exists
    const existingCar = await prisma.car.findUnique({
      where: { id: carId },
      include: {
        bookings: {
          where: {
            status: {
              in: ['PENDING', 'CONFIRMED']
            }
          }
        }
      }
    })
    
    if (!existingCar) {
      return NextResponse.json(
        { error: 'Car not found' },
        { status: 404 }
      )
    }
    
    // Check if car has active bookings
    if (existingCar.bookings.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete car with active bookings' },
        { status: 400 }
      )
    }
    
    // Delete related records first (cascade delete)
    await prisma.priceRule.deleteMany({
      where: { carId }
    })

    await prisma.booking.deleteMany({
      where: { carId }
    })

    await prisma.car.delete({
      where: { id: carId }
    })
    
    return NextResponse.json({ message: 'Car deleted successfully' })
    
  } catch (err: unknown) {
    console.error('Admin car deletion error:', err)
    
    const message = err instanceof Error ? err.message : 'An unknown error occurred'

    if (message === 'No token provided' || message === 'Invalid token') {
      return NextResponse.json({ error: message }, { status: 401 })
    }
    
    if (message === 'Admin access required') {
      return NextResponse.json({ error: message }, { status: 403 })
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}