import type { Metadata } from 'next'
import { MapPin, Clock, Tag, DollarSign, Percent, TrendingDown, Car, Shield, ArrowRight, Calendar, CheckCircle, Plane, Navigation, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Baratos Aeropuerto Tánger – Desde 180 MAD/día | 2025',
  description: 'Alquiler de coches baratos en Aeropuerto Tánger Ibn Battouta ✓ Desde 180 MAD/día ✓ Precios transparentes ✓ Consejos para ahorrar ✓ Recogida 24/7.',
  keywords: 'alquiler coches baratos aeropuerto tanger, alquiler low cost aeropuerto tanger, rent a car barato aeropuerto tanger',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-baratos-aeropuerto-tanger' },
  openGraph: {
    title: 'Alquiler de Coches Baratos Aeropuerto Tánger – Desde 180 MAD/día | 2025',
    description: 'Alquiler de coches baratos en Aeropuerto Tánger ✓ Precios transparentes ✓ Consejos para ahorrar ✓ Servicio 24/7.',
    images: ['/tangier-airport-cheap-car-rental.jpg'],
  },
}

export default function CheapCarRentalTangierAirportBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="relative bg-gradient-to-r from-cyan-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><TrendingDown className="h-6 w-6 text-cyan-400 mr-2" /><span className="text-cyan-400 font-semibold text-lg">Mejores Precios Aeropuerto</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">Alquiler de Coches Baratos – Aeropuerto Tánger</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Tarifas transparentes desde 180 MAD/día en el Aeropuerto Ibn Battouta. Consejos para ahorrar y recogida 24/7.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Actualizado 15 Ene, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>6 min lectura</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Low Cost</span></div></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12 border border-cyan-100"><h2 className="text-3xl font-bold text-gray-900 mb-4">Tarifas Iniciales Aeropuerto</h2><div className="grid md:grid-cols-3 gap-6"><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-3">Económico</h3><p className="text-sm text-gray-600 mb-2">Conducción urbana</p><p className="text-cyan-600 font-bold">Desde 180 MAD/día</p></div><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-3">Sedán</h3><p className="text-sm text-gray-600 mb-2">Confort</p><p className="text-cyan-600 font-bold">Desde 300 MAD/día</p></div><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><h3 className="text-xl font-semibold text-gray-900 mb-3">SUV</h3><p className="text-sm text-gray-600 mb-2">Familia y viajes</p><p className="text-cyan-600 font-bold">Desde 450 MAD/día</p></div></div><p className="text-sm text-gray-500 mt-3">Las tarifas varían según temporada y disponibilidad. Reserve con antelación para asegurar los precios más bajos.</p></div>

          <section className="mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-8">7 Formas de Ahorrar en el Aeropuerto</h2><div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"><div className="grid md:grid-cols-2 gap-6"><ul className="space-y-3"><li className="flex items-start"><Percent className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Reservar pronto</strong>: 7–14 días antes de la llegada</span></li><li className="flex items-start"><DollarSign className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Clase económica</strong>: Mejor valor para ciudad</span></li><li className="flex items-start"><Plane className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Recogida valle</strong>: Llegadas nocturnas pueden ser más baratas</span></li><li className="flex items-start"><TrendingDown className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Evitar fechas punta</strong>: Entre semana o temporada baja</span></li></ul><ul className="space-y-3"><li className="flex items-start"><Shield className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Seguro incluido</strong>: Evite cargos extra</span></li><li className="flex items-start"><Car className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Kilometraje ilimitado</strong>: Sin recargos por viajes</span></li><li className="flex items-start"><Tag className="h-5 w-5 text-amber-600 mr-2 mt-1" /><span className="text-gray-700"><strong>Promociones</strong>: Revise ofertas estacionales</span></li></ul></div></div></section>

          <section className="mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-8">Servicios Incluidos (Sin Costes Ocultos)</h2><div className="grid md:grid-cols-2 gap-6"><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><ul className="space-y-2 text-gray-700"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Seguro a todo riesgo</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Kilometraje ilimitado</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Asistencia 24/7</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Vehículos recientes</span></li></ul></div><div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"><ul className="space-y-2 text-gray-700"><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Entrega en aeropuerto</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>GPS disponible</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Coches limpios y mantenidos</span></li><li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-600 mr-2" /><span>Precios transparentes</span></li></ul></div></div></section>

          <section className="mb-12"><div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white text-center"><h2 className="text-3xl font-bold mb-4">Reserve su Coche Barato en Aeropuerto</h2><p className="text-xl mb-8 opacity-90">Tarifas bajas y condiciones transparentes. Vehículos económicos disponibles 24/7.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/es" className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"><DollarSign className="h-5 w-5 mr-2" />Reservar Ahora</Link><Link href="/es/flota" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center"><Car className="h-5 w-5 mr-2" />Ver Vehículos</Link></div></div></section>

          <section className="mb-12"><div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"><h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">¿Necesita ayuda?</h2><div className="grid md:grid-cols-2 gap-6"><div className="flex items-center justify-center space-x-3"><Phone className="h-6 w-6 text-cyan-600" /><div><p className="font-semibold text-gray-900">Línea Aeropuerto</p><p className="text-gray-700">+212 631 63 00 13</p></div></div><div className="flex items-center justify-center space-x-3"><Mail className="h-6 w-6 text-cyan-600" /><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-700">contacto@nassohcar.com</p></div></div></div></div></section>
        </article>
      </div>
    </div>
  )
}
