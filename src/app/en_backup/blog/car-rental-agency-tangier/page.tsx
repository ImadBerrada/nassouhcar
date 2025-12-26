import type { Metadata } from 'next'
import { MapPin, Clock, Car, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Crown, Building } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Car Rental Agency Tangier 2025 ✓ Local Leader since 2010',
  description: 'Car rental agency Tangier ✓ Local leader since 2010 ✓ Airport, port and city ✓ Premium service ✓ Modern fleet ✓ Guaranteed satisfaction.',
  keywords: 'car rental agency tangier, tangier car hire agency, rent a car agency tangier, nassoh car tangier',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-agency-tangier' },
  openGraph: {
    title: 'Car Rental Agency Tangier 2025 ✓ Local Leader since 2010',
    description: 'Car rental agency Tangier ✓ Local leader since 2010 ✓ Premium service ✓ Modern fleet.',
    images: ['/tangier-car-rental-agency-blog.jpg'],
  },
}

export default function CarRentalAgencyTangierBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Building className="h-6 w-6 text-blue-400 mr-2" /><span className="text-blue-400 font-semibold text-lg">Tangier Agency</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Car Rental Agency Tangier</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Local leader since 2010. Airport, port and city center. 200+ vehicles, premium service, competitive rates.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Updated Jan 15, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>7 min read</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Tangier</span></div></div>
            <Link href="/en/fleet" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Explore Tangier Agency<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Nassoh Car Tangier in numbers</h2><p className="text-xl text-gray-600">Tangier’s reference agency</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-blue-600 mb-2">200+</div><div className="text-gray-600 font-medium">Vehicles in Tangier</div></div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-indigo-600 mb-2">5</div><div className="text-gray-600 font-medium">Service points</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">15 years</div><div className="text-gray-600 font-medium">Local presence</div></div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-pink-600 mb-2">25K+</div><div className="text-gray-600 font-medium">Tangier clients</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Building className="h-8 w-8 text-blue-600 mr-3" />Nassoh Car Tangier: Your trusted local agency</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Since 2010, the <strong>car rental agency Tangier</strong> Nassoh Car has been the preferred partner for mobility. With strategic presence at the airport, port and city center, our agency delivers proximity service with more than 200 vehicles available.</p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Crown className="h-6 w-6 text-blue-600 mr-2" />Why choose our agency in Tangier?</h3><ul className="space-y-3"><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Strategic locations</strong>: Airport, port, city center</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Local knowledge</strong>: 15 years in Tangier</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Adapted fleet</strong>: 200+ vehicles for all needs</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Personalized service</strong>: Dedicated local team</span></li></ul></div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">Tangier Agency</h3><p className="mb-6 text-blue-100">Free delivery at airport, port and city center. 24/7 assistance.</p><Link href="/en/fleet" className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Book Tangier</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Tangier Contact</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">tangier@nassouhcar.com</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
