import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Car, AlertTriangle, MapPin, Shield, CreditCard, Navigation, Info, CheckCircle } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Guide Conduire au Maroc 2024 : Permis, Code de la Route et Conseils | Nassoh Car',
  description: 'Guide complet pour conduire au Maroc en 2024 : permis international, code de la route marocain, assurances obligatoires, conseils de sécurité routière, règles de circulation, limitations de vitesse, coûts carburant et péages. Tout pour une conduite sécurisée au Maroc.',
  keywords: 'conduire Maroc, permis international Maroc, code route Maroc, assurance voiture Maroc, sécurité routière Maroc, circulation Maroc, limitations vitesse Maroc, péages autoroute Maroc, conduite montagne Maroc, règles circulation Maroc, permis conduire français Maroc, location voiture Maroc, conseils conduite Maroc',
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
    canonical: 'https://www.nassohcar.com/guides/conduire-maroc-guide',
    languages: generateHreflangLinks('/guides/conduire-maroc-guide')
  },
  openGraph: {
    title: 'Guide Conduire au Maroc 2024 : Permis, Code de la Route et Conseils Pratiques',
    description: 'Guide complet 2024 pour conduire en sécurité au Maroc : permis international, code de la route, assurances, règles de circulation, conseils pratiques pour ville, montagne et autoroutes. Coûts carburant et péages inclus.',
    url: 'https://www.nassohcar.com/guides/conduire-maroc-guide',
    siteName: 'Nassoh Car - Location de Voiture au Maroc',
    images: [
      {
        url: 'https://www.nassohcar.com/images/guides/conduire-maroc-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Guide complet pour conduire au Maroc - Permis, règles et conseils'
      }
    ],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    section: 'Guides de Conduite',
    tags: ['Conduite Maroc', 'Permis International', 'Code Route Maroc', 'Sécurité Routière', 'Location Voiture']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Conduire au Maroc 2024 : Permis et Conseils',
    description: 'Guide complet pour conduire en sécurité au Maroc : permis, code de la route, assurances et conseils pratiques.',
    images: ['https://www.nassohcar.com/images/guides/conduire-maroc-guide.jpg'],
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

const requirements = [
  {
    title: "Permis de Conduire",
    icon: CreditCard,
    items: [
      "Permis de conduire français valide",
      "Permis international (recommandé)",
      "Âge minimum : 21 ans pour la location",
      "Expérience de conduite : 1 an minimum"
    ],
    note: "Le permis français est accepté mais le permis international facilite les démarches"
  },
  {
    title: "Documents Obligatoires",
    icon: Shield,
    items: [
      "Passeport en cours de validité",
      "Carte grise du véhicule",
      "Attestation d'assurance",
      "Contrat de location (si applicable)"
    ],
    note: "Gardez toujours ces documents dans le véhicule"
  },
  {
    title: "Assurance",
    icon: CheckCircle,
    items: [
      "Assurance responsabilité civile obligatoire",
      "Assurance tous risques recommandée",
      "Assistance dépannage 24h/24",
      "Couverture vol et incendie"
    ],
    note: "Vérifiez les conditions de votre assurance avant le départ"
  }
]

const trafficRules = [
  {
    category: "Limitations de Vitesse",
    rules: [
      "Ville : 60 km/h",
      "Route nationale : 100 km/h", 
      "Autoroute : 120 km/h",
      "Zone résidentielle : 40 km/h"
    ]
  },
  {
    category: "Règles de Circulation",
    rules: [
      "Circulation à droite",
      "Dépassement par la gauche",
      "Ceinture obligatoire à l'avant",
      "Téléphone interdit au volant"
    ]
  },
  {
    category: "Priorités",
    rules: [
      "Priorité à droite en ville",
      "Rond-point : priorité à gauche",
      "Feux tricolores respectés",
      "Passages piétons prioritaires"
    ]
  },
  {
    category: "Stationnement",
    rules: [
      "Zones bleues payantes",
      "Gardiens de parking",
      "Interdiction sur trottoirs",
      "Respect des places handicapés"
    ]
  }
]

const drivingTips = [
  {
    title: "Conduite en Ville",
    icon: Navigation,
    tips: [
      "Soyez patient dans les embouteillages",
      "Attention aux scooters et vélos",
      "Respectez les piétons",
      "Utilisez les parkings gardés",
      "Évitez les heures de pointe (8h-9h, 17h-19h)"
    ],
    difficulty: "Modéré"
  },
  {
    title: "Routes de Montagne",
    icon: AlertTriangle,
    tips: [
      "Vérifiez l'état du véhicule",
      "Conduisez prudemment dans les virages",
      "Respectez les distances de sécurité",
      "Attention aux animaux sur la route",
      "Prévoyez de l'eau et des provisions"
    ],
    difficulty: "Difficile"
  },
  {
    title: "Conduite Nocturne",
    icon: Shield,
    tips: [
      "Évitez si possible les trajets de nuit",
      "Réduisez votre vitesse",
      "Attention aux animaux",
      "Vérifiez l'éclairage du véhicule",
      "Faites des pauses régulières"
    ],
    difficulty: "Difficile"
  },
  {
    title: "Autoroutes",
    icon: Car,
    tips: [
      "Respectez les limitations de vitesse",
      "Payez les péages en espèces",
      "Utilisez les aires de repos",
      "Gardez vos distances",
      "Signalez vos changements de voie"
    ],
    difficulty: "Facile"
  }
]

const emergencyInfo = [
  {
    service: "Police",
    number: "19",
    description: "Urgences et accidents"
  },
  {
    service: "Gendarmerie Royale",
    number: "177",
    description: "Routes nationales et autoroutes"
  },
  {
    service: "Pompiers",
    number: "15",
    description: "Incendies et secours"
  },
  {
    service: "SAMU",
    number: "141",
    description: "Urgences médicales"
  }
]

const costs = [
  {
    item: "Essence Sans Plomb",
    price: "14-16 DH/L",
    euro: "1.25-1.45€/L"
  },
  {
    item: "Diesel",
    price: "12-14 DH/L", 
    euro: "1.10-1.25€/L"
  },
  {
    item: "Péage Autoroute",
    price: "5-20 DH",
    euro: "0.45-1.80€"
  },
  {
    item: "Parking Ville",
    price: "5-10 DH/h",
    euro: "0.45-0.90€/h"
  },
  {
    item: "Lavage Voiture",
    price: "20-50 DH",
    euro: "1.80-4.50€"
  }
]

export default function ConduireMarocGuidePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.nassohcar.com/guides/conduire-maroc-guide#article",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/guides/conduire-maroc-guide#webpage"
        },
        "author": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "headline": "Guide Conduire au Maroc 2024 : Permis, Code de la Route et Conseils",
        "description": "Guide complet pour conduire au Maroc en 2024 : permis international, code de la route marocain, assurances obligatoires, conseils de sécurité routière, règles de circulation, limitations de vitesse, coûts carburant et péages.",
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@id": "https://www.nassohcar.com/guides/conduire-maroc-guide#webpage"
        },
        "publisher": {
          "@id": "https://www.nassohcar.com/#organization"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://www.nassohcar.com/images/guides/conduire-maroc-guide.jpg",
          "width": 1200,
          "height": 630
        },
        "articleSection": "Guides de Conduite",
        "keywords": ["Conduite Maroc", "Permis International", "Code Route Maroc", "Sécurité Routière", "Location Voiture"],
        "about": [
          {
            "@type": "Thing",
            "name": "Conduite au Maroc",
            "description": "Règles et conseils pour conduire en sécurité au Maroc"
          },
          {
            "@type": "Thing", 
            "name": "Permis International",
            "description": "Documents nécessaires pour conduire au Maroc"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://www.nassohcar.com/guides/conduire-maroc-guide#howto",
        "name": "Comment conduire au Maroc",
        "description": "Guide étape par étape pour conduire en sécurité au Maroc",
        "image": "https://www.nassohcar.com/images/guides/conduire-maroc-guide.jpg",
        "totalTime": "PT30M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "value": "50"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Obtenir les documents nécessaires",
            "text": "Préparez votre permis de conduire français, permis international, passeport et attestation d'assurance.",
            "image": "https://www.nassohcar.com/images/guides/documents-conduite.jpg"
          },
          {
            "@type": "HowToStep", 
            "name": "Connaître le code de la route marocain",
            "text": "Familiarisez-vous avec les limitations de vitesse, règles de priorité et signalisation routière au Maroc.",
            "image": "https://www.nassohcar.com/images/guides/code-route-maroc.jpg"
          },
          {
            "@type": "HowToStep",
            "name": "Préparer votre véhicule",
            "text": "Vérifiez l'état du véhicule, les pneus, l'éclairage et les niveaux avant de prendre la route.",
            "image": "https://www.nassohcar.com/images/guides/verification-vehicule.jpg"
          }
        ]
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
        "@id": "https://www.nassohcar.com/guides/conduire-maroc-guide#webpage",
        "url": "https://www.nassohcar.com/guides/conduire-maroc-guide",
        "name": "Guide Conduire au Maroc 2024 : Permis, Code de la Route et Conseils",
        "isPartOf": {
          "@id": "https://www.nassohcar.com/#website"
        },
        "about": {
          "@id": "https://www.nassohcar.com/guides/conduire-maroc-guide#article"
        },
        "description": "Guide complet pour conduire au Maroc en 2024 : permis international, code de la route marocain, assurances obligatoires, conseils de sécurité routière.",
        "breadcrumb": {
          "@id": "https://www.nassohcar.com/guides/conduire-maroc-guide#breadcrumb"
        },
        "inLanguage": "fr-FR",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://www.nassohcar.com/guides/conduire-maroc-guide"]
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
        "@id": "https://www.nassohcar.com/guides/conduire-maroc-guide#breadcrumb",
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
            "name": "Guide Conduire au Maroc",
            "item": "https://www.nassohcar.com/guides/conduire-maroc-guide"
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
            <span className="text-gray-900">Guide Conduire au Maroc</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link href="/guides" className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux guides
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Guide Conduire au Maroc
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Tout ce que vous devez savoir pour conduire en sécurité au Maroc : 
              permis, code de la route, assurances, conseils pratiques et règles de circulation.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-red-800/50 px-3 py-1 rounded-full">🚗 Permis & Documents</span>
              <span className="bg-red-800/50 px-3 py-1 rounded-full">⚖️ Code de la Route</span>
              <span className="bg-red-800/50 px-3 py-1 rounded-full">🛡️ Sécurité</span>
              <span className="bg-red-800/50 px-3 py-1 rounded-full">⏱️ Lecture 10 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Documents et Exigences</h2>
            
            <div className="space-y-6">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <req.icon className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{req.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3">
                        {req.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-blue-800 text-sm">{req.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Traffic Rules */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Code de la Route</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {trafficRules.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
                  
                  <ul className="space-y-3">
                    {section.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Driving Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Conseils de Conduite</h2>
            
            <div className="space-y-6">
              {drivingTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <tip.icon className="w-8 h-8 text-orange-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">{tip.title}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      tip.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                      tip.difficulty === 'Modéré' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tip.difficulty}
                    </span>
                  </div>
                  
                  <ul className="grid md:grid-cols-2 gap-3">
                    {tip.tips.map((tipItem, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tipItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Emergency Numbers */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Numéros d'Urgence</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {emergencyInfo.map((emergency, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{emergency.service}</h3>
                      <span className="text-2xl font-bold text-red-600">{emergency.number}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{emergency.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Important :</strong> En cas d'accident, restez calme, sécurisez la zone, 
                  appelez les secours et ne déplacez pas les véhicules sauf danger immédiat.
                </p>
              </div>
            </div>
          </section>

          {/* Costs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Coûts de Conduite</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid gap-4">
                {costs.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{cost.item}</span>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{cost.price}</div>
                      <div className="text-sm text-gray-500">{cost.euro}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Safety Checklist */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Check-list Sécurité</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Avant le Départ</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Vérifier les pneus et la pression</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Contrôler les niveaux (huile, eau)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Tester l'éclairage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Vérifier les documents</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Équipement Obligatoire</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Triangle de signalisation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Gilet de sécurité</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Trousse de premiers secours</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">Extincteur (recommandé)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Prêt à Prendre la Route ?</h2>
              <p className="text-red-100 mb-6">
                Réservez votre voiture de location avec assurance complète et assistance 24h/24.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
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