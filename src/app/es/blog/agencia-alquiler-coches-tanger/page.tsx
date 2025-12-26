import type { Metadata } from 'next'
import { MapPin, Clock, Car, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Crown, Building } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agencia de Alquiler de Coches en Tánger 2025 ✓ Líder Local desde 2010',
  description: 'Agencia de alquiler de coches en Tánger ✓ Líder local desde 2010 ✓ Aeropuerto, puerto y centro ✓ Servicio premium ✓ Flota moderna ✓ Satisfacción garantizada.',
  keywords: 'agencia alquiler coches tanger, rent a car agency tanger, nassoh car tanger, alquiler autos tanger',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/agencia-alquiler-coches-tanger' },
  openGraph: {
    title: 'Agencia de Alquiler de Coches en Tánger 2025 ✓ Líder Local desde 2010',
    description: 'Agencia de alquiler de coches en Tánger ✓ Líder local desde 2010 ✓ Servicio premium ✓ Flota moderna.',
    images: ['/tangier-car-rental-agency-blog.jpg'],
  },
}

export default function CarRentalAgencyTangierBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Building className="h-6 w-6 text-blue-400 mr-2" /><span className="text-blue-400 font-semibold text-lg">Agencia Tánger</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Agencia de Alquiler de Coches en Tánger</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Líder local desde 2010. Aeropuerto, puerto y centro ciudad. +200 vehículos, servicio premium, tarifas competitivas.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Actualizado 15 Ene, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>7 min lectura</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Tánger</span></div></div>
            <Link href="/es/flota" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Explorar Agencia Tánger<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Nassoh Car Tánger en números</h2><p className="text-xl text-gray-600">La agencia de referencia en Tánger</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-blue-600 mb-2">+200</div><div className="text-gray-600 font-medium">Vehículos en Tánger</div></div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-indigo-600 mb-2">5</div><div className="text-gray-600 font-medium">Puntos de servicio</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">15 años</div><div className="text-gray-600 font-medium">Presencia local</div></div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-pink-600 mb-2">+25K</div><div className="text-gray-600 font-medium">Clientes en Tánger</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Building className="h-8 w-8 text-blue-600 mr-3" />Nassoh Car Tánger: Su agencia local de confianza</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Desde 2010, la <strong>agencia de alquiler de coches en Tánger</strong> Nassoh Car ha sido el socio preferido para la movilidad. Con presencia estratégica en el aeropuerto, puerto y centro de la ciudad, nuestra agencia ofrece un servicio de proximidad con más de 200 vehículos disponibles.</p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Crown className="h-6 w-6 text-blue-600 mr-2" />¿Por qué elegir nuestra agencia en Tánger?</h3><ul className="space-y-3"><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Ubicaciones estratégicas</strong>: Aeropuerto, puerto, centro ciudad</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Conocimiento local</strong>: 15 años en Tánger</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Flota adaptada</strong>: +200 vehículos para todas las necesidades</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Servicio personalizado</strong>: Equipo local dedicado</span></li></ul></div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">Agencia Tánger</h3><p className="mb-6 text-blue-100">Entrega gratuita en aeropuerto, puerto y centro ciudad. Asistencia 24/7.</p><Link href="/es/flota" className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Reservar en Tánger</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Contacto Tánger</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">tanger@nassohcar.com</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
