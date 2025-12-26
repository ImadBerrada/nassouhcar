import type { Metadata } from 'next'
import { generateHreflangLinks } from '@/lib/hreflang-utils'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Economy Car Rental | Nassoh Car - Best Prices Morocco',
  description: 'Economy car rental in Morocco with Nassoh Car. Affordable cars in Tangier, Tetouan, Casablanca. Book your budget car now!',
  keywords: [
    'economy car rental',
    'cheap car rental',
    'economy car Tangier',
    'economy car Tetouan',
    'budget car rental Morocco',
  ].join(', '),
  openGraph: {
    title: 'Economy Car Rental | Nassoh Car - Best Prices',
    description: 'Economy car rental in Morocco with Nassoh Car. Affordable cars in Tangier, Tetouan, Casablanca.',
    url: 'https://www.nassohcar.com/en/economy-cars',
    images: [{
      url: '/cars/DACIA LOGAN.png',
      width: 1200,
      height: 630,
      alt: 'Economy car rental Morocco - Nassoh Car',
    }],
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/en/economy-cars',
    languages: generateHreflangLinks('/en/economy-cars'),
  },
}

export default function EconomyCarsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Economy Car Rental in Morocco</h1>
            <p className="text-xl md:text-2xl mb-8">Economy and budget cars with Nassoh Car – Quality guaranteed at the best prices</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ From 200 DH/day</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Insurance Included</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✓ Unlimited Mileage</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose an Economy Car?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Affordable Car Rental</h3>
                  <p className="text-gray-600 mb-4">Our economy cars offer the best value for your car rental in Morocco. Ideal for tight budgets without compromising quality and safety.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Fuel Efficiency</h3>
                  <p className="text-gray-600 mb-4">Economy vehicles consume less fuel, helping you save even more while traveling in Tangier, Tetouan and across Morocco.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Economy Fleet</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Image src="/cars/DACIA LOGAN.png" alt="Dacia Logan - Economy car rental" width={300} height={200} className="w-full h-40 object-cover rounded" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Dacia Logan</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 5 seats</li>
                    <li>• Air conditioning</li>
                    <li>• Consumption: 6L/100km</li>
                    <li>• From 200 DH/day</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Image src="/cars/DACIA SANDERO STEPWAY.avif" alt="Dacia Sandero - Economy car rental" width={300} height={200} className="w-full h-40 object-cover rounded" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Dacia Sandero Stepway</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 5 seats</li>
                    <li>• Air conditioning</li>
                    <li>• Consumption: 6.5L/100km</li>
                    <li>• From 220 DH/day</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Image src="/cars/TOYOTA YARIS.avif" alt="Toyota Yaris - Economy car rental" width={300} height={200} className="w-full h-40 object-cover rounded" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Toyota Yaris</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 5 seats</li>
                    <li>• Air conditioning</li>
                    <li>• Consumption: 5.5L/100km</li>
                    <li>• From 250 DH/day</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Our Economy Cars</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-3">Included in Your Rental</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Comprehensive insurance</li>
                      <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Unlimited mileage</li>
                      <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>24/7 roadside assistance</li>
                      <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Second driver free</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-3">Additional Services</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Free hotel delivery</li>
                      <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Airport pickup</li>
                      <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>GPS available</li>
                      <li className="flex items-center"><span className="text-green-600 mr-2">✓</span>Baby seat on request</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Available in All Our Agencies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">Economy Car Tangier</h3>
                  <p className="text-gray-600 mb-3">Economy car rental in Tangier with pickup at Ibn Battouta Airport or our city center agency.</p>
                  <Link href="/en/car-rental-tangier" className="text-green-600 hover:underline">Learn more →</Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-600 mb-3">Economy Car Tetouan</h3>
                  <p className="text-gray-600 mb-3">Rent an economy car in Tetouan to explore the Rif region and Mediterranean coast beaches.</p>
                  <Link href="/en/car-rental-tetouan" className="text-green-600 hover:underline">Learn more →</Link>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions – Economy Cars</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">What is the price of an economy car rental?</h3>
                  <p className="text-gray-600">Our economy cars start from 200 DH per day, with insurance and unlimited mileage included.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">What is the fuel consumption?</h3>
                  <p className="text-gray-600">Our economy cars consume between 5.5L and 6.5L per 100km, helping you save on fuel.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Book Your Economy Car Now</h2>
              <p className="text-lg mb-6">Cheap car rental in Morocco – Simple and fast online booking</p>
              <Link href="/en#booking" className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Book an Economy Car</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
