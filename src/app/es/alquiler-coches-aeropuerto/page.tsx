import type { Metadata } from 'next'
import AirportCarRentalClient from './ClientPage'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en el Aeropuerto | Nassoh Car - Tánger, Tetuán, Casablanca',
  description: 'Alquiler de coches en el aeropuerto en Marruecos. Servicio de recogida en el aeropuerto de Tánger Ibn Battouta, Tetuán, Casablanca. ¡Reserve su coche a la llegada!',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/alquiler-coches-aeropuerto',
  }
}

export default function AirportCarRentalPage() {
  return <AirportCarRentalClient />
}
