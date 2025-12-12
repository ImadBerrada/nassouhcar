import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Building, Navigation, Zap, Award, Timer, Trophy } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Car Rental Agency Tangier Airport 2025 - Premium Service',
  description: 'Car rental agency at Tangier Ibn Battouta Airport ✓ Premium service ✓ Express delivery ✓ Modern fleet ✓ 24/7 assistance ✓ Online booking.',
  keywords: 'car rental agency tangier airport, tangier airport car hire agency, rent a car agency ibn battouta, nassoh car airport',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-agency-tangier-airport' },
  openGraph: {
    title: 'Car Rental Agency Tangier Airport 2025 - Premium Service',
    description: 'Car rental agency at Tangier Airport ✓ Premium service ✓ Express delivery ✓ Modern fleet.',
    images: ['/tangier-airport-agency-blog.jpg'],
  },
}

export default function CarRentalAgencyTangierAirportBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Building className="h-6 w-6 text-emerald-400 mr-2" /><span className="text-emerald-400 font-semibold text-lg">Professional Agency</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">Car Rental Agency Tangier Airport</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Your reference agency at Tangier Airport. Premium service, modern fleet, 24/7 assistance. Excellence at your service.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Updated Jan 15, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>8 min read</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Premium Agency</span></div></div>
            <Link href="/en/fleet" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Discover Our Agency<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Nassoh Car in numbers</h2><p className="text-xl text-gray-600">Trusted agency at Tangier Airport</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-emerald-600 mb-2">8+</div><div className="text-gray-600 font-medium">Years’ experience</div></div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-blue-600 mb-2">150+</div><div className="text-gray-600 font-medium">Vehicles</div></div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-amber-600 mb-2">10k+</div><div className="text-gray-600 font-medium">Happy clients</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div><div className="text-gray-600 font-medium">Average rating</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Trophy className="h-8 w-8 text-emerald-600 mr-3" />Nassoh Car: Your reference agency at Tangier Airport</h2>
              <p className="text-gray-700 leading-relaxed mb-6"><strong>Nassoh Car</strong> is the <strong>car rental agency at Tangier Airport</strong> of reference for more than 8 years. Specialized at Ibn Battouta, our agency offers premium service with a modern fleet and personalized assistance.</p>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Award className="h-6 w-6 text-emerald-600 mr-2" />Why choose our agency?</h3><ul className="space-y-3"><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Local expertise</strong>: 8 years at Tangier Airport</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Airport presence</strong>: Permanent desk at Ibn Battouta</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Modern fleet</strong>: 150+ recent vehicles</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>24/7 service</strong>: Continuous assistance</span></li></ul></div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">Tangier Airport Agency</h3><p className="mb-6 text-emerald-100">Free delivery at Ibn Battouta. 24/7 assistance for all flights.</p><Link href="/en/fleet" className="block w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Book Airport</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Airport Contact</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-emerald-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-emerald-600 mr-3" /><span className="text-gray-700">airport@nassouhcar.com</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
