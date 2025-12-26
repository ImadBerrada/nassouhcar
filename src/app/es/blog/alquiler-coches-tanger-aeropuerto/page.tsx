import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, Phone, Mail, Calendar, Tag, Plane, Navigation } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Alquiler Coches Tánger Aeropuerto 2025 - Servicio 24h/24 | Nassoh Car',
  description: 'Alquiler de coches en el aeropuerto de Tánger Ibn Battouta. Servicio 24h/24, entrega gratuita, amplia selección de vehículos. ¡Reserve a su llegada!',
  keywords: 'alquiler coches tanger aeropuerto, alquiler coches aeropuerto tanger, car rental tangier airport, alquiler auto aeropuerto tanger, coche alquiler tanger ibn battouta',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tanger-aeropuerto'
  },
  openGraph: {
    title: 'Alquiler Coches Tánger Aeropuerto 2025 - Servicio 24h/24 | Nassoh Car',
    description: 'Alquiler de coches en el aeropuerto de Tánger Ibn Battouta. Servicio 24h/24, entrega gratuita, amplia selección de vehículos.',
    images: ['/tangier-airport-blog.jpg'],
  },
}

export default function AlquilerCochesTangerAeropuertoBlog() {
  return (
    <>
      <StructuredData type="Article" countryTarget="MA" language="es" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Plane className="h-6 w-6 text-amber-400 mr-2" />
                <span className="text-amber-400 font-semibold text-lg">Guía Experta 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
                Alquiler Coches Tánger Aeropuerto
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Servicio premium de alquiler de coches en el aeropuerto Ibn Battouta de Tánger. 
                Recoja su vehículo a su llegada con nuestro servicio 24h/24.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Publicado el 15 de Enero de 2025</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>7 min de lectura</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>Aeropuerto Tánger</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12 border border-cyan-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por Qué Elegir Nuestro Servicio en el Aeropuerto de Tánger?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                El aeropuerto Ibn Battouta de Tánger es su puerta de entrada al norte de Marruecos. Nuestro servicio de alquiler 
                de coches en el aeropuerto de Tánger le permite comenzar su aventura marroquí nada más aterrizar, 
                con un vehículo esperándole y un equipo dedicado para recibirle.
              </p>
            </div>

            {/* Avantages Aéroport */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Ventajas Exclusivas de Nuestro Servicio Aeropuerto
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Plane className="h-8 w-8 text-cyan-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Acogida Personalizada</h3>
                  </div>
                  <p className="text-gray-700">
                    Nuestro equipo le recibe directamente en el aeropuerto Ibn Battouta con un cartel con su nombre. 
                    Servicio disponible 24h/24 para todos los vuelos, incluso llegadas tardías.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Clock className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Ahorro de Tiempo</h3>
                  </div>
                  <p className="text-gray-700">
                    Evite colas y trámites largos. Su vehículo está preparado y puede 
                    ponerse en marcha en menos de 15 minutos tras su llegada.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Navigation className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">GPS Preconfigurado</h3>
                  </div>
                  <p className="text-gray-700">
                    Todos nuestros vehículos en el aeropuerto están equipados con GPS con los principales destinos 
                    de Tánger ya programados para facilitar su primera conducción.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Seguro Premium</h3>
                  </div>
                  <p className="text-gray-700">
                    Seguro a todo riesgo incluido, asistencia en carretera 24h/24 y vehículo de sustitución 
                    en caso de problema técnico durante su estancia.
                  </p>
                </div>
              </div>
            </section>

            {/* Processus Aéroport */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Cómo Recoger Su Coche en el Aeropuerto de Tánger
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Proceso Simple en 4 Pasos</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Reserva Confirmada</h4>
                      <p className="text-gray-700">
                        Reserve su vehículo en nuestro <Link href="/es" className="text-cyan-600 hover:underline font-medium">sitio web</Link> indicando 
                        su número de vuelo y hora de llegada al aeropuerto Ibn Battouta.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Llegada al Aeropuerto</h4>
                      <p className="text-gray-700">
                        A su salida del aeropuerto, busque a nuestro representante con un cartel de "Nassoh Car" 
                        y su nombre en la zona de llegadas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Trámites Exprés</h4>
                      <p className="text-gray-700">
                        Presentación rápida de sus documentos (permiso, pasaporte, tarjeta de crédito), 
                        firma del contrato y entrega de llaves en menos de 10 minutos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Entrega del Vehículo</h4>
                      <p className="text-gray-700">
                        Inspección rápida del vehículo, explicación del GPS y equipamiento, 
                        y salida directa desde el parking del aeropuerto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Informations Pratiques */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Información Práctica - Aeropuerto Ibn Battouta
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                    Ubicación y Acceso
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>📍 Aeropuerto Ibn Battouta, Tánger</li>
                    <li>15 km del centro de Tánger</li>
                    <li>🛣️ Acceso directo autopista A1</li>
                    <li>🅿️ Parking gratuito durante los trámites</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-6 w-6 text-green-600 mr-2" />
                    Horarios y Disponibilidad
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>🕒 Servicio 24h/24, 7d/7</li>
                    <li>✈️ Acogida para todos los vuelos</li>
                    <li>⏰ Plazo mínimo: 2h antes de llegada</li>
                    <li>📞 Seguimiento en tiempo real de vuelos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Véhicules Disponibles */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Vehículos Disponibles en el Aeropuerto de Tánger
              </h2>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                <p className="text-lg text-gray-700 mb-6">
                  Nuestra <Link href="/es/flota" className="text-blue-600 hover:underline font-medium">flota completa</Link> está 
                  disponible directamente en el aeropuerto Ibn Battouta:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Económicos</h4>
                    <p className="text-sm text-gray-600 mb-2">Perfectos para ciudad</p>
                    <p className="text-blue-600 font-bold">Desde 25€/día</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">🚙 SUV & Familiares</h4>
                    <p className="text-sm text-gray-600 mb-2">Confort y espacio</p>
                    <p className="text-blue-600 font-bold">Desde 45€/día</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">🏎️ Premium</h4>
                    <p className="text-sm text-gray-600 mb-2">Experiencia gama alta</p>
                    <p className="text-blue-600 font-bold">Desde 80€/día</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conseils Aéroport */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Consejos para Su Llegada al Aeropuerto de Tánger
              </h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">💡 Consejos de Nuestros Expertos</h3>
                
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Documentos:</strong> Tenga su permiso de conducir, pasaporte y tarjeta de crédito a mano.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Comunicación:</strong> Guarde nuestro número +212 631 63 00 13 en su teléfono antes del vuelo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Retraso de vuelo:</strong> Seguimos su vuelo en tiempo real, no se preocupe en caso de retraso.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Primera conducción:</strong> Tómese unos minutos para familiarizarse con el vehículo antes de salir del aeropuerto.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Dirección Tánger:</strong> Siga las señales "Tanger Centre" para llegar al centro en 20 minutos.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Destinations depuis l'Aéroport */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Principales Destinos desde el Aeropuerto de Tánger
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🏙️ Hacia el Centro</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Centro Tánger: 20 minutos</li>
                    <li>• Medina de Tánger: 25 minutos</li>
                    <li>• Puerto Tánger Ville: 30 minutos</li>
                    <li>• Playas de Tánger: 25 minutos</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🗺️ Excursiones Regionales</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Asilah: 45 minutos</li>
                    <li>• Tetuán: 1h15</li>
                    <li>• Chefchaouen: 2h00</li>
                    <li>• Puerto Tánger Med: 45 minutos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Reserve Su Coche en el Aeropuerto</h2>
                <p className="text-xl mb-8 opacity-90">
                  Servicio premium 24h/24 en el aeropuerto Ibn Battouta de Tánger. 
                  ¡Su vehículo le espera a su llegada!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/es" 
                    className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    <Plane className="h-5 w-5 mr-2" />
                    Reservar en Aeropuerto
                  </Link>
                  <Link 
                    href="/es/flota" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center"
                  >
                    <Car className="h-5 w-5 mr-2" />
                    Ver Vehículos
                  </Link>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Servicio Cliente Aeropuerto 24h/24
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="h-6 w-6 text-cyan-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Urgencia Aeropuerto</p>
                      <p className="text-gray-700">+212 631 63 00 13</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="h-6 w-6 text-cyan-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Soporte</p>
                      <p className="text-gray-700">contact@nassohcar.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
    </>
  )
}