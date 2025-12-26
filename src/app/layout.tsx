import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CriticalCSS from "@/components/CriticalCSS"
import { AuthProvider } from "@/contexts/AuthContext"
import { BookingProvider } from "@/contexts/BookingContext"
import LayoutWrapper from "@/components/LayoutWrapper"
import { metadata as siteMetadata } from './metadata'

export const metadata = siteMetadata

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
  // Default language
  const defaultLang = 'fr';

  return (
    <html lang={defaultLang}>
      <head>
        <link rel="icon" href="/nassouhe.png" type="image/png"  />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
        <CriticalCSS />
        <AuthProvider>
          <BookingProvider>
            <LayoutWrapper header={<Header />} footer={<Footer />}>
              {children}
            </LayoutWrapper>
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
