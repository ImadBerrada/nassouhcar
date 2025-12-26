import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Anchor, Navigation, Zap, Award, Ship, Timer, Compass, Waves, Globe, Route, Car } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/es/components/StructuredData'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en el Puerto de Tánger 2025 - Servicio Exprés | Entrega Gratuita',
  description: 'Alquiler de coches en el puerto de Tánger ✓ Servicio exprés ✓ Entrega gratuita ✓ Coordinación de ferry ✓ Flota moderna ✓ Reserva online.',
  keywords: 'alquiler coches puerto tanger, alquiler de coches en el puerto de tanger, car rental tangier port, alquiler auto puerto tanger, coche alquiler puerto tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-puerto-tanger'
  },
  openGraph: {
    title: 'Alquiler de Coches en el Puerto de Tánger 2025 - Servicio Exprés | Entrega Gratuita',
    description: 'Alquiler de coches en el puerto de Tánger ✓ Servicio exprés ✓ Entrega gratuita ✓ Coordinación de ferry.',
    images: ['/tangier-port-blog.jpg'],
  },
}

export default function AlquilerCochesPuertoTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Ship className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Puerto de Tánger</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches en el Puerto de Tánger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Alquiler de coches en el puerto de Tánger - Servicio exprés y entrega gratuita. 
              ¡Su movilidad desde la llegada al puerto histórico de Tánger!
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
                <span>Puerto Histórico</span>
              </div>
            </div>
            <Link 
              href="/es/flota" 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reservar en el Puerto de Tánger
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Port Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicio puerto de Tánger</h2>
            <p className="text-xl text-gray-600">Su socio de movilidad en el corazón de la ciudad blanca</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">10min</div>
              <div className="text-gray-600 font-medium">Entrega exprés</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24h/24</div>
              <div className="text-gray-600 font-medium">Servicio continuo</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">80+</div>
              <div className="text-gray-600 font-medium">Vehículos puerto</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">2500+</div>
              <div className="text-gray-600 font-medium">Clientes puerto/año</div>
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
                <Anchor className="h-8 w-8 text-blue-600 mr-3" />
                Alquiler de coches en el puerto de Tánger: Su movilidad inmediata
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                El <strong>puerto de Tánger</strong> es el puerto histórico de la ciudad, situado en pleno centro. 
                Nuestro servicio de <strong>alquiler de coches en el puerto de Tánger</strong> 
                le permite recoger su vehículo directamente en el puerto, 
                ya llegue en ferry o desee explorar la región desde este punto central.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  ¿Por qué elegir nuestro servicio en el puerto de Tánger?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Ubicación central</strong>: En pleno corazón de Tánger</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Entrega exprés</strong>: 10 minutos máximo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Acceso inmediato</strong>: Medina y centro ciudad a pie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Servicio personalizado</strong>: Equipo dedicado en el puerto</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Route className="h-6 w-6 text-blue-600 mr-2" />
                Ventajas del puerto de Tánger vs Tanger Med
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro <strong>alquiler de coches en el puerto de Tánger</strong> ofrece ventajas únicas 
                en comparación con el puerto Tanger Med:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    Puerto de Tánger (Centro)
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Centro ciudad</strong>: Acceso inmediato a pie</li>
                    <li>• <strong>Medina</strong>: 5 minutos andando</li>
                    <li>• <strong>Hoteles</strong>: Proximidad a los alojamientos</li>
                    <li>• <strong>Restaurantes</strong>: Barrio gastronómico</li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Ubicación ideal
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-indigo-600 mr-2" />
                    Nuestro servicio exprés
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Entrega 10 min</strong>: Servicio ultrarrápido</li>
                    <li>• <strong>Equipo dedicado</strong>: Especialistas del puerto</li>
                    <li>• <strong>Trámites exprés</strong>: Procedimiento simplificado</li>
                    <li>• <strong>Vehículo listo</strong>: GPS programado</li>
                  </ul>
                  <div className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Eficacia máxima
                  </div>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Compass className="h-5 w-5 text-green-600 mr-2" />
                    Destinos cercanos
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Medina de Tánger</strong>: 5 min a pie</li>
                    <li>• <strong>Kasbah</strong>: 10 min a pie</li>
                    <li>• <strong>Corniche</strong>: 15 min en coche</li>
                    <li>• <strong>Cap Spartel</strong>: 30 min en coche</li>
                  </ul>
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Acceso privilegiado
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                    <Globe className="h-5 w-5 text-amber-600 mr-2" />
                    Circuitos recomendados
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• <strong>Tour de Tánger</strong>: Día completo</li>
                    <li>• <strong>Tetuán</strong>: 1h de ruta</li>
                    <li>• <strong>Chefchaouen</strong>: 2h de ruta</li>
                    <li>• <strong>Asilah</strong>: 45 min de ruta</li>
                  </ul>
                  <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                    Descubrimiento facilitado
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Timer className="h-6 w-6 text-indigo-600 mr-2" />
                  Proceso de recogida en el puerto de Tánger
                </h3>
                <p className="text-gray-700 mb-4">
                  Nuestro proceso de <strong>alquiler de coches en el puerto de Tánger</strong> está optimizado 
                  para una recogida ultrarrápida:
                </p>
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Reserva con ubicación</h5>
                      <p className="text-gray-600 text-sm">Especifique "Puerto de Tánger centro" al reservar</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Confirmación y contacto</h5>
                      <p className="text-gray-600 text-sm">Le contactamos 30 min antes para confirmar el punto de encuentro</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Encuentro en el puerto</h5>
                      <p className="text-gray-600 text-sm">Nuestro equipo le espera en la entrada principal del puerto</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Trámites exprés</h5>
                      <p className="text-gray-600 text-sm">Verificación rápida y firma del contrato (5 minutos máx)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Salida inmediata</h5>
                      <p className="text-gray-600 text-sm">Su vehículo le espera, listo para explorar Tánger</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Flota adaptada al puerto de Tánger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro <strong>alquiler de coches en el puerto de Tánger</strong> ofrece una flota 
                perfectamente adaptada al descubrimiento de la ciudad y la región:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Urbanos</strong>: Perfectos para la medina</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Berlinas confort</strong>: Ideales para circuitos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>SUV familiares</strong>: Espacio y confort</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>GPS Tánger incluido</strong>: Navegación optimizada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Aire acondicionado</strong>: Confort todo el año</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Vehículos recientes</strong>: Menos de 2 años</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Mantenimiento profesional</strong>: Fiabilidad garantizada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Limpieza completa</strong>: Higiene perfecta</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Asistencia local</strong>: Soporte Tánger 24h/24</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span><strong>Kilometraje libre</strong>: Explore sin límites</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-blue-600 mr-2" />
                Guía práctica - Puerto de Tánger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Maximice su experiencia de <strong>alquiler de coches en el puerto de Tánger</strong> 
                con nuestros consejos de experto:
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Consejos prácticos puerto de Tánger</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Antes de su llegada</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Reserve con antelación</strong>: Garantía de disponibilidad</li>
                      <li>• <strong>Especifique "puerto centro"</strong>: Evitar confusión con Tánger Med</li>
                      <li>• <strong>Descargue nuestros contactos</strong>: Comunicación directa</li>
                      <li>• <strong>Prepare sus documentos</strong>: Permiso + documento de identidad</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">A su llegada</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Llámenos</strong>: Confirmación de su presencia</li>
                      <li>• <strong>Cita entrada principal</strong>: Punto de encuentro fijo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Booking Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reservar en el Puerto</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Reserve su vehículo ahora para una entrega exprés en el puerto de Tánger.
              </p>
              <Link 
                href="/es/flota" 
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors mb-4"
              >
                Ver Disponibilidad
              </Link>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Phone className="h-4 w-4" />
                <span>+212 661 123 456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Structured Data for SEO */}
      <StructuredData type="Article" countryTarget="MA" language="es" />
    </div>
  )
}
