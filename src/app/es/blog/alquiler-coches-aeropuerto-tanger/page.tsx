import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Plane, Luggage, Timer } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en el Aeropuerto de Tánger 2025 - Entrega Express | Nassoh Car',
  description: 'Alquiler de coches aeropuerto Tánger ✓ Entrega express ✓ Servicio 24h/24 ✓ Flota moderna ✓ Precios competitivos ✓ Reserva online.',
  keywords: 'alquiler coches aeropuerto tanger, alquiler coches tanger aeropuerto, car rental tangier airport, alquiler auto aeropuerto tanger, coche alquiler aeropuerto tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-aeropuerto-tanger'
  },
  openGraph: {
    title: 'Alquiler de Coches en el Aeropuerto de Tánger 2025 - Entrega Express | Nassoh Car',
    description: 'Alquiler de coches aeropuerto Tánger ✓ Entrega express ✓ Servicio 24h/24 ✓ Flota moderna.',
    images: ['/tangier-airport-blog.jpg'],
  },
}

export default function AlquilerCochesAeropuertoTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Timer className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Servicio Express</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches en el Aeropuerto de Tánger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Servicio express de alquiler de coches en el aeropuerto Ibn Battuta de Tánger. 
              Recoja su vehículo en 15 minutos con entrega gratuita en la terminal.
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
                <span>Servicio Express</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reserva Express
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Express Service Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicio express en el aeropuerto</h2>
            <p className="text-xl text-gray-600">La solución más rápida para su llegada</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">15min</div>
              <div className="text-gray-600 font-medium">Entrega express</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Disponibilidad</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Vehículos</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">0€</div>
              <div className="text-gray-600 font-medium">Cargos ocultos</div>
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
                <Plane className="h-8 w-8 text-blue-600 mr-3" />
                Alquiler de coches en el aeropuerto de Tánger: La guía completa
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                ¿Busca un <strong>alquiler de coches en el aeropuerto de Tánger</strong>? 
                <strong>Nassoh Car</strong> le ofrece el servicio más práctico y rápido 
                para recoger su vehículo a su llegada al <strong>aeropuerto Ibn Battuta</strong>.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  ¿Por qué elegir nuestro servicio en el aeropuerto?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Entrega express 15 minutos</strong>: El más rápido del mercado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Servicio 24h/24, 7d/7</strong>: Incluso días festivos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Entrega gratuita</strong>: Directamente en la terminal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Más de 500 vehículos</strong>: Siempre disponibles</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Timer className="h-6 w-6 text-blue-600 mr-2" />
                Servicio express en 4 pasos
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro <strong>alquiler de coches en el aeropuerto de Tánger</strong> está optimizado para su comodidad:
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Reserva online</h5>
                      <p className="text-gray-600 text-sm">Reserve su vehículo e indique su número de vuelo</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Llegada al aeropuerto</h5>
                      <p className="text-gray-600 text-sm">Recoja su equipaje y llámenos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Entrega express</h5>
                      <p className="text-gray-600 text-sm">Su vehículo llega en 15 minutos máximo</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Salida inmediata</h5>
                      <p className="text-gray-600 text-sm">Firme y salga directamente</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Flota disponible en el aeropuerto
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Para su <strong>alquiler de coches en el aeropuerto de Tánger</strong>, elija entre:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Euro className="h-5 w-5 text-blue-600 mr-2" />
                    Económico
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Dacia Logan</strong> - Desde 180 DH/día</li>
                    <li>• <strong>Hyundai Grand i10</strong> - Desde 220 DH/día</li>
                    <li>• <strong>Renault Clio</strong> - Desde 250 DH/día</li>
                  </ul>
                  <p className="text-sm text-gray-500">Perfecto para estancias cortas</p>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-green-600 mr-2" />
                    Confort
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Renault Symbol</strong> - Desde 200 DH/día</li>
                    <li>• <strong>Toyota Corolla</strong> - Desde 280 DH/día</li>
                    <li>• <strong>Hyundai Elantra</strong> - Desde 320 DH/día</li>
                  </ul>
                  <p className="text-sm text-gray-500">Ideal para viajes de negocios</p>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Luggage className="h-5 w-5 text-amber-600 mr-2" />
                    Familiar
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Dacia Lodgy</strong> - Desde 350 DH/día</li>
                    <li>• <strong>Renault Scenic</strong> - Desde 400 DH/día</li>
                    <li>• <strong>Toyota Avensis</strong> - Desde 450 DH/día</li>
                  </ul>
                  <p className="text-sm text-gray-500">Espacio para toda la familia</p>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    Premium
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Hyundai Tucson</strong> - Desde 500 DH/día</li>
                    <li>• <strong>Toyota RAV4</strong> - Desde 600 DH/día</li>
                    <li>• <strong>Mercedes Clase A</strong> - Desde 700 DH/día</li>
                  </ul>
                  <p className="text-sm text-gray-500">Calidad y tecnología avanzada</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-blue-600 mr-2" />
                Destinos desde el aeropuerto Ibn Battuta
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Con su <strong>alquiler de coches en el aeropuerto de Tánger</strong>, explore fácilmente:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                    Tánger y alrededores
                  </h5>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• <strong>Centro ciudad Tánger</strong> - 15 km (20 min)</li>
                    <li>• <strong>Medina de Tánger</strong> - 18 km (25 min)</li>
                    <li>• <strong>Puerto de Tánger Med</strong> - 45 km (45 min)</li>
                    <li>• <strong>Cabo Espartel</strong> - 30 km (35 min)</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-4 w-4 text-amber-600 mr-2" />
                    Excursiones populares
                  </h5>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• <strong>Asilah</strong> - 45 km (45 min)</li>
                    <li>• <strong>Tétouan</strong> - 65 km (1h)</li>
                    <li>• <strong>Chefchaouen</strong> - 115 km (1h30)</li>
                    <li>• <strong>Casablanca</strong> - 340 km (3h30)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-amber-600 mr-2" />
                  Servicios incluidos en su alquiler
                </h3>
                <p className="text-gray-700 mb-4">
                  Su <strong>alquiler de coches en el aeropuerto de Tánger</strong> incluye:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Entrega gratuita en el aeropuerto</span>
                    </li>
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
                      <span>GPS con mapas de Marruecos</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Asistencia en carretera 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Conductor adicional gratuito</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Modificación gratuita</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Vehículo limpio y desinfectado</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                Información práctica aeropuerto
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo lo que necesita saber sobre nuestro <strong>alquiler de coches en el aeropuerto de Tánger</strong>:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Horarios de servicio</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Todos los días</strong>: 24h/24</li>
                      <li>• <strong>Días festivos</strong>: Servicio mantenido</li>
                      <li>• <strong>Vuelos nocturnos</strong>: Disponible</li>
                      <li>• <strong>Vuelos retrasados</strong>: Seguimiento automático</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Tiempo de entrega</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Reserva confirmada</strong>: 15 minutos</li>
                      <li>• <strong>Última hora</strong>: 30 minutos</li>
                      <li>• <strong>Vehículo especial</strong>: 45 minutos</li>
                      <li>• <strong>Grupo</strong>: 1 hora máximo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white text-center shadow-xl">
                <h3 className="text-2xl font-bold mb-4">¿Llega pronto?</h3>
                <p className="mb-6 opacity-90">
                  Reserve ahora su coche para una entrega express a su llegada.
                </p>
                <Link 
                  href="/es/flota" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-md"
                >
                  Ver Vehículos
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contáctenos</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 text-blue-500 mr-3" />
                    <span>+212 600 000 000</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 text-blue-500 mr-3" />
                    <span>contact@nassohcar.com</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 text-blue-500 mr-3" />
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
