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

// GET /api/admin/contacts/[id] - Get specific contact message
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
    const contact = await prisma.contactMessage.findUnique({
      where: { id }
    })

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact message not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(contact)
  } catch (err: unknown) {
    console.error('Error fetching contact message:', err)
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: 'Failed to fetch contact message', error: errorMessage },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/contacts/[id] - Delete contact message
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const verification = await verifyAdminAccess(request)
  if (verification.error) {
    return NextResponse.json({ error: verification.error }, { status: verification.status })
  }

  const { id } = await params

  try {
    await prisma.contactMessage.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Contact message deleted successfully' })
  } catch (err: unknown) {
    console.error('Error deleting contact message:', err)
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { message: 'Failed to delete contact message', error: errorMessage },
      { status: 500 }
    )
  }
}