const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmailConfig() {
  console.log('Testing email configuration...');
  console.log('Host:', process.env.EMAIL_SERVER_HOST);
  console.log('Port:', process.env.EMAIL_SERVER_PORT);
  console.log('User:', process.env.EMAIL_SERVER_USER);
  console.log('Password set:', process.env.EMAIL_SERVER_PASSWORD ? 'Yes' : 'No');
  
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    // Send test email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER, // Send to self for testing
      subject: 'Test Email - NassohCar Configuration',
      text: 'This is a test email to verify the email configuration is working correctly.',
      html: '<p>This is a test email to verify the email configuration is working correctly.</p>'
    });
    
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ Email configuration error:');
    console.error(error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Authentication failed. Please check:');
      console.log('1. Verify the email address and password are correct');
      console.log('2. Contact your hosting provider to confirm SMTP settings');
      console.log('3. Check if the email account exists and is properly configured');
      console.log('4. Ensure the hosting provider allows SMTP authentication');
    }
  }
}

testEmailConfig();