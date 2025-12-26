import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Key, Settings, Fuel, Navigation, Timer, Luggage, Globe } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Coche de Alquiler en Tetuán 2025 ✓ Flota Premium desde 175 DH',
  description: 'Coche de alquiler en Tetuán ✓ Flota premium reciente ✓ Desde 175 DH/día ✓ Servicio 24h/24 ✓ Entrega gratuita ✓ Seguro incluido ✓ Reserva sencilla.',
  keywords: 'coche de alquiler tetuan, alquiler coche tetuan, car rental tetouan, auto alquiler tetuan',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/coche-de-alquiler-en-tetuan'
  },
  openGraph: {
    title: 'Coche de Alquiler en Tetuán 2025 ✓ Flota Premium desde 175 DH',
    description: 'Coche de alquiler en Tetuán ✓ Flota premium reciente ✓ Desde 175 DH/día ✓ Servicio 24h/24.',
    images: ['/tetouan-car-rental-fleet.webp'],
  },
}

export default function CocheDeAlquilerEnTetuanBlog() {
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
                <Car className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold text-lg">Flota Premium</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
                Coche de Alquiler en Tetuán
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Descubra nuestra flota premium de coches de alquiler en Tetuán. 
                ¡Vehículos recientes, servicio 24h/24, precios transparentes desde 175 DH/día!
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
                  <span>Flota</span>
                </div>
              </div>
              <Link 
                href="/es/flota" 
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Descubrir la Flota
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Fleet Stats */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra flota en Tetuán</h2>
              <p className="text-xl text-gray-600">Vehículos para todas sus necesidades</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Vehículos disponibles</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-indigo-600 mb-2">2024</div>
                <div className="text-gray-600 font-medium">Modelos recientes</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">24h/24</div>
                <div className="text-gray-600 font-medium">Servicio disponible</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-pink-600 mb-2">175 DH</div>
                <div className="text-gray-600 font-medium">Precio desde/día</div>
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
                  <Car className="h-8 w-8 text-blue-600 mr-3" />
                  Coche de alquiler en Tetuán: Nuestra experiencia
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Elegir un <strong>coche de alquiler en Tetuán</strong> con Nassoh Car, 
                  es optar por la excelencia y la tranquilidad. Nuestra flota 
                  premium de más de 50 vehículos recientes le garantiza el vehículo perfecto 
                  para descubrir Tetuán y el magnífico norte marroquí.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-2" />
                    ¿Por qué elegir nuestra flota?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Vehículos recientes</strong>: Flota 2020-2024, mantenimiento riguroso</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Diversidad completa</strong>: Económico, familiar, SUV, premium</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Equipamiento moderno</strong>: Climatización, GPS, Bluetooth</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Seguridad máxima</strong>: Controles técnicos al día</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="h-6 w-6 text-blue-600 mr-2" />
                  Categorías de coches disponibles
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nuestra <strong>flota de coches de alquiler en Tetuán</strong> 
                  cubre todas sus necesidades de movilidad:
                </p>

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-900 mb-3">Económico (175-190 DH/día)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Modelos disponibles</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>Renault Clio</strong>: Urbano perfecto</li>
                              <li>• <strong>Dacia Logan</strong>: Espacioso y económico</li>
                              <li>• <strong>Dacia Sandero</strong>: Moderno y fiable</li>
                              <li>• <strong>Peugeot 208</strong>: Confort y estilo</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Características</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>Pasajeros</strong>: 4-5 personas</li>
                              <li>• <strong>Equipaje</strong>: 2-3 maletas</li>
                              <li>• <strong>Consumo</strong>: 5-6L/100km</li>
                              <li>• <strong>Ideal para</strong>: Parejas, viajes urbanos</li>
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
                        <h4 className="font-bold text-xl text-gray-900 mb-3">Compacto (200-220 DH/día)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Modelos disponibles</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>Renault Mégane</strong>: Confort superior</li>
                              <li>• <strong>Peugeot 308</strong>: Tecnología avanzada</li>
                              <li>• <strong>Citroën C4</strong>: Diseño moderno</li>
                              <li>• <strong>Volkswagen Golf</strong>: Referencia en calidad</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Ventajas</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>Confort</strong>: Asientos ergonómicos</li>
                              <li>• <strong>Equipamiento</strong>: GPS, Bluetooth</li>
                              <li>• <strong>Seguridad</strong>: Múltiples airbags</li>
                              <li>• <strong>Rendimiento</strong>: Motores eficientes</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-900 mb-3">Familiar (240-280 DH/día)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Modelos disponibles</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>Renault Scenic</strong>: Monovolumen compacto</li>
                              <li>• <strong>Dacia Lodgy</strong>: 7 plazas económico</li>
                              <li>• <strong>Citroën C4 Picasso</strong>: Espacio modulable</li>
                              <li>• <strong>Peugeot 5008</strong>: SUV 7 plazas</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Especificidades</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>Capacidad</strong>: 5-7 pasajeros</li>
                              <li>• <strong>Equipaje</strong>: Maletero XXL</li>
                              <li>• <strong>Confort</strong>: Climatización trasera</li>
                              <li>• <strong>Seguridad</strong>: Sistemas avanzados</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-900 mb-3">SUV & 4x4 (300-350 DH/día)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Modelos disponibles</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>Dacia Duster</strong>: 4x4 robusto</li>
                              <li>• <strong>Renault Captur</strong>: SUV urbano</li>
                              <li>• <strong>Peugeot 3008</strong>: SUV premium</li>
                              <li>• <strong>Fiat Panda 4x4</strong>: Montaña</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Destinos ideales</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>Chefchaouen</strong>: Carreteras de montaña</li>
                              <li>• <strong>Rif marroquí</strong>: Pistas rurales</li>
                              <li>• <strong>Playas salvajes</strong>: Acceso difícil</li>
                              <li>• <strong>Aventura</strong>: Todo terreno</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-900 mb-3">Premium (400-500 DH/día)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Modelos disponibles</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>BMW Serie 3</strong>: Berlina premium</li>
                              <li>• <strong>Mercedes Clase C</strong>: Calidad alemana</li>
                              <li>• <strong>Audi A4</strong>: Tecnología avanzada</li>
                              <li>• <strong>Cabriolets</strong>: Placer de conducción</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Servicios incluidos</h5>
                            <ul className="text-gray-600 space-y-1">
                              <li>• <strong>Conserjería</strong>: Servicio personalizado</li>
                              <li>• <strong>Entrega VIP</strong>: Donde usted quiera</li>
                              <li>• <strong>Prioridad</strong>: Reserva garantizada</li>
                              <li>• <strong>Asistencia</strong>: Dedicada 24h/24</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  Servicios incluidos con su coche
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cada <strong>coche de alquiler en Tetuán</strong> incluye 
                  nuestros servicios premium sin coste adicional:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong className="block text-gray-900">Seguro a Todo Riesgo</strong>
                      <span className="text-sm text-gray-600">Cobertura completa para su tranquilidad</span>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong className="block text-gray-900">Asistencia 24h/7</strong>
                      <span className="text-sm text-gray-600">Soporte en carretera en todo Marruecos</span>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong className="block text-gray-900">Kilometraje Ilimitado</strong>
                      <span className="text-sm text-gray-600">Explore sin contar los kilómetros</span>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong className="block text-gray-900">Segundo Conductor</strong>
                      <span className="text-sm text-gray-600">Opción gratuita para compartir el volante</span>
                    </div>
                  </div>
                </div>

              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Reserve su Coche</h3>
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
                    <h4 className="font-semibold text-gray-900 mb-4">¿Por qué Nassoh Car?</h4>
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
            <h2 className="text-3xl font-bold mb-6">¿Listo para explorar Tetuán?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Reserve su coche hoy mismo y disfrute de la mejor experiencia de alquiler en el norte de Marruecos.
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
