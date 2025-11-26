/**
 * SEO Keywords and Metadata Utilities
 * 
 * This module provides functions for managing SEO metadata across the application.
 */

/**
 * Common SEO keywords for the application with country-specific targeting
 */
export const seoKeywords = {
  fr: {
    primary: [
      'location voiture Tanger',
      'location voiture à Tanger',
      'location de voitures Tanger',
      'voiture à louer Tanger',
      'location voiture Tanger Maroc',
      'louer une voiture à Tanger',
      'location car Tanger',
      'Nassoh Car'
    ],
    secondary: [
      'location auto Tanger',
      'location voiture longue durée',
      'location auto à long terme',
      'agence location voiture Tanger',
      'agence de location de voitures',
      'location voiture Maroc',
      'voiture à louer au Maroc'
    ],
    airport: [
      'location voiture Tanger aéroport',
      'location voiture à l\'aéroport de Tanger',
      'location voiture Tanger Boukhalef',
      'location voiture à Tanger aéroport pas cher',
      'location voiture Tanger aéroport sans caution',
      'agence location voiture aéroport Tanger'
    ],
    port: [
      'location voiture Tanger Med',
      'location voiture au port de Tanger',
      'location voiture au port de Tanger Med'
    ],
    budget: [
      'location voiture pas cher Tanger',
      'location voiture Tanger pas cher',
      'location voiture Tanger aéroport pas cher',
      'louer voiture à petit prix Tanger',
      'location voiture pas cher'
    ],
    quality: [
      'location voiture Tanger les mieux notés'
    ],
    tetouan: [
      'location voiture Tétouan',
      'location voiture Tétouan aéroport',
      'trouver une voiture de location à Tétouan',
      'voiture de location à Tétouan'
    ],
    local: [
      'location voiture Tanger',
      'location voiture Tétouan',
      'location voiture Casablanca',
      'location voiture Marrakech'
    ],
    countrySpecific: [
      'location voiture Maroc depuis France',
      'voiture de location Tanger France',
      'réservation voiture Maroc français',
      'location auto Tanger depuis Paris',
      'voiture pas cher Maroc France',
      'location véhicule Tanger français'
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
      'car rental Tanger',
      'car rental Tetouan',
      'car rental Casablanca',
      'car rental Marrakech'
    ],
    countrySpecific: [
      'Morocco car rental international',
      'Tangier car hire Europe',
      'rent car Morocco from Europe',
      'international car rental Morocco',
      'European car rental Tangier',
      'Morocco vehicle hire tourists'
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
    ],
    countrySpecific: [
      'تأجير سيارات المغرب للسياح',
      'استئجار سيارة طنجة للزوار',
      'خدمة تأجير السيارات الدولية',
      'تأجير سيارات طنجة للأجانب'
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
    ],
    countrySpecific: [
      'alquiler coches Marruecos desde España',
      'rent a car Tánger España',
      'alquiler vehículos Marruecos españoles',
      'coches alquiler Tánger ferry España',
      'reserva coche Marruecos desde Algeciras',
      'alquiler auto Tánger turistas españoles'
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
    ],
    countrySpecific: [
      'autoverhuur Marokko vanuit Nederland',
      'auto huren Tanger Nederland',
      'voertuigverhuur Marokko Nederlandse',
      'autoverhuur Tanger ferry Spanje',
      'auto reserveren Marokko Nederland',
      'huurauto Tanger Nederlandse toeristen'
    ]
  },
  de: {
    primary: [
      'Autovermietung',
      'Auto mieten',
      'Marokko',
      'günstiger Preis',
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
      'Autovermietung Marrakesch'
    ],
    countrySpecific: [
      'Autovermietung Marokko aus Deutschland',
      'Mietwagen Tanger Deutschland',
      'Auto mieten Marokko deutsche Touristen',
      'Fahrzeugvermietung Tanger Deutschland',
      'Mietwagen Marokko günstig Deutschland',
      'Auto reservieren Tanger deutsche'
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
    ],
    countrySpecific: [
      'noleggio auto Marocco dall\'Italia',
      'auto a noleggio Tangeri Italia',
      'noleggio veicoli Marocco italiani',
      'auto noleggio Tangeri traghetto Spagna',
      'prenotazione auto Marocco Italia',
      'noleggio auto Tangeri turisti italiani'
    ]
  }
};

/**
 * Generate city-specific keywords with country targeting support
 */
