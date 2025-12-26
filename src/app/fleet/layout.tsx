import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Fleet | Nassoh Car - Premium Car Rental Morocco',
  description: 'Explore our premium car rental fleet in Morocco. Economy cars, SUVs, luxury vehicles, and 7-seaters available in Tangier, Tetouan with competitive prices.',
  keywords: 'car rental fleet morocco, nassoh car vehicles, tangier car rental, tetouan car rental, economy cars, luxury cars, SUV rental morocco'
}

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}