import { MetadataRoute } from 'next'

const baseUrl = 'https://www.nassohcar.com'

export async function generateSitemaps() {
  return [
    { id: 'main' },
    { id: 'en' },
    { id: 'es' },
    { id: 'blog' },
    { id: 'guides' },
  ]
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date()

  // Main / Root / FR Pages
  if (id === 'main') {
    const mainPages = [
      '',
      '/about',
      '/airport-car-rental',
      '/car-rental-tangier',
      '/car-rental-tetouan',
      '/contact',
      '/economy-cars',
      '/faq',
      '/fleet',
      '/location-voiture-europe',
      '/location-voiture-france',
      '/location-voiture-tanger',
      '/location-voiture-tanger-aeroport',
      '/location-voiture-tanger-centre-ville',
      '/location-voiture-tanger-pas-cher',
      '/location-voiture-tanger-port',
      '/location-voiture-tetouan',
      '/privacy',
      '/terms',
    ]

    return mainPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: route === '' ? 1.0 : 0.8,
    }))
  }

  // English Pages
  if (id === 'en') {
    const enPages = [
      '/en',
      '/en/about',
      '/en/airport-car-rental',
      '/en/car-rental-europe',
      '/en/car-rental-france',
      '/en/car-rental-tangier',
      '/en/car-rental-tangier-airport',
      '/en/car-rental-tangier-city-center',
      '/en/car-rental-tangier-port',
      '/en/car-rental-tangier-port-med',
      '/en/car-rental-tetouan',
      '/en/cheap-car-rental-tangier',
      '/en/contact',
      '/en/economy-cars',
      '/en/faq',
      '/en/fleet',
      '/en/privacy',
      '/en/terms',
    ]

    return enPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: route === '/en' ? 1.0 : 0.8,
    }))
  }

  // Spanish Pages
  if (id === 'es') {
    const esPages = [
      '/es',
      '/es/alquiler-coches-aeropuerto',
      '/es/alquiler-coches-aeropuerto-tanger',
      '/es/alquiler-coches-baratos-tanger',
      '/es/alquiler-coches-europa',
      '/es/alquiler-coches-francia',
      '/es/alquiler-coches-puerto-tanger',
      '/es/alquiler-coches-puerto-tanger-med',
      '/es/alquiler-coches-tanger',
      '/es/alquiler-coches-tanger-centro',
      '/es/alquiler-coches-tetuan',
      '/es/coches-economicos',
      '/es/contacto',
      '/es/faq',
      '/es/flota',
      '/es/privacidad',
      '/es/sobre-nosotros',
      '/es/terminos',
    ]

    return esPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: route === '/es' ? 1.0 : 0.8,
    }))
  }

  // Blog Pages (All languages)
  if (id === 'blog') {
    const frBlogPosts = [
      '/blog',
      '/blog/agence-de-location-de-voitures',
      '/blog/agence-location-voiture-aeroport-tanger',
      '/blog/agence-location-voiture-tanger',
      '/blog/conseils-location-voiture-tanger',
      '/blog/guide-tanger-attractions',
      '/blog/location-auto-a-long-terme',
      '/blog/location-auto-tanger',
      '/blog/location-de-voitures-tanger',
      '/blog/location-voiture-a-tanger',
      '/blog/location-voiture-aeroport-tanger',
      '/blog/location-voiture-au-port-de-tanger',
      '/blog/location-voiture-au-port-de-tanger-med',
      '/blog/location-voiture-longue-duree',
      '/blog/location-voiture-maroc',
      '/blog/location-voiture-pas-cher',
      '/blog/location-voiture-pas-cher-tanger',
      '/blog/location-voiture-tanger',
      '/blog/location-voiture-tanger-aeroport',
      '/blog/location-voiture-tanger-aeroport-pas-cher',
      '/blog/location-voiture-tanger-aeroport-sans-caution',
      '/blog/location-voiture-tanger-boukhalef',
      '/blog/location-voiture-tanger-les-mieux-notes',
      '/blog/location-voiture-tanger-maroc',
      '/blog/location-voiture-tanger-med',
      '/blog/location-voiture-tanger-pas-cher',
      '/blog/location-voiture-tanger-port-med',
      '/blog/location-voiture-tetouan',
      '/blog/location-voiture-tetouan-aeroport',
      '/blog/louer-voiture-a-petit-prix-tanger',
      '/blog/louer-voiture-aeroport-tanger',
      '/blog/trouver-une-voiture-de-location-a-tetouan',
      '/blog/voiture-a-louer-au-maroc',
      '/blog/voiture-a-louer-tanger',
      '/blog/voiture-de-location-a-tetouan',
    ]

    const enBlogPosts = [
      '/en/blog',
      '/en/blog/best-rated-car-rentals-tangier',
      '/en/blog/car-for-rent-morocco',
      '/en/blog/car-for-rent-tangier',
      '/en/blog/car-hire-tangier',
      '/en/blog/car-rental-agency',
      '/en/blog/car-rental-agency-tangier',
      '/en/blog/car-rental-agency-tangier-airport',
      '/en/blog/car-rental-france',
      '/en/blog/car-rental-in-tangier',
      '/en/blog/car-rental-morocco',
      '/en/blog/car-rental-tangier',
      '/en/blog/car-rental-tangier-airport',
      '/en/blog/car-rental-tangier-airport-no-deposit',
      '/en/blog/car-rental-tangier-auto',
      '/en/blog/car-rental-tangier-boukhalef',
      '/en/blog/car-rental-tangier-med',
      '/en/blog/car-rental-tangier-med-port',
      '/en/blog/car-rental-tangier-morocco',
      '/en/blog/car-rental-tangier-port',
      '/en/blog/car-rental-tangier-port-med',
      '/en/blog/car-rental-tetouan',
      '/en/blog/car-rental-tetouan-airport',
      '/en/blog/car-rental-tips-tangier',
      '/en/blog/cheap-car-rental',
      '/en/blog/cheap-car-rental-tangier',
      '/en/blog/cheap-car-rental-tangier-airport',
      '/en/blog/find-car-rental-in-tetouan',
      '/en/blog/guide-tangier-attractions',
      '/en/blog/long-term-car-hire',
      '/en/blog/long-term-car-rental',
      '/en/blog/rent-car-tangier-airport',
      '/en/blog/rent-cheap-car-tangier',
    ]

    const esBlogPosts = [
      '/es/blog',
      '/es/blog/agencia-alquiler-coches',
      '/es/blog/agencia-alquiler-coches-aeropuerto-tanger',
      '/es/blog/agencia-alquiler-coches-tanger',
      '/es/blog/alquiler-auto-tanger',
      '/es/blog/alquiler-coche-en-tanger',
      '/es/blog/alquiler-coches-aeropuerto-tanger',
      '/es/blog/alquiler-coches-aeropuerto-tanger-sin-fianza',
      '/es/blog/alquiler-coches-aeropuerto-tetuan',
      '/es/blog/alquiler-coches-baratos',
      '/es/blog/alquiler-coches-baratos-aeropuerto-tanger',
      '/es/blog/alquiler-coches-baratos-tanger',
      '/es/blog/alquiler-coches-francia',
      '/es/blog/alquiler-coches-larga-duracion',
      '/es/blog/alquiler-coches-larga-temporada',
      '/es/blog/alquiler-coches-marruecos',
      '/es/blog/alquiler-coches-puerto-tanger',
      '/es/blog/alquiler-coches-puerto-tanger-med',
      '/es/blog/alquiler-coches-tanger',
      '/es/blog/alquiler-coches-tanger-aeropuerto',
      '/es/blog/alquiler-coches-tanger-auto',
      '/es/blog/alquiler-coches-tanger-baratos',
      '/es/blog/alquiler-coches-tanger-boukhalef',
      '/es/blog/alquiler-coches-tanger-marruecos',
      '/es/blog/alquiler-coches-tanger-med',
      '/es/blog/alquiler-coches-tanger-med-puerto',
      '/es/blog/alquiler-coches-tetuan',
      '/es/blog/alquiler-de-coches-en-tanger',
      '/es/blog/coche-de-alquiler-en-tetuan',
      '/es/blog/coche-para-alquilar-marruecos',
      '/es/blog/coche-para-alquilar-tanger',
      '/es/blog/consejos-alquiler-coches-tanger',
      '/es/blog/encontrar-alquiler-coches-tetuan',
      '/es/blog/guia-atracciones-tanger',
      '/es/blog/mejores-alquileres-coches-tanger',
      '/es/blog/rentar-coche-aeropuerto-tanger',
      '/es/blog/rentar-coche-barato-tanger',
    ]

    const categoriesFr = ['adventure', 'insider-secrets', 'money-saving-tips', 'transportation', 'car-reviews', 'city-exploration', 'travel-guides', 'photography', 'safety-tips', 'local-culture']
    const categoriesEn = ['adventure', 'insider-secrets', 'money-saving-tips', 'transportation', 'car-reviews', 'city-exploration', 'travel-guides', 'photography', 'safety-tips', 'local-culture']
    const categoriesEs = ['aventura', 'secretos-locales', 'consejos-ahorro', 'transporte', 'resenas-coches', 'exploracion-ciudad', 'guias-viaje', 'fotografia', 'consejos-seguridad', 'cultura-local']

    const citiesFr = ['location-voiture-tanger-ville', 'location-voiture-tanger-port']
    const citiesEn = ['tangier']
    const citiesEs = ['tanger']

    const allBlogUrls = [
      ...frBlogPosts,
      ...enBlogPosts,
      ...esBlogPosts,
      ...categoriesFr.map(c => `/blog/category/${c}`),
      ...categoriesEn.map(c => `/en/blog/category/${c}`),
      ...categoriesEs.map(c => `/es/blog/categoria/${c}`),
      ...citiesFr.map(c => `/blog/${c}`),
      ...citiesEn.map(c => `/en/blog/${c}`),
      ...citiesEs.map(c => `/es/blog/${c}`),
    ]

    return allBlogUrls.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  }

  // Guides Pages (All languages)
  if (id === 'guides') {
    const guides = [
      '/guides',
      '/guides/attractions-cachees-maroc',
      '/guides/budget-voyage-maroc',
      '/guides/conduire-maroc-guide',
      '/guides/conseils-location-voiture',
      '/guides/guide-tanger-complet',
      '/guides/itineraires-maroc',
      '/en/guides',
      '/en/guides/car-rental-tips-morocco',
      '/en/guides/driving-in-morocco',
      '/en/guides/hidden-attractions-morocco',
      '/en/guides/morocco-itineraries',
      '/en/guides/morocco-travel-budget',
      '/en/guides/tangier-complete-guide',
      '/es/guias',
      '/es/guias/atracciones-ocultas-marruecos',
      '/es/guias/conducir-en-marruecos',
      '/es/guias/consejos-alquiler-coches-marruecos',
      '/es/guias/guia-tanger-completa',
      '/es/guias/itinerarios-marruecos',
      '/es/guias/presupuesto-viaje-marruecos',
      '/ar/guides/attractions-cachees-maroc',
      '/ar/guides/budget-voyage-maroc',
      '/ar/guides/conduire-maroc-guide',
      '/ar/guides/guide-tanger-complet',
    ]

    return guides.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  }

  return []
}
