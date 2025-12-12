import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Star, Camera, Utensils, Car, Compass, Info } from 'lucide-react'
import StructuredData from '@/app/en/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Tangier Complete Guide 2024: What to See and Do | Nassoh Car',
  description: 'Discover Tangier with our complete 2024 guide: must-see attractions (Medina, Kasbah, Cap Spartel), best restaurants, recommended stays, practical tips, and detailed itineraries with a rental car. Everything you need for a perfect stay in Tangier.',
  keywords: 'Tangier guide, what to do Tangier, Tangier attractions, Tangier restaurants, Tangier accommodation, car rental Tangier, visit Tangier, Tangier medina, Tangier kasbah, Cap Spartel, Hercules Caves, Tangier itinerary, travel tips Tangier, Tangier tourism 2024',
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
    canonical: 'https://www.nassohcar.com/en/guides/tangier-complete-guide',
    languages: generateHreflangLinks('/en/guides/tangier-complete-guide')
  },
  openGraph: {
    title: 'Tangier Complete Guide 2024: Attractions, Restaurants and Practical Tips',
    description: 'Complete 2024 guide to visiting Tangier: must-see attractions, best restaurants, stays, detailed itineraries, and practical tips. Discover the Pearl of the Strait with your rental car.',
    url: 'https://www.nassohcar.com/en/guides/tangier-complete-guide',
    siteName: 'Nassoh Car - Car Rental in Morocco',
    images: [
      {
        url: 'https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg',
        width: 1200,
        height: 630,
        alt: 'Tangier complete guide 2024 - Attractions and visit tips'
      }
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Travel Guides',
    tags: ['Tangier', 'Travel Guide', 'Morocco Attractions', 'Tangier Tourism', 'Car Rental']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tangier Complete Guide 2024: What to See and Do',
    description: 'Complete guide to visiting Tangier: attractions, restaurants, stays and practical tips.',
    images: ['https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg'],
    creator: '@nassohcar'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  }
}

const attractions = [
  {
    name: 'Tangier Medina',
    description: 'Maze of narrow alleys, colorful souks and traditional architecture',
    duration: '3–4 hours',
    rating: 4.8,
    highlights: ['Grand Souk', 'Petit Socco Square', 'Sidi Bou Abib Mosque'],
    tips: 'Visit early in the morning to avoid crowds'
  },
  {
    name: 'Tangier Kasbah',
    description: 'Ancient citadel with panoramic views over the Strait of Gibraltar',
    duration: '2–3 hours',
    rating: 4.7,
    highlights: ['Kasbah Museum', 'Mendoubia Gardens', 'Café Hafa'],
    tips: 'Perfect spot for sunset'
  },
  {
    name: 'Cap Spartel',
    description: 'Northwestern tip of Africa with a historic lighthouse',
    duration: '1–2 hours',
    rating: 4.6,
    highlights: ['Cap Spartel Lighthouse', 'Atlantic Ocean views', 'Hercules Caves'],
    tips: 'Best accessed by car'
  },
  {
    name: 'Hercules Caves',
    description: 'Legendary sea caves with an opening onto the ocean',
    duration: '1 hour',
    rating: 4.5,
    highlights: ['Unique rock formation', 'Hercules legend', 'Nearby beach'],
    tips: 'Combine with Cap Spartel visit'
  },
  {
    name: 'Tangier Beach',
    description: 'Long sandy beach along Tangier Bay',
    duration: 'Half day',
    rating: 4.3,
    highlights: ['Seaside promenade', 'Water sports', 'Beach cafés'],
    tips: 'Ideal to relax after sightseeing'
  }
]

const restaurants = [
  {
    name: 'El Morocco Club',
    cuisine: 'Refined Moroccan',
    price: '€€€',
    specialty: 'Tagine with prunes and almonds',
    location: 'Kasbah'
  },
  {
    name: 'Saveur de Poisson',
    cuisine: 'Seafood',
    price: '€€',
    specialty: 'Grilled catch of the day',
    location: 'Fishing port'
  },
  {
    name: 'Café Central',
    cuisine: 'International',
    price: '€€',
    specialty: 'Fish pastilla',
    location: 'Place de France'
  },
  {
    name: 'Popular Restaurant',
    cuisine: 'Authentic local',
    price: '€',
    specialty: 'Friday couscous',
    location: 'Medina'
  }
]

