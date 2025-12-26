import Breadcrumb, { BreadcrumbStructuredData } from '../../../components/Breadcrumb'
import StructuredData from '../../../components/StructuredData'
import Link from 'next/link'
import { Car, Shield, MapPin, Globe, Clock, CreditCard, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react'

export default function CarRentalEuropePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en#services' },
    { label: 'Car Rental Europe', href: '/en/car-rental-europe' }
  ]

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <StructuredData 
        type="LocalBusiness" 
        countryTarget="MA" 
        language="en"
      />
      
      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex justify-center mb-8">
              <Breadcrumb items={breadcrumbItems} className="text-slate-300" />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                Car Rental Morocco 
                <span className="block text-amber-400 mt-2">From Europe</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Do you live in <span className="text-white font-semibold">France, Spain, Belgium, or anywhere in Europe</span>? 
                Nassoh Car simplifies your arrival in Tangier with a premium service designed for the diaspora and European travelers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/en/fleet"
                  className="bg-amber-400 text-slate-900 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-amber-300 transition-all shadow-xl hover:shadow-amber-400/20 transform hover:-translate-y-1"
                >
                  Book my vehicle
                </Link>
                <Link
                  href="#expert"
                  className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Why choose us?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Countries Support Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'France', flag: '🇫🇷', text: 'Dedicated FR service' },
                { name: 'Spain', flag: '🇪🇸', text: 'Ferry access' },
                { name: 'Belgium', flag: '🇧🇪', text: 'Direct flights' },
                { name: 'Italy', flag: '🇮🇹', text: '24/7 Assistance' }
              ].map((country) => (
                <div key={country.name} className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform">
                  <span className="text-4xl mb-3">{country.flag}</span>
                  <h3 className="text-lg font-bold text-slate-900">{country.name}</h3>
                  <p className="text-slate-500 text-sm">{country.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Service Section */}
        <section id="expert" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  Nassoh Car Expertise for <span className="text-amber-500">European Travelers</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We understand that your journey begins long before you arrive on Moroccan soil. 
                  That's why we've optimized every step of your rental to meet European standards of requirement and quality.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Globe, title: 'International Booking', desc: 'Book online with immediate confirmation via our secure platform.' },
                    { icon: Shield, title: 'European Guarantees', desc: 'Comprehensive insurance, transparent contracts, and vehicles meeting safety standards.' },
                    { icon: Clock, title: 'Guaranteed Punctuality', desc: 'We track your flight or ferry in real-time for a key handover without waiting.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-400/20 rounded-[40px] blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Premium car rental Morocco" 
                  className="relative rounded-[32px] shadow-2xl z-10 w-full h-auto object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
                  <div className="text-4xl font-bold text-amber-400 mb-1">15+</div>
                  <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Specialized Services</h2>
              <p className="text-xl text-slate-600">Everything is included for your maximum comfort</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Airport & Port Welcome',
                  desc: 'Free pickup at Tangier Ibn Battouta or Tangier Med Port. Our agent will be waiting for you as soon as you arrive.',
                  features: ['Terminal delivery', 'Baggage assistance', 'Personalized welcome']
                },
                {
                  title: 'Latest Generation Fleet',
                  desc: '2023-2024 vehicles perfectly maintained for your long journeys across the Kingdom.',
                  features: ['City cars & SUVs', 'Auto/Manual gearbox', 'Rigorous maintenance']
                },
                {
                  title: 'Total Assistance',
                  desc: 'A problem? A question? Our multilingual team is available 24/7 via WhatsApp.',
                  features: ['WhatsApp support', 'Quick breakdown service', 'Itinerary advice']
                }
              ].map((service, i) => (
                <div key={i} className="bg-white p-10 rounded-[32px] shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-shadow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900 rounded-[48px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-transparent"></div>
              <div className="grid lg:grid-cols-2 gap-12 items-center p-12 md:p-20">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Transparent Prices in Euros</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    No surprises upon arrival. Our prices include everything you need to drive with peace of mind in Morocco.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div>
                      <div className="text-3xl font-bold text-amber-400 mb-1">From €17</div>
                      <div className="text-slate-400">Per day (long stay)</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-400 mb-1">€0</div>
                      <div className="text-slate-400">Booking fees</div>
                    </div>
                  </div>
                  <Link
                    href="/en/fleet"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-amber-400 transition-colors"
                  >
                    Discover our offers <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[32px] relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">What's included:</h3>
                  <ul className="space-y-4">
                    {[
                      'Unlimited mileage throughout Morocco',
                      'Collision and theft insurance included',
                      'Free second driver',
                      'Baby seat on request',
                      'Free cancellation up to 48h',
                      '24/7 Roadside assistance'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials or Trust indicators */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-16">They trust us from Europe</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Jean-Marc D.', city: 'Paris, France', text: 'Excellent service. The car was waiting for me at Tangier airport, clean and recent. Formalities completed in 10 minutes. I recommend Nassoh Car without hesitation.' },
                { name: 'Karim B.', city: 'Brussels, Belgium', text: 'Used to renting from the big names, I tested Nassoh Car this year. Better price and above all a much warmer welcome. Impeccable service.' },
                { name: 'Elena G.', city: 'Madrid, Spain', text: 'Very convenient for crossing with the ferry. They delivered the car directly to us at the Tangier Med port. Very professional team.' }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 italic text-slate-600 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold not-italic">5/5 Customer Review</div>
                  <p className="mb-6">"{t.text}"</p>
                  <div className="not-italic">
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
              Ready for your Moroccan adventure?
            </h2>
            <p className="text-xl text-slate-800 mb-12 font-medium">
              Book your car today and enjoy our exclusive rates for European residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/fleet"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-800 transition-all shadow-2xl"
              >
                🚗 See all fleet
              </Link>
              <a
                href="https://wa.me/212631630013"
                className="bg-white text-slate-900 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6 text-green-500" /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
