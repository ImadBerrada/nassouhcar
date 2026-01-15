import { MetadataRoute } from 'next'

const baseUrl = 'https://www.nassohcar.com'

export async function generateSitemaps() {
  return [
    { id: 'main' },
    { id: 'en' },
    { id: 'es' },
    { id: 'blog' },
  ]
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date()

  // Main / Root / FR Pages
  if (id === 'main') {
    const mainPages = [
      '',
      '/about',
      '/contact',
      
      '/faq',
      '/fleet',
      '/location-voiture-europe',
      '/location-voiture-tanger',
      '/location-voiture-tanger-aeroport',
      '/location-voiture-tanger-centre-ville',
      '/location-voiture-tanger-pas-cher',
      '/location-voiture-tanger-port',
      '/location-voiture-tetouan',
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
      '/en/forgot-password',
      '/en/login',
      '/en/privacy',
      '/en/register',
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
      '/es/contacto',
      '/es/faq',
      '/es/flota',
      '/es/iniciar-sesion',
      '/es/privacidad',
      '/es/recuperar-contrasena',
      '/es/registro',
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

    const citiesFr = ['location-voiture-tanger-ville', 'location-voiture-tanger-port']
    const citiesEn = ['tangier']
    const citiesEs = ['tanger']

    const allBlogUrls = [
      ...frBlogPosts,
      ...enBlogPosts,
      ...esBlogPosts,
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

  return []
}
