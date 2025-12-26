import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rentar Coche Barato Tánger 2025 - Tarifas Mini desde 170 DH/día',
  description: 'Rentar coche barato Tánger ✓ Tarifas mini desde 170 DH/día ✓ Ofertas económicas ✓ Flota reciente ✓ Servicio de calidad ✓ Reserva fácil.',
  keywords: 'rentar coche barato tanger, coche barato tanger, alquiler económico tanger, rentar barato tanger, car rental cheap tangier',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/rentar-coche-barato-tanger'
  },
  openGraph: {
    title: 'Rentar Coche Barato Tánger 2025 - Tarifas Mini desde 170 DH/día',
    description: 'Rentar coche barato Tánger ✓ Tarifas mini desde 170 DH/día ✓ Ofertas económicas.',
    images: ['/tangier-budget-car-rental-blog.jpg'],
  },
}

export default function RentarCocheBaratoTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 via-amber-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Coins className="h-6 w-6 text-orange-400 mr-2" />
              <span className="text-orange-400 font-semibold text-lg">Precio Bajo</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Rentar Coche Barato Tánger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              ¡Rentar coche barato en Tánger desde 170 DH/día! 
              Ahorros máximos, calidad garantizada, servicio completo. ¡Su presupuesto bajo control!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Actualizado el 15 de Enero de 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>6 min de lectura</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Bajo Presupuesto</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Precios Bajos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Budget Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Precios bajos, grandes ahorros</h2>
            <p className="text-xl text-gray-600">Rentar coche barato sin comprometer la calidad</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">170 DH</div>
              <div className="text-gray-600 font-medium">Precio mini/día</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">50%</div>
              <div className="text-gray-600 font-medium">Ahorro vs otros</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Calidad mantenida</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Soporte incluido</div>
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
                <Target className="h-8 w-8 text-orange-600 mr-3" />
                Rentar coche barato Tánger: Presupuesto bajo control
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                ¿Desea <strong>rentar coche barato en Tánger</strong> sin sacrificar 
                la calidad? Nassoh Car le ofrece tarifas mini desde 
                <strong>170 DH por día</strong> con todos los servicios incluidos. 
                ¡Nuestro enfoque de <strong>precio bajo</strong> le garantiza ahorros 
                sustanciales manteniendo un servicio de calidad!
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-orange-600 mr-2" />
                  Nuestra filosofía de precios bajos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Ahorros inteligentes</strong>: Reducción de costes sin impacto en la calidad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Volumen optimizado</strong>: Compras agrupadas para mejores precios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Gestión directa</strong>: Sin intermediarios, precios justos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Transparencia total</strong>: Precios mostrados = precios pagados</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="h-6 w-6 text-orange-600 mr-2" />
                Tabla de tarifas de precios bajos en Tánger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Descubra nuestras tarifas para <strong>rentar coche barato en Tánger</strong> 
                con una excelente relación calidad-precio:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-orange-50 to-amber-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Categoría</th>
                      <th className="px-6 py-4 text-center font-semibold text-orange-600">Precio/día</th>
                      <th className="px-6 py-4 text-center font-semibold text-amber-600">Precio/semana</th>
                      <th className="px-6 py-4 text-center font-semibold text-yellow-600">Ahorro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Mini económico</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-bold">170 DH</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-semibold">1000 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-190 DH</td>
                    </tr>
                    <tr className="bg-orange-50 hover:bg-orange-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Económico</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-bold">190 DH</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-semibold">1200 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-130 DH</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Compacto</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-bold">230 DH</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-semibold">1450 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-160 DH</td>
                    </tr>
                    <tr className="bg-orange-50 hover:bg-orange-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Berlina</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-bold">290 DH</td>
                      <td className="px-6 py-4 text-center text-amber-600 font-semibold">1850 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">-180 DH</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gift className="h-6 w-6 text-green-600 mr-2" />
                  ¡Incluido en nuestros precios bajos!
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Seguro responsabilidad civil</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Kilometraje 200km/día</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Asistencia telefónica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Entrega Tánger centro</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Combustible de salida</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Limpieza básica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Modificación 1 vez gratuita</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Cancelación 48h antes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Percent className="h-6 w-6 text-orange-600 mr-2" />
                Estrategias de ahorro adicionales
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Maximice sus ahorros para <strong>rentar coche barato en Tánger</strong> 
                con nuestros trucos de expertos:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                    Timing óptimo
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Temporada baja</strong>: Nov-Feb (-20%)</li>
                    <li>• <strong>Días laborables</strong>: Lun-Jue (-15%)</li>
                    <li>• <strong>Reserva anticipada</strong>: 30 días antes (-10%)</li>
                    <li>• <strong>Último minuto</strong>: Día anterior (-12%)</li>
                  </ul>
                  <div className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Timing perfecto
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-amber-600 mr-2" />
                    Duración inteligente
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>3-6 días</strong>: Precio base</li>
                    <li>• <strong>7-13 días</strong>: -8% automático</li>
                    <li>• <strong>14-29 días</strong>: -15% progresivo</li>
                    <li>• <strong>30+ días</strong>: -25% larga duración</li>
                  </ul>
                  <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Duración óptima
                  </div>
                </div>

                <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-yellow-600 mr-2" />
                    Opciones económicas
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Vehículo sorpresa</strong>: -20% en categoría</li>
                    <li>• <strong>Recogida en agencia</strong>: Sin entrega</li>
                    <li>• <strong>Combustible devolución vacío</strong>: Precio gasolinera</li>
                    <li>• <strong>Limpieza cliente</strong>: -30 DH</li>
                  </ul>
                  <div className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Opciones flexibles
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 text-green-600 mr-2" />
                    Programas de fidelidad
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Tarjeta fidelidad</strong>: -5% permanente</li>
                    <li>• <strong>Patrocinio amigo</strong>: -50 DH cada uno</li>
                    <li>• <strong>Opinión cliente</strong>: -30 DH próximo alquiler</li>
                    <li>• <strong>Boletín</strong>: Ofertas exclusivas</li>
                  </ul>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Ventajas duraderas
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 text-orange-600 mr-2" />
                  Comparativa presupuesto vs calidad
                </h3>
                <p className="text-gray-700 mb-4">
                  Cómo <strong>rentar coche barato en Tánger</strong> 
                  sin comprometer lo esencial:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Criterio</th>
                        <th className="px-4 py-3 text-center font-semibold text-orange-600">Nuestro enfoque</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-600">Impacto presupuesto</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Edad vehículos</td>
                        <td className="px-4 py-3 text-center text-orange-600">2-5 años</td>
                        <td className="px-4 py-3 text-center text-green-600">Ahorro 40%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">Mantenimiento</td>
                        <td className="px-4 py-3 text-center text-orange-600">Regular garantizado</td>
                        <td className="px-4 py-3 text-center text-green-600">Seguridad mantenida</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-900">Seguro</td>
                        <td className="px-4 py-3 text-center text-orange-600">RC incluida</td>
                        <td className="px-4 py-3 text-center text-green-600">Protección esencial</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">Soporte</td>
                        <td className="px-4 py-3 text-center text-orange-600">24h/24</td>
                        <td className="px-4 py-3 text-center text-green-600">Tranquilidad total</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Reservar Precio Bajo</h3>
              <div className="space-y-4">
                <Link 
                  href="/es/flota" 
                  className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center font-bold py-3 px-4 rounded-xl transition-colors duration-300"
                >
                  Ver Ofertas
                </Link>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">+212 631 63 00 13</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">contact@nassohcar.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
