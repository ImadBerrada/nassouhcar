import { Metadata } from 'next'

type Props = {
  params: Promise<{ city: string }>
  children: React.ReactNode
}

const cityMetadata: Record<string, { title: string; description: string; keywords: string }> = {
  tangier: {
    title: 'Location de Voiture à Tanger: 5 Joyaux Cachés Accessibles en 2025 | Nassoh Car',
    description: '🚗 Découvrez les secrets les mieux gardés de Tanger avec notre service de location de voiture premium ✨ Des mystiques Grottes d\'Hercule aux plages immaculées de Cap Spartel, débloquez des destinations exclusives que 90% des touristes ne voient jamais. Réservez maintenant!',
    keywords: 'location voiture Tanger, joyaux cachés Tanger, Grottes Hercule, Cap Spartel, Asilah, Tétouan, Chefchaouen, guide voyage Maroc, location voiture Maroc, attractions Tanger, Nassoh Car, voiture économique Tanger'
  },
  casablanca: {
    title: '5 Choses à Savoir Avant de Louer une Voiture à Casablanca (Guide 2025) | Nassoh Car',
    description: '💰 Économisez des centaines d\'euros et évitez les pièges à touristes avec notre guide d\'initié pour les locations de voiture à Casablanca ✨ De la négociation des meilleurs prix à la compréhension des coutumes de conduite locales, ce guide complet révèle les secrets de l\'industrie. Réservez maintenant!',
    keywords: 'location voiture Casablanca, conseils location voiture Maroc, guide conduite Casablanca, location voiture Maroc, location voiture aéroport Mohammed V, guide voyage Casablanca, Nassoh Car, voiture économique Casablanca, Hassan II'
  },
  marrakech: {
    title: 'Découvrez Marrakech: Les Meilleures Routes de Location de Voiture de la Ville Rouge | Nassoh Car',
    description: '🏔️ Explorez Marrakech et ses environs avec les meilleures routes de location de voiture ✨ Des montagnes de l\'Atlas à la côte d\'Essaouira, découvrez des routes panoramiques et des conseils d\'initiés pour votre aventure marocaine. Réservez votre voiture maintenant!',
    keywords: 'location voiture Marrakech, route montagnes Atlas, road trip Essaouira, cascades Ouzoud, désert Ouarzazate, routes panoramiques Maroc, guide voyage Marrakech, Nassoh Car, voiture économique Marrakech, Jemaa el-Fnaa'
  },
  fez: {
    title: 'Fès à Chefchaouen: Road Trip Épique avec Votre Voiture de Location | Nassoh Car',
    description: '🛣️ Vivez le road trip marocain ultime de l\'ancienne médina de Fès à la perle bleue de Chefchaouen ✨ Guide complet avec itinéraires, arrêts et conseils d\'initiés pour une aventure inoubliable. Réservez votre voiture de location maintenant!',
    keywords: 'road trip Fès Chefchaouen, conduite montagne Maroc, montagnes Rif, ville bleue Chefchaouen, location voiture Fès, guide road trip Maroc, Nassoh Car, voiture économique Fès, médina Fès'
  },
  'location-voiture-tanger-port': {
    title: 'Location de Voiture au Port de Tanger 2025 - Service Express | Livraison Gratuite',
    description: 'Louez votre voiture directement au port de Tanger avec nos services économiques 24h/24. Livraison gratuite et procédures simplifiées pour les voyageurs.',
    keywords: 'location voiture port Tanger, location voiture Tanger Med, location voiture ferry, service 24h Tanger, livraison gratuite port, Nassoh Car port'
  },
  'location-voiture-economique-tanger': {
    title: 'Location Voiture Économique Tanger 2025 - Flotte Moderne dès 170 DH',
    description: 'Location de voiture économique à Tanger avec la meilleure flotte moderne. Tarifs compétitifs, service premium et véhicules fiables.',
    keywords: 'location voiture économique Tanger, voiture pas cher Tanger, location économique Maroc, tarifs compétitifs Tanger, Nassoh Car économique'
  },
  'location-voiture-tanger-ville': {
    title: 'Location de Voiture à Tanger Ville 2025 - Guide Complet | Centre-Ville',
    description: 'Guide complet pour la location de voiture à Tanger ville. Conseils pratiques, meilleurs quartiers et tarifs économiques au centre-ville.',
    keywords: 'location voiture Tanger ville, location voiture centre ville Tanger, guide location Tanger, conseils conduite Tanger, Nassoh Car centre ville'
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const city = resolvedParams.city
  const cityData = cityMetadata[city]
  
  if (!cityData) {
    return {
      title: 'Article de Blog | Nassoh Car',
      description: 'Découvrez le Maroc avec nos guides de location de voiture et conseils de voyage.',
      alternates: {
        canonical: `https://www.nassohcar.com/blog/${city}`
      }
    }
  }

  return {
    title: cityData.title,
    description: cityData.description,
    keywords: cityData.keywords,
    alternates: {
      canonical: `https://www.nassohcar.com/blog/${city}`
    },
    openGraph: {
      title: cityData.title,
      description: cityData.description,
      type: 'article',
      url: `https://www.nassohcar.com/blog/${city}`,
      siteName: 'Nassoh Car',
      images: [
        {
          url: `https://www.nassohcar.com/${city === 'tangier' ? 'tangier.webp' : city === 'casablanca' ? 'casa.jpg' : city === 'marrakech' ? 'marrakech.jpeg' : 'fez.jpg'}`,
          width: 1200,
          height: 630,
          alt: cityData.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: cityData.title,
      description: cityData.description,
      images: [`https://www.nassohcar.com/${city === 'tangier' ? 'tangier.webp' : city === 'casablanca' ? 'casa.jpg' : city === 'marrakech' ? 'marrakech.jpeg' : 'fez.jpg'}`]
    }
  }
}

export default function BlogCityLayout({ children }: Props) {
  return children
}
