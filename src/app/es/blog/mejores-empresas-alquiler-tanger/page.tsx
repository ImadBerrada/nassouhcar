import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Calendar, Tag, Trophy, Medal, Award, Heart, ThumbsUp, Settings, Crown } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mejores Empresas de Alquiler en Tánger 2025 ⭐ Nota 4.9/5 ✓ Nº1',
  description: 'Alquiler de coche en Tánger con la mejor valoración ⭐ 4.9/5 ✓ +2500 reseñas ✓ Servicio premiado ✓ Flota premium ✓ Precios transparentes ✓ Satisfacción garantizada.',
  keywords: 'mejores empresas alquiler tanger, mejor empresa alquiler coche tanger, alquiler coche tanger opiniones, top alquiler coche tanger',
  alternates: { canonical: 'https://www.nassohcar.com/es/blog/mejores-empresas-alquiler-tanger' },
  openGraph: {
    title: 'Mejores Empresas de Alquiler en Tánger 2025 ⭐ Nota 4.9/5 ✓ Nº1',
    description: 'Alquiler con la mejor valoración en Tánger ⭐ 4.9/5 ✓ +2500 reseñas ✓ Servicio premiado.',
    images: ['/tanger-best-rated-car-rental.webp']
  }
}

export default function BlogMejoresEmpresasAlquilerTangierES() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Trophy className="h-6 w-6 text-amber-400 mr-2" /><span className="text-amber-400 font-semibold text-lg">Nº1 en Tánger</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-300 to-red-400 bg-clip-text text-transparent leading-tight">Mejores Empresas de Alquiler<br />en Tánger</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">⭐ Nota 4.9/5 con +2500 reseñas. Descubre por qué somos la empresa mejor valorada de alquiler en Tánger.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Actualizado el 15 Enero 2025</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>8 min de lectura</span></div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Opiniones</span></div>
            </div>
            <Link href="/es/fleet" className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">Reservar Ahora<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué somos los mejor valorados?</h2><p className="text-xl text-gray-600">Cifras que hablan por sí solas</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-amber-600 mb-2">4.9/5</div><div className="text-gray-600 font-medium">Nota media</div><div className="flex justify-center mt-2">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div></div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-orange-600 mb-2">2500+</div><div className="text-gray-600 font-medium">Reseñas</div></div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-red-600 mb-2">98%</div><div className="text-gray-600 font-medium">Satisfacción</div></div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl"><div className="text-4xl font-bold text-pink-600 mb-2">Nº1</div><div className="text-gray-600 font-medium">Ranking Tánger</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Crown className="h-8 w-8 text-amber-600 mr-3" />Nassoh Car: excelencia reconocida en Tánger</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Con una <strong>nota de 4.9/5 basada en más de 2500 reseñas</strong>, Nassoh Car es la referencia en <strong>alquiler mejor valorado en Tánger</strong>. Esta posición es fruto de un compromiso constante con la excelencia del servicio.</p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Medal className="h-6 w-6 text-amber-600 mr-2" />Nuestras distinciones</h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><Trophy className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Premio Excelencia 2024</strong>: Mejor agencia en Tánger</span></li>
                  <li className="flex items-start"><Award className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Certificado Calidad</strong>: Servicio excepcional</span></li>
                  <li className="flex items-start"><Star className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Top Rated 2024</strong>: Nota 4.9/5 todo el año</span></li>
                  <li className="flex items-start"><Heart className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Clientes fieles</strong>: 85% repiten</span></li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><ThumbsUp className="h-6 w-6 text-amber-600 mr-2" />Lo que dicen nuestros clientes</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Reseñas auténticas que demuestran la calidad de nuestro servicio. Razones por las que somos los mejor valorados:</p>
              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4"><div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center"><span className="text-amber-600 font-bold text-lg">MH</span></div></div>
                    <div className="flex-1"><div className="flex items-center mb-2"><h4 className="font-bold text-gray-900 mr-3">Mohammed H.</h4><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div></div><p className="text-gray-600 italic mb-2">"Servicio excepcional. Coche impecable, equipo profesional y precio transparente. Recomiendo Nassoh Car en Tánger."</p><div className="text-sm text-gray-500">Verificado • Enero 2025</div></div>
                  </div>
                </div>
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4"><div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"><span className="text-orange-600 font-bold text-lg">SF</span></div></div>
                    <div className="flex-1"><div className="flex items-center mb-2"><h4 className="font-bold text-gray-900 mr-3">Sarah F.</h4><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div></div><p className="text-gray-600 italic mb-2">"Primera vez en Marruecos, servicio perfecto. Entrega en aeropuerto, coche reciente y asistencia 24/7."</p><div className="text-sm text-gray-500">Verificado • Enero 2025</div></div>
                  </div>
                </div>
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4"><div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"><span className="text-red-600 font-bold text-lg">AB</span></div></div>
                    <div className="flex-1"><div className="flex items-center mb-2"><h4 className="font-bold text-gray-900 mr-3">Ahmed B.</h4><div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-amber-400 fill-current" />))}</div></div><p className="text-gray-600 italic mb-2">"Cliente fiel desde hace 3 años. Siempre la misma calidad, precios competitivos y vehículos bien mantenidos."</p><div className="text-sm text-gray-500">Verificado • Diciembre 2024</div></div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Settings className="h-6 w-6 text-amber-600 mr-2" />Nuestros pilares de excelencia</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Nuestra posición como <strong>mejor valorados en Tánger</strong> se sustenta en 8 pilares:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-sm"><div className="flex items-start"><div className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">1</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Flota Premium</h4><ul className="text-gray-600 space-y-2"><li>• Vehículos recientes</li><li>• Mantenimiento riguroso</li><li>• Limpieza profesional</li><li>• Equipamiento moderno</li></ul></div></div></div>
                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm"><div className="flex items-start"><div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">2</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Atención al cliente</h4><ul className="text-gray-600 space-y-2"><li>• Equipo formado</li><li>• Multilingüe</li><li>• Disponibilidad 24/7</li><li>• Respuesta en menos de 5 min</li></ul></div></div></div>
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-sm"><div className="flex items-start"><div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">3</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Transparencia de precios</h4><ul className="text-gray-600 space-y-2"><li>• Tarifas claras</li><li>• Presupuesto detallado</li><li>• Calidad-precio</li><li>• Promociones regulares</li></ul></div></div></div>
                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm"><div className="flex items-start"><div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1">4</div><div className="flex-1"><h4 className="font-bold text-xl text-gray-900 mb-3">Flexibilidad</h4><ul className="text-gray-600 space-y-2"><li>• Horarios adaptados</li><li>• Múltiples puntos</li><li>• Reserva flexible</li><li>• Cancelación suave</li></ul></div></div></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
