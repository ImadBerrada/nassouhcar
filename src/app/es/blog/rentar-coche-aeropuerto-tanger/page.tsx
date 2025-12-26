import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Plane, Luggage, Timer, Heart, Globe, Baby } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Alquiler de coche en el aeropuerto de Tánger | Nassoh Car',
  description: 'Alquile su coche en el aeropuerto de Tánger con Nassoh Car. Servicio rápido, sillas de bebé/niño disponibles y opción de alquiler de solo ida en todo Marruecos.',
  keywords: 'alquiler coche aeropuerto tanger, nassoh car, alquiler coche tanger, car rental tangier airport, sillas bebe nino, alquiler solo ida marruecos',
  alternates: {
    canonical: 'https://www.nassohcar.com/es/blog/rentar-coche-aeropuerto-tanger'
  },
  openGraph: {
    title: 'Alquiler de coche en el aeropuerto de Tánger | Nassoh Car',
    description: 'Alquile su coche en el aeropuerto de Tánger con Nassoh Car. Servicio rápido, sillas de bebé/niño disponibles y opción de alquiler de solo ida en todo Marruecos.',
    images: ['/tanger.webp'],
  },
}

export default function RentarCocheAeropuertoTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Plane className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Guía Completa</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Alquilar un coche en el aeropuerto de Tánger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              La guía completa por Nassoh Car para un alquiler de coche simple y eficaz en el aeropuerto de Tánger
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
                <span>Guía Práctica</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Viajar a Tánger se vuelve mucho más simple con <strong>Nassoh Car</strong>. Ya sea que llegue por negocios o por placer, nuestro servicio de <Link href="/es/flota" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2">alquiler de coches en el aeropuerto de Tánger</Link> le garantiza confort, flexibilidad y tranquilidad desde su llegada. Ofrecemos una amplia selección de vehículos recientes – urbanos, SUV, familiares de 7 plazas o coches premium – adaptados a todas las necesidades y presupuestos.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nuestros clientes aprecian especialmente nuestra <strong>entrega gratuita en el aeropuerto de Tánger</strong>, así como en otros puntos clave como el Puerto Tanger Med, Puerto Tanger Ville, la estación de tren, e incluso el centro de Tetuán. Con un depósito de garantía de 5000 MAD, bloqueado o entregado en mano, usted se beneficia de una experiencia transparente y sin malas sorpresas.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Ventajas Nassoh Car</h3>
              </div>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Entrega gratuita en el aeropuerto de Tánger
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Vehículos recientes y bien mantenidos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Depósito de garantía transparente (5000 MAD)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Servicio disponible 7 días a la semana
                </li>
              </ul>
            </div>
          </div>

          {/* Service Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              Un servicio pensado para su confort
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nassoh Car se enorgullece de ofrecer un servicio de alta gama, a la vez rápido y personalizado. Cada vehículo es cuidadosamente mantenido y controlado antes de cada alquiler, garantizando seguridad y limpieza. También ofrecemos <strong>sillas de bebé y niño bajo petición</strong>, así como el <strong>alquiler de solo ida</strong> para los viajeros que deseen dejar el vehículo en otra ciudad de Marruecos.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nuestros equipos están disponibles 7 días a la semana a través de WhatsApp, teléfono o correo electrónico, para acompañarle antes, durante y después de su alquiler. Hablamos varios idiomas (francés, inglés, español, italiano, alemán y neerlandés) para facilitar la comunicación con todos nuestros clientes, ya sean residentes o turistas.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <Baby className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-green-900">Equipamiento Familiar</h3>
                </div>
                <p className="text-green-800">Sillas de bebé y niño disponibles bajo petición para viajar con total seguridad con sus pequeños.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center mb-4">
                  <Navigation className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="text-lg font-semibold text-purple-900">Alquiler Solo Ida</h3>
                </div>
                <p className="text-purple-800">Deje su vehículo en otra ciudad de Marruecos según sus necesidades de viaje.</p>
              </div>
            </div>
          </div>

          {/* Storage Scanner Section */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Luggage className="h-8 w-8 text-gray-600 mr-3" />
              El vínculo entre alquiler y almacenamiento: descubra The Storage Scanner
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cuando hablamos de alquiler de coches, a menudo pensamos en la logística: dónde aparcar, dónde recoger, dónde devolver el vehículo. Aquí es donde una herramienta como <a href="https://thestoragescanner.com/es-ES/proveedores-de-almacenamiento" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2">The Storage Scanner</a> entra en juego. Esta plataforma permite encontrar fácilmente espacios de almacenamiento fiables en todo el mundo. Ya sea para almacenar temporalmente un coche, equipo o efectos personales durante un viaje, The Storage Scanner le ayuda a comparar, reservar y gestionar sus espacios de almacenamiento en línea.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Es una solución particularmente práctica para los viajeros de larga duración o los expatriados que desean dejar su coche o sus bienes en un lugar seguro durante su ausencia — un complemento perfecto para su experiencia Nassoh Car.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="h-8 w-8 text-yellow-500 mr-3" />
              ¿Por qué elegir Nassoh Car?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Vehículos recientes y bien mantenidos</h3>
                    <p className="text-gray-600">Flota moderna renovada regularmente</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Entrega gratuita en el aeropuerto de Tánger</h3>
                    <p className="text-gray-600">Servicio de entrega directamente en la terminal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Asistencia disponible 7 días a la semana</h3>
                    <p className="text-gray-600">Soporte al cliente multilingüe a su servicio</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sillas de bebé/niño disponibles</h3>
                    <p className="text-gray-600">Equipos de seguridad para toda la familia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reserva simple y rápida vía WhatsApp</h3>
                    <p className="text-gray-600">Proceso de reserva instantáneo</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tarifas transparentes y sin cargos ocultos</h3>
                    <p className="text-gray-600">Precios claros desde la reserva</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/es/flota" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
              >
                Reservar Mi Coche Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
