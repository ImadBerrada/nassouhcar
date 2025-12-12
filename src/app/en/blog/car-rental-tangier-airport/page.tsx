import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, Phone, Mail, Calendar, Tag, Plane, Navigation } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Car Rental Tangier Airport 2025 - 24/7 Service | Nassoh Car',
  description: "Car rental at Tangier Ibn Battouta Airport. 24/7 service, free delivery, wide vehicle choice. Pick up your car on arrival!",
  keywords: 'car rental tangier airport, tangier airport car hire, rent a car ibn battouta, tangier airport car rental',
  openGraph: {
    title: 'Car Rental Tangier Airport 2025 - 24/7 Service | Nassoh Car',
    description: "Car rental at Tangier Ibn Battouta Airport. 24/7 service, free delivery, wide vehicle choice.",
    images: ['/tangier-airport-blog.jpg'],
  },
}

export default function CarRentalTangierAirportBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Plane className="h-6 w-6 text-amber-400 mr-2" /><span className="text-amber-400 font-semibold text-lg">Expert Guide 2025</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">Car Rental Tangier Airport</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Premium car rental service at Tangier Ibn Battouta Airport. Pick up your vehicle on arrival with our 24/7 service.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Published Jan 15, 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>7 min read</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Tangier Airport</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12 border border-cyan-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Airport Service?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">Tangier Ibn Battouta Airport is your gateway to northern Morocco. Our airport car rental service lets you start your Moroccan adventure as soon as you land, with a vehicle waiting and a dedicated team to welcome you.</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Airport Service Advantages</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="flex items-center mb-4"><Plane className="h-8 w-8 text-cyan-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Personal Welcome</h3></div><p className="text-gray-700">Our team welcomes you directly at Ibn Battouta Airport with a sign at your name. 24/7 service available for all flights, including late arrivals.</p></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="flex items-center mb-4"><Clock className="h-8 w-8 text-green-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Time Saving</h3></div><p className="text-gray-700">Avoid queues and lengthy formalities. Your vehicle is prepared, and you are on the road in under 15 minutes after arrival.</p></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="flex items-center mb-4"><Navigation className="h-8 w-8 text-blue-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Pre‑configured GPS</h3></div><p className="text-gray-700">All airport vehicles are equipped with GPS and the main Tangier destinations preloaded for your first drive.</p></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="flex items-center mb-4"><Shield className="h-8 w-8 text-purple-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Premium Insurance</h3></div><p className="text-gray-700">Full insurance included, 24/7 roadside assistance, and a replacement vehicle in case of technical issues.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Pick Up Your Car at Tangier Airport</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Four Simple Steps</h3>
              <div className="space-y-6">
                <div className="flex items-start"><div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div><div><h4 className="font-semibold text-gray-900 mb-2">Confirmed Booking</h4><p className="text-gray-700">Book on our <Link href="/en" className="text-cyan-600 hover:underline font-medium">website</Link> and add your flight number and arrival time at Ibn Battouta Airport.</p></div></div>
                <div className="flex items-start"><div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div><div><h4 className="font-semibold text-gray-900 mb-2">Airport Arrival</h4><p className="text-gray-700">At the airport exit, look for our representative with a "Nassoh Car" sign and your name in the arrivals area.</p></div></div>
                <div className="flex items-start"><div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div><div><h4 className="font-semibold text-gray-900 mb-2">Express Formalities</h4><p className="text-gray-700">Quick check of your documents (license, passport, credit card), contract signature and keys handover in under 10 minutes.</p></div></div>
                <div className="flex items-start"><div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div><div><h4 className="font-semibold text-gray-900 mb-2">Drive Off</h4><p className="text-gray-700">Quick vehicle inspection, GPS and equipment briefing, then direct departure from the airport parking.</p></div></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Info – Ibn Battouta Airport</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center"><MapPin className="h-6 w-6 text-blue-600 mr-2" />Location & Access</h3><ul className="space-y-2 text-gray-700"><li>📍 Ibn Battouta Airport, Tangier</li><li>15 km from city center</li><li>🛣️ Direct access to A1 motorway</li><li>🅿️ Free parking during formalities</li></ul></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center"><Clock className="h-6 w-6 text-green-600 mr-2" />Hours & Availability</h3><ul className="space-y-2 text-gray-700"><li>🕒 24/7 service</li><li>✈️ All flights covered</li><li>⏰ Minimum notice: 2h before arrival</li><li>📞 Real‑time flight tracking</li></ul></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Vehicles at Tangier Airport</h2>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <p className="text-lg text-gray-700 mb-6">Our <Link href="/en/fleet" className="text-blue-600 hover:underline font-medium">full fleet</Link> is available directly at the airport:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200"><h4 className="font-semibold text-gray-900 mb-2">Economy</h4><p className="text-sm text-gray-600 mb-2">Perfect for the city</p><p className="text-blue-600 font-bold">From €25/day</p></div>
                <div className="bg-white rounded-lg p-4 border border-gray-200"><h4 className="font-semibold text-gray-900 mb-2">SUV & Family</h4><p className="text-sm text-gray-600 mb-2">Comfort and space</p><p className="text-blue-600 font-bold">From €45/day</p></div>
                <div className="bg-white rounded-lg p-4 border border-gray-200"><h4 className="font-semibold text-gray-900 mb-2">Luxury & Premium</h4><p className="text-sm text-gray-600 mb-2">High‑end experience</p><p className="text-blue-600 font-bold">From €80/day</p></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tips for Your Arrival at Tangier Airport</h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Expert Advice</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Documents:</strong> Keep your license, passport and credit card easily accessible.</span></li>
                <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Communication:</strong> Save our number +212 631 63 00 13 before your flight.</span></li>
                <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Flight delay:</strong> We track your flight in real time — no worries if delayed.</span></li>
                <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>First drive:</strong> Take a few minutes to get familiar with the vehicle before leaving the airport.</span></li>
                <li className="flex items-start"><span className="text-green-600 font-bold mr-3">✓</span><span><strong>Toward Tangier:</strong> Follow “Tangier Center” signs to reach downtown in ~20 minutes.</span></li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Destinations from the Airport</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-lg font-semibold text-gray-900 mb-4">City Center</h3><ul className="space-y-2 text-gray-700"><li>• Downtown Tangier: 20 minutes</li><li>• Tangier Medina: 25 minutes</li><li>• Tangier Ville Port: 30 minutes</li><li>• Tangier Beaches: 25 minutes</li></ul></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Trips</h3><ul className="space-y-2 text-gray-700"><li>• Asilah: 45 minutes</li><li>• Tetouan: 1h15</li><li>• Chefchaouen: 2h00</li><li>• Tangier Med Port: 45 minutes</li></ul></div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Book Your Airport Car</h2>
              <p className="text-xl mb-8 opacity-90">Premium 24/7 service at Tangier Ibn Battouta Airport. Your vehicle waits for you on arrival!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en" className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><Plane className="h-5 w-5 mr-2" />Book at Airport</Link>
                <Link href="/en/fleet" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />See Vehicles</Link>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Airport Support 24/7</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3"><Phone className="h-6 w-6 text-cyan-600" /><div><p className="font-semibold text-gray-900">Airport Hotline</p><p className="text-gray-700">+212 631 63 00 13</p></div></div>
                <div className="flex items-center justify-center space-x-3"><Mail className="h-6 w-6 text-cyan-600" /><div><p className="font-semibold text-gray-900">Email Support</p><p className="text-gray-700">contact@nassohcar.com</p></div></div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
