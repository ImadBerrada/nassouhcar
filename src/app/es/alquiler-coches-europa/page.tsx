import Breadcrumb, { BreadcrumbStructuredData } from '../../../components/Breadcrumb'
import StructuredData from '../../../components/StructuredData'
import Link from 'next/link'
import { Car, Shield, MapPin, Globe, Clock, CreditCard, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react'

export default function AlquilerCochesEuropaPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/es' },
    { label: 'Servicios', href: '/es#servicios' },
    { label: 'Alquiler Coches Europa', href: '/es/alquiler-coches-europa' }
  ]

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <StructuredData 
        type="LocalBusiness" 
        countryTarget="MA" 
        language="es"
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
                Alquiler de Coches Marruecos 
                <span className="block text-amber-400 mt-2">Desde Europa</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                ¿Reside en <span className="text-white font-semibold">Francia, España, Bélgica o cualquier parte de Europa</span>? 
                Nassoh Car simplifica su llegada a Tánger con un servicio premium diseñado para la diáspora y los viajeros europeos.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/es/flota"
                  className="bg-amber-400 text-slate-900 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-amber-300 transition-all shadow-xl hover:shadow-amber-400/20 transform hover:-translate-y-1"
                >
                  Reservar mi vehículo
                </Link>
                <Link
                  href="#expert"
                  className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-800 transition-all"
                >
                  ¿Por qué nosotros?
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
                { name: 'Francia', flag: '🇫🇷', text: 'Servicio dedicado FR' },
                { name: 'España', flag: '🇪🇸', text: 'Acceso vía Ferry' },
                { name: 'Bélgica', flag: '🇧🇪', text: 'Vuelos directos' },
                { name: 'Italia', flag: '🇮🇹', text: 'Asistencia 24/7' }
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
                  La Experiencia de Nassoh Car para los <span className="text-amber-500">Viajeros de Europa</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Entendemos que su viaje comienza mucho antes de llegar a suelo marroquí. 
                  Por eso hemos optimizado cada etapa de su alquiler para cumplir con los estándares europeos de exigencia y calidad.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Globe, title: 'Reserva Internacional', desc: 'Reserve en línea con confirmación inmediata a través de nuestra plataforma segura.' },
                    { icon: Shield, title: 'Garantías Europeas', desc: 'Seguros completos, contratos transparentes y vehículos con estándares de seguridad.' },
                    { icon: Clock, title: 'Puntualidad Garantizada', desc: 'Seguimos su vuelo o ferry en tiempo real para una entrega de llaves sin esperas.' }
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
                  alt="Alquiler coche premium Marruecos" 
                  className="relative rounded-[32px] shadow-2xl z-10 w-full h-auto object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
                  <div className="text-4xl font-bold text-amber-400 mb-1">15+</div>
                  <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Años de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Servicios Especializados</h2>
              <p className="text-xl text-slate-600">Todo está incluido para su máxima comodidad</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Bienvenida en Aeropuerto y Puerto',
                  desc: 'Recogida gratuita en Tánger Ibn Battouta o en el Puerto Tánger Med. Nuestro agente le espera desde su llegada.',
                  features: ['Entrega en la terminal', 'Ayuda con el equipaje', 'Bienvenida personalizada']
                },
                {
                  title: 'Flota de Última Generación',
                  desc: 'Vehículos 2023-2024 perfectamente mantenidos para sus largos viajes a través del Reino.',
                  features: ['Utilitarios y SUV', 'Caja Automática/Manual', 'Mantenimiento riguroso']
                },
                {
                  title: 'Asistencia Total',
                  desc: '¿Un problema? ¿Una pregunta? Nuestro equipo multilingüe está disponible las 24 horas a través de WhatsApp.',
                  features: ['Soporte por WhatsApp', 'Reparación rápida', 'Consejos de itinerario']
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
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tarifas Transparentes en Euros</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Sin sorpresas al llegar. Nuestros precios incluyen todo lo que necesita para conducir con total tranquilidad en Marruecos.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div>
                      <div className="text-3xl font-bold text-amber-400 mb-1">Desde 17€</div>
                      <div className="text-slate-400">Por día (larga estancia)</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-400 mb-1">0€</div>
                      <div className="text-slate-400">Gastos de gestión</div>
                    </div>
                  </div>
                  <Link
                    href="/es/flota"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-amber-400 transition-colors"
                  >
                    Descubra nuestras ofertas <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[32px] relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Qué está incluido:</h3>
                  <ul className="space-y-4">
                    {[
                      'Kilometraje ilimitado en todo Marruecos',
                      'Seguro de colisión y robo incluido',
                      'Segundo conductor gratuito',
                      'Silla de bebé bajo petición',
                      'Cancelación gratuita hasta 48h',
                      'Asistencia en carretera 24/7'
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
            <h2 className="text-3xl font-bold text-slate-900 mb-16">Confían en nosotros desde Europa</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Jean-Marc D.', city: 'París, Francia', text: 'Excelente servicio. El coche me esperaba en el aeropuerto de Tánger, limpio y reciente. Trámites completados en 10 minutos. Recomiendo Nassoh Car sin dudarlo.' },
                { name: 'Karim B.', city: 'Bruselas, Bélgica', text: 'Acostumbrado a alquilar en las grandes compañías, probé Nassoh Car este año. Mejor precio y sobre todo una acogida mucho más cálida. Servicio impecable.' },
                { name: 'Elena G.', city: 'Madrid, España', text: 'Muy práctico para cruzar con el ferry. Nos entregaron el coche directamente en el puerto de Tánger Med. Equipo muy profesional.' }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 italic text-slate-600 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold not-italic">5/5 Opinión Cliente</div>
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
              ¿Listo para su aventura marroquí?
            </h2>
            <p className="text-xl text-slate-800 mb-12 font-medium">
              Reserve su coche hoy mismo y disfrute de nuestras tarifas exclusivas para residentes europeos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/es/flota"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-800 transition-all shadow-2xl"
              >
                🚗 Ver toda la flota
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
