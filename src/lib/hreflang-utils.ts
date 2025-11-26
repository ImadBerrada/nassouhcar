/**
 * Hreflang Utilities
 * 
 * This module provides functions for generating hreflang links for SEO and internationalization.
 */

// No need for Metadata import as we're using a simple object return type

/**
 * Supported languages and their corresponding regions
 */
export type SupportedLanguage = 'en' | 'fr' | 'es' | 'ar' | 'nl' | 'de' | 'it';

export interface LanguageRegion {
  lang: SupportedLanguage;
  region: string;
  url: string;
}

/**
 * Country-specific language mappings for targeted SEO
 */
export interface CountryLanguageMapping {
  country: string;
  language: SupportedLanguage;
  hreflang: string;
  locale: string;
}

/**
 * Generates hreflang links for SEO with proper language targeting
 * Only includes languages that actually have content to prevent hreflang conflicts
 * 
 * @param {string} basePath - The base path of the current page
 * @param {Object} options - Configuration options
 * @returns {Object} Metadata alternates object for Next.js Metadata
 */
export function generateHreflangLinks(basePath: string): { [key: string]: string } {
  const baseUrl = 'https://www.nassohcar.com';
  const fullUrl = `${baseUrl}${basePath}`;
  
  // Check if this is a localized route (contains [locale])
  const isLocalizedRoute = basePath.includes('/en/') || basePath.includes('/ar/');
  
  if (isLocalizedRoute) {
    // For localized routes, only include the specific language and x-default
    if (basePath.includes('/en/')) {
      return {
        'en-US': fullUrl,
        'x-default': fullUrl
      };
    } else if (basePath.includes('/ar/')) {
      return {
        'ar-MA': fullUrl,
        'x-default': fullUrl
      };
    }
  }
  
  // For non-localized routes (French content), only include French and x-default
  // This prevents claiming to serve content in languages we don't actually support
  return {
    'fr-FR': fullUrl,    // French (France) - primary language
    'x-default': fullUrl // Default fallback
  };
}