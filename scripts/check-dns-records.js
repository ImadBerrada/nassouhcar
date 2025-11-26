const dns = require('dns').promises;

async function checkDNSRecords() {
  console.log('=== DNS Records Check for nassohcar.com ===\n');
  
  const domain = 'nassohcar.com';
  
  try {
    // Check SPF record
    console.log('1. Checking SPF record...');
    try {
      const spfRecords = await dns.resolveTxt(domain);
      const spfRecord = spfRecords.find(record => 
        record.join('').includes('v=spf1')
      );
      
      if (spfRecord) {
        console.log('✓ SPF record found:', spfRecord.join(''));
      } else {
        console.log('✗ No SPF record found');
      }
    } catch (error) {
      console.log('✗ SPF record lookup failed:', error.message);
    }
    
    // Check DKIM record
    console.log('\n2. Checking DKIM record...');
    try {
      const dkimDomain = 'default._domainkey.' + domain;
      const dkimRecords = await dns.resolveTxt(dkimDomain);
      const dkimRecord = dkimRecords.find(record => 
        record.join('').includes('v=DKIM1')
      );
      
      if (dkimRecord) {
        console.log('✓ DKIM record found:', dkimRecord.join('').substring(0, 100) + '...');
      } else {
        console.log('✗ No DKIM record found');
      }
    } catch (error) {
      console.log('✗ DKIM record lookup failed:', error.message);
    }
    
    // Check DMARC record
    console.log('\n3. Checking DMARC record...');
    try {
      const dmarcDomain = '_dmarc.' + domain;
      const dmarcRecords = await dns.resolveTxt(dmarcDomain);
      const dmarcRecord = dmarcRecords.find(record => 
        record.join('').includes('v=DMARC1')
      );
      
      if (dmarcRecord) {
        console.log('✓ DMARC record found:', dmarcRecord.join(''));
      } else {
        console.log('✗ No DMARC record found');
      }
    } catch (error) {
      console.log('✗ DMARC record lookup failed:', error.message);
    }
    
    // Check MX records
    console.log('\n4. Checking MX records...');
    try {
      const mxRecords = await dns.resolveMx(domain);
      if (mxRecords.length > 0) {
        console.log('✓ MX records found:');
        mxRecords.forEach(mx => {
          console.log(`  Priority ${mx.priority}: ${mx.exchange}`);
        });
      } else {
        console.log('✗ No MX records found');
      }
    } catch (error) {
      console.log('✗ MX record lookup failed:', error.message);
    }
    
    // Check A record
    console.log('\n5. Checking A record...');
    try {
      const aRecords = await dns.resolve4(domain);
      if (aRecords.length > 0) {
        console.log('✓ A records found:', aRecords.join(', '));
      } else {
        console.log('✗ No A records found');
      }
    } catch (error) {
      console.log('✗ A record lookup failed:', error.message);
    }
    
    // Check PTR record for the SMTP IP
    console.log('\n6. Checking PTR record for 198.54.127.87...');
    try {
      const ptrRecords = await dns.reverse('198.54.127.87');
      if (ptrRecords.length > 0) {
        console.log('✓ PTR records found:', ptrRecords.join(', '));
      } else {
        console.log('✗ No PTR records found');
      }
    } catch (error) {
      console.log('✗ PTR record lookup failed:', error.message);
    }
    
  } catch (error) {
    console.error('DNS lookup error:', error);
  }
  
  console.log('\n=== Summary ===');
  console.log('For Gmail authentication to work, you need:');
  console.log('1. SPF record: v=spf1 include:privateemail.com ip4:198.54.127.78 ip4:198.54.127.87 ~all');
  console.log('2. DKIM record: v=DKIM1;k=rsa;p=<your-public-key>');
  console.log('3. DMARC record: v=DMARC1; p=quarantine; rua=mailto:dmarc@nassohcar.com');
  console.log('\nThese records must be added to your DNS provider (not just in .env file)');
}

checkDNSRecords().catch(console.error);