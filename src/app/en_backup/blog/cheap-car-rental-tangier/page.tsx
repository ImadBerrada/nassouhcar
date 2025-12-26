import type { Metadata } from 'next'
import { MapPin, Clock, Tag, DollarSign, Percent, TrendingDown, Car, Shield, ArrowRight, Calendar, CheckCircle, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/en/components/StructuredData'

export const metadata: Metadata = {
  title: 'Cheap Car Rental Tangier 2025 – From 170 MAD/day | Deals',
  description: 'Cheap car rental in Tangier ✓ From 170 MAD/day ✓ Transparent prices ✓ No hidden fees ✓ Tips to save more ✓ Book online.',
  keywords: 'cheap car rental tangier, tangier low cost car hire, rent a car cheap tangier, budget car rental tangier',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/cheap-car-rental-tangier' },
  openGraph: {
    title: 'Cheap Car Rental Tangier 2025 – From 170 MAD/day | Deals',
    description: 'Cheap car rental in Tangier ✓ From 170 MAD/day ✓ Transparent prices ✓ Tips to save.',
    images: ['/tangier-cheap-car-rental.jpg'],
  },
}

export default function CheapCarRentalTangierBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <StructuredData type="Article" countryTarget="MA" language="en" />
      <div className="relative bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><TrendingDown className="h-6 w-6 text-emerald-400 mr-2" /><span className="text-emerald-400 font-semibold text-lg">Best Prices</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent leading-tight">Cheap Car Rental in Tangier</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Save on your car rental in Tangier with transparent rates starting at 170 MAD/day. Tips and deals to spend less.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Published Jan 15, 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>6 min read</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Low Cost</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mb-12 border border-emerald-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Rent a Cheap Car in Tangier</h2>
            <p className="text-lg text-gray-700 leading-relaxed">Our <strong>cheap car rental in Tangier</strong> combines transparent pricing with practical tips to minimize your costs without sacrificing quality or safety.</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Transparent Starter Rates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-3">Economy</h3><p className="text-sm text-gray-600 mb-2">City driving</p><p className="text-emerald-600 font-bold">From 170 MAD/day</p></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-3">Sedan</h3><p className="text-sm text-gray-600 mb-2">Comfort</p><p className="text-emerald-600 font-bold">From 280 MAD/day</p></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-3">SUV</h3><p className="text-sm text-gray-600 mb-2">Family & trips</p><p className="text-emerald-600 font-bold">From 420 MAD/day</p></div>
            </div>
            <p className="text-sm text-gray-500 mt-3">Rates vary by season and availability. Benefit from lower prices by booking in advance.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">7 Tips to Pay Less</h2>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start"><Percent className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Book early</strong>: 7–14 days before arrival for better rates</span></li>
                  <li className="flex items-start"><DollarSign className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Economy class</strong>: Choose compact vehicles for city trips</span></li>
                  <li className="flex items-start"><MapPin className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Flexible pickup</strong>: City center can be cheaper than airport</span></li>
                  <li className="flex items-start"><TrendingDown className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Avoid peak dates</strong>: Try weekdays or off‑season</span></li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start"><Shield className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Insurance included</strong>: Verify comprehensive cover to avoid extras</span></li>
                  <li className="flex items-start"><Car className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Unlimited mileage</strong>: Avoid surcharges for trips</span></li>
                  <li className="flex items-start"><Tag className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Promotions</strong>: Check our seasonal deals page</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Included Services (No Hidden Fees)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-600 mr-2" /><span>Comprehensive insurance</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-600 mr-2" /><span>Unlimited mileage</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-600 mr-2" /><span>24/7 assistance</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-600 mr-2" /><span>Recent vehicles</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-600 mr-2" /><span>Transparent prices</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-600 mr-2" /><span>Airport/city delivery</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-600 mr-2" /><span>GPS available</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-emerald-600 mr-2" /><span>Clean and maintained cars</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Book Your Cheap Car in Tangier</h2>
              <p className="text-xl mb-8 opacity-90">Take advantage of low rates and transparent conditions. Economy vehicles available now.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en" className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><DollarSign className="h-5 w-5 mr-2" />Book Now</Link>
                <Link href="/en/fleet" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />See Vehicles</Link>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need help choosing?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3"><Phone className="h-6 w-6 text-emerald-600" /><div><p className="font-semibold text-gray-900">Phone</p><p className="text-gray-700">+212 631 63 00 13</p></div></div>
                <div className="flex items-center justify-center space-x-3"><Mail className="h-6 w-6 text-emerald-600" /><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-700">contact@nassohcar.com</p></div></div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
