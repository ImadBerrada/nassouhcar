import { Car, MapPin, CreditCard, Users, Phone, Mail, CheckCircle, Award } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Nassoh Car - Affordable Car Rental Morocco',
  description: 'Discover Nassoh Car, your trusted partner for car rental in Morocco. Economy vehicles, excellent service and competitive prices in Tangier, Tetouan and nationwide.',
  keywords: 'about nassoh car, car rental morocco, rental agency tangier, tetouan car hire, economy car morocco, moroccan rental agency',
  alternates: { canonical: 'https://www.nassohcar.com/en/about' },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6"><h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">About NASSOH CAR</h1></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Car Rental in Tangier & Tetouan – Your trusted partner for economy vehicles</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-amber-400/20">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">About NASSOH CAR</h2>
            <p className="text-lg text-gray-300 leading-relaxed">NASSOH CAR is a reliable Moroccan car rental agency offering a wide selection of vehicles for personal and professional use. Whether you visit Tangier for tourism, business or family trips, we provide the right car for every need with fast delivery and excellent service.</p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12"><Car className="h-12 w-12 text-amber-400 mx-auto mb-4" /><h2 className="text-4xl font-bold text-white mb-4">A Vehicle for Every Need: From Compact to 7‑Seaters</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Compact Cars', desc: 'Ideal for city driving and daily commutes', icon: '🚗' },
                { title: 'Economy Sedans', desc: 'Affordable options with great fuel economy', icon: '🚙' },
                { title: 'SUVs and 4x4', desc: 'Perfect for road trips and long‑distance travel', icon: '🚐' },
                { title: '7‑Seater Vehicles', desc: 'Great for families and group travel', icon: '🚌' },
                { title: 'Family Cars', desc: 'For executive use or family experiences', icon: '🏎️' },
              ].map((vehicle, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{vehicle.icon}</div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">{vehicle.title}</h3>
                  <p className="text-gray-300">{vehicle.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-400/10 rounded-2xl p-6 mt-8"><p className="text-gray-300 text-center">All our cars are well maintained, air‑conditioned and insured.</p></div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-amber-400/20">
            <div className="flex items-center mb-6"><CreditCard className="h-8 w-8 text-amber-400 mr-4" /><h2 className="text-3xl font-bold text-amber-400">Security Deposit Required</h2></div>
            <p className="text-lg text-gray-300 mb-6">A refundable deposit of <span className="text-amber-400 font-bold">€500</span> is required for each rental.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-400/10 rounded-xl p-6"><h3 className="text-xl font-bold text-white mb-3">Payment Options:</h3><ul className="space-y-2 text-gray-300"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-400 mr-2" />Cash upon vehicle delivery</li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-400 mr-2" />Blocked on a valid credit card (not charged, temporarily held)</li></ul></div>
              <div className="bg-green-400/10 rounded-xl p-6"><h3 className="text-xl font-bold text-white mb-3">Deposit Return:</h3><p className="text-gray-300">The deposit is returned at the end of the rental, provided the vehicle is returned in good condition.</p></div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12"><MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" /><h2 className="text-4xl font-bold text-white mb-4">Key Delivery Locations</h2><p className="text-lg text-gray-300">We deliver cars directly to the most convenient places:</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Tangier Ibn Battouta Airport', 'Tangier Med Port', 'Tangier Ville Port', 'Tangier Train Station', 'Tetouan City Center'].map((location, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-amber-400/20 text-center"><MapPin className="h-8 w-8 text-amber-400 mx-auto mb-3" /><h3 className="text-lg font-semibold text-white">{location}</h3></div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-amber-400/20">
            <div className="flex items-center mb-8"><Users className="h-8 w-8 text-amber-400 mr-4" /><h2 className="text-3xl font-bold text-amber-400">Designed for Every Type of Traveler</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { type: 'Tourist', desc: 'Needs an SUV or compact car from the airport', icon: '🏖️' },
                { type: 'Professional', desc: 'On a business trip to Tangier', icon: '💼' },
                { type: 'Family', desc: 'Needs a spacious 7‑seater vehicle', icon: '👨‍👩‍👧‍👦' },
                { type: 'Long‑Term Renter', desc: 'Looking for monthly rental at the best rate', icon: '📅' },
              ].map((traveler, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-amber-400/5 rounded-xl"><div className="text-3xl">{traveler.icon}</div><div><h3 className="text-xl font-bold text-white mb-2">{traveler.type}</h3><p className="text-gray-300">{traveler.desc}</p></div></div>
              ))}
            </div>
            <div className="text-center mt-8"><p className="text-lg text-amber-400 font-semibold">NASSOH CAR has the right solution for you.</p><p className="text-gray-300 mt-2">Check our full fleet and book online at: <span className="text-amber-400">nassohcar.com</span></p></div>
          </div>

          <div className="text-center mb-12"><Award className="h-12 w-12 text-amber-400 mx-auto mb-4" /><h2 className="text-4xl font-bold text-white mb-8">Why Choose NASSOH CAR?</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Affordable daily, weekly and monthly prices',
              'Insurance included with all rentals',
              'No hidden fees — clear and transparent contracts',
              'Support in Arabic, French and English',
              'Quick booking via WhatsApp, phone or website',
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-amber-400/20"><div className="flex items-center space-x-3"><CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0" /><p className="text-gray-300">{benefit}</p></div></div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-3xl p-8 md:p-12 mt-16 text-center border border-amber-400/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Book Your Perfect Car?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-3"><Phone className="h-6 w-6 text-amber-400" /><span className="text-lg text-gray-300">+212 631-630013</span></div>
              <div className="flex items-center space-x-3"><Mail className="h-6 w-6 text-amber-400" /><span className="text-lg text-gray-300">contact@nassohcar.com</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

