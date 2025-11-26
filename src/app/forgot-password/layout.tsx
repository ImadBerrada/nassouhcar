import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Your Password | Nassoh Car - Secure Password Recovery',
  description: 'Forgot your Nassoh Car account password? Reset it securely in minutes. Enter your email to receive a password reset link and regain access to your car rental bookings and account.',
  keywords: 'forgot password, password reset, account recovery, Nassoh Car login, secure password recovery, email verification, account access',
  openGraph: {
    title: 'Reset Your Password | Nassoh Car',
    description: 'Forgot your password? Reset it securely and regain access to your Nassoh Car account.',
    type: 'website',
    url: 'https://www.nassohcar.com/forgot-password',
    siteName: 'Nassoh Car',
    images: [
      {
        url: 'https://www.nassohcar.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nassoh Car - Password Reset'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reset Your Password | Nassoh Car',
    description: 'Forgot your password? Reset it securely and regain access to your Nassoh Car account.',
    images: ['https://www.nassohcar.com/logo.png']
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/forgot-password'
  },
  robots: {
    index: false,
    follow: true
  }
}

type Props = {
  children: React.ReactNode
}

export default function ForgotPasswordLayout({ children }: Props) {
  return children
}