import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Crown, Trophy, UserCheck, Headphones, Building, Plane, Waves, Home, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Car Rental Agency Morocco 2025 ✓ National Leader since 2010',
  description: 'Car rental agency in Morocco ✓ National leader since 2010 ✓ 15+ cities ✓ Premium service ✓ Modern fleet ✓ Proven expertise.',
  keywords: 'car rental agency morocco, rent a car agency morocco, auto hire agency morocco, nassoh car morocco',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-agency' },
  openGraph: {
    title: 'Car Rental Agency Morocco 2025 ✓ National Leader since 2010',
    description: 'Car rental agency in Morocco ✓ National leader since 2010 ✓ 15+ cities ✓ Premium service.',
    images: ['/morocco-car-rental-agency-blog.jpg'],
  },
}

export default function CarRentalAgencyMoroccoBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Building className="h-6 w-6 text-blue-400 mr-2" /><span className="text-blue-400 font-semibold text-lg">National Agency</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Car Rental Agency – Morocco</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">National leader since 2010. More than 15 cities, 500+ vehicles, premium service and competitive rates.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Updated Jan 15, 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>8 min read</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Agency</span></div>
            </div>
            <Link href="/en/fleet" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Explore the Agency<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Nassoh Car in numbers</h2><p className="text-xl text-gray-600">The reference car rental agency</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-blue-600 mb-2">15+</div><div className="text-gray-600 font-medium">Cities covered</div></div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-indigo-600 mb-2">500+</div><div className="text-gray-600 font-medium">Vehicles available</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">15 years</div><div className="text-gray-600 font-medium">Experience</div></div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-pink-600 mb-2">50K+</div><div className="text-gray-600 font-medium">Happy clients</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Building className="h-8 w-8 text-blue-600 mr-3" />Nassoh Car: A trusted car rental agency</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Since 2010, <strong>Nassoh Car</strong> has established itself as Morocco’s <strong>car rental agency</strong> benchmark. With more than 15 cities covered and a fleet of 500+ vehicles, we deliver mobility solutions adapted to every need.</p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Crown className="h-6 w-6 text-blue-600 mr-2" />Why choose our agency?</h3><ul className="space-y-3"><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Proven experience</strong>: 15 years in car rental</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Nationwide presence</strong>: 15+ cities</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Diverse fleet</strong>: 500+ recent vehicles</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Premium service</strong>: 24/7 assistance</span></li></ul></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><MapPin className="h-6 w-6 text-blue-600 mr-2" />Our locations</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Our <strong>car rental agency</strong> operates across Morocco with strategically placed service points:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Plane className="h-6 w-6 text-blue-600 mr-2" />Major airports</h4><ul className="space-y-2 text-gray-600"><li>• <strong>Tangier Ibn Battouta</strong>: Terminal 1 & 2</li><li>• <strong>Casablanca Mohammed V</strong>: Arrivals hall</li><li>• <strong>Marrakech Menara</strong>: Rental zone</li><li>• <strong>Agadir Al Massira</strong>: Dedicated counter</li><li>• <strong>Fes Saïss</strong>: Personalized welcome</li><li>• <strong>Rabat Salé</strong>: Express service</li></ul></div>
                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Building className="h-6 w-6 text-indigo-600 mr-2" />City centers</h4><ul className="space-y-2 text-gray-600"><li>• <strong>Tangier</strong>: Boulevard Mohammed VI</li><li>• <strong>Casablanca</strong>: Maarif center</li><li>• <strong>Rabat</strong>: Avenue Mohammed V</li><li>• <strong>Tetouan</strong>: Place Hassan II</li><li>• <strong>Oujda</strong>: Boulevard Zerktouni</li><li>• <strong>Nador</strong>: Avenue Youssef Ben Tachfine</li></ul></div>
                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Waves className="h-6 w-6 text-purple-600 mr-2" />Ports & borders</h4><ul className="space-y-2 text-gray-600"><li>• <strong>Tangier Ville Port</strong>: Passenger terminal</li><li>• <strong>Tangier Med</strong>: Welcome area</li><li>• <strong>Nador Port</strong>: Almeria link</li><li>• <strong>Fnideq</strong>: Ceuta border</li><li>• <strong>Bab Sebta</strong>: Crossing point</li><li>• <strong>Oujda</strong>: Algerian border</li></ul></div>
                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Home className="h-6 w-6 text-pink-600 mr-2" />Tourist zones</h4><ul className="space-y-2 text-gray-600"><li>• <strong>Chefchaouen</strong>: Historic center</li><li>• <strong>Asilah</strong>: Medina and beaches</li><li>• <strong>Larache</strong>: Marina</li><li>• <strong>Al Hoceima</strong>: Mediterranean bay</li></ul></div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">Premium National Service</h3><p className="mb-6 text-blue-100">Free delivery to airports, ports and city centers. 24/7 assistance.</p><Link href="/en/fleet" className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Book Now</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">agency@nassouhcar.com</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
