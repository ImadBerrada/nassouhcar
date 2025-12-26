import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, DollarSign, TrendingDown, Zap, Award, Calculator, Percent, Gift, CreditCard, Target, Coins, Mountain, Waves, Camera, Compass, Route, Building, Search, Filter, Eye, ThumbsUp, Bookmark, Navigation, Timer, Luggage, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Encontrar un Coche de Alquiler en Tetuán 2025 ✓ Guía Completa',
  description: '¿Cómo encontrar un coche de alquiler en Tetuán? ✓ Guía completa ✓ Comparativa de agencias ✓ Consejos de expertos ✓ Mejores precios ✓ Reserva fácil.',
  keywords: 'encontrar alquiler coche tetuan, como alquilar coche tetuan, guia alquiler coche tetuan, agencias alquiler tetuan',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/encontrar-alquiler-coches-tetuan'
  },
  openGraph: {
    title: 'Encontrar un Coche de Alquiler en Tetuán 2025 ✓ Guía Completa',
    description: 'Guía completa para encontrar un coche de alquiler en Tetuán ✓ Comparativa de agencias ✓ Consejos de expertos.',
    images: ['/tetouan-car-rental-guide.webp'],
  },
}

export default function EncontrarAlquilerCochesTetuanBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-semibold text-lg">Guía Experta</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Encontrar un Coche de Alquiler en Tetuán
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Guía completa para elegir el mejor coche de alquiler en Tetuán. 
              Comparativas, consejos de expertos y trucos para ahorrar.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Actualizado el 15 Enero 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min de lectura</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Guía</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Nuestra Flota
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Búsqueda de coche en Tetuán</h2>
            <p className="text-xl text-gray-600">Las claves para encontrar el coche perfecto</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Agencias comparadas</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Modelos disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-cyan-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Disponibilidad</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">175 DH</div>
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
                <Search className="h-8 w-8 text-emerald-600 mr-3" />
                ¿Cómo encontrar un coche de alquiler en Tetuán?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Encontrar un coche de alquiler en Tetuán</strong> puede parecer complejo 
                con todas las opciones disponibles. Esta guía le acompaña paso a paso 
                para elegir la mejor solución según sus necesidades, su presupuesto y sus destinos 
                en esta magnífica región del norte de Marruecos.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Filter className="h-6 w-6 text-emerald-600 mr-2" />
                  Pasos para encontrar su coche ideal
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Definir sus necesidades</strong>: Duración, pasajeros, equipaje</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Fijar su presupuesto</strong>: Alquiler + combustible + extras</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Elegir las fechas</strong>: Flexibilidad = ahorro</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Seleccionar el lugar</strong>: Aeropuerto, centro, puerto</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Comparar agencias</strong>: Precios, servicios, opiniones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Verificar condiciones</strong>: Seguro, fianza, km</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Leer opiniones</strong>: Experiencias reales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Reservar con antelación</strong>: Mejores precios garantizados</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-6 w-6 text-emerald-600 mr-2" />
                ¿Dónde buscar un coche de alquiler en Tetuán?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Varias opciones se ofrecen para <strong>encontrar un coche de alquiler en Tetuán</strong>. 
                Aquí están los mejores lugares y métodos:
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Agencias locales Tetuán</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Ventajas</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Precios competitivos</strong>: Menos intermediarios</li>
                            <li>• <strong>Servicio personalizado</strong>: Contacto directo</li>
                            <li>• <strong>Flexibilidad</strong>: Negociación posible</li>
                            <li>• <strong>Conocimiento local</strong>: Consejos de la región</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Dónde encontrarlas</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Centro ciudad</strong>: Avenida Mohammed V</li>
                            <li>• <strong>Aeropuerto</strong>: Terminal de llegadas</li>
                            <li>• <strong>Estación de autobuses</strong>: Cerca del transporte</li>
                            <li>• <strong>Hoteles</strong>: Asociaciones establecidas</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Plataformas en línea</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Ventajas</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Comparación rápida</strong>: Varios precios</li>
                            <li>• <strong>Reserva 24/7</strong>: En cualquier momento</li>
                            <li>• <strong>Opiniones clientes</strong>: Transparencia</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Nuestra recomendación</h5>
                          <ul className="text-gray-600 space-y-1">
                            <li>• <strong>Nassoh Car Online</strong>: Mejor relación calidad/precio</li>
                            <li>• <strong>Soporte WhatsApp</strong>: Respuesta inmediata</li>
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
                  Consejos prácticos para Tetuán
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Aparcamiento</h4>
                    <p className="text-gray-600 text-sm">
                      Privilegie los parkings vigilados en el centro. Las calles estrechas de la Medina no son accesibles en coche.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tráfico</h4>
                    <p className="text-gray-600 text-sm">
                      Evite las horas punta (8h-9h, 17h-19h) en las arterias principales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">¿Listo para explorar Tetuán?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Encuentre su coche ideal con Nassoh Car y disfrute de la ciudad con total libertad
                </p>
                <Link 
                  href="/es/flota" 
                  className="inline-flex items-center bg-white text-emerald-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Buscar un Coche
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">¿Por qué Nassoh Car en Tetuán?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Agencia Local</span>
                    <span className="text-sm text-gray-600">Expertos en Tetuán</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Entrega Gratuita</span>
                    <span className="text-sm text-gray-600">En Tetuán y alrededores</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Sin Tarjeta de Crédito</span>
                    <span className="text-sm text-gray-600">Opciones de pago flexibles</span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  href="/es/contacto" 
                  className="flex items-center justify-center w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contactar Agencia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
