import type { Metadata } from 'next'
import { Calendar, Clock, Car, Shield, Percent, DollarSign, Tag, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Larga Temporada Marruecos 2025 ✓ Planes Mensuales',
  description: 'Alquiler de coches larga temporada en Marruecos ✓ Planes mensuales ✓ Empresas y particulares ✓ Mantenimiento incluido ✓ Seguro ✓ Vehículo de sustitución.',
  keywords: 'alquiler coches larga temporada marruecos, renting coches marruecos, alquiler mensual coches marruecos',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-larga-temporada' },
  openGraph: {
    title: 'Alquiler de Coches Larga Temporada Marruecos 2025 ✓ Planes Mensuales',
    description: 'Alquiler de coches larga temporada en Marruecos ✓ Mantenimiento, seguro y vehículo de sustitución incluidos.',
    images: ['/morocco-long-term-car-rental.jpg'],
  },
}

export default function LongTermCarRentalBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Calendar className="h-6 w-6 text-indigo-400 mr-2" /><span className="text-indigo-400 font-semibold text-lg">Planes Mensuales</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-blue-300 to-purple-400 bg-clip-text text-transparent leading-tight">Alquiler Larga Temporada</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Soluciones para empresas y particulares. Mantenimiento, seguro y vehículo de sustitución incluidos.</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <section className="mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-8">Incluido en Planes Mensuales</h2><div className="grid md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><ul className="space-y-2 text-gray-700"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-indigo-600 mr-2" /><span>Mantenimiento y revisiones</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-indigo-600 mr-2" /><span>Seguro a todo riesgo</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-indigo-600 mr-2" /><span>Vehículo de sustitución</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-indigo-600 mr-2" /><span>Asistencia 24/7</span></li></ul></div><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><ul className="space-y-2 text-gray-700"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-indigo-600 mr-2" /><span>Precio mensual transparente</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-indigo-600 mr-2" /><span>Plazos de contrato flexibles</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-indigo-600 mr-2" /><span>Facturación para empresas</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-indigo-600 mr-2" /><span>Entrega nacional</span></li></ul></div></div></section>

          <section className="mb-12"><div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center"><h2 className="text-3xl font-bold mb-4">Solicitar Presupuesto Larga Duración</h2><p className="text-xl mb-8 opacity-90">Cuéntenos sus necesidades y duración; reciba un plan mensual a medida.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/es" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><Tag className="h-5 w-5 mr-2" />Obtener Presupuesto</Link><Link href="/es/flota" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />Ver Vehículos</Link></div></div></section>

          <section className="mb-12"><div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"><h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contacto</h2><div className="grid md:grid-cols-2 gap-6"><div className="flex items-center justify-center space-x-3"><Phone className="h-6 w-6 text-indigo-600" /><div><p className="font-semibold text-gray-900">Línea Empresas</p><p className="text-gray-700">+212 631 63 00 13</p></div></div><div className="flex items-center justify-center space-x-3"><Mail className="h-6 w-6 text-indigo-600" /><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-700">empresas@nassohcar.com</p></div></div></div></div></section>
        </article>
      </div>
    </div>
  )
}
