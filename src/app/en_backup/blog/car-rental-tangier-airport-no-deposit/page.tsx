import type { Metadata } from 'next'
import { Shield, CheckCircle, DollarSign, Calendar, Clock, Tag, Car, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Car Rental Tangier Airport – No Deposit Option | 2025',
  description: 'Car rental at Tangier Airport with no deposit option ✓ Conditions explained ✓ Transparent pricing ✓ Modern fleet ✓ 24/7 assistance.',
  keywords: 'car rental tangier airport no deposit, tangier airport car hire without deposit',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-tangier-airport-no-deposit' },
  openGraph: {
    title: 'Car Rental Tangier Airport – No Deposit Option | 2025',
    description: 'No deposit option available at Tangier Airport subject to conditions. Transparent and secure.',
    images: ['/tangier-airport-no-deposit-car-rental.jpg'],
  },
}

export default function CarRentalTangierAirportNoDepositBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      <div className="relative bg-gradient-to-r from-rose-900 via-red-800 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Shield className="h-6 w-6 text-rose-400 mr-2" /><span className="text-rose-400 font-semibold text-lg">Secure Option</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 via-red-300 to-pink-400 bg-clip-text text-transparent leading-tight">Car Rental – No Deposit at Tangier Airport</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Understand our <strong>no deposit</strong> option: conditions, pricing and security. Transparent and convenient.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Updated Jan 15, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>5 min read</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Airport</span></div></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <section className="mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-8">How the No‑Deposit Option Works</h2><div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"><ul className="space-y-2 text-gray-700"><li className="flex items-start"><CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-1" /><span><strong>Eligibility</strong>: Valid credit card + passport</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-1" /><span><strong>Insurance</strong>: Comprehensive cover required</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-1" /><span><strong>Pre‑auth</strong>: Small pre‑authorization for incidentals</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-1" /><span><strong>Transparency</strong>: All conditions explained before booking</span></li></ul></div></section>

          <section className="mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-8">Rates and Conditions</h2><div className="grid md:grid-cols-2 gap-6"><div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl p-6 border border-rose-200"><h3 className="text-xl font-semibold text-gray-900 mb-3">Typical rates</h3><ul className="space-y-2 text-gray-700"><li>• Economy: from 220 MAD/day</li><li>• Sedan: from 320 MAD/day</li><li>• SUV: from 480 MAD/day</li></ul><p className="text-sm text-gray-500 mt-3">Subject to season and availability</p></div><div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200"><h3 className="text-xl font-semibold text-gray-900 mb-3">Conditions</h3><ul className="space-y-2 text-gray-700"><li>• Full insurance required</li><li>• Valid credit card</li><li>• Minimum age 23</li><li>• Standard fuel and return policy</li></ul></div></div></section>

          <section className="mb-12"><div className="bg-gradient-to-r from-rose-600 to-red-700 rounded-2xl p-8 text-white text-center"><h2 className="text-3xl font-bold mb-4">Request No‑Deposit Booking</h2><p className="text-xl mb-8 opacity-90">Tell us your flight and duration; we’ll confirm eligibility and price.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/en" className="bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><DollarSign className="h-5 w-5 mr-2" />Get Offer</Link><Link href="/en/fleet" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-rose-600 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />See Vehicles</Link></div></div></section>

          <section className="mb-12"><div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"><h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Questions?</h2><div className="grid md:grid-cols-2 gap-6"><div className="flex items-center justify-center space-x-3"><Phone className="h-6 w-6 text-rose-600" /><div><p className="font-semibold text-gray-900">Airport Line</p><p className="text-gray-700">+212 631 63 00 13</p></div></div><div className="flex items-center justify-center space-x-3"><Mail className="h-6 w-6 text-rose-600" /><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-700">airport@nassouhcar.com</p></div></div></div></div></section>
        </article>
      </div>
    </div>
  )
}
