import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Navigation, Zap, Award, Ship, Timer, Compass, Globe, Route, Car, Building } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/en/components/StructuredData'

export const metadata: Metadata = {
  title: 'Car Rental Tangier Med 2025 - Industrial & Port Zones | 24/7',
  description: 'Car rental in Tangier Med areas ✓ Industrial platforms ✓ Logistics zones ✓ Ferry access ✓ 24/7 service ✓ Free delivery to business parks.',
  keywords: 'car rental tangier med, tangier med car hire, rent a car tangier med, tangier med logistics car rental',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-tangier-med' },
  openGraph: {
    title: 'Car Rental Tangier Med 2025 - Industrial & Port Zones | 24/7',
    description: 'Car rental in Tangier Med industrial and logistics zones ✓ Free delivery ✓ 24/7 service.',
    images: ['/tangier-med-blog.jpg'],
  },
}

export default function CarRentalTangierMedBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <StructuredData type="Article" countryTarget="MA" language="en" />
      <div className="relative bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-6 w-6 text-teal-400 mr-2" />
              <span className="text-teal-400 font-semibold text-lg">Tangier Med Zones</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
              Car Rental in Tangier Med
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Car rental service in Tangier Med’s industrial and logistics zones. Free delivery to business parks and coordinated service with Tangier Med Port.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Published Jan 15, 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>7 min read</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Industrial Zones</span></div>
            </div>
            <Link href="/en/fleet" className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book for Tangier Med Zones
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service in Tangier Med Platforms</h2>
            <p className="text-xl text-gray-600">Business‑friendly car rental for industrial and logistics operations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-teal-600 mb-2">15min</div><div className="text-gray-600 font-medium">Delivery to parks</div></div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div><div className="text-gray-600 font-medium">Operational support</div></div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-amber-600 mb-2">120+</div><div className="text-gray-600 font-medium">Vehicles available</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">3000+</div><div className="text-gray-600 font-medium">Business clients/year</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Building className="h-8 w-8 text-teal-600 mr-3" />Tangier Med Business Zones</h2>
              <p className="text-gray-700 leading-relaxed mb-6">We provide <strong>car rental in Tangier Med</strong> across the main industrial and logistics platforms:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4">Tangier Med Zones</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• Logistics platforms (TMZ)</li><li>• Free zones and bonded warehouses</li><li>• Customs and administrative areas</li><li>• Commercial areas and hotels</li></ul><div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Full coverage</div></div>
                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4">Industrial Parks</h4><ul className="text-gray-600 space-y-2 mb-4"><li>• Automotive suppliers clusters</li><li>• Manufacturing platforms</li><li>• Warehousing areas</li><li>• Business services</li></ul><div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Business oriented</div></div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Timer className="h-6 w-6 text-cyan-600 mr-2" />Operational Process</h3>
                <p className="text-gray-700 mb-4">Our <strong>car rental in Tangier Med</strong> process is designed for business efficiency:</p>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div><div><h5 className="font-semibold text-gray-900 mb-2">Booking with site details</h5><p className="text-gray-600 text-sm">Provide park name, zone and delivery point</p></div></div>
                  <div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div><div><h5 className="font-semibold text-gray-900 mb-2">Access coordination</h5><p className="text-gray-600 text-sm">We coordinate with security and site access</p></div></div>
                  <div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div><div><h5 className="font-semibold text-gray-900 mb-2">Express formalities</h5><p className="text-gray-600 text-sm">Contract and keys handover in under 10 minutes</p></div></div>
                  <div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div><div><h5 className="font-semibold text-gray-900 mb-2">Operational support</h5><p className="text-gray-600 text-sm">24/7 assistance and replacement vehicle if needed</p></div></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Car className="h-6 w-6 text-teal-600 mr-2" />Fleet for Tangier Med Operations</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Our fleet is adapted to the needs of <strong>Tangier Med</strong> business clients:</p>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Sedans</strong>: Comfort for executives</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>SUVs</strong>: Space for equipment</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Minivans</strong>: Teams and luggage</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>GPS included</strong>: Industrial sites mapped</span></li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Air‑conditioning</strong>: Year‑round comfort</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Recent vehicles</strong>: Under 3 years</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Unlimited mileage</strong>: Regional operations</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Full insurance</strong>: Comprehensive cover</span></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Tangier Med Business Service</h3>
                <p className="mb-6 text-teal-100">Free delivery to logistics platforms and industrial parks. Business‑friendly formalities.</p>
                <Link href="/en/fleet" className="block w-full bg-white text-teal-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Book Tangier Med</Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Main Platforms</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between"><span className="text-gray-700">TMZ Logistics</span><span className="text-sm text-teal-600 font-semibold">Delivery 15 min</span></div>
                  <div className="flex items-center justify-between"><span className="text-gray-700">Free Zone</span><span className="text-sm text-teal-600 font-semibold">Access coordinated</span></div>
                  <div className="flex items-center justify-between"><span className="text-gray-700">Industrial Parks</span><span className="text-sm text-teal-600 font-semibold">24/7 service</span></div>
                  <div className="flex items-center justify-between"><span className="text-gray-700">Hotels & Business</span><span className="text-sm text-teal-600 font-semibold">VIP delivery</span></div>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded-lg"><p className="text-sm text-teal-800 font-semibold">✓ Full coverage of Tangier Med zones</p></div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tangier Med Contact</h3>
                <div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-teal-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-teal-600 mr-3" /><span className="text-gray-700">tangermed@nassouhcar.com</span></div><div className="flex items-start"><MapPin className="h-5 w-5 text-teal-600 mr-3 mt-1" /><span className="text-gray-700">Tangier Med Zones</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions – Tangier Med</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">Do you deliver to industrial parks?</h3><p className="text-gray-600">Yes, we deliver directly to all Tangier Med industrial platforms and logistics zones, coordinated with site security.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">Is the service available at night?</h3><p className="text-gray-600">Yes, our business service operates 24/7 to match operational constraints and ferry schedules.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">Can you deliver to hotels in Tangier Med?</h3><p className="text-gray-600">Yes, we deliver to hotels and business areas within the Tangier Med complex.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">Is insurance included?</h3><p className="text-gray-600">Comprehensive insurance is included with 24/7 assistance and a replacement vehicle when required.</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
