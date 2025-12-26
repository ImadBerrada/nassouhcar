import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Key, Settings, Fuel, Navigation, Timer, Luggage, Globe, Trophy, ThumbsUp, Heart, Medal, Crown, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/en/components/StructuredData'

export const metadata: Metadata = {
  title: 'Best Rated Car Rentals Tangier 2025 ⭐ 4.9/5 ✓ No.1',
  description: 'Best rated car rentals in Tangier ⭐ 4.9/5 ✓ 2500+ customer reviews ✓ Award‑winning service ✓ Premium fleet ✓ Transparent prices ✓ Satisfaction guaranteed.',
  keywords: 'best rated car rentals tangier, top car hire tangier, tangier car rental reviews, best agency car rental tangier',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/best-rated-car-rentals-tangier' },
  openGraph: {
    title: 'Best Rated Car Rentals Tangier 2025 ⭐ 4.9/5 ✓ No.1',
    description: 'Best rated car rentals in Tangier ⭐ 4.9/5 ✓ 2500+ reviews ✓ Award‑winning service.',
    images: ['/tanger-best-rated-car-rental.webp'],
  },
}

export default function BestRatedCarRentalsTangierBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <StructuredData type="Article" countryTarget="MA" language="en" />
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Trophy className="h-6 w-6 text-amber-400 mr-2" /><span className="text-amber-400 font-semibold text-lg">No.1 in Tangier</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-300 to-red-400 bg-clip-text text-transparent leading-tight">Best Rated Car Rentals<br />in Tangier</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">⭐ Average rating 4.9/5 with 2500+ authentic reviews. Discover why we are Tangier’s highest‑rated car rental service.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Published Jan 15, 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>8 min read</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Customer Reviews</span></div>
            </div>
            <Link href="/en/fleet" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Book Now<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Are We the Best Rated?</h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-amber-600 mb-2">4.9/5</div><div className="text-gray-600 font-medium">Average rating</div><div className="flex justify-center mt-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div></div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-orange-600 mb-2">2500+</div><div className="text-gray-600 font-medium">Customer reviews</div></div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-red-600 mb-2">98%</div><div className="text-gray-600 font-medium">Satisfaction</div></div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-pink-600 mb-2">No.1</div><div className="text-gray-600 font-medium">Tangier ranking</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Crown className="h-8 w-8 text-amber-600 mr-3" />Nassoh Car: Excellence Recognized in Tangier</h2>
              <p className="text-gray-700 leading-relaxed mb-6">With an <strong>average rating of 4.9/5 based on more than 2500 customer reviews</strong>, Nassoh Car is the go‑to reference for <strong>best rated car rentals in Tangier</strong>. This recognition comes from our consistent commitment to service excellence.</p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Medal className="h-6 w-6 text-amber-600 mr-2" />Our Distinctions and Recognitions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><Trophy className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Excellence Award 2024</strong>: Best car rental agency in Tangier</span></li>
                  <li className="flex items-start"><Award className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Quality Certificate</strong>: Outstanding customer service</span></li>
                  <li className="flex items-start"><Star className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Top Rated 2024</strong>: 4.9/5 maintained throughout the year</span></li>
                  <li className="flex items-start"><Heart className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Loyal Clients</strong>: 85% repeat customers</span></li>
                </ul>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><ThumbsUp className="h-6 w-6 text-amber-600 mr-2" />What Our Clients Say</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Our <strong>authentic customer reviews</strong> show the quality of our service. Here’s why we are the best rated:</p>
              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4"><div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center"><span className="text-amber-600 font-bold text-lg">MH</span></div></div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2"><h4 className="font-bold text-gray-900 mr-3">Mohammed H.</h4><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div></div>
                      <p className="text-gray-600 italic mb-2">"Exceptional service! Impeccable car, professional team, transparent price. Highly recommend Nassoh Car in Tangier."</p>
                      <div className="text-sm text-gray-500">Verified • Jan 2025</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4"><div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"><span className="text-orange-600 font-bold text-lg">SF</span></div></div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2"><h4 className="font-bold text-gray-900 mr-3">Sarah F.</h4><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div></div>
                      <p className="text-gray-600 italic mb-2">"First time in Morocco, perfect service! Delivery at the airport, recent car, 24/7 assistance. Thank you for the experience!"</p>
                      <div className="text-sm text-gray-500">Verified • Jan 2025</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4"><div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"><span className="text-red-600 font-bold text-lg">AB</span></div></div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2"><h4 className="font-bold text-gray-900 mr-3">Ahmed B.</h4><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div></div>
                      <p className="text-gray-600 italic mb-2">"Loyal customer for 3 years. Same quality every time, competitive prices, well‑maintained vehicles. The benchmark in Tangier!"</p>
                      <div className="text-sm text-gray-500">Verified • Dec 2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Settings className="h-6 w-6 text-amber-600 mr-2" />The Pillars of Our Excellence</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Our position as <strong>best rated car rentals in Tangier</strong> rests on 8 fundamental pillars:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><div className="flex items-start"><div className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Premium Fleet</h4><ul className="text-gray-600 space-y-2"><li>• <strong>Recent vehicles</strong>: 2020–2024</li><li>• <strong>Rigorous maintenance</strong>: Frequent checks</li><li>• <strong>Impeccable cleanliness</strong>: Professional cleaning</li><li>• <strong>Modern equipment</strong>: GPS, AC</li></ul></div></div></div>
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><div className="flex items-start"><div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Customer Service</h4><ul className="text-gray-600 space-y-2"><li>• <strong>Trained team</strong>: Experienced professionals</li><li>• <strong>Multilingual</strong>: English, French, Arabic</li><li>• <strong>Availability</strong>: 24/7</li><li>• <strong>Responsiveness</strong>: Under 5 min</li></ul></div></div></div>
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><div className="flex items-start"><div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Transparent Pricing</h4><ul className="text-gray-600 space-y-2"><li>• <strong>Clear rates</strong>: No hidden fees</li><li>• <strong>Detailed quote</strong>: All‑inclusive</li><li>• <strong>Competitive prices</strong>: Best value</li><li>• <strong>Promotions</strong>: Regular offers</li></ul></div></div></div>
                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><div className="flex items-start"><div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Flexibility</h4><ul className="text-gray-600 space-y-2"><li>• <strong>Adapted schedules</strong>: According to needs</li><li>• <strong>Multiple locations</strong>: Pickup/return</li><li>• <strong>Modifications</strong>: Flexible booking</li><li>• <strong>Cancellations</strong>: Fair conditions</li></ul></div></div></div>
                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><div className="flex items-start"><div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">5</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Safety</h4><ul className="text-gray-600 space-y-2"><li>• <strong>Full insurance</strong>: Comprehensive included</li><li>• <strong>Safe vehicles</strong>: Technical inspections</li><li>• <strong>Roadside assistance</strong>: 24/7</li><li>• <strong>Replacement</strong>: Courtesy car</li></ul></div></div></div>
                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><div className="flex items-start"><div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">6</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Innovation</h4><ul className="text-gray-600 space-y-2"><li>• <strong>Online booking</strong>: Simple and fast</li><li>• <strong>Mobile app</strong>: Full management</li><li>• <strong>Secure payment</strong>: Multiple options</li><li>• <strong>Real‑time tracking</strong>: Vehicle location</li></ul></div></div></div>
                <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><div className="flex items-start"><div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">7</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Experience</h4><ul className="text-gray-600 space-y-2"><li>• <strong>15 years expertise</strong>: Market knowledge</li><li>• <strong>Wide network</strong>: National presence</li><li>• <strong>Partnerships</strong>: Hotels, travel agencies</li><li>• <strong>Reputation</strong>: Recognized reference</li></ul></div></div></div>
                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><div className="flex items-start"><div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">8</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Commitment</h4><ul className="text-gray-600 space-y-2"><li>• <strong>Guaranteed satisfaction</strong>: Quality commitment</li><li>• <strong>Continuous improvement</strong>: Client feedback</li><li>• <strong>Responsibility</strong>: Environment, society</li><li>• <strong>Values</strong>: Integrity, respect, excellence</li></ul></div></div></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Calculator className="h-6 w-6 text-amber-600 mr-2" />Comparative Analysis: Why We’re No.1</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Objective comparison with competition in Tangier:</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-amber-50 to-orange-50"><tr><th className="px-6 py-4 text-left font-semibold text-gray-900">Criterion</th><th className="px-6 py-4 text-center font-semibold text-amber-600">Nassoh Car</th><th className="px-6 py-4 text-center font-semibold text-gray-500">Competitor A</th><th className="px-6 py-4 text-center font-semibold text-gray-500">Competitor B</th><th className="px-6 py-4 text-center font-semibold text-gray-500">Competitor C</th></tr></thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-medium text-gray-900">Average rating</td><td className="px-6 py-4 text-center text-amber-600 font-bold">4.9/5 ⭐</td><td className="px-6 py-4 text-center text-gray-500">4.2/5</td><td className="px-6 py-4 text-center text-gray-500">3.8/5</td><td className="px-6 py-4 text-center text-gray-500">4.1/5</td></tr>
                    <tr className="bg-amber-50 hover:bg-amber-100"><td className="px-6 py-4 font-medium text-gray-900">Number of reviews</td><td className="px-6 py-4 text-center text-amber-600 font-bold">2500+</td><td className="px-6 py-4 text-center text-gray-500">800</td><td className="px-6 py-4 text-center text-gray-500">450</td><td className="px-6 py-4 text-center text-gray-500">1200</td></tr>
                    <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-medium text-gray-900">Fleet (vehicles)</td><td className="px-6 py-4 text-center text-amber-600 font-bold">200+</td><td className="px-6 py-4 text-center text-gray-500">80</td><td className="px-6 py-4 text-center text-gray-500">45</td><td className="px-6 py-4 text-center text-gray-500">120</td></tr>
                    <tr className="bg-amber-50 hover:bg-amber-100"><td className="px-6 py-4 font-medium text-gray-900">24/7 service</td><td className="px-6 py-4 text-center text-amber-600 font-bold">✓ Yes</td><td className="px-6 py-4 text-center text-gray-500">✗ No</td><td className="px-6 py-4 text-center text-gray-500">✗ No</td><td className="px-6 py-4 text-center text-gray-500">✓ Limited</td></tr>
                    <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-medium text-gray-900">Insurance included</td><td className="px-6 py-4 text-center text-amber-600 font-bold">✓ Comprehensive</td><td className="px-6 py-4 text-center text-gray-500">✓ Basic</td><td className="px-6 py-4 text-center text-gray-500">✗ Optional</td><td className="px-6 py-4 text-center text-gray-500">✓ Basic</td></tr>
                    <tr className="bg-amber-50 hover:bg-amber-100"><td className="px-6 py-4 font-medium text-gray-900">Transparent prices</td><td className="px-6 py-4 text-center text-amber-600 font-bold">✓ 100%</td><td className="px-6 py-4 text-center text-gray-500">✗ Hidden fees</td><td className="px-6 py-4 text-center text-gray-500">✗ Surcharges</td><td className="px-6 py-4 text-center text-gray-500">✓ Partial</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Trophy className="h-6 w-6 text-green-600 mr-2" />Result: Why We Lead the Rankings</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center"><div className="text-3xl font-bold text-green-600 mb-2">98%</div><div className="text-gray-700">Satisfaction rate</div></div>
                  <div className="text-center"><div className="text-3xl font-bold text-green-600 mb-2">85%</div><div className="text-gray-700">Loyal clients</div></div>
                  <div className="text-center"><div className="text-3xl font-bold text-green-600 mb-2">95%</div><div className="text-gray-700">Recommendations</div></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Gift className="h-6 w-6 text-amber-600 mr-2" />Exclusive Benefits for VIP Clients</h3>
              <p className="text-gray-700 leading-relaxed mb-6">As the <strong>highest‑rated agency in Tangier</strong>, we offer unique privileges:</p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Crown className="h-6 w-6 text-purple-600 mr-2" />Premium Loyalty Program</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" /><span className="text-gray-700">Progressive discounts up to 25%</span></li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" /><span className="text-gray-700">Free upgrades subject to availability</span></li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" /><span className="text-gray-700">Priority booking in high season</span></li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" /><span className="text-gray-700">Personal concierge service</span></li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" /><span className="text-gray-700">Free VIP delivery</span></li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" /><span className="text-gray-700">Dedicated 24/7 assistance</span></li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" /><span className="text-gray-700">Access to premium vehicles</span></li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" /><span className="text-gray-700">Preferential conditions</span></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center"><Trophy className="h-6 w-6 mr-2" />No.1 in Tangier!</h3>
                <div className="text-center mb-6"><div className="text-4xl font-bold mb-2">4.9/5</div><div className="flex justify-center mb-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-6 w-6 text-amber-300 fill-current" />))}</div><p className="text-amber-100">Based on 2500+ reviews</p></div>
                <Link href="/en/fleet" className="block w-full bg-white text-amber-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Book Now</Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-400 pl-4"><div className="flex items-center mb-2"><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div><span className="ml-2 text-sm text-gray-500">Karim M.</span></div><p className="text-sm text-gray-600">"Perfect service, immaculate car!"</p></div>
                  <div className="border-l-4 border-amber-400 pl-4"><div className="flex items-center mb-2"><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div><span className="ml-2 text-sm text-gray-500">Lisa R.</span></div><p className="text-sm text-gray-600">"Professional team, highly recommend!"</p></div>
                  <div className="border-l-4 border-amber-400 pl-4"><div className="flex items-center mb-2"><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div><span className="ml-2 text-sm text-gray-500">Omar T.</span></div><p className="text-sm text-gray-600">"Best agency in Tangier, without a doubt!"</p></div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Awards</h3>
                <div className="space-y-3"><div className="flex items-center p-3 bg-amber-50 rounded-lg"><Trophy className="h-5 w-5 text-amber-600 mr-3" /><span className="text-gray-700">Excellence Award 2024</span></div><div className="flex items-center p-3 bg-orange-50 rounded-lg"><Award className="h-5 w-5 text-orange-600 mr-3" /><span className="text-gray-700">Quality Certificate</span></div><div className="flex items-center p-3 bg-red-50 rounded-lg"><Medal className="h-5 w-5 text-red-600 mr-3" /><span className="text-gray-700">Top Rated 2024</span></div><div className="flex items-center p-3 bg-pink-50 rounded-lg"><Crown className="h-5 w-5 text-pink-600 mr-3" /><span className="text-gray-700">No.1 Tangier</span></div></div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">VIP Contact</h3>
                <div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-amber-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-amber-600 mr-3" /><span className="text-gray-700">vip@nassouhcar.com</span></div><div className="flex items-start"><MapPin className="h-5 w-5 text-amber-600 mr-3 mt-1" /><span className="text-gray-700">Boulevard Mohammed VI, Tangier</span></div></div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg"><p className="text-sm text-amber-800 font-semibold">🏆 Award‑winning service available 24/7</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">FAQ – Best Rated Car Rentals in Tangier</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">Why are you the best rated?</h3><p className="text-gray-600">Average rating 4.9/5 based on 2500+ authentic customer reviews. Service excellence, premium fleet, transparent pricing, 24/7 assistance. Quality recognized for 15 years.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">How can I verify your reviews?</h3><p className="text-gray-600">Verified reviews on Google, TripAdvisor, Booking. Each review is authentic, controlled and dated. Full transparency on our reputation.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">What benefits as No.1?</h3><p className="text-gray-600">Premium loyalty program, free upgrades, concierge service, priority booking, preferential conditions. Excellence rewarded.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-sm"><h3 className="font-bold text-lg text-gray-900 mb-3">Do you guarantee satisfaction?</h3><p className="text-gray-600">100% satisfaction commitment or refund. If not satisfied, we resolve the issue or refund in full.</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
