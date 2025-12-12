import { Metadata } from 'next'
import { Calendar, Tag, ArrowRight, Car, Clock, Eye, Star } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/app/en/components/StructuredData'

export const metadata: Metadata = {
  title: 'Tangier Car Rental Blog | Guides & Tips | Nassoh Car',
  description: 'Guides and tips for car rental in Tangier and Morocco. Itineraries, savings, safety, local culture. Your expert since 2010.',
  keywords: 'nassoh car blog, tangier car rental guides, morocco car rental tips, tangier itineraries, save on car rental, road safety morocco, tangier local culture',
  openGraph: {
    title: 'Tangier Car Rental Blog | Guides & Tips | Nassoh Car',
    description: 'Guides and tips for car rental in Tangier and Morocco. Itineraries, savings, safety, local culture.',
    type: 'website',
    url: 'https://www.nassohcar.com/en/blog',
    siteName: 'Nassoh Car',
    images: [{ url: '/tangier.webp', width: 1200, height: 630, alt: 'Tangier Car Rental Blog - Nassoh Car' }]
  },
  alternates: { canonical: 'https://www.nassohcar.com/en/blog' }
}

export default function BlogPageEN() {
  const featured = [
    { href: '/en/blog/car-rental-tangier-port', title: 'Car Rental at Tangier Port – Express & Free Delivery', date: 'Jan 2025', readTime: '6 min', tag: 'Transport' },
    { href: '/en/blog/car-rental-tangier-port-med', title: 'Car Rental at Tangier Med Port – Ferries 24/7', date: 'Jan 2025', readTime: '8 min', tag: 'Transport' },
    { href: '/en/blog/best-rated-car-rentals-tangier', title: 'Best Rated Car Rentals in Tangier – 4.9/5', date: 'Jan 2025', readTime: '8 min', tag: 'Car Reviews' },
    { href: '/en/blog/cheap-car-rental-tangier', title: 'Cheap Car Rental – From 170 MAD/day', date: 'Jan 2025', readTime: '6 min', tag: 'Savings' },
    { href: '/en/blog/car-rental-tips-tangier', title: 'Car Rental Tips – Drive Smart in Tangier', date: 'Jan 2025', readTime: '7 min', tag: 'Tips' }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Nassoh Car Blog",
    "url": "https://www.nassohcar.com/en/blog",
    "inLanguage": "en",
    "about": "Car rental guides and tips for Tangier and Morocco"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[structuredData]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Nassoh Car Blog</h1>
          <p className="text-xl text-gray-600">Guides and tips for car rental in Tangier and Morocco</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((post, idx) => (
            <Link key={idx} href={post.href} className="group">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{post.title}</h3>
                <div className="mt-3 inline-flex items-center text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  <Tag className="h-3 w-3 mr-1" />
                  {post.tag}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/en" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Explore Site
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
