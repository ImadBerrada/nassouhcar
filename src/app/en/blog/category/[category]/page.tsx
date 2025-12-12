import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Eye, Clock } from 'lucide-react'
import Breadcrumb from '@/app/en/components/Breadcrumb'
import StructuredData from '@/app/en/components/StructuredData'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

const categoryData = {
  'adventure': {
    title: 'Adventure',
    description: 'Discover extraordinary adventures in Morocco with your rental car',
    keywords: 'adventure Morocco, road trip adventure, Morocco exploration, rental car adventure'
  },
  'insider-secrets': {
    title: 'Insider Secrets',
    description: 'Morocco’s best-kept secrets revealed by local experts',
    keywords: 'Morocco secrets, local tips, Morocco travel hacks, secret guides'
  },
  'money-saving-tips': {
    title: 'Money-Saving Tips',
    description: 'Save on your trip to Morocco with our expert advice',
    keywords: 'save money Morocco, budget tips, cheap car rental, savings advice'
  },
  'transportation': {
    title: 'Transportation',
    description: 'Everything about transportation and car rental in Morocco',
    keywords: 'transport Morocco, car rental, Morocco driving tips, mobility'
  },
  'car-reviews': {
    title: 'Car Reviews',
    description: 'Detailed reviews of our rental vehicle fleet',
    keywords: 'rental car reviews, vehicle tests, car comparisons Morocco'
  },
  'city-exploration': {
    title: 'City Exploration',
    description: 'Explore Moroccan cities with our detailed guides',
    keywords: 'Moroccan cities exploration, urban guides, city visits Morocco'
  },
  'travel-guides': {
    title: 'Travel Guides',
    description: 'Complete guides to travel Morocco with confidence',
    keywords: 'Morocco travel guides, Morocco itineraries, travel advice'
  },
  'photography': {
    title: 'Photography',
    description: 'Photo tips and spots to capture your journey',
    keywords: 'Morocco photography, photo spots, travel photo tips'
  },
  'safety-tips': {
    title: 'Safety Tips',
    description: 'Travel safely in Morocco with expert advice',
    keywords: 'Morocco safety, travel safety tips, safe driving Morocco'
  },
  'local-culture': {
    title: 'Local Culture',
    description: 'Discover Morocco’s rich culture',
    keywords: 'Moroccan culture, traditions, Moroccan heritage'
  }
} as const

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const category = categoryData[resolvedParams.category as keyof typeof categoryData]
  if (!category) {
    return {
      title: 'Category not found | Nassoh Car Blog',
      description: 'This category does not exist on our blog.'
    }
  }
  return {
    title: `${category.title} | Nassoh Car Blog`,
    description: category.description,
    keywords: category.keywords,
    openGraph: {
      title: `${category.title} | Nassoh Car Blog`,
      description: category.description,
      type: 'website',
      url: `https://www.nassohcar.com/en/blog/category/${resolvedParams.category}`,
      siteName: 'Nassoh Car'
    },
    alternates: {
      canonical: `https://www.nassohcar.com/en/blog/category/${resolvedParams.category}`
    }
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params
  const category = categoryData[resolvedParams.category as keyof typeof categoryData]
  if (!category) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.title} - Nassoh Car Blog`,
    "description": category.description,
    "url": `https://www.nassohcar.com/en/blog/category/${resolvedParams.category}`,
    "mainEntity": {
      "@type": "ItemList",
      "name": `${category.title} Articles`,
      "description": category.description
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nassohcar.com/en" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.nassohcar.com/en/blog" },
        { "@type": "ListItem", "position": 3, "name": category.title, "item": `https://www.nassohcar.com/en/blog/category/${resolvedParams.category}` }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[structuredData]} />
      <Breadcrumb items={[{ label: 'Home', href: '/en' }, { label: 'Blog', href: '/en/blog' }, { label: category.title, href: `/en/blog/category/${resolvedParams.category}` }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Tag className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">{category.title}</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Coming Soon</h2>
              <p className="text-gray-600 mb-6">We are currently preparing exclusive content for this category. Our experts are working on detailed articles to help you make the most of your experience in Morocco.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center"><Eye className="h-6 w-6 text-blue-600 mx-auto mb-2" /><h3 className="font-semibold text-gray-900">Detailed Guides</h3><p className="text-sm text-gray-600">Local expert tips</p></div>
              <div className="text-center"><Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" /><h3 className="font-semibold text-gray-900">Regular Updates</h3><p className="text-sm text-gray-600">Fresh and current content</p></div>
              <div className="text-center"><Tag className="h-6 w-6 text-blue-600 mx-auto mb-2" /><h3 className="font-semibold text-gray-900">Practical Advice</h3><p className="text-sm text-gray-600">Actionable tips</p></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/blog" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Blog
              </Link>
              <Link href="/en/contact" className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/en/guides" className="group"><div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"><h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Travel Guides</h4><p className="text-gray-600 text-sm">Discover our complete guides</p></div></Link>
            <Link href="/en/fleet" className="group"><div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"><h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Our Fleet</h4><p className="text-gray-600 text-sm">Explore our rental vehicles</p></div></Link>
            <Link href="/en/contact" className="group"><div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"><h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Contact Us</h4><p className="text-gray-600 text-sm">Need help? We’re here for you</p></div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({ category }))
}
