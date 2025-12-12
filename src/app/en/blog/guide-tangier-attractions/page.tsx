import type { Metadata } from 'next'
import { MapPin, Clock, Camera, Compass, Route, Landmark, Building, Mountain, Waves, Trees, Car, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tangier Attractions Guide 2025 ✓ Top Sights & Itineraries',
  description: 'Complete Tangier attractions guide ✓ Medina, Kasbah, Corniche, Cap Spartel, Hercules Caves ✓ Practical itineraries ✓ Local tips.',
  keywords: 'tangier attractions guide, things to do tangier, tangier itinerary, tangier top sights',
  alternates: { canonical: 'https://www.nassohcar.com/en/blog/guide-tangier-attractions' },
  openGraph: {
    title: 'Tangier Attractions Guide 2025 ✓ Top Sights & Itineraries',
    description: 'Complete guide to Tangier: medina, kasbah, corniche, Cap Spartel and more.',
    images: ['/tangier-attractions-guide.jpg'],
  },
}

export default function TangierAttractionsGuideBlog() {
  const attractions = [
    { name: 'Tangier Medina', summary: 'Labyrinth of narrow streets, souks and traditional architecture', icon: Building },
    { name: 'Kasbah of Tangier', summary: 'Historic fortress with panoramic views', icon: Landmark },
    { name: 'Corniche of Tangier', summary: 'Seaside promenade with beaches and cafes', icon: Waves },
    { name: 'Cap Spartel', summary: 'Mythical cape where the Atlantic meets the Mediterranean', icon: Compass },
    { name: 'Hercules Caves', summary: 'Iconic caves carved by waves and legend', icon: Mountain },
  ]

  const itineraries = [
    { title: 'Classic Tangier (1 day)', items: ['Medina', 'Kasbah', 'Petit Socco', 'Corniche', 'Cap Spartel'] },
    { title: 'Sea and City (2 days)', items: ['Beaches', 'Corniche', 'Medina', 'Kasbah', 'Hercules Caves'] },
    { title: 'Culture and History (2 days)', items: ['Museums', 'Medina', 'Kasbah', 'Cap Spartel'] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50">
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6"><Camera className="h-6 w-6 text-amber-400 mr-2" /><span className="text-amber-400 font-semibold text-lg">Attractions Guide</span></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">Tangier Attractions Guide</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">Top sights and itineraries in Tangier: medina, kasbah, corniche, Cap Spartel and Hercules Caves.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm"><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Calendar className="h-4 w-4 mr-2" /><span>Updated Jan 15, 2025</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Clock className="h-4 w-4 mr-2" /><span>7 min read</span></div><div className="flex items-center bg-white/10 rounded-full px-4 py-2"><Tag className="h-4 w-4 mr-2" /><span>Guide</span></div></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Attractions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {attractions.map((a, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-3">
                  <a.icon className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{a.name}</h3>
                </div>
                <p className="text-gray-700">{a.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Itineraries</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {itineraries.map((it, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">{it.title}</h3>
                <ul className="text-gray-700 space-y-1">
                  {it.items.map((i, j) => (<li key={j}>• {i}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
