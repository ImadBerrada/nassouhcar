import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Baratos en Tánger 2025 - Precios Imbatibles desde 180 DH/día',
  description: 'Alquiler de coches baratos en Tánger ✓ Precios desde 180 DH/día ✓ Sin cargos ocultos ✓ Seguro incluido ✓ Reserva gratuita ✓ Mejores tarifas garantizadas.',
  keywords: 'alquiler coches baratos tanger, alquiler coches tanger barato, coche barato tanger, alquiler auto barato tanger',
  openGraph: {
    title: 'Alquiler de Coches Baratos en Tánger 2025 - Precios Imbatibles desde 180 DH/día',
    description: 'Alquiler de coches baratos en Tánger ✓ Precios desde 180 DH/día ✓ Sin cargos ocultos ✓ Seguro incluido ✓ Mejores tarifas garantizadas.',
    images: ['/cheap-car-rental-tangier.webp'],
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-baratos-tanger'
  }
}

export default function AlquilerCochesBaratosTangerBlog() {
  return (
    <>
      <StructuredData type="Article" countryTarget="ES" language="es" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold text-lg">Precios Imbatibles</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent leading-tight">
                Alquiler de Coches Baratos en Tánger
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                ¡Alquiler de coches baratos en Tánger desde 180 DH/día! 
                Mejores precios garantizados, sin cargos ocultos, seguro incluido. ¡Reserve ahora!
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
                  <span>Precios Económicos</span>
                </div>
              </div>
              <Link 
                href="/es/flota" 
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Precios Baratos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Price Stats */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Precios imbatibles garantizados</h2>
              <p className="text-xl text-gray-600">Las mejores tarifas de alquiler de coches en Tánger</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-green-600 mb-2">180 DH</div>
                <div className="text-gray-600 font-medium">Precio mínimo/día</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-emerald-600 mb-2">-40%</div>
                <div className="text-gray-600 font-medium">Vs competencia</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-amber-600 mb-2">0 DH</div>
                <div className="text-gray-600 font-medium">Cargos ocultos</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Seguro incluido</div>
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
                  <TrendingDown className="h-8 w-8 text-green-600 mr-3" />
                  Alquiler de coche barato en Tánger: Precios imbatibles
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  ¿Busca un <strong>alquiler de coche barato en Tánger</strong>? 
                  Nassoh Car le ofrece las mejores tarifas del mercado con precios 
                  que comienzan desde solo <strong>180 DH por día</strong>. 
                  ¡Nuestro <strong>alquiler de coche barato en Tánger</strong> incluye seguro, 
                  kilometraje ilimitado y sin cargos ocultos!
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-green-600 mr-2" />
                    ¿Por qué nuestros precios son tan bajos?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Flota propia</strong>: Sin intermediarios, precios directos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Gestión optimizada</strong>: Costos reducidos, ahorros repercutidos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Volumen importante</strong>: Negociaciones con proveedores ventajosas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Transparencia total</strong>: Sin cargos ocultos ni sorpresas</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calculator className="h-6 w-6 text-green-600 mr-2" />
                  Lista de precios de alquiler barato en Tánger
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Descubra nuestras tarifas de <strong>alquiler de coche barato en Tánger</strong> 
                  con todos los servicios incluidos:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                    <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Categoría</th>
                        <th className="px-6 py-4 text-center font-semibold text-green-600">Precio/día</th>
                        <th className="px-6 py-4 text-center font-semibold text-emerald-600">Precio/semana</th>
                        <th className="px-6 py-4 text-center font-semibold text-teal-600">Precio/mes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Económico</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">180 DH</td>
                        <td className="px-6 py-4 text-center text-emerald-600 font-semibold">1100 DH</td>
                        <td className="px-6 py-4 text-center text-teal-600 font-semibold">4200 DH</td>
                      </tr>
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="px-6 py-4 font-medium text-gray-900">Compacto</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">220 DH</td>
                        <td className="px-6 py-4 text-center text-emerald-600 font-semibold">1350 DH</td>
                        <td className="px-6 py-4 text-center text-teal-600 font-semibold">5100 DH</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Sedán</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">280 DH</td>
                        <td className="px-6 py-4 text-center text-emerald-600 font-semibold">1750 DH</td>
                        <td className="px-6 py-4 text-center text-teal-600 font-semibold">6600 DH</td>
                      </tr>
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="px-6 py-4 font-medium text-gray-900">SUV</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">380 DH</td>
                        <td className="px-6 py-4 text-center text-emerald-600 font-semibold">2400 DH</td>
                        <td className="px-6 py-4 text-center text-teal-600 font-semibold">9000 DH</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Gift className="h-6 w-6 text-amber-600 mr-2" />
                    ¡Todo incluido en nuestros precios baratos!
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Seguro a todo riesgo</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Kilometraje ilimitado</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Asistencia 24h/24</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Entrega gratuita en Tánger</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Combustible lleno</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Limpieza incluida</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Modificación gratuita</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Cancelación flexible</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Percent className="h-6 w-6 text-green-600 mr-2" />
                  Promociones y descuentos adicionales
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Aproveche nuestras ofertas especiales para un <strong>alquiler de coche barato en Tánger</strong> 
                  aún más ventajoso:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                      <Calendar className="h-5 w-5 text-green-600 mr-2" />
                      Descuento larga duración
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• <strong>7-13 días</strong>: -10% sobre el total</li>
                      <li>• <strong>14-29 días</strong>: -15% sobre el total</li>
                      <li>• <strong>30+ días</strong>: -25% sobre el total</li>
                      <li>• <strong>Estudiantes</strong>: -5% adicionales</li>
                    </ul>
                    <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                      Ahorros máximos
                    </div>
                  </div>

                  <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                      <Users className="h-5 w-5 text-emerald-600 mr-2" />
                      Ofertas especiales
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• <strong>Reserva anticipada</strong>: -8% (30d antes)</li>
                      <li>• <strong>Cliente fiel</strong>: -12% desde el 2º alquiler</li>
                      <li>• <strong>Apadrinamiento</strong>: -50 DH para usted y su amigo</li>
                      <li>• <strong>Grupo 3+ coches</strong>: -20% en todo</li>
                    </ul>
                    <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                      Ventajas exclusivas
                    </div>
                  </div>

                  <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                      <Zap className="h-5 w-5 text-teal-600 mr-2" />
                      Ofertas flash
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• <strong>Última hora</strong>: -15% (reserva D-1)</li>
                      <li>• <strong>Fin de semana</strong>: Paquete 2d = 350 DH</li>
                      <li>• <strong>Temporada baja</strong>: -20% (nov-feb)</li>
                      <li>• <strong>Promo mensual</strong>: Vehículo sorpresa</li>
                    </ul>
                    <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                      Oportunidades limitadas
                    </div>
                  </div>

                  <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                      <CreditCard className="h-5 w-5 text-amber-600 mr-2" />
                      Facilidades de pago
                    </h4>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• <strong>Pago en línea</strong>: Seguro y rápido</li>
                      <li>• <strong>Pago en el lugar</strong>: Efectivo o tarjeta</li>
                      <li>• <strong>Depósito 30%</strong>: Saldo a la entrega</li>
                      <li>• <strong>Factura empresa</strong>: Pago diferido</li>
                    </ul>
                    <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                      Flexibilidad total
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                    Comparación de precios competencia
                  </h3>
                  <p className="text-gray-700 mb-4">
                    ¿Por qué nuestro <strong>alquiler de coche barato en Tánger</strong> 
                    es el más ventajoso del mercado?
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Servicio</th>
                          <th className="px-4 py-3 text-center font-semibold text-green-600">Nassoh Car</th>
                          <th className="px-4 py-3 text-center font-semibold text-gray-600">Competencia</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">Precio económico/día</td>
                          <td className="px-4 py-3 text-center text-green-600 font-bold">180 DH</td>
                          <td className="px-4 py-3 text-center text-gray-600">250-300 DH</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">Seguro incluido</td>
                          <td className="px-4 py-3 text-center text-green-600 font-bold">✓ Gratis</td>
                          <td className="px-4 py-3 text-center text-gray-600">+80-120 DH/d</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">Kilometraje</td>
                          <td className="px-4 py-3 text-center text-green-600 font-bold">✓ Ilimitado</td>
                          <td className="px-4 py-3 text-center text-gray-600">Limitado 200km/d</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">Entrega</td>
                          <td className="px-4 py-3 text-center text-green-600 font-bold">✓ Gratis</td>
                          <td className="px-4 py-3 text-center text-gray-600">+50-100 DH</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Booking Widget */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Reservar ahora</h3>
                  <div className="space-y-4">
                    <Link 
                      href="/es/flota" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-colors"
                    >
                      <Car className="mr-2 h-5 w-5" />
                      Ver vehículos disponibles
                    </Link>
                    <a 
                      href="https://wa.me/212631630013" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-colors"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Reserva por WhatsApp
                    </a>
                  </div>
                </div>

                {/* Popular Categories */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categorías Populares</h3>
                  <div className="space-y-3">
                    <Link href="/es/flota?category=economic" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700">Económico</span>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Desde 180 DH</span>
                    </Link>
                    <Link href="/es/flota?category=sedan" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700">Sedán</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">Desde 280 DH</span>
                    </Link>
                    <Link href="/es/flota?category=suv" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700">SUV</span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">Desde 380 DH</span>
                    </Link>
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
