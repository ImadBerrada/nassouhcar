import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Globe, Building, Plane, Waves, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Car Rental Morocco 2025 ✓ Nationwide Service | 15+ Cities',
  description: 'Car rental in Morocco ✓ Nationwide service ✓ 15+ cities ✓ Airports, ports, city centers ✓ Modern fleet ✓ Transparent prices.',
  keywords: 'car rental morocco, rent a car morocco, morocco car hire, nassoh car morocco',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-morocco' },
  openGraph: {
    title: 'Car Rental Morocco 2025 ✓ Nationwide Service | 15+ Cities',
    description: 'Car rental in Morocco ✓ Airports, ports and city centers ✓ Modern fleet ✓ Transparent prices.',
    images: ['/morocco-car-rental-blog.jpg'],
  },
}

export default function CarRentalMoroccoBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Globe className="h-6 w-6 text-emerald-400 mr-2" /><span className="text-emerald-400 font-semibold text-lg">Nationwide Service</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent leading-tight">Car Rental in Morocco</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Airports, ports and city centers across Morocco. Transparent prices, modern fleet, 24/7 assistance.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Updated Jan 15, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>7 min read</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Morocco</span></div></div>
            <Link href="/en/fleet" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Explore Fleet<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Coverage</h2><p className="text-xl text-gray-600">15+ cities served across Morocco</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-emerald-600 mb-2">15+</div><div className="text-gray-600 font-medium">Cities</div></div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-green-600 mb-2">500+</div><div className="text-gray-600 font-medium">Vehicles</div></div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-teal-600 mb-2">24/7</div><div className="text-gray-600 font-medium">Assistance</div></div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-cyan-600 mb-2">100%</div><div className="text-gray-600 font-medium">Transparent</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Globe className="h-8 w-8 text-emerald-600 mr-3" />Nationwide car rental</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Our <strong>car rental in Morocco</strong> covers all major regions. From airports to city centers, we ensure mobility everywhere with transparent pricing and a modern fleet.</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Plane className="h-6 w-6 text-emerald-600 mr-2" />Airports</h4><ul className="text-gray-600 space-y-2"><li>• Tangier Ibn Battouta</li><li>• Casablanca Mohammed V</li><li>• Marrakech Menara</li><li>• Rabat Salé</li><li>• Fes Saïss</li><li>• Agadir Al Massira</li></ul></div>
                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Building className="h-6 w-6 text-green-600 mr-2" />City centers</h4><ul className="text-gray-600 space-y-2"><li>• Tangier</li><li>• Casablanca</li><li>• Rabat</li><li>• Marrakech</li><li>• Tetouan</li><li>• Oujda</li></ul></div>
                <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Waves className="h-6 w-6 text-teal-600 mr-2" />Ports</h4><ul className="text-gray-600 space-y-2"><li>• Tangier Ville</li><li>• Tangier Med</li><li>• Nador</li><li>• Casablanca</li></ul></div>
                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Home className="h-6 w-6 text-cyan-600 mr-2" />Tourist areas</h4><ul className="text-gray-600 space-y-2"><li>• Chefchaouen</li><li>• Asilah</li><li>• Essaouira</li><li>• Al Hoceima</li></ul></div>
              </div>
            </article>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">Nationwide Service</h3><p className="mb-6 text-emerald-100">Free delivery to airports, ports and city centers. 24/7 assistance.</p><Link href="/en/fleet" className="block w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Book Now</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-emerald-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-emerald-600 mr-3" /><span className="text-gray-700">morocco@nassouhcar.com</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
