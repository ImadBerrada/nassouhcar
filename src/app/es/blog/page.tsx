import { Metadata } from 'next'
import { Calendar, Tag, Search, ArrowRight, Car, Clock, Eye, Star, TrendingUp, Award, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb, { BreadcrumbStructuredData } from '@/app/es/components/Breadcrumb'
import StructuredData from '@/app/es/components/StructuredData'

export const metadata: Metadata = {
  title: 'Blog Alquiler de Coches en Tánger | Guías y Consejos | Nassoh Car',
  description: 'Guías y consejos sobre alquiler de coches en Tánger y Marruecos. Itinerarios, ahorro, seguridad y cultura local. Tu experto desde 2020.',
  keywords: 'blog nassoh car, guías alquiler coche tanger, consejos alquiler coche marruecos, itinerarios tanger, ahorro alquiler coche, seguridad carretera marruecos, cultura local tanger',
  openGraph: {
    title: 'Blog Alquiler de Coches en Tánger | Guías y Consejos | Nassoh Car',
    description: 'Guías y consejos de alquiler de coche en Tánger y Marruecos. Itinerarios, ahorro y seguridad.',
    type: 'website',
    url: 'https://www.nassohcar.com/es/blog',
    siteName: 'Nassoh Car',
    images: [{ url: '/tangier.webp', width: 1200, height: 630, alt: 'Blog alquiler coche Tánger - Nassoh Car' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Alquiler de Coches en Tánger | Guías y Consejos',
    description: 'Guías y consejos de alquiler de coche en Tánger y Marruecos.',
    images: ['/tangier.webp']
  },
  alternates: { canonical: 'https://www.nassohcar.com/es/blog' }
}

export default function BlogPageES() {
  const blogPosts = [
    {
      id: 1,
      citySlug: 'tangier',
      title: 'Alquiler en Tánger: 5 Tesoros Ocultos para 2025',
      excerpt: 'Descubre los secretos mejor guardados de Tánger con nuestro servicio económico. Desde las míticas Cuevas de Hércules hasta las playas del Cabo Espartel.',
      fullPreview: 'Explora lugares ocultos de Tánger con coches económicos, asistencia 24/7 y rutas locales. Itinerarios y parkings secretos que transforman tu viaje.',
      date: '23 Agosto 2025',
      category: 'Guías de Viaje',
      image: '/tangier.webp',
      readTime: '5 min de lectura',
      featured: true,
      views: '2.3k',
      rating: 4.9,
      tags: ['Tesoros ocultos', 'Tánger', 'Aventura']
    },
    {
      id: 2,
      citySlug: 'alquiler-coches-puerto-tanger',
      title: 'Alquiler en Puerto de Tánger - Servicio Económico 24/7',
      excerpt: 'Alquiler de coche en el puerto de Tánger con entrega gratuita. Flota moderna y asistencia 24/7.',
      fullPreview: 'Reserva tu coche directamente en el puerto de Tánger. Entrega gratuita, vehículos recientes y equipo dedicado.',
      date: '15 Diciembre 2024',
      category: 'Transporte',
      image: '/tanger service.webp',
      readTime: '6 min de lectura',
      featured: false,
      views: '1.2k',
      rating: 4.8,
      tags: ['Puerto Tánger', 'Entrega', 'Económico']
    },
    {
      id: 3,
      citySlug: 'alquiler-de-coches-en-tanger',
      title: 'Alquiler de Coches en Tánger Centro y Medina',
      excerpt: 'Alquila tu coche en el corazón de Tánger. Entrega gratuita y consejos personalizados.',
      fullPreview: 'Explora Tánger con nuestros vehículos disponibles en el centro. Consejos e itinerarios con asistencia local.',
      date: '14 Diciembre 2024',
      category: 'Exploración Urbana',
      image: '/tangier.webp',
      readTime: '5 min de lectura',
      featured: false,
      views: '980',
      rating: 4.7,
      tags: ['Centro', 'Medina', 'Explorar']
    },
    {
      id: 4,
      citySlug: 'alquilar-coche-barato-tanger',
      title: 'Alquiler de Coche Barato en Tánger - Mejores Precios 2024',
      excerpt: 'Encuentra ofertas de alquiler en Tánger. Coches económicos y promociones exclusivas.',
      fullPreview: 'Tarifas imbatibles para alquilar coche en Tánger. Ofertas especiales y consejos para ahorrar en tu transporte.',
      date: '13 Diciembre 2024',
      category: 'Ahorro',
      image: '/tangier.webp',
      readTime: '7 min de lectura',
      featured: false,
      views: '1.5k',
      rating: 4.9,
      tags: ['Precio', 'Económico', 'Promociones']
    },
    {
      id: 9,
      citySlug: 'alquiler-aeropuerto-tetuan',
      title: 'Alquiler en Aeropuerto de Tetuán - Servicio Express',
      excerpt: 'Alquiler de coche en el aeropuerto de Tetuán con recogida exprés.',
      fullPreview: 'Vehículos listos para recoger, procedimientos rápidos y equipo dedicado para una salida sin espera.',
      date: '8 Diciembre 2024',
      category: 'Transporte',
      image: '/tetouan.jpeg',
      readTime: '6 min de lectura',
      featured: false,
      views: '920',
      rating: 4.8,
      tags: ['Aeropuerto', 'Express', 'Tetuán']
    },
    {
      id: 10,
      citySlug: 'encontrar-alquiler-coches-tetuan',
      title: 'Encontrar Alquiler de Coches en Tetuán - Guía Práctica',
      excerpt: 'Guía para encontrar coche de alquiler en Tetuán. Comparativas y consejos.',
      fullPreview: 'Cómo elegir el coche de alquiler adecuado en Tetuán. Comparación de ofertas y recomendaciones locales.',
      date: '7 Diciembre 2024',
      category: 'Guías de Viaje',
      image: '/tetouan.jpeg',
      readTime: '7 min de lectura',
      featured: false,
      views: '1.1k',
      rating: 4.6,
      tags: ['Guía', 'Tetuán', 'Consejos']
    },
    {
      id: 11,
      citySlug: 'alquiler-coches-tetuan',
      title: 'Coche de Alquiler en Tetuán - Flota Completa',
      excerpt: 'Gran selección de coches en Tetuán: compactos, SUV y familiares.',
      fullPreview: 'Descubre nuestra flota completa para explorar la región del Rif.',
      date: '6 Diciembre 2024',
      category: 'Opiniones de Coches',
      image: '/tetouan.jpeg',
      readTime: '6 min de lectura',
      featured: false,
      views: '850',
      rating: 4.7,
      tags: ['Flota', 'Tetuán', 'Vehículos']
    },
    {
      id: 12,
      citySlug: 'mejores-empresas-alquiler-tanger',
      title: 'Mejores Empresas de Alquiler en Tánger - Excelencia',
      excerpt: 'Por qué somos una de las agencias mejor valoradas en Tánger.',
      fullPreview: 'Excelencia reconocida con 4.9/5 y más de 2000 opiniones positivas.',
      date: '5 Diciembre 2024',
      category: 'Reseñas de Coches',
      image: '/tangier.webp',
      readTime: '5 min de lectura',
      featured: false,
      views: '1.4k',
      rating: 4.9,
      tags: ['Excelencia', 'Opiniones', 'VIP']
    }
  ]

  const featuredProducts = [
    { name: 'DACIA SANDERO STEPWAY', price: '35,00 € / Día', image: '/cars/DACIA SANDERO STEPWAY.avif', rating: 4.8, features: ['GPS Incluido', 'Seguro Completo', 'Soporte 24/7'] },
    { name: 'TOYOTA YARIS', price: '30,00 € / Día', image: '/cars/TOYOTA YARIS.avif', rating: 4.9, features: ['Económico', 'Perfecto en Ciudad', 'Fácil de aparcar'] }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-yellow-400/30 to-amber-500/30 p-6 rounded-3xl backdrop-blur-sm border border-yellow-400/40 shadow-2xl">
              <Car className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            NASSOH CAR <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">Descubre los secretos de Marruecos con guías expertos y consejos de alquiler en Tánger</p>
          <div className="flex items-center justify-center space-x-8 text-yellow-400">
            <div className="flex items-center space-x-2"><Star className="h-6 w-6 fill-current" /><span className="text-xl font-bold">Puntuación 4.9/5</span></div>
            <div className="flex items-center space-x-2"><Eye className="h-6 w-6" /><span className="text-xl font-bold">50k+ Lectores</span></div>
            <div className="flex items-center space-x-2"><Award className="h-6 w-6" /><span className="text-xl font-bold">Guías Expertos</span></div>
          </div>
          <div className="mt-8 flex justify-center"><Breadcrumb items={[{ label: 'Blog' }]} /></div>
        </div>
      </div>

      <BreadcrumbStructuredData items={[{ label: 'Blog', href: '/es/blog' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200 mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center"><Tag className="h-8 w-8 mr-3 text-yellow-500" />Explora por Categoría</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/es/blog/guia-atracciones-tanger" className="group bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-200">
                  <div className="flex items-center space-x-4 mb-4"><div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center"><Star className="h-6 w-6 text-white" /></div><div><h3 className="font-bold text-slate-800 group-hover:text-green-600 transition-colors">Atracciones de Tánger</h3><p className="text-sm text-slate-600">Guía 2025</p></div></div>
                  <p className="text-slate-700 text-sm">Top atracciones de Tánger con consejos de alquiler para explorar la ciudad.</p>
                </Link>
                <Link href="/es/blog/alquiler-coches-tanger" className="group bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-yellow-200">
                  <div className="flex items-center space-x-4 mb-4"><div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center"><Car className="h-6 w-6 text-white" /></div><div><h3 className="font-bold text-slate-800 group-hover:text-yellow-600 transition-colors">Alquiler en Tánger</h3><p className="text-sm text-slate-600">Guía Completa</p></div></div>
                  <p className="text-slate-700 text-sm">Guía completa para alquilar coche en Tánger con los mejores consejos.</p>
                </Link>
                <Link href="/es/guides/guide-tanger-complet" className="group bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-teal-200">
                  <div className="flex items-center space-x-4 mb-4"><div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center"><ArrowRight className="h-6 w-6 text-white" /></div><div><h3 className="font-bold text-slate-800 group-hover:text-teal-600 transition-colors">Guía Tánger</h3><p className="text-sm text-slate-600">Versión Completa</p></div></div>
                  <p className="text-slate-700 text-sm">La guía definitiva de Tánger con todos los secretos para tu viaje.</p>
                </Link>
              </div>
            </div>

            {blogPosts.filter(p => p.featured).map((post) => (
              <div key={post.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 border border-slate-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-96">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-6 left-6 flex space-x-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-full font-black text-sm shadow-lg">DESTACADO</div>
                    <div className="bg-black/80 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-1"><TrendingUp className="h-4 w-4" /><span>{post.views} vistas</span></div>
                  </div>
                  <div className="absolute top-6 right-6 bg-black/80 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /><span>{post.rating}</span></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                    <div className="flex items-center space-x-6 text-white/90 text-sm mb-4">
                      <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full"><Calendar className="h-4 w-4" /><span>{post.date}</span></div>
                      <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full"><Tag className="h-4 w-4" /><span>{post.category}</span></div>
                      <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full"><Clock className="h-4 w-4" /><span>{post.readTime}</span></div>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-6">{post.tags.map((tag, i) => (<span key={i} className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">#{tag}</span>))}</div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">{post.title}</h2>
                  <p className="text-slate-600 text-xl leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8"><p className="text-slate-700 text-lg font-medium italic">{post.fullPreview}</p></div>
                  <Link href={`/es/blog/${post.citySlug}`} className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-black py-4 px-8 rounded-2xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                    Abrir la Guía Completa
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {blogPosts.filter(p => !p.featured).map((post) => (
                <div key={post.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 group">
                  <div className="relative h-56">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-full text-sm font-semibold flex items-center space-x-1"><Clock className="h-4 w-4" /><span>{post.readTime}</span></div>
                    <div className="absolute top-4 left-4 bg-white/90 text-slate-800 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /><span>{post.rating}</span></div>
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">{post.category}</div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-slate-500 text-sm mb-4"><div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>{post.date}</span></div><div className="flex items-center space-x-1"><Eye className="h-4 w-4" /><span>{post.views}</span></div></div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-yellow-600 transition-colors duration-300">{post.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg mb-6 border-l-4 border-yellow-400"><p className="text-slate-700 text-sm font-medium italic">💡 Vista previa: {post.fullPreview.substring(0, 100)}...</p></div>
                    <Link href={`/es/blog/${post.citySlug}`} className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                      🔓 Leer Historia Completa
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center"><Search className="h-6 w-6 mr-3 text-yellow-500" />Buscar Artículos</h3>
              <div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" /><input type="text" placeholder="Encuentra secretos de viaje..." className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300" /></div>
              <button className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">🔍 Buscar Ahora</button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center"><Tag className="h-6 w-6 mr-3 text-yellow-500" />Explora nuestros Guías</h3>
              <div className="text-center py-8"><p className="text-slate-600 mb-4">Descubre nuestras guías completas para tu viaje a Marruecos</p><Link href="/es/guides" className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg"><ArrowRight className="h-5 w-5 mr-2" />Ver todos los guías</Link></div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center"><Car className="h-6 w-6 mr-3 text-yellow-500" />Alquileres Destacados</h3>
              <div className="space-y-6">
                {featuredProducts.map((product, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-center space-x-4 p-4 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 rounded-xl transition-all duration-300">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image src={product.image} alt={product.name} fill className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-yellow-700 transition-colors duration-300">{product.name}</h4>
                        <div className="flex items-center space-x-2 mb-2"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /><span className="text-sm font-semibold text-slate-600">{product.rating}</span></div>
                        <p className="text-yellow-600 font-black text-lg">{product.price}</p>
                        <div className="flex flex-wrap gap-1 mt-2">{product.features.map((feature, idx) => (<span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{feature}</span>))}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/es/flota" className="block w-full mt-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-4 px-6 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 text-center transform hover:scale-105 shadow-lg">Ver Todos los Coches Económicos</Link>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-amber-500 rounded-3xl shadow-xl p-8 text-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-black mb-4 flex items-center"><Shield className="h-6 w-6 mr-3" />Secretos de Viaje VIP</h3>
                <p className="mb-6 text-black/90 font-semibold leading-relaxed">🎯 Únete a 10 000+ viajeros inteligentes y recibe consejos exclusivos, ofertas ocultas y lugares secretos cada semana.</p>
                <div className="space-y-4">
                  <input type="email" placeholder="Introduce tu email para acceso VIP" className="w-full px-6 py-4 rounded-xl border-0 focus:ring-4 focus:ring-black/20 bg-white/95 font-semibold placeholder-slate-500" />
                  <button className="w-full bg-black text-white font-bold py-4 px-6 rounded-xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg">🔥 Obtener Acceso Instantáneo</button>
                </div>
                <p className="text-xs text-black/70 mt-3 text-center">✅ Sin spam • ✅ Cancelar en cualquier momento • ✅ 100% Gratis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 border-white">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-lg">💬 ¿Necesitas ayuda? ¡Chat en vivo!</span>
          </div>
        </div>
      </div>
      <StructuredData type="Blog" countryTarget="MA" language="es" />
    </div>
  )
}
