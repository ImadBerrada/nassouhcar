import CriticalCSS from '@/app/es/components/CriticalCSS'
import Header from '@/app/es/components/Header'
import Footer from '@/app/es/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'
import { BookingProvider } from '@/contexts/BookingContext'

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CriticalCSS />
      <AuthProvider>
        <BookingProvider>
          <Header />
          {children}
          <Footer />
        </BookingProvider>
      </AuthProvider>
    </>
  )
}