const itineraries = [
  {
    day: 'Day 1',
    title: 'Medina Discovery',
    activities: [
      'Morning: Explore the Medina and souks',
      'Lunch: Restaurant at Petit Socco',
      'Afternoon: Visit the Kasbah and Museum',
      'Evening: Sunset at Café Hafa'
    ]
  },
  {
    day: 'Day 2',
    title: 'Cap Spartel and Caves',
    activities: [
      'Morning: Drive to Cap Spartel (30 min by car)',
      'Visit the lighthouse and surroundings',
      'Lunch: Restaurant with ocean views',
      'Afternoon: Explore the Hercules Caves',
      'Return: Relax on Tangier Beach'
    ]
  },
  {
    day: 'Day 3',
    title: 'Culture and Relaxation',
    activities: [
      'Morning: American Legation Museum',
      'Stroll through the Ville Nouvelle',
      'Lunch: International cuisine',
      'Afternoon: Shopping and traditional hammam',
      'Evening: Dinner at a seafood restaurant'
    ]
  }
]

const practicalTips = [
  {
    category: 'Transport',
    icon: Car,
    tips: [
      'Car rental recommended for Cap Spartel',
      'Paid parking downtown (5–10 DH/hour)',
      'Petit taxis available for short rides',
      'Avoid driving inside the medina (pedestrian)',
      'Rental service available from France'
    ]
  },
  {
    category: 'Safety',
    icon: Info,
    tips: [
      'Keep valuables secure',
      'Negotiate prices in souks',
      'Beware of fake guides',
      'Respect local customs'
    ]
  },
  {
    category: 'Best Time',
    icon: Clock,
    tips: [
      'Spring (Mar–May): ideal weather',
      'Autumn (Sep–Nov): pleasant temperatures',
      'Summer: hot but lively',
      'Winter: mild with occasional rain'
    ]
  }
]

