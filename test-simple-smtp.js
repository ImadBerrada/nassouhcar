const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Testing simple SMTP connection without DKIM...');
console.log('Host:', process.env.EMAIL_SERVER_HOST);
console.log('Port:', process.env.EMAIL_SERVER_PORT);
console.log('User:', process.env.EMAIL_SERVER_USER);
console.log('Password set:', process.env.EMAIL_SERVER_PASSWORD ? 'Yes' : 'No');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT),
  secure: process.env.EMAIL_SERVER_PORT === '465',
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD
  },
  tls: {
    rejectUnauthorized: false // Try with less strict TLS
  }
});

// Test connection
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ SMTP connection failed:');
    console.log(error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Authentication Error Solutions:');
      console.log('1. Double-check email and password in .env file');
      console.log('2. Try logging into webmail with these credentials');
      console.log('3. Contact hosting provider about SMTP authentication');
      console.log('4. Check if account requires special SMTP password');
    }
  } else {
    console.log('✅ SMTP connection successful!');
    
    // Try sending a test email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM, // Send to self
      subject: 'SMTP Test - Simple Configuration',
      text: 'This is a test email to verify SMTP configuration without DKIM.',
      html: '<p>This is a test email to verify SMTP configuration without DKIM.</p>'
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('❌ Email sending failed:');
        console.log(error.message);
      } else {
        console.log('✅ Test email sent successfully!');
        console.log('Message ID:', info.messageId);
      }
    });
  }
});