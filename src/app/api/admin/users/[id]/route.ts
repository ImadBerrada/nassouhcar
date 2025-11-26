import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient, Prisma } from '@prisma/client'
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

// GET /api/admin/users/[id] - Get specific user
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  const { id } = await params

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        bookings: {
          include: {
            car: {
              select: {
                brand: true,  // Changed from 'make' to 'brand'
                model: true,
                year: true
              }
            }
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)
  } catch (err: unknown) {
    console.error('Error fetching user:', err)
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: 'Failed to fetch user', error: errorMessage },
      { status: 500 }
    )
  }
}

// PUT /api/admin/users/[id] - Update user
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  try {
    const body = await request.json()
    const { name, email, phone, role, password } = body

    const updateData: Prisma.UserUpdateInput = {}
    if (name) updateData.name = name
    if (email) updateData.email = email
    if (phone) updateData.phone = phone
    if (role) updateData.role = role
    if (password) {
      updateData.password = await bcrypt.hash(password, 10)
    }

    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true
      }
    })

    return NextResponse.json(user)
  } catch (err: unknown) {
    console.error('Error updating user:', err)
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: 'Failed to update user', error: errorMessage },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/users/[id] - Delete user
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  try {
    // Check if user has active bookings
    const activeBookings = await prisma.booking.count({
      where: {
        userId: id,
        status: { in: ['PENDING', 'CONFIRMED'] }
      }
    })

    if (activeBookings > 0) {
      return NextResponse.json(
        { error: 'Cannot delete user with active bookings' },
        { status: 400 }
      )
    }

    await prisma.user.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (err: unknown) {
    console.error('Error deleting user:', err)
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: 'Failed to delete user', error: errorMessage },
      { status: 500 }
    )
  }
}