export function generateCityKeywords(lang: string, city: string, includeCountrySpecific: boolean = true) {
  const keywords = seoKeywords[lang as keyof typeof seoKeywords];
  if (!keywords) return [];

  const allKeywords = [
    ...keywords.primary,
    ...keywords.secondary,
    ...keywords.local.filter(keyword => keyword.toLowerCase().includes(city.toLowerCase()))
  ];

  // Add specialized keyword categories for French
  if (lang === 'fr') {
    const frKeywords = keywords as {
      primary: string[];
      secondary: string[];
      airport?: string[];
      port?: string[];
      budget?: string[];
      quality?: string[];
      tetouan?: string[];
      local: string[];
      countrySpecific: string[];
    };
    if (frKeywords.airport) {
      allKeywords.push(...frKeywords.airport);
    }
    if (frKeywords.port) {
      allKeywords.push(...frKeywords.port);
    }
    if (frKeywords.budget) {
      allKeywords.push(...frKeywords.budget);
    }
    if (frKeywords.quality) {
      allKeywords.push(...frKeywords.quality);
    }
    if (frKeywords.tetouan) {
      allKeywords.push(...frKeywords.tetouan);
    }
  }

  // Add country-specific keywords if available and requested
  if (includeCountrySpecific && keywords.countrySpecific) {
    allKeywords.push(...keywords.countrySpecific);
  }

  // Add city-specific variations
  const citySpecificKeywords = [];
  
  switch (lang) {
    case 'fr':
      citySpecificKeywords.push(
        `location voiture ${city}`,
        `location voiture à ${city}`,
        `location de voitures ${city}`,
        `voiture à louer ${city}`,
        `location voiture ${city} Maroc`,
        `louer une voiture à ${city}`,
        `location car ${city}`,
        `location voiture ${city} aéroport`,
        `location voiture à l'aéroport de ${city}`,
        `location voiture ${city} Boukhalef`,
        `location voiture à ${city} aéroport pas cher`,
        `location voiture ${city} aéroport sans caution`,
        `agence location voiture aéroport ${city}`,
        `location voiture ${city} Med`,
        `location voiture au port de ${city}`,
        `location voiture au port de ${city} Med`,
        `location voiture pas cher ${city}`,
        `location voiture ${city} pas cher`,
        `location voiture ${city} aéroport pas cher`,
        `louer voiture à petit prix ${city}`,
        `location voiture ${city} les mieux notés`,
        `location auto ${city}`,
        `agence location voiture ${city}`,
        `location ${city} Nassoh Car`
      );
      break;
    case 'en':
      citySpecificKeywords.push(
        `car rental ${city}`,
        `rent a car ${city}`,
        `vehicle rental ${city}`,
        `car hire ${city}`,
        `${city} airport car rental`,
        `${city} port car rental`,
        `cheap car rental ${city}`,
        `${city} Nassoh Car rental`
      );
      break;
    case 'es':
      citySpecificKeywords.push(
        `alquiler de coches ${city}`,
        `alquilar un coche ${city}`,
        `alquiler vehículos ${city}`,
        `rent a car ${city}`,
        `alquiler coches aeropuerto ${city}`,
        `alquiler coches puerto ${city}`,
        `coches baratos ${city}`,
        `${city} Nassoh Car alquiler`
      );
      break;
    case 'de':
      citySpecificKeywords.push(
        `Autovermietung ${city}`,
        `Auto mieten ${city}`,
        `Fahrzeugvermietung ${city}`,
        `Mietwagen ${city}`,
        `Autovermietung Flughafen ${city}`,
        `Autovermietung Hafen ${city}`,
        `günstige Autovermietung ${city}`,
        `${city} Nassoh Car Vermietung`
      );
      break;
    case 'it':
      citySpecificKeywords.push(
        `noleggio auto ${city}`,
        `affittare auto ${city}`,
        `noleggio veicoli ${city}`,
        `auto a noleggio ${city}`,
        `noleggio auto aeroporto ${city}`,
        `noleggio auto porto ${city}`,
        `auto economiche ${city}`,
        `${city} Nassoh Car noleggio`
      );
      break;
    case 'nl':
      citySpecificKeywords.push(
        `autoverhuur ${city}`,
        `auto huren ${city}`,
        `voertuigverhuur ${city}`,
        `huurauto ${city}`,
        `autoverhuur luchthaven ${city}`,
        `autoverhuur haven ${city}`,
        `goedkope autoverhuur ${city}`,
        `${city} Nassoh Car verhuur`
      );
      break;
    case 'ar':
      citySpecificKeywords.push(
        `تأجير سيارات ${city}`,
        `استئجار سيارة ${city}`,
        `تأجير سيارات مطار ${city}`,
        `تأجير سيارات ميناء ${city}`,
        `سيارات رخيصة ${city}`,
        `${city} ناصح كار`
      );
      break;
  }

  return [...allKeywords, ...citySpecificKeywords];
}

/**
 * Generates a meta description based on the provided parameters
 * 
 * @param {string} lang - Language code ('fr', 'en', 'ar', 'es', 'nl', 'de', 'it')
 * @param {string} city - The city name (e.g., 'Tangier', 'Casablanca')
 * @param {string} [additionalInfo] - Optional additional information
 * @returns {string} The generated meta description
 */
