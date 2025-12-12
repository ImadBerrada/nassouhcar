import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Navigation, Zap, Award, Ship, Timer, Compass, Waves, Globe, Route, Car, Shield } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/en/components/StructuredData'

export const metadata: Metadata = {
  title: 'Car Rental at Tangier Med Port 2025 - Ferry & Cargo | 24/7 Service',
  description: 'Car rental at Tangier Med Port ✓ 24/7 ferry service ✓ Free delivery ✓ Fleet adapted for international travelers ✓ Real-time coordination.',
  keywords: 'car rental tangier med port, tangier med port car hire, rent a car tangier med, ferry car rental tangier med',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-tangier-port-med' },
  openGraph: {
    title: 'Car Rental at Tangier Med Port 2025 - Ferry & Cargo | 24/7 Service',
    description: 'Car rental at Tangier Med Port ✓ 24/7 ferry service ✓ Free delivery ✓ International fleet.',
    images: ['/tangier-port-med-blog.jpg'],
  },
}

export default function CarRentalTangierMedPortBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <StructuredData type="Article" countryTarget="MA" language="en" />
      <div className="relative bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Ship className="h-6 w-6 text-teal-400 mr-2" />
              <span className="text-teal-400 font-semibold text-lg">Tangier Med Port</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
              Car Rental at Tangier Med Port
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Car rental at Tangier Med Port — Africa’s largest port complex. 24/7 ferry service, free delivery, and a fleet adapted to international travelers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Published Jan 15, 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>8 min read</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>International Port</span></div>
            </div>
            <Link href="/en/fleet" className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book for Tangier Med
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service at Africa’s largest port</h2>
            <p className="text-xl text-gray-600">Your mobility partner at the Tangier Med port complex</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-teal-600 mb-2">24/7</div><div className="text-gray-600 font-medium">Continuous ferry service</div></div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-cyan-600 mb-2">20min</div><div className="text-gray-600 font-medium">Delivery at port</div></div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-amber-600 mb-2">150+</div><div className="text-gray-600 font-medium">Vehicles available</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">5000+</div><div className="text-gray-600 font-medium">Ferry clients/year</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Ship className="h-8 w-8 text-teal-600 mr-3" />Car rental at Tangier Med Port: Gateway to Europe</h2>
              <p className="text-gray-700 leading-relaxed mb-6">The <strong>Tangier Med Port</strong> is Africa’s largest port complex and the main maritime gateway between Europe and Africa. Our <strong>car rental at Tangier Med Port</strong> lets you pick up your vehicle right at the port, whether you arrive by ferry from Spain, Italy or France.</p>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Award className="h-6 w-6 text-teal-600 mr-2" />Why choose our Tangier Med service?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" /><span><strong>International port</strong>: Largest in Africa</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" /><span><strong>24/7 ferry service</strong>: All Europe–Morocco ferries</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Multilingual team</strong>: English, French, Spanish</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" /><span><strong>International fleet</strong>: Suited for European travelers</span></li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Waves className="h-6 w-6 text-teal-600 mr-2" />International ferries – Full coverage</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Our <strong>car rental at Tangier Med Port</strong> covers all ferries from Europe:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Ship className="h-5 w-5 text-teal-600 mr-2" />Ferries from Spain</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Algeciras – Tangier Med</strong>: 1h30 (frequent)</li>
                    <li>• <strong>Tarifa – Tangier Med</strong>: 1h00 (fast)</li>
                    <li>• <strong>Barcelona – Tangier Med</strong>: 30h (cargo)</li>
                    <li>• <strong>Motril – Tangier Med</strong>: 7h (night)</li>
                  </ul>
                  <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Main service</div>
                </div>
                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Globe className="h-5 w-5 text-cyan-600 mr-2" />Ferries from Europe</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Sète – Tangier Med</strong>: 36h (France)</li>
                    <li>• <strong>Genoa – Tangier Med</strong>: 48h (Italy)</li>
                    <li>• <strong>Civitavecchia – Tangier Med</strong>: 52h (Rome)</li>
                    <li>• <strong>Livorno – Tangier Med</strong>: 44h (Tuscany)</li>
                  </ul>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Long routes</div>
                </div>
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Timer className="h-5 w-5 text-blue-600 mr-2" />Our coordination</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Real‑time tracking</strong>: All ferries</li>
                    <li>• <strong>Schedule adjustments</strong>: Delays handled</li>
                    <li>• <strong>24/7 team</strong>: Continuous service</li>
                    <li>• <strong>Communication</strong>: Multilingual WhatsApp</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Total reliability</div>
                </div>
                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><MapPin className="h-5 w-5 text-amber-600 mr-2" />Delivery points</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Passenger terminal</strong>: Main exit</li>
                    <li>• <strong>Commercial area</strong>: Tangier Med Zones</li>
                    <li>• <strong>Nearby hotels</strong>: Delivery possible</li>
                    <li>• <strong>Secure parking</strong>: Dedicated area</li>
                  </ul>
                  <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Maximum flexibility</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Zap className="h-6 w-6 text-cyan-600 mr-2" />Pickup process at Tangier Med</h3>
                <p className="text-gray-700 mb-4">Our <strong>car rental at Tangier Med Port</strong> process is tailored for international travelers:</p>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div><div><h5 className="font-semibold text-gray-900 mb-2">Booking with ferry</h5><p className="text-gray-600 text-sm">Provide your company, ferry and planned arrival time</p></div></div>
                  <div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div><div><h5 className="font-semibold text-gray-900 mb-2">Automatic tracking</h5><p className="text-gray-600 text-sm">We track your ferry in real time and adapt</p></div></div>
                  <div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div><div><h5 className="font-semibold text-gray-900 mb-2">Multilingual welcome</h5><p className="text-gray-600 text-sm">Our team welcomes you in your language</p></div></div>
                  <div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div><div><h5 className="font-semibold text-gray-900 mb-2">International formalities</h5><p className="text-gray-600 text-sm">Check international license and travel documents</p></div></div>
                  <div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div><div><h5 className="font-semibold text-gray-900 mb-2">Departure to your destination</h5><p className="text-gray-600 text-sm">GPS set, route briefing, 24/7 assistance</p></div></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Car className="h-6 w-6 text-teal-600 mr-2" />International fleet at Tangier Med</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Our <strong>car rental at Tangier Med Port</strong> offers a fleet specifically adapted to international travelers:</p>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Spacious vehicles</strong>: For ferry luggage</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Europe–Morocco GPS</strong>: Full navigation</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Air‑conditioning</strong>: Guaranteed comfort</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Full fuel</strong>: Ready to go</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>International insurance</strong>: Full coverage</span></li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Recent vehicles</strong>: Under 3 years</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Premium maintenance</strong>: European standards</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Thorough cleaning</strong>: Perfect hygiene</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Multilingual assistance</strong>: 24/7 everywhere</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-3" /><span><strong>Unlimited mileage</strong>: Total freedom</span></li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Compass className="h-6 w-6 text-teal-600 mr-2" />International travelers guide</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Optimize your <strong>car rental at Tangier Med Port</strong> with tips for international travelers:</p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Practical tips</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Before boarding</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>International license</strong>: Required in Morocco</li>
                      <li>• <strong>Confirmed booking</strong>: Email confirmation</li>
                      <li>• <strong>Ferry number</strong>: Company and schedule</li>
                      <li>• <strong>WhatsApp enabled</strong>: Direct communication</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">On arrival at Tangier Med</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Look for "Nassoh Car"</strong>: Sign with your name</li>
                      <li>• <strong>Documents ready</strong>: License + passport</li>
                      <li>• <strong>Vehicle check</strong>: Condition and equipment</li>
                      <li>• <strong>Route briefing</strong>: Driving tips in Morocco</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Route className="h-6 w-6 text-teal-600 mr-2" />Destinations from Tangier Med</h3>
              <p className="text-gray-700 leading-relaxed mb-6">From Tangier Med, explore Morocco with your <strong>rental car</strong>:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">Northern Morocco</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Tangier center</strong>: 45 min</li>
                    <li>• <strong>Tetouan</strong>: 30 min</li>
                    <li>• <strong>Chefchaouen</strong>: 1h30</li>
                    <li>• <strong>Asilah</strong>: 1h15</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-4">Imperial cities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Rabat</strong>: 2h30</li>
                    <li>• <strong>Casablanca</strong>: 3h30</li>
                    <li>• <strong>Fez</strong>: 3h00</li>
                    <li>• <strong>Meknes</strong>: 2h45</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Navigation className="h-6 w-6 text-teal-600 mr-2" />International rates at Tangier Med</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Special rates for <strong>car rental at Tangier Med Port</strong>:</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl">
                  <thead className="bg-gray-50"><tr><th className="px-6 py-4 text-left font-semibold text-gray-900">Category</th><th className="px-6 py-4 text-center font-semibold text-teal-600">Price/day</th><th className="px-6 py-4 text-center font-semibold text-gray-600">Ideal for</th></tr></thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="px-6 py-4 font-medium text-gray-900">Economy</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">220 MAD</td><td className="px-6 py-4 text-center text-gray-600">Couples, short stays</td></tr>
                    <tr className="bg-gray-50"><td className="px-6 py-4 font-medium text-gray-900">Sedan</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">320 MAD</td><td className="px-6 py-4 text-center text-gray-600">Families, comfort</td></tr>
                    <tr><td className="px-6 py-4 font-medium text-gray-900">SUV</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">480 MAD</td><td className="px-6 py-4 text-center text-gray-600">Groups, ferry luggage</td></tr>
                    <tr className="bg-gray-50"><td className="px-6 py-4 font-medium text-gray-900">Minivan</td><td className="px-6 py-4 text-center text-teal-600 font-semibold">550 MAD</td><td className="px-6 py-4 text-center text-gray-600">Large families</td></tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">International Ferry Service</h3>
                <p className="mb-6 text-teal-100">Free delivery at Tangier Med Port. 24/7 service for all Europe–Morocco ferries.</p>
                <Link href="/en/fleet" className="block w-full bg-white text-teal-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Book Tangier Med</Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Main ferries</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between"><span className="text-gray-700">Algeciras (ESP)</span><span className="text-sm text-teal-600 font-semibold">1h30</span></div>
                  <div className="flex items-center justify-between"><span className="text-gray-700">Tarifa (ESP)</span><span className="text-sm text-teal-600 font-semibold">1h00</span></div>
                  <div className="flex items-center justify-between"><span className="text-gray-700">Sète (FRA)</span><span className="text-sm text-teal-600 font-semibold">36h</span></div>
                  <div className="flex items-center justify-between"><span className="text-gray-700">Genoa (ITA)</span><span className="text-sm text-teal-600 font-semibold">48h</span></div>
                </div>
                <div className="mt-4 p-3 bg-teal-50 rounded-lg"><p className="text-sm text-teal-800 font-semibold">✓ All European ferries covered</p></div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">International services</h3>
                <div className="space-y-3">
                  <div className="flex items-center"><Globe className="h-5 w-5 text-teal-600 mr-3" /><span className="text-gray-700">Multilingual team</span></div>
                  <div className="flex items-center"><Timer className="h-5 w-5 text-cyan-600 mr-3" /><span className="text-gray-700">Real‑time ferry tracking</span></div>
                  <div className="flex items-center"><Shield className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">International insurance</span></div>
                  <div className="flex items-center"><Navigation className="h-5 w-5 text-amber-600 mr-3" /><span className="text-gray-700">Europe–Morocco GPS</span></div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tangier Med Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center"><Phone className="h-5 w-5 text-teal-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div>
                  <div className="flex items-center"><Mail className="h-5 w-5 text-teal-600 mr-3" /><span className="text-gray-700">tangermed@nassouhcar.com</span></div>
                  <div className="flex items-start"><MapPin className="h-5 w-5 text-teal-600 mr-3 mt-1" /><span className="text-gray-700">Tangier Med Port, Passenger Terminal</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions – Tangier Med Port</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">Do I need an international driving license?</h3><p className="text-gray-600">Yes, the international driving license is required in Morocco for foreign nationals. Make sure you have it before your trip.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">What if my ferry is delayed by several hours?</h3><p className="text-gray-600">We track all ferries in real time. Our team adapts automatically and will wait for you regardless of delays, at no extra cost.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">Does insurance cover all of Morocco?</h3><p className="text-gray-600">Yes, our comprehensive insurance covers the entire Moroccan territory. You can travel everywhere with peace of mind.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">Can I return the car in another city?</h3><p className="text-gray-600">Yes, returns are possible at all our agencies: Tangier, Tetouan, Rabat, Casablanca. Total flexibility for your route in Morocco.</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
