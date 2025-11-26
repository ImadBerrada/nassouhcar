import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
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

// GET /api/admin/contacts - Get all contact messages
export async function GET(request: NextRequest) {
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const [contacts, total] = await Promise.all([
      prisma.contactMessage.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.contactMessage.count()
    ])

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (err: unknown) {
    console.error('Error fetching contact messages:', err)
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: 'Failed to fetch contact messages', error: errorMessage },
      { status: 500 }
    )
  }
}