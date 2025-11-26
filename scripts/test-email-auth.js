const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmailAuthentication() {
  console.log('=== Email Authentication Test ===\n');
  
  // Check environment variables
  console.log('Environment Variables:');
  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_PORT:', process.env.SMTP_PORT);
  console.log('SMTP_USER:', process.env.SMTP_USER);
  console.log('SMTP_FROM:', process.env.SMTP_FROM);
  console.log('DKIM_DOMAIN:', process.env.DKIM_DOMAIN);
  console.log('DKIM_SELECTOR:', process.env.DKIM_SELECTOR);
  console.log('DKIM_PRIVATE_KEY present:', !!process.env.DKIM_PRIVATE_KEY);
  console.log('DKIM_PRIVATE_KEY length:', process.env.DKIM_PRIVATE_KEY?.length || 0);
  console.log();
  
  // Test DKIM key format
  if (process.env.DKIM_PRIVATE_KEY) {
    const dkimKey = process.env.DKIM_PRIVATE_KEY.replace(/\\n/g, '\n');
    console.log('DKIM Key Format Check:');
    console.log('Starts with BEGIN:', dkimKey.includes('-----BEGIN'));
    console.log('Ends with END:', dkimKey.includes('-----END'));
    console.log('Contains newlines:', dkimKey.includes('\n'));
    console.log('First 50 chars:', dkimKey.substring(0, 50));
    console.log('Last 50 chars:', dkimKey.substring(dkimKey.length - 50));
    console.log();
  }
  
  // Create transporter with DKIM
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.privateemail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || 'contact@nassohcar.com',
      pass: process.env.SMTP_PASS || ''
    },
    dkim: {
      domainName: process.env.DKIM_DOMAIN || 'nassohcar.com',
      keySelector: process.env.DKIM_SELECTOR || 'default',
      privateKey: process.env.DKIM_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
      headerFieldNames: 'from:to:subject:date:message-id:reply-to',
      skipFields: 'received:comments:keywords:bcc:resent-bcc:resent-to',
      hashAlgo: 'sha256',
      bodyHashAlgo: 'sha256'
    },
    debug: true,
    logger: true
  });
  
  // Test connection
  try {
    console.log('Testing SMTP connection...');
    await transporter.verify();
    console.log('✓ SMTP connection successful\n');
  } catch (error) {
    console.error('✗ SMTP connection failed:', error.message);
    return;
  }
  
  // Send test email
  const testEmail = {
    from: `"NassohCar Test" <${process.env.SMTP_FROM || 'contact@nassohcar.com'}>`,
    to: 'berimad02@gmail.com',
    subject: 'DKIM/SPF Authentication Test - ' + new Date().toISOString(),
    html: `
      <h2>Email Authentication Test</h2>
      <p>This is a test email to verify DKIM and SPF authentication.</p>
      <p>Sent at: ${new Date().toISOString()}</p>
      <p>From IP: 198.54.127.87</p>
      <p>Domain: nassohcar.com</p>
      <p>DKIM Selector: ${process.env.DKIM_SELECTOR}</p>
    `,
    headers: {
      'X-Originating-IP': '[198.54.127.87]',
      'X-Source-IP': '[198.54.127.87]',
      'X-Authenticated-Sender': process.env.SMTP_FROM || 'contact@nassohcar.com'
    }
  };
  
  try {
    console.log('Sending test email...');
    const result = await transporter.sendMail(testEmail);
    console.log('✓ Email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);
    console.log('Accepted:', result.accepted);
    console.log('Rejected:', result.rejected);
  } catch (error) {
    console.error('✗ Email sending failed:');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    console.error('Response:', error.response);
    console.error('Response Code:', error.responseCode);
  }
}

testEmailAuthentication().catch(console.error);