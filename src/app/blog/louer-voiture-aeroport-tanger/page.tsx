import type { Metadata } from 'next'
import { MapPin, Clock, Star, Car, Shield, ArrowRight, Users, Phone, Mail, Calendar, Tag, CheckCircle, Euro, Navigation, Zap, Award, Plane, Luggage, Timer, Heart, Globe, Baby } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Location de voiture à l\'aéroport de Tanger | Nassoh Car',
  description: 'Louez votre voiture à l\'aéroport de Tanger avec Nassoh Car. Service rapide, sièges bébé/enfant disponibles et option de location en aller simple dans tout le Maroc.',
  keywords: 'location voiture aéroport tanger, nassoh car, location voiture tanger, car rental tangier airport, sièges bébé enfant, location aller simple maroc',
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/louer-voiture-aeroport-tanger'
  },
  openGraph: {
    title: 'Location de voiture à l\'aéroport de Tanger | Nassoh Car',
    description: 'Louez votre voiture à l\'aéroport de Tanger avec Nassoh Car. Service rapide, sièges bébé/enfant disponibles et option de location en aller simple dans tout le Maroc.',
    images: ['/tanger.webp'],
  },
}

export default function LouerVoitureAeroportTangerBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Plane className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold text-lg">Guide Complet</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Louer une voiture à l'aéroport de Tanger
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Le guide complet par Nassoh Car pour une location de voiture simple et efficace à l'aéroport de Tanger
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Mis à jour le 15 Janvier 2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min de lecture</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>Guide Pratique</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Voyager à Tanger devient bien plus simple avec <strong>Nassoh Car</strong>. Que vous arriviez pour affaires ou pour le plaisir, notre service de <Link href="/fleet" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2">location de voiture à l'aéroport de Tanger</Link> vous garantit confort, flexibilité et tranquillité d'esprit dès votre arrivée. Nous proposons un large choix de véhicules récents – citadines, SUV, familiales 7 places ou voitures de luxe – adaptés à tous les besoins et à tous les budgets.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nos clients apprécient particulièrement notre <strong>livraison gratuite à l'aéroport de Tanger</strong>, ainsi qu'à d'autres points clés comme Tanger Med Port, Tanger Ville Port, la gare, et même le centre de Tétouan. Avec un dépôt de garantie de 5000 MAD, bloqué ou remis en main propre, vous bénéficiez d'une expérience transparente et sans mauvaise surprise.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Avantages Nassoh Car</h3>
              </div>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Livraison gratuite à l'aéroport de Tanger
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Véhicules récents et bien entretenus
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Dépôt de garantie transparent (5000 MAD)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Service disponible 7j/7
                </li>
              </ul>
            </div>
          </div>

          {/* Service Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              Un service pensé pour votre confort
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nassoh Car met un point d'honneur à offrir un service haut de gamme, à la fois rapide et personnalisé. Chaque véhicule est soigneusement entretenu et contrôlé avant chaque location, garantissant sécurité et propreté. Nous proposons également des <strong>sièges bébé et enfant sur demande</strong>, ainsi que la <strong>location en aller simple</strong> pour les voyageurs souhaitant déposer le véhicule dans une autre ville du Maroc.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nos équipes sont disponibles 7j/7 via WhatsApp, téléphone ou email, pour vous accompagner avant, pendant et après votre location. Nous parlons plusieurs langues (français, anglais, espagnol, italien, allemand et néerlandais) afin de faciliter la communication avec tous nos clients, qu'ils soient résidents ou touristes.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <Baby className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-green-900">Équipements Famille</h3>
                </div>
                <p className="text-green-800">Sièges bébé et enfant disponibles sur demande pour voyager en toute sécurité avec vos petits.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center mb-4">
                  <Navigation className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="text-lg font-semibold text-purple-900">Location Aller Simple</h3>
                </div>
                <p className="text-purple-800">Déposez votre véhicule dans une autre ville du Maroc selon vos besoins de voyage.</p>
              </div>
            </div>
          </div>

          {/* Storage Scanner Section */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Luggage className="h-8 w-8 text-gray-600 mr-3" />
              Le lien entre location et stockage : découvrez The Storage Scanner
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Lorsqu'on parle de location de voitures, on pense souvent à la logistique : où garer, où récupérer, où rendre le véhicule. C'est ici qu'un outil comme <a href="https://thestoragescanner.com/fr-FR/fournisseurs-de-stockage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2">The Storage Scanner</a> entre en jeu. Cette plateforme permet de trouver facilement des espaces de stockage fiables partout dans le monde. Que ce soit pour entreposer temporairement une voiture, du matériel ou des effets personnels pendant un voyage, The Storage Scanner vous aide à comparer, réserver et gérer vos espaces de stockage en ligne.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              C'est une solution particulièrement pratique pour les voyageurs longue durée ou les expatriés qui souhaitent laisser leur voiture ou leurs biens en lieu sûr pendant leur absence — un parfait complément à votre expérience Nassoh Car.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="h-8 w-8 text-yellow-500 mr-3" />
              Pourquoi choisir Nassoh Car ?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Véhicules récents et bien entretenus</h3>
                    <p className="text-gray-600">Flotte moderne régulièrement renouvelée</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Livraison gratuite à l'aéroport de Tanger</h3>
                    <p className="text-gray-600">Service de livraison directement au terminal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Assistance disponible 7j/7</h3>
                    <p className="text-gray-600">Support client multilingue à votre service</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sièges bébé/enfant disponibles</h3>
                    <p className="text-gray-600">Équipements de sécurité pour toute la famille</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Réservation simple et rapide via WhatsApp</h3>
                    <p className="text-gray-600">Processus de réservation instantané</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tarifs transparents et sans frais cachés</h3>
                    <p className="text-gray-600">Prix clairs dès la réservation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white text-center">
              <p className="text-xl font-semibold mb-2">Nassoh Car, c'est bien plus qu'une simple agence de location :</p>
              <p className="text-lg">c'est votre partenaire mobilité à Tanger, au service de votre confort et de votre liberté.</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Shield className="h-8 w-8 text-blue-500 mr-3" />
              FAQ – Location de voiture à l'aéroport de Tanger
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quels documents sont nécessaires pour louer une voiture à l'aéroport de Tanger ?
                </h3>
                <p className="text-gray-700">
                  Une pièce d'identité, un permis de conduire valide (minimum 2 ans d'ancienneté) et une carte bancaire pour le dépôt de garantie.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Puis-je rendre la voiture dans une autre ville ?
                </h3>
                <p className="text-gray-700">
                  Oui, nous proposons la location en aller simple, avec remise du véhicule dans plusieurs villes du Maroc.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proposez-vous des sièges pour bébé ou enfant ?
                </h3>
                <p className="text-gray-700">
                  Oui, sur simple demande lors de la réservation.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Comment puis-je réserver une voiture avec Nassoh Car ?
                </h3>
                <p className="text-gray-700">
                  Vous pouvez réserver directement sur notre site web nassohcar.com, ou via WhatsApp pour une confirmation instantanée.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quelle est la politique d'assurance ?
                </h3>
                <p className="text-gray-700">
                  Nos voitures sont assurées tous risques, et un contrat clair vous est remis avant chaque départ.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Nassoh Car – Votre liberté commence ici.</h2>
            <p className="text-xl mb-8 text-blue-100">
              Réservez dès maintenant votre voiture à l'aéroport de Tanger
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <Car className="h-5 w-5 mr-2" />
                Réserver maintenant
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                Nous contacter
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}