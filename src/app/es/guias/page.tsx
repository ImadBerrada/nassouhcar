import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Car, Shield, Clock, Star, Users, Route } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guías de Viaje y Alquiler de Coches en Marruecos | Nassoh Car',
  description: 'Descubra nuestras guías completas para el alquiler de coches en Marruecos. Consejos de expertos, itinerarios, atracciones y trucos para explorar Tánger, Casablanca, Marrakech y Fez.',
  keywords: 'guías viaje Marruecos, alquiler coche Marruecos, consejos viaje, itinerarios Marruecos, atracciones Marruecos, guía Tánger, guía Casablanca, guía Marrakech, guía Fez',
  openGraph: {
    title: 'Guías de Viaje y Alquiler de Coches en Marruecos | Nassoh Car',
    description: 'Guías completas para explorar Marruecos en coche de alquiler. Consejos de expertos e itinerarios.',
    url: 'https://www.nassohcar.com/es/guias',
    siteName: 'Nassoh Car',
    images: [
      {
        url: 'https://www.nassohcar.com/guides-morocco.jpg',
        width: 1200,
        height: 630,
        alt: 'Guías de viaje Marruecos'
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/es/guias'
  }
}

const guides = [
  {
    id: 1,
    title: "Guía Completa de Tánger",
    description: "Descubra los secretos de Tánger con nuestra guía detallada. Atracciones, restaurantes y consejos de conducción.",
    image: "/tangier.webp",
    category: "Ciudades Imperiales",
    readTime: "15 min",
    highlights: ["Medina de Tánger", "Cabo Espartel", "Cuevas de Hércules", "Puerto Tánger Med"],
    slug: "guia-tanger-completa"
  },
  {
    id: 2,
    title: "Conducir en Marruecos: Guía Práctica",
    description: "Todo lo que necesita saber para conducir con seguridad en Marruecos. Código de circulación, peajes y consejos.",
    image: "/cars/DACIA LOGAN.png",
    category: "Consejos Conducción",
    readTime: "12 min",
    highlights: ["Código de circulación", "Peajes", "Gasolineras", "Seguridad vial"],
    slug: "conducir-en-marruecos"
  },
  {
    id: 3,
    title: "Itinerarios Imprescindibles",
    description: "Los circuitos más bellos de Marruecos en coche. De Tánger a las montañas del Atlas, explore el reino.",
    image: "/tangier.webp",
    category: "Itinerarios",
    readTime: "20 min",
    highlights: ["Circuito Imperial", "Ruta del Atlas", "Costa Atlántica", "Desierto del Sahara"],
    slug: "itinerarios-marruecos"
  },
  {
    id: 4,
    title: "Alquiler de Coches: Consejos de Experto",
    description: "Nuestros consejos para elegir bien su coche de alquiler en Marruecos. Seguros, documentos y trucos.",
    image: "/casa.jpg",
    category: "Alquiler Coche",
    readTime: "10 min",
    highlights: ["Documentos requeridos", "Tipos de seguro", "Inspección vehículo", "Ahorros"],
    slug: "consejos-alquiler-coches-marruecos"
  },
  {
    id: 5,
    title: "Atracciones Ocultas de Marruecos",
    description: "Descubra los tesoros ocultos de Marruecos accesibles solo en coche. Lugares secretos y auténticos.",
    image: "/tangier.webp",
    category: "Descubrimientos",
    readTime: "18 min",
    highlights: ["Playas secretas", "Pueblos bereberes", "Cascadas", "Miradores"],
    slug: "atracciones-ocultas-marruecos"
  },
  {
    id: 6,
    title: "Presupuesto Viaje Marruecos",
    description: "Planifique su presupuesto para un viaje a Marruecos. Costes de alquiler, gasolina, alojamiento y comidas.",
    image: "/cars/peugeot.png",
    category: "Presupuesto y Ahorro",
    readTime: "8 min",
    highlights: ["Costes alquiler", "Precio gasolina", "Alojamiento", "Restaurantes"],
    slug: "presupuesto-viaje-marruecos"
  }
]

const categories = [
  { name: "Ciudades Imperiales", count: 4, icon: MapPin },
  { name: "Consejos Conducción", count: 6, icon: Car },
  { name: "Itinerarios", count: 8, icon: Route },
  { name: "Alquiler Coche", count: 12, icon: Shield },
  { name: "Descubrimientos", count: 5, icon: Star },
  { name: "Presupuesto y Ahorro", count: 7, icon: Users }
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/tangier.webp"
            alt="Guías viaje Marruecos"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Guías de <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Viaje</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Descubra Marruecos con nuestras guías expertas. Consejos de alquiler, itinerarios imprescindibles 
              y secretos locales para un viaje inolvidable.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Actualizado regularmente
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Consejos de expertos locales
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Información verificada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Categorías de <span className="text-amber-400">Guías</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <IconComponent className="h-8 w-8 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-2 text-sm">{category.name}</h3>
                  <p className="text-gray-400 text-xs">{category.count} guías</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Nuestras <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Guías</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore nuestra colección de guías detalladas para descubrir Marruecos con total tranquilidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <article key={guide.id} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {guide.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                      {guide.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {guide.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-amber-400 text-xs font-semibold mb-2">Puntos clave:</h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className="bg-amber-400/10 text-amber-400 px-2 py-1 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                      {guide.highlights.length > 2 && (
                        <span className="text-gray-400 text-xs px-2 py-1">
                          +{guide.highlights.length - 2} otros
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/es/guias/${guide.slug}`} 
                    className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors"
                  >
                    Leer la Guía
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500/10 to-yellow-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ¿Listo para Explorar <span className="text-amber-400">Marruecos</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Reserve su coche de alquiler ahora y comience su aventura marroquí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/es" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Reservar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/es/contacto" 
              className="inline-flex items-center px-8 py-4 border-2 border-amber-400 text-amber-400 font-bold rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300"
            >
              Contáctenos
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
