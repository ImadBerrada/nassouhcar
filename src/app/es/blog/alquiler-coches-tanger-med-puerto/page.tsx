import type { Metadata } from 'next'
import { MapPin, Clock, Car, Phone, Mail, Calendar, Tag, Anchor, Navigation, Ship, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tanger Med 2025 - Servicio Ferry | Nassoh Car',
  description: 'Alquiler de coches en el puerto Tanger Med. Servicio coordinado con los ferries, entrega directa en la terminal. ¡Perfecto para viajeros que llegan de Europa!',
  keywords: 'alquiler coches tanger med, alquiler coches puerto tanger med, rent a car tangier med port, alquiler auto port med, coche alquiler ferry tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tanger-med-puerto'
  },
  openGraph: {
    title: 'Alquiler de Coches en Tanger Med 2025 - Servicio Ferry | Nassoh Car',
    description: 'Alquiler de coches en el puerto Tanger Med. Servicio coordinado con los ferries, entrega directa en la terminal.',
    images: ['/tangier-port-med-blog.jpg'],
  },
}

export default function AlquilerCochesTangerMedPuertoBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Ship className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Guía Experta 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches Tanger Med
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Servicio especializado de alquiler de coches en el puerto Tanger Med. 
              Recoja su vehículo nada más llegar en ferry desde Europa.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Publicado el 15 de Enero de 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>9 min de lectura</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Puerto Tanger Med</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 mb-12 border border-teal-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Su Puerta de Entrada Automovilística a Marruecos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              El puerto Tanger Med es el puerto más grande del Mediterráneo y su punto de entrada privilegiado a Marruecos 
              desde Europa. Nuestro servicio de alquiler de coches en el puerto Tanger Med le permite continuar su 
              viaje con total libertad desde su desembarco del ferry, con un servicio coordinado según los horarios marítimos.
            </p>
          </div>

          {/* Avantages Port Med */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              ¿Por Qué Elegir Nuestro Servicio en Tanger Med?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Ship className="h-8 w-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Coordinación con Ferry</h3>
                </div>
                <p className="text-gray-700">
                  Sincronizamos nuestros servicios con los horarios de los ferries desde Algeciras, Tarifa y Gibraltar. 
                  Su vehículo le espera a su desembarco.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Anchor className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Entrega en Terminal</h3>
                </div>
                <p className="text-gray-700">
                  Servicio de entrega directamente en la terminal de pasajeros del puerto Med. 
                  Evite transportes adicionales y tome la carretera inmediatamente.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Navigation className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Rutas Optimizadas</h3>
                </div>
                <p className="text-gray-700">
                  GPS preconfigurado con las mejores rutas hacia Tánger, Tetuán, Chefchaouen, 
                  y todos los destinos del norte de Marruecos.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Equipo Multilingüe</h3>
                </div>
                <p className="text-gray-700">
                  Nuestro equipo habla español, francés, inglés y árabe para recibir 
                  a todos los viajeros europeos en su idioma.
                </p>
              </div>
            </div>
          </section>

          {/* Processus Port Med */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Proceso de Recogida en el Puerto Tanger Med
            </h2>
            
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Servicio Coordinado con los Ferries</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Reserva con Horario de Ferry</h4>
                    <p className="text-gray-700">
                      Reserve en nuestro <Link href="/es" className="text-teal-600 hover:underline font-medium">sitio web</Link> 
                      especificando su compañía de ferry, número de travesía y hora de llegada prevista al puerto Med.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Seguimiento en Tiempo Real</h4>
                    <p className="text-gray-700">
                      Seguimos su ferry en tiempo real y ajustamos nuestra presencia según los posibles retrasos 
                      o adelantos de la travesía marítima.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recepción en Terminal</h4>
                    <p className="text-gray-700">
                      Nuestro representante le espera a la salida de la terminal de pasajeros con su vehículo 
                      preparado y todos los documentos listos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Salida Inmediata</h4>
                    <p className="text-gray-700">
                      Trámites exprés, sesión informativa sobre la conducción en Marruecos y salida directa 
                      hacia su destino desde el puerto Med.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Informations Ferry */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Conexiones de Ferry Compatibles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Ship className="h-6 w-6 text-blue-600 mr-2" />
                  Desde Algeciras
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🚢 FRS, Baleària, AML</li>
                  <li>⏱️ Travesía: 1h30</li>
                  <li>🕒 Salidas frecuentes</li>
                  <li>Servicio coordinado</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Ship className="h-6 w-6 text-green-600 mr-2" />
                  Desde Tarifa
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🚢 FRS</li>
                  <li>⏱️ Travesía: 1h00</li>
                  <li>🕒 Varias salidas/día</li>
                  <li>Recepción personalizada</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Ship className="h-6 w-6 text-purple-600 mr-2" />
                  Desde Gibraltar
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🚢 FRS</li>
                  <li>⏱️ Travesía: 1h20</li>
                  <li>🕒 Servicio estacional</li>
                  <li>Reserva recomendada</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Destinations depuis Port Med */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Destinos Populares desde Tanger Med
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <p className="text-lg text-gray-700 mb-6">
                Con su vehículo de alquiler, explore fácilmente el norte de Marruecos desde Tanger Med:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏙️ Ciudades Principales</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Tánger Centro:</strong> 45 minutos</li>
                    <li>• <strong>Tetuán:</strong> 30 minutos</li>
                    <li>• <strong>Chefchaouen:</strong> 1h30</li>
                    <li>• <strong>Asilah:</strong> 1h15</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏖️ Sitios Turísticos</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Cuevas de Hércules:</strong> 1h00</li>
                    <li>• <strong>Cabo Espartel:</strong> 1h10</li>
                    <li>• <strong>Playas de Martil:</strong> 20 minutos</li>
                    <li>• <strong>Medina de Tetuán:</strong> 35 minutos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conseils Pratiques */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Consejos para su Llegada a Tanger Med
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">💡 Consejos de Nuestros Expertos</h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Antes del embarque:</strong> Confirme su reserva 24h antes de la salida del ferry desde Europa.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Documentos ferry:</strong> Tenga a mano su billete de ferry, lo necesitamos para la coordinación.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Retrasos marítimos:</strong> En caso de retraso del ferry, ajustamos automáticamente nuestra presencia.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Primera conducción:</strong> El puerto Med dispone de una zona de prueba para familiarizarse con la conducción.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Autopista:</strong> La autopista A1 desde el puerto Med le lleva directamente a todos los destinos.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Véhicules Recommandés */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Vehículos Recomendados para el Norte de Marruecos
            </h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <p className="text-lg text-gray-700 mb-6">
                Descubra nuestra <Link href="/es/flota" className="text-teal-600 hover:underline font-medium">selección de vehículos</Link> 
                perfectamente adaptados a las carreteras del norte marroquí:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Urbanos</h4>
                  <p className="text-sm text-gray-600 mb-2">Ideales para Tánger y Tetuán</p>
                  <p className="text-teal-600 font-bold">Desde 30€/día</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">🚙 SUV Compactos</h4>
                  <p className="text-sm text-gray-600 mb-2">Perfectos para Chefchaouen</p>
                  <p className="text-teal-600 font-bold">Desde 50€/día</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">🚐 Familiares</h4>
                  <p className="text-sm text-gray-600 mb-2">Grupos y familias</p>
                  <p className="text-teal-600 font-bold">Desde 65€/día</p>
                </div>
              </div>
            </div>
          </section>

          {/* Informations Pratiques Port */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Información Práctica - Puerto Tanger Med
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-teal-600 mr-2" />
                  Ubicación y Servicios
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>📍 Puerto Tanger Med, Ksar Sghir</li>
                  <li>40 km de Tánger centro</li>
                  <li>🛣️ Acceso directo autopista A1</li>
                  <li>🅿️ Parking vigilado disponible</li>
                  <li>🏪 Servicios y restauración in situ</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-2" />
                  Horarios y Disponibilidad
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🕒 Servicio según horarios ferries</li>
                  <li>📞 Coordinación en tiempo real</li>
                  <li>⏰ Presencia garantizada a la llegada</li>
                  <li>🌙 Servicio nocturno disponible</li>
                  <li>📱 Seguimiento por WhatsApp</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Reserve para el Puerto Tanger Med</h2>
              <p className="text-xl mb-8 opacity-90">
                Servicio especializado ferry. ¡Su vehículo le espera a su desembarco 
                en el puerto Med para explorar Marruecos con libertad!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/es" 
                  className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <Ship className="h-5 w-5 mr-2" />
                  Reservar Tanger Med
                </Link>
                <Link 
                  href="/es/flota" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  <Car className="h-5 w-5 mr-2" />
                  Ver Flota
                </Link>
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
  )
}
