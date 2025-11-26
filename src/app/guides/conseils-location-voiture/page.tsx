import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Car, Shield, CreditCard, AlertTriangle, CheckCircle, DollarSign, Calendar, Key, FileText } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Conseils Location Voiture Maroc 2024 : Guide Complet | Nassoh Car',
  description: 'Guide expert pour louer une voiture au Maroc : conseils pratiques, choix du véhicule, assurances, prix, pièges à éviter et astuces pour économiser. Tout ce qu\'il faut savoir avant de réserver.',
  keywords: 'conseils location voiture Maroc, louer voiture Maroc, assurance location Maroc, prix location voiture, éviter arnaques location, guide location voiture, comparateur location Maroc, voiture de location conseils',
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
    canonical: 'https://www.nassohcar.com/guides/conseils-location-voiture',
    languages: generateHreflangLinks('/guides/conseils-location-voiture')
  },
  openGraph: {
    title: 'Conseils Location Voiture Maroc 2024 : Guide Complet | Nassoh Car',
    description: 'Guide expert pour louer une voiture au Maroc : conseils pratiques, assurances, prix et pièges à éviter. Économisez jusqu\'à 30% sur votre location.',
    url: 'https://www.nassohcar.com/guides/conseils-location-voiture',
    siteName: 'Nassoh Car - Location de Voiture au Maroc',
    images: [
      {
        url: 'https://www.nassohcar.com/images/conseils-location-voiture-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Conseils pour louer une voiture au Maroc - Guide complet 2024',
        type: 'image/jpeg',
      }
    ],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2024-01-10T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guides de Location',
    tags: ['Location Voiture', 'Maroc', 'Conseils', 'Assurance', 'Prix', 'Guide'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conseils Location Voiture Maroc 2024 : Guide Complet',
    description: 'Guide expert pour louer une voiture au Maroc : conseils, assurances, prix et pièges à éviter.',
    images: ['https://www.nassohcar.com/images/conseils-location-voiture-twitter.jpg'],
    creator: '@nassohcar',
    site: '@nassohcar',
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
  },
}

const carTypes = [
  {
    type: "Voiture Économique",
    examples: "Dacia Logan, Renault Symbol",
    bestFor: "Ville, courts trajets, budget serré",
    pros: ["Prix abordable", "Consommation réduite", "Facile à garer"],
    cons: ["Confort limité", "Espace restreint", "Puissance limitée"],
    price: "200-300 DH/jour"
  },
  {
    type: "Voiture Compacte",
    examples: "Renault Clio, Peugeot 208",
    bestFor: "Voyages moyens, confort équilibré",
    pros: ["Bon compromis prix/confort", "Maniable en ville", "Coffre correct"],
    cons: ["Espace arrière limité", "Moins adaptée aux longs trajets"],
    price: "300-450 DH/jour"
  },
  {
    type: "SUV/4x4",
    examples: "Dacia Duster, Renault Kadjar",
    bestFor: "Montagne, pistes, familles",
    pros: ["Hauteur de conduite", "Traction intégrale", "Espace généreux"],
    cons: ["Consommation élevée", "Prix plus élevé", "Moins maniable"],
    price: "450-600 DH/jour"
  },
  {
    type: "Monospace",
    examples: "Dacia Lodgy, Renault Scenic",
    bestFor: "Familles nombreuses, longs voyages",
    pros: ["7 places", "Grand coffre", "Confort optimal"],
    cons: ["Prix élevé", "Consommation importante", "Difficile à garer"],
    price: "500-700 DH/jour"
  }
]

