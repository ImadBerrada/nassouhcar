import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Key, Settings, Fuel, Navigation, Timer, Luggage, Globe, Wrench, Battery, Gauge, FileText, Briefcase, Home, Plane, TrendingUp, BarChart3, Crown, Trophy, Handshake, ThumbsUp, UserCheck, Headphones, Clock3, MapPin as Location, Flag, Sun, Palmtree, Sunset, Sunrise, CloudSun, Search, Filter, BookOpen, Heart, Bookmark } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coche para Alquilar en Marruecos 2025 ✓ Guía Completa ✓ Mejores Precios',
  description: 'Coche para alquilar en Marruecos ✓ Guía completa 2025 ✓ 15+ ciudades ✓ 500+ vehículos ✓ Consejos de expertos ✓ Comparativa de precios ✓ Reserva fácil.',
  keywords: 'coche para alquilar marruecos, alquilar coche marruecos, auto para alquilar marruecos, alquiler auto marruecos',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/coche-para-alquilar-marruecos'
  },
  openGraph: {
    title: 'Coche para Alquilar en Marruecos 2025 ✓ Guía Completa ✓ Mejores Precios',
    description: 'Coche para alquilar en Marruecos ✓ Guía completa 2025 ✓ 15+ ciudades ✓ 500+ vehículos.',
    images: ['/car-rental-guide-morocco.webp'],
  },
}

export default function CocheParaAlquilarMarruecosBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-green-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-red-400 mr-2" />
              <span className="text-red-400 font-semibold text-lg">Guía Completa</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-green-300 to-red-400 bg-clip-text text-transparent leading-tight">
              Coche para Alquilar en Marruecos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Guía completa 2025. ¡Cómo encontrar, comparar y reservar 
              el coche perfecto para su estancia en Marruecos!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Actualizado el 15 Enero 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>10 min de lectura</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Guía Experta</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Encontrar mi Coche
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Guide Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Su guía experta para alquilar en Marruecos</h2>
            <p className="text-xl text-gray-600">Todo lo que necesita saber en 2025</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-red-50 to-green-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Ciudades analizadas</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Agencias comparadas</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Consejos expertos</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2025</div>
              <div className="text-gray-600 font-medium">Guía actualizada</div>
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
                <Search className="h-8 w-8 text-red-600 mr-3" />
                ¿Cómo encontrar un coche para alquilar en Marruecos?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Encontrar un <strong>coche para alquilar en Marruecos</strong> puede parecer 
                complejo con la multitud de opciones disponibles. Esta guía completa 
                le acompaña paso a paso para tomar la mejor decisión según 
                sus necesidades, su presupuesto y su destino.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="h-6 w-6 text-red-600 mr-2" />
                  Los pasos esenciales
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Definir sus necesidades</strong>: Duración, número de pasajeros, destinos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Comparar agencias</strong>: Precios, servicios, opiniones de clientes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Elegir el vehículo</strong>: Adaptado a las carreteras marroquíes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Reservar con antelación</strong>: Mejores precios y disponibilidad</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Filter className="h-6 w-6 text-red-600 mr-2" />
                ¿Dónde buscar un coche para alquilar en Marruecos?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Varias opciones se le presentan para encontrar un <strong>coche 
                para alquilar en Marruecos</strong>. Cada canal tiene sus ventajas según 
                su perfil y sus prioridades:
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-l-4 border-red-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Agencias Locales Especializadas</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Ventajas</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Conocimiento local</strong>: Carreteras, destinos</li>
                            <li>• <strong>Precios competitivos</strong>: Sin intermediarios</li>
                            <li>• <strong>Servicio personalizado</strong>: Consejos expertos</li>
                            <li>• <strong>Flexibilidad</strong>: Negociación posible</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Recomendaciones</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Nassoh Car</strong>: Líder en 15+ ciudades</li>
                            <li>• <strong>Verificar opiniones</strong>: Google, TripAdvisor</li>
                            <li>• <strong>Comparar tarifas</strong>: Varios presupuestos</li>
                            <li>• <strong>Visitar la agencia</strong>: Ver la flota</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Plataformas de Comparación</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Ventajas</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Comparación fácil</strong>: Todos los precios</li>
                            <li>• <strong>Reserva en línea</strong>: 24h/24</li>
                            <li>• <strong>Opiniones clientes</strong>: Experiencias reales</li>
                            <li>• <strong>Promociones</strong>: Ofertas especiales</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Precauciones</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Leer las condiciones</strong>: Cargos ocultos</li>
                            <li>• <strong>Verificar la agencia</strong>: Reputación local</li>
                            <li>• <strong>Seguros incluidos</strong>: Cobertura real</li>
                            <li>• <strong>Soporte al cliente</strong>: Disponibilidad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                  Consejos para una mejor experiencia
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Fuel className="h-5 w-5 text-gray-500 mr-2" />
                      Combustible
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Verifique la política de combustible (lleno/lleno o mismo nivel). 
                      Las estaciones son frecuentes en las ciudades pero más raras en las zonas rurales.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                      Navegación
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Utilice GPS o Google Maps. Descargue los mapas sin conexión 
                      si planea ir a zonas remotas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Shield className="h-5 w-5 text-gray-500 mr-2" />
                      Seguridad
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Respete los límites de velocidad. Los controles de radar son frecuentes. 
                      Evite conducir de noche en carreteras secundarias.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Phone className="h-5 w-5 text-gray-500 mr-2" />
                      Asistencia
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Asegúrese de tener el número de asistencia de la agencia 
                      y los números de emergencia locales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">¿Listo para salir a la carretera?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Reserve ahora su coche ideal con Nassoh Car y disfrute de los mejores precios
                </p>
                <Link 
                  href="/es/flota" 
                  className="inline-flex items-center bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Ver los Vehículos Disponibles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">¿Por qué elegir Nassoh Car?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Mejores Precios</span>
                    <span className="text-sm text-gray-600">Tarifas competitivas garantizadas</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Sin Cargos Ocultos</span>
                    <span className="text-sm text-gray-600">Transparencia total</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Soporte 24/7</span>
                    <span className="text-sm text-gray-600">Asistencia permanente</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Flota Reciente</span>
                    <span className="text-sm text-gray-600">Vehículos nuevos y mantenidos</span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  href="/es/contacto" 
                  className="flex items-center justify-center w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contáctenos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
