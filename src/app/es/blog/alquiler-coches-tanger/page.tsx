import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/es/components/StructuredData'
import Breadcrumb from '@/app/es/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Alquiler de Coches en Tánger 2025 - Guía Completa | Nassoh Car',
  description: 'Descubra la guía definitiva para el alquiler de coches en Tánger. Consejos de expertos, mejores tarifas y servicio 24h. ¡Reserve su vehículo ahora!',
  keywords: 'alquiler coches tanger, alquiler de coches tanger, coche de alquiler tanger, car rental tangier, alquiler auto tanger, rentar coche tanger',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/alquiler-coches-tanger'
  },
  openGraph: {
    title: 'Alquiler de Coches en Tánger 2025 - Guía Completa | Nassoh Car',
    description: 'Descubra la guía definitiva para el alquiler de coches en Tánger. Consejos de expertos, mejores tarifas y servicio 24h.',
    images: ['/tangier-blog.jpg'],
  },
}

export default function AlquilerCochesTangerBlog() {
  return (
    <>
      <StructuredData type="Article" countryTarget="MA" language="es" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Car className="h-6 w-6 text-amber-400 mr-2" />
              <span className="text-amber-400 font-semibold text-lg">Guía Experta 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
              Alquiler de Coches en Tánger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              La guía completa para alquilar un coche en Tánger en 2025. Descubra nuestros consejos de expertos, 
              las mejores tarifas y nuestro servicio económico 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Publicado el 15 de Enero de 2025</span>
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
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir el Alquiler de Coches en Tánger?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tánger, puerta de entrada a Marruecos, ofrece una libertad incomparable cuando dispone de su propio vehículo. 
              Ya sea que llegue por el aeropuerto Ibn Battouta, el puerto Tanger Med, o desee explorar la región, 
              el alquiler de coches en Tánger le permite descubrir esta magnífica ciudad a su propio ritmo.
            </p>
          </div>

          {/* Avantages Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ventajas de Alquilar un Coche en Tánger
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Libertad de Movimiento</h3>
                </div>
                <p className="text-gray-700">
                  Explore Tánger y sus alrededores sin restricciones de horarios. Visite las cuevas de Hércules, 
                  Cabo Espartel, o vaya de excursión a Chefchaouen cuando lo desee.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Star className="h-8 w-8 text-amber-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Confort Familiar</h3>
                </div>
                <p className="text-gray-700">
                  Nuestros vehículos se mantienen con los más altos estándares. Aire acondicionado, GPS y 
                  seguro completo incluidos para su seguridad y confort.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Servicio Seguro</h3>
                </div>
                <p className="text-gray-700">
                  Seguro a todo riesgo, asistencia 24h, y vehículos controlados regularmente 
                  para su tranquilidad en Tánger.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Servicio al Cliente Experto</h3>
                </div>
                <p className="text-gray-700">
                  Nuestro equipo local en Tánger le acompaña con consejos personalizados 
                  y soporte en español, árabe e inglés.
                </p>
              </div>
            </div>
          </section>

          {/* Guide Pratique */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Guía Práctica: Cómo Alquilar un Coche en Tánger
            </h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pasos Simples para su Alquiler</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Reserva en Línea</h4>
                    <p className="text-gray-700">
                      Visite nuestra <Link href="/es" className="text-blue-600 hover:underline font-medium">página de inicio</Link> y 
                      seleccione sus fechas, lugar de recogida en Tánger y tipo de vehículo deseado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Elección del Vehículo</h4>
                    <p className="text-gray-700">
                      Explore nuestra <Link href="/es/flota" className="text-blue-600 hover:underline font-medium">flota completa</Link> y 
                      elija entre nuestros vehículos económicos, SUV o coches familiares disponibles en Tánger.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Documentos Requeridos</h4>
                    <p className="text-gray-700">
                      Prepare su permiso de conducir válido, pasaporte o DNI, y una tarjeta de crédito 
                      para la fianza de 5.000 DH (totalmente reembolsable).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recogida</h4>
                    <p className="text-gray-700">
                      Recoja su vehículo en nuestra agencia de Tánger, en el aeropuerto Ibn Battouta, 
                      en el puerto Tanger Med, o benefíciese de nuestro servicio de entrega gratuito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lieux de Prise en Charge */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              ¿Dónde Recoger su Coche de Alquiler en Tánger?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <MapPin className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Agencia Tánger Centro</h3>
                <p className="text-gray-700 mb-4">
                  Nuestra agencia principal en el corazón de Tánger, fácilmente accesible desde todos los barrios de la ciudad.
                </p>
                <div className="text-sm text-gray-600">
                  <p>📍 Centro de Tánger</p>
                  <p>🕒 9:00 - 20:00 (7 días/7)</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <MapPin className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Aeropuerto Ibn Battouta</h3>
                <p className="text-gray-700 mb-4">
                  Servicio de alquiler directamente en el aeropuerto de Tánger para su llegada y salida con total sencillez.
                </p>
                <div className="text-sm text-gray-600">
                  <p>📍 Aeropuerto Tánger Ibn Battouta</p>
                  <p>🕒 Servicio 24h bajo petición</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <MapPin className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Puerto Tanger Med</h3>
                <p className="text-gray-700 mb-4">
                  Recogida directa en el puerto Tanger Med para viajeros que llegan en ferry desde Europa.
                </p>
                <div className="text-sm text-gray-600">
                  <p>📍 Terminal Puerto Tanger Med</p>
                  <p>🕒 Coordinación con horarios de ferrys</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conseils d'Expert */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Consejos de Expertos para su Alquiler en Tánger
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">💡 Trucos de Nuestros Expertos Locales</h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Mejor época:</strong> Reserve su alquiler de coche en Tánger con al menos 48h de antelación para garantizar disponibilidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Conducción en Tánger:</strong> El tráfico es fluido fuera de las horas punta (8h-9h y 17h-19h).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Aparcamiento:</strong> Utilice los parkings de pago del centro o las zonas azules para evitar multas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Combustible:</strong> Las gasolineras son numerosas en Tánger. Devuelva el vehículo con el mismo nivel de combustible.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span><strong>Excursiones:</strong> Aproveche su alquiler para visitar Asilah (45 min), Chefchaouen (2h) o Tetuán (1h).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">¿Listo para Explorar Tánger?</h2>
              <p className="text-xl mb-8 opacity-90">
                Reserve su coche de alquiler en Tánger ahora y descubra la libertad de viajar a su propio ritmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/es" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <Car className="h-5 w-5 mr-2" />
                  Reservar Ahora
                </Link>
                <Link 
                  href="/es/flota" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Ver Nuestra Flota
                </Link>
              </div>
            </div>
          </section>

          {/* Related Articles Section */}
          <section className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Artículos Relacionados sobre Tánger
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/es/blog/alquiler-coches-baratos-tanger" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <Tag className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm text-green-600 font-medium">Economía</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Alquiler Barato en Tánger</h3>
                  <p className="text-gray-600 text-sm">Descubra nuestras tarifas imbatibles desde 170 DH/día para su alquiler en Tánger.</p>
                </Link>

                <Link href="/es/blog/alquiler-coches-aeropuerto-tanger" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-blue-600 font-medium">Aeropuerto</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Alquiler en el Aeropuerto</h3>
                  <p className="text-gray-600 text-sm">Servicio express de entrega directamente en el aeropuerto Ibn Battouta de Tánger.</p>
                </Link>

                <Link href="/es/blog/alquiler-coches-puerto-tanger" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <Car className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-sm text-purple-600 font-medium">Puerto</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Alquiler en el Puerto</h3>
                  <p className="text-gray-600 text-sm">Servicio express en el puerto de Tánger con entrega gratuita para viajeros de ferry.</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                ¿Necesita Ayuda para su Alquiler en Tánger?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-700">+212 631 63 00 13</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">contact@nassohcar.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
    </>
  )
}
