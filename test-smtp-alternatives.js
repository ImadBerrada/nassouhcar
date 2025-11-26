const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Testing alternative SMTP configurations...');
console.log('Host:', process.env.EMAIL_SERVER_HOST);
console.log('User:', process.env.EMAIL_SERVER_USER);
console.log('Password set:', process.env.EMAIL_SERVER_PASSWORD ? 'Yes' : 'No');

// Configuration 1: Standard STARTTLS on port 587
console.log('\n=== Testing Configuration 1: Port 587 with STARTTLS ===');
const config1 = {
  host: process.env.EMAIL_SERVER_HOST,
  port: 587,
  secure: false, // Use STARTTLS
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'SSLv3'
  }
};

const transporter1 = nodemailer.createTransport(config1);
transporter1.verify((error, success) => {
  if (error) {
    console.log('❌ Config 1 failed:', error.message);
  } else {
    console.log('✅ Config 1 successful!');
  }
  
  // Configuration 2: SSL on port 465
  console.log('\n=== Testing Configuration 2: Port 465 with SSL ===');
  const config2 = {
    host: process.env.EMAIL_SERVER_HOST,
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  };
  
  const transporter2 = nodemailer.createTransport(config2);
  transporter2.verify((error, success) => {
    if (error) {
      console.log('❌ Config 2 failed:', error.message);
    } else {
      console.log('✅ Config 2 successful!');
    }
    
    // Configuration 3: Alternative port 25
    console.log('\n=== Testing Configuration 3: Port 25 ===');
    const config3 = {
      host: process.env.EMAIL_SERVER_HOST,
      port: 25,
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    };
    
    const transporter3 = nodemailer.createTransport(config3);
    transporter3.verify((error, success) => {
      if (error) {
        console.log('❌ Config 3 failed:', error.message);
      } else {
        console.log('✅ Config 3 successful!');
      }
      
      console.log('\n=== Summary ===');
      console.log('If all configurations failed with "535 Incorrect authentication data":');
      console.log('1. The email address or password is incorrect');
      console.log('2. The email account may not exist on the server');
      console.log('3. SMTP authentication may be disabled for this account');
      console.log('4. The hosting provider may require a different username format');
      console.log('5. Contact your hosting provider for correct SMTP settings');
    });
  });
});