import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Car, Shield, DollarSign, MapPin, CheckCircle, AlertTriangle, Key, FileText } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: 'Car Rental Tips Morocco 2024: Complete Guide for Safe Travel | Nassoh Car',
  description: 'Essential car rental tips for Morocco: insurance, driving rules, best practices, and safety advice for a worry-free road trip experience.',
  keywords: 'car rental tips Morocco, Morocco driving guide, car rental insurance Morocco, Morocco road trip tips, rent car Morocco advice',
  openGraph: {
    title: 'Car Rental Tips Morocco 2024: Complete Guide for Safe Travel | Nassoh Car',
    description: 'Essential car rental tips for Morocco: insurance, driving rules, best practices, and safety advice for a worry-free road trip experience.',
    type: 'article',
    url: 'https://www.nassohcar.com/guides/car-rental-tips',
    siteName: 'Nassoh Car',
    images: [
      {
        url: 'https://www.nassohcar.com/tangier.webp',
        width: 1200,
        height: 630,
        alt: 'Car Rental Tips Morocco'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/guides/car-rental-tips',
    languages: generateHreflangLinks('/guides/car-rental-tips')
  }
}

export default function CarRentalTipsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Car Rental Tips Morocco 2024: Complete Guide for Safe Travel",
    "description": "Essential car rental tips for Morocco: insurance, driving rules, best practices, and safety advice for a worry-free road trip experience.",
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
    "url": "https://www.nassohcar.com/guides/car-rental-tips",
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.nassohcar.com/guides/car-rental-tips"
    }
  }

  const tips = [
    {
      category: "Before Booking",
      icon: FileText,
      color: "blue",
      items: [
        {
          title: "Compare Prices",
          description: "Research multiple rental companies and compare rates, including hidden fees and insurance costs."
        },
        {
          title: "Check Requirements",
          description: "Ensure you have a valid international driving permit and meet age requirements (usually 21+)."
        },
        {
          title: "Read Reviews",
          description: "Check customer reviews and ratings for rental companies to avoid potential issues."
        },
        {
          title: "Book in Advance",
          description: "Reserve your vehicle early, especially during peak seasons, to secure better rates and availability."
        }
      ]
    },
    {
      category: "Insurance & Protection",
      icon: Shield,
      color: "green",
      items: [
        {
          title: "Comprehensive Coverage",
          description: "Opt for full insurance coverage including collision damage waiver and theft protection."
        },
        {
          title: "Check Your Policy",
          description: "Verify if your personal car insurance or credit card covers international rentals."
        },
        {
          title: "Document Everything",
          description: "Take photos of the vehicle before and after rental to avoid disputes over damages."
        },
        {
          title: "Understand Deductibles",
          description: "Know your insurance deductible amounts and what damages are covered."
        }
      ]
    },
    {
      category: "Vehicle Inspection",
      icon: Car,
      color: "purple",
      items: [
        {
          title: "Exterior Check",
          description: "Inspect for scratches, dents, and damage. Note everything on the rental agreement."
        },
        {
          title: "Interior Condition",
          description: "Check seats, electronics, air conditioning, and all controls before accepting the vehicle."
        },
        {
          title: "Tire Condition",
          description: "Ensure tires have adequate tread and check for the spare tire and tools."
        },
        {
          title: "Fluid Levels",
          description: "Verify oil, coolant, and brake fluid levels are adequate for your journey."
        }
      ]
    },
    {
      category: "Driving in Morocco",
      icon: MapPin,
      color: "orange",
      items: [
        {
          title: "Traffic Rules",
          description: "Familiarize yourself with local traffic laws, speed limits, and road signs."
        },
        {
          title: "Road Conditions",
          description: "Be prepared for varying road conditions, from highways to mountain roads."
        },
        {
          title: "Parking Tips",
          description: "Use secure parking areas and avoid leaving valuables visible in the car."
        },
        {
          title: "Fuel Stations",
          description: "Plan fuel stops in advance, especially when traveling to remote areas."
        }
      ]
    },
    {
      category: "Cost Management",
      icon: DollarSign,
      color: "red",
      items: [
        {
          title: "Fuel Policy",
          description: "Understand the fuel policy (full-to-full is usually most economical)."
        },
        {
          title: "Additional Fees",
          description: "Be aware of extra charges for GPS, child seats, additional drivers, or border crossings."
        },
        {
          title: "Return on Time",
          description: "Return the vehicle on time to avoid late fees and additional day charges."
        },
        {
          title: "Mileage Limits",
          description: "Check if there are mileage restrictions and associated overage fees."
        }
      ]
    },
    {
      category: "Safety & Emergency",
      icon: AlertTriangle,
      color: "yellow",
      items: [
        {
          title: "Emergency Contacts",
          description: "Keep rental company emergency numbers and local emergency services contacts handy."
        },
        {
          title: "Breakdown Procedure",
          description: "Know what to do in case of breakdown or accident, including who to contact first."
        },
        {
          title: "Safety Equipment",
          description: "Ensure the car has safety equipment like warning triangles and first aid kit."
        },
        {
          title: "Travel Insurance",
          description: "Consider comprehensive travel insurance that covers rental car incidents."
        }
      ]
    }
  ]

  const essentialDocuments = [
    "Valid passport",
    "International driving permit",
    "Credit card for deposit",
    "Rental confirmation",
    "Travel insurance documents",
    "Emergency contact information"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <StructuredData type="@graph" data={[structuredData]} />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/guides' },
          { label: 'Car Rental Tips', href: '/guides/car-rental-tips' }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Key className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Car Rental Tips for Morocco</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential advice and best practices for a safe and worry-free car rental experience in Morocco
          </p>
        </div>

        {/* Essential Documents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Documents</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {essentialDocuments.map((document, index) => (
                <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{document}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips Categories */}
        <div className="space-y-12">
          {tips.map((category, categoryIndex) => {
            const IconComponent = category.icon
            const colorClasses = {
              blue: 'text-blue-600 bg-blue-50',
              green: 'text-green-600 bg-green-50',
              purple: 'text-purple-600 bg-purple-50',
              orange: 'text-orange-600 bg-orange-50',
              red: 'text-red-600 bg-red-50',
              yellow: 'text-yellow-600 bg-yellow-50'
            }

            return (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses]} mr-4`}>
                    <IconComponent className={`h-6 w-6 ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[0]}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((tip, tipIndex) => (
                    <div key={tipIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Checklist */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Pre-Rental Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Before Pickup:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Confirm reservation details
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Prepare required documents
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Check credit card limit
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Review insurance options
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">At Pickup:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Inspect vehicle thoroughly
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Take photos of any damage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Test all vehicle functions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Get emergency contact numbers
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Rent Your Car?</h2>
          <p className="text-xl mb-6 opacity-90">
            Choose from our reliable fleet of well-maintained vehicles for your Morocco adventure
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