/**
 * SEO Utilities for Enhanced Search Engine Optimization
 * 
 * This module provides additional SEO utilities specifically optimized for
 * car rental services in Morocco with focus on Tanger and Tétouan.
 */

import { seoKeywords } from './seo-keywords';

/**
 * Generate structured data for car rental services
 */
// export function generateCarRentalStructuredData(city: string, lang: string = 'fr') {
//   const baseUrl = 'https://nassouhcar.com';
//   
//   return {
//     "@context": "https://schema.org",
//     "@type": "CarRental",
//     "name": "Nassoh Car",
//     "description": lang === 'fr' 
//       ? `Location de voiture premium à ${city}, Maroc. Service 24h/24, livraison gratuite aéroport.`
//       : `Premium car rental in ${city}, Morocco. 24/7 service, free airport delivery.`,
//     "url": baseUrl,
//     "telephone": "+212-XXX-XXXXXX",
//     "address": {
//       "@type": "PostalAddress",
//       "addressLocality": city,
//       "addressCountry": "MA"
//     },
//     "geo": {
//       "@type": "GeoCoordinates",
//       "latitude": city.toLowerCase() === 'tanger' ? "35.7595" : "35.5889",
//       "longitude": city.toLowerCase() === 'tanger' ? "-5.8340" : "-5.3626"
//     },
//     "priceRange": "200DH-1500DH",
//     "openingHours": "Mo-Su 00:00-23:59",
//     "serviceArea": {
//       "@type": "GeoCircle",
//       "geoMidpoint": {
//         "@type": "GeoCoordinates",
//         "latitude": city.toLowerCase() === 'tanger' ? "35.7595" : "35.5889",
//         "longitude": city.toLowerCase() === 'tanger' ? "-5.8340" : "-5.3626"
//       },
//       "geoRadius": "50000"
//     }
//   };
// }

/**
 * Generate FAQ structured data for better SEO
 */
// export function generateFAQStructuredData(city: string, lang: string = 'fr') {
//   const faqs = lang === 'fr' ? [
//     {
//       question: `Où puis-je louer une voiture à ${city}?`,
//       answer: `Nassoh Car propose la location de voiture à ${city} avec livraison gratuite à l'aéroport, au port Tanger Med et en centre-ville. Service disponible 24h/24.`
//     },
//     {
//       question: `Quel est le prix de location d'une voiture à ${city}?`,
//       answer: `Les prix commencent à partir de 200DH/jour pour une voiture économique. Nous proposons des véhicules premium et de luxe à des tarifs compétitifs.`
//     },
//     {
//       question: `Faut-il une caution pour louer une voiture à ${city}?`,
//       answer: `Nous proposons des options de location sans caution selon le type de véhicule et la durée de location. Contactez-nous pour plus d'informations.`
//     },
//     {
//       question: `Livrez-vous à l'aéroport de ${city}?`,
//       answer: `Oui, nous offrons la livraison gratuite à l'aéroport Ibn Battouta de Tanger et dans toute la région. Service disponible 24h/24.`
//     }
//   ] : [
//     {
//       question: `Where can I rent a car in ${city}?`,
//       answer: `Nassoh Car offers car rental in ${city} with free delivery to the airport, Tanger Med port, and city center. Service available 24/7.`
//     },
//     {
//       question: `What is the price for car rental in ${city}?`,
//       answer: `Prices start from 200DH/day for an economy car. We offer premium and luxury vehicles at competitive rates.`
//     },
//     {
//       question: `Do I need a deposit to rent a car in ${city}?`,
//       answer: `We offer no-deposit rental options depending on the vehicle type and rental duration. Contact us for more information.`
//     },
//     {
//       question: `Do you deliver to ${city} airport?`,
//       answer: `Yes, we offer free delivery to Tangier Ibn Battouta airport and throughout the region. Service available 24/7.`
//     }
//   ];

//   return {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": faqs.map(faq => ({
//       "@type": "Question",
//       "name": faq.question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faq.answer
//       }
//     }))
//   };
// }

/**
 * Generate meta keywords for SEO
 */
export function generateMetaKeywords(lang: string = 'fr'): string {
  const keywords = seoKeywords[lang as keyof typeof seoKeywords];
  if (!keywords) return '';
  
  const allKeywords = [
    ...keywords.primary,
    ...keywords.secondary,
    ...(keywords.local || [])
  ];
  
  return allKeywords.join(', ');
}

/**
 * Generate breadcrumb structured data
 */
// export function generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>) {
//   return {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": breadcrumbs.map((crumb, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "name": crumb.name,
//       "item": crumb.url
//     }))
//   };
// }

/**
 * Generate local business structured data
 */
// export function generateLocalBusinessStructuredData(city: string, lang: string = 'fr') {
//   return {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     "name": "Nassoh Car",
//     "image": "https://nassouhcar.com/logo.png",
//     "description": lang === 'fr' 
//       ? `Agence de location de voiture premium à ${city}, Maroc. Flotte moderne, service VIP 24h/24.`
//       : `Premium car rental agency in ${city}, Morocco. Modern fleet, VIP service 24/7.`,
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Avenue Mohammed V",
//       "addressLocality": city,
//       "addressRegion": city === 'Tanger' ? 'Tanger-Tétouan-Al Hoceïma' : 'Tanger-Tétouan-Al Hoceïma',
//       "postalCode": city === 'Tanger' ? '90000' : '93000',
//       "addressCountry": "MA"
//     },
//     "geo": {
//       "@type": "GeoCoordinates",
//       "latitude": city.toLowerCase() === 'tanger' ? "35.7595" : "35.5889",
//       "longitude": city.toLowerCase() === 'tanger' ? "-5.8340" : "-5.3626"
//     },
//     "url": "https://nassouhcar.com",
//     "telephone": "+212-XXX-XXXXXX",
//     "openingHoursSpecification": {
//       "@type": "OpeningHoursSpecification",
//       "dayOfWeek": [
//         "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
//       ],
//       "opens": "00:00",
//       "closes": "23:59"
//     },
//     "priceRange": "200DH-1500DH",
//     "currenciesAccepted": "MAD, EUR, USD",
//     "paymentAccepted": "Cash, Credit Card, Bank Transfer"
//   };
// }