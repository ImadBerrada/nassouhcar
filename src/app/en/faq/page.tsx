import type { Metadata } from 'next'
import Link from 'next/link'
import { Car, FileText, CreditCard, MapPin, Clock, Calendar, Shield, Droplets, RotateCcw, Globe, Phone, Mail, MessageCircle, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ Car Rental Tangier 2025 | Nassoh Car Frequently Asked Questions',
  description: 'Complete FAQ for car rental in Tangier: prices, documents, insurance, Ibn Battouta Airport, Tangier Med Port. Expert answers for renting a car in Morocco with Nassoh Car.',
  keywords: 'tangier car rental faq, tangier airport car rental, tangier med port car rental, morocco car rental questions, nassoh car faq, tangier car hire prices, documents required morocco rental, insurance tangier car rental',
  alternates: { canonical: 'https://www.nassohcar.com/en/faq' },
}

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      icon: MapPin,
      question: 'Where can I rent a car in Tangier with Nassoh Car?',
      answer: [
        'You can rent a car with Nassoh Car in Tangier city center, at Tangier Ibn Battouta Airport, at Tangier Med Port and at Tangier Ville train station.',
        'We also deliver vehicles to your hotel or address in Tangier, as well as nearby cities such as Tetouan.',
      ],
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      id: 2,
      icon: Calendar,
      question: 'How do I book at Tangier Airport or Tangier Med Port?',
      answer: [
        'Booking is simple: online via our website, by WhatsApp or by phone.',
        "We provide a meet-and-greet service at Tangier Ibn Battouta Airport, Tangier Med Port and Tetouan Airport so you can collect your vehicle upon arrival.",
      ],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 3,
      icon: CreditCard,
      question: 'What are the best car rental rates in Tangier?',
      answer: [
        'We offer affordable rentals in Tangier, starting from 200 MAD (~€20) per day for compact models such as Dacia Logan or Peugeot 208.',
        'For monthly rentals, we offer preferential rates and competitive prices for new vehicles, SUVs and premium cars.',
      ],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      id: 4,
      icon: Shield,
      question: 'Can I rent a car at Tangier Airport without a security deposit?',
      answer: [
        'For security reasons, we require a refundable security deposit of 5,000 MAD, payable in cash or blocked on a bank card.',
        'This policy allows us to maintain competitive prices. We are among the highest rated agencies at Tangier Airport for transparency and service quality.',
      ],
      gradient: 'from-red-500 to-pink-600',
    },
    {
      id: 5,
      icon: Clock,
      question: 'Do you offer long-term rentals in Tangier or Tetouan?',
      answer: [
        'Yes. We specialize in long-term rentals in Tangier, Tetouan and the Tangier Med Port area.',
        'Many expatriates and professionals in Tangier’s industrial zones choose our monthly plans for vehicles such as Dacia Logan, Toyota Yaris, Peugeot 208, and SUVs.',
      ],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 6,
      icon: FileText,
      question: 'Which documents are required to rent a car in Tangier?',
      answer: [
        'You must present a valid driving license, a passport (or national ID for Moroccans) and a bank card.',
        'Foreign visitors are encouraged to carry an International Driving Permit (IDP) in addition to their national license.',
      ],
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      id: 7,
      icon: Users,
      question: 'What is the minimum age to rent a car in Morocco?',
      answer: ['The minimum required age is 21 years.'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 8,
      icon: Shield,
      question: 'Is insurance included in Nassoh Car rentals?',
      answer: [
        'Yes. All our rentals include basic insurance. A refundable security deposit of €500 (or MAD equivalent) is required at the start of the rental.',
        'Insurance covers only damage resulting from a collision between two vehicles and above the €500 threshold. Damage to fixed objects (like a wall or pole) is not covered.',
        'Additional insurance options are available for extra protection.',
      ],
      gradient: 'from-red-500 to-orange-600',
    },
    {
      id: 9,
      icon: MapPin,
      question: 'How can I rent a car in Tetouan or at Tetouan Airport?',
      answer: [
        'We offer direct delivery to Tetouan, in the city center or at Tetouan Airport, upon request.',
        'This service is appreciated by travelers arriving in northern Morocco via Ryanair or Air Arabia.',
      ],
      gradient: 'from-teal-500 to-green-600',
    },
    {
      id: 10,
      icon: Star,
      question: 'Why choose Nassoh Car for car rental in Tangier?',
      answer: [
        'Nassoh Car is recognized as one of the best car rental agencies in Tangier thanks to transparent pricing, well‑maintained vehicles, fast airport delivery and responsive, friendly customer service.',
      ],
      gradient: 'from-yellow-500 to-amber-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-400/5 to-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <span className="text-amber-400 font-semibold text-lg tracking-wider uppercase">Economy Support</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">Frequently Asked Questions – Car Rental Tangier</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Find answers about car rental in Tangier, at Ibn Battouta Airport and Tangier Med Port. Professional service 24/7.</p>
            <div className="mt-8 flex justify-center"><div className="bg-amber-400/10 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-3"><span className="text-amber-400 font-medium">Economy Service Guaranteed</span></div></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {faqs.map((faq) => {
            const IconComponent = faq.icon
            return (
              <div key={faq.id} className="group">
                <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/20">
                  <div className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                          <div className={`relative p-4 bg-gradient-to-r ${faq.gradient} rounded-2xl shadow-xl`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center group-hover:text-amber-400 transition-colors duration-300">
                          <span className={`bg-gradient-to-r ${faq.gradient} text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-4 shadow-xl`}>{faq.id}</span>
                          {faq.question}
                        </h3>
                        <div className="text-gray-300 space-y-3 text-lg leading-relaxed">
                          {faq.answer.map((line, lineIndex) => (
                            <p key={lineIndex} className="group-hover:text-white transition-colors duration-300">{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20">
          <div className="relative bg-gradient-to-r from-amber-400/20 to-yellow-300/20 backdrop-blur-xl rounded-3xl border border-amber-400/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-yellow-300/10"></div>
            <div className="relative p-10 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-8"><div className="relative"><div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full blur-xl opacity-50 animate-pulse"></div><div className="relative p-5 bg-gradient-to-r from-amber-400/30 to-yellow-300/30 rounded-full backdrop-blur-sm border border-amber-400/50"><MessageCircle className="h-12 w-12 text-amber-400" /></div></div></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Still have questions about renting in Tangier?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Our economy support team is available 24/7 to help with your car rental in Tangier</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group"><div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20"><div className="flex flex-col items-center space-y-4"><div className="relative"><div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div><div className="relative p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"><Mail className="h-8 w-8 text-white" /></div></div><div className="text-center"><h3 className="font-bold text-white text-lg mb-2">Email Support</h3><span className="text-amber-400 font-medium text-lg">contact@nassohcar.com</span></div></div></div></div>
                  <div className="group"><div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20"><div className="flex flex-col items-center space-y-4"><div className="relative"><div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div><div className="relative p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"><Phone className="h-8 w-8 text-white" /></div></div><div className="text-center"><h3 className="font-bold text-white text-lg mb-2">Phone Support</h3><span className="text-amber-400 font-medium text-lg">+212 631 63 00 13</span></div></div></div></div>
                  <div className="group"><div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20"><div className="flex flex-col items-center space-y-4"><div className="relative"><div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div><div className="relative p-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"><Globe className="h-8 w-8 text-white" /></div></div><div className="text-center"><h3 className="font-bold text-white text-lg mb-2">Website</h3><span className="text-amber-400 font-medium text-lg">www.nassohcar.com</span></div></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-xl rounded-2xl border border-green-400/30 p-8 hover:border-green-400/50 transition-all duration-300 text-center">
              <div className="flex flex-col items-center gap-4 mb-6"><div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"><Calendar className="h-8 w-8 text-white" /></div><div><h3 className="font-bold text-white text-2xl">Ready to Book?</h3><p className="text-gray-300 text-lg">Book your family vehicle in Tangier today</p></div></div>
              <div className="flex justify-center"><Link href="/en/fleet" className="inline-flex bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">Book Now</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
