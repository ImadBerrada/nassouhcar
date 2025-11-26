import type { Metadata } from 'next'
import { generateHreflangLinks } from '../../lib/hreflang-utils'
import { generateCityKeywords } from '../../lib/seo-keywords'

export const metadata: Metadata = {
  title: "Location Voiture Maroc depuis la France - Nassoh Car Tanger",
  description: "Location de voiture au Maroc pour les résidents français. Service premium à Tanger, livraison aéroport Ibn Battouta et port Med. Réservation en ligne depuis la France.",
  keywords: generateCityKeywords('fr', 'Tanger', true).join(', '),
  authors: [{ name: "Nassoh Car - Location Voiture Maroc France" }],
  creator: "Nassoh Car",
  publisher: "Nassoh Car - Car Rental Morocco France",
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
    canonical: 'https://www.nassohcar.com/location-voiture-france',
    languages: generateHreflangLinks('/location-voiture-france'),
  },
  openGraph: {
    title: "Location Voiture Maroc depuis la France - Nassoh Car",
    description: "Service de location de voiture au Maroc spécialement conçu pour les résidents français. Tanger aéroport et port, véhicules premium, service 24/7.",
    url: 'https://www.nassohcar.com/location-voiture-france',
    siteName: 'Nassoh Car - Location Voiture Maroc France',
    images: [
      {
        url: '/og-image-france.jpg',
        width: 1200,
        height: 630,
        alt: 'Location Voiture Maroc France - Nassoh Car Tanger Service Premium',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
    countryName: 'France',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Location Voiture Maroc depuis la France - Nassoh Car",
    description: "Service premium de location voiture Maroc pour résidents français. Tanger aéroport & port, livraison gratuite, assurance incluse.",
    images: ['/twitter-image-france.jpg'],
    creator: '@nassouhcar',
    site: '@nassouhcar',
  },
  other: {
    'geo.region': 'MA-01',
    'geo.placename': 'Tangier',
    'geo.position': '35.7595;-5.8340',
    'ICBM': '35.7595, -5.8340',
    'target-country': 'France',
    'target-language': 'French',
  },
}

export default function FranceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}