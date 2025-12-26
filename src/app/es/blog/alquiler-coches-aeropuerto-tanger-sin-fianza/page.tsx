import type { Metadata } from 'next'
import { Shield, CheckCircle, DollarSign, Calendar, Clock, Tag, Car, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Aeropuerto Tánger – Opción Sin Fianza | 2025',
  description: 'Alquiler de coches en el Aeropuerto de Tánger con opción sin fianza ✓ Condiciones explicadas ✓ Precios transparentes ✓ Flota moderna ✓ Asistencia 24/7.',
  keywords: 'alquiler coches aeropuerto tanger sin fianza, alquiler vehiculos aeropuerto tanger sin deposito',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-aeropuerto-tanger-sin-fianza' },
  openGraph: {
    title: 'Alquiler de Coches Aeropuerto Tánger – Opción Sin Fianza | 2025',
    description: 'Opción sin fianza disponible en el Aeropuerto de Tánger sujeta a condiciones. Transparente y segura.',
    images: ['/tangier-airport-no-deposit-car-rental.jpg'],
  },
}

export default function CarRentalTangierAirportNoDepositBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      <div className="relative bg-gradient-to-r from-rose-900 via-red-800 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Shield className="h-6 w-6 text-rose-400 mr-2" /><span className="text-rose-400 font-semibold text-lg">Opción Segura</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 via-red-300 to-pink-400 bg-clip-text text-transparent leading-tight">Alquiler de Coches – Sin Fianza en Aeropuerto Tánger</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Entienda nuestra opción <strong>sin fianza</strong>: condiciones, precios y seguridad. Transparente y conveniente.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Actualizado 15 Ene, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>5 min lectura</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Aeropuerto</span></div></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <section className="mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Funciona la Opción Sin Fianza</h2><div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"><ul className="space-y-2 text-gray-700"><li className="flex items-start"><CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-1" /><span><strong>Elegibilidad</strong>: Tarjeta de crédito válida + pasaporte</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-1" /><span><strong>Seguro</strong>: Cobertura completa requerida</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-1" /><span><strong>Preautorización</strong>: Pequeña preautorización para incidentes</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-rose-600 mr-2 mt-1" /><span><strong>Transparencia</strong>: Todas las condiciones explicadas antes de reservar</span></li></ul></div></section>

          <section className="mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-8">Tarifas y Condiciones</h2><div className="grid md:grid-cols-2 gap-6"><div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl p-6 border border-rose-200"><h3 className="text-xl font-semibold text-gray-900 mb-3">Tarifas típicas</h3><ul className="space-y-2 text-gray-700"><li>• Económico: desde 220 MAD/día</li><li>• Sedán: desde 320 MAD/día</li><li>• SUV: desde 480 MAD/día</li></ul><p className="text-sm text-gray-500 mt-3">Sujeto a temporada y disponibilidad</p></div><div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200"><h3 className="text-xl font-semibold text-gray-900 mb-3">Condiciones</h3><ul className="space-y-2 text-gray-700"><li>• Seguro completo requerido</li><li>• Tarjeta de crédito válida</li><li>• Edad mínima 23 años</li><li>• Política de combustible y devolución estándar</li></ul></div></div></section>

          <section className="mb-12"><div className="bg-gradient-to-r from-rose-600 to-red-700 rounded-2xl p-8 text-white text-center"><h2 className="text-3xl font-bold mb-4">Solicitar Reserva Sin Fianza</h2><p className="text-xl mb-8 opacity-90">Indíquenos su vuelo y duración; confirmaremos elegibilidad y precio.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/es" className="bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><DollarSign className="h-5 w-5 mr-2" />Obtener Oferta</Link><Link href="/es/flota" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-rose-600 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />Ver Vehículos</Link></div></div></section>

          <section className="mb-12"><div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"><h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">¿Preguntas?</h2><div className="grid md:grid-cols-2 gap-6"><div className="flex items-center justify-center space-x-3"><Phone className="h-6 w-6 text-rose-600" /><div><p className="font-semibold text-gray-900">Línea Aeropuerto</p><p className="text-gray-700">+212 631 63 00 13</p></div></div><div className="flex items-center justify-center space-x-3"><Mail className="h-6 w-6 text-rose-600" /><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-700">airport@nassouhcar.com</p></div></div></div></div></section>
        </article>
      </div>
    </div>
  )
}
