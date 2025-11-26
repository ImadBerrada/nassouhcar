import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Nassoh Car - Car Rental Morocco',
  description: 'Contact Nassoh Car for car rental inquiries in Morocco. 24/7 support, instant booking, and personalized service in Tangier, Tetouan, and across Morocco.',
  keywords: 'contact nassoh car, car rental support, morocco car rental contact, tangier car rental, tetouan car rental, customer service',
  alternates: {
    canonical: 'https://www.nassohcar.com/contact'
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}