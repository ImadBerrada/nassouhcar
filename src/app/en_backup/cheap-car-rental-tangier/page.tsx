import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BadgeDollarSign, Car, MapPin, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cheap Car Rental Tangier | Nassoh Car Best Prices 2025',
  description: 'Cheap car rental in Tangier with Nassoh Car. Economy cars from 200 MAD/day. Airport, port and city center delivery. Book today for the best price!',
  alternates: { canonical: 'https://www.nassohcar.com/en/cheap-car-rental-tangier' },
}

export default function CheapCarRentalTangier() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      <section className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4"><BadgeDollarSign className="h-12 w-12" /></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cheap Car Rental in Tangier</h1>
            <p className="text-xl md:text-2xl mb-8">Best prices 2025 – Economy cars from 200 MAD/day with insurance</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Airport Delivery</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Port Delivery</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ City Center</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dacia Logan', price: '200 MAD/day', img: '/cars/DACIA LOGAN.png' },
              { name: 'Dacia Sandero Stepway', price: '220 MAD/day', img: '/cars/DACIA SANDERO STEPWAY.avif' },
              { name: 'Toyota Yaris', price: '250 MAD/day', img: '/cars/TOYOTA YARIS.avif' },
            ].map((car, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <Image src={car.img} alt={`${car.name} cheap rental Tangier`} width={400} height={260} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-700 mb-2">{car.name}</h3>
                  <p className="text-gray-700">From {car.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md"><div className="flex items-center mb-3"><Shield className="h-6 w-6 text-amber-600 mr-2" /><h3 className="font-semibold">Included</h3></div><ul className="text-gray-700 space-y-2"><li>• Insurance</li><li>• Unlimited mileage</li><li>• 24/7 assistance</li></ul></div>
            <div className="bg-white rounded-xl p-6 shadow-md"><div className="flex items-center mb-3"><Clock className="h-6 w-6 text-amber-600 mr-2" /><h3 className="font-semibold">Fast Delivery</h3></div><ul className="text-gray-700 space-y-2"><li>• Airport in 1 hour</li><li>• City in 30 minutes</li><li>• Port on request</li></ul></div>
            <div className="bg-white rounded-xl p-6 shadow-md"><div className="flex items-center mb-3"><MapPin className="h-6 w-6 text-amber-600 mr-2" /><h3 className="font-semibold">Locations</h3></div><ul className="text-gray-700 space-y-2"><li>• Tangier Ibn Battouta Airport</li><li>• Tangier Med Port</li><li>• Tangier City Center</li></ul></div>
          </div>

          <div className="bg-amber-600 text-white rounded-xl p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Book Your Cheap Car Now</h2>
            <p className="text-lg mb-6">Affordable and reliable car rental in Tangier</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/en/fleet" className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold">View Fleet</Link>
              <Link href="/en/car-rental-tangier" className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold">Tangier Rental</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