const insuranceTypes = [
  {
    name: "Responsabilité Civile",
    coverage: "Dommages causés aux tiers",
    included: true,
    cost: "Incluse",
    recommendation: "Obligatoire par la loi"
  },
  {
    name: "Collision Damage Waiver (CDW)",
    coverage: "Dommages au véhicule loué",
    included: false,
    cost: "50-100 DH/jour",
    recommendation: "Fortement recommandée"
  },
  {
    name: "Vol et Incendie",
    coverage: "Vol du véhicule et incendie",
    included: false,
    cost: "30-60 DH/jour",
    recommendation: "Recommandée"
  },
  {
    name: "Assistance Dépannage",
    coverage: "Dépannage 24h/24, véhicule de remplacement",
    included: false,
    cost: "40-80 DH/jour",
    recommendation: "Très utile"
  }
]

const bookingTips = [
  {
    title: "Réservez à l'Avance",
    icon: Calendar,
    description: "Réservez 2-3 semaines avant pour obtenir les meilleurs tarifs",
    savings: "Jusqu'à 30% d'économie",
    details: [
      "Meilleure disponibilité des véhicules",
      "Tarifs préférentiels",
      "Possibilité d'annulation gratuite",
      "Choix plus large de véhicules"
    ]
  },
  {
    title: "Comparez les Prix",
    icon: DollarSign,
    description: "Utilisez des comparateurs et négociez directement",
    savings: "15-25% d'économie",
    details: [
      "Vérifiez les inclusions (assurance, kilométrage)",
      "Attention aux frais cachés",
      "Négociez pour les locations longues",
      "Demandez les promotions en cours"
    ]
  },
  {
    title: "Évitez les Aéroports",
    icon: Car,
    description: "Les agences en ville sont souvent moins chères",
    savings: "10-20% d'économie",
    details: [
      "Frais d'aéroport évités",
      "Plus de flexibilité horaire",
      "Service plus personnalisé",
      "Négociation plus facile"
    ]
  },
  {
    title: "Vérifiez les Conditions",
    icon: FileText,
    description: "Lisez attentivement le contrat avant signature",
    savings: "Évite les mauvaises surprises",
    details: [
      "Franchise en cas de dommage",
      "Kilométrage inclus",
      "Politique de carburant",
      "Conditions d'annulation"
    ]
  }
]

const commonTraps = [
  {
    trap: "Frais Cachés",
    description: "Frais supplémentaires non mentionnés au départ",
    howToAvoid: [
      "Demandez le prix total TTC",
      "Vérifiez tous les suppléments",
      "Lisez les conditions générales",
      "Confirmez par écrit"
    ]
  },
  {
    trap: "État du Véhicule",
    description: "Dommages existants non signalés",
    howToAvoid: [
      "Inspectez minutieusement le véhicule",
      "Photographiez tous les dommages",
      "Faites noter sur le contrat",
      "Vérifiez l'intérieur et l'extérieur"
    ]
  },
  {
    trap: "Carburant",
    description: "Politique de carburant défavorable",
    howToAvoid: [
      "Optez pour 'plein à plein'",
      "Évitez le prépaiement du carburant",
      "Gardez le ticket de la dernière station",
      "Rendez avec le même niveau"
    ]
  },
  {
    trap: "Assurance Excessive",
    description: "Vente forcée d'assurances inutiles",
    howToAvoid: [
      "Vérifiez votre assurance personnelle",
      "Refusez poliment les suppléments",
      "Négociez un package global",
      "Demandez les détails par écrit"
    ]
  }
]

const checklist = [
  {
    category: "Avant la Réservation",
    items: [
      "Comparer les prix de plusieurs agences",
      "Vérifier les avis clients",
      "Lire les conditions générales",
      "Confirmer les inclusions (assurance, kilométrage)",
      "Vérifier la politique d'annulation"
    ]
  },
  {
    category: "À la Prise en Charge",
    items: [
      "Vérifier l'identité du loueur",
      "Inspecter minutieusement le véhicule",
      "Photographier les dommages existants",
      "Tester tous les équipements",
      "Vérifier le niveau de carburant"
    ]
  },
  {
    category: "Pendant la Location",
    items: [
      "Respecter les conditions du contrat",
      "Garder tous les documents dans le véhicule",
      "Signaler immédiatement tout problème",
      "Éviter les modifications non autorisées",
      "Maintenir le véhicule propre"
    ]
  },
  {
    category: "À la Restitution",
    items: [
      "Nettoyer l'intérieur du véhicule",
      "Faire le plein de carburant",
      "Inspecter avec l'agent",
      "Récupérer tous vos effets personnels",
      "Conserver le procès-verbal de restitution"
    ]
  }
]

export default function ConseilsLocationVoiturePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.nassohcar.com/guides/conseils-location-voiture#article",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/guides/conseils-location-voiture"
        },
        "author": {
          "@type": "Organization",
          "name": "Nassoh Car",
          "@id": "https://www.nassohcar.com/#organization"
        },
        "headline": "Conseils Location Voiture Maroc 2024 : Guide Complet",
        "description": "Guide expert pour louer une voiture au Maroc : conseils pratiques, choix du véhicule, assurances, prix, pièges à éviter et astuces pour économiser.",
        "datePublished": "2024-01-10T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.nassohcar.com/guides/conseils-location-voiture"
        },
        "publisher": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/images/conseils-location-voiture-og.jpg",
          "width": 1200,
          "height": 630
        },
        "articleSection": "Guides de Location",
        "inLanguage": "fr-FR",
        "keywords": ["conseils location voiture", "location voiture Maroc", "assurance location", "prix location voiture", "guide location"]
      },
      {
        "@type": "HowTo",
        "@id": "https://www.nassohcar.com/guides/conseils-location-voiture#howto",
        "name": "Comment louer une voiture au Maroc",
        "description": "Guide étape par étape pour louer une voiture au Maroc en évitant les pièges",
        "image": "https://www.nassohcar.com/images/conseils-location-voiture-og.jpg",
        "totalTime": "PT30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "MAD",
          "value": "200-700"
        },
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Permis de conduire valide"
          },
          {
            "@type": "HowToSupply", 
            "name": "Carte de crédit"
          },
          {
            "@type": "HowToSupply",
            "name": "Pièce d'identité"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Comparer les prix",
            "text": "Utilisez des comparateurs en ligne et comparez les offres de plusieurs agences",
            "url": "https://www.nassohcar.com/guides/conseils-location-voiture#comparaison"
          },
          {
            "@type": "HowToStep",
            "name": "Choisir le véhicule",
            "text": "Sélectionnez le type de véhicule adapté à vos besoins et votre budget",
            "url": "https://www.nassohcar.com/guides/conseils-location-voiture#vehicules"
          },
          {
            "@type": "HowToStep",
            "name": "Vérifier les assurances",
            "text": "Examinez les options d'assurance et choisissez la couverture appropriée",
            "url": "https://www.nassohcar.com/guides/conseils-location-voiture#assurances"
          },
          {
            "@type": "HowToStep",
            "name": "Inspecter le véhicule",
            "text": "Vérifiez minutieusement l'état du véhicule avant la prise en charge",
            "url": "https://www.nassohcar.com/guides/conseils-location-voiture#inspection"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.nassohcar.com/#organization",
        "name": "Nassoh Car",
        "url": "https://www.nassohcar.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/logo.png",
          "width": 300,
          "height": 100
        },
        "description": "Location de voiture au Maroc - Service professionnel et fiable",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MA",
          "addressLocality": "Tanger"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+212-XXX-XXXXXX",
          "contactType": "customer service",
          "availableLanguage": ["French", "Arabic", "English"]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nassohcar.com/guides/conseils-location-voiture",
        "url": "https://www.nassohcar.com/guides/conseils-location-voiture",
        "name": "Conseils Location Voiture Maroc 2024 : Guide Complet | Nassoh Car",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.nassohcar.com/#website"
        },
        "datePublished": "2024-01-10T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Guide expert pour louer une voiture au Maroc : conseils pratiques, assurances, prix et pièges à éviter.",
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
              "name": "Guides",
              "item": "https://www.nassohcar.com/guides"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Conseils Location Voiture",
              "item": "https://www.nassohcar.com/guides/conseils-location-voiture"
            }
          ]
        },
        "mainEntity": {
          "@id": "https://www.nassohcar.com/guides/conseils-location-voiture#article"
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={structuredData["@graph"]} />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 py-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/guides" className="text-gray-500 hover:text-gray-700 transition-colors">
              Guides
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Conseils Location Voiture</span>
          </div>
        </div>
      </nav>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/guides" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux guides
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conseils Location Voiture
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Guide complet pour louer une voiture au Maroc en toute sérénité : 
              choisir le bon véhicule, négocier les prix, éviter les pièges et optimiser votre budget.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-indigo-800/50 px-3 py-1 rounded-full">🚗 Types de Véhicules</span>
              <span className="bg-indigo-800/50 px-3 py-1 rounded-full">🛡️ Assurances</span>
              <span className="bg-indigo-800/50 px-3 py-1 rounded-full">💰 Économies</span>
              <span className="bg-indigo-800/50 px-3 py-1 rounded-full">⏱️ Lecture 12 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Car Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Choisir le Bon Véhicule</h2>
            
            <div className="space-y-6">
              {carTypes.map((car, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.type}</h3>
                      <p className="text-gray-600 mb-2">Exemples : {car.examples}</p>
                      <p className="text-indigo-600 font-medium">Idéal pour : {car.bestFor}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{car.price}</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">✅ Avantages</h4>
                      <ul className="space-y-1">
                        {car.pros.map((pro, idx) => (
                          <li key={idx} className="text-gray-700 text-sm">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">❌ Inconvénients</h4>
                      <ul className="space-y-1">
                        {car.cons.map((con, idx) => (
                          <li key={idx} className="text-gray-700 text-sm">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Insurance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Assurances et Protections</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                {insuranceTypes.map((insurance, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 flex items-center">
                          {insurance.name}
                          {insurance.included && (
                            <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                              Incluse
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-600 text-sm">{insurance.coverage}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{insurance.cost}</div>
                      </div>
                    </div>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                      insurance.recommendation.includes('Obligatoire') ? 'bg-red-100 text-red-800' :
                      insurance.recommendation.includes('Fortement') ? 'bg-orange-100 text-orange-800' :
                      insurance.recommendation.includes('Très') ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {insurance.recommendation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Booking Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Astuces pour Économiser</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {bookingTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <tip.icon className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                      <p className="text-green-600 font-semibold text-sm">{tip.savings}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{tip.description}</p>
                  
                  <ul className="space-y-2">
                    {tip.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Common Traps */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center mb-8">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pièges à Éviter</h2>
              </div>
              
              <div className="space-y-6">
                {commonTraps.map((trap, index) => (
                  <div key={index} className="bg-white rounded-lg p-6">
                    <h3 className="text-lg font-bold text-red-700 mb-2">⚠️ {trap.trap}</h3>
                    <p className="text-gray-700 mb-4">{trap.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Comment l'éviter :</h4>
                      <ul className="space-y-1">
                        {trap.howToAvoid.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <Shield className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Check-list Complète</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {checklist.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{section.category}</h3>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Final Tips */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conseils d'Expert</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">🎯 Pour les Débutants</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Commencez par une voiture économique</li>
                    <li>• Prenez l'assurance complète</li>
                    <li>• Évitez les locations à l'aéroport</li>
                    <li>• Demandez une démonstration du véhicule</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">💡 Pour les Expérimentés</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Négociez les tarifs longue durée</li>
                    <li>• Vérifiez votre assurance personnelle</li>
                    <li>• Utilisez les programmes de fidélité</li>
                    <li>• Réservez directement chez le loueur</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Prêt à Louer Votre Voiture ?</h2>
              <p className="text-indigo-100 mb-6">
                Profitez de nos tarifs transparents et de notre service de qualité.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Voir Nos Offres
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}