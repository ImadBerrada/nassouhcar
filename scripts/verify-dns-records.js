const dns = require('dns').promises;

// Configuration
const DOMAIN = 'nassohcar.com';
const EXPECTED_DKIM_KEY = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1KalAu3XTEAha/xBW8eZuLKC67ZCSHhnLsD/809iHa739vsm/h9PA5h3sOVcotQfZp76bu9HNDKLaHQA1nzpN04i22IGca2Iiik59lv8YAfsTSS2qJzPMKEHIXiPQ32H2OVMzsW+RcjdPbDRvupWqJWXzajiDtPiazQlK5NPLPP4DkvxgmRBSUdI1hyuk8J/v6SubfQTNTO1J7LWmmMrhaj+tNKMtPwXfp6iK6HmcWzCwcHEbNnniQLJ10v9m4Q4JgAGWC+WAkEUw/PKMo42ec0ODMgbLyxwChhA+4SxW15E4tU2plIcmH/g5Cs6PJC7Db/SLqmOqIRoP+4SvwOLgwIDAQAB';
const EXPECTED_SPF = 'v=spf1 include:privateemail.com ip4:198.54.127.78 ip4:198.54.127.87 ~all';
const EXPECTED_DMARC = 'v=DMARC1; p=quarantine; rua=mailto:contact@nassohcar.com';

async function checkDNSRecords() {
    console.log('🔍 Vérification des enregistrements DNS pour', DOMAIN);
    console.log('=' .repeat(60));
    
    try {
        // 1. Vérifier l'enregistrement SPF
        console.log('\n📧 Vérification de l\'enregistrement SPF...');
        try {
            const spfRecords = await dns.resolveTxt(DOMAIN);
            const spfRecord = spfRecords.find(record => 
                record.join('').startsWith('v=spf1')
            );
            
            if (spfRecord) {
                const spfValue = spfRecord.join('');
                console.log('✅ Enregistrement SPF trouvé:', spfValue);
                
                if (spfValue.includes('198.54.127.87') && spfValue.includes('198.54.127.78')) {
                    console.log('✅ Les adresses IP SMTP sont incluses dans SPF');
                } else {
                    console.log('❌ Les adresses IP SMTP ne sont PAS incluses dans SPF');
                    console.log('   Attendu:', EXPECTED_SPF);
                }
            } else {
                console.log('❌ Aucun enregistrement SPF trouvé');
                console.log('   Vous devez ajouter:', EXPECTED_SPF);
            }
        } catch (error) {
            console.log('❌ Erreur lors de la vérification SPF:', error.message);
        }
        
        // 2. Vérifier l'enregistrement DKIM
        console.log('\n🔐 Vérification de l\'enregistrement DKIM...');
        try {
            const dkimDomain = 'default._domainkey.' + DOMAIN;
            const dkimRecords = await dns.resolveTxt(dkimDomain);
            const dkimRecord = dkimRecords.find(record => 
                record.join('').includes('v=DKIM1')
            );
            
            if (dkimRecord) {
                const dkimValue = dkimRecord.join('');
                console.log('✅ Enregistrement DKIM trouvé:', dkimValue.substring(0, 100) + '...');
                
                if (dkimValue.includes(EXPECTED_DKIM_KEY)) {
                    console.log('✅ La clé publique DKIM correspond');
                } else {
                    console.log('❌ La clé publique DKIM ne correspond PAS');
                    console.log('   Vérifiez que l\'enregistrement contient la bonne clé publique');
                }
            } else {
                console.log('❌ Aucun enregistrement DKIM trouvé');
                console.log('   Vous devez ajouter l\'enregistrement DKIM pour default._domainkey.' + DOMAIN);
            }
        } catch (error) {
            console.log('❌ Erreur lors de la vérification DKIM:', error.message);
        }
        
        // 3. Vérifier l'enregistrement DMARC
        console.log('\n🛡️ Vérification de l\'enregistrement DMARC...');
        try {
            const dmarcDomain = '_dmarc.' + DOMAIN;
            const dmarcRecords = await dns.resolveTxt(dmarcDomain);
            const dmarcRecord = dmarcRecords.find(record => 
                record.join('').startsWith('v=DMARC1')
            );
            
            if (dmarcRecord) {
                const dmarcValue = dmarcRecord.join('');
                console.log('✅ Enregistrement DMARC trouvé:', dmarcValue);
            } else {
                console.log('❌ Aucun enregistrement DMARC trouvé');
                console.log('   Vous devez ajouter:', EXPECTED_DMARC);
            }
        } catch (error) {
            console.log('❌ Erreur lors de la vérification DMARC:', error.message);
        }
        
        // 4. Vérifier l'enregistrement PTR pour l'IP
        console.log('\n🔄 Vérification de l\'enregistrement PTR pour 198.54.127.87...');
        try {
            const ptrRecords = await dns.reverse('198.54.127.87');
            console.log('✅ Enregistrement PTR trouvé:', ptrRecords.join(', '));
        } catch (error) {
            console.log('❌ Erreur lors de la vérification PTR:', error.message);
        }
        
        console.log('\n' + '=' .repeat(60));
        console.log('📋 RÉSUMÉ:');
        console.log('Pour corriger l\'erreur Gmail 5.7.26, assurez-vous que:');
        console.log('1. L\'enregistrement SPF inclut les IP 198.54.127.78 et 198.54.127.87');
        console.log('2. L\'enregistrement DKIM est correctement configuré avec la bonne clé');
        console.log('3. L\'enregistrement DMARC est présent');
        console.log('4. La propagation DNS est terminée (peut prendre jusqu\'à 48h)');
        
    } catch (error) {
        console.error('❌ Erreur générale:', error.message);
    }
}

// Exécuter la vérification
checkDNSRecords().catch(console.error);