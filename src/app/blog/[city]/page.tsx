'use client';

import { useParams } from 'next/navigation';
import { Calendar, Clock, Star, Car, ArrowLeft, MapPin, Navigation } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb, { BreadcrumbStructuredData } from '@/components/Breadcrumb';
import StructuredData from '@/components/StructuredData';

interface CityData {
  name: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  category: string;
  date: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      tips?: string[];
    }[];
    conclusion: string;
  };
  highlights: string[];
  carRentalTips: string[];
  attractions: {
    name: string;
    description: string;
    distance: string;
  }[];
}

const cityData: Record<string, CityData> = {
  'location-voiture-tanger-ville': {
    name: 'Tanger Ville',
    title: 'Location de Voiture à Tanger Ville: Guide Complet 2025',
    description: 'Découvrez les meilleurs services de location de voiture économique à Tanger Ville.',
    image: '/tangier.webp',
    readTime: '6 min de lecture',
    category: 'Guides de Location',
    date: 'Décembre 15, 2024',
    content: {
      introduction: 'Tanger Ville offre de nombreuses opportunités pour explorer la région avec une voiture de location. Découvrez nos conseils pour une location économique et pratique.',
      sections: [
        {
          title: '1. Meilleurs Quartiers pour Louer une Voiture',
          content: 'Le centre-ville de Tanger propose plusieurs agences de location avec des tarifs compétitifs. Les zones près de la gare et du port offrent un accès facile.',
          tips: ['Réservez à l\'avance pour de meilleurs tarifs', 'Comparez les prix entre agences', 'Vérifiez les conditions d\'assurance']
        },
        {
          title: '2. Conseils de Conduite à Tanger',
          content: 'La circulation à Tanger peut être dense, surtout aux heures de pointe. Privilégiez les déplacements tôt le matin ou en fin d\'après-midi.',
          tips: ['Évitez le centre-ville aux heures de pointe', 'Utilisez les parkings payants sécurisés', 'Respectez les limitations de vitesse']
        },
        {
          title: '3. Attractions Accessibles en Voiture',
          content: 'Avec votre voiture de location, explorez facilement les grottes d\'Hercule, le Cap Spartel, et les plages environnantes.',
          tips: ['Planifiez vos itinéraires à l\'avance', 'Gardez de la monnaie pour les péages', 'Respectez les zones de stationnement']
        }
      ],
      conclusion: 'La location de voiture à Tanger Ville vous offre la liberté d\'explorer la région à votre rythme avec des tarifs économiques.'
    },
    highlights: [
      'Services de location économiques',
      'Accès facile aux attractions principales',
      'Conseils pratiques de conduite locale',
      'Tarifs compétitifs toute l\'année'
    ],
    carRentalTips: [
      'Vérifiez l\'état du véhicule avant départ',
      'Gardez vos documents à portée de main',
      'Respectez les règles de circulation locales',
      'Planifiez vos trajets à l\'avance'
    ],
    attractions: [
      { name: 'Centre-ville de Tanger', description: 'Quartier historique et commercial', distance: 'Point de départ' },
      { name: 'Port de Tanger', description: 'Port international actif', distance: '2 km du centre' },
      { name: 'Médina de Tanger', description: 'Vieille ville traditionnelle', distance: '1 km du centre' }
    ]
  },
  'location-voiture-tanger-port': {
    name: 'Tanger Port',
    title: 'Location de Voiture au Port de Tanger: Guide Pratique',
    description: 'Louez votre voiture directement au port de Tanger avec nos services économiques.',
    image: '/tangier.webp',
    readTime: '5 min de lecture',
    category: 'Transport',
    date: 'Décembre 14, 2024',
    content: {
      introduction: 'Le port de Tanger est un point d\'entrée stratégique au Maroc. Découvrez comment louer facilement une voiture dès votre arrivée.',
      sections: [
        {
          title: '1. Services de Location au Port',
          content: 'Plusieurs agences de location sont présentes directement au port de Tanger, offrant des services 24h/24 pour les voyageurs.',
          tips: ['Réservation en ligne recommandée', 'Documents requis: permis et passeport', 'Vérification du véhicule obligatoire']
        },
        {
          title: '2. Sortir du Port en Voiture',
          content: 'La sortie du port est bien signalisée. Suivez les panneaux vers le centre-ville ou l\'autoroute selon votre destination.',
          tips: ['Respectez les contrôles de sécurité', 'Gardez vos documents visibles', 'Suivez la signalisation routière']
        },
        {
          title: '3. Destinations Populaires depuis le Port',
          content: 'Depuis le port, accédez facilement à Tanger ville, Tétouan, ou même Chefchaouen pour des excursions d\'une journée.',
          tips: ['Planifiez votre itinéraire', 'Vérifiez l\'état des routes', 'Prévoyez du carburant pour les longs trajets']
        }
      ],
      conclusion: 'La location au port de Tanger vous permet de commencer votre aventure marocaine dès votre arrivée avec des tarifs économiques.'
    },
    highlights: [
      'Location 24h/24 au port',
      'Accès direct aux principales destinations',
      'Services économiques et fiables',
      'Procédures simplifiées pour les voyageurs'
    ],
    carRentalTips: [
      'Réservez avant votre arrivée',
      'Vérifiez les conditions d\'assurance',
      'Familiarisez-vous avec le code de la route marocain',
      'Gardez les contacts d\'urgence'
    ],
    attractions: [
      { name: 'Port de Tanger Med', description: 'Port moderne et installations', distance: 'Point de départ' },
      { name: 'Tanger Centre', description: 'Centre-ville historique', distance: '15 km du port' },
      { name: 'Asilah', description: 'Ville côtière artistique', distance: '45 km au sud' }
    ]
  },
  tangier: {
    name: 'Tangier',
    title: 'Location de Voiture à Tanger: 5 Joyaux Cachés Accessibles en 2025',
    description: 'Découvrez les secrets les mieux gardés de Tanger avec notre service de location de voiture économique.',
    image: '/tangier.webp',
    readTime: '5 min de lecture',
    category: 'Guides de Voyage',
    date: '23 août 2025',
    content: {
      introduction: 'Tanger, la porte d\'entrée entre l\'Europe et l\'Afrique, offre d\'incroyables opportunités d\'exploration avec une voiture de location. Des plages cachées aux grottes anciennes, découvrez les secrets que seuls les locaux connaissent.',
      sections: [
        {
          title: '1. Grottes d\'Hercule - Mystères Anciens Vous Attendent',
          content: 'Situées à seulement 14 km du centre-ville de Tanger, les Grottes d\'Hercule offrent une expérience mystique. Selon la légende, c\'est ici qu\'Hercule s\'est reposé après avoir séparé l\'Europe de l\'Afrique. La grotte s\'ouvre sur l\'océan Atlantique avec une fenêtre naturelle en forme de continent africain.',
          tips: ['Mieux visité tôt le matin pour éviter les foules', 'Apportez une lampe de poche pour une meilleure exploration', 'Parking disponible directement à l\'entrée']
        },
        {
          title: '2. Cap Spartel - Où Deux Mers Se Rencontrent',
          content: 'Conduisez jusqu\'à la pointe nord-ouest de l\'Afrique où l\'océan Atlantique rencontre la mer Méditerranée. Le phare ici guide les navires depuis 1864. La route panoramique offre des vues côtières à couper le souffle.',
          tips: ['Parfait pour la photographie au coucher du soleil', 'Café à proximité pour se rafraîchir', 'Trajet facile de 20 minutes depuis le centre-ville']
        },
        {
          title: '3. Asilah - Le Paradis de l\'Artiste',
          content: 'Cette charmante ville côtière, à 46 km au sud de Tanger, est célèbre pour ses bâtiments blanchis à la chaux ornés de fresques colorées. La médina est un site du patrimoine mondial de l\'UNESCO avec des fortifications portugaises.',
          tips: ['Festival des Arts annuel en été', 'Parking gratuit près de la médina', 'Essayez les fruits de mer frais dans les restaurants locaux']
        },
        {
          title: '4. Tétouan - La Colombe Blanche',
          content: 'Connue sous le nom de "Colombe Blanche", Tétouan se trouve à 60 km de Tanger et offre une culture marocaine authentique. La médina est l\'une des mieux préservées du Maroc, avec une architecture andalouse et des artisanats traditionnels.',
          tips: ['Visites guidées disponibles en plusieurs langues', 'Hammams traditionnels pour la détente', 'Excellents articles en cuir et textiles']
        },
        {
          title: '5. Chefchaouen - La Perle Bleue',
          content: 'La célèbre ville bleue se trouve à 2 heures de route panoramique à travers les montagnes du Rif. Chaque bâtiment est peint dans des nuances de bleu, créant une atmosphère magique. Le voyage lui-même est aussi beau que la destination.',
          tips: ['Les routes de montagne nécessitent une conduite prudente', 'Restez une nuit pour l\'expérience complète', 'Meilleure lumière pour la photographie tôt le matin']
        }
      ],
      conclusion: 'Avec une voiture de location, Tanger devient votre porte d\'entrée vers les destinations les plus spectaculaires du nord du Maroc. Chaque lieu offre des expériences uniques que les transports publics ne peuvent tout simplement pas fournir.'
    },
    highlights: [
      'Explorez 5 joyaux cachés autour de Tanger',
      'Directions de conduite détaillées et infos de parking',
      'Conseils d\'initiés d\'experts locaux',
      'Meilleurs moments pour visiter chaque lieu',
      'Aperçus photographiques et culturels'
    ],
    carRentalTips: [
      'Réservez à l\'avance pour de meilleurs tarifs',
      'Choisissez une voiture adaptée aux routes de montagne',
      'La navigation GPS est essentielle',
      'Gardez votre permis de conduire et passeport',
      'Des stations-service sont disponibles sur tous les itinéraires'
    ],
    attractions: [
      { name: 'Grottes d\'Hercule', description: 'Grottes anciennes avec vues sur l\'océan Atlantique', distance: '14 km du centre-ville' },
      { name: 'Cap Spartel', description: 'Phare à la pointe nord-ouest de l\'Afrique', distance: '20 km du centre-ville' },
      { name: 'Asilah', description: 'Ville côtière artistique avec fresques', distance: '46 km au sud de Tanger' },
      { name: 'Tétouan', description: 'Médina du patrimoine mondial UNESCO', distance: '60 km de Tanger' },
      { name: 'Chefchaouen', description: 'La célèbre ville perle bleue', distance: '120 km (2 heures de route)' }
    ]
  }
};

