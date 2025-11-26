import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Car, Shield, Clock, Star, Users, Route } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guides de Voyage & Location Voiture Maroc | Nassoh Car',
  description: 'Découvrez nos guides complets pour la location de voiture au Maroc. Conseils d\'experts, itinéraires, attractions et astuces pour explorer Tanger, Casablanca, Marrakech et Fez.',
  keywords: 'guides voyage Maroc, location voiture Maroc, conseils voyage, itinéraires Maroc, attractions Maroc, guide Tanger, guide Casablanca, guide Marrakech, guide Fez',
  openGraph: {
    title: 'Guides de Voyage & Location Voiture Maroc | Nassoh Car',
    description: 'Guides complets pour explorer le Maroc en voiture de location. Conseils d\'experts et itinéraires.',
    url: 'https://www.nassohcar.com/guides',
    siteName: 'Nassoh Car',
    images: [
      {
        url: 'https://www.nassohcar.com/guides-morocco.jpg',
        width: 1200,
        height: 630,
        alt: 'Guides de voyage Maroc'
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/guides'
  }
}

const guides = [
  {
    id: 1,
    title: "Guide Complet de Tanger",
    description: "Découvrez les secrets de Tanger avec notre guide détaillé. Attractions, restaurants, et conseils de conduite.",
    image: "/tangier.webp",
    category: "Villes Impériales",
    readTime: "15 min",
    highlights: ["Médina de Tanger", "Cap Spartel", "Grottes d'Hercule", "Port Tanger Med"],
    slug: "guide-tanger-complet"
  },
  {
    id: 2,
    title: "Conduire au Maroc : Guide Pratique",
    description: "Tout ce qu'il faut savoir pour conduire en sécurité au Maroc. Code de la route, péages, et conseils.",
    image: "/cars/DACIA LOGAN.png",
    category: "Conseils Conduite",
    readTime: "12 min",
    highlights: ["Code de la route", "Péages", "Stations-service", "Sécurité routière"],
    slug: "conduire-maroc-guide"
  },
  {
    id: 3,
    title: "Itinéraires Incontournables",
    description: "Les plus beaux circuits du Maroc en voiture. De Tanger aux montagnes de l'Atlas, explorez le royaume.",
    image: "/tangier.webp",
    category: "Itinéraires",
    readTime: "20 min",
    highlights: ["Circuit Impérial", "Route de l'Atlas", "Côte Atlantique", "Désert du Sahara"],
    slug: "itineraires-maroc"
  },
  {
    id: 4,
    title: "Location Voiture : Conseils d'Expert",
    description: "Nos conseils pour bien choisir votre voiture de location au Maroc. Assurance, documents, et astuces.",
    image: "/casa.jpg",
    category: "Location Voiture",
    readTime: "10 min",
    highlights: ["Documents requis", "Types d'assurance", "Inspection véhicule", "Économies"],
    slug: "conseils-location-voiture"
  },
  {
    id: 5,
    title: "Attractions Cachées du Maroc",
    description: "Découvrez les trésors cachés du Maroc accessibles uniquement en voiture. Lieux secrets et authentiques.",
    image: "/tangier.webp",
    category: "Découvertes",
    readTime: "18 min",
    highlights: ["Plages secrètes", "Villages berbères", "Cascades", "Points de vue"],
    slug: "attractions-cachees-maroc"
  },
  {
    id: 6,
    title: "Budget Voyage Maroc",
    description: "Planifiez votre budget pour un voyage au Maroc. Coûts de location, essence, hébergement et repas.",
    image: "/cars/peugeot.png",
    category: "Budget & Économies",
    readTime: "8 min",
    highlights: ["Coûts location", "Prix essence", "Hébergement", "Restaurants"],
    slug: "budget-voyage-maroc"
  }
]

const categories = [
  { name: "Villes Impériales", count: 4, icon: MapPin },
  { name: "Conseils Conduite", count: 6, icon: Car },
  { name: "Itinéraires", count: 8, icon: Route },
  { name: "Location Voiture", count: 12, icon: Shield },
  { name: "Découvertes", count: 5, icon: Star },
  { name: "Budget & Économies", count: 7, icon: Users }
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
            alt="Guides voyage Maroc"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Guides de <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Voyage</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Découvrez le Maroc avec nos guides experts. Conseils de location, itinéraires incontournables, 
              et secrets locaux pour un voyage inoubliable.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Mis à jour régulièrement
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Conseils d'experts locaux
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Informations vérifiées
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Catégories de <span className="text-amber-400">Guides</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <IconComponent className="h-8 w-8 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-2 text-sm">{category.name}</h3>
                  <p className="text-gray-400 text-xs">{category.count} guides</p>
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
              Nos <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Guides</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explorez notre collection de guides détaillés pour découvrir le Maroc en toute sérénité.
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
                    <h4 className="text-amber-400 text-xs font-semibold mb-2">Points clés :</h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className="bg-amber-400/10 text-amber-400 px-2 py-1 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                      {guide.highlights.length > 2 && (
                        <span className="text-gray-400 text-xs px-2 py-1">
                          +{guide.highlights.length - 2} autres
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/guides/${guide.slug}`} 
                    className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 transition-colors"
                  >
                    Lire le Guide
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
            Prêt à Explorer le <span className="text-amber-400">Maroc</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Réservez votre voiture de location dès maintenant et commencez votre aventure marocaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Réserver Maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-amber-400 text-amber-400 font-bold rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}