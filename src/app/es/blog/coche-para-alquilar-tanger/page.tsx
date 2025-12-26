import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Search } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Coche para Alquilar en Tánger 2025 - Encuentre su Vehículo Ideal | Nassoh Car',
  description: 'Coche para alquilar en Tánger ✓ Encuentre su vehículo ideal ✓ Amplia selección ✓ Precios competitivos ✓ Servicio premium ✓ Reserva fácil ✓ Entrega gratuita.',
  keywords: 'coche para alquilar tanger, alquilar coche tanger, car to rent tangier, auto para alquilar tanger, vehículo alquilar tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/coche-para-alquilar-tanger'
  },
  openGraph: {
    title: 'Coche para Alquilar en Tánger 2025 - Encuentre su Vehículo Ideal | Nassoh Car',
    description: 'Coche para alquilar en Tánger ✓ Encuentre su vehículo ideal ✓ Amplia selección ✓ Precios competitivos.',
    images: ['/tangier-car-to-rent-blog.jpg'],
  },
}

export default function CocheParaAlquilarTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-semibold text-lg">Búsqueda Simplificada</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Coche para Alquilar en Tánger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Encuentre fácilmente el coche perfecto para alquilar en Tánger. 
              Más de 500 vehículos disponibles con reserva instantánea y precios transparentes.
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
                <span>Guía de Alquiler</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Encontrar Mi Coche
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Encuentre su coche ideal</h2>
            <p className="text-xl text-gray-600">Búsqueda simplificada entre nuestra amplia selección</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Coches disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600 font-medium">Categorías</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">24h</div>
              <div className="text-gray-600 font-medium">Reserva</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Transparencia precios</div>
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
                ¿Cómo encontrar el coche para alquilar perfecto en Tánger?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                ¡Buscar un <strong>coche para alquilar en Tánger</strong> nunca ha sido tan simple! 
                <strong>Nassoh Car</strong> le ofrece un sistema de búsqueda intuitivo para encontrar 
                el vehículo ideal entre más de 500 opciones disponibles.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-emerald-600 mr-2" />
                  ¿Por qué elegir nuestro servicio de búsqueda?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Búsqueda instantánea</strong>: Resultados en tiempo real</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Filtros avanzados</strong>: Precio, categoría, equipamiento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Comparación fácil</strong>: Compare varios vehículos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Reserva inmediata</strong>: Confirme en 2 clics</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Navigation className="h-6 w-6 text-emerald-600 mr-2" />
                Guía de selección por necesidad
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Para encontrar el <strong>coche para alquilar en Tánger</strong> ideal, identifique primero su necesidad:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Car className="h-5 w-5 text-emerald-600 mr-2" />
                    Viaje de negocios
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Renault Symbol - Confort</li>
                    <li>• Toyota Corolla - Fiabilidad</li>
                    <li>• Hyundai Elantra - Elegancia</li>
                  </ul>
                  <p className="text-sm text-gray-500">Vehículos profesionales y cómodos</p>
                </div>

                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Vacaciones en familia
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Lodgy - 7 plazas</li>
                    <li>• Renault Scenic - Espacioso</li>
                    <li>• Toyota Avensis - Confort</li>
                  </ul>
                  <p className="text-sm text-gray-500">Espacio y confort para toda la familia</p>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Euro className="h-5 w-5 text-amber-600 mr-2" />
                    Presupuesto ajustado
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Logan - 180 DH/día</li>
                    <li>• Hyundai Grand i10 - 220 DH/día</li>
                    <li>• Renault Symbol - 200 DH/día</li>
                  </ul>
                  <p className="text-sm text-gray-500">Económico sin comprometer la calidad</p>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Aventura
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Dacia Duster - 4x4</li>
                    <li>• Hyundai Tucson - SUV</li>
                    <li>• Toyota RAV4 - Premium</li>
                  </ul>
                  <p className="text-sm text-gray-500">Para explorar Marruecos con total libertad</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="h-6 w-6 text-emerald-600 mr-2" />
                Proceso de reserva simplificado
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Con Nassoh Car, reservar es cuestión de minutos. Seleccione sus fechas, elija su vehículo 
                y reciba una confirmación instantánea. Sin trámites complicados ni largas esperas.
              </p>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white mt-12">
                <h3 className="text-2xl font-bold mb-4">¿Listo para conducir en Tánger?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Reserve hoy mismo y aproveche nuestras ofertas especiales
                </p>
                <Link 
                  href="/es/flota" 
                  className="inline-flex items-center bg-white text-emerald-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Ver Disponibilidad
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestras Ventajas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Precios Transparentes</span>
                    <span className="text-sm text-gray-600">Todo incluido, sin sorpresas</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Reserva Fácil</span>
                    <span className="text-sm text-gray-600">Proceso en 3 pasos</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Soporte Local</span>
                    <span className="text-sm text-gray-600">Expertos en Tánger</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <span className="font-semibold block text-gray-900">Entrega Flexible</span>
                    <span className="text-sm text-gray-600">Aeropuerto, Puerto o Ciudad</span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  href="/es/contacto" 
                  className="flex items-center justify-center w-full bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contactar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
