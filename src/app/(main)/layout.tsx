import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CriticalCSS from "@/components/CriticalCSS"
import { AuthProvider } from "@/contexts/AuthContext"
import { BookingProvider } from "@/contexts/BookingContext"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
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
    </>
  )
}
