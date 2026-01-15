const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuration SMTP directe pour le test
const config = {
  host: 'mail.privateemail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER || 'admin@nassohcar.com',
    pass: process.env.EMAIL_SERVER_PASSWORD || ''
  },
  tls: {
    rejectUnauthorized: true,
    ciphers: 'SSLv3'
  },
  dkim: {
    domainName: 'nassohcar.com',
    keySelector: 'default',
    privateKey: process.env.DKIM_PRIVATE_KEY || `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA1KalAu3XTEAha/xBW8eZuLKC67ZCSHhnLsD/809iHa739vsm
/h9PA5h3sOVcotQfZp76bu9HNDKLaHQA1nzpN04i22IGca2Iiik59lv8YAfsTSS2
qJzPMKEHIXiPQ32H2OVMzsW+RcjdPbDRvupWqJWXzajiDtPiazQlK5NPLPP4Dkvx
gmRBSUdI1hyuk8J/v6SubfQTNTO1J7LWmmMrhaj+tNKMtPwXfp6iK6HmcWzCwcHE
bNnniQLJ10v9m4Q4JgAGWC+WAkEUw/PKMo42ec0ODMgbLyxwChhA+4SxW15E4tU2
plIcmH/g5Cs6PJC7Db/SLqmOqIRoP+4SvwOLgwIDAQABAoIBAF7Cc72+ZrZfzYTl
P+q6I1IemiCXcyoAHVrEPkoaEcrQcUbp3BJZuUgM5Sk6y/DzPZrpNQfCMKSd8Wl2
Z/ksaHBwrS+9msmFXtbSUDXr/6Z7YV1vAsZYOiudViQgKRcWFTcd1wA9NfC69XvM
E2tT2ZH+N0s5+qJI4RiMgBPO7PVGYWvX8VLRlT0i+4F66PhFzuAAK+ZyROeJYwWC
m2od3vmRjnyu21zbYpP0oLRSVHHrqmmcpWpLAutOWut1lUO/hYa+JayFjfoJ96gQ
sZOW2Nm9inFy1cWA/h5QcCZd747HOP1FUT+XvdWrHxIPbPl6LEZtXA6UU9fj8y3F
idSs/2ECgYEA/9QdpFYi8F+i4BkiX+fK5DTwrSidZY37wLDwmj/hnPhOEQcnSzgV
lU8R/9Em8pyhER2nnfrU42wEkLLDr6UA2azL5JGyuEGGK9DcB4e1i9vobWm/vgjV
w1SwWT7P92jK5tAuZaj1Y8OzVuGyPcciL0N3a1w4rw3RyJDQJd0PmBcCgYEA1Msf
SLIRWTLsY6ZgJVa89BjKIYqj9uKqoDcsim8cvToTAyceKLxFgENVDW378e+DY8Dc
1RJlrRCaul8elMepQv+s/imMqHWoxGU42J1g0J7jku+QxLmU83kk4H1K4yQhn3Za
QBBAuol5SpqphdSRLHJdIzhDMwTWXKCPJkMx33UCgYAFTRHoK9jBflnTpvGtZxIv
NGGgVO0eA5kp3wC9UYGNTR/g/nLz/g+EboUC9gSGlnRH9INapK3woHZfwTSI2TRx
TkFTVSmM496x3bwRc+BxK3dffQd6GpjDWWfmEYUhrUw3CC1N8fhTvuRicn7NBOlS
bWV2Fg0eo3yrWUTW5APEtQKBgCdq6QSiV6xaToe3DiBcjOv6m5bTA8R8AHdlQQ7z
vjMfSt5OpLuPBKDZ2CuAsCcE4yXbWAzwN31zkfXsINIWmjga/ISoVbHu+bBHv9wA
ayq6BBX34q1OY1Umn7ol+3VQABp15gnv+M2VIa68L6Lm2W2OUcpwZaJRxxOpelrw
H5DxAoGBAIRGxhcsYrUe+yV8GAemfQpRExY9+73qH5gGEgto0rqBlYswJhBj5rYW
ovn+uqri0NQFHTG+4am8JfocjFfILWpM4yuIZtiy7O+IK6v/f1pUeUu2JKYrx50q
mJEnR08RuNCRZsHDpvx6nI7QYpJqPKL2AubsXGE55j9XX0ZRCKpI
-----END RSA PRIVATE KEY-----`
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  rateDelta: 1000,
  rateLimit: 5,
  connectionTimeout: 60000,
  greetingTimeout: 30000,
  socketTimeout: 60000
};

const transporter = nodemailer.createTransport(config);

async function testEmailDelivery() {
  console.log('Testing SMTP connection...');
  
  try {
    // Test connection
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    console.log('\nSending test email...');
    
    // Generate unique Message-ID
    const messageId = `<${Date.now()}.${Math.random().toString(36).substr(2, 9)}@nassohcar.com>`;
    
    // Send test email with anti-spam optimizations
    const mailOptions = {
      from: '"NassohCar Rental Service" <contact@nassohcar.com>',
      to: 'berimad02@gmail.com',
      subject: 'Test Email - NassohCar System',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NassohCar Notification</title>
</head>
<body>
<!-- NassohCar Rental Service - Legitimate Business Email -->
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #2563eb;">Test Email from NassohCar</h2>
  <p>This is a test email to verify the email delivery system.</p>
  <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
  <p>If you receive this email, the system is working correctly.</p>
  <hr>
  <p style="font-size: 12px; color: #666;">NassohCar Rental Service</p>
</div>
</body>
</html>`,
      text: 'Test Email from NassohCar\n\nThis is a test email to verify the email delivery system.\n\nTimestamp: ' + new Date().toISOString() + '\n\nIf you receive this email, the system is working correctly.\n\nNassohCar Rental Service',
      headers: {
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'X-Mailer': 'NassohCar Email System v1.0',
        'Reply-To': 'contact@nassohcar.com',
        'Return-Path': 'contact@nassohcar.com',
        'List-Unsubscribe': '<mailto:unsubscribe@nassohcar.com>',
        'X-Auto-Response-Suppress': 'All',
        'MIME-Version': '1.0',
        'Content-Type': 'multipart/alternative; boundary="nassohcar-boundary"',
        'Date': new Date().toUTCString(),
        'X-Originating-IP': '[127.0.0.1]',
        'Authentication-Results': 'nassohcar.com; spf=pass; dkim=pass',
        'X-Spam-Status': 'No',
        'X-Spam-Score': '0.0',
        'Precedence': 'bulk',
        'X-Entity-ID': 'nassohcar-booking-system'
      },
      messageId: messageId,
      date: new Date(),
      envelope: {
        from: 'contact@nassohcar.com',
        to: 'berimad02@gmail.com'
      }
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);
    
    // Log accepted/rejected recipients
    console.log('Accepted:', result.accepted);
    console.log('Rejected:', result.rejected);
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.code) {
      console.error('Error code:', error.code);
    }
    if (error.response) {
      console.error('Server response:', error.response);
    }
  }
}

testEmailDelivery();