/**
 * SEO Keywords and Metadata Utilities
 * 
 * This module provides functions for managing SEO metadata across the application.
 */

/**
 * Common SEO keywords for the application
 */
export const seoKeywords = {
  fr: {
    primary: [
      'location voiture',
      'voiture à louer',
      'Maroc',
      'prix pas cher',
      'réservation',
      'Nassoh Car'
    ],
    secondary: [
      'location auto',
      'service de location',
      'véhicules disponibles',
      'meilleur prix'
    ],
    local: [
      'location voiture Tanger',
      'location voiture Tétouan',
      'location voiture Casablanca',
      'location voiture Marrakech'
    ]
  },
  en: {
    primary: [
      'car rental',
      'rent a car',
      'Morocco',
      'affordable price',
      'booking',
      'Nassoh Car'
    ],
    secondary: [
      'vehicle rental',
      'rental service',
      'available cars',
      'best price'
    ],
    local: [
      'car rental Tangier',
      'car rental Tetouan',
      'car rental Casablanca',
      'car rental Marrakech'
    ]
  },
  ar: {
    primary: [
      'تأجير سيارات',
      'استئجار سيارة',
      'المغرب',
      'أسعار معقولة',
      'حجز',
      'ناصح كار'
    ],
    secondary: [
      'خدمة تأجير',
      'سيارات متوفرة',
      'أفضل سعر'
    ],
    local: [
      'تأجير سيارات طنجة',
      'تأجير سيارات تطوان',
      'تأجير سيارات الدار البيضاء',
      'تأجير سيارات مراكش'
    ]
  },
  es: {
    primary: [
      'alquiler de coches',
      'alquilar un coche',
      'Marruecos',
      'precio asequible',
      'reserva',
      'Nassoh Car'
    ],
    secondary: [
      'alquiler de vehículos',
      'servicio de alquiler',
      'coches disponibles',
      'mejor precio'
    ],
    local: [
      'alquiler de coches Tánger',
      'alquiler de coches Tetuán',
      'alquiler de coches Casablanca',
      'alquiler de coches Marrakech'
    ]
  },
  nl: {
    primary: [
      'autoverhuur',
      'auto huren',
      'Marokko',
      'betaalbare prijs',
      'reservering',
      'Nassoh Car'
    ],
    secondary: [
      'voertuigverhuur',
      'verhuurservice',
      'beschikbare auto\'s',
      'beste prijs'
    ],
    local: [
      'autoverhuur Tanger',
      'autoverhuur Tetouan',
      'autoverhuur Casablanca',
      'autoverhuur Marrakech'
    ]
  },
  de: {
    primary: [
      'Autovermietung',
      'Auto mieten',
      'Marokko',
      'erschwinglicher Preis',
      'Buchung',
      'Nassoh Car'
    ],
    secondary: [
      'Fahrzeugvermietung',
      'Mietservice',
      'verfügbare Autos',
      'bester Preis'
    ],
    local: [
      'Autovermietung Tanger',
      'Autovermietung Tetouan',
      'Autovermietung Casablanca',
      'Autovermietung Marrakech'
    ]
  },
  it: {
    primary: [
      'noleggio auto',
      'affittare un\'auto',
      'Marocco',
      'prezzo conveniente',
      'prenotazione',
      'Nassoh Car'
    ],
    secondary: [
      'noleggio veicoli',
      'servizio di noleggio',
      'auto disponibili',
      'miglior prezzo'
    ],
    local: [
      'noleggio auto Tangeri',
      'noleggio auto Tetouan',
      'noleggio auto Casablanca',
      'noleggio auto Marrakech'
    ]
  }
};

/**
 * Generate city-specific keywords for SEO
 * 
 * @param {string} lang - Language code ('fr', 'en', 'ar')
 * @param {string} city - The city name (e.g., 'Tangier', 'Casablanca')
 * @returns {Object} Object containing primary and longTail keywords
 */
