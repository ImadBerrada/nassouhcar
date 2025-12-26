import type { Metadata } from 'next'
import { generateHreflangLinks } from '../../../lib/hreflang-utils'
import { generateCityKeywords } from '../../../lib/seo-keywords'

export const metadata: Metadata = {
  title: "Car Rental Morocco from Europe - Nassoh Car Tangier",
  description: "Car rental in Morocco for European residents (France, Spain, Belgium, Germany). Premium service in Tangier, delivery to Ibn Battouta airport and Med port. Online booking from Europe.",
  keywords: [...generateCityKeywords('en', 'Tangier').primary, ...generateCityKeywords('en', 'Tangier').longTail].join(', ') + ", car rental europe morocco, rent car morocco from spain, car rental belgium morocco",
  authors: [{ name: "Nassoh Car - Car Rental Morocco Europe" }],
  creator: "Nassoh Car",
  publisher: "Nassoh Car - Car Rental Morocco Europe",
  category: "Car Rental Services",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/en/car-rental-europe',
    languages: generateHreflangLinks('/en/car-rental-europe'),
  },
  openGraph: {
    title: "Car Rental Morocco from Europe - Nassoh Car",
    description: "Car rental service in Morocco specially designed for European residents. Tangier airport and port, premium vehicles, 24/7 service.",
    url: 'https://www.nassohcar.com/en/car-rental-europe',
    siteName: 'Nassoh Car - Car Rental Morocco Europe',
    images: [
      {
        url: '/og-image-europe.jpg',
        width: 1200,
        height: 630,
        alt: 'Car Rental Morocco Europe - Nassoh Car Tangier Premium Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Car Rental Morocco from Europe - Nassoh Car",
    description: "Premium car rental service Morocco for European residents. Tangier airport & port, free delivery, insurance included.",
    images: ['/twitter-image-europe.jpg'],
    creator: '@nassouhcar',
    site: '@nassouhcar',
  },
  other: {
    'geo.region': 'MA-01',
    'geo.placename': 'Tangier',
    'geo.position': '35.7595;-5.8340',
    'ICBM': '35.7595, -5.8340',
    'target-country': 'Europe',
    'target-language': 'English',
  },
}

export default function EuropeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
