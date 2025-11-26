import type { Metadata } from 'next'
import { Car, Shield, MapPin, Clock, Users, Star, Calendar, Navigation } from 'lucide-react'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

// SEO Metadata optimized for car rental tips in Tangier
export const metadata: Metadata = {
  title: "Conseils Location Voiture Tanger 2025 | Guide Expert Nassoh Car",
  description: "Guide Expert Location Voiture Tanger 2025 | Nassoh Car ✨ Conseils professionnels, astuces économies, meilleurs tarifs, documents nécessaires. Évitez les pièges, économisez jusqu'à 40% sur votre location!",
  keywords: [
    'conseils location voiture Tanger',
    'guide location voiture Tanger 2025',
    'astuces location voiture Maroc',
    'économiser location voiture Tanger',
    'meilleurs prix location Tanger',
    'documents location voiture Maroc',
    'assurance location voiture Tanger',
    'Nassoh Car conseils',
    'guide expert location Tanger',
    'éviter pièges location voiture'
  ].join(', '),
  openGraph: {
    title: "Conseils Location Voiture Tanger 2025 | Guide Expert Nassoh Car",
    description: "Guide Expert complet pour votre location de voiture à Tanger ✨ Conseils professionnels, astuces économies, évitez les pièges.",
    url: 'https://www.nassohcar.com/blog/conseils-location-voiture-tanger',
    images: [{
      url: '/blog-conseils-tanger.jpg',
      width: 1200,
      height: 630,
      alt: 'Conseils location voiture Tanger - Guide expert Nassoh Car'
    }]
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/blog/conseils-location-voiture-tanger'
  }
}

export default function ConseilsLocationTangerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-teal-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-400/20 to-teal-400/20 p-4 rounded-2xl backdrop-blur-sm border border-blue-400/30 shadow-xl inline-block mb-6">
            <Car className="h-6 w-6 text-blue-300 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Conseils Expert Location Voiture 
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Tanger 2025
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Guide complet par les experts Nassoh Car : économisez jusqu'à 40%, évitez les pièges, 
            et profitez pleinement de votre location de voiture à Tanger.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Meta */}
        <div className="flex items-center space-x-6 text-gray-600 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span>Publié le 15 Janvier 2025</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>8 min de lecture</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span>Guide Expert</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mb-12 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎯 Pourquoi ce Guide est Différent ?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Après 5 ans d'expérience dans la location de voitures à Tanger et plus de 10 000 clients satisfaits, 
            nous partageons nos secrets pour vous garantir la meilleure expérience possible.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">Évitez les Pièges</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">Économisez 40%</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Navigation className="h-6 w-6 text-purple-600" />
              </div>
              <p className="font-semibold text-gray-900">Conseils Locaux</p>
            </div>
          </div>
        </div>

        {/* Section 1: Documents et Préparation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            1. Documents Nécessaires à Tanger
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Liste Complète des Documents</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🇲🇦 Résidents Marocains</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Carte d'identité nationale (CIN)</li>
                  <li>• Permis de conduire marocain valide</li>
                  <li>• Carte bancaire (crédit ou débit)</li>
                  <li>• Justificatif de domicile récent</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🌍 Visiteurs Internationaux</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Passeport valide</li>
                  <li>• Permis de conduire international</li>
                  <li>• Carte de crédit internationale</li>
                  <li>• Preuve d'assurance voyage (recommandée)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Conseil Expert Nassoh Car</h4>
            <p className="text-yellow-700">
              Préparez des copies de tous vos documents. En cas de perte, cela facilitera grandement les démarches 
              et vous évitera des frais supplémentaires.
            </p>
          </div>
        </section>

        {/* Section 2: Choisir le Bon Véhicule */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Car className="h-8 w-8 text-blue-600 mr-3" />
            2. Choisir le Véhicule Parfait pour Tanger
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏙️ Ville de Tanger</h3>
              <p className="text-gray-600 mb-4">Médina, centre-ville, shopping</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Citadines compactes</li>
                <li>• Faciles à garer</li>
                <li>• Économiques en carburant</li>
                <li>• Dacia Sandero, Renault Clio</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">👨‍👩‍👧‍👦 Famille</h3>
              <p className="text-gray-600 mb-4">Confort, espace, sécurité</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Berlines ou SUV</li>
                <li>• 5-7 places</li>
                <li>• Coffre spacieux</li>
                <li>• Toyota Corolla, Dacia Duster</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                <Navigation className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🗺️ Excursions</h3>
              <p className="text-gray-600 mb-4">Chefchaouen, Tétouan, Asilah</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• SUV ou 4x4</li>
                <li>• Confort sur longue distance</li>
                <li>• Climatisation</li>
                <li>• Dacia Duster, Renault Captur</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Économiser sur votre Location */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="h-8 w-8 text-green-600 mr-3" />
            3. Économiser jusqu'à 40% sur votre Location
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">💰 Nos Astuces d'Expert</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">🕒 Timing Optimal</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Réservez 2-3 semaines à l'avance</strong> pour les meilleurs tarifs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Évitez juillet-août</strong> : tarifs jusqu'à 60% plus élevés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Préférez mai-juin et septembre</strong> : excellent rapport qualité-prix</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">💳 Négociation & Paiement</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Locations longues (7+ jours)</strong> : demandez une remise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Paiement comptant</strong> : économisez les frais bancaires</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Comparez les assurances</strong> : votre assurance personnelle peut suffire</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Conduite à Tanger */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Navigation className="h-8 w-8 text-blue-600 mr-3" />
            4. Conduire à Tanger : Guide Pratique
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Spécificités de la Conduite à Tanger</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-green-600">✅ À Faire</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Respecter les limitations de vitesse (50 km/h en ville)</li>
                  <li>• Utiliser les parkings payants sécurisés</li>
                  <li>• Garder les documents dans la voiture</li>
                  <li>• Prévoir du temps pour les embouteillages</li>
                  <li>• Utiliser le GPS pour éviter la médina en voiture</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-red-600">❌ À Éviter</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Entrer dans la médina avec la voiture</li>
                  <li>• Se garer dans les zones interdites</li>
                  <li>• Laisser des objets visibles dans la voiture</li>
                  <li>• Conduire sans assurance valide</li>
                  <li>• Ignorer les panneaux de signalisation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
            <h4 className="font-semibold text-blue-800 mb-2">🅿️ Parking à Tanger - Conseil Expert</h4>
            <p className="text-blue-700 mb-3">
              Les meilleurs parkings sécurisés à Tanger :
            </p>
            <ul className="text-blue-700 space-y-1">
              <li>• <strong>Place du 9 Avril</strong> : Centre-ville, 5 DH/heure</li>
              <li>• <strong>Parking Ibn Battouta</strong> : Près de la médina, 3 DH/heure</li>
              <li>• <strong>Morocco Mall Tanger</strong> : Gratuit 2h, puis 2 DH/heure</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Louer votre Voiture à Tanger ?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Profitez de nos conseils d'expert et réservez dès maintenant avec Nassoh Car
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/fleet" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Voir Notre Flotte
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors inline-flex items-center justify-center border-2 border-blue-400"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <StructuredData type="Article" countryTarget="MA" language="fr" />
    </div>
  )
}