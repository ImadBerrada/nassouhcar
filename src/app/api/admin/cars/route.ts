import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

import { verifyToken } from '@/lib/auth'

// Helper function to verify admin access
async function verifyAdminAccess(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided')
  }
  
  const token = authHeader.substring(7)
  const decoded = verifyToken(token)
  
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
}

// GET - Fetch all cars for admin
export async function GET(request: NextRequest) {
  try {
    await verifyAdminAccess(request)
    
    const cars = await prisma.car.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { bookings: true }
        }
      }
    })
    
    return NextResponse.json({ cars })
    
  } catch (err: unknown) {
    console.error('Admin cars fetch error:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    
    if (err instanceof Error && (err.message === 'No token provided' || err.message === 'Invalid token')) {
      return NextResponse.json({ error: err.message }, { status: 401 })
    }
    
    if (err instanceof Error && err.message === 'Admin access required') {
      return NextResponse.json({ error: err.message }, { status: 403 })
    }
    
    return NextResponse.json(
      { error: 'Internal server error', message: message },
      { status: 500 }
    )
  }
}

// POST - Create new car
export async function POST(request: NextRequest) {
  try {
    await verifyAdminAccess(request)
    
    const carData = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'brand', 'model', 'year', 'category', 'transmission', 'fuelType', 'seats', 'pricePerDay', 'quantity']
    for (const field of requiredFields) {
      if (!carData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }
    
    const car = await prisma.car.create({
      data: {
        name: carData.name,
        brand: carData.brand,
        model: carData.model,
        year: parseInt(carData.year),
        category: carData.category,
        transmission: carData.transmission,
        fuelType: carData.fuelType,
        seats: parseInt(carData.seats),
        pricePerDay: parseFloat(carData.pricePerDay),
        shortTermPricePerDay: carData.shortTermPricePerDay ? parseFloat(carData.shortTermPricePerDay) : null,
        quantity: parseInt(carData.quantity) || 1,
        image: carData.image || null,
        description: carData.description || null,
        features: carData.features || [],
        available: carData.available !== false
      }
    })
    
    return NextResponse.json({ car }, { status: 201 })
    
  } catch (err: unknown) {
    console.error('Admin car creation error:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    
    if (err instanceof Error && (err.message === 'No token provided' || err.message === 'Invalid token')) {
      return NextResponse.json({ error: err.message }, { status: 401 })
    }
    
    if (err instanceof Error && err.message === 'Admin access required') {
      return NextResponse.json({ error: err.message }, { status: 403 })
    }
    
    return NextResponse.json(
      { error: 'Internal server error', message: message },
      { status: 500 }
    )
  }
}
