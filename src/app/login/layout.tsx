import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | Nassoh Car - Car Rental Morocco',
  description: 'Login to your Nassoh Car account to manage your car rental bookings in Morocco. Access your dashboard, view reservations, and manage your profile.',
  keywords: 'login, nassoh car, car rental account, morocco car rental login, booking management'
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}