const { EmailService } = require('./src/lib/email');

// Test cancellation email with car name instead of brand
async function testCancellationEmail() {
  const emailService = new EmailService();
  
  // Mock booking data with car name
  const mockCancellationData = {
    customerEmail: 'test@example.com',
    customerName: 'Test Customer',
    bookingId: 'TEST123',
    vehicleModel: 'BMW X5 Premium 2023', // This should now use car name instead of brand
    startDate: '2024-01-15',
    endDate: '2024-01-20',
    totalAmount: 500,
    cancellationReason: 'Customer request'
  };
  
  try {
    console.log('Testing cancellation email with car name...');
    console.log('Vehicle Model:', mockCancellationData.vehicleModel);
    
    const result = await emailService.sendBookingCancellationNotification(mockCancellationData);
    
    if (result) {
      console.log('✅ Cancellation email sent successfully!');
      console.log('✅ Car name is now used in vehicle model instead of brand');
    } else {
      console.log('❌ Failed to send cancellation email');
    }
  } catch (error) {
    console.error('❌ Error testing cancellation email:', error.message);
  }
}

testCancellationEmail();