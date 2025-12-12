import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/en/components/StructuredData'

export const metadata: Metadata = {
  title: 'Car Rental Tangier 2025 - Complete Guide | Nassoh Car',
  description: "The ultimate guide to car rental in Tangier. Expert tips, best rates, and 24/7 economy service. Book your vehicle now!",
  keywords: 'car rental tangier, tangier car hire, rent a car tangier, car rental morocco tangier, cheap car rental tangier',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-tangier' },
  openGraph: {
    title: 'Car Rental Tangier 2025 - Complete Guide | Nassoh Car',
    description: "The ultimate guide to car rental in Tangier. Expert tips, best rates, and 24/7 service.",
    images: ['/tangier-blog.jpg'],
  },
}

export default function CarRentalTangierBlog() {
  return (
    <>
      <StructuredData type="Article" countryTarget="MA" language="en" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Car className="h-6 w-6 text-amber-400 mr-2" />
                <span className="text-amber-400 font-semibold text-lg">Expert Guide 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">Car Rental Tangier</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                The complete guide to renting a car in Tangier in 2025. Discover expert advice,
                the best rates and our 24/7 economy service.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Published Jan 15, 2025</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>Rental Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Rent a Car in Tangier?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tangier, gateway to Morocco, offers unmatched freedom when you have your own vehicle.
                Whether you arrive at Ibn Battouta Airport, Tangier Med Port, or want to explore the region,
                renting a car in Tangier lets you discover this beautiful city at your own pace.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Renting a Car in Tangier</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4"><MapPin className="h-8 w-8 text-blue-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Freedom of Movement</h3></div>
                  <p className="text-gray-700">Explore Tangier and its surroundings without schedule constraints. Visit the Hercules Caves, Cap Spartel, or take a day trip to Chefchaouen whenever you want.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4"><Star className="h-8 w-8 text-amber-500 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Family Comfort</h3></div>
                  <p className="text-gray-700">Our vehicles are maintained to the highest standards. Air‑conditioning, GPS, and comprehensive insurance included for your safety and comfort.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4"><Shield className="h-8 w-8 text-green-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Secure Service</h3></div>
                  <p className="text-gray-700">Full insurance, 24/7 assistance, and regularly inspected vehicles for peace of mind in Tangier.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4"><Users className="h-8 w-8 text-purple-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Expert Support</h3></div>
                  <p className="text-gray-700">Our local team in Tangier provides tailored advice and support in English, French and Arabic.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Guide: How to Rent a Car in Tangier</h2>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Simple Steps</h3>
                <div className="space-y-6">
                  <div className="flex items-start"><div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div><div><h4 className="font-semibold text-gray-900 mb-2">Online Booking</h4><p className="text-gray-700">Visit our <Link href="/en" className="text-blue-600 hover:underline font-medium">homepage</Link> and select your dates, pickup location in Tangier, and vehicle type.</p></div></div>
                  <div className="flex items-start"><div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div><div><h4 className="font-semibold text-gray-900 mb-2">Choose Your Vehicle</h4><p className="text-gray-700">Explore our <Link href="/en/fleet" className="text-blue-600 hover:underline font-medium">full fleet</Link> and pick from economy cars, SUVs, or family vehicles available in Tangier.</p></div></div>
                  <div className="flex items-start"><div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div><div><h4 className="font-semibold text-gray-900 mb-2">Required Documents</h4><p className="text-gray-700">Prepare a valid driving license, passport or ID, and a credit card for the refundable 5,000 MAD deposit.</p></div></div>
                  <div className="flex items-start"><div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div><div><h4 className="font-semibold text-gray-900 mb-2">Pickup</h4><p className="text-gray-700">Collect your vehicle at our Tangier office, Ibn Battouta Airport, Tangier Med Port, or request free delivery.</p></div></div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Where to Pick Up Your Rental Car in Tangier?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><MapPin className="h-10 w-10 text-blue-600 mb-4" /><h3 className="text-xl font-semibold text-gray-900 mb-3">Tangier City Center Agency</h3><p className="text-gray-700 mb-4">Our main agency in the heart of Tangier, easily accessible from all areas.</p><div className="text-sm text-gray-600"><p>📍 Downtown Tangier</p><p>🕒 9:00–20:00 (Daily)</p></div></div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><MapPin className="h-10 w-10 text-green-600 mb-4" /><h3 className="text-xl font-semibold text-gray-900 mb-3">Ibn Battouta Airport</h3><p className="text-gray-700 mb-4">Airport service for simple arrival and departure logistics.</p><div className="text-sm text-gray-600"><p>📍 Tangier Ibn Battouta Airport</p><p>🕒 24/7 service on request</p></div></div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><MapPin className="h-10 w-10 text-purple-600 mb-4" /><h3 className="text-xl font-semibold text-gray-900 mb-3">Tangier Med Port</h3><p className="text-gray-700 mb-4">Direct pickup at Tangier Med for ferry travelers.</p><div className="text-sm text-gray-600"><p>📍 Tangier Med Port Terminal</p><p>🕒 Coordinated with ferry schedules</p></div></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Expert Tips for Your Rental in Tangier</h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Expert Advice</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Best timing:</strong> Book at least 48h in advance to guarantee availability.</span></li>
                  <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Driving in Tangier:</strong> Traffic is smooth outside peak hours (8–9am and 5–7pm).</span></li>
                  <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Parking:</strong> Use paid city center car parks or blue zones to avoid fines.</span></li>
                  <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Fuel:</strong> Stations are plentiful. Return the vehicle with the same fuel level.</span></li>
                  <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Excursions:</strong> Visit Asilah (45 min), Chefchaouen (2h), or Tetouan (1h).</span></li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Explore Tangier?</h2>
                <p className="text-xl mb-8 opacity-90">Book your rental car in Tangier now and enjoy the freedom to travel on your schedule.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/en" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />Book Now</Link>
                  <Link href="/en/fleet" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"><ArrowRight className="h-5 w-5 mr-2" />View Our Fleet</Link>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link href="/en/blog/cheap-car-rental-tangier" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"><div className="flex items-center mb-3"><Tag className="h-5 w-5 text-green-600 mr-2" /><span className="text-sm text-green-600 font-medium">Savings</span></div><h3 className="text-lg font-semibold text-gray-900 mb-2">Cheap Car Rental in Tangier</h3><p className="text-gray-600 text-sm">Discover unbeatable rates from 170 MAD/day for your rental in Tangier.</p></Link>
                  <Link href="/en/blog/car-rental-tangier-airport" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"><div className="flex items-center mb-3"><MapPin className="h-5 w-5 text-blue-600 mr-2" /><span className="text-sm text-blue-600 font-medium">Airport</span></div><h3 className="text-lg font-semibold text-gray-900 mb-2">Airport Car Rental</h3><p className="text-gray-600 text-sm">Express delivery at Tangier Ibn Battouta Airport.</p></Link>
                  <Link href="/en/blog/car-rental-tangier-port" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"><div className="flex items-center mb-3"><Car className="h-5 w-5 text-purple-600 mr-2" /><span className="text-sm text-purple-600 font-medium">Port</span></div><h3 className="text-lg font-semibold text-gray-900 mb-2">Port Car Rental</h3><p className="text-gray-600 text-sm">Express service at Tangier Port with free delivery for ferry travelers.</p></Link>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Help with Your Rental in Tangier?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center space-x-3"><Phone className="h-6 w-6 text-blue-600" /><div><p className="font-semibold text-gray-900">Phone</p><p className="text-gray-700">+212 631 63 00 13</p></div></div>
                  <div className="flex items-center justify-center space-x-3"><Mail className="h-6 w-6 text-blue-600" /><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-700">contact@nassohcar.com</p></div></div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  )
}
