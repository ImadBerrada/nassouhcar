import { Car,  MapPin, CreditCard, Users, Phone, Mail, CheckCircle,  Award } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos | Nassoh Car - Location de Voiture Économique Maroc',
  description: 'Découvrez Nassoh Car, votre partenaire de confiance pour la location de voiture au Maroc. Véhicules économiques, service excellent et prix compétitifs à Tanger, Tétouan et dans tout le Maroc.',
  keywords: 'à propos nassoh car, location voiture maroc, agence location tanger, location voiture tétouan, location voiture économique maroc, agence location marocaine',
  alternates: {
    canonical: 'https://www.nassohcar.com/about'
  }
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              À Propos de NASSOH CAR
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Location de Voiture à Tanger & Tétouan - Votre partenaire de confiance pour la location de véhicules économiques
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Introduction */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-amber-400/20">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">À Propos de NASSOH CAR</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              NASSOH CAR est une agence de location de voitures marocaine fiable offrant une large sélection de véhicules 
              pour un usage personnel et professionnel. Que vous visitiez Tanger pour le tourisme, les affaires ou les voyages 
              en famille, nous fournissons la voiture adaptée à chaque besoin, avec une livraison rapide et un excellent service.
            </p>
          </div>

          {/* Fleet Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Car className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">Un Véhicule pour Chaque Besoin : Du Compact aux 7 Places</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Voitures Compactes", desc: "Idéales pour la conduite en ville et les trajets quotidiens", icon: "🚗" },
                { title: "Berlines Économiques", desc: "Options abordables et économes en carburant", icon: "🚙" },
                { title: "SUV et 4x4", desc: "Parfaits pour les road trips et les voyages longue distance", icon: "🚐" },
                { title: "Véhicules 7 Places", desc: "Parfaits pour les familles et les voyages de groupe", icon: "🚌" },
                { title: "Voitures Familiales", desc: "Pour un usage exécutif ou des expériences familiales", icon: "🏎️" }
              ].map((vehicle, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{vehicle.icon}</div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">{vehicle.title}</h3>
                  <p className="text-gray-300">{vehicle.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-amber-400/10 rounded-2xl p-6 mt-8">
              <p className="text-gray-300 text-center">
                Toutes nos voitures sont bien entretenues, climatisées et assurées.
              </p>
            </div>
          </div>

          {/* Security Deposit */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-amber-400/20">
            <div className="flex items-center mb-6">
              <CreditCard className="h-8 w-8 text-amber-400 mr-4" />
              <h2 className="text-3xl font-bold text-amber-400">💳 Caution Requise</h2>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Une caution remboursable de <span className="text-amber-400 font-bold">500 EUR</span> est requise pour chaque location.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-400/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Options de Paiement :</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-400 mr-2" />En espèces lors de la livraison du véhicule</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-amber-400 mr-2" />Bloquée sur une carte de crédit valide (non débitée, seulement retenue temporairement)</li>
                </ul>
              </div>
              <div className="bg-green-400/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Retour de la Caution :</h3>
                <p className="text-gray-300">La caution est restituée à la fin de la location, à condition que le véhicule soit rendu en bon état.</p>
              </div>
            </div>
          </div>

          {/* Free Delivery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">📍 Livraison aux Lieux Clés</h2>
              <p className="text-lg text-gray-300">Nous livrons les voitures directement aux endroits les plus pratiques :</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Aéroport Tanger Ibn Battouta",
                "Port Tanger Med",
                "Port Tanger Ville",
                "Gare de Tanger",
                "Centre-ville de Tétouan"
              ].map((location, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-amber-400/20 text-center">
                  <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white">{location}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Traveler Types */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-amber-400/20">
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-amber-400 mr-4" />
              <h2 className="text-3xl font-bold text-amber-400">💼 Conçu pour Tous Types de Voyageurs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { type: "Touriste", desc: "Ayant besoin d'un SUV ou d'une voiture compacte depuis l'aéroport", icon: "🏖️" },
                { type: "Professionnel", desc: "En voyage d'affaires à Tanger", icon: "💼" },
                { type: "Famille", desc: "Ayant besoin d'un véhicule spacieux 7 places", icon: "👨‍👩‍👧‍👦" },
                { type: "Locataire Long Terme", desc: "Recherchant une location mensuelle au meilleur tarif", icon: "📅" }
              ].map((traveler, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-amber-400/5 rounded-xl">
                  <div className="text-3xl">{traveler.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{traveler.type}</h3>
                    <p className="text-gray-300">{traveler.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-amber-400 font-semibold">NASSOH CAR a la solution pour vous.</p>
              <p className="text-gray-300 mt-2">👉 Consultez notre flotte complète et réservez en ligne sur : <span className="text-amber-400">nassohcar.com</span></p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-8">✅ Pourquoi Choisir NASSOH CAR ?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Prix abordables journaliers, hebdomadaires et mensuels",
              "Assurance incluse dans toutes les locations",
              "Aucun frais caché — contrats clairs et transparents",
              "Support en arabe, français et anglais",
              "Réservation rapide via WhatsApp, téléphone ou site web"
            ].map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-amber-400/20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-3xl p-8 md:p-12 mt-16 text-center border border-amber-400/30">
            <h2 className="text-3xl font-bold text-white mb-6">Prêt à Réserver Votre Voiture Parfaite ?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-amber-400" />
                <span className="text-lg text-gray-300">+212 631-630013</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-amber-400" />
                <span className="text-lg text-gray-300">contact@nassohcar.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;