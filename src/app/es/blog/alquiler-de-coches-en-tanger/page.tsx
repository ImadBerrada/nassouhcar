import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tánger 2025 - Flota Económica y Servicio de Excelencia | Nassoh Car',
  description: 'Alquiler de coches en Tánger ✓ Flota económica y servicio de excelencia ✓ Precios competitivos ✓ Vehículos recientes ✓ Entrega gratuita ✓ Reserva en línea.',
  keywords: 'alquiler coches tanger, alquiler de coches tanger, rent a car tanger, alquiler autos tanger, flota coches tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-de-coches-en-tanger'
  },
  openGraph: {
    title: 'Alquiler de Coches en Tánger 2025 - Flota Económica y Servicio de Excelencia | Nassoh Car',
    description: 'Alquiler de coches en Tánger ✓ Flota económica y servicio de excelencia ✓ Precios competitivos.',
    images: ['/tangier-cars-rental-blog.jpg'],
  },
}

export default function AlquilerDeCochesEnTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Flota Económica 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches en Tánger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Descubra la mayor flota de vehículos de alquiler en Tánger. 
              Más de 500 coches recientes para todas sus necesidades de movilidad en Marruecos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Actualizado el 15 de Enero de 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>9 min de lectura</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Flota de Vehículos</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Descubrir Nuestra Flota
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Fleet Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra flota en cifras</h2>
            <p className="text-xl text-gray-600">La mayor selección de vehículos de alquiler en Tánger</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Vehículos disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Modelos diferentes</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">2024</div>
              <div className="text-gray-600 font-medium">Año medio</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Disponibilidad</div>
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
                ¿Por qué elegir nuestro alquiler de coches en Tánger?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Nassoh Car</strong> revoluciona el <strong>alquiler de coches en Tánger</strong> con la mayor 
                flota de Marruecos. Nuestros más de 500 vehículos recientes y nuestro servicio de excelencia nos convierten en el líder 
                indiscutible del alquiler de automóviles en Tánger.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Ventajas de nuestra flota económica
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flota reciente</strong>: Vehículos con menos de 3 años de media</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Variedad excepcional</strong>: Más de 25 modelos diferentes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Mantenimiento riguroso</strong>: Mantenimiento profesional regular</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Disponibilidad garantizada</strong>: 99% de tasa de disponibilidad</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Navigation className="h-6 w-6 text-blue-600 mr-2" />
                Categorías de vehículos disponibles
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro <strong>alquiler de coches en Tánger</strong> ofrece una gama completa adaptada a todas las necesidades:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-blue-600 mr-2" />
                    Económicos
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Logan - 180 DH/día</li>
                    <li>• Renault Symbol - 200 DH/día</li>
                    <li>• Hyundai Grand i10 - 220 DH/día</li>
                  </ul>
                  <p className="text-sm text-gray-500">Perfecto para trayectos urbanos y presupuestos ajustados</p>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-2" />
                    Compactos
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Renault Clio - 250 DH/día</li>
                    <li>• Peugeot 208 - 280 DH/día</li>
                    <li>• Toyota Yaris - 300 DH/día</li>
                  </ul>
                  <p className="text-sm text-gray-500">Ideal para parejas y familias pequeñas</p>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-amber-600 mr-2" />
                    Familiares
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Lodgy - 350 DH/día</li>
                    <li>• Renault Scenic - 400 DH/día</li>
                    <li>• Toyota Avensis - 450 DH/día</li>
                  </ul>
                  <p className="text-sm text-gray-500">Espacioso y cómodo para familias</p>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    SUV y 4x4
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Duster - 400 DH/día</li>
                    <li>• Hyundai Tucson - 500 DH/día</li>
                    <li>• Toyota RAV4 - 600 DH/día</li>
                  </ul>
                  <p className="text-sm text-gray-500">Para la aventura y terrenos difíciles</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="h-6 w-6 text-blue-600 mr-2" />
                Servicios incluidos con su alquiler de coches en Tánger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Cada vehículo de nuestra flota de <strong>alquiler de coches en Tánger</strong> incluye:
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Seguro a todo riesgo</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Kilometraje ilimitado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Asistencia 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>GPS integrado</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Aire acondicionado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Conductor adicional gratis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Entrega/recogida</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Limpieza incluida</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                Destinos populares desde Tánger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Con su vehículo de nuestro <strong>alquiler de coches en Tánger</strong>, explore:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Destinos cercanos (0-50 km)</h5>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Cabo Espartel - 15 km</li>
                    <li>• Cuevas de Hércules - 20 km</li>
                    <li>• Asilah - 45 km</li>
                    <li>• Tetuán - 65 km</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Destinos lejanos (100+ km)</h5>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Chefchaouen - 115 km</li>
                    <li>• Rabat - 250 km</li>
                    <li>• Casablanca - 340 km</li>
                    <li>• Fez - 300 km</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Euro className="h-6 w-6 text-amber-600 mr-2" />
                  Tarificación transparente
                </h3>
                <p className="text-gray-700 mb-4">
                  Nuestro <strong>alquiler de coches en Tánger</strong> practica una tarificación clara y transparente:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">Diario</div>
                    <div className="text-sm text-gray-600">Desde 180 DH</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">Semanal</div>
                    <div className="text-sm text-gray-600">-15% de descuento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">Mensual</div>
                    <div className="text-sm text-gray-600">-25% de descuento</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">¡Reserve en nuestra flota!</h3>
                <p className="mb-6 text-indigo-100">
                  Elija entre más de 500 vehículos disponibles para su alquiler de coches en Tánger.
                </p>
                <Link 
                  href="/es/flota" 
                  className="block w-full bg-white text-indigo-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Ver toda la flota
                </Link>
              </div>

              {/* Fleet Highlights */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Puntos fuertes de nuestra flota</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Vehículos recientes (2021-2024)</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Mantenimiento profesional</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Limpieza tras cada alquiler</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Reserva instantánea</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contáctenos</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+212 631-630013</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">contact@nassohcar.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">Avenue Mohammed V, Tánger</span>
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
            Preguntas frecuentes sobre nuestra flota
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿Cuántos vehículos tienen en su flota?
              </h3>
              <p className="text-gray-600">
                Nuestra flota cuenta con más de 500 vehículos de diferentes categorías, 
                desde económicos hasta SUVs premium.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿Son vehículos recientes?
              </h3>
              <p className="text-gray-600">
                Sí, renovamos nuestra flota regularmente. La edad media de nuestros vehículos 
                es de menos de 3 años, con muchos modelos del año en curso.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿El kilometraje es ilimitado?
              </h3>
              <p className="text-gray-600">
                Absolutamente. Todos nuestros alquileres incluyen kilometraje ilimitado 
                para que pueda explorar Marruecos sin restricciones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿Qué seguros están incluidos?
              </h3>
              <p className="text-gray-600">
                Incluimos seguro a todo riesgo con franquicia en todos nuestros alquileres 
                para su tranquilidad total en la carretera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
