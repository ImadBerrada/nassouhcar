import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Navigation, Zap, Award, Ship, Timer, Compass, Waves, Globe, Route, Car, Shield } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/en/components/StructuredData'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Puerto Tánger Med 2025 - Ferry y Carga | 24/7',
  description: 'Alquiler de coches en Puerto Tánger Med ✓ Servicio ferry 24/7 ✓ Entrega gratuita ✓ Flota internacional ✓ Coordinación en tiempo real.',
  keywords: 'alquiler coches puerto tanger med, rent a car tanger med, alquiler auto tanger med, ferry alquiler coches tanger',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-puerto-tanger-med' },
  openGraph: {
    title: 'Alquiler de Coches en Puerto Tánger Med 2025 - Ferry y Carga | 24/7',
    description: 'Alquiler de coches en Puerto Tánger Med ✓ Servicio ferry 24/7 ✓ Entrega gratuita ✓ Flota internacional.',
    images: ['/tangier-port-med-blog.jpg'],
  },
}

export default function CarRentalTangierMedPortBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <StructuredData type="Article" countryTarget="MA" language="es" />
      <div className="relative bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Ship className="h-6 w-6 text-teal-400 mr-2" />
              <span className="text-teal-400 font-semibold text-lg">Puerto Tánger Med</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches en Puerto Tánger Med
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Alquiler de coches en el Puerto Tánger Med — el complejo portuario más grande de África. Servicio de ferry 24/7, entrega gratuita y flota adaptada a viajeros internacionales.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Publicado 15 Ene, 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>8 min lectura</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Puerto Internacional</span></div>
            </div>
            <Link href="/es/flota" className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reservar para Tánger Med
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicio en el mayor puerto de África</h2>
            <p className="text-xl text-gray-600">Su socio de movilidad en el complejo portuario Tánger Med</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-teal-600 mb-2">24/7</div><div className="text-gray-600 font-medium">Servicio continuo ferry</div></div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-cyan-600 mb-2">20min</div><div className="text-gray-600 font-medium">Entrega en puerto</div></div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-amber-600 mb-2">+150</div><div className="text-gray-600 font-medium">Vehículos disponibles</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">+5000</div><div className="text-gray-600 font-medium">Clientes ferry/año</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Ship className="h-8 w-8 text-teal-600 mr-3" />Alquiler de coches en Puerto Tánger Med: Puerta a Europa</h2>
              <p className="text-gray-700 leading-relaxed mb-6">El <strong>Puerto Tánger Med</strong> es el complejo portuario más grande de África y la principal puerta marítima entre Europa y África. Nuestro <strong>alquiler de coches en Puerto Tánger Med</strong> le permite recoger su vehículo directamente en el puerto, ya sea que llegue en ferry desde España, Italia o Francia.</p>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Award className="h-6 w-6 text-teal-600 mr-2" />¿Por qué elegir nuestro servicio en Tánger Med?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Puerto internacional</strong>: El más grande de África</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Servicio ferry 24/7</strong>: Todos los ferries Europa-Marruecos</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Equipo multilingüe</strong>: Inglés, Francés, Español</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Flota internacional</strong>: Adaptada a viajeros europeos</span></li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Waves className="h-6 w-6 text-teal-600 mr-2" />Ferries internacionales – Cobertura total</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Nuestro <strong>alquiler de coches en Puerto Tánger Med</strong> cubre todos los ferries desde Europa:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Ship className="h-5 w-5 text-teal-600 mr-2" />Ferries desde España</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Algeciras – Tánger Med</strong>: 1h30 (frecuente)</li>
                    <li>• <strong>Tarifa – Tánger Med</strong>: 1h00 (rápido)</li>
                    <li>• <strong>Barcelona – Tánger Med</strong>: 30h (carga)</li>
                    <li>• <strong>Motril – Tánger Med</strong>: 7h (nocturno)</li>
                  </ul>
                  <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">Servicio principal</div>
                </div>
                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Globe className="h-5 w-5 text-cyan-600 mr-2" />Ferries desde Europa</h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Sète – Tánger Med</strong>: 36h (Francia)</li>
                    <li>• <strong>Génova – Tánger Med</strong>: 48h (Italia)</li>
                    <li>• <strong>Civitavecchia – Tánger Med</strong>: 52h (Roma)</li>
                    <li>• <strong>Livorno – Tánger Med</strong>: 44h (Toscana)</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Agencia Tánger Med</h3>
                <p className="mb-6 text-teal-100">Entrega gratuita en Puerto Tánger Med. Asistencia 24/7 para todos los ferries.</p>
                <Link href="/es/flota" className="block w-full bg-white text-teal-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">
                  Reservar Tánger Med
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contacto Puerto</h3>
                <div className="space-y-4">
                  <div className="flex items-center"><Phone className="h-5 w-5 text-teal-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div>
                  <div className="flex items-center"><Mail className="h-5 w-5 text-teal-600 mr-3" /><span className="text-gray-700">portmed@nassohcar.com</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
