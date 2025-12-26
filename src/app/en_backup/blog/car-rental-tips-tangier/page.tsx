import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, Phone, Mail, Calendar, Tag, Navigation, Fuel, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/en/components/StructuredData'

export const metadata: Metadata = {
  title: 'Car Rental Tips Tangier 2025 – Expert Guide | Save & Drive Smart',
  description: 'Car rental tips in Tangier ✓ Expert advice ✓ Safety ✓ Savings ✓ Navigation ✓ Insurance ✓ Everything you need before booking.',
  keywords: 'car rental tips tangier, tangier driving tips, rent a car advice tangier, car hire tips tangier',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-tips-tangier' },
  openGraph: {
    title: 'Car Rental Tips Tangier 2025 – Expert Guide | Save & Drive Smart',
    description: 'Expert tips for car rental in Tangier ✓ Safety ✓ Savings ✓ Navigation ✓ Insurance.',
    images: ['/tangier-car-rental-tips.jpg'],
  },
}

export default function CarRentalTipsTangierBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50">
      <StructuredData type="Article" countryTarget="MA" language="en" />
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Lightbulb className="h-6 w-6 text-amber-400 mr-2" /><span className="text-amber-400 font-semibold text-lg">Expert Advice</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">Car Rental Tips – Tangier</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Essential tips to rent and drive smart in Tangier: safety, savings, navigation and insurance.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Published Jan 15, 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>7 min read</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Tips & Advice</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 mb-12 border border-yellow-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Before You Book</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span><strong>Compare rates</strong> and check what’s included (insurance, mileage, GPS).</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span><strong>Choose the right car</strong> for Tangier: compact for medina, SUV for trips.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span><strong>Plan pickup location</strong>: city center, airport or port depending on needs.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span><strong>Check deposit</strong>: standard 5,000 MAD refundable, via credit card.</span></li>
            </ul>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Driving in Tangier – Safety First</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="flex items-center mb-4"><AlertTriangle className="h-8 w-8 text-red-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Key Safety Rules</h3></div><ul className="space-y-2 text-gray-700"><li>• Wear seat belts at all times</li><li>• Respect speed limits</li><li>• Keep safe distances</li><li>• No phone while driving</li></ul></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="flex items-center mb-4"><Fuel className="h-8 w-8 text-green-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Fuel & Parking</h3></div><ul className="space-y-2 text-gray-700"><li>• Many stations in Tangier</li><li>• Prefer guarded car parks</li><li>• Use blue zones in center</li><li>• Return with same fuel level</li></ul></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Navigation & Equipment</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><Navigation className="h-5 w-5 text-blue-600 mr-2 mt-1" /><span>Use GPS with preloaded Tangier destinations</span></li>
                <li className="flex items-start"><Car className="h-5 w-5 text-blue-600 mr-2 mt-1" /><span>Check AC, lights, tires and spare wheel</span></li>
                <li className="flex items-start"><Shield className="h-5 w-5 text-blue-600 mr-2 mt-1" /><span>Carry insurance papers and emergency contacts</span></li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Book Smart, Drive Safe</h2>
              <p className="text-xl mb-8 opacity-90">Follow our expert tips and enjoy a smooth experience in Tangier.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en" className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />Book Now</Link>
                <Link href="/en/fleet" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center justify-center"><MapPin className="h-5 w-5 mr-2" />See Vehicles</Link>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Help?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3"><Phone className="h-6 w-6 text-amber-600" /><div><p className="font-semibold text-gray-900">Phone</p><p className="text-gray-700">+212 631 63 00 13</p></div></div>
                <div className="flex items-center justify-center space-x-3"><Mail className="h-6 w-6 text-amber-600" /><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-700">contact@nassohcar.com</p></div></div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
