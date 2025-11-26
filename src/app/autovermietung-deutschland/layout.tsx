import type { Metadata } from 'next'
import { generateCityKeywords } from '../../lib/seo-keywords'
import { generateHreflangLinks } from '../../lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Autovermietung Marokko von Deutschland | Nassoh Car Tanger',
  description: 'Premium Autovermietung in Marokko speziell für deutsche Residenten. Buchen Sie Ihr Fahrzeug in Tanger von Deutschland aus mit Leichtigkeit.',
  keywords: generateCityKeywords('de', 'Tangier', true).join(', '),
  alternates: {
    canonical: 'https://www.nassohcar.com/autovermietung-deutschland',
    languages: {
      'de-DE': 'https://www.nassohcar.com/autovermietung-deutschland',
      'x-default': 'https://www.nassohcar.com/autovermietung-deutschland'
    }
  },
  openGraph: {
    title: 'Autovermietung in Marokko aus Deutschland | Nassoh Car',
    description: 'Premium Autovermietungsservice in Marokko speziell für deutsche Residenten entwickelt. Buchen Sie Ihr Fahrzeug in Tanger aus Deutschland mit Leichtigkeit.',
    url: 'https://nassouhcar.com/autovermietung-deutschland',
    siteName: 'Nassoh Car',
    images: [
      {
        url: '/images/car-rental-germany-morocco.jpg',
        width: 1200,
        height: 630,
        alt: 'Autovermietung Marokko Deutschland'
      }
    ],
    locale: 'de_DE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autovermietung in Marokko aus Deutschland | Nassoh Car',
    description: 'Premium Autovermietungsservice in Marokko speziell für deutsche Residenten entwickelt.',
    images: ['/images/car-rental-germany-morocco.jpg']
  },
  other: {
    'geo.region': 'MA-01',
    'geo.placename': 'Tanger',
    'geo.position': '35.7595;-5.8340'
  }
}

export default function AutovermietungDeutschlandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}