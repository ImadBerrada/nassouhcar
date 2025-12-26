import type { Metadata } from 'next'
import { MapPin, Clock, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Crown, Trophy, UserCheck, Headphones, Building, Plane, Waves, Home, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agencia de Alquiler de Coches Marruecos 2025 ✓ Líder Nacional desde 2010',
  description: 'Agencia de alquiler de coches en Marruecos ✓ Líder nacional desde 2010 ✓ +15 ciudades ✓ Servicio premium ✓ Flota moderna ✓ Experiencia probada.',
  keywords: 'agencia alquiler coches marruecos, rent a car agencia marruecos, auto hire agency morocco, nassoh car marruecos',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/agencia-alquiler-coches' },
  openGraph: {
    title: 'Agencia de Alquiler de Coches Marruecos 2025 ✓ Líder Nacional desde 2010',
    description: 'Agencia de alquiler de coches en Marruecos ✓ Líder nacional desde 2010 ✓ +15 ciudades ✓ Servicio premium.',
    images: ['/morocco-car-rental-agency-blog.jpg'],
  },
}

export default function CarRentalAgencyMoroccoBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Building className="h-6 w-6 text-blue-400 mr-2" /><span className="text-blue-400 font-semibold text-lg">Agencia Nacional</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent leading-tight">Agencia de Alquiler de Coches – Marruecos</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Líder nacional desde 2010. Más de 15 ciudades, +500 vehículos, servicio premium y tarifas competitivas.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Actualizado 15 Ene, 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>8 min lectura</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Agencia</span></div>
            </div>
            <Link href="/es/flota" className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Explorar la Agencia<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Nassoh Car en cifras</h2><p className="text-xl text-gray-600">La agencia de referencia en alquiler de coches</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-blue-600 mb-2">+15</div><div className="text-gray-600 font-medium">Ciudades cubiertas</div></div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-indigo-600 mb-2">+500</div><div className="text-gray-600 font-medium">Vehículos disponibles</div></div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-purple-600 mb-2">15 años</div><div className="text-gray-600 font-medium">Experiencia</div></div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-pink-600 mb-2">+50K</div><div className="text-gray-600 font-medium">Clientes felices</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Building className="h-8 w-8 text-blue-600 mr-3" />Nassoh Car: Una agencia de confianza</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Desde 2010, <strong>Nassoh Car</strong> se ha establecido como la referencia en <strong>agencias de alquiler de coches</strong> en Marruecos. Con más de 15 ciudades cubiertas y una flota de +500 vehículos, ofrecemos soluciones de movilidad adaptadas a cada necesidad.</p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-8"><h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Crown className="h-6 w-6 text-blue-600 mr-2" />¿Por qué elegir nuestra agencia?</h3><ul className="space-y-3"><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Experiencia probada</strong>: 15 años en alquiler de coches</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Presencia nacional</strong>: +15 ciudades</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Flota diversa</strong>: +500 vehículos recientes</span></li><li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Servicio premium</strong>: Asistencia 24/7</span></li></ul></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><MapPin className="h-6 w-6 text-blue-600 mr-2" />Nuestras ubicaciones</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Nuestra <strong>agencia de alquiler de coches</strong> opera en todo Marruecos con puntos de servicio estratégicamente ubicados:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Plane className="h-6 w-6 text-blue-600 mr-2" />Aeropuertos principales</h4><ul className="space-y-2 text-gray-600"><li>• <strong>Tánger Ibn Battouta</strong>: Terminal 1 y 2</li><li>• <strong>Casablanca Mohammed V</strong>: Sala de llegadas</li><li>• <strong>Marrakech Menara</strong>: Zona de alquiler</li><li>• <strong>Agadir Al Massira</strong>: Mostrador dedicado</li><li>• <strong>Fez Saïss</strong>: Bienvenida personalizada</li><li>• <strong>Rabat Salé</strong>: Servicio exprés</li></ul></div>
                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Building className="h-6 w-6 text-indigo-600 mr-2" />Centros de ciudad</h4><ul className="space-y-2 text-gray-600"><li>• <strong>Tánger</strong>: Boulevard Mohammed VI</li><li>• <strong>Casablanca</strong>: Centro Maarif</li><li>• <strong>Rabat</strong>: Avenida Mohammed V</li><li>• <strong>Tetuán</strong>: Plaza Hassan II</li><li>• <strong>Oujda</strong>: Boulevard Zerktouni</li><li>• <strong>Nador</strong>: Avenida Youssef Ben Tachfine</li></ul></div>
                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Waves className="h-6 w-6 text-purple-600 mr-2" />Puertos y fronteras</h4><ul className="space-y-2 text-gray-600"><li>• <strong>Puerto Tánger Ville</strong>: Terminal de pasajeros</li><li>• <strong>Tánger Med</strong>: Zona de bienvenida</li><li>• <strong>Puerto Nador</strong>: Enlace Almería</li><li>• <strong>Fnideq</strong>: Frontera Ceuta</li><li>• <strong>Bab Sebta</strong>: Punto de cruce</li><li>• <strong>Oujda</strong>: Frontera Argelia</li></ul></div>
                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h4 className="font-bold text-xl text-gray-900 mb-4 flex items-center"><Home className="h-6 w-6 text-pink-600 mr-2" />Zonas turísticas</h4><ul className="space-y-2 text-gray-600"><li>• <strong>Chefchaouen</strong>: Centro histórico</li><li>• <strong>Asilah</strong>: Medina y playas</li><li>• <strong>Larache</strong>: Marina</li><li>• <strong>Alhucemas</strong>: Bahía mediterránea</li></ul></div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-4">Servicio Nacional Premium</h3><p className="mb-6 text-blue-100">Entrega gratuita en aeropuertos, puertos y centros de ciudad. Asistencia 24/7.</p><Link href="/es/flota" className="block w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-colors">Reservar Ahora</Link></div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"><h3 className="text-xl font-bold text-gray-900 mb-4">Contacto</h3><div className="space-y-4"><div className="flex items-center"><Phone className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">+212 631-630013</span></div><div className="flex items-center"><Mail className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">agency@nassouhcar.com</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
