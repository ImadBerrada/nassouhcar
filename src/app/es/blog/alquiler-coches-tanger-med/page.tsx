import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Anchor, Navigation, Zap, Award, Ship, Luggage, Timer, Compass, Waves, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tanger Med 2025 - Puerto y Ferry | Entrega Gratuita | Nassoh Car',
  description: 'Alquiler de coches en Tanger Med ✓ Puerto y ferry ✓ Entrega gratuita ✓ Servicio coordinado ✓ Flota moderna ✓ Reserva en línea ✓ Asistencia 24h/24.',
  keywords: 'alquiler coches tanger med, alquiler coches med, car rental tangier med, alquiler auto tanger med, coche alquiler med',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tanger-med'
  },
  openGraph: {
    title: 'Alquiler de Coches en Tanger Med 2025 - Puerto y Ferry | Entrega Gratuita',
    description: 'Alquiler de coches en Tanger Med ✓ Puerto y ferry ✓ Entrega gratuita ✓ Servicio coordinado.',
    images: ['/tangier-med-blog.jpg'],
  },
}

export default function AlquilerCochesTangerMedBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Anchor className="h-6 w-6 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-semibold text-lg">Puerto Tanger Med</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches en Tanger Med
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Alquiler de coches en Tanger Med - Puerto y ferry. Entrega gratuita en el puerto,
              servicio especializado ferry, flota adaptada. ¡Su movilidad desde la llegada!
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
                <span>Puerto y Ferry</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reservar para Tanger Med
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Port Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicio especializado Tanger Med</h2>
            <p className="text-xl text-gray-600">Su socio de movilidad en el puerto más grande de África</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Servicio ferry</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">15min</div>
              <div className="text-gray-600 font-medium">Entrega en puerto</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Vehículos disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">3000+</div>
              <div className="text-gray-600 font-medium">Clientes ferry/año</div>
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
                <Ship className="h-8 w-8 text-cyan-600 mr-3" />
                Alquiler de coches en Tanger Med: Su movilidad en el puerto
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Tanger Med</strong> es el puerto más grande de África y la principal puerta de entrada 
                marítima a Marruecos. Nuestro servicio de <strong>alquiler de coches en Tanger Med</strong> 
                le permite recoger su vehículo directamente en el puerto, 
                ya sea que llegue en ferry desde España o que transite por esta zona estratégica.
              </p>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-cyan-600 mr-2" />
                  ¿Por qué elegir nuestro servicio Tanger Med?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Especialización ferry</strong>: Servicio adaptado a los horarios de los ferries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Entrega en el puerto</strong>: Recogida directa en Tanger Med</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Disponibilidad 24h/24</strong>: Servicio continuo para todos los ferries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flota adaptada</strong>: Vehículos para todas las necesidades y presupuestos</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Waves className="h-6 w-6 text-cyan-600 mr-2" />
                Servicio ferry - Horarios y coordinación
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro <strong>alquiler de coches en Tanger Med</strong> se adapta perfectamente 
                a los horarios de los ferries procedentes de España:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Ship className="h-5 w-5 text-cyan-600 mr-2" />
                    Ferries de España
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Algeciras - Tanger Med</strong>: 1h30 de travesía</li>
                    <li>• <strong>Tarifa - Tanger Med</strong>: 1h de travesía</li>
                    <li>• <strong>Barcelona - Tanger Med</strong>: 30h de travesía</li>
                    <li>• <strong>Motril - Tanger Med</strong>: 7h de travesía</li>
                  </ul>
                  <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Coordinación perfecta
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Timer className="h-5 w-5 text-blue-600 mr-2" />
                    Nuestro servicio
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Seguimiento de ferries</strong>: Horarios en tiempo real</li>
                    <li>• <strong>Espera garantizada</strong>: Incluso en caso de retraso</li>
                    <li>• <strong>Entrega rápida</strong>: 15 min después del desembarque</li>
                    <li>• <strong>Servicio nocturno</strong>: Disponible 24h/24</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Fiabilidad total
                  </div>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-green-600 mr-2" />
                    Puntos de entrega
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Terminal de pasajeros</strong>: Salida principal</li>
                    <li>• <strong>Parking de visitantes</strong>: Zona dedicada</li>
                    <li>• <strong>Hoteles cercanos</strong>: Entrega posible</li>
                    <li>• <strong>Zona comercial</strong>: Tanger Med Zones</li>
                  </ul>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Flexibilidad máxima
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Globe className="h-5 w-5 text-amber-600 mr-2" />
                    Destinos populares
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Tánger centro</strong>: 45 min de ruta</li>
                    <li>• <strong>Tetuán</strong>: 30 min de ruta</li>
                    <li>• <strong>Chefchaouen</strong>: 1h30 de ruta</li>
                    <li>• <strong>Rabat</strong>: 2h30 de ruta</li>
                  </ul>
                  <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Acceso facilitado
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  Proceso de recogida en Tanger Med
                </h3>
                <p className="text-gray-700 mb-4">
                  Nuestro proceso de <strong>alquiler de coches en Tanger Med</strong> está optimizado 
                  para los viajeros de ferry:
                </p>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Reserva con horario de ferry</h5>
                      <p className="text-gray-600 text-sm">Indique su ferry y hora de llegada al realizar la reserva</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Seguimiento en tiempo real</h5>
                      <p className="text-gray-600 text-sm">Seguimos su ferry y nos adaptamos en caso de retraso</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Bienvenida al desembarque</h5>
                      <p className="text-gray-600 text-sm">Nuestro equipo le espera con un cartel a su nombre</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Trámites exprés</h5>
                      <p className="text-gray-600 text-sm">Verificación rápida de documentos y firma del contrato</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Salida inmediata</h5>
                      <p className="text-gray-600 text-sm">Su vehículo le espera, GPS programado para su destino</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-cyan-600 mr-2" />
                Flota adaptada al puerto Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro <strong>alquiler de coches en Tanger Med</strong> ofrece una flota 
                especialmente adaptada a las necesidades de los viajeros:
              </p>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Vehículos espaciosos</strong>: Para equipaje de ferry</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>GPS Marruecos incluido</strong>: Navegación completa</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Aire acondicionado</strong>: Confort garantizado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Tanque lleno</strong>: Listo para salir</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Seguro a todo riesgo</strong>: Incluido</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Vehículos recientes</strong>: Menos de 3 años</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Mantenimiento regular</strong>: Fiabilidad máxima</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Limpieza completa</strong>: Higiene perfecta</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Asistencia 24h/24</strong>: En todo Marruecos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
                      <span><strong>Kilometraje ilimitado</strong>: Libertad total</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Compass className="h-6 w-6 text-cyan-600 mr-2" />
                Consejos para su llegada a Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Optimice su experiencia de <strong>alquiler de coches en Tanger Med</strong> 
                con nuestros consejos prácticos:
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Consejos prácticos Tanger Med</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Antes del embarque</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Reserve con antelación</strong>: Garantía de disponibilidad</li>
                      <li>• <strong>Comunique su ferry</strong>: Seguimiento personalizado</li>
                      <li>• <strong>Prepare sus documentos</strong>: Permiso + pasaporte</li>
                      <li>• <strong>Descargue WhatsApp</strong>: Comunicación directa</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">A la llegada</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Busque nuestro cartel</strong>: "Nassoh Car + su nombre"</li>
                      <li>• <strong>Verifique su teléfono</strong>: Mensajes de bienvenida</li>
                      <li>• <strong>Punto de encuentro</strong>: Generalmente salida Terminal 1 o 2</li>
                      <li>• <strong>Cambio de divisas</strong>: Disponible en el puerto</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-cyan-600 mr-2" />
                Tarifas especiales Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Disfrute de nuestras tarifas preferenciales para el <strong>alquiler de coches en Tanger Med</strong>:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-xl">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Categoría</th>
                      <th className="px-6 py-4 text-center font-semibold text-cyan-600">Precio/día</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-600">Ideal para</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Económico</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">200 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Parejas, estancias cortas</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Berlina</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">300 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Familias, confort</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">SUV</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">450 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Grupos, equipaje</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Monovolumen</td>
                      <td className="px-6 py-4 text-center text-cyan-600 font-semibold">500 DH</td>
                      <td className="px-6 py-4 text-center text-gray-600">Grandes familias</td>
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
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Servicio Ferry 24h/24</h3>
                <p className="mb-6 text-cyan-100">
                  Entrega gratuita en el puerto Tanger Med. Coordinación perfecta con todos los ferries.
                </p>
                <Link 
                  href="/es/flota" 
                  className="block w-full bg-white text-cyan-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Reservar para Tanger Med
                </Link>
              </div>

              {/* Ferry Schedule */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ferries principales</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Algeciras</span>
                    <span className="text-sm text-cyan-600 font-semibold">1h30</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Tarifa</span>
                    <span className="text-sm text-cyan-600 font-semibold">1h00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Motril</span>
                    <span className="text-sm text-cyan-600 font-semibold">7h00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Barcelona</span>
                    <span className="text-sm text-cyan-600 font-semibold">30h00</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-cyan-50 rounded-lg">
                  <p className="text-sm text-cyan-800 font-semibold">
                    ✓ Servicio disponible para todos los ferries
                  </p>
                </div>
              </div>

              {/* Port Services */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios puerto</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Ship className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">Seguimiento ferry tiempo real</span>
                  </div>
                  <div className="flex items-center">
                    <Timer className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Entrega 15 min</span>
                  </div>
                  <div className="flex items-center">
                    <Anchor className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Bienvenida personalizada</span>
                  </div>
                  <div className="flex items-center">
                    <Compass className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">GPS programado</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contacto Tanger Med</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700">tangermed@nassouhcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cyan-600 mr-3 mt-1" />
                    <span className="text-gray-700">Puerto Tanger Med, Terminal de Pasajeros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Preguntas frecuentes - Tanger Med
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿Qué pasa si mi ferry tiene retraso?
              </h3>
              <p className="text-gray-600">
                Seguimos su ferry en tiempo real y nos adaptamos automáticamente. 
                Nuestro equipo le esperará sea cual sea el retraso.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿Dónde se recoge exactamente el coche?
              </h3>
              <p className="text-gray-600">
                Nuestro equipo le espera a la salida del terminal de pasajeros con un cartel 
                a su nombre. ¡Imposible no vernos!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿El servicio está disponible por la noche?
              </h3>
              <p className="text-gray-600">
                Sí, nuestro servicio Tanger Med funciona 24h/24, 7d/7. 
                Cubrimos todos los ferries, incluso los nocturnos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿Se puede devolver el coche en otro lugar que no sea Tanger Med?
              </h3>
              <p className="text-gray-600">
                Sí, devolución posible en todas nuestras agencias: Tánger centro, 
                aeropuerto, Tetuán. Flexibilidad total para su viaje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
