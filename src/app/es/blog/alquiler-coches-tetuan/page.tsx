import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Gift, Award, Mountain, Waves, Compass, Route, Building, Plane, Ship } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tetuán 2025 - Desde 175 DH/día ✓ Servicio Económico',
  description: 'Alquiler de coches en Tetuán ✓ Desde 175 DH/día ✓ Aeropuerto y centro ciudad ✓ Flota moderna ✓ Asistencia 24h ✓ Reserva sencilla ✓ Entrega gratuita.',
  keywords: 'alquiler coches tetuan, alquiler coches tetuán, car rental tetouan, alquiler auto tetuán, coche alquiler tetuán',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tetuan'
  },
  openGraph: {
    title: 'Alquiler de Coches en Tetuán 2025 - Desde 175 DH/día ✓ Servicio Económico',
    description: 'Alquiler de coches en Tetuán ✓ Desde 175 DH/día ✓ Aeropuerto y centro ciudad ✓ Flota moderna ✓ Asistencia 24h.',
    images: ['/tetouan-car-rental.webp'],
  },
}

export default function AlquilerCochesTetuanBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Mountain className="h-6 w-6 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-semibold text-lg">La Perla del Norte</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches en Tetuán
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              ¡Alquiler de coches en Tetuán desde 175 DH/día! Explore la perla del Norte, 
              sus montañas del Rif y la costa mediterránea con total libertad.
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
                <span>Tetuán</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reservar Tetuán
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Tetouan Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Su alquiler de coches en Tetuán</h2>
            <p className="text-xl text-gray-600">Servicio económico en la capital del Norte marroquí</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">175 DH</div>
              <div className="text-gray-600 font-medium">Precio desde/día</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">Puntos de recogida</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Vehículos disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Servicio asistencia</div>
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
                <Mountain className="h-8 w-8 text-emerald-600 mr-3" />
                ¿Por qué elegir Tetuán para su alquiler?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Tetuán</strong>, apodada la "Paloma Blanca" y "Perla del Norte", 
                es un destino excepcional para su <strong>alquiler de coches en Tetuán</strong>. 
                Declarada Patrimonio de la Humanidad por la UNESCO, esta ciudad histórica ofrece un 
                acceso privilegiado a las montañas del Rif, a la costa mediterránea y a la Andalucía española.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-emerald-600 mr-2" />
                  Ventajas alquiler coches Tetuán
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Ubicación estratégica</strong>: Entre mar, montaña y España</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Patrimonio UNESCO</strong>: Medina auténtica preservada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Acceso privilegiado</strong>: Chefchaouen, Ceuta, Fnideq</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Diversidad de paisajes</strong>: Playas, montañas, bosques</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
                Puntos de recogida en Tetuán
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Recoja su vehículo de <strong>alquiler de coches en Tetuán</strong> 
                en nuestros 3 puntos estratégicos:
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Building className="h-5 w-5 text-emerald-600 mr-2" />
                    Centro ciudad Tetuán
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Dirección</strong>: Avenida Mohammed V</li>
                        <li>• <strong>Horario</strong>: 8h-20h (7d/7)</li>
                        <li>• <strong>Servicios</strong>: Entrega gratuita en hotel</li>
                        <li>• <strong>Proximidad</strong>: Medina, estación de autobuses</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Aparcamiento</strong>: Seguro y gratuito</li>
                        <li>• <strong>Acceso</strong>: Transporte público</li>
                        <li>• <strong>Idiomas</strong>: Árabe, Francés, Español</li>
                        <li>• <strong>Pago</strong>: Efectivo, tarjeta, transferencia</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Punto principal
                  </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Plane className="h-5 w-5 text-teal-600 mr-2" />
                    Aeropuerto Tetuán Sania Ramel
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Terminal</strong>: Llegadas internacionales</li>
                        <li>• <strong>Horario</strong>: Según vuelos (24h/24)</li>
                        <li>• <strong>Servicios</strong>: Bienvenida personalizada</li>
                        <li>• <strong>Distancia</strong>: 5km del centro</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Reserva</strong>: 2h antes de la llegada</li>
                        <li>• <strong>Espera</strong>: Gratuita 1h</li>
                        <li>• <strong>Seguimiento vuelo</strong>: Automático</li>
                        <li>• <strong>Urgencia</strong>: Contacto directo</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Servicio aeropuerto
                  </div>
                </div>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Ship className="h-5 w-5 text-cyan-600 mr-2" />
                    Puerto Fnideq (Ceuta)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Ubicación</strong>: Salida ferry Ceuta</li>
                        <li>• <strong>Horario</strong>: 6h-23h (7d/7)</li>
                        <li>• <strong>Servicios</strong>: Coordinación ferry</li>
                        <li>• <strong>Distancia</strong>: 40km Tetuán</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-600 space-y-2 mb-4">
                        <li>• <strong>Aduana</strong>: Asistencia trámites</li>
                        <li>• <strong>Espera</strong>: Zona dedicada</li>
                        <li>• <strong>Internacional</strong>: Permiso europeo OK</li>
                        <li>• <strong>Devolución</strong>: Posible mismo punto</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Servicio internacional
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-emerald-600 mr-2" />
                Flota adaptada a Tetuán
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestra flota para el <strong>alquiler de coches en Tetuán</strong> está 
                especialmente adaptada a las especificidades de la región:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-emerald-600 mr-2" />
                    Urbanos (175-190 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Ideal para</strong>: Medina, centro ciudad</li>
                    <li>• <strong>Modelos</strong>: Clio, Sandero, Logan</li>
                    <li>• <strong>Ventajas</strong>: Aparcamiento fácil, económico</li>
                    <li>• <strong>Capacidad</strong>: 2-4 personas</li>
                  </ul>
                  <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Ciudad y ahorro
                  </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Mountain className="h-5 w-5 text-teal-600 mr-2" />
                    SUV Montaña (280-320 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Ideal para</strong>: Rif, Chefchaouen</li>
                    <li>• <strong>Modelos</strong>: Duster, Captur, Panda 4x4</li>
                    <li>• <strong>Ventajas</strong>: Tracción, altura al suelo</li>
                    <li>• <strong>Capacidad</strong>: 4-5 personas</li>
                  </ul>
                  <div className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Aventura montaña
                  </div>
                </div>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-cyan-600 mr-2" />
                    Familiares (220-250 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Ideal para</strong>: Familia, confort</li>
                    <li>• <strong>Modelos</strong>: Scenic, Lodgy, C4 Picasso</li>
                    <li>• <strong>Ventajas</strong>: Espacio, equipaje</li>
                    <li>• <strong>Capacidad</strong>: 5-7 personas</li>
                  </ul>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Confort familia
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Waves className="h-5 w-5 text-blue-600 mr-2" />
                    Descapotables (350-400 DH)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Ideal para</strong>: Costa, romántico</li>
                    <li>• <strong>Modelos</strong>: 208 CC, Clio CC</li>
                    <li>• <strong>Ventajas</strong>: Placer, prestigio</li>
                    <li>• <strong>Capacidad</strong>: 2-4 personas</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Placer y prestigio
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Compass className="h-6 w-6 text-emerald-600 mr-2" />
                Destinos imprescindibles desde Tetuán
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Con su <strong>alquiler de coches en Tetuán</strong>, descubra las 
                maravillas del Norte de Marruecos:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl shadow-sm">
                  <thead className="bg-gradient-to-r from-emerald-50 to-teal-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Destino</th>
                      <th className="px-6 py-4 text-center font-semibold text-emerald-600">Distancia</th>
                      <th className="px-6 py-4 text-center font-semibold text-teal-600">Tiempo</th>
                      <th className="px-6 py-4 text-center font-semibold text-cyan-600">Interés</th>
                      <th className="px-6 py-4 text-center font-semibold text-blue-600">Vehículo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Chefchaouen</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">65 km</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">1h15</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★★</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">SUV</td>
                    </tr>
                    <tr className="bg-emerald-50 hover:bg-emerald-100">
                      <td className="px-6 py-4 font-medium text-gray-900">Ceuta (España)</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">40 km</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">45min</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★☆</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Todos</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cabo Negro</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-semibold">15 km</td>
                      <td className="px-6 py-4 text-center text-teal-600 font-semibold">20min</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">★★★★☆</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">Cabrio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white text-center shadow-xl">
                <h3 className="text-2xl font-bold mb-4">¿Visita el Norte?</h3>
                <p className="mb-6 opacity-90">
                  Aproveche nuestra oferta especial Tetuán desde 175 DH/día.
                </p>
                <Link 
                  href="/es/flota" 
                  className="block w-full bg-white text-emerald-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-md"
                >
                  Ver Vehículos
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contáctenos</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 text-emerald-500 mr-3" />
                    <span>+212 600 000 000</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 text-emerald-500 mr-3" />
                    <span>contact@nassohcar.com</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 text-emerald-500 mr-3" />
                    <span>Centro de Tetuán</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
