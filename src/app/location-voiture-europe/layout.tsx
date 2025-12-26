import type { Metadata } from 'next'
import { generateHreflangLinks } from '../../lib/hreflang-utils'
import { generateCityKeywords } from '../../lib/seo-keywords'

export const metadata: Metadata = {
  title: "Location Voiture Maroc depuis l'Europe - Nassoh Car Tanger",
  description: "Location de voiture au Maroc pour les résidents européens (France, Espagne, Belgique, Allemagne). Service premium à Tanger, livraison aéroport Ibn Battouta et port Med. Réservation en ligne depuis l'Europe.",
  keywords: [...generateCityKeywords('fr', 'Tanger').primary, ...generateCityKeywords('fr', 'Tanger').longTail].join(', ') + ", location voiture europe maroc, louer voiture maroc depuis espagne, location voiture belgique maroc",
  authors: [{ name: "Nassoh Car - Location Voiture Maroc Europe" }],
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
    canonical: 'https://www.nassohcar.com/location-voiture-europe',
    languages: generateHreflangLinks('/location-voiture-europe'),
  },
  openGraph: {
    title: "Location Voiture Maroc depuis l'Europe - Nassoh Car",
    description: "Service de location de voiture au Maroc spécialement conçu pour les résidents européens. Tanger aéroport et port, véhicules premium, service 24/7.",
    url: 'https://www.nassohcar.com/location-voiture-europe',
    siteName: 'Nassoh Car - Location Voiture Maroc Europe',
    images: [
      {
        url: '/og-image-europe.jpg',
        width: 1200,
        height: 630,
        alt: 'Location Voiture Maroc Europe - Nassoh Car Tanger Service Premium',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
    countryName: 'France',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Location Voiture Maroc depuis l'Europe - Nassoh Car",
    description: "Service premium de location voiture Maroc pour résidents européens. Tanger aéroport & port, livraison gratuite, assurance incluse.",
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
    'target-language': 'French',
  },
}

export default function EuropeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
