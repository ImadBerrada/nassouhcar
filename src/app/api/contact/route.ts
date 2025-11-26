import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()
    
    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      )
    }
    
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        subject,
        message
      }
    })
    
    return NextResponse.json(
      { message: 'Message sent successfully', id: contactMessage.id },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}