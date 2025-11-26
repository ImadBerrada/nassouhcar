import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      )
    }
    
    const token = authHeader.substring(7)
    
    try {
      const decoded = verifyToken(token)
      
      // Check if decoded is null or doesn't have userId
      if (!decoded || !decoded.userId) {
        return NextResponse.json(
          { error: 'Invalid token' },
          { status: 401 }
        )
      }
      
      // Get user from database
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId }
      })
      
      if (!user) {
        return NextResponse.json(
          { error: 'User not found' },
          { status: 401 }
        )
      }
      
      return NextResponse.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role
        }
      })
      
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unknown error occurred';
      return NextResponse.json(
        { error: 'Invalid token', message: message },
        { status: 401 }
      )
    }
    
  } catch (err: unknown) {
    console.error('Token verification error:', err)
    const message = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'Internal server error', message: message },
      { status: 500 }
    )
  }
}