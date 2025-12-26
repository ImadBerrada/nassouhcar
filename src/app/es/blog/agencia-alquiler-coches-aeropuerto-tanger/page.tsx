import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Building, Navigation, Zap, Award, Timer, Trophy } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agencia de Alquiler de Coches Aeropuerto Tánger 2025 - Servicio Premium',
  description: 'Agencia de alquiler de coches en Aeropuerto Tánger Ibn Battouta ✓ Servicio premium ✓ Entrega express ✓ Flota moderna ✓ Asistencia 24/7 ✓ Reserva online.',
  keywords: 'agencia alquiler coches aeropuerto tanger, rent a car agency tanger airport, nassoh car airport, alquiler autos aeropuerto tanger',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/agencia-alquiler-coches-aeropuerto-tanger' },
  openGraph: {
    title: 'Agencia de Alquiler de Coches Aeropuerto Tánger 2025 - Servicio Premium',
    description: 'Agencia de alquiler de coches en Aeropuerto Tánger ✓ Servicio premium ✓ Entrega express ✓ Flota moderna.',
    images: ['/tangier-airport-agency-blog.jpg'],
  },
}

export default function CarRentalAgencyTangierAirportBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Building className="h-6 w-6 text-emerald-400 mr-2" /><span className="text-emerald-400 font-semibold text-lg">Agencia Profesional</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">Agencia de Alquiler de Coches Aeropuerto Tánger</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Su agencia de referencia en el Aeropuerto de Tánger. Servicio premium, flota moderna, asistencia 24/7. Excelencia a su servicio.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Actualizado 15 Ene, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>8 min lectura</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Agencia Premium</span></div></div>
            <Link href="/es/flota" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Descubrir Nuestra Agencia<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Nassoh Car en números</h2><p className="text-xl text-gray-600">Agencia de confianza en el Aeropuerto de Tánger</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-emerald-600 mb-2">+8</div><div className="text-gray-600 font-medium">Años de experiencia</div></div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-blue-600 mb-2">+150</div><div className="text-gray-600 font-medium">Vehículos</div></div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-amber-600 mb-2">+10k</div><div className="text-gray-600 font-medium">Clientes felices</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div><div className="text-gray-600 font-medium">Valoración media</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Trophy className="h-8 w-8 text-emerald-600 mr-3" />Nassoh Car: Su agencia de referencia en el Aeropuerto de Tánger</h2>
              <p className="text-gray-700 leading-relaxed mb-6"><strong>Nassoh Car</strong> es la <strong>agencia de alquiler de coches en el Aeropuerto de Tánger</strong> de referencia por más de 8 años. Especializados en Ibn Battouta, nuestra agencia ofrece un servicio premium con una flota moderna y asistencia personalizada.</p>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Award className="h-6 w-6 text-emerald-600 mr-2" />¿Por qué elegir nuestra agencia?</h3><ul className="space-y-3"><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Experiencia local</strong>: 8 años en el Aeropuerto de Tánger</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Presencia en aeropuerto</strong>: Mostrador permanente en Ibn Battouta</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Flota moderna</strong>: +150 vehículos recientes</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Servicio 24/7</strong>: Asistencia continua</span></li></ul></div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">Agencia Aeropuerto Tánger</h3><p className="mb-6 text-emerald-100">Entrega gratuita en Ibn Battouta. Asistencia 24/7 para todos los vuelos.</p><Link href="/es/flota" className="block w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Reservar Aeropuerto</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Contacto Aeropuerto</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-emerald-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-emerald-600 mr-3" /><span className="text-gray-700">aeropuerto@nassohcar.com</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
