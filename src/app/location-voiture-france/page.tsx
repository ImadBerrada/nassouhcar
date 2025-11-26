import Breadcrumb, { BreadcrumbStructuredData } from '../../components/Breadcrumb'
import StructuredData from '../../components/StructuredData'
import Link from 'next/link'

export default function LocationVoitureFrancePage() {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Location Voiture France', href: '/location-voiture-france' }
  ]

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <StructuredData 
        type="LocalBusiness" 
        countryTarget="FR" 
        language="fr"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="text-center mt-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Location Voiture à Tanger
                <span className="block text-blue-600">pour les Français</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Vous venez de France ? Louez votre voiture à Tanger avec Nassoh Car ! 
                Service premium, flotte moderne et assistance francophone pour votre séjour au Maroc.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/fleet"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Voir Notre Flotte
                </Link>
                <Link
                  href="#avantages"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Nos Avantages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="avantages" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Pourquoi Choisir Nassoh Car à Tanger ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prix Transparents</h3>
                <p className="text-gray-600">
                  Tarifs clairs sans frais cachés. Dès 170 DH/jour avec assurance incluse et kilométrage illimité.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Assistance Francophone</h3>
                <p className="text-gray-600">
                  Notre équipe parle français et connaît parfaitement les besoins des voyageurs français au Maroc.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Premium</h3>
                <p className="text-gray-600">
                  Véhicules récents, livraison gratuite à l'aéroport Ibn Battuta et service 24h/24.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Services Spéciaux pour les Français
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🛬 Accueil Aéroport</h3>
                <p className="text-gray-600 mb-4">
                  Récupération gratuite à l'aéroport Ibn Battuta de Tanger. Notre équipe vous accueille 
                  avec un panneau à votre nom et vous accompagne jusqu'à votre véhicule.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Livraison gratuite au terminal</li>
                  <li>✓ Accueil personnalisé</li>
                  <li>✓ Formalités rapides (15 minutes)</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🗺️ Conseils Locaux</h3>
                <p className="text-gray-600 mb-4">
                  Bénéficiez de nos conseils d'experts locaux : itinéraires, bonnes adresses, 
                  règles de conduite au Maroc et recommandations personnalisées.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Guide de conduite au Maroc</li>
                  <li>✓ Itinéraires recommandés</li>
                  <li>✓ Assistance 24h/24</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Réservation Simplifiée</h3>
                <p className="text-gray-600 mb-4">
                  Réservez depuis la France en quelques clics. Confirmation immédiate par email 
                  et WhatsApp avec tous les détails de votre location.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Réservation en ligne 24h/24</li>
                  <li>✓ Confirmation immédiate</li>
                  <li>✓ Modification gratuite</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚗 Flotte Moderne</h3>
                <p className="text-gray-600 mb-4">
                  Plus de 500 véhicules récents : citadines, SUV, berlines et véhicules de luxe. 
                  Tous équipés de climatisation et GPS en français.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Véhicules 2023-2024</li>
                  <li>✓ GPS en français inclus</li>
                  <li>✓ Assurance tous risques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à Explorer Tanger et le Maroc ?
            </h2>
            <p className="text-xl mb-8">
              Découvrez notre flotte complète et réservez votre véhicule dès maintenant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fleet"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                🚗 Voir Notre Flotte
              </Link>
              <a
                href="tel:+212631630013"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                📞 +212 631 63 00 13
              </a>
              <a
                href="https://wa.me/212539325080"
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}