import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Zap, Award, Percent, Gift, Target, Globe, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Baratos 2025 - Comparador de Precios Marruecos desde 170 DH',
  description: 'Alquiler de coches baratos en Marruecos ✓ Comparador de precios desde 170 DH/día ✓ Todas las ciudades ✓ Mejores tarifas ✓ Servicio premium ✓ Reserva sencilla.',
  keywords: 'alquiler coches baratos, alquiler barato marruecos, coche barato marruecos, alquiler económico marruecos',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-baratos'
  },
  openGraph: {
    title: 'Alquiler de Coches Baratos 2025 - Comparador de Precios Marruecos desde 170 DH',
    description: 'Alquiler de coches baratos en Marruecos ✓ Comparador de precios desde 170 DH/día ✓ Todas las ciudades ✓ Mejores tarifas.',
    images: ['/cheap-car-rental-morocco.webp'],
  },
}

export default function AlquilerCochesBaratosBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Todo Marruecos</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches Baratos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              ¡Alquiler de coches baratos en todo Marruecos desde 170 DH/día! 
              Comparador de precios, todas las ciudades, servicio premium. ¡Tu movilidad económica!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Actualizado el 15 de Enero de 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min de lectura</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Nacional</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Comparar Precios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* National Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Líder en alquiler barato en Marruecos</h2>
            <p className="text-xl text-gray-600">Alquiler de coches baratos en todas las ciudades marroquíes</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">170 DH</div>
              <div className="text-gray-600 font-medium">Precio mín. nacional</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Ciudades cubiertas</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <div className="text-gray-600 font-medium">Más barato del mercado</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Servicio nacional</div>
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
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                Alquiler de coches baratos: Revolución en la movilidad de Marruecos
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                ¿Buscas un <strong>alquiler de coche barato</strong> en Marruecos? 
                Nassoh Car revoluciona el mercado con tarifas desde 
                <strong>170 DH por día</strong> en todas las ciudades marroquíes. 
                ¡Nuestro <strong>alquiler barato en Marruecos</strong> te garantiza la movilidad 
                económica sin comprometer la calidad!
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  ¿Por qué elegir nuestro alquiler económico?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Cobertura nacional</strong>: 15+ ciudades, mismo servicio en todas partes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Precios transparentes</strong>: Sin costes ocultos, todo incluido</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flota moderna</strong>: Vehículos recientes, bien mantenidos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Servicio premium</strong>: Asistencia 24h, entrega gratuita</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Search className="h-6 w-6 text-blue-600 mr-2" />
                Comparador de precios por ciudad
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Descubre nuestras tarifas para un <strong>alquiler de coche barato</strong> 
                en las principales ciudades de Marruecos:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Ciudad</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Económico</th>
                      <th className="px-6 py-4 text-center font-semibold text-indigo-600">Compacto</th>
                      <th className="px-6 py-4 text-center font-semibold text-purple-600">Berlina</th>
                      <th className="px-6 py-4 text-center font-semibold text-pink-600">Disponibilidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Tánger</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">170 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">190 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">230 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Casablanca</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">180 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">200 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">240 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Rabat</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">175 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">195 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">235 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Marrakech</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">185 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">205 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">245 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Fez</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">175 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">195 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">235 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Agadir</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">180 DH</td>
                      <td className="px-6 py-4 text-center text-indigo-600 font-semibold">200 DH</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">240 DH</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ 24h/24</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gift className="h-6 w-6 text-green-600 mr-2" />
                  ¡Incluido en todas nuestras tarifas económicas!
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Seguro de responsabilidad civil</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Kilometraje 200km/día</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Asistencia nacional 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Entrega gratuita en centro ciudad</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Combustible de salida</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Limpieza y desinfección</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">1 modificación gratuita</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Cancelación flexible</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Filter className="h-6 w-6 text-blue-600 mr-2" />
                Guía para elegir vehículo económico
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Cómo elegir el vehículo adecuado para tu <strong>alquiler de coche barato</strong> 
                según tus necesidades:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-blue-600 mr-2" />
                    Económico (170-185 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Ideal para</strong>: Ciudad, trayectos cortos</li>
                    <li>• <strong>Pasajeros</strong>: 2-4 personas</li>
                    <li>• <strong>Equipaje</strong>: 1-2 maletas</li>
                    <li>• <strong>Consumo</strong>: 5-6L/100km</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Máximo ahorro
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-indigo-600 mr-2" />
                    Compacto (190-205 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Ideal para</strong>: Familia, confort</li>
                    <li>• <strong>Pasajeros</strong>: 4-5 personas</li>
                    <li>• <strong>Equipaje</strong>: 2-3 maletas</li>
                    <li>• <strong>Consumo</strong>: 6-7L/100km</li>
                  </ul>
                  <div className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Buen compromiso
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Berlina (230-245 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Ideal para</strong>: Negocios, viajes largos</li>
                    <li>• <strong>Pasajeros</strong>: 4-5 personas</li>
                    <li>• <strong>Equipaje</strong>: 3-4 maletas</li>
                    <li>• <strong>Consumo</strong>: 7-8L/100km</li>
                  </ul>
                  <div className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Confort premium
                  </div>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-pink-600 mr-2" />
                    SUV (290-320 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Ideal para</strong>: Aventura, montaña</li>
                    <li>• <strong>Pasajeros</strong>: 5-7 personas</li>
                    <li>• <strong>Equipaje</strong>: 4-5 maletas</li>
                    <li>• <strong>Consumo</strong>: 8-10L/100km</li>
                  </ul>
                  <div className="bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Versatilidad máx.
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Percent className="h-6 w-6 text-blue-600 mr-2" />
                Trucos para ahorrar aún más
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Maximiza tus ahorros en tu <strong>alquiler de coche barato</strong> 
                con nuestros consejos de expertos:
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Estrategias de ahorro</h4>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Reserva con antelación</h5>
                      <p className="text-gray-600">Reserva 2 semanas antes para obtener los mejores precios.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Alquiler larga duración</h5>
                      <p className="text-gray-600">Tarifas decrecientes a partir de 7 días de alquiler.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Evita temporada alta</h5>
                      <p className="text-gray-600">Los precios son más bajos fuera de julio/agosto.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ¿Listo para alquilar al mejor precio?
                </h3>
                <p className="text-gray-600 mb-6">
                  No esperes más y aprovecha nuestras ofertas exclusivas en todo Marruecos.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/es/flota" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Ver vehículos económicos
                  </Link>
                  <Link 
                    href="/es/contacto" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Quick Booking */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reserva Rápida</h3>
                <p className="text-gray-600 mb-6">
                  Los mejores precios parten rápido. ¡Asegura tu vehículo ahora!
                </p>
                <Link 
                  href="/es/flota" 
                  className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Reservar Ahora
                </Link>
                <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Soporte 24/7 incluido</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">¿Necesitas ayuda?</h3>
                <div className="space-y-4">
                  <a href="tel:+212600000000" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="font-medium">+212 6 XX XX XX XX</span>
                  </a>
                  <a href="mailto:contact@nassohcar.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="font-medium">contact@nassohcar.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
