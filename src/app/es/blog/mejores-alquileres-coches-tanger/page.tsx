import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Key, Settings, Fuel, Navigation, Timer, Luggage, Globe, Trophy, ThumbsUp, Heart, Medal, Crown } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches Mejor Valorados en Tánger 2025 ⭐ Nota 4.9/5 ✓ Nº1',
  description: 'Alquiler de coches en Tánger mejor valorados ⭐ Nota 4.9/5 ✓ +2500 opiniones de clientes ✓ Servicio premiado ✓ Flota premium ✓ Precios transparentes ✓ Satisfacción garantizada.',
  keywords: 'alquiler coches tanger mejor valorados, mejor agencia alquiler tanger, alquiler coches tanger opiniones, top alquiler coches tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/mejores-alquileres-coches-tanger'
  },
  openGraph: {
    title: 'Alquiler de Coches Mejor Valorados en Tánger 2025 ⭐ Nota 4.9/5 ✓ Nº1',
    description: 'Alquiler de coches en Tánger mejor valorados ⭐ Nota 4.9/5 ✓ +2500 opiniones de clientes ✓ Servicio premiado.',
    images: ['/tanger-best-rated-car-rental.webp'],
  },
}

export default function MejoresAlquileresCochesTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Trophy className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Nº1 en Tánger</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-300 to-red-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches en Tánger<br />Mejor Valorados
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              ⭐ Nota 4.9/5 con +2500 opiniones de clientes. Descubra por qué somos 
              la agencia de alquiler de coches mejor valorada en Tánger.
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
                <span>Opiniones Clientes</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reservar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Rating Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué somos los mejor valorados?</h2>
            <p className="text-xl text-gray-600">Cifras que hablan por sí solas</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Nota media</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">2500+</div>
              <div className="text-gray-600 font-medium">Opiniones clientes</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfacción</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">Nº1</div>
              <div className="text-gray-600 font-medium">Clasificación Tánger</div>
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
                <Crown className="h-8 w-8 text-amber-600 mr-3" />
                Nassoh Car: La excelencia reconocida en Tánger
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Con una <strong>nota de 4.9/5 basada en más de 2500 opiniones de clientes</strong>, 
                Nassoh Car se impone como la referencia en <strong>alquiler de coches mejor valorados en Tánger</strong>. 
                Este reconocimiento no es fruto del azar, sino el resultado de un compromiso 
                constante hacia la excelencia en el servicio.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Medal className="h-6 w-6 text-amber-600 mr-2" />
                  Nuestras distinciones y reconocimientos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Trophy className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Premio Excelencia 2024</strong>: Mejor agencia de alquiler en Tánger</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Certificado de Calidad</strong>: Servicio al cliente excepcional</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Top Rated 2024</strong>: Nota 4.9/5 mantenida todo el año</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Clientes Fieles</strong>: 85% de clientes que repiten</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ThumbsUp className="h-6 w-6 text-amber-600 mr-2" />
                Lo que dicen nuestros clientes
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestras <strong>opiniones de clientes auténticas</strong> dan fe de la calidad 
                de nuestro servicio. He aquí por qué somos los mejor valorados:
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-lg">MH</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-bold text-gray-900 mr-3">Mohammed H.</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic mb-2">
                        "¡Servicio excepcional! Coche impecable, equipo profesional, 
                        precios transparentes. Recomiendo encarecidamente Nassoh Car en Tánger."
                      </p>
                      <div className="text-sm text-gray-500">Verificado • Enero 2025</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-lg">SF</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-bold text-gray-900 mr-3">Sarah F.</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic mb-2">
                        "Primera vez en Marruecos, ¡servicio perfecto! Entrega en el aeropuerto, 
                        coche reciente, asistencia 24h. ¡Gracias por esta experiencia!"
                      </p>
                      <div className="text-sm text-gray-500">Verificado • Enero 2025</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-lg">AB</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="font-bold text-gray-900 mr-3">Ahmed B.</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic mb-2">
                        "Cliente fiel desde hace 3 años. Siempre la misma calidad, 
                        precios competitivos, vehículos cuidados. ¡La referencia en Tánger!"
                      </p>
                      <div className="text-sm text-gray-500">Verificado • Diciembre 2024</div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="h-6 w-6 text-amber-600 mr-2" />
                Los criterios de nuestra excelencia
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestra posición de <strong>alquiler de coches mejor valorados en Tánger</strong> 
                se basa en 8 pilares fundamentales:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Flota Premium</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Vehículos recientes</strong>: 2020-2024</li>
                        <li>• <strong>Mantenimiento riguroso</strong>: Controles frecuentes</li>
                        <li>• <strong>Limpieza impecable</strong>: Limpieza profesional</li>
                        <li>• <strong>Equipamiento moderno</strong>: GPS, aire acondicionado</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Atención al Cliente</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Equipo formado</strong>: Profesionales experimentados</li>
                        <li>• <strong>Multilingüe</strong>: Español, francés, árabe, inglés</li>
                        <li>• <strong>Disponibilidad</strong>: 24h/24 - 7d/7</li>
                        <li>• <strong>Reactividad</strong>: Respuesta en menos de 5 min</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Transparencia de Precios</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Tarifas claras</strong>: Sin cargos ocultos</li>
                        <li>• <strong>Presupuesto detallado</strong>: Todo incluido</li>
                        <li>• <strong>Precios competitivos</strong>: Mejor relación calidad/precio</li>
                        <li>• <strong>Promociones</strong>: Ofertas regulares</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Flexibilidad</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Horarios adaptados</strong>: Según sus necesidades</li>
                        <li>• <strong>Múltiples ubicaciones</strong>: Recogida/devolución</li>
                        <li>• <strong>Modificaciones</strong>: Reserva flexible</li>
                        <li>• <strong>Cancelación</strong>: Condiciones flexibles</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Seguridad</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Seguro completo</strong>: A todo riesgo incluido</li>
                        <li>• <strong>Vehículos seguros</strong>: Inspecciones técnicas</li>
                        <li>• <strong>Asistencia en carretera</strong>: Ayuda 24h</li>
                        <li>• <strong>Sustitución</strong>: Vehículo de cortesía</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">6</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Innovación</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>Reserva online</strong>: Simple y rápida</li>
                        <li>• <strong>App móvil</strong>: Gestión completa</li>
                        <li>• <strong>Pago seguro</strong>: Múltiples opciones</li>
                        <li>• <strong>Seguimiento en tiempo real</strong>: Ubicación del vehículo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">7</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Experiencia</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• <strong>15 años de experiencia</strong>: Conocimiento del mercado</li>
                        <li>• <strong>Red extensa</strong>: Presencia nacional</li>
                        <li>• <strong>Asociaciones</strong>: Hoteles, agencias de viaje</li>
                        <li>• <strong>Reputación</strong>: Referencia reconocida</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white text-center shadow-xl">
                <h3 className="text-2xl font-bold mb-4">¡Reserve el Nº1!</h3>
                <p className="mb-6 opacity-90">
                  Aproveche el mejor servicio de alquiler en Tánger a precios imbatibles.
                </p>
                <Link 
                  href="/es/flota" 
                  className="block w-full bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-md"
                >
                  Ver Vehículos
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contáctenos</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 text-amber-500 mr-3" />
                    <span>+212 600 000 000</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 text-amber-500 mr-3" />
                    <span>contact@nassohcar.com</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 text-amber-500 mr-3" />
                    <span>Aeropuerto de Tánger</span>
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