export default function CityPage() {
  const params = useParams();
  const citySlug = params.city as string;
  const city = cityData[citySlug];

  if (!city) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Page non trouvée</h1>
          <p className="text-slate-600 mb-8">Cette destination n'existe pas dans notre guide.</p>
          <Link href="/blog" className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">
            Retour au Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[
            { label: 'Accueil', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: city.name }
          ]} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-700">
        <Image
          src={city.image}
          alt={city.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center mb-4">
              <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                {city.category}
              </span>
              <div className="flex items-center text-sm text-slate-300">
                <Calendar className="h-4 w-4 mr-1" />
                {city.date}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {city.title}
            </h1>
            <p className="text-xl text-slate-200 mb-6">
              {city.description}
            </p>
            <div className="flex items-center text-slate-300">
              <Clock className="h-5 w-5 mr-2" />
              {city.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-xl shadow-lg p-8">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-slate-700 leading-relaxed">
                  {city.content.introduction}
                </p>
              </div>

              {/* Sections */}
              {city.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.tips && (
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-amber-800 mb-2">💡 Conseils Pratiques:</h3>
                      <ul className="list-disc list-inside text-amber-700 space-y-1">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="bg-slate-50 rounded-lg p-6 mt-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Conclusion</h2>
                <p className="text-slate-700 leading-relaxed">
                  {city.content.conclusion}
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <Star className="h-5 w-5 text-amber-500 mr-2" />
                Points Forts
              </h3>
              <ul className="space-y-3">
                {city.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Car Rental Tips */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <Car className="h-5 w-5 text-amber-500 mr-2" />
                Conseils Location
              </h3>
              <ul className="space-y-3">
                {city.carRentalTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attractions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-amber-500 mr-2" />
                Attractions Principales
              </h3>
              <div className="space-y-4">
                {city.attractions.map((attraction, index) => (
                  <div key={index} className="border-l-4 border-amber-200 pl-4">
                    <h4 className="font-semibold text-slate-800">{attraction.name}</h4>
                    <p className="text-sm text-slate-600 mb-1">{attraction.description}</p>
                    <div className="flex items-center text-xs text-slate-500">
                      <Navigation className="h-3 w-3 mr-1" />
                      {attraction.distance}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Articles Connexes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tanger Attractions Guide */}
            <Link href="/blog/tangier" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/tangier.webp"
                  alt="Guide Attractions Tanger"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="p-6">
                <span className="text-sm text-amber-600 font-medium">Guide Voyage</span>
                <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3 group-hover:text-amber-600 transition-colors">
                  Tanger Attractions Guide
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Découvrez les 5 joyaux cachés de Tanger accessibles en voiture.
                </p>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="h-4 w-4 mr-1" />
                  5 min de lecture
                </div>
              </div>
            </Link>

            {/* Car Rental Tips */}
            <Link href="/blog/location-voiture-pas-cher" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/economy-car.jpg"
                  alt="Location Voiture Pas Cher - Conseils"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="p-6">
                <span className="text-sm text-amber-600 font-medium">Conseils</span>
                <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3 group-hover:text-amber-600 transition-colors">
                  Location Voiture Pas Cher au Maroc
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Tous nos conseils pour louer une voiture économique au Maroc.
                </p>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="h-4 w-4 mr-1" />
                  5 min de lecture
                </div>
              </div>
            </Link>

            {/* Complete Tanger Guide */}
            <Link href="/guides/guide-tanger-complet" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/tangier.webp"
                  alt="Guide Complet Tanger - Location de Voiture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="p-6">
                <span className="text-sm text-amber-600 font-medium">Guide Complet</span>
                <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3 group-hover:text-amber-600 transition-colors">
                  Guide Complet de Tanger
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Le guide ultime pour explorer Tanger avec votre voiture de location.
                </p>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="h-4 w-4 mr-1" />
                  10 min de lecture
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à Explorer {city.name}?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Réservez votre voiture de location aujourd'hui et commencez votre aventure à {city.name} en toute confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#booking" className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
              Réservez Votre Voiture Maintenant
            </Link>
            <Link href="/blog" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors">
              Lire Plus de Guides
            </Link>
          </div>
        </div>
      </div>

      <BreadcrumbStructuredData items={[
        { label: 'Blog', href: '/blog' },
        { label: city.title }
      ]} />
      <StructuredData 
        type="Article" 
        data={{
          title: city.title,
          description: city.description,
          image: `https://www.nassohcar.com${city.image}`,
          url: `https://www.nassohcar.com/blog/${params.city}`,
          datePublished: city.date,
          dateModified: new Date().toISOString().split('T')[0],
          keywords: `${params.city}, location voiture, guide voyage, Nassoh Car, ${city.name}, Maroc, attractions, road trip`
        }}
      />
    </div>
  );
}