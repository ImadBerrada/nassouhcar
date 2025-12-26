import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BadgeDollarSign, Car, MapPin, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Baratos Tánger | Nassoh Car Mejores Precios 2025',
  description: 'Alquiler de coches baratos en Tánger con Nassoh Car. Coches económicos desde 200 MAD/día. Entrega en aeropuerto, puerto y centro ciudad. ¡Reserve hoy al mejor precio!',
  alternates: { canonical: 'https://www.nassohcar.com/es/alquiler-coches-baratos-tanger' },
}

export default function CheapCarRentalTangier() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      <section className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4"><BadgeDollarSign className="h-12 w-12" /></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alquiler de Coches Baratos en Tánger</h1>
            <p className="text-xl md:text-2xl mb-8">Mejores precios 2025 – Coches económicos desde 200 MAD/día con seguro</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Entrega en Aeropuerto</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Entrega en Puerto</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Centro Ciudad</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dacia Logan', price: '200 MAD/día', img: '/cars/DACIA LOGAN.png' },
              { name: 'Dacia Sandero Stepway', price: '220 MAD/día', img: '/cars/DACIA SANDERO STEPWAY.avif' },
              { name: 'Toyota Yaris', price: '250 MAD/día', img: '/cars/TOYOTA YARIS.avif' },
            ].map((car, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <Image src={car.img} alt={`${car.name} alquiler barato Tánger`} width={400} height={260} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-700 mb-2">{car.name}</h3>
                  <p className="text-gray-700">Desde {car.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md"><div className="flex items-center mb-3"><Shield className="h-6 w-6 text-amber-600 mr-2" /><h3 className="font-semibold">Incluido</h3></div><ul className="text-gray-700 space-y-2"><li>• Seguro</li><li>• Kilometraje ilimitado</li><li>• Asistencia 24/7</li></ul></div>
            <div className="bg-white rounded-xl p-6 shadow-md"><div className="flex items-center mb-3"><Clock className="h-6 w-6 text-amber-600 mr-2" /><h3 className="font-semibold">Entrega Rápida</h3></div><ul className="text-gray-700 space-y-2"><li>• Aeropuerto en 1 hora</li><li>• Ciudad en 30 minutos</li><li>• Puerto bajo petición</li></ul></div>
            <div className="bg-white rounded-xl p-6 shadow-md"><div className="flex items-center mb-3"><MapPin className="h-6 w-6 text-amber-600 mr-2" /><h3 className="font-semibold">Ubicaciones</h3></div><ul className="text-gray-700 space-y-2"><li>• Aeropuerto Tánger Ibn Battouta</li><li>• Puerto Tánger Med</li><li>• Centro Ciudad Tánger</li></ul></div>
          </div>

          <div className="bg-amber-600 text-white rounded-xl p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Reserve su Coche Barato Ahora</h2>
            <p className="text-lg mb-6">Alquiler de coches fiable y asequible en Tánger</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/es/flota" className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold">Ver Flota</Link>
              <Link href="/es/alquiler-coches-tanger" className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold">Alquiler en Tánger</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
