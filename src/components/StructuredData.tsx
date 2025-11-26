'use client'

import Script from 'next/script'

interface Review {
  rating: number
  name: string
  text: string
  date: string
}

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'Review' | 'Article' | 'AutoRental' | 'Blog' | 'Fleet' | '@graph'
  data?: Record<string, unknown> | unknown[]
  countryTarget?: 'FR' | 'ES' | 'IT' | 'DE' | 'MA'
  language?: 'fr' | 'es' | 'it' | 'de' | 'en' | 'ar'
}

// Type guard to check if data is an object (not an array)
function isDataObject(data: Record<string, unknown> | unknown[] | undefined): data is Record<string, unknown> {
  return data != null && typeof data === 'object' && !Array.isArray(data)
}

export default function StructuredData({ type, data, countryTarget = 'MA', language = 'fr' }: StructuredDataProps) {
  
  // Helper function to get localized content
  const getLocalizedContent = () => {
    const content = {
      fr: {
        businessName: "Nassoh Car - Location de Voiture Tanger Aéroport Ibn Battouta & Port Med",
        description: "Service de location de voiture premium à Tanger offrant d'excellents véhicules et un service client exceptionnel 24/7. Spécialisé aéroport Ibn Battouta, port Tanger Med, centre-ville. Flotte moderne, tarifs compétitifs, livraison gratuite.",
        slogan: "Votre partenaire de confiance pour la location de voiture à Tanger",
        economicDesc: "Véhicules économiques parfaits pour explorer Tanger et le Maroc. Consommation réduite, tarifs abordables à partir de 18€/jour.",
        suvDesc: "SUV spacieux 7 places idéaux pour voyages en famille. Confort, sécurité et espace de rangement optimal.",
        luxuryDesc: "Véhicules premium pour occasions spéciales. Service VIP, confort exceptionnel et prestige garantis."
      },
      es: {
        businessName: "Nassoh Car - Alquiler de Coches Tánger Aeropuerto Ibn Battouta & Puerto Med",
        description: "Servicio premium de alquiler de coches en Tánger ofreciendo excelentes vehículos y servicio al cliente excepcional 24/7. Especializado en aeropuerto Ibn Battouta, puerto Tánger Med, centro ciudad. Flota moderna, tarifas competitivas, entrega gratuita.",
        slogan: "Su socio de confianza para el alquiler de coches en Tánger",
        economicDesc: "Vehículos económicos perfectos para explorar Tánger y Marruecos. Bajo consumo, tarifas asequibles desde 18€/día.",
        suvDesc: "SUV espaciosos de 7 plazas ideales para viajes familiares. Comodidad, seguridad y espacio de almacenamiento óptimo.",
        luxuryDesc: "Vehículos premium para ocasiones especiales. Servicio VIP, comodidad excepcional y prestigio garantizado."
      },
      it: {
        businessName: "Nassoh Car - Noleggio Auto Tangeri Aeroporto Ibn Battouta & Porto Med",
        description: "Servizio premium di noleggio auto a Tangeri offrendo eccellenti veicoli e servizio clienti eccezionale 24/7. Specializzato aeroporto Ibn Battouta, porto Tangeri Med, centro città. Flotta moderna, tariffe competitive, consegna gratuita.",
        slogan: "Il vostro partner di fiducia per il noleggio auto a Tangeri",
        economicDesc: "Veicoli economici perfetti per esplorare Tangeri e il Marocco. Basso consumo, tariffe accessibili da 18€/giorno.",
        suvDesc: "SUV spaziosi a 7 posti ideali per viaggi in famiglia. Comfort, sicurezza e spazio di stivaggio ottimale.",
        luxuryDesc: "Veicoli premium per occasioni speciali. Servizio VIP, comfort eccezionale e prestigio garantito."
      },
      de: {
        businessName: "Nassoh Car - Autovermietung Tanger Flughafen Ibn Battouta & Hafen Med",
        description: "Premium Autovermietungsservice in Tanger mit ausgezeichneten Fahrzeugen und außergewöhnlichem 24/7 Kundenservice. Spezialisiert auf Flughafen Ibn Battouta, Hafen Tanger Med, Stadtzentrum. Moderne Flotte, wettbewerbsfähige Preise, kostenlose Lieferung.",
        slogan: "Ihr vertrauensvoller Partner für Autovermietung in Tanger",
        economicDesc: "Wirtschaftliche Fahrzeuge perfekt für die Erkundung von Tanger und Marokko. Niedriger Verbrauch, erschwingliche Preise ab 18€/Tag.",
        suvDesc: "Geräumige 7-Sitzer SUVs ideal für Familienreisen. Komfort, Sicherheit und optimaler Stauraum.",
        luxuryDesc: "Premium-Fahrzeuge für besondere Anlässe. VIP-Service, außergewöhnlicher Komfort und garantiertes Prestige."
      },
      en: {
        businessName: "Nassoh Car - Car Rental Tangier Ibn Battouta Airport & Med Port",
        description: "Premium car rental service in Tangier offering excellent vehicles and exceptional 24/7 customer service. Specialized in Ibn Battouta airport, Tanger Med port, city center. Modern fleet, competitive rates, free delivery.",
        slogan: "Your trusted partner for car rental in Tangier",
        economicDesc: "Economic vehicles perfect for exploring Tangier and Morocco. Low consumption, affordable rates from 18€/day.",
        suvDesc: "Spacious 7-seater SUVs ideal for family trips. Comfort, safety and optimal storage space.",
        luxuryDesc: "Premium vehicles for special occasions. VIP service, exceptional comfort and guaranteed prestige."
      }
    }
    
    return content[language as keyof typeof content] || content.fr
  }

  // Helper function to get country-specific targeting info
  const getCountryTargeting = () => {
    const targeting = {
      FR: {
        targetAudience: "Résidents français voyageant au Maroc",
        serviceArea: "Service spécialisé pour les voyageurs français",
        currency: "EUR",
        geoTarget: "France"
      },
      ES: {
        targetAudience: "Residentes españoles viajando a Marruecos", 
        serviceArea: "Servicio especializado para viajeros españoles",
        currency: "EUR",
        geoTarget: "Spain"
      },
      IT: {
        targetAudience: "Residenti italiani in viaggio in Marocco",
        serviceArea: "Servizio specializzato per viaggiatori italiani", 
        currency: "EUR",
        geoTarget: "Italy"
      },
      DE: {
        targetAudience: "Deutsche Einwohner, die nach Marokko reisen",
        serviceArea: "Spezialisierter Service für deutsche Reisende",
        currency: "EUR", 
        geoTarget: "Germany"
      },
      MA: {
        targetAudience: "Résidents locaux et touristes internationaux",
        serviceArea: "Service local et international",
        currency: "MAD",
        geoTarget: "Morocco"
      }
    }
    
    return targeting[countryTarget] || targeting.MA
  }
  const getStructuredData = () => {
    switch (type) {
      case 'LocalBusiness':
        const localizedContent = getLocalizedContent()
        
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.nassohcar.com/#organization",
          "name": localizedContent.businessName,
          "alternateName": ["Nassoh Car Rental Tanger", "Location de Voiture Tanger Aéroport", "Car Rental Tangier Morocco", "Location Auto Tanger", "Rent a Car Tangier"],
          "description": localizedContent.description,
          "url": "https://www.nassohcar.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.nassohcar.com/logo-nassoh-car.png",
            "width": 300,
            "height": 100
          },
          "image": [
            "https://www.nassohcar.com/nassoh-car-tanger.jpg",
            "https://www.nassohcar.com/fleet-tanger.jpg",
            "https://www.nassohcar.com/tanger-airport-car-rental.jpg"
          ],
          "telephone": "+212631630013",
          "email": "contact@nassohcar.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "127 Av. Hafid Ibn Abdelbar",
            "addressLocality": "Tanger",
            "addressRegion": "Tanger-Tétouan-Al Hoceïma",
            "postalCode": "90100",
            "addressCountry": "MA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 35.7595,
            "longitude": -5.8340
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "08:00",
              "closes": "20:00"
            }
          ],
          "priceRange": "$$",
          "currenciesAccepted": "EUR, USD, MAD",
          "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services Location Voiture Tanger | Car Rental Services Tangier",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location Voiture Tanger Aéroport Ibn Battouta | Airport Car Rental",
                  "description": "Service de location de voiture 24h/24 à l'aéroport Ibn Battouta Tanger. Livraison directe, accueil personnalisé, large choix de véhicules. 24/7 car rental service at Tangier Ibn Battouta Airport."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location Voiture Port Tanger Med | Port Car Rental",
                  "description": "Service spécialisé location voiture au port Tanger Med. Coordination avec horaires ferries, service multilingue, véhicules adaptés exploration Maroc. Specialized car rental service at Tanger Med Port."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location de Voiture Économique Tanger | Economy Car Rental",
                  "description": "Location de voitures économiques abordables à partir de 200 DH/jour. Parfait pour voyageurs budget avec assurance incluse. Affordable economy cars from 200 DH/day with insurance included."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location de Voiture de Luxe Tanger | Luxury Car Rental",
                  "description": "Location de véhicules de luxe premium pour occasions spéciales à Tanger. Service VIP, véhicules haut de gamme. Premium luxury vehicles for special occasions with VIP service."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location SUV Familial Tanger | Family SUV Rental",
                  "description": "Location de SUV spacieux 7 places parfaits pour voyages famille à Tanger et région nord Maroc. Spacious 7-seater SUVs perfect for family trips in Tangier and northern Morocco."
                }
              }
            ]
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Tangier"
            },
            {
              "@type": "City", 
              "name": "Tetouan"
            },
            {
              "@type": "Place",
              "name": "Tanger Ibn Battouta Airport"
            },
            {
              "@type": "Place",
              "name": "Tanger Med Port"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.facebook.com/nassouhcar",
            "https://www.instagram.com/nassouhcar",
            "https://twitter.com/nassouhcar"
          ],
          "knowsAbout": [
            "Location de voiture Tanger",
            "Car rental Tangier Morocco", 
            "Location voiture aéroport Ibn Battouta",
            "Location voiture port Tanger Med",
            "Rent a car Morocco"
          ],
          "slogan": "Votre partenaire de confiance pour la location de voiture à Tanger | Your trusted partner for car rental in Tangier"
        }

      case 'Blog':
        return {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Nassoh Car – Blog Location Voiture Tanger",
          "url": "https://www.nassohcar.com/blog",
          "description": "Guides et conseils sur la location de voiture à Tanger et au Maroc : itinéraires, économies, sécurité, culture locale.",
          "publisher": {
            "@type": "Organization",
            "name": "Nassoh Car",
            "url": "https://www.nassohcar.com"
          }
        }

      case 'AutoRental':
        return {
          "@context": "https://schema.org",
          "@type": "AutoRental",
          "name": "Nassoh Car – Location Voiture Tanger",
          "url": "https://www.nassohcar.com",
          "telephone": "+212631630013",
          "priceRange": "$$",
          "currenciesAccepted": "EUR, USD, MAD",
          "paymentAccepted": "Cash, Credit Card, Debit Card",
          "areaServed": [
            { "@type": "City", "name": "Tangier", "addressCountry": "MA" },
            { "@type": "City", "name": "Tetouan", "addressCountry": "MA" },
            { "@type": "Place", "name": "Tanger Ibn Battouta Airport", "addressCountry": "MA" },
            { "@type": "Place", "name": "Tanger Med Port", "addressCountry": "MA" }
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
              ],
              "opens": "08:00",
              "closes": "20:00"
            }
          ],
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "MAD",
            "lowPrice": "200",
            "highPrice": "1500",
            "offerCount": "20",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
          }
        }

      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Location de Voiture au Maroc | Car Rental Service in Morocco",
          "description": "Service professionnel de location de voiture au Maroc avec une large gamme de véhicules. Professional car rental service in Morocco with a wide range of vehicles.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Nassoh Car - Location de Voiture",
            "url": "https://www.nassohcar.com"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "Morocco"
            },
            {
              "@type": "City",
              "name": "Tangier"
            },
            {
              "@type": "City",
              "name": "Tetouan"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Options de Location de Voiture | Vehicle Rental Options",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Voiture Économique | Economy Car",
                  "category": "Location de Voiture | Vehicle Rental"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "25",
                  "priceCurrency": "EUR",
                  "unitText": "par jour | per day"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Voiture de Luxe | Luxury Car",
                  "category": "Location de Voiture | Vehicle Rental"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "75",
                  "priceCurrency": "EUR",
                  "unitText": "par jour | per day"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "SUV | 4x4",
                  "category": "Location de Voiture | Vehicle Rental"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "50",
                  "priceCurrency": "EUR",
                  "unitText": "par jour | per day"
                }
              }
            ]
          }
        }

      case 'Review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Nassoh Car",
            "url": "https://www.nassohcar.com"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": isDataObject(data) ? data.rating || "5" : "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "author": {
            "@type": "Person",
            "name": isDataObject(data) ? data.author || "Customer" : "Customer"
          },
          "reviewBody": isDataObject(data) ? data.text || "Excellent service and great cars!" : "Excellent service and great cars!",
          "datePublished": isDataObject(data) ? data.date || new Date().toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
        }

      case 'Fleet':
        const fleetContent = getLocalizedContent()
        const fleetCountryInfo = getCountryTargeting()
        
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `${fleetContent.businessName} - Flotte`,
          "description": fleetContent.description,
          "url": "https://www.nassohcar.com/fleet",
          "numberOfItems": isDataObject(data) ? data.numberOfItems || 20 : 20,
          "itemListOrder": "https://schema.org/ItemListOrderAscending",
          "itemListElement": [
            {
              "@type": "Product",
              "name": `${language === 'fr' ? 'Voiture Économique' : language === 'es' ? 'Coche Económico' : language === 'it' ? 'Auto Economica' : language === 'de' ? 'Wirtschaftsauto' : 'Economy Car'} - ${language === 'fr' ? 'Location Tanger' : language === 'es' ? 'Alquiler Tánger' : language === 'it' ? 'Noleggio Tangeri' : language === 'de' ? 'Mietwagen Tanger' : 'Rental Tangier'}`,
              "description": fleetContent.economicDesc,
              "category": language === 'fr' ? 'Économique' : language === 'es' ? 'Económico' : language === 'it' ? 'Economico' : language === 'de' ? 'Wirtschaftlich' : 'Economic',
              "brand": {
                "@type": "Brand",
                "name": "Nassoh Car"
              },
              "offers": {
                "@type": "Offer",
                "price": "18",
                "priceCurrency": fleetCountryInfo.currency,
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2025-12-31",
                "seller": {
                  "@type": "Organization",
                  "name": "Nassoh Car"
                }
              }
            },
            {
              "@type": "Product", 
              "name": `${language === 'fr' ? 'SUV Familial' : language === 'es' ? 'SUV Familiar' : language === 'it' ? 'SUV Familiare' : language === 'de' ? 'Familien-SUV' : 'Family SUV'} - ${language === 'fr' ? 'Location Tanger' : language === 'es' ? 'Alquiler Tánger' : language === 'it' ? 'Noleggio Tangeri' : language === 'de' ? 'Mietwagen Tanger' : 'Rental Tangier'}`,
              "description": fleetContent.suvDesc,
              "category": "SUV",
              "brand": {
                "@type": "Brand",
                "name": "Nassoh Car"
              },
              "offers": {
                "@type": "Offer",
                "price": "36",
                "priceCurrency": fleetCountryInfo.currency,
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2025-12-31",
                "seller": {
                  "@type": "Organization",
                  "name": "Nassoh Car"
                }
              }
            },
            {
              "@type": "Product",
              "name": `${language === 'fr' ? 'Véhicule de Luxe' : language === 'es' ? 'Vehículo de Lujo' : language === 'it' ? 'Veicolo di Lusso' : language === 'de' ? 'Luxusfahrzeug' : 'Luxury Vehicle'} - ${language === 'fr' ? 'Location Tanger' : language === 'es' ? 'Alquiler Tánger' : language === 'it' ? 'Noleggio Tangeri' : language === 'de' ? 'Mietwagen Tanger' : 'Rental Tangier'}`,
              "description": fleetContent.luxuryDesc,
              "category": language === 'fr' ? 'Luxe' : language === 'es' ? 'Lujo' : language === 'it' ? 'Lusso' : language === 'de' ? 'Luxus' : 'Luxury',
              "brand": {
                "@type": "Brand",
                "name": "Nassoh Car"
              },
              "offers": {
                "@type": "Offer",
                "price": "72",
                "priceCurrency": fleetCountryInfo.currency,
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2025-12-31",
                "seller": {
                  "@type": "Organization",
                  "name": "Nassoh Car"
                }
              }
            }
          ],
          "provider": {
            "@type": "AutoRental",
            "name": "Nassoh Car",
            "url": "https://www.nassohcar.com",
            "telephone": "+212631630013",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "127 Av. Hafid Ibn Abdelbar",
              "addressLocality": "Tanger",
              "addressRegion": "Tanger-Tétouan-Al Hoceïma",
              "postalCode": "90100",
              "addressCountry": "MA"
            }
          }
        }

      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": isDataObject(data) ? data.title || "Guide Location Voiture Tanger - Conseils Expert" : "Guide Location Voiture Tanger - Conseils Expert",
          "description": isDataObject(data) ? data.description || "Guide complet pour la location de voiture à Tanger avec conseils d'expert, astuces économies et informations pratiques." : "Guide complet pour la location de voiture à Tanger avec conseils d'expert, astuces économies et informations pratiques.",
          "image": isDataObject(data) ? data.image || "https://www.nassohcar.com/blog-conseils-tanger.jpg" : "https://www.nassohcar.com/blog-conseils-tanger.jpg",
          "author": {
            "@type": "Organization",
            "name": "Nassoh Car",
            "url": "https://www.nassohcar.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Nassoh Car - Location de Voiture Tanger",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.nassohcar.com/nassouhe.png"
            }
          },
          "datePublished": isDataObject(data) ? data.datePublished || "2025-01-01" : "2025-01-01",
          "dateModified": isDataObject(data) ? data.dateModified || new Date().toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": isDataObject(data) ? data.url || "https://www.nassohcar.com/blog" : "https://www.nassohcar.com/blog"
          },
          "articleSection": "Location Voiture",
          "keywords": isDataObject(data) ? data.keywords || "location voiture Tanger, conseils location, guide expert, Nassoh Car" : "location voiture Tanger, conseils location, guide expert, Nassoh Car",
          "about": {
            "@type": "Thing",
            "name": "Location de Voiture à Tanger"
          }
        }

      case '@graph':
        return {
          "@context": "https://schema.org",
          "@graph": data
        }

      default:
        return {}
    }
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}

// Component for multiple reviews
export function ReviewsStructuredData({ reviews }: { reviews: Review[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": reviews.map((review, index) => ({
      "@type": "Review",
      "position": index + 1,
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Nassoh Car",
        "url": "https://www.nassohcar.com"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewBody": review.text,
      "datePublished": review.date
    }))
  }

  return (
    <Script
      id="reviews-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}