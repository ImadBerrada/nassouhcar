import { NextResponse } from 'next/server'
import { emailService } from '@/lib/email'

export async function POST() {
  try {
    // Test email configuration
    const testResult = await emailService.testConnection()
    
    if (!testResult) {
      return NextResponse.json(
        { error: 'SMTP connection failed' },
        { status: 500 }
      )
    }

    // Send test booking notification
    const testBookingData = {
      customerName: 'Test Customer',
      customerEmail: 'test@example.com',
      customerPhone: '+212 6 12 34 56 78',
      car: {
        name: 'Toyota Corolla Premium',
        brand: 'Toyota',
        model: 'Corolla',
        year: 2023,
        pricePerDay: 300
      },
      startDate: new Date('2024-02-01'),
      endDate: new Date('2024-02-05'),
      totalDays: 4,
      totalPrice: 1200,
      status: 'PENDING',
      createdAt: new Date()
    }

    const emailSent = await emailService.sendBookingNotification(testBookingData)
    
    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: 'Test email sent successfully to contact@nassohcar.com'
      })
    } else {
      return NextResponse.json(
        { error: 'Failed to send test email' },
        { status: 500 }
      )
    }
    
  } catch (error) {
    console.error('Test email error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}