export function getMetaDescription(lang: string, city: string, additionalInfo?: string): string {
  if (lang === 'fr') {
    let description = `Location de Voiture de Luxe au Maroc | Nassoh Car - Réservez Maintenant! ✨ Voitures Premium à ${city} dès 200DH/jour. Service VIP 24h/24, Livraison Gratuite Aéroport. Explorez le Maroc avec Style! Location voiture ${city} aéroport, port Tanger Med, sans caution.`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  } else if (lang === 'en') {
    let description = `Luxury Car Rental Morocco | Nassoh Car - Book Now! ✨ Premium Cars in ${city} from 200DH/day. VIP Service 24/7, Free Airport Delivery. Explore Morocco in Style!`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  } else if (lang === 'ar') {
    let description = `تأجير السيارات الفاخرة في المغرب | ناصح كار - احجز الآن! ✨ سيارات فاخرة في ${city} من 200 درهم/يوم. خدمة VIP على مدار الساعة، توصيل مجاني للمطار. اكتشف المغرب بأناقة!`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  } else if (lang === 'es') {
    let description = `Alquiler de Coches de Lujo Marruecos | Nassoh Car - ¡Reserva Ahora! ✨ Coches Premium en ${city} desde 200DH/día. Servicio VIP 24/7, Entrega Gratuita en Aeropuerto. ¡Explora Marruecos con Estilo!`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  } else if (lang === 'nl') {
    let description = `Luxe Autoverhuur Marokko | Nassoh Car - Boek Nu! ✨ Premium Auto's in ${city} vanaf 200DH/dag. VIP Service 24/7, Gratis Luchthaven Bezorging. Ontdek Marokko in Stijl!`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  } else if (lang === 'de') {
    let description = `Luxus Autovermietung Marokko | Nassoh Car - Jetzt Buchen! ✨ Premium Autos in ${city} ab 200DH/Tag. VIP Service 24/7, Kostenlose Flughafen Lieferung. Entdecken Sie Marokko mit Stil!`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  } else if (lang === 'it') {
    let description = `Noleggio Auto di Lusso Marocco | Nassoh Car - Prenota Ora! ✨ Auto Premium a ${city} da 200DH/giorno. Servizio VIP 24/7, Consegna Gratuita in Aeroporto. Scopri il Marocco con Stile!`;
    
    if (additionalInfo) {
      description += ` ${additionalInfo}`;
    }
    
    return description;
  }
  
  // Default fallback
  let description = `Premium Car Rental Services in ${city}, Morocco | Nassoh Car - Luxury Fleet, Best Prices, VIP Service 24/7. Book Your Dream Car Today!`;
  
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
 * @param {string} [additionalInfo] - Optional additional information
 * @returns {string} The generated page title
 */
export function getPageTitle(lang: string, city: string, additionalInfo?: string): string {
  if (lang === 'fr') {
    let title = `Location Voiture ${city} | Nassoh Car - Voitures de Luxe Maroc`;
    
    if (additionalInfo) {
      title = `${additionalInfo} | ${title}`;
    }
    
    return title;
  } else if (lang === 'en') {
    let title = `Car Rental ${city} | Nassoh Car - Luxury Cars Morocco`;
    
    if (additionalInfo) {
      title = `${additionalInfo} | ${title}`;
    }
    
    return title;
  } else if (lang === 'ar') {
    let title = `تأجير السيارات ${city} | ناصح كار - سيارات فاخرة المغرب`;
    
    if (additionalInfo) {
      title = `${additionalInfo} | ${title}`;
    }
    
    return title;
  } else if (lang === 'es') {
    let title = `Alquiler Coches ${city} | Nassoh Car - Coches de Lujo Marruecos`;
    
    if (additionalInfo) {
      title = `${additionalInfo} | ${title}`;
    }
    
    return title;
  } else if (lang === 'nl') {
    let title = `Autoverhuur ${city} | Nassoh Car - Luxe Auto's Marokko`;
    
    if (additionalInfo) {
      title = `${additionalInfo} | ${title}`;
    }
    
    return title;
  } else if (lang === 'de') {
    let title = `Autovermietung ${city} | Nassoh Car - Luxus Autos Marokko`;
    
    if (additionalInfo) {
      title = `${additionalInfo} | ${title}`;
    }
    
    return title;
  } else if (lang === 'it') {
    let title = `Noleggio Auto ${city} | Nassoh Car - Auto di Lusso Marocco`;
    
    if (additionalInfo) {
      title = `${additionalInfo} | ${title}`;
    }
    
    return title;
  }
  
  // Default fallback
  let title = `Car Rental ${city} | Nassoh Car - Premium Fleet Morocco`;
  
  if (additionalInfo) {
    title = `${additionalInfo} | ${title}`;
  }
  
  return title;
}