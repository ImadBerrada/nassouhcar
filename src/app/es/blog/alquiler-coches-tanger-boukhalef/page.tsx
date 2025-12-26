import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Calendar, Tag, CheckCircle, Navigation, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Tánger Boukhalef 2025 ✓ Zona Aeropuerto | Express',
  description: 'Alquiler de coches en Tánger Boukhalef ✓ Zona aeropuerto ✓ Entrega express ✓ Flota moderna ✓ Entrega gratuita ✓ Asistencia 24/7.',
  keywords: 'alquiler coches tanger boukhalef, boukhalef rent a car, alquiler auto boukhalef',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tanger-boukhalef' },
  openGraph: {
    title: 'Alquiler de Coches Tánger Boukhalef 2025 ✓ Zona Aeropuerto | Express',
    description: 'Alquiler de coches en Tánger Boukhalef ✓ Servicio express ✓ Entrega gratuita ✓ Asistencia 24/7.',
    images: ['/tangier-boukhalef-car-rental-blog.jpg'],
  },
}

export default function CarRentalTangierBoukhalefBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><MapPin className="h-6 w-6 text-amber-400 mr-2" /><span className="text-amber-400 font-semibold text-lg">Zona Boukhalef</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-300 to-red-400 bg-clip-text text-transparent leading-tight">Alquiler de Coches – Tánger Boukhalef</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Servicio express en el distrito de Boukhalef cerca del Aeropuerto de Tánger. Entrega gratuita, flota moderna y asistencia 24/7.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Actualizado 15 Ene, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>6 min lectura</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Boukhalef</span></div></div>
            <Link href="/es/flota" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Reservar Boukhalef<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Navigation className="h-8 w-8 text-amber-600 mr-3" />Servicio en Boukhalef</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Nuestro <strong>alquiler de coches en Tánger Boukhalef</strong> entrega vehículos en el distrito adyacente al aeropuerto con trámites express y asistencia personalizada.</p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4">Incluido</h3><ul className="space-y-2 text-gray-700"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-600 mr-2" /><span>Seguro a todo riesgo</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-600 mr-2" /><span>Kilometraje ilimitado</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-600 mr-2" /><span>Asistencia 24/7</span></li></ul></div>
            </article>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">Servicio Boukhalef</h3><p className="mb-6 text-amber-100">Entrega gratuita en Boukhalef y zona aeropuerto. Asistencia 24/7.</p><Link href="/es/flota" className="block w-full bg-white text-amber-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Reservar Boukhalef</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Contacto</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-amber-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-amber-600 mr-3" /><span className="text-gray-700">tanger@nassouhcar.com</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
