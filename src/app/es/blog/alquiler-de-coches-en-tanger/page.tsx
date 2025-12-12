import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tánger 2025 - Guía Completa | Nassoh Car',
  description: 'Guía completa para alquilar coche en Tánger: consejos, mejores precios y servicio 24/7. Reserva tu vehículo ahora.',
  keywords: 'alquiler de coches tanger, coche de alquiler tanger, car rental tangier, alquilar coche tanger',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/alquiler-de-coches-en-tanger' },
  openGraph: {
    title: 'Alquiler de Coches en Tánger 2025 - Guía Completa | Nassoh Car',
    description: 'Consejos expertos para alquilar coche en Tánger: precios y servicio 24/7.',
    images: ['/tangier.webp']
  }
}

export default function BlogAlquilerDeCochesEnTangierES() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Car className="h-6 w-6 text-amber-400 mr-2" /><span className="text-amber-400 font-semibold text-lg">Guía 2025</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">Alquiler de Coches en Tánger</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Consejos expertos, mejores precios y servicio 24/7 para alquilar coche en Tánger.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Publicado el 15 Enero 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>8 min de lectura</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Guía de Alquiler</span></div></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué alquilar coche en Tánger?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">Tánger ofrece libertad y comodidad cuando dispones de vehículo propio. Desde el aeropuerto Ibn Battuta al puerto o la medina, moverte con coche de alquiler te permite explorar a tu ritmo.</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ventajas de alquilar en Tánger</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="flex items-center mb-4"><MapPin className="h-8 w-8 text-blue-600 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Libertad total</h3></div><p className="text-gray-700">Explora la medina, Cap Spartel y las Cuevas de Hércules sin horarios.</p></div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><div className="flex items-center mb-4"><Star className="h-8 w-8 text-amber-500 mr-3" /><h3 className="text-xl font-semibold text-gray-900">Confort y seguridad</h3></div><p className="text-gray-700">Vehículos recientes, seguro incluido y asistencia 24/7.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">¿Listo para explorar Tánger?</h2>
              <p className="text-xl mb-8 opacity-90">Reserva tu coche de alquiler ahora y viaja a tu ritmo.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/es" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />Reservar Ahora</Link><Link href="/es/fleet" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"><ArrowRight className="h-5 w-5 mr-2" />Ver Nuestra Flota</Link></div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
