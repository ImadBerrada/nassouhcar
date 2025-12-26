import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Anchor, Navigation, Zap, Award, Ship, Timer, Compass, Waves, Globe, Route, Car } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/en/components/StructuredData'

export const metadata: Metadata = {
  title: 'Car Rental at Tangier Port 2025 - Express Service | Free Delivery',
  description: 'Car rental at Tangier Port ✓ Express service ✓ Free delivery ✓ Central location ✓ Modern fleet ✓ Online booking.',
  keywords: 'car rental tangier port, tangier port car hire, rent a car tangier port, tangier port auto hire',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/car-rental-tangier-port' },
  openGraph: {
    title: 'Car Rental at Tangier Port 2025 - Express Service | Free Delivery',
    description: 'Car rental at Tangier Port ✓ Express service ✓ Free delivery ✓ Central location.',
    images: ['/tangier-port-blog.jpg'],
  },
}

export default function CarRentalTangierPortBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <StructuredData type="Article" countryTarget="MA" language="en" />
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Ship className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Tangier Port</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Car Rental at Tangier Port
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Car rental at Tangier Port — express service and free delivery. Your mobility as soon as you arrive at Tangier’s historic port.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Published Jan 15, 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Historic Port</span>
              </div>
            </div>
            <Link href="/en/fleet" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book at Tangier Port
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tangier Port Service</h2>
            <p className="text-xl text-gray-600">Your mobility partner in the heart of the White City</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">10min</div>
              <div className="text-gray-600 font-medium">Express delivery</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Non‑stop service</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">80+</div>
              <div className="text-gray-600 font-medium">Vehicles at port</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">2500+</div>
              <div className="text-gray-600 font-medium">Port clients/year</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Anchor className="h-8 w-8 text-blue-600 mr-3" />
                Car rental at Tangier Port: Immediate mobility
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Tangier Port</strong> is the city’s historic port, right in the city center. Our <strong>car rental at Tangier Port</strong> lets you pick up your vehicle directly at the port, whether you arrive by ferry or start exploring from this central point.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Why choose our Tangier Port service?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Central location</strong>: In the heart of Tangier</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Express delivery</strong>: 10 minutes maximum</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Immediate access</strong>: Medina and downtown on foot</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Personal service</strong>: Dedicated port team</span></li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Route className="h-6 w-6 text-blue-600 mr-2" />
                Advantages of Tangier Port vs Tangier Med
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our <strong>car rental at Tangier Port</strong> offers unique advantages compared with Tangier Med:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><MapPin className="h-5 w-5 text-blue-600 mr-2" />Tangier Port (Center)</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>City center</strong>: Immediate access on foot</li>
                    <li>• <strong>Medina</strong>: 5 minutes walking</li>
                    <li>• <strong>Hotels</strong>: Close to accommodation</li>
                    <li>• <strong>Restaurants</strong>: Gastronomy district</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Ideal location</div>
                </div>
                <div className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Zap className="h-5 w-5 text-indigo-600 mr-2" />Our express service</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>10‑min delivery</strong>: Ultra‑fast service</li>
                    <li>• <strong>Dedicated team</strong>: Port specialists</li>
                    <li>• <strong>Express formalities</strong>: Simplified process</li>
                    <li>• <strong>Ready vehicle</strong>: Pre‑set GPS</li>
                  </ul>
                  <div className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Maximum efficiency</div>
                </div>
                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Compass className="h-5 w-5 text-green-600 mr-2" />Nearby destinations</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Tangier Medina</strong>: 5 min walk</li>
                    <li>• <strong>Kasbah</strong>: 10 min walk</li>
                    <li>• <strong>Corniche</strong>: 15 min drive</li>
                    <li>• <strong>Cap Spartel</strong>: 30 min drive</li>
                  </ul>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Privileged access</div>
                </div>
                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Globe className="h-5 w-5 text-amber-600 mr-2" />Recommended routes</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Tangier city tour</strong>: Full day</li>
                    <li>• <strong>Tetouan</strong>: 1h drive</li>
                    <li>• <strong>Chefchaouen</strong>: 2h drive</li>
                    <li>• <strong>Asilah</strong>: 45 min drive</li>
                  </ul>
                  <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Easy discovery</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Timer className="h-6 w-6 text-indigo-600 mr-2" />Pickup process at Tangier Port</h3>
                <p className="text-gray-700 mb-4">Our <strong>car rental at Tangier Port</strong> process is optimized for ultra‑fast pickup:</p>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start"><div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div><div><h5 className="font-semibold text-gray-900 mb-2">Booking with location</h5><p className="text-gray-600 text-sm">Specify "Tangier Port center" when booking</p></div></div>
                  <div className="flex items-start"><div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div><div><h5 className="font-semibold text-gray-900 mb-2">Confirmation and contact</h5><p className="text-gray-600 text-sm">We contact you 30 min before to confirm meeting point</p></div></div>
                  <div className="flex items-start"><div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div><div><h5 className="font-semibold text-gray-900 mb-2">Meet at the port</h5><p className="text-gray-600 text-sm">Our team waits for you at the main port entrance</p></div></div>
                  <div className="flex items-start"><div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div><div><h5 className="font-semibold text-gray-900 mb-2">Express formalities</h5><p className="text-gray-600 text-sm">Quick check and contract signature (max 5 minutes)</p></div></div>
                  <div className="flex items-start"><div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div><div><h5 className="font-semibold text-gray-900 mb-2">Immediate departure</h5><p className="text-gray-600 text-sm">Your vehicle is ready, GPS set to explore Tangier</p></div></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Car className="h-6 w-6 text-blue-600 mr-2" />Fleet adapted for Tangier Port</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Our <strong>car rental at Tangier Port</strong> offers a fleet perfectly suited to discovering the city and region:</p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>City cars</strong>: Perfect for the medina</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>Comfort sedans</strong>: Ideal for routes</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>Family SUVs</strong>: Space and comfort</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>Tangier GPS included</strong>: Optimized navigation</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>Air‑conditioning</strong>: Comfort year‑round</span></li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>Recent vehicles</strong>: Under 2 years</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>Professional maintenance</strong>: Guaranteed reliability</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>Thorough cleaning</strong>: Perfect hygiene</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>Local assistance</strong>: Tangier support 24/7</span></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-500 mr-3" /><span><strong>Unlimited mileage</strong>: Explore without limits</span></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Express Port Service</h3>
                <p className="mb-6 text-blue-100">Free delivery at Tangier city port. Pickup in under 10 minutes.</p>
                <Link href="/en/fleet" className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Book at the Port</Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">City Port advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between"><span className="text-gray-700">Medina</span><span className="text-sm text-blue-600 font-semibold">5 min walk</span></div>
                  <div className="flex items-center justify-between"><span className="text-gray-700">Kasbah</span><span className="text-sm text-blue-600 font-semibold">10 min walk</span></div>
                  <div className="flex items-center justify-between"><span className="text-gray-700">City center</span><span className="text-sm text-blue-600 font-semibold">Immediate</span></div>
                  <div className="flex items-center justify-between"><span className="text-gray-700">Corniche</span><span className="text-sm text-blue-600 font-semibold">15 min</span></div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg"><p className="text-sm text-blue-800 font-semibold">✓ Ideal central location</p></div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Express services</h3>
                <div className="space-y-3">
                  <div className="flex items-center"><Timer className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">10‑min delivery</span></div>
                  <div className="flex items-center"><Zap className="h-5 w-5 text-indigo-600 mr-3" /><span className="text-gray-700">Express formalities</span></div>
                  <div className="flex items-center"><MapPin className="h-5 w-5 text-purple-600 mr-3" /><span className="text-gray-700">Central location</span></div>
                  <div className="flex items-center"><Navigation className="h-5 w-5 text-amber-600 mr-3" /><span className="text-gray-700">Pre‑set GPS</span></div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tangier Port Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center"><Phone className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div>
                  <div className="flex items-center"><Mail className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">port@nassouhcar.com</span></div>
                  <div className="flex items-start"><MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" /><span className="text-gray-700">Tangier Port, Main Entrance</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions – Tangier Port</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">What’s the difference with Tangier Med?</h3>
              <p className="text-gray-600">Tangier city port is downtown, ideal to visit the medina and kasbah. Tangier Med is 45 km away, more suited for international ferries.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Where exactly are the keys handed over?</h3>
              <p className="text-gray-600">At the main entrance of Tangier Port, near the ticket desks. Our team waits with a sign with your name.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Is parking easy near the port?</h3>
              <p className="text-gray-600">Yes, several car parks are available near the port. We indicate the best spots when handing over the vehicle.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Is the service available on weekends?</h3>
              <p className="text-gray-600">Yes, our Tangier Port service runs 7 days a week, including weekends and public holidays.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
