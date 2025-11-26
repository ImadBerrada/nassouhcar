import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Eye, Clock } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import StructuredData from '@/components/StructuredData'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// Define valid categories and their metadata
const categoryData = {
  'adventure': {
    title: 'Aventure',
    description: 'Découvrez les aventures extraordinaires au Maroc avec votre voiture de location',
    keywords: 'aventure Maroc, road trip aventure, exploration Maroc, location voiture aventure'
  },
  'insider-secrets': {
    title: 'Secrets d\'Initiés',
    description: 'Les secrets les mieux gardés du Maroc révélés par nos experts locaux',
    keywords: 'secrets Maroc, conseils locaux, astuces voyage Maroc, guides secrets'
  },
  'money-saving-tips': {
    title: 'Conseils Économies',
    description: 'Économisez sur votre voyage au Maroc avec nos conseils d\'experts',
    keywords: 'économies voyage Maroc, conseils budget, location voiture pas cher, astuces économies'
  },
  'transportation': {
    title: 'Transport',
    description: 'Tout sur les transports et la location de voiture au Maroc',
    keywords: 'transport Maroc, location voiture, conseils conduite Maroc, mobilité'
  },
  'car-reviews': {
    title: 'Avis Voitures',
    description: 'Avis détaillés sur notre flotte de véhicules de location',
    keywords: 'avis voitures location, test véhicules, comparatif voitures Maroc'
  },
  'city-exploration': {
    title: 'Exploration Urbaine',
    description: 'Explorez les villes du Maroc avec nos guides détaillés',
    keywords: 'exploration villes Maroc, guides urbains, visites villes Maroc'
  },
  'travel-guides': {
    title: 'Guides de Voyage',
    description: 'Guides complets pour voyager au Maroc en toute sérénité',
    keywords: 'guides voyage Maroc, itinéraires Maroc, conseils voyage'
  },
  'photography': {
    title: 'Photographie',
    description: 'Conseils et spots photo pour immortaliser votre voyage au Maroc',
    keywords: 'photographie Maroc, spots photo, conseils photo voyage'
  },
  'safety-tips': {
    title: 'Conseils Sécurité',
    description: 'Voyagez en toute sécurité au Maroc avec nos conseils d\'experts',
    keywords: 'sécurité Maroc, conseils sécurité voyage, conduite sécurisée Maroc'
  },
  'local-culture': {
    title: 'Culture Locale',
    description: 'Découvrez la richesse culturelle du Maroc',
    keywords: 'culture Maroc, traditions marocaines, patrimoine Maroc'
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const category = categoryData[resolvedParams.category as keyof typeof categoryData]
  
  if (!category) {
    return {
      title: 'Catégorie non trouvée | Nassoh Car Blog',
      description: 'Cette catégorie n\'existe pas sur notre blog.'
    }
  }

  return {
    title: `${category.title} | Blog Nassoh Car`,
    description: category.description,
    keywords: category.keywords,
    openGraph: {
      title: `${category.title} | Blog Nassoh Car`,
      description: category.description,
      type: 'website',
      url: `https://www.nassohcar.com/blog/category/${resolvedParams.category}`,
      siteName: 'Nassoh Car'
    },
    alternates: {
      canonical: `https://www.nassohcar.com/blog/category/${resolvedParams.category}`
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
    "name": `${category.title} - Blog Nassoh Car`,
    "description": category.description,
    "url": `https://www.nassohcar.com/blog/category/${resolvedParams.category}`,
    "mainEntity": {
      "@type": "ItemList",
      "name": `Articles ${category.title}`,
      "description": category.description
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://www.nassohcar.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.nassohcar.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": category.title,
          "item": `https://www.nassohcar.com/blog/category/${resolvedParams.category}`
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[structuredData]} />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: category.title, href: `/blog/category/${resolvedParams.category}` }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Tag className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">{category.title}</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contenu en Préparation
              </h2>
              <p className="text-gray-600 mb-6">
                Nous préparons actuellement du contenu exclusif pour cette catégorie. 
                Nos experts travaillent sur des articles détaillés qui vous aideront à 
                profiter au maximum de votre expérience au Maroc.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Eye className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Guides Détaillés</h3>
                <p className="text-sm text-gray-600">Conseils d'experts locaux</p>
              </div>
              <div className="text-center">
                <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Mise à Jour Régulière</h3>
                <p className="text-sm text-gray-600">Contenu frais et actuel</p>
              </div>
              <div className="text-center">
                <Tag className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Conseils Pratiques</h3>
                <p className="text-sm text-gray-600">Astuces utilisables</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour au Blog
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Découvrez Nos Autres Contenus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/guides" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Guides de Voyage
                </h4>
                <p className="text-gray-600 text-sm">
                  Découvrez nos guides complets pour explorer le Maroc
                </p>
              </div>
            </Link>
            <Link href="/fleet" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Notre Flotte
                </h4>
                <p className="text-gray-600 text-sm">
                  Explorez notre sélection de véhicules de location
                </p>
              </div>
            </Link>
            <Link href="/contact" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Contactez-nous
                </h4>
                <p className="text-gray-600 text-sm">
                  Besoin d'aide ? Notre équipe est là pour vous
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category: category,
  }))
}