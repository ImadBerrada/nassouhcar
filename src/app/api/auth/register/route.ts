import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword, generateToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, password } = await request.json()
    
    // Validate input
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
        { error: 'User already exists with this email' },
        { status: 400 }
      )
    }
    
    // Hash password and create user
    const hashedPassword = await hashPassword(password)
    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true
      }
    })
    
    // Generate token
    const token = generateToken(user.id, user.email, user.role)
    
    return NextResponse.json({
      user,
      token
    }, { status: 201 })
    
  } catch (err: unknown) {
    console.error('Registration error:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Internal server error', message: message },
      { status: 500 }
    )
  }
}