import Breadcrumb, { BreadcrumbStructuredData } from '../../components/Breadcrumb'
import StructuredData from '../../components/StructuredData'
import Link from 'next/link'
import { Car, Shield, MapPin, Globe, Clock, CreditCard, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react'

export default function LocationVoitureEuropePage() {
  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Location Voiture Europe', href: '/location-voiture-europe' }
  ]

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <StructuredData 
        type="LocalBusiness" 
        countryTarget="MA" 
        language="fr"
      />
      
      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex justify-center mb-8">
              <Breadcrumb items={breadcrumbItems} className="text-slate-300" />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                Location Voiture Maroc 
                <span className="block text-amber-400 mt-2">Depuis l'Europe</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                Vous résidez en <span className="text-white font-semibold">France, Espagne, Belgique ou partout en Europe</span> ? 
                Nassoh Car simplifie votre arrivée à Tanger avec un service premium conçu pour la diaspora et les voyageurs européens.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/fleet"
                  className="bg-amber-400 text-slate-900 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-amber-300 transition-all shadow-xl hover:shadow-amber-400/20 transform hover:-translate-y-1"
                >
                  Réserver mon véhicule
                </Link>
                <Link
                  href="#expert"
                  className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Pourquoi nous ?
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Countries Support Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'France', flag: '🇫🇷', text: 'Service dédié FR' },
                { name: 'Espagne', flag: '🇪🇸', text: 'Accès via Ferry' },
                { name: 'Belgique', flag: '🇧🇪', text: 'Vols directs' },
                { name: 'Italie', flag: '🇮🇹', text: 'Assistance 24/7' }
              ].map((country) => (
                <div key={country.name} className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform">
                  <span className="text-4xl mb-3">{country.flag}</span>
                  <h3 className="text-lg font-bold text-slate-900">{country.name}</h3>
                  <p className="text-slate-500 text-sm">{country.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Service Section */}
        <section id="expert" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  L'Expertise Nassoh Car pour les <span className="text-amber-500">Voyageurs d'Europe</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Nous comprenons que votre voyage commence bien avant votre arrivée sur le sol marocain. 
                  C'est pourquoi nous avons optimisé chaque étape de votre location pour répondre aux standards européens d'exigence et de qualité.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Globe, title: 'Réservation Internationale', desc: 'Réservez en ligne avec confirmation immédiate via notre plateforme sécurisée.' },
                    { icon: Shield, title: 'Garanties Européennes', desc: 'Assurances complètes, contrats transparents et véhicules aux normes de sécurité.' },
                    { icon: Clock, title: 'Ponctualité Garantie', desc: 'Nous suivons votre vol ou ferry en temps réel pour une remise des clés sans attente.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-400/20 rounded-[40px] blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Location voiture premium Maroc" 
                  className="relative rounded-[32px] shadow-2xl z-10 w-full h-auto object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
                  <div className="text-4xl font-bold text-amber-400 mb-1">15+</div>
                  <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Ans d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Services Spécialisés</h2>
              <p className="text-xl text-slate-600">Tout est inclus pour votre confort maximal</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Accueil Aéroport & Port',
                  desc: 'Récupération gratuite à Tanger Ibn Battouta ou au Port Tanger Med. Notre agent vous attend dès votre descente.',
                  features: ['Livraison au terminal', 'Aide aux bagages', 'Accueil personnalisé']
                },
                {
                  title: 'Flotte Dernière Génération',
                  desc: 'Véhicules 2023-2024 parfaitement entretenus pour vos longs trajets à travers le Royaume.',
                  features: ['Citadines & SUV', 'Boîte Auto/Manuelle', 'Entretien rigoureux']
                },
                {
                  title: 'Assistance Totale',
                  desc: 'Un problème ? Une question ? Notre équipe francophone et polyglotte est disponible 24h/24 par WhatsApp.',
                  features: ['Support WhatsApp', 'Dépannage rapide', 'Conseils itinéraire']
                }
              ].map((service, i) => (
                <div key={i} className="bg-white p-10 rounded-[32px] shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-shadow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 flex-grow">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900 rounded-[48px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-transparent"></div>
              <div className="grid lg:grid-cols-2 gap-12 items-center p-12 md:p-20">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tarifs Transparents en Euros</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Pas de surprises à l'arrivée. Nos prix incluent tout ce dont vous avez besoin pour rouler en toute sérénité au Maroc.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div>
                      <div className="text-3xl font-bold text-amber-400 mb-1">Dès 17€</div>
                      <div className="text-slate-400">Par jour (long séjour)</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-400 mb-1">0€</div>
                      <div className="text-slate-400">Frais de dossier</div>
                    </div>
                  </div>
                  <Link
                    href="/fleet"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-amber-400 transition-colors"
                  >
                    Découvrir nos offres <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[32px] relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Ce qui est inclus :</h3>
                  <ul className="space-y-4">
                    {[
                      'Kilométrage illimité sur tout le Maroc',
                      'Assurance collision et vol incluse',
                      'Deuxième conducteur gratuit',
                      'Siège bébé sur demande',
                      'Annulation gratuite jusqu\'à 48h',
                      'Assistance routière 24h/24 et 7j/7'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials or Trust indicators */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-16">Ils nous font confiance depuis l'Europe</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Jean-Marc D.', city: 'Paris, France', text: 'Excellent service. La voiture m\'attendait à l\'aéroport de Tanger, propre et récente. Formalités bouclées en 10 minutes. Je recommande Nassoh Car sans hésiter.' },
                { name: 'Karim B.', city: 'Bruxelles, Belgique', text: 'Habitué à louer chez les grands noms, j\'ai testé Nassoh Car cette année. Meilleur prix et surtout un accueil bien plus chaleureux. Service impeccable.' },
                { name: 'Elena G.', city: 'Madrid, Espagne', text: 'Très pratique pour traverser avec le ferry. Ils nous ont livré la voiture directement au port de Tanger Med. Équipe très professionnelle.' }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 italic text-slate-600 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold not-italic">5/5 Avis Client</div>
                  <p className="mb-6">"{t.text}"</p>
                  <div className="not-italic">
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
              Prêt pour votre aventure marocaine ?
            </h2>
            <p className="text-xl text-slate-800 mb-12 font-medium">
              Réservez votre voiture dès aujourd'hui et profitez de nos tarifs exclusifs pour les résidents européens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fleet"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-800 transition-all shadow-2xl"
              >
                🚗 Voir toute la flotte
              </Link>
              <a
                href="https://wa.me/212631630013"
                className="bg-white text-slate-900 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6 text-green-500" /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
