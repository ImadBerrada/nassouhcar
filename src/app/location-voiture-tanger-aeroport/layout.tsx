import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger Aéroport – Nassoh Car',
  description: 'Location de voiture à l\'aéroport Ibn Battouta Tanger. Service express, livraison gratuite au terminal, véhicules modernes dès 200 DH/jour.',
  keywords: 'location voiture aéroport Tanger, location voiture Tanger aéroport, car rental Tangier airport, location auto aéroport Ibn Battouta, voiture location aéroport Tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/location-voiture-tanger-aeroport'
  },
  openGraph: {
    title: 'Location Voiture Tanger Aéroport – Nassoh Car',
    description: 'Location de voiture à l\'aéroport Ibn Battouta Tanger. Service express, livraison gratuite au terminal.',
    url: 'https://www.nassohcar.com/location-voiture-tanger-aeroport',
    siteName: 'Nassoh Car',
    images: [
      {
        url: '/tangier-airport-rental.jpg',
        width: 1200,
        height: 630,
        alt: 'Location voiture aéroport Tanger'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location Voiture Tanger Aéroport – Nassoh Car',
    description: 'Location de voiture à l\'aéroport Ibn Battouta Tanger. Service express, livraison gratuite.',
    images: ['/tangier-airport-rental.jpg']
  }
}

export default function LocationVoitureTangerAeroportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}