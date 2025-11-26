import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Star, Mountain, Waves, Building, Compass } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import Breadcrumb from '@/components/Breadcrumb'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Itinéraires Maroc 2024 : Circuits Complets de 7 à 15 Jours | Nassoh Car',
  description: 'Découvrez les meilleurs itinéraires au Maroc 2024 : circuits de 7, 10 et 15 jours incluant Marrakech, Fès, Sahara, côte atlantique. Guides détaillés avec conseils pratiques et locations de voiture.',
  keywords: 'itinéraires Maroc, circuits Maroc, voyage Maroc, road trip Maroc, itinéraire 7 jours Maroc, circuit 10 jours Maroc, voyage 15 jours Maroc, Marrakech Fès Sahara, côte atlantique Maroc, location voiture Maroc',
  authors: [{ name: 'Nassoh Car' }],
  creator: 'Nassoh Car',
  publisher: 'Nassoh Car',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nassohcar.com'),
  alternates: {
    canonical: 'https://www.nassohcar.com/guides/morocco-itineraries',
    languages: generateHreflangLinks('/guides/morocco-itineraries')
  },
  openGraph: {
    title: 'Itinéraires Maroc 2024 : Circuits Complets de 7 à 15 Jours | Nassoh Car',
    description: 'Découvrez les meilleurs itinéraires au Maroc 2024 : circuits de 7, 10 et 15 jours incluant Marrakech, Fès, Sahara, côte atlantique. Guides détaillés avec conseils pratiques et locations de voiture.',
    type: 'article',
    url: 'https://www.nassohcar.com/guides/morocco-itineraries',
    siteName: 'Nassoh Car',
    images: [
      {
        url: 'https://www.nassohcar.com/tangier.webp',
        width: 1200,
        height: 630,
        alt: 'Itinéraires Maroc'
      }
    ]
  }
}

