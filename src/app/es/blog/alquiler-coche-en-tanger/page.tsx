import type { Metadata } from 'next'
import { MapPin, Clock, ArrowRight, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Car } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de Coche en Tánger 2025 - Reserva Rápida & Precios Inmejorables | Nassoh Car',
  description: 'Alquiler de coche en Tánger con Nassoh Car ✓ Precios competitivos ✓ Vehículos recientes ✓ Servicio 24h/24 ✓ Reserva online instantánea. ¡Descubra nuestras ofertas exclusivas!',
  keywords: 'alquiler coche en tanger, alquilar coche tanger, alquiler auto tanger, car rental tangier, coche alquiler tanger, nassoh car tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coche-en-tanger'
  },
  openGraph: {
    title: 'Alquiler de Coche en Tánger 2025 - Reserva Rápida & Precios Inmejorables',
    description: 'Alquiler de coche en Tánger con Nassoh Car ✓ Precios competitivos ✓ Vehículos recientes ✓ Servicio 24h/24 ✓ Reserva online instantánea.',
    images: ['/tangier.webp'],
  },
}

export default function AlquilerCocheEnTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Car className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Alquiler Premium 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coche en Tánger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              ¡Reserve su coche en Tánger en unos pocos clics! Servicio premium, precios transparentes, 
              y una flota moderna para todos sus desplazamientos en Marruecos.
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
                <span>Alquiler Tánger</span>
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

      {/* Quick Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Vehículos disponibles</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">24h/24</div>
              <div className="text-gray-600">Servicio al cliente</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Valoración clientes</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Años de experiencia</div>
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
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                ¿Por qué elegir el alquiler de coche en Tánger?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Tánger</strong>, puerta de entrada a Marruecos, es una ciudad fascinante que merece ser explorada con total libertad. 
                El <strong>alquiler de coche en Tánger</strong> le ofrece esta libertad de movimiento indispensable para descubrir 
                esta perla del estrecho de Gibraltar a su propio ritmo.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  Ventajas de alquilar un coche en Tánger
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Libertad total</strong>: Explore Tánger y sus alrededores sin restricciones de horarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Ahorro</strong>: Más rentable que los taxis para varios trayectos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Confort</strong>: Climatización y espacio personal garantizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Accesibilidad</strong>: Fácil acceso a playas y sitios turísticos</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                Nuestra flota de vehículos en Tánger
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                En <strong>Nassoh Car</strong>, proponemos una amplia gama de vehículos para su 
                <strong> alquiler de coche en Tánger</strong>. Ya sea que esté en viaje de negocios, vacaciones en familia, 
                o una escapada romántica, tenemos el vehículo perfecto para usted.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Vehículos Económicos</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Dacia Logan - Desde 200 DH/día</li>
                    <li>• Renault Clio - Desde 250 DH/día</li>
                    <li>• Peugeot 208 - Desde 280 DH/día</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Vehículos Confort</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Toyota Yaris - Desde 320 DH/día</li>
                    <li>• Hyundai i20 - Desde 350 DH/día</li>
                    <li>• Volkswagen Polo - Desde 380 DH/día</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Navigation className="h-6 w-6 text-blue-600 mr-2" />
                Lugares imprescindibles para visitar con su coche de alquiler
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Con su <strong>alquiler de coche en Tánger</strong>, descubra las maravillas de la región:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Medina de Tánger</strong>: Sumérjase en la historia milenaria de la ciudad</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Cabo Espartel</strong>: Admire el encuentro entre el Atlántico y el Mediterráneo</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Cuevas de Hércules</strong>: Explore estas formaciones geológicas espectaculares</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Asilah</strong>: Descubra esta encantadora ciudad costera a 45 minutos</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Euro className="h-6 w-6 text-amber-600 mr-2" />
                  Tarifas transparentes para su alquiler de coche en Tánger
                </h3>
                <p className="text-gray-700 mb-4">
                  En Nassoh Car, practicamos una política de <strong>precios transparentes</strong> sin cargos ocultos:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Seguro a todo riesgo incluido</li>
                  <li>✓ Kilometraje ilimitado</li>
                  <li>✓ Asistencia 24h/24</li>
                  <li>✓ Combustible: devolución con el mismo nivel</li>
                  <li>✓ Conductor adicional gratuito</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">¡Reserve su coche ahora!</h3>
                <p className="mb-6 text-blue-100">
                  Aproveche nuestras tarifas preferenciales y nuestro servicio premium para su alquiler de coche en Tánger.
                </p>
                <Link 
                  href="/es/flota" 
                  className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors"
                >
                  Ver nuestros vehículos
                </Link>
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

              {/* Related Articles */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Artículos relacionados</h3>
                <div className="space-y-4">
                  <Link href="/es/blog/alquiler-coches-tanger-aeropuerto" className="block hover:text-blue-600 transition-colors">
                    → Alquiler coche Tánger aeropuerto
                  </Link>
                  <Link href="/es/blog/alquiler-coches-tanger-med" className="block hover:text-blue-600 transition-colors">
                    → Alquiler coche Tánger Med
                  </Link>
                  <Link href="/es/blog/consejos-alquiler-coches-tanger" className="block hover:text-blue-600 transition-colors">
                    → Consejos alquiler coche Tánger
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Artículos Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                <Link href="/es/blog/alquiler-coches-tanger-baratos" className="hover:text-blue-600 transition-colors">
                  Alquiler Barato en Tánger
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Descubra nuestras tarifas inmejorables desde 170 DH/día para su alquiler de coche en Tánger.
              </p>
              <Link href="/es/blog/alquiler-coches-tanger-baratos" className="text-blue-600 hover:text-blue-800 font-medium">
                Leer más →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                <Link href="/es/blog/alquiler-coches-puerto-tanger" className="hover:text-green-600 transition-colors">
                  Alquiler en el Puerto de Tánger
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Servicio express en el puerto de Tánger con entrega gratuita para sus desplazamientos.
              </p>
              <Link href="/es/blog/alquiler-coches-puerto-tanger" className="text-green-600 hover:text-green-800 font-medium">
                Leer más →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                <Link href="/es/blog/alquiler-coches-tanger-boukhalef" className="hover:text-purple-600 transition-colors">
                  Alquiler Tánger Boukhalef
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Alquiler en el aeropuerto Ibn Battouta con servicio premium y vehículos recientes.
              </p>
              <Link href="/es/blog/alquiler-coches-tanger-boukhalef" className="text-purple-600 hover:text-purple-800 font-medium">
                Leer más →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Preguntas frecuentes sobre el alquiler de coche en Tánger
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿Qué edad se necesita para alquilar un coche en Tánger?
              </h3>
              <p className="text-gray-600">
                La edad mínima es de 21 años con al menos 1 año de permiso de conducir. 
                Pueden aplicarse cargos adicionales para conductores menores de 25 años.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿Qué documentos son necesarios?
              </h3>
              <p className="text-gray-600">
                Permiso de conducir válido, documento de identidad o pasaporte, y una tarjeta de crédito 
                a nombre del conductor principal para la fianza.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿Puedo cancelar mi reserva?
              </h3>
              <p className="text-gray-600">
                Sí, puede cancelar gratuitamente hasta 24h antes de la recogida. 
                Consulte nuestras condiciones de cancelación para más detalles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                ¿El seguro está incluido?
              </h3>
              <p className="text-gray-600">
                Sí, todos nuestros vehículos incluyen un seguro a todo riesgo con franquicia. 
                Opciones de seguro complementario están disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
