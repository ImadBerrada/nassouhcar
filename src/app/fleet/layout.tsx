import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger - Flotte Économique | Nassoh Car',
  description: 'Découvrez notre flotte économique de location de voiture à Tanger. Véhicules abordables, SUV, voitures familiales disponibles à l\'aéroport Ibn Battouta, Port Tanger Med et centre-ville.',
  keywords: 'location voiture tanger, flotte nassoh car, voiture tanger aéroport, location auto maroc, véhicule tanger port, car rental tangier fleet',
  authors: [{ name: 'Nassoh Car' }],
  creator: 'Nassoh Car',
  publisher: 'Nassoh Car',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nassohcar.com'),
  alternates: {
    canonical: '/fleet',
    languages: {
      'x-default': '/fleet',
      'fr-MA': '/fleet',
    },
  },
  openGraph: {
    title: 'Location Voiture Tanger - Flotte Économique | Nassoh Car',
    description: 'Découvrez notre flotte économique de location de voiture à Tanger. Véhicules abordables, SUV, voitures familiales disponibles à l\'aéroport Ibn Battouta, Port Tanger Med et centre-ville.',
    url: 'https://www.nassohcar.com/fleet',
    siteName: 'Nassoh Car',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: 'https://www.nassohcar.com/images/fleet-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Flotte Économique Nassoh Car - Location Voiture Tanger',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location Voiture Tanger - Flotte Économique | Nassoh Car',
    description: 'Découvrez notre flotte économique de location de voiture à Tanger. Véhicules abordables, SUV, voitures familiales disponibles.',
    images: ['https://www.nassohcar.com/images/fleet-twitter.jpg'],
    creator: '@nassohcar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function FleetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}