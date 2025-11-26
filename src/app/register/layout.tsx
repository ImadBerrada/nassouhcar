import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register | Nassoh Car - Create Your Account',
  description: 'Create your Nassoh Car account to book économique car rentals in Morocco. Quick registration, instant booking access, and exclusive member benefits.',
  keywords: 'register nassoh car, create account, car rental registration, morocco car rental signup, booking account',
  alternates: {
    canonical: 'https://www.nassohcar.com/register'
  }
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}