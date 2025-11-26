import Breadcrumb, { BreadcrumbStructuredData } from '../../components/Breadcrumb'
import StructuredData from '../../components/StructuredData'

export default function NoleggioAutoItaliaPage() {
  const breadcrumbItems = [
    { label: 'Noleggio Auto Italia', href: '/noleggio-auto-italia' }
  ]

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <StructuredData 
        type="LocalBusiness" 
        countryTarget="IT" 
        language="it"
      />
      <StructuredData 
        type="Fleet" 
        countryTarget="IT" 
        language="it"
        data={{ numberOfItems: 20 }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="text-center mt-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Noleggio Auto a Tangeri
                <span className="block text-green-600">per clienti italiani</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Scopri Tangeri con il nostro servizio di noleggio auto di prima classe. 
                Perfetto per i visitatori italiani che cercano comfort e affidabilità.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/location-voiture-tanger"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Vedi la Nostra Flotta
                </a>
                <a
                  href="#servizi"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  I Nostri Servizi
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perché sceglierci per il noleggio auto a Tangeri?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Servizio Affidabile</h3>
                <p className="text-gray-600">
                  Oltre 10 anni di esperienza nel noleggio auto a Tangeri. 
                  Comprendiamo perfettamente le esigenze dei clienti italiani.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Prezzi Trasparenti</h3>
                <p className="text-gray-600">
                  Nessun costo nascosto. Tutti i prezzi sono chiari e trasparenti, 
                  con assicurazione completa inclusa.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Posizione Strategica</h3>
                <p className="text-gray-600">
                  Ritiro all'aeroporto di Tangeri, in centro città o al porto. 
                  Perfetto per il vostro arrivo in Marocco.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servizi" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              I Nostri Servizi a Tangeri
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Ritiro Aeroporto</h3>
                <p className="text-gray-600 text-sm">
                  Servizio diretto dall'aeroporto di Tangeri-Boukhalef al vostro hotel o destinazione.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Chilometraggio Illimitato</h3>
                <p className="text-gray-600 text-sm">
                  Esplorate tutto il Marocco senza limitazioni di chilometraggio.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Supporto 24/7</h3>
                <p className="text-gray-600 text-sm">
                  Servizio clienti in italiano disponibile 24 ore su 24.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3">Assicurazione Completa</h3>
                <p className="text-gray-600 text-sm">
                  Copertura assicurativa completa per la vostra sicurezza inclusa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Preview Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              La Nostra Flotta a Tangeri
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Dalle auto economiche per la città ai SUV di lusso - 
              abbiamo il veicolo perfetto per il vostro soggiorno a Tangeri.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Categoria Economica</h3>
                <p className="text-gray-600 mb-4">
                  Perfetta per viaggi in città e brevi escursioni. Economica e affidabile.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dacia Logan, Renault Symbol</li>
                  <li>• 5 posti</li>
                  <li>• Aria condizionata</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">SUV & Veicoli Familiari</h3>
                <p className="text-gray-600 mb-4">
                  Ideali per famiglie e viaggi più lunghi attraverso il Marocco.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dacia Duster, Hyundai Tucson</li>
                  <li>• 7 posti</li>
                  <li>• 4x4 disponibile</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Premium & Lusso</h3>
                <p className="text-gray-600 mb-4">
                  Per comfort e stile speciali durante il vostro soggiorno.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• BMW, Mercedes, Audi</li>
                  <li>• Allestimenti premium</li>
                  <li>• Interni in pelle</li>
                </ul>
              </div>
            </div>

            <a
              href="/location-voiture-tanger"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Vedi Tutti i Veicoli e Prenota
            </a>
          </div>
        </section>

        {/* Tangier Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Scopri Tangeri con l'auto a noleggio
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">La Perla dello Stretto</h3>
                <p className="text-gray-600 mb-6">
                  Tangeri, l'affascinante città sullo Stretto di Gibilterra, 
                  offre un mix unico di cultura europea e africana. 
                  Con un'auto a noleggio potete esplorare la città e i suoi dintorni al vostro ritmo.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-gray-600">Medina di Tangeri - Patrimonio UNESCO</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-gray-600">Cap Spartel - Incontro tra Atlantico e Mediterraneo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-gray-600">Asilah - Pittoresca città costiera (1 ora di viaggio)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-gray-600">Tétouan - La Colomba Bianca (1 ora di viaggio)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Pronti per la vostra avventura a Tangeri?</h3>
                <p className="text-gray-600 mb-6">
                  Prenotate oggi stesso il vostro veicolo e iniziate il vostro viaggio di scoperta 
                  attraverso una delle città più affascinanti del Marocco.
                </p>
                <a
                  href="/location-voiture-tanger"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  Scegli il Veicolo Ora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Contattaci per la tua prenotazione
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Il nostro team di lingua italiana è a vostra disposizione
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+212631630013"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +212 631-630013
              </a>
              
              <a
                href="https://wa.me/212631630013"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}