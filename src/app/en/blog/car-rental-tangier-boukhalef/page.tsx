import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Calendar, Tag, CheckCircle, Navigation, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Car Rental Tangier Boukhalef 2025 ✓ Airport Area | Express',
  description: 'Car rental in Tangier Boukhalef ✓ Airport area ✓ Express delivery ✓ Modern fleet ✓ Free delivery ✓ 24/7 assistance.',
  keywords: 'car rental tangier boukhalef, boukhalef car hire, rent a car tangier boukhalef',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-tangier-boukhalef' },
  openGraph: {
    title: 'Car Rental Tangier Boukhalef 2025 ✓ Airport Area | Express',
    description: 'Car rental in Tangier Boukhalef ✓ Express service ✓ Free delivery ✓ 24/7 assistance.',
    images: ['/tangier-boukhalef-car-rental-blog.jpg'],
  },
}

export default function CarRentalTangierBoukhalefBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><MapPin className="h-6 w-6 text-amber-400 mr-2" /><span className="text-amber-400 font-semibold text-lg">Boukhalef Area</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-300 to-red-400 bg-clip-text text-transparent leading-tight">Car Rental – Tangier Boukhalef</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Express service in the Boukhalef district near Tangier Airport. Free delivery, modern fleet and 24/7 assistance.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Updated Jan 15, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>6 min read</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Boukhalef</span></div></div>
            <Link href="/en/fleet" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Book Boukhalef<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Navigation className="h-8 w-8 text-amber-600 mr-3" />Service in Boukhalef</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Our <strong>car rental in Tangier Boukhalef</strong> delivers vehicles in the airport‑adjacent district with express formalities and personalized assistance.</p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4">Included</h3><ul className="space-y-2 text-gray-700"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-600 mr-2" /><span>Comprehensive insurance</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-600 mr-2" /><span>Unlimited mileage</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-600 mr-2" /><span>24/7 assistance</span></li></ul></div>
            </article>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">Boukhalef Service</h3><p className="mb-6 text-amber-100">Free delivery in Boukhalef and airport area. 24/7 assistance.</p><Link href="/en/fleet" className="block w-full bg-white text-amber-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Book Boukhalef</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-amber-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-amber-600 mr-3" /><span className="text-gray-700">tangier@nassouhcar.com</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
