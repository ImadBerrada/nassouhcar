import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Star, Car, ArrowLeft, MapPin, Navigation } from 'lucide-react'
import Breadcrumb, { BreadcrumbStructuredData } from '@/app/en/components/Breadcrumb'
import StructuredData from '@/app/en/components/StructuredData'

interface CityPageProps {
  params: Promise<{
    city: string
  }>
}

interface CityData {
  name: string
  title: string
  description: string
  image: string
  readTime: string
  category: string
  date: string
  content: {
    introduction: string
    sections: {
      title: string
      content: string
      tips?: string[]
    }[]
    conclusion: string
  }
  highlights: string[]
  carRentalTips: string[]
  attractions: {
    name: string
    description: string
    distance: string
  }[]
}

const cityData: Record<string, CityData> = {
  tangier: {
    name: 'Tangier',
    title: 'Tangier Car Rental: 5 Hidden Gems to Explore in 2025',
    description: 'Discover Tangier’s best-kept secrets with an affordable rental car and local tips.',
    image: '/tangier.webp',
    readTime: '6 min read',
    category: 'Travel Guides',
    date: 'January 2025',
    content: {
      introduction:
        "Tangier, gateway between Europe and Africa, becomes truly magical with your own vehicle. From ancient caves to quiet beaches, unlock places only locals know.",
      sections: [
        {
          title: '1. Hercules Caves – Ancient Mysteries',
          content:
            "Just 14 km from Tangier city center, the Hercules Caves offer a mystical experience. The natural opening facing the Atlantic resembles the map of Africa.",
          tips: ['Visit early to avoid crowds', 'Bring a small flashlight', 'Parking available at the entrance']
        },
        {
          title: '2. Cap Spartel – Where Two Seas Meet',
          content:
            "Drive to the north‑western tip of Africa where the Atlantic meets the Mediterranean. The historic lighthouse and coastal views make it perfect for sunset photography.",
          tips: ['Best at sunset', 'Coffee spots nearby', 'Easy 20‑minute drive from downtown']
        },
        {
          title: '3. Asilah – Artist’s Paradise',
          content:
            "About 46 km south of Tangier, Asilah is famous for whitewashed walls and colorful murals. The medina has Portuguese fortifications and a relaxing seaside vibe.",
          tips: ['Annual Arts Festival in summer', 'Free parking near the medina', 'Try fresh seafood']
        },
        {
          title: '4. Tetouan – The White Dove',
          content:
            "Around 60 km from Tangier, Tetouan offers authentic culture and one of Morocco’s best‑preserved medinas with Andalusian architecture.",
          tips: ['Guided tours available', 'Traditional hammams for relaxation', 'Great leather and textile crafts']
        },
        {
          title: '5. Chefchaouen – The Blue Pearl',
          content:
            "Two hours through the Rif mountains lead to Morocco’s iconic blue city. The journey is as beautiful as the destination, with viewpoints along the way.",
          tips: ['Mountain roads require careful driving', 'Stay overnight for the full experience', 'Best light early morning']
        }
      ],
      conclusion:
        'With a rental car, Tangier becomes your gateway to extraordinary northern Morocco destinations. Each spot offers unique experiences beyond public transport.'
    },
    highlights: [
      'Explore 5 hidden gems around Tangier',
      'Detailed driving directions and parking info',
      'Insider tips from local experts',
      'Best times to visit each spot'
    ],
    carRentalTips: [
      'Book in advance for better rates',
      'Choose a vehicle suitable for mountain roads',
      'GPS navigation is essential',
      'Keep your license and ID with you',
      'Fuel stations available on all routes'
    ],
    attractions: [
      { name: "Hercules Caves", description: 'Ancient caves with Atlantic views', distance: '14 km from city center' },
      { name: 'Cap Spartel', description: 'Lighthouse at Africa’s north‑west tip', distance: '20 km from city center' },
      { name: 'Asilah', description: 'Coastal art town with murals', distance: '46 km south of Tangier' },
      { name: 'Tetouan', description: 'UNESCO‑listed medina and Andalusian heritage', distance: '60 km from Tangier' },
      { name: 'Chefchaouen', description: 'Iconic blue city in the Rif', distance: '120 km (about 2 hours)' }
    ]
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const resolved = await params
  const city = cityData[resolved.city]
  if (!city) {
    return {
      title: 'City not found | Nassoh Car Blog',
      description: 'This destination does not exist in our guide.'
    }
  }
  return {
    title: `${city.title} | Nassoh Car`,
    description: city.description,
    keywords: `${resolved.city}, car rental, Tangier guide, Nassoh Car, Morocco travel`,
    openGraph: {
      title: `${city.title} | Nassoh Car`,
      description: city.description,
      type: 'article',
      url: `https://www.nassohcar.com/en/blog/${resolved.city}`,
      images: [{ url: city.image }]
    },
    alternates: {
      canonical: `https://www.nassohcar.com/en/blog/${resolved.city}`
    }
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const resolved = await params
  const city = cityData[resolved.city]
  if (!city) {
    notFound()
  }

  const structuredData = {
    title: city.title,
    description: city.description,
    image: `https://www.nassohcar.com${city.image}`,
    url: `https://www.nassohcar.com/en/blog/${resolved.city}`,
    datePublished: city.date,
    dateModified: new Date().toISOString().split('T')[0],
    keywords: `${resolved.city}, car rental, travel guide, Nassoh Car, ${city.name}, Morocco, attractions, road trip`
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Home', href: '/en' }, { label: 'Blog', href: '/en/blog' }, { label: city.name }]} />
        </div>
      </div>

      <div className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-700">
        <Image src={city.image} alt={city.title} fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <div className="flex items-center mb-3 text-sm text-gray-200">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{city.date}</span>
              <span className="mx-3">•</span>
              <Clock className="h-4 w-4 mr-2" />
              <span>{city.readTime}</span>
              <span className="mx-3">•</span>
              <Star className="h-4 w-4 mr-2 text-amber-400" />
              <span>{city.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{city.title}</h1>
            <p className="text-gray-200 max-w-3xl">{city.description}</p>
            <div className="mt-6 flex gap-4">
              <Link href="/en" className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-flex items-center">
                <Car className="h-5 w-5 mr-2" />
                Book Now
              </Link>
              <Link href="/en/blog" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Read More Guides
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {city.highlights.map((h, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-3">
                <Navigation className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Highlight</h3>
              </div>
              <p className="text-gray-700 text-sm">{h}</p>
            </div>
          ))}
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8">{city.content.introduction}</p>
          {city.content.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-700 mb-4">{section.content}</p>
              {section.tips && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-700 mb-2">Tips</h3>
                  <ul className="list-disc ml-5 text-gray-700">
                    {section.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Conclusion</h3>
            <p className="text-gray-700">{city.content.conclusion}</p>
          </div>
        </article>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Car Rental Tips</h3>
            <ul className="space-y-2 text-gray-700">
              {city.carRentalTips.map((t, i) => (
                <li key={i} className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Attractions</h3>
            <div className="space-y-3">
              {city.attractions.map((a, i) => (
                <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">{a.name}</p>
                    <p className="text-gray-700 text-sm">{a.description} • {a.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BreadcrumbStructuredData items={[{ label: 'Blog', href: '/en/blog' }, { label: city.title }]} />
      <StructuredData type="Article" data={structuredData} />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }))
}
