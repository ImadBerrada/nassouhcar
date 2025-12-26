import type { Metadata } from 'next'
import { MapPin, Clock, Tag, DollarSign, Percent, TrendingDown, Car, Shield, ArrowRight, Calendar, CheckCircle, Plane, Navigation, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cheap Car Rental Tangier Airport – From 180 MAD/day | 2025',
  description: 'Cheap car rental at Tangier Ibn Battouta Airport ✓ From 180 MAD/day ✓ Transparent pricing ✓ Tips to save ✓ 24/7 pickup.',
  keywords: 'cheap car rental tangier airport, tangier airport low cost car hire, budget car rental tangier airport',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/cheap-car-rental-tangier-airport' },
  openGraph: {
    title: 'Cheap Car Rental Tangier Airport – From 180 MAD/day | 2025',
    description: 'Cheap car rental at Tangier Airport ✓ Transparent prices ✓ Tips to save ✓ 24/7 service.',
    images: ['/tangier-airport-cheap-car-rental.jpg'],
  },
}

export default function CheapCarRentalTangierAirportBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="relative bg-gradient-to-r from-cyan-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><TrendingDown className="h-6 w-6 text-cyan-400 mr-2" /><span className="text-cyan-400 font-semibold text-lg">Best Airport Prices</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Cheap Car Rental – Tangier Airport</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Transparent rates from 180 MAD/day at Ibn Battouta Airport. Tips to save and 24/7 pickup.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Updated Jan 15, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>6 min read</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Low Cost</span></div></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12 border border-cyan-100"><h2 className="text-3xl font-bold text-gray-900 mb-4">Starter Airport Rates</h2><div className="grid md:grid-cols-3 gap-6"><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-3">Economy</h3><p className="text-sm text-gray-600 mb-2">City driving</p><p className="text-cyan-600 font-bold">From 180 MAD/day</p></div><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-3">Sedan</h3><p className="text-sm text-gray-600 mb-2">Comfort</p><p className="text-cyan-600 font-bold">From 300 MAD/day</p></div><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-3">SUV</h3><p className="text-sm text-gray-600 mb-2">Family & trips</p><p className="text-cyan-600 font-bold">From 450 MAD/day</p></div></div><p className="text-sm text-gray-500 mt-3">Rates vary by season and availability. Book in advance to secure the lowest prices.</p></div>

          <section className="mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-8">7 Ways to Save at the Airport</h2><div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"><div className="grid md:grid-cols-2 gap-6"><ul className="space-y-3"><li className="flex items-start"><Percent className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Book early</strong>: 7–14 days before arrival</span></li><li className="flex items-start"><DollarSign className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Economy class</strong>: Best value for city trips</span></li><li className="flex items-start"><Plane className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Off‑peak pickup</strong>: Night arrivals can be cheaper</span></li><li className="flex items-start"><TrendingDown className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Avoid peak dates</strong>: Weekdays or off‑season</span></li></ul><ul className="space-y-3"><li className="flex items-start"><Shield className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Insurance included</strong>: Avoid extra fees</span></li><li className="flex items-start"><Car className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Unlimited mileage</strong>: No surcharges for trips</span></li><li className="flex items-start"><Tag className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Promotions</strong>: Check seasonal deals</span></li></ul></div></div></section>

          <section className="mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-8">Included Services (No Hidden Fees)</h2><div className="grid md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><ul className="space-y-2 text-gray-700"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Comprehensive insurance</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Unlimited mileage</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>24/7 assistance</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Recent vehicles</span></li></ul></div><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><ul className="space-y-2 text-gray-700"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Airport delivery</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>GPS available</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Clean and maintained cars</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Transparent pricing</span></li></ul></div></div></section>

          <section className="mb-12"><div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white text-center"><h2 className="text-3xl font-bold mb-4">Book Your Cheap Airport Car</h2><p className="text-xl mb-8 opacity-90">Low rates and transparent conditions. Economy vehicles available 24/7.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/en" className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><DollarSign className="h-5 w-5 mr-2" />Book Now</Link><Link href="/en/fleet" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />See Vehicles</Link></div></div></section>

          <section className="mb-12"><div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"><h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need help?</h2><div className="grid md:grid-cols-2 gap-6"><div className="flex items-center justify-center space-x-3"><Phone className="h-6 w-6 text-cyan-600" /><div><p className="font-semibold text-gray-900">Airport Hotline</p><p className="text-gray-700">+212 631 63 00 13</p></div></div><div className="flex items-center justify-center space-x-3"><Mail className="h-6 w-6 text-cyan-600" /><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-700">contact@nassohcar.com</p></div></div></div></div></section>
        </article>
      </div>
    </div>
  )
}