export default function TangierCompleteGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[
        {
          '@type': 'Article',
          '@id': 'https://www.nassohcar.com/en/guides/tangier-complete-guide#article',
          headline: 'Tangier Complete Guide 2024: What to See and Do',
          description: 'Complete 2024 guide to visiting Tangier: must-see attractions (Medina, Kasbah, Cap Spartel), best restaurants, recommended stays, practical tips and detailed itineraries with a rental car.',
          image: 'https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg',
          author: {
            '@type': 'Organization',
            '@id': 'https://www.nassohcar.com#organization'
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://www.nassohcar.com#organization'
          },
          datePublished: '2024-01-01T00:00:00.000Z',
          dateModified: new Date().toISOString(),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.nassohcar.com/en/guides/tangier-complete-guide'
          },
          articleSection: 'Travel Guides',
          keywords: 'Tangier guide, attractions Tangier, restaurants Tangier, medina Tangier, kasbah Tangier, Cap Spartel, Hercules Caves, Tangier itinerary, travel tips Tangier, Tangier tourism 2024',
          wordCount: 2500,
          inLanguage: 'en-US',
          about: [
            {
              '@type': 'Place',
              name: 'Tangier',
              description: 'City in northern Morocco on the Strait of Gibraltar'
            }
          ]
        },
        {
          '@type': 'TravelGuide',
          '@id': 'https://www.nassohcar.com/en/guides/tangier-complete-guide#travelguide',
          name: 'Tangier Complete Guide 2024',
          description: 'Complete guide to visiting Tangier with attractions, restaurants, stays and practical tips',
          url: 'https://www.nassohcar.com/en/guides/tangier-complete-guide',
          author: {
            '@type': 'Organization',
            '@id': 'https://www.nassohcar.com#organization'
          },
          datePublished: '2024-01-01T00:00:00.000Z',
          dateModified: new Date().toISOString(),
          inLanguage: 'en-US',
          about: {
            '@type': 'Place',
            name: 'Tangier, Morocco',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 35.7595,
              longitude: -5.8340
            }
          },
          touristType: ['Cultural Tourist', 'Adventure Tourist', 'Family Tourist'],
          itinerary: [
            {
              '@type': 'TouristTrip',
              name: 'Day 1 - Medina Discovery',
              description: 'Explore the Medina, souks, Kasbah and sunset at Café Hafa'
            },
            {
              '@type': 'TouristTrip',
              name: 'Day 2 - Cap Spartel and Caves',
              description: 'Visit Cap Spartel, lighthouse, Hercules Caves and Tangier Beach'
            }
          ]
        },
        {
          '@type': 'Organization',
          '@id': 'https://www.nassohcar.com#organization',
          name: 'Nassoh Car',
          url: 'https://www.nassohcar.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.nassohcar.com/logo.png',
            width: 300,
            height: 100
          },
          description: 'Car rental in Morocco - Professional service and quality vehicles',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'MA',
            addressLocality: 'Morocco'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+212-XXX-XXXXXX',
            contactType: 'customer service',
            availableLanguage: ['French', 'Arabic', 'English']
          },
          sameAs: [
            'https://www.facebook.com/nassohcar',
            'https://www.instagram.com/nassohcar'
          ]
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.nassohcar.com/en/guides/tangier-complete-guide',
          url: 'https://www.nassohcar.com/en/guides/tangier-complete-guide',
          name: 'Tangier Complete Guide 2024: What to See and Do | Nassoh Car',
          description: 'Complete 2024 guide to visiting Tangier: must-see attractions, best restaurants, stays, detailed itineraries and practical tips.',
          inLanguage: 'en-US',
          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://www.nassohcar.com#website'
          },
          about: {
            '@type': 'Place',
            name: 'Tangier'
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: 'https://www.nassohcar.com/images/guides/guide-tanger-complet.jpg'
          },
          datePublished: '2024-01-01T00:00:00.000Z',
          dateModified: new Date().toISOString(),
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.nassohcar.com/en'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Guides',
                item: 'https://www.nassohcar.com/en/guides'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Tangier Complete Guide',
                item: 'https://www.nassohcar.com/en/guides/tangier-complete-guide'
              }
            ]
          }
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.nassohcar.com#website',
          url: 'https://www.nassohcar.com',
          name: 'Nassoh Car - Car Rental in Morocco',
          description: 'Car rental in Morocco with Nassoh Car. Quality vehicles, professional service and competitive prices for all your trips.',
          publisher: {
            '@type': 'Organization',
            '@id': 'https://www.nassohcar.com#organization'
          },
          inLanguage: 'en-US',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.nassohcar.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      ]} />
      
      <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/en" className="text-gray-500 hover:text-gray-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/en/guides" className="text-gray-500 hover:text-gray-700 transition-colors">
                Guides
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Tangier Complete Guide</li>
          </ol>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/en/guides" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to guides
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tangier Complete Guide
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover the Pearl of Northern Morocco: must-see attractions, authentic restaurants,
              quality stays and practical tips for an unforgettable trip.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🏛️ Attractions</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🍽️ Restaurants</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🗺️ Itineraries</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">⏱️ 12 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-12">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tangier at a Glance</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Northern Morocco, Strait of Gibraltar</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Recommended Duration</h3>
                  <p className="text-gray-600">At least 2–3 days</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Highlights</h3>
                  <p className="text-gray-600">Medina, Kasbah, Cap Spartel</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Must-See Attractions</h2>
            
            <div className="space-y-6">
              {attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{attraction.name}</h3>
                    <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold text-yellow-700">{attraction.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{attraction.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
                      <ul className="space-y-1">
                        {attraction.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">Duration: {attraction.duration}</span>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-blue-800 text-sm font-medium">💡 {attraction.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Where to Eat in Tangier</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                    <span className="text-green-600 font-semibold">{restaurant.price}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Utensils className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">{restaurant.cuisine}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">Specialty: {restaurant.specialty}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">{restaurant.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Suggested Itineraries</h2>
            
            <div className="space-y-6">
              {itineraries.map((itinerary, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{itinerary.day}</h3>
                      <p className="text-purple-600 font-semibold">{itinerary.title}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {itinerary.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <Compass className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Tips</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {practicalTips.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <section.icon className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">{section.category}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {section.tips.map((tip, idx) => (
                      <li key={idx} className="text-gray-700 text-sm">• {tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Car Rental in Tangier</h3>
                <p className="text-gray-600 mb-4">
                  Plan your trip in Morocco with our car rental service in Tangier.
                </p>
                <Link 
                  href="/en/car-rental-tangier" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn more <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Other Destinations</h3>
                <p className="text-gray-600 mb-4">
                  Explore our guides for other destinations in Morocco and our international services.
                </p>
                <Link 
                  href="/en/guides" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View all guides <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Explore Tangier with Freedom</h2>
              <p className="text-blue-100 mb-6">
                Rent a car to discover Tangier and its surroundings at your own pace.
              </p>
              <Link 
                href="/en/car-rental-tangier" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Rent a Car in Tangier
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
