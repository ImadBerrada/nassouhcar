import type { Metadata } from 'next'
import Link from 'next/link'
import { Car, FileText, CreditCard, MapPin, Clock, Calendar, Shield, Droplets, RotateCcw, Globe, Phone, Mail, MessageCircle, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ Alquiler de Coches Tánger 2025 | Nassoh Car Preguntas Frecuentes',
  description: 'FAQ completa para el alquiler de coches en Tánger: precios, documentos, seguro, Aeropuerto Ibn Battouta, Puerto Tánger Med. Respuestas de expertos para alquilar un coche en Marruecos con Nassoh Car.',
  keywords: 'faq alquiler coches tanger, alquiler coches aeropuerto tanger, alquiler coches puerto tanger med, preguntas alquiler coches marruecos, faq nassoh car, precios alquiler coches tanger, documentos necesarios alquiler marruecos, seguro alquiler coches tanger',
  alternates: { canonical: 'https://www.nassohcar.com/es/faq' },
}

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      icon: MapPin,
      question: '¿Dónde puedo alquilar un coche en Tánger con Nassoh Car?',
      answer: [
        'Puede alquilar un coche con Nassoh Car en el centro de Tánger, en el Aeropuerto de Tánger Ibn Battouta, en el Puerto Tánger Med y en la estación de tren de Tánger Ville.',
        'También entregamos vehículos en su hotel o dirección en Tánger, así como en ciudades cercanas como Tetuán.',
      ],
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      id: 2,
      icon: Calendar,
      question: '¿Cómo reservo en el Aeropuerto de Tánger o Puerto Tánger Med?',
      answer: [
        'Reservar es sencillo: en línea a través de nuestro sitio web, por WhatsApp o por teléfono.',
        "Ofrecemos un servicio de bienvenida en el Aeropuerto de Tánger Ibn Battouta, Puerto Tánger Med y Aeropuerto de Tetuán para que pueda recoger su vehículo a su llegada.",
      ],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 3,
      icon: CreditCard,
      question: '¿Cuáles son las mejores tarifas de alquiler en Tánger?',
      answer: [
        'Ofrecemos alquileres asequibles en Tánger, desde 200 MAD (~€20) por día para modelos compactos como Dacia Logan o Peugeot 208.',
        'Para alquileres mensuales, ofrecemos tarifas preferenciales y precios competitivos para vehículos nuevos, SUVs y coches premium.',
      ],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      id: 4,
      icon: Shield,
      question: '¿Puedo alquilar un coche en el Aeropuerto de Tánger sin fianza?',
      answer: [
        'Por razones de seguridad, requerimos un depósito de seguridad reembolsable de 5,000 MAD, pagadero en efectivo o bloqueado en una tarjeta bancaria.',
        'Esta política nos permite mantener precios competitivos. Estamos entre las agencias mejor valoradas en el Aeropuerto de Tánger por transparencia y calidad de servicio.',
      ],
      gradient: 'from-red-500 to-pink-600',
    },
    {
      id: 5,
      icon: Clock,
      question: '¿Ofrecen alquileres a largo plazo en Tánger o Tetuán?',
      answer: [
        'Sí. Nos especializamos en alquileres a largo plazo en Tánger, Tetuán y la zona del Puerto Tánger Med.',
        'Muchos expatriados y profesionales en las zonas industriales de Tánger eligen nuestros planes mensuales para vehículos como Dacia Logan, Toyota Yaris, Peugeot 208 y SUVs.',
      ],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 6,
      icon: FileText,
      question: '¿Qué documentos se requieren para alquilar un coche en Tánger?',
      answer: [
        'Debe presentar una licencia de conducir válida, un pasaporte (o documento nacional de identidad para marroquíes) y una tarjeta bancaria.',
        'Se recomienda a los visitantes extranjeros llevar un Permiso Internacional de Conducir (IDP) además de su licencia nacional.',
      ],
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      id: 7,
      icon: Users,
      question: '¿Cuál es la edad mínima para alquilar un coche en Marruecos?',
      answer: ['La edad mínima requerida es de 21 años.'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 8,
      icon: Shield,
      question: '¿Está incluido el seguro en los alquileres de Nassoh Car?',
      answer: [
        'Sí. Todos nuestros alquileres incluyen seguro básico. Se requiere un depósito de seguridad reembolsable de €500 (o equivalente en MAD) al inicio del alquiler.',
        'El seguro cubre solo daños resultantes de una colisión entre dos vehículos y por encima del umbral de €500. Los daños a objetos fijos (como un muro o poste) no están cubiertos.',
        'Opciones de seguro adicionales están disponibles para protección extra.',
      ],
      gradient: 'from-red-500 to-orange-600',
    },
    {
      id: 9,
      icon: MapPin,
      question: '¿Cómo puedo alquilar un coche en Tetuán o en el Aeropuerto de Tetuán?',
      answer: [
        'Ofrecemos entrega directa en Tetuán, en el centro de la ciudad o en el Aeropuerto de Tetuán, previa solicitud.',
        'Este servicio es apreciado por los viajeros que llegan al norte de Marruecos vía Ryanair o Air Arabia.',
      ],
      gradient: 'from-teal-500 to-green-600',
    },
    {
      id: 10,
      icon: Star,
      question: '¿Por qué elegir Nassoh Car para alquilar un coche en Tánger?',
      answer: [
        'Nassoh Car es reconocida como una de las mejores agencias de alquiler de coches en Tánger gracias a precios transparentes, vehículos bien mantenidos, entrega rápida en el aeropuerto y un servicio al cliente receptivo y amable.',
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
              <span className="text-amber-400 font-semibold text-lg tracking-wider uppercase">Soporte Económico</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">Preguntas Frecuentes – Alquiler de Coches Tánger</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Encuentre respuestas sobre el alquiler de coches en Tánger, en el Aeropuerto Ibn Battouta y Puerto Tánger Med. Servicio profesional 24/7.</p>
            <div className="mt-8 flex justify-center"><div className="bg-amber-400/10 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-3"><span className="text-amber-400 font-medium">Servicio Económico Garantizado</span></div></div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">¿Aún tiene preguntas sobre el alquiler en Tánger?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Nuestro equipo de soporte económico está disponible 24/7 para ayudarle con su alquiler de coches en Tánger</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group"><div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20"><div className="flex flex-col items-center space-y-4"><div className="relative"><div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div><div className="relative p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"><Mail className="h-8 w-8 text-white" /></div></div><div className="text-center"><h3 className="font-bold text-white text-lg mb-2">Soporte por Email</h3><span className="text-amber-400 font-medium text-lg">contact@nassohcar.com</span></div></div></div></div>
                  <div className="group"><div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20"><div className="flex flex-col items-center space-y-4"><div className="relative"><div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div><div className="relative p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"><Phone className="h-8 w-8 text-white" /></div></div><div className="text-center"><h3 className="font-bold text-white text-lg mb-2">Soporte Telefónico</h3><span className="text-amber-400 font-medium text-lg">+212 631 63 00 13</span></div></div></div></div>
                  <div className="group"><div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20"><div className="flex flex-col items-center space-y-4"><div className="relative"><div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div><div className="relative p-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"><Globe className="h-8 w-8 text-white" /></div></div><div className="text-center"><h3 className="font-bold text-white text-lg mb-2">Sitio Web</h3><span className="text-amber-400 font-medium text-lg">www.nassohcar.com</span></div></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-xl rounded-2xl border border-green-400/30 p-8 hover:border-green-400/50 transition-all duration-300 text-center">
              <div className="flex flex-col items-center gap-4 mb-6"><div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"><Calendar className="h-8 w-8 text-white" /></div><div><h3 className="font-bold text-white text-2xl">¿Listo para Reservar?</h3><p className="text-gray-300 text-lg">Reserve su vehículo familiar en Tánger hoy</p></div></div>
              <div className="flex justify-center"><Link href="/es/flota" className="inline-flex bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">Reservar Ahora</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
