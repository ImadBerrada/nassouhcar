import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { Prisma } from '@prisma/client'
import { getAuthUser } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const available = searchParams.get('available')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    
    const where: Prisma.CarWhereInput = {}
    
    if (category) {
      where.category = category
    }
    
    if (available === 'true') {
      where.available = true
    }
    
    if (minPrice || maxPrice) {
      where.pricePerDay = {}
      if (minPrice) where.pricePerDay.gte = parseFloat(minPrice)
      if (maxPrice) where.pricePerDay.lte = parseFloat(maxPrice)
    }
    
    const cars = await prisma.car.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json({ cars })
    
  } catch (err: unknown) {
    console.error('Get cars error:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Internal server error', message: message },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser(request)
    
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const data = await request.json()
    
    const car = await prisma.car.create({
      data: {
        name: data.name,
        brand: data.brand,
        model: data.model,
        year: data.year,
        category: data.category,
        transmission: data.transmission,
        fuelType: data.fuelType,
        seats: data.seats,
        pricePerDay: data.pricePerDay,
        image: data.image,
        description: data.description,
        features: data.features || []
      }
    })
    
    return NextResponse.json(car, { status: 201 })
    
  } catch (err: unknown) {
    console.error('Create car error:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Internal server error', message: message },
      { status: 500 }
    )
  }
}