export default function MoroccoItinerariesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Morocco Itineraries 2024: Complete Travel Routes & Road Trip Plans",
    "description": "Discover the best Morocco itineraries: 7-day, 10-day, and 14-day travel routes covering imperial cities, Sahara desert, Atlas mountains, and coastal regions.",
    "author": {
      "@type": "Organization",
      "name": "Nassoh Car"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nassoh Car",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nassohcar.com/nassouh.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-01",
    "url": "https://www.nassohcar.com/guides/morocco-itineraries",
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.nassohcar.com/guides/morocco-itineraries"
    }
  }

  const itineraries = [
    {
      title: "7-Day Classic Morocco",
      duration: "7 days",
      difficulty: "Easy",
      highlights: ["Imperial Cities", "Sahara Desert", "Atlas Mountains"],
      description: "Perfect introduction to Morocco covering the essential destinations",
      route: [
        { day: 1, city: "Casablanca", activities: ["Hassan II Mosque", "Corniche", "City center"] },
        { day: 2, city: "Rabat → Fes", activities: ["Hassan Tower", "Kasbah Oudayas", "Fes Medina"] },
        { day: 3, city: "Fes", activities: ["Medina exploration", "Tanneries", "Bou Inania Madrasa"] },
        { day: 4, city: "Fes → Merzouga", activities: ["Middle Atlas", "Ifrane", "Camel trekking"] },
        { day: 5, city: "Merzouga → Ouarzazate", activities: ["Sahara sunrise", "Todra Gorges", "Dades Valley"] },
        { day: 6, city: "Ouarzazate → Marrakech", activities: ["Ait Benhaddou", "High Atlas crossing"] },
        { day: 7, city: "Marrakech", activities: ["Jemaa el-Fnaa", "Majorelle Garden", "Souks"] }
      ],
      tips: [
        "Book desert camp in advance",
        "Pack warm clothes for desert nights",
        "Allow extra time in Fes medina"
      ]
    },
    {
      title: "10-Day Grand Tour",
      duration: "10 days",
      difficulty: "Moderate",
      highlights: ["All Imperial Cities", "Sahara Experience", "Coastal Towns", "Mountain Villages"],
      description: "Comprehensive tour covering Morocco's diverse landscapes and cultures",
      route: [
        { day: 1, city: "Casablanca", activities: ["Arrival", "Hassan II Mosque", "Corniche walk"] },
        { day: 2, city: "Casablanca → Chefchaouen", activities: ["Blue Pearl", "Rif Mountains", "Medina stroll"] },
        { day: 3, city: "Chefchaouen → Fes", activities: ["Volubilis ruins", "Meknes", "Fes arrival"] },
        { day: 4, city: "Fes", activities: ["Full day medina tour", "Tanneries", "Artisan workshops"] },
        { day: 5, city: "Fes → Merzouga", activities: ["Ifrane", "Cedar forests", "Desert arrival"] },
        { day: 6, city: "Merzouga", activities: ["Camel trekking", "Desert camp", "Sunrise viewing"] },
        { day: 7, city: "Merzouga → Ouarzazate", activities: ["Todra Gorges", "Dades Valley", "Skoura oasis"] },
        { day: 8, city: "Ouarzazate → Marrakech", activities: ["Ait Benhaddou", "Atlas crossing", "Marrakech arrival"] },
        { day: 9, city: "Marrakech", activities: ["Medina tour", "Majorelle Garden", "Bahia Palace"] },
        { day: 10, city: "Marrakech → Essaouira", activities: ["Coastal drive", "Medina", "Beach time"] }
      ],
      tips: [
        "Consider internal flights to save time",
        "Book accommodations early in peak season",
        "Hire local guides in major cities"
      ]
    },
    {
      title: "14-Day Complete Morocco",
      duration: "14 days",
      difficulty: "Comprehensive",
      highlights: ["Every Region", "Hidden Gems", "Cultural Immersion", "Adventure Activities"],
      description: "Ultimate Morocco experience covering all regions and hidden treasures",
      route: [
        { day: 1, city: "Tangier", activities: ["Arrival", "Medina", "Cap Spartel"] },
        { day: 2, city: "Tangier → Chefchaouen", activities: ["Rif Mountains", "Blue city exploration"] },
        { day: 3, city: "Chefchaouen → Fes", activities: ["Volubilis", "Meknes", "Fes arrival"] },
        { day: 4, city: "Fes", activities: ["Medina deep dive", "Artisan quarters", "Traditional hammam"] },
        { day: 5, city: "Fes → Midelt", activities: ["Middle Atlas", "Ifrane", "Cedar forests"] },
        { day: 6, city: "Midelt → Merzouga", activities: ["Ziz Valley", "Desert arrival", "Sunset camel ride"] },
        { day: 7, city: "Merzouga", activities: ["Desert exploration", "Nomad families", "Stargazing"] },
        { day: 8, city: "Merzouga → Tinghir", activities: ["Todra Gorges", "Oasis exploration"] },
        { day: 9, city: "Tinghir → Ouarzazate", activities: ["Dades Valley", "Rose Valley", "Skoura"] },
        { day: 10, city: "Ouarzazate → Marrakech", activities: ["Ait Benhaddou", "High Atlas", "Marrakech"] },
        { day: 11, city: "Marrakech", activities: ["Full city exploration", "Gardens", "Souks"] },
        { day: 12, city: "Marrakech → Essaouira", activities: ["Coastal route", "Argan cooperatives"] },
        { day: 13, city: "Essaouira", activities: ["Medina", "Beach", "Fishing port", "Windsurfing"] },
        { day: 14, city: "Essaouira → Casablanca", activities: ["Return journey", "Final shopping"] }
      ],
      tips: [
        "Allow flexibility in schedule",
        "Mix of luxury and authentic stays",
        "Include rest days in major cities"
      ]
    }
  ]

  const themes = [
    {
      title: "Cultural Heritage",
      icon: Building,
      description: "Explore imperial cities, ancient medinas, and UNESCO World Heritage sites",
      destinations: ["Fes", "Meknes", "Marrakech", "Rabat", "Volubilis", "Ait Benhaddou"]
    },
    {
      title: "Desert Adventure",
      icon: Compass,
      description: "Experience the magic of the Sahara with camel treks and desert camps",
      destinations: ["Merzouga", "Zagora", "M'hamid", "Erg Chebbi", "Erg Chigaga"]
    },
    {
      title: "Mountain Escapes",
      icon: Mountain,
      description: "Discover the Atlas Mountains, Berber villages, and scenic valleys",
      destinations: ["Imlil", "Ourika Valley", "Ouzoud Falls", "Dades Valley", "Todra Gorges"]
    },
    {
      title: "Coastal Journeys",
      icon: Waves,
      description: "Relax on Atlantic beaches and explore charming coastal towns",
      destinations: ["Essaouira", "Agadir", "Taghazout", "Asilah", "Oualidia"]
    }
  ]

  const planningTips = [
    {
      category: "Best Time to Visit",
      tips: [
        "Spring (March-May): Perfect weather, blooming landscapes",
        "Fall (September-November): Comfortable temperatures, clear skies",
        "Winter (December-February): Mild days, cold nights in mountains",
        "Summer (June-August): Hot inland, pleasant on coast"
      ]
    },
    {
      category: "Transportation",
      tips: [
        "Rent a car for maximum flexibility and access to remote areas",
        "Consider 4WD for mountain and desert regions",
        "Domestic flights available between major cities",
        "Trains connect main cities efficiently"
      ]
    },
    {
      category: "Accommodation",
      tips: [
        "Book riads in advance, especially in Marrakech and Fes",
        "Desert camps offer unique Sahara experience",
        "Mix luxury and budget options for varied experience",
        "Consider location for easy medina access"
      ]
    },
    {
      category: "Cultural Etiquette",
      tips: [
        "Dress modestly, especially in religious sites",
        "Learn basic Arabic or French phrases",
        "Respect local customs and traditions",
        "Bargaining is expected in markets"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[structuredData]} />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/guides' },
          { label: 'Morocco Itineraries', href: '/guides/morocco-itineraries' }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Morocco Itineraries</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Morocco with our carefully crafted itineraries, from quick getaways to comprehensive adventures
          </p>
        </div>

        {/* Travel Themes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Travel Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => {
              const IconComponent = theme.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{theme.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{theme.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {theme.destinations.slice(0, 3).map((dest, destIndex) => (
                      <span key={destIndex} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Itineraries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Itineraries</h2>
          <div className="space-y-8">
            {itineraries.map((itinerary, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 mr-4">{itinerary.title}</h3>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {itinerary.duration}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          itinerary.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          itinerary.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {itinerary.difficulty}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{itinerary.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {itinerary.highlights.map((highlight, highlightIndex) => (
                        <span key={highlightIndex} className="flex items-center text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                          <Star className="h-3 w-3 mr-1" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Route Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Day-by-Day Route</h4>
                    <div className="space-y-3">
                      {itinerary.route.map((day, dayIndex) => (
                        <div key={dayIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                            {day.day}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{day.city}</h5>
                            <p className="text-sm text-gray-600">{day.activities.join(', ')}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Travel Tips</h4>
                    <ul className="space-y-2">
                      {itinerary.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planning Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Planning Your Trip</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {planningTips.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-1 h-1 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Itinerary CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-center text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Itinerary?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let us help you create the perfect Morocco adventure tailored to your interests and schedule
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors mr-4"
          >
            Contact Us
            <ArrowLeft className="h-5 w-5 ml-2" />
          </Link>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Morocco Adventure!</h2>
          <p className="text-xl mb-6 opacity-90">
            Rent a reliable vehicle to explore Morocco at your own pace and discover hidden gems
          </p>
          <Link 
            href="/fleet"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Our Fleet
            <ArrowLeft className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}