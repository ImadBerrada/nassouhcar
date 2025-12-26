import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Globe, Flag } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tánger Marruecos 2025 - Servicio Nacional Premium | Nassoh Car',
  description: 'Alquiler de coches en Tánger Marruecos: Líder nacional con más de 500 vehículos ✓ Cobertura en todo Marruecos ✓ Servicio premium ✓ Precios competitivos ✓ Reserva 24h/24.',
  keywords: 'alquiler coches tanger marruecos, alquiler coches marruecos tanger, rent a car morocco tangier, alquiler auto marruecos, nassoh car marruecos',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tanger-marruecos'
  },
  openGraph: {
    title: 'Alquiler de Coches en Tánger Marruecos 2025 - Servicio Nacional Premium',
    description: 'Alquiler de coches en Tánger Marruecos: Líder nacional con más de 500 vehículos ✓ Cobertura en todo Marruecos ✓ Servicio premium ✓ Precios competitivos.',
    images: ['/tangier.webp'],
  },
}

export default function AlquilerCochesTangerMarruecosBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-green-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Flag className="h-6 w-6 text-red-400 mr-2" />
              <span className="text-red-400 font-semibold text-lg">Servicio Nacional</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-green-300 to-red-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches en Tánger Marruecos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Líder del alquiler de coches en Marruecos desde Tánger.
              Servicio premium nacional con más de 500 vehículos y cobertura en todo el reino.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Actualizado el 15 de Enero de 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>10 min de lectura</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Servicio Nacional</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explorar Nuestro Servicio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* National Coverage Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra cobertura nacional</h2>
            <p className="text-xl text-gray-600">La red de alquiler de coches más grande de Marruecos</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Ciudades cubiertas</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Vehículos disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Años de experiencia</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Servicio al cliente</div>
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
                <Globe className="h-8 w-8 text-red-600 mr-3" />
                ¿Por qué elegir nuestro alquiler de coches en Tánger Marruecos?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Nassoh Car</strong> es el líder indiscutible del <strong>alquiler de coches en Tánger Marruecos</strong>. 
                Desde hace más de 10 años, ofrecemos un servicio premium que se extiende por todo el reino, 
                con una experiencia única en el sector automotriz marroquí.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-red-600 mr-2" />
                  Ventajas de nuestro servicio nacional
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Cobertura nacional</strong>: Servicio en 15+ ciudades de Marruecos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Experiencia local</strong>: Conocimiento profundo del mercado marroquí</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Flota adaptada</strong>: Vehículos perfectos para las carreteras marroquíes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Soporte multilingüe</strong>: Servicio en español, francés, árabe e inglés</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-red-600 mr-2" />
                Ciudades servidas en Marruecos
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro servicio de <strong>alquiler de coches en Tánger Marruecos</strong> cubre los principales destinos:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border-2 border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-2" />
                    Norte de Marruecos
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Tánger - Sede principal</li>
                    <li>• Tetuán - Servicio completo</li>
                    <li>• Chefchaouen - Entrega</li>
                    <li>• Alhucemas - Socio</li>
                  </ul>
                  <p className="text-sm text-gray-500">Cobertura completa del norte</p>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Star className="h-5 w-5 text-green-600 mr-2" />
                    Centro de Marruecos
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Rabat - Agencia</li>
                    <li>• Casablanca - Hub principal</li>
                    <li>• Fez - Servicio extendido</li>
                    <li>• Mequinez - Socio</li>
                  </ul>
                  <p className="text-sm text-gray-500">Centros económicos principales</p>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-amber-600 mr-2" />
                    Sur de Marruecos
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• Marrakech - Agencia</li>
                    <li>• Agadir - Servicio completo</li>
                    <li>• Ouarzazate - Entrega</li>
                    <li>• Esauira - Socio</li>
                  </ul>
                  <p className="text-sm text-gray-500">Destinos turísticos</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Car className="h-6 w-6 text-red-600 mr-2" />
                Flota adaptada a Marruecos
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro <strong>alquiler de coches en Tánger Marruecos</strong> propone vehículos especialmente seleccionados 
                para las condiciones de conducción marroquíes:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Vehículos recomendados para Marruecos</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Carreteras urbanas</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Dacia Logan</strong> - Económico y fiable</li>
                      <li>• <strong>Renault Symbol</strong> - Confort urbano</li>
                      <li>• <strong>Hyundai Grand i10</strong> - Compacto y ágil</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Carreteras de montaña</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Dacia Duster</strong> - 4x4 robusto</li>
                      <li>• <strong>Hyundai Tucson</strong> - SUV de alto rendimiento</li>
                      <li>• <strong>Toyota RAV4</strong> - Fiabilidad probada</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="h-6 w-6 text-red-600 mr-2" />
                Servicios especiales Marruecos
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Como especialista en <strong>alquiler de coches en Tánger Marruecos</strong>, ofrecemos:
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Entrega interurbana</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Guía de carreteras marroquíes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Asistencia en caso de avería</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Consejos de itinerarios</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Soporte multilingüe</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Tarifas preferenciales larga duración</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Equipamiento especial (GPS Marruecos)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Asociaciones hoteleras</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-red-600 mr-2" />
                Circuitos populares desde Tánger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Con su vehículo de <strong>alquiler de coches en Tánger Marruecos</strong>, descubra:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 text-red-600 mr-2" />
                    Circuito Norte (3-5 días)
                  </h5>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Día 1: Tánger → Asilah (45 km)</li>
                    <li>• Día 2: Asilah → Tetuán (65 km)</li>
                    <li>• Día 3: Tetuán → Chefchaouen (60 km)</li>
                    <li>• Día 4: Chefchaouen → Tánger (115 km)</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Distancia total: ~285 km</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="h-4 w-4 text-green-600 mr-2" />
                    Gran Tour (7-10 días)
                  </h5>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Tánger → Fez (300 km)</li>
                    <li>• Fez → Marrakech (530 km)</li>
                    <li>• Marrakech → Casablanca (240 km)</li>
                    <li>• Casablanca → Tánger (340 km)</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Distancia total: ~1410 km</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Euro className="h-6 w-6 text-amber-600 mr-2" />
                  Tarifas especiales Marruecos
                </h3>
                <p className="text-gray-700 mb-4">
                  Nuestro <strong>alquiler de coches en Tánger Marruecos</strong> propone tarifas adaptadas a viajes largos:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-amber-600">Diario</div>
                    <div className="text-sm text-gray-600">Desde 180 DH</div>
                    <div className="text-xs text-gray-500">Perfecto para descubrir</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-amber-600">Circuito 7d</div>
                    <div className="text-sm text-gray-600">-20% de descuento</div>
                    <div className="text-xs text-gray-500">Ideal para vacaciones</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-amber-600">Mensual</div>
                    <div className="text-sm text-gray-600">-30% de descuento</div>
                    <div className="text-xs text-gray-500">Para estancias largas</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-red-600 to-green-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">¡Explore Marruecos!</h3>
                <p className="mb-6 text-red-100">
                  Descubra todo el reino con nuestro servicio nacional de alquiler.
                </p>
                <Link 
                  href="/es/flota" 
                  className="block w-full bg-white text-red-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Reservar ahora
                </Link>
              </div>

              {/* Morocco Highlights */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ventajas Marruecos</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Flag className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-gray-700">Experiencia local 10+ años</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Cobertura nacional</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Asistencia 24h/24</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-700">Servicio multilingüe</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contacto Nacional</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">+212 661 234 567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">contact@nassohcar.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">Tánger, Marruecos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
