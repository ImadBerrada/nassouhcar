import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Alquiler Coches Tánger Baratos 2025 - Tarifas Inmejorables desde 170 DH',
  description: 'Alquiler de coches baratos en Tánger ✓ Tarifas inmejorables desde 170 DH/día ✓ Mejor relación calidad-precio ✓ Servicio completo ✓ Reserva inmediata.',
  keywords: 'alquiler coches tanger baratos, alquiler barato tanger, coche barato tanger, alquiler economico tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tanger-baratos'
  },
  openGraph: {
    title: 'Alquiler Coches Tánger Baratos 2025 - Tarifas Inmejorables desde 170 DH',
    description: 'Alquiler de coches baratos en Tánger ✓ Tarifas inmejorables desde 170 DH/día ✓ Mejor relación calidad-precio.',
    images: ['/cheap-car-rental-tangier.webp'],
  },
}

export default function AlquilerCochesTangerBaratosBlog() {
  return (
    <>
      <StructuredData type="Article" countryTarget="MA" language="es" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <TrendingDown className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold text-lg">Económico</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent leading-tight">
                Alquiler Coches Tánger Baratos
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                ¡Alquiler de coches baratos en Tánger desde 170 DH/día! 
                Tarifas inmejorables, calidad garantizada, servicio premium. ¡La mejor relación calidad-precio!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Actualizado el 15 de Enero de 2025</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>7 min de lectura</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>Económico</span>
                </div>
              </div>
              <Link 
                href="/es/flota" 
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Tarifas Baratas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Price Stats */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tarifas inmejorables garantizadas</h2>
              <p className="text-xl text-gray-600">Alquiler de coches baratos en Tánger con servicio premium</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-green-600 mb-2">170 DH</div>
                <div className="text-gray-600 font-medium">Precio mínimo/día</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-emerald-600 mb-2">60%</div>
                <div className="text-gray-600 font-medium">Más barato mercado</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-teal-600 mb-2">5★</div>
                <div className="text-gray-600 font-medium">Calidad mantenida</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-cyan-600 mb-2">0 DH</div>
                <div className="text-gray-600 font-medium">Caron ocultos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="h-8 w-8 text-green-600 mr-3" />
                  Alquiler coches Tánger baratos: La excelencia accesible
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  ¿Busca un <strong>alquiler de coches baratos en Tánger</strong> sin compromisos? 
                  Nassoh Car revoluciona el mercado con tarifas desde 
                  <strong>170 DH por día</strong> manteniendo un servicio premium. 
                  ¡Nuestro <strong>alquiler barato en Tánger</strong> le garantiza la mejor 
                  relación calidad-precio del mercado!
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-green-600 mr-2" />
                    ¿Por qué somos los más baratos?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Gestión directa</strong>: Sin intermediarios, precio justo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Flota optimizada</strong>: Vehículos recientes, costes controlados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Volumen de negocio</strong>: Economías de escala repercutidas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Política transparente</strong>: Precio mostrado = precio final</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calculator className="h-6 w-6 text-green-600 mr-2" />
                  Tabla de tarifas baratos Tánger
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Descubra nuestras tarifas para un <strong>alquiler de coches baratos en Tánger</strong> 
                  con servicio completo incluido:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                    <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Categoría</th>
                        <th className="px-6 py-4 text-center font-semibold text-green-600">Precio/día</th>
                        <th className="px-6 py-4 text-center font-semibold text-emerald-600">Precio/semana</th>
                        <th className="px-6 py-4 text-center font-semibold text-teal-600">Vs Mercado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Económico</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">170 DH</td>
                        <td className="px-6 py-4 text-center text-emerald-600 font-semibold">1000 DH</td>
                        <td className="px-6 py-4 text-center text-red-600 font-semibold">-60%</td>
                      </tr>
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="px-6 py-4 font-medium text-gray-900">Compacto</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">190 DH</td>
                        <td className="px-6 py-4 text-center text-emerald-600 font-semibold">1200 DH</td>
                        <td className="px-6 py-4 text-center text-red-600 font-semibold">-55%</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Berlina</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">230 DH</td>
                        <td className="px-6 py-4 text-center text-emerald-600 font-semibold">1450 DH</td>
                        <td className="px-6 py-4 text-center text-red-600 font-semibold">-50%</td>
                      </tr>
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="px-6 py-4 font-medium text-gray-900">SUV</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">290 DH</td>
                        <td className="px-6 py-4 text-center text-emerald-600 font-semibold">1850 DH</td>
                        <td className="px-6 py-4 text-center text-red-600 font-semibold">-45%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Gift className="h-6 w-6 text-teal-600 mr-2" />
                    ¡Todo incluido en nuestras tarifas baratas!
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                        <span className="text-gray-700">Seguro responsabilidad civil</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                        <span className="text-gray-700">Kilometraje 200km/día</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                        <span className="text-gray-700">Asistencia 24h/24</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                        <span className="text-gray-700">Entrega gratuita centro</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                        <span className="text-gray-700">Combustible de salida</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                        <span className="text-gray-700">Limpieza completa</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                        <span className="text-gray-700">Modificación gratuita</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                        <span className="text-gray-700">Cancelación flexible</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Percent className="h-6 w-6 text-green-600 mr-2" />
                  Comparativa precios mercado Tánger
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Análisis comparativo para un <strong>alquiler de coches baratos en Tánger</strong> 
                  vs la competencia:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                    <thead className="bg-gradient-to-r from-gray-50 to-slate-50">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Proveedor</th>
                        <th className="px-6 py-4 text-center font-semibold text-gray-600">Económico</th>
                        <th className="px-6 py-4 text-center font-semibold text-gray-600">Compacto</th>
                        <th className="px-6 py-4 text-center font-semibold text-gray-600">Berlina</th>
                        <th className="px-6 py-4 text-center font-semibold text-gray-600">Diferencia</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="px-6 py-4 font-bold text-green-800">Nassoh Car</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">170 DH</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">190 DH</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">230 DH</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">Referencia</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Competidor A</td>
                        <td className="px-6 py-4 text-center text-red-600">420 DH</td>
                        <td className="px-6 py-4 text-center text-red-600">480 DH</td>
                        <td className="px-6 py-4 text-center text-red-600">550 DH</td>
                        <td className="px-6 py-4 text-center text-red-600 font-semibold">+147%</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">Competidor B</td>
                        <td className="px-6 py-4 text-center text-red-600">380 DH</td>
                        <td className="px-6 py-4 text-center text-red-600">430 DH</td>
                        <td className="px-6 py-4 text-center text-red-600">490 DH</td>
                        <td className="px-6 py-4 text-center text-red-600 font-semibold">+123%</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Competidor C</td>
                        <td className="px-6 py-4 text-center text-red-600">350 DH</td>
                        <td className="px-6 py-4 text-center text-red-600">390 DH</td>
                        <td className="px-6 py-4 text-center text-red-600">450 DH</td>
                        <td className="px-6 py-4 text-center text-red-600 font-semibold">+106%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <ThumbsUp className="h-6 w-6 text-amber-600 mr-2" />
                    Ahorros realizados con Nassoh Car
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">En 1 semana</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li>• <strong>Económico</strong>: Ahorro de 1750 DH</li>
                        <li>• <strong>Compacto</strong>: Ahorro de 2030 DH</li>
                        <li>• <strong>Berlina</strong>: Ahorro de 2240 DH</li>
                        <li>• <strong>SUV</strong>: Ahorro de 2450 DH</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">En 1 mes</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li>• <strong>Económico</strong>: Ahorro de 7500 DH</li>
                        <li>• <strong>Compacto</strong>: Ahorro de 8700 DH</li>
                        <li>• <strong>Berlina</strong>: Ahorro de 9600 DH</li>
                        <li>• <strong>SUV</strong>: Ahorro de 10500 DH</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="h-6 w-6 text-green-600 mr-2" />
                  Promociones y descuentos adicionales
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Maximice sus ahorros para un <strong>alquiler de coches baratos en Tánger</strong> 
                  con nuestras ofertas especiales:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                      <Calendar className="h-5 w-5 text-green-600 mr-2" />
                      Descuentos de temporada
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• <strong>Temporada baja</strong>: Nov-Feb (-25%)</li>
                      <li>• <strong>Temporada media</strong>: Mar-May (-15%)</li>
                      <li>• <strong>Reserva anticipada</strong>: 30 días antes (-12%)</li>
                      <li>• <strong>Última hora</strong>: D-1 (-10%)</li>
                    </ul>
                    <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                      Hasta -25%
                    </div>
                  </div>

                  <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                      <Users className="h-5 w-5 text-emerald-600 mr-2" />
                      Descuentos por duración
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• <strong>+3 días</strong>: -5% adicional</li>
                      <li>• <strong>+7 días</strong>: -10% adicional</li>
                      <li>• <strong>+14 días</strong>: -15% adicional</li>
                      <li>• <strong>+30 días</strong>: -20% adicional</li>
                    </ul>
                    <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                      Hasta -20%
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">¿Listo para ahorrar?</h3>
                  <p className="text-lg opacity-90 mb-8">
                    Reserve su vehículo barato ahora y asegure el mejor precio del mercado en Tánger.
                  </p>
                  <Link 
                    href="/es/flota" 
                    className="inline-block bg-white text-green-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Ver Ofertas Baratas
                  </Link>
                </div>

              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search Widget */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Reserva Rápida</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Recogida</label>
                      <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" placeholder="Aeropuerto o Ciudad" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                      <input type="date" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
                    </div>
                    <button className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors">
                      Ver Precios
                    </button>
                  </div>
                </div>

                {/* Popular Categories */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categorías Populares</h3>
                  <div className="space-y-3">
                    <Link href="/es/flota" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <span className="font-medium text-gray-700">Económico</span>
                      <span className="text-green-600 font-bold">170 DH</span>
                    </Link>
                    <Link href="/es/flota" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <span className="font-medium text-gray-700">Compacto</span>
                      <span className="text-green-600 font-bold">190 DH</span>
                    </Link>
                    <Link href="/es/flota" className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <span className="font-medium text-gray-700">Diésel</span>
                      <span className="text-green-600 font-bold">200 DH</span>
                    </Link>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">¿Necesita ayuda?</h3>
                  <p className="text-gray-600 text-sm mb-4">Nuestro equipo está disponible 24/7 para ayudarle.</p>
                  <div className="space-y-3">
                    <a href="tel:+212631630013" className="flex items-center text-green-700 font-medium hover:text-green-800">
                      <Phone className="h-5 w-5 mr-2" />
                      +212 631 63 00 13
                    </a>
                    <a href="mailto:contact@nassohcar.com" className="flex items-center text-green-700 font-medium hover:text-green-800">
                      <Mail className="h-5 w-5 mr-2" />
                      contact@nassohcar.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}