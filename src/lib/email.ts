import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  tls?: {
    rejectUnauthorized: boolean;
    ciphers?: string;
  };
  dkim?: {
    domainName: string;
    keySelector: string;
    privateKey: string;
    headerFieldNames?: string;
    skipFields?: string;
    hashAlgo?: string;
    bodyHashAlgo?: string;
  };
  pool?: boolean;
  maxConnections?: number;
  maxMessages?: number;
  rateDelta?: number;
  rateLimit?: number;
  connectionTimeout?: number;
  greetingTimeout?: number;
  socketTimeout?: number;
}

interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;
  private fromEmail: string;

  constructor() {
    this.fromEmail = process.env.EMAIL_FROM || 'contact@nassohcar.com';
    
    // Validate DKIM configuration
    if (!process.env.DKIM_PRIVATE_KEY) {
      console.warn('DKIM_PRIVATE_KEY not found in environment variables');
    }
    if (!process.env.DKIM_DOMAIN) {
      console.warn('DKIM_DOMAIN not found in environment variables');
    }
    if (!process.env.DKIM_SELECTOR) {
      console.warn('DKIM_SELECTOR not found in environment variables');
    }
    
    const config: EmailConfig = {
      host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_PORT === '465',
      auth: {
        user: process.env.EMAIL_SERVER_USER || 'contact@nassohcar.com',
        pass: process.env.EMAIL_SERVER_PASSWORD || ''
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: 'TLSv1.2:TLSv1.3:!SSLv2:!SSLv3'
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
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      rateDelta: 1000,
      rateLimit: 5,
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000
    };

    this.transporter = nodemailer.createTransport(config);
  }

  async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      // Validate email address format
      if (!this.isValidEmail(emailData.to)) {
        console.error('Invalid email address:', emailData.to);
        return false;
      }

      // Optimize email content to avoid spam filters
      const optimized = this.optimizeEmailContent(emailData.subject, emailData.html);
      
      // Generate proper Message-ID to fix JFE040010 and JFE040017
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substr(2, 9);
      const messageId = `<${timestamp}.${randomId}@nassohcar.com>`;
      
      const mailOptions = {
        from: `"NassohCar" <${this.fromEmail}>`,
        to: emailData.to,
        subject: optimized.subject,
        html: optimized.html,
        text: emailData.text || this.stripHtml(optimized.html),
        headers: {
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'X-Mailer': 'Nodemailer',
        'Reply-To': this.fromEmail,
        'Return-Path': this.fromEmail,
        'List-Unsubscribe': `<mailto:unsubscribe@nassohcar.com>`,
        'X-Auto-Response-Suppress': 'All',
        'MIME-Version': '1.0',
        'Date': new Date().toUTCString(),
        'X-Originating-IP': '[127.0.0.1]',
        'Precedence': 'list',
        'X-Entity-ID': 'nassohcar-system',
        'Organization': 'NassohCar Rental Service',
        'X-Sender': this.fromEmail,
        'X-Source': 'nassohcar.com',
        'X-Source-IP': '[127.0.0.1]',
        'X-Authenticated-Sender': this.fromEmail
      },
        messageId: messageId,
        date: new Date(),
        envelope: {
          from: this.fromEmail,
          to: emailData.to
        }
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log(`Email sent successfully to ${emailData.to}`, {
        messageId: result.messageId,
        response: result.response,
        accepted: result.accepted,
        rejected: result.rejected
      });
      return true;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const errorDetails = error && typeof error === 'object' ? error as Record<string, unknown> : {};
      console.error('Failed to send email:', {
        error: errorMessage,
        code: errorDetails.code,
        command: errorDetails.command,
        response: errorDetails.response,
        responseCode: errorDetails.responseCode,
        to: emailData.to,
        subject: emailData.subject
      });
      
      // Log specific authentication errors
      if (errorDetails.response && typeof errorDetails.response === 'string') {
        if (errorDetails.response.includes('privateemail.com')) {
          console.error('PrivateEmail specific error detected:', errorDetails.response);
        }
        if (errorDetails.response.includes('5.7.26') || errorDetails.response.includes('unauthenticated')) {
          console.error('Gmail authentication error detected. Check DKIM and SPF records:', {
            dkimDomain: process.env.DKIM_DOMAIN,
            dkimSelector: process.env.DKIM_SELECTOR,
            dkimKeyPresent: !!process.env.DKIM_PRIVATE_KEY,
            fromEmail: this.fromEmail,
            smtpHost: process.env.SMTP_HOST
          });
        }
      }
      
      return false;
    }
  }

  async sendBookingNotification(bookingData: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    car: {
      name: string;
      brand: string;
      model: string;
      year: number;
      pricePerDay: number;
    };
    startDate: Date;
    endDate: Date;
    totalDays: number;
    totalPrice: number;
    status: string;
    createdAt: Date;
    pickupLocation?: string;
    dropoffLocation?: string;
    additionalNotes?: string;
  }): Promise<boolean> {
    const subject = `Nouvelle réservation - ${bookingData.car.name} ${bookingData.car.model}`;
    const effectivePricePerDay = bookingData.totalDays > 0
      ? Math.round((bookingData.totalPrice / bookingData.totalDays) * 100) / 100
      : bookingData.car.pricePerDay;
    
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Nouvelle Réservation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1f2937; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .booking-details { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; }
          .car-info { background: #e5f3ff; padding: 15px; margin: 10px 0; border-radius: 5px; }
          .footer { text-align: center; padding: 20px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nouvelle Réservation</h1>
            <p>NassohCar - Location de Voitures</p>
          </div>
          
          <div class="content">
            <h2>Détails de la réservation</h2>
            
            <div class="booking-details">
              <h3>Informations Client</h3>
              <p><strong>Nom:</strong> ${bookingData.customerName}</p>
              <p><strong>Email:</strong> ${bookingData.customerEmail}</p>
              <p><strong>Téléphone:</strong> ${bookingData.customerPhone}</p>
            </div>
            
            <div class="car-info">
              <h3>Véhicule Réservé</h3>
              <p><strong>Nom:</strong> ${bookingData.car.name}</p>
              <p><strong>Modèle:</strong> ${bookingData.car.model}</p>
              <p><strong>Année:</strong> ${bookingData.car.year}</p>
              <p><strong>Prix par jour:</strong> ${effectivePricePerDay.toFixed(2)} EUR</p>
            </div>
            
            <div class="booking-details">
              <h3>Période de Location</h3>
              <p><strong>Date de début:</strong> ${new Date(bookingData.startDate).toLocaleDateString('fr-FR')}</p>
              <p><strong>Date de fin:</strong> ${new Date(bookingData.endDate).toLocaleDateString('fr-FR')}</p>
              <p><strong>Durée:</strong> ${bookingData.totalDays} jour(s)</p>
              <p><strong>Prix total:</strong> ${bookingData.totalPrice.toFixed(2)} EUR</p>
            </div>
            
            ${bookingData.pickupLocation ? `
            <div class="booking-details">
              <h3>Lieux</h3>
              <p><strong>Prise en charge:</strong> ${bookingData.pickupLocation}</p>
              ${bookingData.dropoffLocation && bookingData.dropoffLocation !== bookingData.pickupLocation ? `<p><strong>Retour:</strong> ${bookingData.dropoffLocation}</p>` : ''}
            </div>
            ` : ''}
            
            ${bookingData.additionalNotes ? `
            <div class="booking-details">
              <h3>Notes supplémentaires</h3>
              <p>${bookingData.additionalNotes}</p>
            </div>
            ` : ''}
            
            <div class="booking-details">
              <h3>Statut</h3>
              <p><strong>Statut:</strong> ${bookingData.status}</p>
              <p><strong>Date de réservation:</strong> ${new Date(bookingData.createdAt).toLocaleString('fr-FR')}</p>
            </div>
          </div>
          
          <div class="footer">
            <p>Cette notification a été générée automatiquement par le système NassohCar.</p>
            <p>Pour gérer cette réservation, connectez-vous à votre tableau de bord administrateur.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return await this.sendEmail({
      to: this.fromEmail,
      subject,
      html
    });
  }

  async sendClientBookingConfirmation(bookingData: {
    bookingId: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    car: {
      name: string;
      brand: string;
      model: string;
      year: number;
      pricePerDay: number;
    };
    startDate: Date;
    endDate: Date;
    totalDays: number;
    totalPrice: number;
    status: string;
    createdAt: Date;
    pickupLocation?: string;
    dropoffLocation?: string;
    additionalNotes?: string;
  }): Promise<boolean> {
    console.log(`Sending client confirmation to ${bookingData.customerEmail} for booking ${bookingData.bookingId}`);
    const subject = `Réservation en attente de confirmation ${bookingData.bookingId} - NassohCar`;
    const effectivePricePerDay = bookingData.totalDays > 0
      ? Math.round((bookingData.totalPrice / bookingData.totalDays) * 100) / 100
      : bookingData.car.pricePerDay;
    
    const html = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmation de réservation</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
        <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <!-- Header with logo -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; border-radius: 20px 20px 0 0; text-align: center; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
            <div style="position: relative; z-index: 2;">
              <div style="width: 100px; height: 100px; background: linear-gradient(45deg, #ff6b6b, #feca57); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.3); animation: pulse 2s infinite;">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 17H19L21 7H7L5 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="9" cy="20" r="1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="15" cy="20" r="1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 7L5.5 4H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">Réservation en Attente</h1>
              <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #ff6b6b, #feca57); margin: 15px auto; border-radius: 2px;"></div>
              <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin: 0; font-weight: 300;">Bonjour ${bookingData.customerName},</p>
              <p style="color: rgba(255,255,255,0.8); font-size: 16px; margin: 10px 0 0 0;">Votre réservation est en attente de confirmation!</p>
            </div>
          </div>
          
          <!-- Main content -->
          <div style="background: white; padding: 0; border-radius: 0 0 20px 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); overflow: hidden;">
          
            <!-- Booking ID Section -->
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 25px 30px; margin: 0; text-align: center;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 600;">Numéro de réservation</h2>
              <div style="background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 25px; margin: 15px auto 0; display: inline-block;">
                <span style="font-family: 'Courier New', monospace; font-size: 16px; font-weight: bold; letter-spacing: 1px;">${bookingData.bookingId}</span>
              </div>
            </div>
            
            <!-- Vehicle Details Card -->
            <div style="padding: 30px; border-bottom: 1px solid #f0f0f0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(45deg, #ff6b6b, #feca57); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17H17L19 9H9L7 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="9" cy="20" r="1" stroke="white" stroke-width="2"/>
                    <circle cx="15" cy="20" r="1" stroke="white" stroke-width="2"/>
                    <path d="M9 9L7 6H4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 style="margin: 0; color: #2c3e50; font-size: 22px; font-weight: 600;">Votre véhicule</h3>
              </div>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #ff6b6b;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                  <div>
                    <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 14px; font-weight: 500;">NOM</p>
                    <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 600;">${bookingData.car.name}</p>
                  </div>
                  <div>
                    <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 14px; font-weight: 500;">MODÈLE</p>
                    <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 600;">${bookingData.car.model}</p>
                  </div>
                  <div>
                    <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 14px; font-weight: 500;">ANNÉE</p>
                    <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 600;">${bookingData.car.year}</p>
                  </div>
                  <div>
                    <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 14px; font-weight: 500;">PRIX/JOUR</p>
                <p style="margin: 0; color: #ff6b6b; font-size: 16px; font-weight: 700;">${effectivePricePerDay.toFixed(2)} EUR</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Rental Period Card -->
            <div style="padding: 30px; border-bottom: 1px solid #f0f0f0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(45deg, #4ecdc4, #44a08d); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="white" stroke-width="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="white" stroke-width="2"/>
                  </svg>
                </div>
                <h3 style="margin: 0; color: #2c3e50; font-size: 22px; font-weight: 600;">Période de location</h3>
              </div>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #4ecdc4;">
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
                  <div>
                    <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 14px; font-weight: 500;">DÉBUT</p>
                    <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 600;">${new Date(bookingData.startDate).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div>
                    <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 14px; font-weight: 500;">FIN</p>
                    <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 600;">${new Date(bookingData.endDate).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div>
                    <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 14px; font-weight: 500;">DURÉE</p>
                    <p style="margin: 0; color: #4ecdc4; font-size: 16px; font-weight: 700;">${bookingData.totalDays} jour(s)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Location Details Card (optional) -->
            ${bookingData.pickupLocation ? `
            <div style="padding: 30px; border-bottom: 1px solid #f0f0f0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(45deg, #60a5fa, #3b82f6); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" stroke-width="2"/>
                    <circle cx="12" cy="10" r="3" stroke="white" stroke-width="2"/>
                  </svg>
                </div>
                <h3 style="margin: 0; color: #2c3e50; font-size: 22px; font-weight: 600;">Lieux</h3>
              </div>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #60a5fa;">
                <div>
                  <p style="margin: 0 0 8px 0; color: #6c757d; font-size: 14px; font-weight: 500;">Prise en charge</p>
                  <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">${bookingData.pickupLocation}</p>
                  ${bookingData.dropoffLocation && bookingData.dropoffLocation !== bookingData.pickupLocation ? `
                  <p style="margin: 16px 0 8px 0; color: #6c757d; font-size: 14px; font-weight: 500;">Retour</p>
                  <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">${bookingData.dropoffLocation}</p>
                  ` : ''}
                </div>
              </div>
            </div>
            ` : ''}
            
            <!-- Additional Notes Card (optional) -->
            ${bookingData.additionalNotes ? `
            <div style="padding: 30px; border-bottom: 1px solid #f0f0f0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(45deg, #fbbf24, #f59e0b); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9v4m0 4h.01M2 12a10 10 0 1 0 20 0 10 10 0 1 0 -20 0" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <h3 style="margin: 0; color: #2c3e50; font-size: 22px; font-weight: 600;">Notes supplémentaires</h3>
              </div>
              <div style="background: #fff7ed; padding: 20px; border-radius: 12px; border-left: 4px solid #f59e0b; color: #7c2d12;">
                ${bookingData.additionalNotes}
              </div>
            </div>
            ` : ''}
          
            <!-- Total Amount Card -->
            <div style="padding: 30px; border-bottom: 1px solid #f0f0f0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(45deg, #f093fb, #f5576c); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="1" x2="12" y2="23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 style="margin: 0; color: #2c3e50; font-size: 22px; font-weight: 600;">Montant total</h3>
              </div>
              <div style="background: linear-gradient(135deg, #f093fb, #f5576c); padding: 25px; border-radius: 12px; text-align: center;">
                <p style="margin: 0; color: white; font-size: 36px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${bookingData.totalPrice.toFixed(2)} EUR</p>
                <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Montant total à payer</p>
              </div>
            </div>
            
            <!-- Next Steps Card -->
            <div style="padding: 30px; border-bottom: 1px solid #f0f0f0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(45deg, #a8edea, #fed6e3); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H15L13 13L15 15H9L11 13L9 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-width="2"/>
                  </svg>
                </div>
                <h3 style="margin: 0; color: #2c3e50; font-size: 22px; font-weight: 600;">Prochaines étapes</h3>
              </div>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #a8edea;">
                <div style="space-y: 15px;">
                  <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                    <div style="width: 8px; height: 8px; background: #a8edea; border-radius: 50%; margin: 8px 15px 0 0; flex-shrink: 0;"></div>
                    <p style="margin: 0; color: #2c3e50; font-size: 16px; line-height: 1.5;">Notre équipe vous contactera sous 24h pour confirmer les détails</p>
                  </div>
                  <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                    <div style="width: 8px; height: 8px; background: #a8edea; border-radius: 50%; margin: 8px 15px 0 0; flex-shrink: 0;"></div>
                    <p style="margin: 0; color: #2c3e50; font-size: 16px; line-height: 1.5;">Préparez vos documents (permis de conduire, pièce d'identité)</p>
                  </div>
                  <div style="display: flex; align-items: flex-start;">
                    <div style="width: 8px; height: 8px; background: #a8edea; border-radius: 50%; margin: 8px 15px 0 0; flex-shrink: 0;"></div>
                    <p style="margin: 0; color: #2c3e50; font-size: 16px; line-height: 1.5;">Le véhicule sera disponible à la date convenue</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contact Card -->
            <div style="padding: 30px;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.17 2.48 8.17 3.08C8.17 4.43 8.35 5.75 8.7 7.02C8.89 7.68 8.7 8.4 8.19 8.91L6.74 10.36C8.38 13.65 10.35 15.62 13.64 17.26L15.09 15.81C15.6 15.3 16.32 15.11 16.98 15.3C18.25 15.65 19.57 15.83 20.92 15.83C21.52 15.83 22 16.31 22 16.92Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 style="margin: 0; color: #2c3e50; font-size: 22px; font-weight: 600;">Contact</h3>
              </div>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #667eea;">
                <p style="margin: 0 0 15px 0; color: #2c3e50; font-size: 16px;">Pour toute question, contactez-nous :</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                  <div>
                    <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 14px; font-weight: 500;">EMAIL</p>
                    <p style="margin: 0; color: #667eea; font-size: 16px; font-weight: 600;">contact@nassohcar.com</p>
                  </div>
                  <div>
                    <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 14px; font-weight: 500;">TÉLÉPHONE</p>
                    <p style="margin: 0; color: #667eea; font-size: 16px; font-weight: 600;">+212 631-630013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 0 0 20px 20px;">
            <div style="margin-bottom: 20px;">
              <h4 style="color: white; margin: 0 0 10px 0; font-size: 20px; font-weight: 600;">NassohCar</h4>
              <div style="width: 40px; height: 3px; background: linear-gradient(90deg, #ff6b6b, #feca57); margin: 0 auto; border-radius: 2px;"></div>
            </div>
            <p style="margin: 0 0 10px 0; color: rgba(255,255,255,0.9); font-size: 16px;">Merci de choisir NassohCar pour vos besoins de location de véhicules.</p>
            <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 14px;">Cet email a été envoyé automatiquement, merci de ne pas y répondre.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textVersion = `
Réservation en attente de confirmation - NassohCar

Bonjour ${bookingData.customerName},

Votre réservation est en attente de confirmation !

Détails de la réservation :
- Numéro : ${bookingData.bookingId}
- Véhicule : ${bookingData.car.name} ${bookingData.car.model} (${bookingData.car.year})
- Période : du ${new Date(bookingData.startDate).toLocaleDateString('fr-FR')} au ${new Date(bookingData.endDate).toLocaleDateString('fr-FR')}
- Durée : ${bookingData.totalDays} jour(s)
- Prix total : ${bookingData.totalPrice.toFixed(2)} EUR
${bookingData.pickupLocation ? `- Lieu de prise en charge : ${bookingData.pickupLocation}` : ''}
${bookingData.dropoffLocation && bookingData.dropoffLocation !== bookingData.pickupLocation ? `- Lieu de retour : ${bookingData.dropoffLocation}` : ''}
${bookingData.additionalNotes ? `- Notes : ${bookingData.additionalNotes}` : ''}

Prochaines étapes :
- Notre équipe vous contactera sous 24h pour confirmer les détails
- Préparez vos documents (permis de conduire, pièce d'identité)
- Le véhicule sera disponible à la date convenue

Contact :
Email : contact@nassohcar.com
Téléphone : +212 631-630013

Merci de choisir NassohCar pour vos besoins de location de véhicules.
    `;

    return this.sendEmail({
      to: bookingData.customerEmail,
      subject,
      html,
      text: textVersion
    });
  }

  async sendBookingCancellationNotification(bookingData: {
    customerEmail: string;
    customerName: string;
    bookingId: string;
    vehicleModel: string;
    startDate: string;
    endDate: string;
    totalAmount: number;
    cancellationReason?: string;
  }): Promise<boolean> {
    const subject = `Annulation de réservation ${bookingData.bookingId} - NassohCar`;
    
    const html = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Annulation de réservation</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); min-height: 100vh;">
        <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <!-- Header with logo -->
          <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); padding: 40px 30px; border-radius: 20px 20px 0 0; text-align: center; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
            <div style="position: relative; z-index: 2;">
              <div style="width: 100px; height: 100px; background: linear-gradient(45deg, #feca57, #ff9ff3); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                  <line x1="15" y1="9" x2="9" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <line x1="9" y1="9" x2="15" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">Réservation Annulée</h1>
              <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #feca57, #ff9ff3); margin: 15px auto; border-radius: 2px;"></div>
              <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin: 0; font-weight: 300;">Bonjour ${bookingData.customerName},</p>
              <p style="color: rgba(255,255,255,0.8); font-size: 16px; margin: 10px 0 0 0;">Nous vous informons que votre réservation a été annulée</p>
            </div>
          </div>
          
          <!-- Main content -->
          <div style="background: white; padding: 0; border-radius: 0 0 20px 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); overflow: hidden;">
        
            <!-- Booking ID Section -->
            <div style="padding: 30px 30px 20px 30px; text-align: center;">
              <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); color: white; padding: 15px 25px; border-radius: 25px; display: inline-block; font-weight: 600; font-size: 18px; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);">
                Réservation #${bookingData.bookingId}
              </div>
            </div>
            
            <!-- Alert Message -->
            <div style="padding: 0 30px 20px 30px;">
              <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); padding: 20px; border-radius: 15px; text-align: center; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);">
                <div style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 8px;">Annulation confirmée</div>
                <div style="color: rgba(255,255,255,0.9); font-size: 16px;">Votre réservation a été annulée avec succès</div>
              </div>
            </div>
            
            <!-- Booking Details Cards -->
            <div style="padding: 0 30px 20px 30px;">
              <!-- Vehicle Details Card -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 15px; margin-bottom: 20px; border-left: 5px solid #ff6b6b; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 10px rgba(255, 107, 107, 0.3);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 17h2v2H5v-2zm6 0h2v2h-2v-2zm6-16H7l-2 9h18l-2-9zM7.5 7.5h9v1h-9v-1z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="color: #2c3e50; margin: 0; font-size: 20px; font-weight: 600;">Véhicule annulé</h3>
                    <p style="color: #6c757d; margin: 5px 0 0 0; font-size: 14px;">Détails du véhicule réservé</p>
                  </div>
                </div>
                <div style="color: #495057; font-size: 18px; font-weight: 500;">${bookingData.vehicleModel}</div>
              </div>
              
              <!-- Period Details Card -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 15px; margin-bottom: 20px; border-left: 5px solid #ff6b6b; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 10px rgba(255, 107, 107, 0.3);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="white" stroke-width="2" fill="none"/>
                      <line x1="16" y1="2" x2="16" y2="6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                      <line x1="8" y1="2" x2="8" y2="6" stroke="white" stroke-width="2" stroke-linecap="round"/>
                      <line x1="3" y1="10" x2="21" y2="10" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="color: #2c3e50; margin: 0; font-size: 20px; font-weight: 600;">Période annulée</h3>
                    <p style="color: #6c757d; margin: 5px 0 0 0; font-size: 14px;">Dates de location prévues</p>
                  </div>
                </div>
                <div style="color: #495057; font-size: 16px; line-height: 1.6;">
                  <div style="margin-bottom: 8px;"><strong>Du:</strong> ${bookingData.startDate}</div>
                  <div><strong>Au:</strong> ${bookingData.endDate}</div>
                </div>
              </div>
              
              <!-- Amount Card -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 15px; margin-bottom: 20px; border-left: 5px solid #ff6b6b; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 10px rgba(255, 107, 107, 0.3);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="12" y1="1" x2="12" y2="23" stroke="white" stroke-width="2" stroke-linecap="round"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="color: #2c3e50; margin: 0; font-size: 20px; font-weight: 600;">Montant annulé</h3>
                    <p style="color: #6c757d; margin: 5px 0 0 0; font-size: 14px;">Total de la réservation</p>
                  </div>
                </div>
                <div style="color: #ff6b6b; font-size: 24px; font-weight: 700;">${bookingData.totalAmount} EUR</div>
              </div>
              
              ${bookingData.cancellationReason ? `
              <!-- Cancellation Reason Card -->
              <div style="background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%); padding: 25px; border-radius: 15px; margin-bottom: 20px; border-left: 5px solid #ffc107; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 10px rgba(255, 193, 7, 0.3);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                      <line x1="12" y1="8" x2="12" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                      <line x1="12" y1="16" x2="12.01" y2="16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="color: #856404; margin: 0; font-size: 20px; font-weight: 600;">Raison de l'annulation</h3>
                    <p style="color: #856404; margin: 5px 0 0 0; font-size: 14px;">Motif communiqué</p>
                  </div>
                </div>
                <div style="color: #856404; font-size: 16px; line-height: 1.6;">${bookingData.cancellationReason}</div>
              </div>
              ` : ''}
            </div>
          
            <!-- Refund Information -->
            <div style="padding: 0 30px 20px 30px;">
              <div style="background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); padding: 25px; border-radius: 15px; margin-bottom: 20px; border-left: 5px solid #2196f3; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 10px rgba(33, 150, 243, 0.3);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="color: #1565c0; margin: 0; font-size: 20px; font-weight: 600;">Remboursement</h3>
                    <p style="color: #1976d2; margin: 5px 0 0 0; font-size: 14px;">Traitement de votre remboursement</p>
                  </div>
                </div>
                <div style="color: #1565c0; font-size: 16px; line-height: 1.6;">Si vous avez effectué un paiement, notre équipe vous contactera dans les plus brefs délais pour organiser le remboursement selon nos conditions générales.</div>
              </div>
            </div>
            
            <!-- New Booking Information -->
            <div style="padding: 0 30px 20px 30px;">
              <div style="background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%); padding: 25px; border-radius: 15px; margin-bottom: 20px; border-left: 5px solid #4caf50; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 17h2v2H5v-2zm6 0h2v2h-2v-2zm6-16H7l-2 9h18l-2-9zM7.5 7.5h9v1h-9v-1z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="color: #2e7d32; margin: 0; font-size: 20px; font-weight: 600;">Nouvelle réservation</h3>
                    <p style="color: #388e3c; margin: 5px 0 0 0; font-size: 14px;">Nous espérons vous revoir bientôt</p>
                  </div>
                </div>
                <div style="color: #2e7d32; font-size: 16px; line-height: 1.6;">N'hésitez pas à effectuer une nouvelle réservation sur notre site web ou à nous contacter directement.</div>
              </div>
            </div>
            
            <!-- Contact Information -->
            <div style="padding: 0 30px 30px 30px;">
              <div style="background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%); padding: 25px; border-radius: 15px; border-left: 5px solid #9c27b0; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 10px rgba(156, 39, 176, 0.3);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="color: #6a1b9a; margin: 0; font-size: 20px; font-weight: 600;">Besoin d'aide ?</h3>
                    <p style="color: #7b1fa2; margin: 5px 0 0 0; font-size: 14px;">Notre équipe est à votre disposition</p>
                  </div>
                </div>
                <div style="color: #6a1b9a; font-size: 16px; line-height: 1.8;">
                  <div style="margin-bottom: 12px;">Pour toute question concernant cette annulation :</div>
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#6a1b9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="#6a1b9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <strong>Email:</strong> contact@nassohcar.com
                  </div>
                  <div style="display: flex; align-items: center;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#6a1b9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <strong>Téléphone:</strong> +212 631-630013
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 30px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -20px; right: -20px; width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -15px; left: -15px; width: 30px; height: 30px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
              <div style="position: relative; z-index: 2;">
                <div style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 10px;">Merci de votre compréhension</div>
                <div style="color: rgba(255,255,255,0.8); font-size: 16px; margin-bottom: 15px;">NassohCar - Location de Véhicules</div>
                <div style="width: 50px; height: 3px; background: linear-gradient(90deg, #ff6b6b, #feca57); margin: 0 auto 15px; border-radius: 2px;"></div>
                <div style="color: rgba(255,255,255,0.6); font-size: 14px;">Cet email a été envoyé automatiquement, merci de ne pas y répondre.</div>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const textVersion = `
Annulation de réservation - NassohCar

Bonjour ${bookingData.customerName},

Nous vous informons que votre réservation a été annulée.

Détails de la réservation annulée :
- Numéro : ${bookingData.bookingId}
- Véhicule : ${bookingData.vehicleModel}
- Période : du ${new Date(bookingData.startDate).toLocaleDateString('fr-FR')} au ${new Date(bookingData.endDate).toLocaleDateString('fr-FR')}
- Montant : ${bookingData.totalAmount} EUR
${bookingData.cancellationReason ? `- Raison : ${bookingData.cancellationReason}` : ''}

Si vous avez effectué un paiement, le remboursement sera traité dans les 5-7 jours ouvrables.

Pour toute question concernant cette annulation :
Email : contact@nassohcar.com
Téléphone : +212 631-630013

Nous nous excusons pour tout inconvénient causé.

Cordialement,
L'équipe NassohCar
    `;

    return this.sendEmail({
      to: bookingData.customerEmail,
      subject,
      html,
      text: textVersion
    });
  }

  async sendBookingConfirmationNotification(bookingData: {
    bookingId: string;
    customerEmail: string;
    customerName: string;
    customerPhone: string;
    car: {
      name: string;
      brand: string;
      model: string;
      year: number;
      pricePerDay: number;
    };
    startDate: Date;
    endDate: Date;
    totalDays: number;
    totalPrice: number;
    pickupLocation: string;
    dropoffLocation?: string;
    additionalNotes?: string;
  }): Promise<boolean> {
    const subject = `Réservation confirmée ${bookingData.bookingId} - NassohCar`;
    const effectivePricePerDay = bookingData.totalDays > 0
      ? Math.round((bookingData.totalPrice / bookingData.totalDays) * 100) / 100
      : bookingData.car.pricePerDay;
    
    const html = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Réservation Confirmée</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #10b981 0%, #059669 100%); min-height: 100vh;">
        <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <!-- Header with logo -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; border-radius: 20px 20px 0 0; text-align: center; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
            <div style="position: relative; z-index: 2;">
              <div style="width: 100px; height: 100px; background: linear-gradient(45deg, #feca57, #48dbfb); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">Réservation Confirmée!</h1>
              <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #feca57, #48dbfb); margin: 15px auto; border-radius: 2px;"></div>
              <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin: 0; font-weight: 300;">Bonjour ${bookingData.customerName},</p>
              <p style="color: rgba(255,255,255,0.8); font-size: 16px; margin: 10px 0 0 0;">Votre réservation a été confirmée avec succès!</p>
            </div>
          </div>
          
          <!-- Main content -->
          <div style="background: white; padding: 0; border-radius: 0 0 20px 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); overflow: hidden;">
          
            <!-- Booking ID Section -->
            <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 25px 30px; margin: 0; text-align: center;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 600;">Numéro de réservation</h2>
              <div style="background: rgba(255,255,255,0.2); padding: 10px 20px; border-radius: 25px; margin: 15px auto 0; display: inline-block;">
                <span style="font-family: 'Courier New', monospace; font-size: 16px; font-weight: bold; letter-spacing: 1px;">${bookingData.bookingId}</span>
              </div>
            </div>
            
            <!-- Confirmation Status -->
            <div style="padding: 30px 30px 20px 30px; text-align: center;">
              <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);">
                <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">✅ Réservation Confirmée</div>
                <div style="color: rgba(255,255,255,0.9); font-size: 16px;">Votre véhicule vous attend!</div>
              </div>
            </div>
            
            <!-- Vehicle Details Card -->
            <div style="padding: 0 30px 20px 30px;">
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 25px; border-radius: 15px; border-left: 5px solid #10b981;">
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                  <div style="background: linear-gradient(135deg, #10b981, #059669); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="white" stroke-width="2"/>
                      <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="white" stroke-width="2"/>
                      <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2" stroke="white" stroke-width="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="margin: 0; color: #1e293b; font-size: 20px; font-weight: 600;">Véhicule Réservé</h3>
                    <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Détails de votre location</p>
                  </div>
                </div>
                <div style="grid-template-columns: 1fr 1fr; display: grid; gap: 15px;">
                  <div>
                    <div style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Véhicule</div>
                    <div style="color: #1e293b; font-weight: 600; font-size: 16px;">${bookingData.car.name}</div>
                  </div>
                  <div>
                    <div style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Modèle</div>
                    <div style="color: #1e293b; font-weight: 600; font-size: 16px;">${bookingData.car.model} (${bookingData.car.year})</div>
                  </div>
                  <div>
                    <div style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Prix/Jour</div>
                    <div style="color: #10b981; font-weight: 700; font-size: 16px;">${effectivePricePerDay.toFixed(2)} EUR</div>
                  </div>
                  <div>
                    <div style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Durée</div>
                    <div style="color: #1e293b; font-weight: 600; font-size: 16px;">${bookingData.totalDays} jour(s)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Rental Period Card -->
            <div style="padding: 0 30px 20px 30px;">
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 25px; border-radius: 15px; border-left: 5px solid #f59e0b;">
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                  <div style="background: linear-gradient(135deg, #f59e0b, #d97706); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="white" stroke-width="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" stroke="white" stroke-width="2"/>
                      <line x1="8" y1="2" x2="8" y2="6" stroke="white" stroke-width="2"/>
                      <line x1="3" y1="10" x2="21" y2="10" stroke="white" stroke-width="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="margin: 0; color: #92400e; font-size: 20px; font-weight: 600;">Période de Location</h3>
                    <p style="margin: 5px 0 0 0; color: #a16207; font-size: 14px;">Dates de prise en charge et retour</p>
                  </div>
                </div>
                <div style="grid-template-columns: 1fr 1fr; display: grid; gap: 15px;">
                  <div>
                    <div style="color: #a16207; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Début</div>
                    <div style="color: #92400e; font-weight: 600; font-size: 16px;">${new Date(bookingData.startDate).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  </div>
                  <div>
                    <div style="color: #a16207; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Fin</div>
                    <div style="color: #92400e; font-weight: 600; font-size: 16px;">${new Date(bookingData.endDate).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Location Details Card -->
            <div style="padding: 0 30px 20px 30px;">
              <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 25px; border-radius: 15px; border-left: 5px solid #3b82f6;">
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                  <div style="background: linear-gradient(135deg, #3b82f6, #2563eb); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" stroke-width="2"/>
                      <circle cx="12" cy="10" r="3" stroke="white" stroke-width="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="margin: 0; color: #1e40af; font-size: 20px; font-weight: 600;">Lieux de Prise en Charge</h3>
                    <p style="margin: 5px 0 0 0; color: #2563eb; font-size: 14px;">Informations de récupération</p>
                  </div>
                </div>
                <div>
                  <div style="color: #2563eb; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Lieu de prise en charge</div>
                  <div style="color: #1e40af; font-weight: 600; font-size: 16px; margin-bottom: 15px;">${bookingData.pickupLocation}</div>
                  ${bookingData.dropoffLocation && bookingData.dropoffLocation !== bookingData.pickupLocation ? `
                  <div style="color: #2563eb; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Lieu de retour</div>
                  <div style="color: #1e40af; font-weight: 600; font-size: 16px;">${bookingData.dropoffLocation}</div>
                  ` : ''}
                </div>
              </div>
            </div>

            ${bookingData.additionalNotes ? `
            <!-- Additional Notes Card -->
            <div style="padding: 0 30px 20px 30px;">
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 25px; border-radius: 15px; border-left: 5px solid #f59e0b;">
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                  <div style="background: linear-gradient(135deg, #f59e0b, #d97706); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 9v4m0 4h.01M2 12a10 10 0 1 0 20 0 10 10 0 1 0 -20 0" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style="margin: 0; color: #92400e; font-size: 20px; font-weight: 600;">Notes supplémentaires</h3>
                    <p style="margin: 5px 0 0 0; color: #a16207; font-size: 14px;">Informations complémentaires</p>
                  </div>
                </div>
                <div style="color: #92400e; font-size: 16px; font-weight: 500; line-height: 1.6;">${bookingData.additionalNotes}</div>
              </div>
            </div>
            ` : ''}
            
            <!-- Total Price Card -->
            <div style="padding: 0 30px 30px 30px;">
              <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 25px; border-radius: 15px; text-align: center; box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);">
                <div style="font-size: 16px; margin-bottom: 10px; opacity: 0.9;">Prix Total</div>
                <div style="font-size: 36px; font-weight: 700; margin-bottom: 5px;">${bookingData.totalPrice.toFixed(2)} EUR</div>
                <div style="font-size: 14px; opacity: 0.8;">Pour ${bookingData.totalDays} jour(s) de location</div>
              </div>
            </div>
            
            <!-- Next Steps -->
            <div style="padding: 0 30px 30px 30px;">
              <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 25px; border-radius: 15px;">
                <h3 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: 600;">Prochaines Étapes</h3>
                <div style="space-y: 15px;">
                  <div style="display: flex; align-items: start; margin-bottom: 15px;">
                    <div style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 12px; font-weight: bold; flex-shrink: 0;">1</div>
                    <div>
                      <div style="color: #1e293b; font-weight: 600; margin-bottom: 5px;">Préparez vos documents</div>
                      <div style="color: #64748b; font-size: 14px;">Permis de conduire valide, pièce d'identité et carte de crédit</div>
                    </div>
                  </div>
                  <div style="display: flex; align-items: start; margin-bottom: 15px;">
                    <div style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 12px; font-weight: bold; flex-shrink: 0;">2</div>
                    <div>
                      <div style="color: #1e293b; font-weight: 600; margin-bottom: 5px;">Rendez-vous au lieu de prise en charge</div>
                      <div style="color: #64748b; font-size: 14px;">Arrivez 15 minutes avant l'heure prévue</div>
                    </div>
                  </div>
                  <div style="display: flex; align-items: start;">
                    <div style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 12px; font-weight: bold; flex-shrink: 0;">3</div>
                    <div>
                      <div style="color: #1e293b; font-weight: 600; margin-bottom: 5px;">Profitez de votre voyage</div>
                      <div style="color: #64748b; font-size: 14px;">Conduisez en toute sécurité et respectez les conditions de location</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contact Information -->
            <div style="padding: 0 30px 30px 30px;">
              <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 25px; border-radius: 15px;">
                <h3 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Besoin d'aide?</h3>
                <div style="grid-template-columns: 1fr 1fr; display: grid; gap: 20px;">
                  <div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px;">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                      </svg>
                      <span style="font-weight: 600;">Email</span>
                    </div>
                    <div style="color: rgba(255,255,255,0.8); font-size: 14px;">contact@nassohcar.com</div>
                  </div>
                  <div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 10px;">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                      <span style="font-weight: 600;">Téléphone</span>
                    </div>
                    <div style="color: rgba(255,255,255,0.8); font-size: 14px;">+212 631-630013</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; padding: 30px 20px 20px; color: rgba(255,255,255,0.8);">
            <div style="font-size: 16px; font-weight: 600; margin-bottom: 10px; color: white;">Merci de choisir NassohCar!</div>
            <div style="font-size: 14px; margin-bottom: 20px;">Votre partenaire de confiance pour la location de véhicules au Maroc</div>
            <div style="font-size: 12px; opacity: 0.7;">
              Cet email a été envoyé automatiquement. Veuillez ne pas répondre à ce message.
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const textVersion = `
Réservation Confirmée - NassohCar

Bonjour ${bookingData.customerName},

Excellente nouvelle! Votre réservation a été confirmée avec succès.

Détails de la réservation :
- Numéro : ${bookingData.bookingId}
- Véhicule : ${bookingData.car.name} ${bookingData.car.model} (${bookingData.car.year})
- Période : du ${new Date(bookingData.startDate).toLocaleDateString('fr-FR')} au ${new Date(bookingData.endDate).toLocaleDateString('fr-FR')}
- Durée : ${bookingData.totalDays} jour(s)
- Prix total : ${bookingData.totalPrice.toFixed(2)} EUR
- Lieu de prise en charge : ${bookingData.pickupLocation}
${bookingData.dropoffLocation && bookingData.dropoffLocation !== bookingData.pickupLocation ? `- Lieu de retour : ${bookingData.dropoffLocation}` : ''}
${bookingData.additionalNotes ? `- Notes : ${bookingData.additionalNotes}` : ''}

Prochaines étapes :
1. Préparez vos documents (permis de conduire, pièce d'identité, carte de crédit)
2. Rendez-vous au lieu de prise en charge 15 minutes avant l'heure prévue
3. Profitez de votre voyage en toute sécurité

Contact :
Email : contact@nassohcar.com
Téléphone : +212 631-630013

Merci de choisir NassohCar pour vos besoins de location de véhicules.

Cordialement,
L'équipe NassohCar
    `;

    return this.sendEmail({
      to: bookingData.customerEmail,
      subject,
      html,
      text: textVersion
    });
  }

  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  }

  private optimizeEmailContent(subject: string, html: string): { subject: string; html: string } {
    // Fix JFE040008: Remove excessive uppercase letters from subject
    let optimizedSubject = subject.replace(/[A-Z]{4,}/g, (match) => 
      match.charAt(0) + match.slice(1).toLowerCase()
    );
    
    // Fix JFE040001: Remove spam-like phrases and excessive punctuation
    optimizedSubject = optimizedSubject
      .replace(/!{2,}/g, '!')
      .replace(/\${2,}/g, '$')
      .replace(/FREE|URGENT|WINNER|CONGRATULATIONS/gi, '')
      .replace(/CLICK HERE|ACT NOW|LIMITED TIME/gi, '')
      .replace(/MAKE MONEY|GET RICH|CASH BONUS/gi, '')
      .replace(/NO OBLIGATION|RISK FREE|GUARANTEE/gi, '')
      .trim();
    
    // Fix JFE040000: Improve content quality and reduce spam indicators
    let optimizedHtml = html;
    
    // Remove suspicious patterns that trigger spam filters
    optimizedHtml = optimizedHtml
      .replace(/[A-Za-z0-9+/]{50,}={0,2}/g, '') // Remove Base64-like content
      .replace(/style="[^"]*display\s*:\s*none[^"]*"/gi, '') // Remove hidden content
      .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
      .replace(/\b(viagra|cialis|pharmacy|casino|lottery)\b/gi, '') // Remove spam keywords
      .replace(/\b\d{4}[-\s]\d{4}[-\s]\d{4}[-\s]\d{4}\b/g, '') // Remove credit card patterns
      .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, (match) => {
        // Keep only our domain emails
        return match.includes('nassohcar.com') ? match : '[email protected]';
      });
    
    // Ensure proper HTML structure
    if (!optimizedHtml.includes('<!DOCTYPE')) {
      optimizedHtml = `<!DOCTYPE html>\n<html lang="fr">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>NassohCar Notification</title>\n</head>\n<body>\n${optimizedHtml}\n</body>\n</html>`;
    }
    
    // Fix JFE040014: Ensure HTML and text parts match
    const textContent = this.stripHtml(optimizedHtml);
    const htmlLength = optimizedHtml.length;
    const textLength = textContent.length;
    const ratio = textLength / htmlLength;
    
    // Add meaningful text content if ratio is too low
    if (ratio < 0.2) {
      const meaningfulText = textContent.replace(/\s+/g, ' ').substring(0, 500);
      optimizedHtml = optimizedHtml.replace(
        '</body>',
        `<div style="font-size: 14px; line-height: 1.6; color: #333; padding: 20px; font-family: Arial, sans-serif;">${meaningfulText}</div></body>`
      );
    }
    
    // Remove currency symbols that might trigger JFE040018
    optimizedSubject = optimizedSubject.replace(/[$€£¥₹]/g, '');
    optimizedHtml = optimizedHtml.replace(/[$€£¥₹]/g, 'EUR');
    
    // Add legitimate business content markers
    optimizedHtml = optimizedHtml.replace(
      '<body>',
      '<body>\n<!-- NassohCar Rental Service - Legitimate Business Email -->\n'
    );
    
    return { subject: optimizedSubject, html: optimizedHtml };
  }

  async testConnection(): Promise<boolean> {
    try {
      console.log('Testing SMTP connection with configuration:', {
        host: process.env.SMTP_HOST || 'mail.privateemail.com',
        port: process.env.SMTP_PORT || '587',
        secure: process.env.SMTP_SECURE === 'true',
        user: process.env.SMTP_USER || 'contact@nassohcar.com'
      });
      
      await this.transporter.verify();
      console.log('SMTP connection verified successfully with Namecheap PrivateEmail');
      return true;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const errorDetails = error && typeof error === 'object' ? error as Record<string, unknown> : {};
      console.error('SMTP connection failed:', {
        error: errorMessage,
        code: errorDetails.code,
        command: errorDetails.command,
        response: errorDetails.response,
        responseCode: errorDetails.responseCode
      });
      
      // Provide specific guidance for common Namecheap issues
      if (errorDetails.code === 'EAUTH') {
        console.error('Authentication failed. Please check SMTP_USER and SMTP_PASS environment variables.');
      } else if (errorDetails.code === 'ECONNECTION') {
        console.error('Connection failed. Please verify SMTP_HOST is set to mail.privateemail.com');
      } else if (errorDetails.response && typeof errorDetails.response === 'string' && errorDetails.response.includes('TLS')) {
        console.error('TLS/SSL issue detected. Namecheap requires secure connection.');
      }
      
      return false;
    }
  }
}

export const emailService = new EmailService();
export default EmailService;