import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Settings, Zap, Car, Gauge, Wrench, Battery, Route, Navigation } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Alquiler Auto Tánger 2025 ✓ Vehículos Automáticos desde 200 DH/día',
  description: 'Alquiler auto Tánger ✓ Vehículos automáticos recientes ✓ Desde 200 DH/día ✓ Cambio automático ✓ Conducción fácil ✓ Flota moderna ✓ Servicio premium.',
  keywords: 'alquiler auto tanger, alquiler coche automatico tanger, auto tanger, coche automatico tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-auto-tanger'
  },
  openGraph: {
    title: 'Alquiler Auto Tánger 2025 ✓ Vehículos Automáticos desde 200 DH/día',
    description: 'Alquiler auto Tánger ✓ Vehículos automáticos recientes ✓ Desde 200 DH/día ✓ Cambio automático.',
    images: ['/tanger-automatic-cars-rental.webp'],
  },
}

export default function AlquilerAutoTangerBlog() {
  return (
    <>
      <StructuredData type="Article" countryTarget="MA" language="es" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Settings className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Cambio Automático</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Alquiler Auto Tánger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Descubra nuestra flota de vehículos automáticos en Tánger. 
              ¡Conducción fácil, confort óptimo, precios atractivos desde 200 DH/día!
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
                <span>Automático</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver los Autos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Auto Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros vehículos automáticos</h2>
            <p className="text-xl text-gray-600">Conducción simplificada en Tánger</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">80+</div>
              <div className="text-gray-600 font-medium">Autos disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">200 DH</div>
              <div className="text-gray-600 font-medium">Precio desde/día</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Cambio automático</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Servicio disponible</div>
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
                <Settings className="h-8 w-8 text-blue-600 mr-3" />
                Alquiler auto Tánger: La conducción simplificada
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                El <strong>alquiler de auto en Tánger</strong> con Nassoh Car le ofrece 
                el confort de la conducción automática en la perla del estrecho. 
                Nuestra flota de más de 80 vehículos automáticos recientes le garantiza 
                una experiencia de conducción fluida y sin estrés en Tánger.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  ¿Por qué elegir un auto automático en Tánger?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Conducción fácil</strong>: Ideal para el tráfico de Tánger</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Menos fatiga</strong>: Perfecto para trayectos largos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Seguridad reforzada</strong>: Mayor concentración en la carretera</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Confort óptimo</strong>: Conducción relajada</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Nuestra flota de autos en Tánger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Descubra nuestra selección de <strong>vehículos automáticos en Tánger</strong>, 
                adaptados a todas sus necesidades:
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Urbanos Automáticos (200-220 DH/día)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modelos disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Renault Clio Automático</strong>: CVT moderno</li>
                            <li>• <strong>Peugeot 208 Auto</strong>: Caja EAT6</li>
                            <li>• <strong>Citroën C3 Auto</strong>: Confort urbano</li>
                            <li>• <strong>Nissan Micra CVT</strong>: Tecnología japonesa</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Ventajas</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Aparcamiento fácil</strong>: Tamaño compacto</li>
                            <li>• <strong>Económico</strong>: Consumo reducido</li>
                            <li>• <strong>Manejable</strong>: Perfecto para el centro</li>
                            <li>• <strong>Moderno</strong>: Equipamiento reciente</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Berlinas Automáticas (250-300 DH/día)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Modelos disponibles</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Renault Mégane Auto</strong>: EDC 7 velocidades</li>
                            <li>• <strong>Peugeot 308 EAT8</strong>: Caja 8 velocidades</li>
                            <li>• <strong>Volkswagen Golf DSG</strong>: Doble embrague</li>
                            <li>• <strong>Toyota Corolla CVT</strong>: Híbrido disponible</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Características</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Confort</strong>: Asientos ergonómicos</li>
                            <li>• <strong>Espacio</strong>: 5 pasajeros cómodos</li>
                            <li>• <strong>Maletero</strong>: Capacidad generosa</li>
                            <li>• <strong>Equipamiento</strong>: GPS, climatización auto</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gauge className="h-6 w-6 text-blue-600 mr-2" />
                  Tipos de transmisión disponibles
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg text-blue-900 mb-2">EDC / DSG (Doble Embrague)</h4>
                    <p className="text-gray-600 text-sm">
                      La mejor tecnología para una conducción dinámica. 
                      Cambios de marcha instantáneos y sin interrupción de par.
                      Disponible en Renault y VW.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-900 mb-2">EAT8 / BVA (Convertidor)</h4>
                    <p className="text-gray-600 text-sm">
                      La referencia en suavidad. Ideal para ciudad y carretera.
                      Fiabilidad a toda prueba.
                      Disponible en Peugeot y Citroën.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Route className="h-6 w-6 text-blue-600 mr-2" />
                Consejos para conducir un automático en Tánger
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <Navigation className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Anticipe las pendientes</strong>
                    <span className="text-gray-600">Tánger tiene muchas cuestas. El arranque en pendiente automático es una gran ventaja.</span>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <Navigation className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Modo Eco vs Sport</strong>
                    <span className="text-gray-600">Utilice el modo Eco en ciudad para ahorrar combustible y Sport en carretera para adelantar.</span>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <Navigation className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Uso del freno</strong>
                    <span className="text-gray-600">En las bajadas, utilice el freno motor si su caja lo permite (modo manual) para preservar los frenos.</span>
                  </div>
                </li>
              </ul>

            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Reserve su Auto</h3>
              <div className="space-y-4">
                <Link 
                  href="/es/flota" 
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Ver Disponibilidad
                </Link>
                <Link 
                  href="https://wa.me/212661234567" 
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp
                </Link>
                
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">¿Por qué nosotros?</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Sin fianza (opcional)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Kilometraje ilimitado
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Asistencia 24/7
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Entrega gratuita
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para conducir en Tánger?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Reserve su vehículo automático hoy mismo y disfrute de la mejor experiencia de alquiler.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/es/flota" 
              className="inline-flex items-center justify-center bg-white text-blue-900 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300"
            >
              Reservar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/es/contacto" 
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Contactarnos
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
