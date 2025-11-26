import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calculator, Car, Home, Utensils, MapPin, CreditCard, TrendingUp, AlertCircle } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Budget Voyage Maroc 2024 : Guide Complet des Coûts & Conseils | Nassoh Car',
  description: 'Guide complet du budget voyage au Maroc 2024 : coûts détaillés hébergement, transport, nourriture, activités. Conseils pour économiser et planifier votre budget selon votre style de voyage.',
  keywords: 'budget voyage Maroc, coût voyage Maroc, prix voyage Maroc, budget vacances Maroc, combien coûte voyage Maroc, budget routard Maroc, voyage pas cher Maroc, économiser voyage Maroc, planifier budget Maroc',
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
    canonical: 'https://www.nassohcar.com/guides/budget-voyage-maroc',
    languages: generateHreflangLinks('/guides/budget-voyage-maroc')
  },
  openGraph: {
    title: 'Budget Voyage Maroc 2024 : Guide Complet des Coûts et Conseils d\'Économie',
    description: 'Guide complet 2024 pour planifier votre budget voyage au Maroc : coûts détaillés de location voiture, hébergement, repas, activités. Conseils pratiques pour économiser et optimiser votre budget vacances.',
    url: 'https://www.nassohcar.com/guides/budget-voyage-maroc',
    siteName: 'Nassoh Car - Location de Voiture au Maroc',
    images: [
      {
        url: 'https://www.nassohcar.com/images/guides/budget-voyage-maroc.jpg',
        width: 1200,
        height: 630,
        alt: 'Guide budget voyage Maroc 2024 - Coûts et conseils d\'économie'
      }
    ],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guides de Voyage',
    tags: ['Budget Maroc', 'Voyage Maroc', 'Location Voiture', 'Économies Voyage', 'Coûts Maroc']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Voyage Maroc 2024 : Guide Complet des Coûts',
    description: 'Guide complet pour planifier votre budget voyage au Maroc : coûts détaillés et conseils d\'économie.',
    images: ['https://www.nassohcar.com/images/guides/budget-voyage-maroc.jpg'],
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

const budgetCategories = [
  {
    category: "Location de Voiture",
    icon: Car,
    items: [
      { item: "Voiture économique", price: "200-300 DH/jour", euro: "18-27€/jour" },
      { item: "Voiture compacte", price: "300-450 DH/jour", euro: "27-40€/jour" },
      { item: "SUV familial", price: "450-600 DH/jour", euro: "40-54€/jour" },
      { item: "Voiture de luxe", price: "600-1000 DH/jour", euro: "54-90€/jour" },
      { item: "Assurance complète", price: "+50-100 DH/jour", euro: "+4-9€/jour" }
    ]
  },
  {
    category: "Carburant",
    icon: TrendingUp,
    items: [
      { item: "Essence (litre)", price: "14-16 DH", euro: "1.25-1.45€" },
      { item: "Diesel (litre)", price: "12-14 DH", euro: "1.10-1.25€" },
      { item: "Plein réservoir (50L)", price: "600-800 DH", euro: "54-72€" },
      { item: "Consommation moyenne", price: "100km = 60-80 DH", euro: "100km = 5-7€" }
    ]
  },
  {
    category: "Hébergement",
    icon: Home,
    items: [
      { item: "Auberge de jeunesse", price: "80-150 DH/nuit", euro: "7-14€/nuit" },
      { item: "Hôtel 2-3 étoiles", price: "200-400 DH/nuit", euro: "18-36€/nuit" },
      { item: "Hôtel 4 étoiles", price: "500-800 DH/nuit", euro: "45-72€/nuit" },
      { item: "Riad de luxe", price: "800-1500 DH/nuit", euro: "72-135€/nuit" },
      { item: "Camping", price: "50-100 DH/nuit", euro: "4-9€/nuit" }
    ]
  },
  {
    category: "Restauration",
    icon: Utensils,
    items: [
      { item: "Street food", price: "10-30 DH", euro: "1-3€" },
      { item: "Restaurant local", price: "50-100 DH", euro: "4-9€" },
      { item: "Restaurant touristique", price: "100-200 DH", euro: "9-18€" },
      { item: "Restaurant haut de gamme", price: "200-400 DH", euro: "18-36€" },
      { item: "Thé à la menthe", price: "5-15 DH", euro: "0.5-1.5€" }
    ]
  }
]

const budgetTips = [
  {
    title: "Réservez à l'avance",
    description: "Économisez jusqu'à 30% sur la location de voiture en réservant 2-3 semaines à l'avance.",
    savings: "Économie : 30%"
  },
  {
    title: "Évitez les aéroports",
    description: "Les agences en ville sont souvent 20% moins chères que celles des aéroports.",
    savings: "Économie : 20%"
  },
  {
    title: "Mangez local",
    description: "Les restaurants locaux offrent des repas authentiques à prix réduits.",
    savings: "Économie : 50%"
  },
  {
    title: "Négociez les prix",
    description: "Dans les souks et marchés, la négociation peut réduire les prix de 30-50%.",
    savings: "Économie : 30-50%"
  }
]

export default function BudgetVoyageMarocPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.nassohcar.com/guides/budget-voyage-maroc#article",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/guides/budget-voyage-maroc#webpage"
        },
        "author": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "headline": "Budget Voyage Maroc 2024 : Guide Complet des Coûts",
        "description": "Planifiez votre budget voyage au Maroc 2024 avec notre guide détaillé : coûts de location voiture, essence, hébergement, repas, activités, transports. Conseils pour économiser et optimiser votre budget vacances au Maroc.",
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@id": "https://www.nassohcar.com/guides/budget-voyage-maroc#webpage"
        },
        "publisher": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/images/guides/budget-voyage-maroc.jpg",
          "width": 1200,
          "height": 630
        },
        "articleSection": "Guides de Voyage",
        "keywords": ["Budget Maroc", "Voyage Maroc", "Location Voiture", "Économies Voyage", "Coûts Maroc"],
        "about": [
          {
            "@type": "Thing",
            "name": "Budget Voyage Maroc",
            "description": "Guide complet des coûts pour voyager au Maroc"
          },
          {
            "@type": "Thing", 
            "name": "Location Voiture Maroc",
            "description": "Coûts et conseils pour louer une voiture au Maroc"
          }
        ]
      },
      {
        "@type": "TravelGuide",
        "@id": "https://www.nassohcar.com/guides/budget-voyage-maroc#travelguide",
        "name": "Guide Budget Voyage Maroc 2024",
        "description": "Guide complet pour planifier et optimiser votre budget voyage au Maroc",
        "image": "https://www.nassohcar.com/images/guides/budget-voyage-maroc.jpg",
        "about": {
          "@type": "Place",
          "name": "Maroc",
          "description": "Royaume du Maroc"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Voyageurs"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.nassohcar.com/#organization",
        "name": "Nassoh Car",
        "url": "https://www.nassohcar.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/logo.png",
          "width": 300,
          "height": 100
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+212-XXX-XXXXXX",
          "contactType": "customer service",
          "availableLanguage": ["French", "Arabic", "English"]
        },
        "sameAs": [
          "https://www.facebook.com/nassohcar",
          "https://www.instagram.com/nassohcar"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nassohcar.com/guides/budget-voyage-maroc#webpage",
        "url": "https://www.nassohcar.com/guides/budget-voyage-maroc",
        "name": "Budget Voyage Maroc 2024 : Guide Complet des Coûts",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/#website"
        },
        "about": {
          "@id": "https://www.nassohcar.com/guides/budget-voyage-maroc#article"
        },
        "description": "Planifiez votre budget voyage au Maroc 2024 avec notre guide détaillé : coûts de location voiture, essence, hébergement, repas, activités, transports.",
        "breadcrumb": {
          "@id": "https://www.nassohcar.com/guides/budget-voyage-maroc#breadcrumb"
        },
        "inLanguage": "fr-FR",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://www.nassohcar.com/guides/budget-voyage-maroc"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nassohcar.com/#website",
        "url": "https://www.nassohcar.com/",
        "name": "Nassoh Car - Location de Voiture au Maroc",
        "description": "Location de voiture au Maroc avec Nassoh Car. Véhicules récents, prix compétitifs et service de qualité.",
        "publisher": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "inLanguage": "fr-FR"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.nassohcar.com/guides/budget-voyage-maroc#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://www.nassohcar.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Guides",
            "item": "https://www.nassohcar.com/guides"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Budget Voyage Maroc",
            "item": "https://www.nassohcar.com/guides/budget-voyage-maroc"
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="@graph" data={structuredData["@graph"]} />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/guides" className="text-blue-600 hover:text-blue-800">
              Guides
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Budget Voyage Maroc</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/guides" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux guides
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Budget Voyage Maroc 2024
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Planifiez votre budget voyage au Maroc avec notre guide détaillé. Découvrez tous les coûts : 
              location de voiture, essence, hébergement, repas et activités.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">📊 Guide Budget</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">💰 Conseils Économies</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">🚗 Location Voiture</span>
              <span className="bg-blue-800/50 px-3 py-1 rounded-full">⏱️ Lecture 8 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Budget Overview */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Budget Estimé par Jour</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-green-600 mb-2">Budget Économique</h3>
                  <div className="text-3xl font-bold text-gray-900">400-600 DH</div>
                  <div className="text-lg text-gray-600">36-54€ / jour</div>
                  <p className="text-sm text-gray-500 mt-2">Auberge + voiture économique + repas locaux</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-blue-600 mb-2">Budget Confort</h3>
                  <div className="text-3xl font-bold text-gray-900">800-1200 DH</div>
                  <div className="text-lg text-gray-600">72-108€ / jour</div>
                  <p className="text-sm text-gray-500 mt-2">Hôtel 3* + voiture compacte + restaurants</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-purple-600 mb-2">Budget Luxe</h3>
                  <div className="text-3xl font-bold text-gray-900">1500-2500 DH</div>
                  <div className="text-lg text-gray-600">135-225€ / jour</div>
                  <p className="text-sm text-gray-500 mt-2">Riad luxe + SUV + restaurants haut de gamme</p>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Budget Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Détail des Coûts par Catégorie</h2>
            
            <div className="space-y-8">
              {budgetCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-700 font-medium">{item.item}</span>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{item.price}</div>
                          <div className="text-sm text-gray-500">{item.euro}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Money Saving Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Conseils pour Économiser</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {budgetTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-700 mb-4">{tip.description}</p>
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tip.savings}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Costs */}
          <section className="mb-12">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Coûts Supplémentaires à Prévoir</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Frais de Route</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Péages autoroutes : 5-20 DH par section</li>
                    <li>• Parking : 5-10 DH/heure en ville</li>
                    <li>• Lavage voiture : 20-50 DH</li>
                    <li>• Pourboires gardiens : 2-5 DH</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Activités & Visites</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Entrée monuments : 10-70 DH</li>
                    <li>• Guide touristique : 200-500 DH/jour</li>
                    <li>• Excursions : 300-800 DH/personne</li>
                    <li>• Hammam : 50-200 DH</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Prêt à Explorer le Maroc ?</h2>
              <p className="text-blue-100 mb-6">
                Réservez votre voiture de location dès maintenant et profitez de nos tarifs préférentiels.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Réserver Maintenant
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}