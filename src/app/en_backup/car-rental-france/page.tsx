import Breadcrumb, { BreadcrumbStructuredData } from '@/app/en/components/Breadcrumb'
import StructuredData from '@/app/en/components/StructuredData'
import Link from 'next/link'

export default function CarRentalFrancePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en#services' },
    { label: 'Car Rental for French Travelers', href: '/en/car-rental-france' },
  ]

  return (
    <>
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <StructuredData type="LocalBusiness" countryTarget="FR" language="en" />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />

            <div className="text-center mt-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Car Rental in Tangier
                <span className="block text-blue-600">for French Travelers</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Coming from France? Rent your car in Tangier with Nassoh Car. Premium service, modern fleet, and French‑speaking assistance for your stay in Morocco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en/fleet" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">View Our Fleet</Link>
                <Link href="#benefits" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">Our Benefits</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Nassoh Car in Tangier?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb  -6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Prices</h3>
                <p className="text-gray-600">Clear rates with no hidden fees. From 200 MAD/day with insurance included and unlimited mileage.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">French‑speaking Assistance</h3>
                <p className="text-gray-600">Our team speaks French and understands the needs of travelers from France in Morocco.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Service</h3>
                <p className="text-gray-600">New vehicles, free delivery at Ibn Battouta Airport and 24/7 service.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Special Services for French Travelers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🛬 Airport Welcome</h3>
                <p className="text-gray-600 mb-4">Free pickup at Tangier Ibn Battouta Airport. Our team welcomes you with a sign and guides you to your vehicle.</p>
                <ul className="space-y-2 text-gray-600"><li>✓ Free delivery at the terminal</li><li>✓ Personal welcome</li><li>✓ Fast paperwork (15 minutes)</li></ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🗺️ Local Tips</h3>
                <p className="text-gray-600 mb-4">Get expert local tips: itineraries, great addresses, driving rules in Morocco and tailored recommendations.</p>
                <ul className="space-y-2 text-gray-600"><li>✓ Morocco driving guide</li><li>✓ Recommended itineraries</li><li>✓ 24/7 assistance</li></ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Easy Booking</h3>
                <p className="text-gray-600 mb-4">Book from France in a few clicks. Instant confirmation by email and WhatsApp with all rental details.</p>
                <ul className="space-y-2 text-gray-600"><li>✓ 24/7 online booking</li><li>✓ Instant confirmation</li><li>✓ Free modifications</li></ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚗 Modern Fleet</h3>
                <p className="text-gray-600 mb-4">2023–2025 vehicles: city cars, SUVs, sedans and luxury cars. All with AC and French GPS.</p>
                <ul className="space-y-2 text-gray-600"><li>✓ Latest models</li><li>✓ French GPS included</li><li>✓ Comprehensive insurance</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Tangier and Morocco?</h2>
            <p className="text-xl mb-8">Discover our full fleet and book your vehicle now</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/fleet" className="bg-white text-blue-600 px  -8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">🚗 View Our Fleet</Link>
              <a href="tel:+212631630013" className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">📞 +212 631 63 00 13</a>
              <a href="https://wa.me/212539325080" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">💬 WhatsApp</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
