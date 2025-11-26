import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CriticalCSS from "@/components/CriticalCSS"
import { AuthProvider } from "@/contexts/AuthContext"
import { BookingProvider } from "@/contexts/BookingContext"
import { metadata as siteMetadata, viewport as siteViewport } from './metadata'

export const metadata = siteMetadata
export const viewport = siteViewport

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Detect language from URL path for international service pages
  const getLangFromPath = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      
      // Check for international service pages
      if (path.includes('/noleggio-auto-italia')) return 'it';
      if (path.includes('/autovermietung-deutschland')) return 'de';
      if (path.includes('/alquiler-coches-espana')) return 'es';
      if (path.includes('/location-voiture-france')) return 'fr';
    }
    
    return 'fr'; // default language for all other pages
  };

  return (
    <html lang={getLangFromPath()}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5SN9GDD8');`}
        </Script>
        {/* End Google Tag Manager */}
        
        <link rel="icon" href="/nassouhe.png" type="image/png"  />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.gtranslate.net" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <Script id="gtranslate-config" strategy="afterInteractive">
          {`window.gtranslateSettings = {"default_language":"fr","languages":["en","fr","es","ar"],"wrapper_selector":".gtranslate_wrapper","flag_size":48}`}
        </Script>
        <Script src="https://cdn.gtranslate.net/widgets/latest/flags.js" strategy="lazyOnload" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SN9GDD8"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <CriticalCSS />
        <AuthProvider>
          <BookingProvider>
            <Header />
            {children}
            <Footer />
            {/* GTranslate Widget - Fixed position like the old widget */}
            <div className="gtranslate_wrapper hidden lg:block" style={{ position: 'fixed', top: '80px', right: '20px', zIndex: 1000 }}></div>
            {/* GTranslate Widget - Mobile version - Bottom left */}
            <div className="gtranslate_wrapper lg:hidden" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}></div>
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
