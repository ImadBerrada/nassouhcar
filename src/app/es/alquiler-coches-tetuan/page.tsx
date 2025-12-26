import type { Metadata } from 'next'
import CarRentalTetouanClient from './ClientPage'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tetuán | Nassoh Car - Mejores Precios Rif y Mediterráneo',
  description: 'Alquiler de coches en Tetuán con Nassoh Car. Explore el Rif, Chefchaouen y las playas mediterráneas. ¡Recogida gratuita en el aeropuerto de Tetuán!',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/alquiler-coches-tetuan',
  }
}

export default function CarRentalTetouanPage() {
  return <CarRentalTetouanClient />
}
