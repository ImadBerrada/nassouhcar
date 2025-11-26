import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger Port – Nassoh Car',
  description: 'Location de voiture au port de Tanger. Service express 24h/24, livraison gratuite au terminal ferry. Parfait pour les voyageurs arrivant par bateau.',
  keywords: 'location voiture port Tanger, location voiture Tanger port, car rental Tangier port, location auto port Tanger, voiture location ferry Tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/location-voiture-tanger-port'
  },
  openGraph: {
    title: 'Location Voiture Tanger Port – Nassoh Car',
    description: 'Location de voiture au port de Tanger. Service express 24h/24, livraison gratuite au terminal ferry.',
    url: 'https://www.nassohcar.com/location-voiture-tanger-port',
    siteName: 'Nassoh Car',
    images: [
      {
        url: '/tangier-port-rental.jpg',
        width: 1200,
        height: 630,
        alt: 'Location voiture port Tanger'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location Voiture Tanger Port – Nassoh Car',
    description: 'Location de voiture au port de Tanger. Service express 24h/24, livraison gratuite.',
    images: ['/tangier-port-rental.jpg']
  }
}

export default function LocationVoitureTangerPortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}