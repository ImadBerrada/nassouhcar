import { routeMappings } from './route-mappings';

/**
 * Hreflang Utilities
 * 
 * This module provides functions for generating hreflang links for SEO and internationalization.
 */

/**
 * Generates hreflang links for SEO with proper language targeting
 * Uses explicit route mappings to ensure correct cross-language linking
 * 
 * @param {string} basePath - The base path of the current page
 * @returns {Object} Metadata alternates object for Next.js Metadata
 */
export function generateHreflangLinks(basePath: string): { [key: string]: string } {
  const baseUrl = 'https://www.nassohcar.com';
  const fullUrl = `${baseUrl}${basePath}`;
  
  // 1. Try to find an exact match in our mappings
  const mapping = routeMappings.find(m => 
    m.fr === basePath || 
    m.en === basePath || 
    m.es === basePath
  );

  if (mapping) {
    return {
      'fr-FR': `${baseUrl}${mapping.fr}`,
      'en-US': `${baseUrl}${mapping.en}`,
      'es-ES': `${baseUrl}${mapping.es}`,
      'x-default': `${baseUrl}${mapping.fr}`
    };
  }

  // 2. Fallback logic if no mapping is found
  // Check if this is a localized route (contains [locale])
  const isLocalizedRoute = basePath.includes('/en/') || basePath.includes('/es/');
  
  if (isLocalizedRoute) {
    if (basePath.includes('/en/')) {
      return {
        'en-US': fullUrl,
        'x-default': fullUrl
      };
    } else if (basePath.includes('/es/')) {
      return {
        'es-ES': fullUrl,
        'x-default': fullUrl
      };
    }
  }
  
  // For non-localized routes (French content), default fallback
  return {
    'fr-FR': fullUrl,
    'x-default': fullUrl
  };
}
