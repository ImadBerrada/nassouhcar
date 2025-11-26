import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// GET /api/price-rules?carId=...&start=YYYY-MM-DD&end=YYYY-MM-DD
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const carId = searchParams.get('carId')
    const startStr = searchParams.get('start')
    const endStr = searchParams.get('end')

    if (!carId) {
      return NextResponse.json({ error: 'carId is required' }, { status: 400 })
    }

    const where: {
      carId: string
      startDate?: { lte: Date }
      endDate?: { gte: Date }
    } = { carId }
    if (startStr && endStr) {
      const start = new Date(startStr)
      const end = new Date(endStr)
      where.startDate = { lte: end }
      where.endDate = { gte: start }
    }

    const rules = await prisma.priceRule.findMany({
      where,
      orderBy: { startDate: 'asc' }
    })
    return NextResponse.json(rules)
  } catch (error) {
    console.error('GET /api/price-rules error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/price-rules
// body: { carId, startDate, endDate, pricePerDay }
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { carId, startDate, endDate, pricePerDay } = body

    if (!carId || !startDate || !endDate || typeof pricePerDay !== 'number') {
      return NextResponse.json({ error: 'carId, startDate, endDate, pricePerDay are required' }, { status: 400 })
    }

    const rule = await prisma.priceRule.create({
      data: {
        carId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        pricePerDay
      }
    })
    return NextResponse.json(rule, { status: 201 })
  } catch (error) {
    console.error('POST /api/price-rules error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/price-rules?id=...
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 })
    }

    await prisma.priceRule.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('DELETE /api/price-rules error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}