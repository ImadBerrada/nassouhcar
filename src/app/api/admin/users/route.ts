import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient, Prisma, Role } from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

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

// GET /api/admin/users - Get all users with filters
export async function GET(request: NextRequest) {
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  try {
    const { searchParams } = new URL(request.url)
    const roleParam = searchParams.get('role')
    const role = roleParam && Object.values(Role).includes(roleParam as Role) ? (roleParam as Role) : undefined
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const where: Prisma.UserWhereInput = {}
    if (role) where.role = role
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } }
      ]
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          createdAt: true,
          _count: {
            select: {
              bookings: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.user.count({ where })
    ])

    return NextResponse.json({
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (err: unknown) {
    console.error('Error fetching users:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to fetch users', message: message },
      { status: 500 }
    )
  }
}

// POST /api/admin/users - Create new user
export async function POST(request: NextRequest) {
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  try {
    const body = await request.json()
    const { name, email, password, phone, role = 'USER' } = body

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        role
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true
      }
    })

    return NextResponse.json(user, { status: 201 })
  } catch (err: unknown) {
    console.error('Error creating user:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to create user', message: message },
      { status: 500 }
    )
  }
}