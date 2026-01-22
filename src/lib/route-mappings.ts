export interface RouteMapping {
  fr: string;
  en: string;
  es: string;
}

export const routeMappings: RouteMapping[] = [
  // Main Pages
  { fr: '/', en: '/en', es: '/es' },
  { fr: '/fleet', en: '/en/fleet', es: '/es/flota' },
  { fr: '/economy-cars', en: '/en/economy-cars', es: '/es/coches-economicos' },
  { fr: '/contact', en: '/en/contact', es: '/es/contacto' },
  { fr: '/faq', en: '/en/faq', es: '/es/faq' },
  { fr: '/privacy', en: '/en/privacy', es: '/es/privacidad' },
  { fr: '/terms', en: '/en/terms', es: '/es/terminos' },
  { fr: '/blog', en: '/en/blog', es: '/es/blog' },
  { fr: '/about', en: '/en/about', es: '/es/sobre-nosotros' },
  
  // Auth & Dashboard
  { fr: '/login', en: '/en/login', es: '/es/iniciar-sesion' },
  { fr: '/register', en: '/en/register', es: '/es/registro' },
  { fr: '/forgot-password', en: '/en/forgot-password', es: '/es/recuperar-contrasena' },
  { fr: '/dashboard', en: '/en/dashboard', es: '/es/panel' },
  { fr: '/dashboard/profile', en: '/en/dashboard/profile', es: '/es/panel/perfil' },

  // Landing Pages - Locations & Services
  { fr: '/location-voiture-tanger', en: '/en/car-rental-tangier', es: '/es/alquiler-coches-tanger' },
  { fr: '/location-voiture-tetouan', en: '/en/car-rental-tetouan', es: '/es/alquiler-coches-tetuan' },
  { fr: '/location-voiture-tanger-aeroport', en: '/en/car-rental-tangier-airport', es: '/es/alquiler-coches-aeropuerto-tanger' },
  { fr: '/location-voiture-tanger-port', en: '/en/car-rental-tangier-port', es: '/es/alquiler-coches-puerto-tanger' },
  { fr: '/location-voiture-tanger-centre-ville', en: '/en/car-rental-tangier-city-center', es: '/es/alquiler-coches-tanger-centro' },
  { fr: '/location-voiture-europe', en: '/en/car-rental-europe', es: '/es/alquiler-coches-europa' },
  { fr: '/location-voiture-tanger-pas-cher', en: '/en/cheap-car-rental-tangier', es: '/es/alquiler-coches-baratos-tanger' },
  
  // Blog posts - Core & Guides
  { fr: '/blog/guide-tanger-attractions', en: '/en/blog/guide-tangier-attractions', es: '/es/blog/guia-atracciones-tanger' },
  { fr: '/blog/agence-location-voiture-tanger', en: '/en/blog/car-rental-agency-tangier', es: '/es/blog/agencia-alquiler-coches-tanger' },
  { fr: '/blog/agence-location-voiture-aeroport-tanger', en: '/en/blog/car-rental-agency-tangier-airport', es: '/es/blog/agencia-alquiler-coches-aeropuerto-tanger' },
  { fr: '/blog/location-voiture-aeroport-tanger', en: '/en/blog/car-rental-tangier-airport', es: '/es/blog/alquiler-coches-aeropuerto-tanger' },
  { fr: '/blog/location-voiture-tanger', en: '/en/blog/car-rental-tangier', es: '/es/blog/alquiler-coches-tanger' },
  { fr: '/blog/location-voiture-tanger-med', en: '/en/blog/car-rental-tangier-med', es: '/es/blog/alquiler-coches-tanger-med' },
  { fr: '/blog/location-voiture-tanger-port-med', en: '/en/blog/car-rental-tangier-port-med', es: '/es/blog/alquiler-coches-puerto-tanger-med' },
  { fr: '/blog/location-voiture-au-port-de-tanger', en: '/en/blog/car-rental-tangier-port', es: '/es/blog/alquiler-coches-puerto-tanger' },
  { fr: '/blog/location-voiture-maroc', en: '/en/blog/car-rental-morocco', es: '/es/blog/alquiler-coches-marruecos' },
  { fr: '/blog/location-voiture-pas-cher', en: '/en/blog/cheap-car-rental', es: '/es/blog/alquiler-coches-baratos' },
  { fr: '/blog/location-voiture-longue-duree', en: '/en/blog/long-term-car-rental', es: '/es/blog/alquiler-coches-larga-duracion' },
  { fr: '/blog/location-voiture-pas-cher-tanger', en: '/en/blog/cheap-car-rental-tangier', es: '/es/blog/alquiler-coches-baratos-tanger' },
  { fr: '/blog/location-voiture-tanger-pas-cher', en: '/en/blog/rent-cheap-car-tangier', es: '/es/blog/rentar-coche-barato-tanger' },
  { fr: '/blog/agence-de-location-de-voitures', en: '/en/blog/car-rental-agency', es: '/es/blog/agencia-alquiler-coches' },
  { fr: '/blog/conseils-location-voiture-tanger', en: '/en/blog/car-rental-tips-tangier', es: '/es/blog/consejos-alquiler-coches-tanger' },
  { fr: '/blog/location-auto-a-long-terme', en: '/en/blog/long-term-car-hire', es: '/es/blog/alquiler-coches-larga-temporada' },
  { fr: '/blog/location-auto-tanger', en: '/en/blog/car-rental-tangier-auto', es: '/es/blog/alquiler-coches-tanger-auto' },
  { fr: '/blog/location-de-voitures-tanger', en: '/en/blog/car-rental-in-tangier', es: '/es/blog/alquiler-de-coches-en-tanger' },
  { fr: '/blog/location-voiture-a-tanger', en: '/en/blog/car-hire-tangier', es: '/es/blog/alquiler-coche-en-tanger' },
  { fr: '/blog/location-voiture-tanger-boukhalef', en: '/en/blog/car-rental-tangier-boukhalef', es: '/es/blog/alquiler-coches-tanger-boukhalef' },
  { fr: '/blog/location-voiture-tanger-les-mieux-notes', en: '/en/blog/best-rated-car-rentals-tangier', es: '/es/blog/mejores-alquileres-coches-tanger' },
  { fr: '/blog/location-voiture-tanger-maroc', en: '/en/blog/car-rental-tangier-morocco', es: '/es/blog/alquiler-coches-tanger-marruecos' },
  { fr: '/blog/louer-voiture-a-petit-prix-tanger', en: '/en/blog/cheap-car-rental-tangier', es: '/es/blog/alquiler-coches-baratos-tanger' },
  { fr: '/blog/louer-voiture-aeroport-tanger', en: '/en/blog/rent-car-tangier-airport', es: '/es/blog/rentar-coche-aeropuerto-tanger' },
  { fr: '/blog/trouver-une-voiture-de-location-a-tetouan', en: '/en/blog/find-car-rental-in-tetouan', es: '/es/blog/encontrar-alquiler-coches-tetuan' },
  { fr: '/blog/voiture-a-louer-au-maroc', en: '/en/blog/car-for-rent-morocco', es: '/es/blog/coche-para-alquilar-marruecos' },
  { fr: '/blog/voiture-a-louer-tanger', en: '/en/blog/car-for-rent-tangier', es: '/es/blog/coche-para-alquilar-tanger' },
  { fr: '/blog/voiture-de-location-a-tetouan', en: '/en/blog/car-rental-tetouan', es: '/es/blog/alquiler-coches-tetuan' },
  
  // Additional Blog Mappings
  { fr: '/blog/location-voiture-au-port-de-tanger-med', en: '/en/blog/car-rental-tangier-med-port', es: '/es/blog/alquiler-coches-tanger-med-puerto' },
  { fr: '/blog/location-voiture-tetouan', en: '/en/blog/car-rental-tetouan', es: '/es/blog/alquiler-coches-tetuan' },
  { fr: '/blog/location-voiture-tetouan-aeroport', en: '/en/blog/car-rental-tetouan-airport', es: '/es/blog/alquiler-coches-aeropuerto-tetuan' },
  { fr: '/blog/location-voiture-tanger-aeroport-pas-cher', en: '/en/blog/cheap-car-rental-tangier-airport', es: '/es/blog/alquiler-coches-baratos-aeropuerto-tanger' },
];
