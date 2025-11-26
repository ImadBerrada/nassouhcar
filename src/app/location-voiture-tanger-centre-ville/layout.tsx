import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location Voiture Tanger Centre-Ville – Nassoh Car',
  description: 'Location de voiture au centre-ville de Tanger. Service de proximité, livraison gratuite, véhicules modernes pour explorer la médina et les attractions.',
  keywords: 'location voiture centre ville Tanger, location voiture Tanger centre ville, car rental Tangier city center, location auto centre Tanger, voiture location médina Tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/location-voiture-tanger-centre-ville'
  },
  openGraph: {
    title: 'Location Voiture Tanger Centre-Ville – Nassoh Car',
    description: 'Location de voiture au centre-ville de Tanger. Service de proximité, livraison gratuite.',
    url: 'https://www.nassohcar.com/location-voiture-tanger-centre-ville',
    siteName: 'Nassoh Car',
    images: [
      {
        url: '/tangier-city-center-rental.jpg',
        width: 1200,
        height: 630,
        alt: 'Location voiture centre-ville Tanger'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location Voiture Tanger Centre-Ville – Nassoh Car',
    description: 'Location de voiture au centre-ville de Tanger. Service de proximité, livraison gratuite.',
    images: ['/tangier-city-center-rental.jpg']
  }
}

export default function LocationVoitureTangerCentreVilleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}