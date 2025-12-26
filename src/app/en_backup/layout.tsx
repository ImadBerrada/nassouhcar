import CriticalCSS from '@/app/en/components/CriticalCSS'
import Header from '@/app/en/components/Header'
import Footer from '@/app/en/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'
import { BookingProvider } from '@/contexts/BookingContext'

export default function EnLayout({ children }: { children: React.ReactNode }) {
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