export function generateCityKeywords(lang: string, city: string) {
  const cityMappings = {
    'Tanger': { en: 'Tangier', ar: 'طنجة' },
    'Tangier': { fr: 'Tanger', ar: 'طنجة' },
    'Tétouan': { en: 'Tetouan', ar: 'تطوان' },
    'Tetouan': { fr: 'Tétouan', ar: 'تطوان' },
    'Casablanca': { fr: 'Casablanca', en: 'Casablanca', ar: 'الدار البيضاء' },
    'Marrakech': { fr: 'Marrakech', en: 'Marrakesh', ar: 'مراكش' },
    'Fès': { en: 'Fez', ar: 'فاس' },
    'Fez': { fr: 'Fès', ar: 'فاس' }
  };

  // Get city name in the requested language
  const cityName = city;
  
  // Generate keywords based on language
  if (lang === 'fr') {
    return {
      primary: [`location voiture ${cityName}`, `voiture à louer ${cityName}`],
      longTail: [
        `location voiture ${cityName} pas cher`,
        `louer une voiture à ${cityName}`,
        `location auto ${cityName}`,
        `service de location de voitures ${cityName}`,
        `prix location voiture ${cityName}`
      ]
    };
  } else if (lang === 'en') {
    return {
      primary: [`${cityName} car rental`, `rent a car in ${cityName}`],
      longTail: [
        `cheap car rental ${cityName}`,
        `affordable car rental in ${cityName}`,
        `best car rental service in ${cityName}`,
        `${cityName} car hire`,
        `car rental prices ${cityName}`
      ]
    };
  } else if (lang === 'ar') {
    return {
      primary: [`تأجير سيارات في ${cityName}`, `استئجار سيارة في ${cityName}`],
      longTail: [
        `تأجير سيارات رخيصة في ${cityName}`,
        `أفضل خدمة تأجير سيارات في ${cityName}`,
        `أسعار تأجير السيارات في ${cityName}`
      ]
    };
  }
  
  // Default fallback
  return {
    primary: [`${cityName} car rental`],
    longTail: [`rent a car in ${cityName}`, `affordable car rental in ${cityName}`]
  };
}

/**
 * Generates a meta description for a page based on the provided parameters
 * 
 * @param {string} lang - Language code ('fr', 'en', 'ar')
 * @param {string} city - The city name (e.g., 'Tangier', 'Casablanca')
 * @param {string} [additionalInfo] - Optional additional information
 * @returns {string} The generated meta description
 */
export function getMetaDescription(lang: string, city: string, additionalInfo?: string): string {
  if (lang === 'fr') {
    let description = `🚗 Location de Voiture de Luxe au Maroc | Nassoh Car - Réservez Maintenant! ✨ Voitures Premium à ${city} dès 200DH/jour. Service VIP 24h/24, Livraison Gratuite à l'Aéroport. Découvrez le Maroc avec Style!`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  } else if (lang === 'en') {
    let description = `🚗 Luxury Car Rental Morocco | Nassoh Car - Book Now! ✨ Premium Cars in ${city} from 200DH/day. VIP Service 24/7, Free Airport Delivery. Explore Morocco in Style!`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  } else if (lang === 'ar') {
    let description = `🚗 تأجير السيارات الفاخرة في المغرب | ناصح كار - احجز الآن! ✨ سيارات فاخرة في ${city} من 200 درهم/يوم. خدمة VIP على مدار الساعة، توصيل مجاني للمطار. اكتشف المغرب بأناقة!`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  }
  
  // Default fallback
  let description = `🚗 Premium Car Rental Services in ${city}, Morocco | Nassoh Car - Luxury Fleet, Best Prices, VIP Service 24/7. Book Your Dream Car Today!`;
  
  if (additionalInfo) {
    description += ` ${additionalInfo}`;
  }
  
  return description;
}

/**
 * Generates a page title based on the provided parameters
 * 
 * @param {string} lang - Language code ('fr', 'en', 'ar')
 * @param {string} city - The city name (e.g., 'Tangier', 'Casablanca')
 * @param {boolean} [includeCompanyName=true] - Whether to include the company name
 * @returns {string} The generated page title
 */
export function getPageTitle(lang: string, city: string, includeCompanyName: boolean = true): string {
  let title = '';
  
  if (lang === 'fr') {
    title = `🚗 Location Voiture de Luxe ${city} | Nassoh Car - Réservez Maintenant! ✨`;
  } else if (lang === 'en') {
    title = `🚗 Luxury Car Rental ${city} | Nassoh Car - Book Now! ✨`;
  } else if (lang === 'ar') {
    title = `🚗 تأجير السيارات الفاخرة ${city} | ناصح كار - احجز الآن! ✨`;
  } else {
    title = `🚗 Premium Car Rental ${city} | Nassoh Car - Book Now! ✨`;
  }
  
  if (!includeCompanyName) {
    // Remove company name if requested (though it's already included in the new format)
    title = title.split(' | ')[0];
  }
  
  return title;
}