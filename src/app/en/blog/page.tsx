import { Metadata } from 'next'
import { Calendar, Tag, Search, ArrowRight, Car, Clock, Eye, Star, TrendingUp, Award, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb, { BreadcrumbStructuredData } from '@/components/Breadcrumb'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Tangier Car Rental Blog | Rental Tips | Nassoh Car',
  description: 'Car rental tips and advice in Tangier and Morocco. Itineraries, savings, safety, local culture. Your expert since 2020.',
  keywords: 'nassoh car blog, tangier car rental tips, morocco car rental advice, tangier itineraries, car rental savings, morocco road safety, tangier local culture',
  openGraph: {
    title: 'Tangier Car Rental Blog | Rental Tips | Nassoh Car',
    description: 'Car rental tips and advice in Tangier and Morocco. Itineraries, savings, safety, local culture.',
    type: 'website',
    url: 'https://www.nassohcar.com/en/blog',
    siteName: 'Nassoh Car',
    images: [
      { url: '/tangier.webp', width: 1200, height: 630, alt: 'Tangier car rental blog - Nassoh Car' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tangier Car Rental Blog | Rental Tips',
    description: 'Car rental tips and advice in Tangier and Morocco.',
    images: ['/tangier.webp']
  },
  alternates: {
    canonical: 'https://www.nassohcar.com/en/blog'
  }
}

export default function BlogPageEN() {
  const blogPosts = [
    {
      id: 1,
      citySlug: "car-rental-tips-tangier",
      title: "Car Rental Tangier: 5 Hidden Gems to Discover in 2025",
      excerpt: "Discover the best kept secrets of Tangier with our affordable car rental service. From the mystical Caves of Hercules to the pristine beaches of Cap Spartel, unlock exclusive destinations that 90% of tourists never see. Our local experts reveal privileged itineraries and hidden parking spots that will transform your Moroccan adventure into an unforgettable journey.",
      fullPreview: "Why settle for crowded tourist spots when you can explore the hidden paradise of Tangier? Our affordable fleet gives you access to secret beaches, ancient ruins, and breathtaking viewpoints that only locals know. With GPS navigation, 24/7 support, and insider travel guides included, you'll discover why our customers give us 5 stars for revealing Morocco's hidden treasures.",
      date: "August 23, 2025",
      category: "Travel Advice",
      image: "/tangier.webp",
      readTime: "5 min read",
      featured: true,
      views: "2.3k",
      rating: 4.9,
      tags: ["Hidden Gems", "Tangier", "Adventure", "Local Secrets"]
    },

    // Tanger Port Keywords
    {
      id: 2,
      citySlug: "car-rental-tangier-port",
      title: "Car Rental Tangier Port - 24/7 Budget Service",
      excerpt: "Car rental service at Tangier port with free delivery. Modern fleet, transparent rates, and 24/7 assistance for your trips from the port.",
      fullPreview: "Book your car directly at Tangier port with our budget service. Free delivery, recent vehicles, and a dedicated team for stress-free service upon your arrival.",
      date: "December 15, 2024",
      category: "Transport",
      image: "/tanger service.webp",
      readTime: "6 min read",
      featured: false,
      views: "1.2k",
      rating: 4.8,
      tags: ["Tangier Port", "Delivery", "Budget Service"]
    },
    {
      id: 3,
      citySlug: "car-rental-tangier",
      title: "Car Rental Tangier City - City Center & Medina",
      excerpt: "Rent your car in the heart of Tangier City. Agencies in the city center and near the medina with free delivery service and personalized advice.",
      fullPreview: "Explore Tangier and its surroundings with our vehicles available in the city center. Personalized service, itinerary advice, and local assistance to discover the region's treasures.",
      date: "December 14, 2024",
      category: "Urban Exploration",
      image: "/tangier.webp",
      readTime: "5 min read",
      featured: false,
      views: "980",
      rating: 4.7,
      tags: ["City Center", "Medina", "Exploration"]
    },
    {
      id: 4,
      citySlug: "cheap-car-rental-tangier",
      title: "Cheap Car Rental Tangier - Best Prices 2024",
      excerpt: "Find the best car rental deals in Tangier. Price comparison, economy vehicles, and exclusive promotions to save on your rental.",
      fullPreview: "Discover our unbeatable rates for car rental in Tangier. Economy vehicles, special offers, and tips to reduce your transport costs in Morocco.",
      date: "December 13, 2024",
      category: "Savings Tips",
      image: "/tangier.webp",
      readTime: "7 min read",
      featured: false,
      views: "1.5k",
      rating: 4.9,
      tags: ["Price", "Economy", "Promotions"]
    },
    // Budget/Cheap Rental Keywords
    {
      id: 5,
      citySlug: "rent-cheap-car-tangier",
      title: "Economy Car Rental Tangier - Small Budget",
      excerpt: "Economy vehicles in Tangier for all budgets. City cars, compacts, and sedans at reduced prices with insurance included and unlimited mileage.",
      fullPreview: "Travel smart with our economy cars in Tangier. Selection of reliable vehicles, reduced consumption, and rates adapted to small budgets without compromising quality.",
      date: "December 12, 2024",
      category: "Savings Tips",
      image: "/tangier.webp",
      readTime: "5 min read",
      featured: false,
      views: "1.1k",
      rating: 4.6,
      tags: ["Economy", "Budget", "City Cars"]
    },
    // Tétouan Keywords
    {
      id: 9,
      citySlug: "car-rental-tetouan-airport",
      title: "Car Rental Tetouan Airport - Express Service",
      excerpt: "Car rental service at Tetouan airport with express pickup. Modern fleet, simplified formalities, and immediate departure to your destination.",
      fullPreview: "Save time with our express service at Tetouan airport. Vehicles ready for pickup, accelerated procedures, and dedicated team for a departure without waiting.",
      date: "December 8, 2024",
      category: "Transport",
      image: "/tetouan.jpeg",
      readTime: "6 min read",
      featured: false,
      views: "920",
      rating: 4.8,
      tags: ["Airport", "Express", "Tetouan"]
    },
    {
      id: 10,
      citySlug: "find-car-rental-in-tetouan",
      title: "Find a Rental Car in Tetouan - Practical Guide",
      excerpt: "Practical guide to easily find a rental car in Tetouan. Agency comparison, selection tips, and tricks to save.",
      fullPreview: "Everything you need to know to choose the right rental car in Tetouan. Selection criteria, offer comparison, and local expert recommendations.",
      date: "December 7, 2024",
      category: "Travel Advice",
      image: "/tetouan.jpeg",
      readTime: "7 min read",
      featured: false,
      views: "1.1k",
      rating: 4.6,
      tags: ["Guide", "Tetouan", "Tips"]
    },
    {
      id: 11,
      citySlug: "car-rental-tetouan",
      title: "Car Rental in Tetouan - Complete Fleet",
      excerpt: "Wide choice of rental cars in Tetouan. City cars, sedans, SUVs, and family vehicles with included services and recommended destinations.",
      fullPreview: "Discover our complete fleet of vehicles in Tetouan. From economy city cars to family SUVs, find the perfect car to explore the Rif region.",
      date: "December 6, 2024",
      category: "Car Reviews",
      image: "/tetouan.jpeg",
      readTime: "6 min read",
      featured: false,
      views: "850",
      rating: 4.7,
      tags: ["Fleet", "Tetouan", "Vehicles"]
    },
    // General/Agency Keywords
    {
      id: 12,
      citySlug: "best-rated-car-rentals-tangier",
      title: "Best Rated Car Rentals Tangier - Excellence",
      excerpt: "Discover why we are the best rated car rental agency in Tangier. Customer testimonials, excellence service, and VIP benefits.",
      fullPreview: "Excellence recognized by our customers: 4.9/5 stars and over 2000 positive reviews. Discover the criteria that make our reputation and our exclusive VIP services.",
      date: "December 5, 2024",
      category: "Car Reviews",
      image: "/tangier.webp",
      readTime: "5 min read",
      featured: false,
      views: "1.4k",
      rating: 4.9,
      tags: ["Excellence", "Reviews", "VIP"]
    },
    {
      id: 13,
      citySlug: "car-rental-tangier-auto",
      title: "Auto Car Rental Tangier - Automatic Vehicles",
      excerpt: "Specialist in automatic car rentals in Tangier. Driving comfort, ease of use, and modern fleet for all your trips.",
      fullPreview: "Simplify your trips with our automatic vehicles in Tangier. Optimal comfort, relaxing driving, and modern technologies for a comfortable experience.",
      date: "December 4, 2024",
      category: "Car Reviews",
      image: "/tangier.webp",
      readTime: "6 min read",
      featured: false,
      views: "1.0k",
      rating: 4.8,
      tags: ["Automatic", "Comfort", "Modern"]
    },
    {
      id: 14,
      citySlug: "long-term-car-rental",
      title: "Long Term Car Rental - Flexible Solutions",
      excerpt: "Long term car rental solutions adapted to your needs. Decreasing rates, maintenance included, and maximum flexibility for professionals and individuals.",
      fullPreview: "Optimize your costs with our long-term solutions. Maintenance, insurance, and assistance included with preferential rates from 1 month of rental.",
      date: "December 3, 2024",
      category: "Transportation",
      image: "/maroc.png",
      readTime: "8 min read",
      featured: false,
      views: "1.2k",
      rating: 4.7,
      tags: ["Long Term", "Flexible", "Professional"]
    },
    {
      id: 15,
      citySlug: "long-term-car-hire",
      title: "Long Term Car Hire - Optimized Contracts",
      excerpt: "Long term car hire contracts with optimized rates. Personalized solutions for companies, individuals, and specific needs.",
      fullPreview: "Discover our custom long-term contracts. Decreasing pricing, included services, and contractual flexibility to adapt to your projects.",
      date: "December 2, 2024",
      category: "Transportation",
      image: "/maroc.png",
      readTime: "7 min read",
      featured: false,
      views: "950",
      rating: 4.6,
      tags: ["Long Term", "Contracts", "Personalized"]
    },
    {
      id: 16,
      citySlug: "car-rental-agency",
      title: "Car Rental Agency - Nassoh Car",
      excerpt: "Your trusted car rental agency in Morocco. National presence, diversified fleet, and excellence customer service since 2020.",
      fullPreview: "Leading agency in Morocco with 15 service points, over 500 vehicles, and a team of experts dedicated to your satisfaction. Quality certifications and economic service.",
      date: "December 1, 2024",
      category: "Travel Advice",
      image: "/nassouhe.png",
      readTime: "6 min read",
      featured: false,
      views: "1.8k",
      rating: 4.9,
      tags: ["Agency", "National", "Excellence"]
    },
    {
      id: 20,
      citySlug: "car-rental-agency-tangier",
      title: "Car Rental Agency Tangier - Local Service",
      excerpt: "Local car rental agency in Tangier with 5 service points. Expert team, specialized fleet, and in-depth knowledge of the region.",
      fullPreview: "Benefit from our local expertise in Tangier. 5 strategically placed agencies, bilingual team, and personalized advice to discover the region's treasures.",
      date: "November 30, 2024",
      category: "Travel Advice",
      image: "/tangier.webp",
      readTime: "5 min read",
      featured: false,
      views: "1.3k",
      rating: 4.8,
      tags: ["Local", "Tangier", "Expert"]
    },
    {
      id: 21,
      citySlug: "car-rental-morocco",
      title: "Car Rental Morocco - National Coverage",
      excerpt: "Car rental service throughout Morocco. National coverage, recommended circuits, and fleet adapted to the specifics of the Moroccan territory.",
      fullPreview: "Explore all of Morocco with our national coverage. From imperial cities to the desert, personalized circuits and vehicles adapted to each region.",
      date: "November 29, 2024",
      category: "Travel Guides",
      image: "/maroc.png",
      readTime: "9 min read",
      featured: false,
      views: "2.1k",
      rating: 4.9,
      tags: ["Morocco", "National", "Circuits"]
    },
    {
      id: 22,
      citySlug: "car-for-rent-morocco",
      title: "Car For Rent Morocco - Complete Guide 2024",
      excerpt: "Complete guide to renting a car in Morocco. Practical tips, price comparison by city, and tricks to save on your rental.",
      fullPreview: "Everything you need to know about car rental in Morocco: necessary documents, insurance, prices by region, and expert advice for a successful trip.",
      date: "November 28, 2024",
      category: "Travel Guides",
      image: "/maroc.png",
      readTime: "10 min read",
      featured: false,
      views: "2.5k",
      rating: 4.8,
      tags: ["Guide", "Morocco", "Tips"]
    },
    // Previously orphan pages - now linked from main blog
    {
      id: 23,
      citySlug: "car-rental-tangier-med-port",
      title: "Car Rental Tangier Med Port 2025 - Ferry & Cargo | 24/7 Service",
      excerpt: "Car rental service at Tangier Med port with express delivery for ferry and cargo. Available 24/7 with fleet adapted to international travelers.",
      fullPreview: "Facilitate your trips from Tangier Med port with our dedicated service. Direct delivery to the ferry terminal, vehicles adapted for long journeys, and multilingual assistance.",
      date: "November 27, 2024",
      category: "Transport",
      image: "/tanger service.webp",
      readTime: "7 min read",
      featured: false,
      views: "1.8k",
      rating: 4.9,
      tags: ["Tangier Med Port", "Ferry", "24/7"]
    },
    {
      id: 24,
      citySlug: "car-rental-tangier-morocco",
      title: "Car Rental Tangier Morocco 2025 - Premium National Service | Nassoh Car",
      excerpt: "Premium car rental service in Tangier with national coverage. High-end fleet, personalized service, and assistance everywhere in Morocco.",
      fullPreview: "Discover our premium service in Tangier with national extension. Luxury vehicles, dedicated concierge, and technical support in all cities of Morocco.",
      date: "November 26, 2024",
      category: "Travel Guides",
      image: "/tangier.webp",
      readTime: "8 min read",
      featured: false,
      views: "2.2k",
      rating: 4.9,
      tags: ["Premium", "National", "Tangier"]
    },
    {
      id: 25,
      citySlug: "car-rental-in-tangier",
      title: "Car Rental in Tangier 2025 - Fast Booking & Unbeatable Prices | Nassoh Car",
      excerpt: "Fast car booking in Tangier with the most competitive prices on the market. Online booking system and instant confirmation.",
      fullPreview: "Book your car in Tangier in less than 3 minutes. Intuitive interface, secure payment, and immediate confirmation with the best guaranteed rates.",
      date: "November 25, 2024",
      category: "Travel Guides",
      image: "/tangier.webp",
      readTime: "6 min read",
      featured: false,
      views: "1.9k",
      rating: 4.8,
      tags: ["Booking", "Fast", "Price"]
    },
    {
      id: 26,
      citySlug: "car-rental-tangier-airport",
      title: "Car Rental at Tangier Airport 2025 - Express Delivery | Nassoh Car",
      excerpt: "Express car rental service at Tangier airport with immediate delivery. Quick pickup and simplified formalities for a stress-free departure.",
      fullPreview: "Optimize your time at Tangier airport with our express service. Vehicles ready for pickup, dedicated team, and accelerated procedures.",
      date: "November 24, 2024",
      category: "Transport",
      image: "/tangier.webp",
      readTime: "7 min read",
      featured: false,
      views: "2.1k",
      rating: 4.9,
      tags: ["Airport", "Express", "Delivery"]
    },
    // Additional previously orphan pages
    {
      id: 27,
      citySlug: "car-hire-tangier",
      title: "Car Hire Tangier 2025 - Economy Fleet & Excellence Service | Nassoh Car",
      excerpt: "Car hire service in Tangier with economy fleet and excellence service. Wide choice of vehicles and competitive rates for all budgets.",
      fullPreview: "Discover our economy fleet in Tangier with recognized excellence service. Maintained vehicles, transparent rates, and professional team.",
      date: "November 23, 2024",
      category: "Travel Guides",
      image: "/tangier.webp",
      readTime: "6 min read",
      featured: false,
      views: "1.7k",
      rating: 4.8,
      tags: ["Fleet", "Economy", "Excellence"]
    },
    {
      id: 28,
      citySlug: "car-rental-tangier-port",
      title: "Car Rental at Tangier Port 2025 - Express Service | Free Delivery",
      excerpt: "Express car rental service at Tangier port with free delivery. Ideal for travelers arriving by ferry with personalized service.",
      fullPreview: "Facilitate your arrival at Tangier port with our express service. Free delivery, simplified formalities, and vehicles ready for boarding.",
      date: "November 22, 2024",
      category: "Transport",
      image: "/tanger service.webp",
      readTime: "6 min read",
      featured: false,
      views: "1.5k",
      rating: 4.7,
      tags: ["Port", "Express", "Free"]
    },
    {
      id: 29,
      citySlug: "car-rental-tangier-boukhalef",
      title: "Car Rental Tangier Boukhalef 2025 - Ibn Battuta Airport | Nassoh Car",
      excerpt: "Car rental service at Tangier Boukhalef Ibn Battuta airport. Direct pickup at the terminal with modern fleet and fast service.",
      fullPreview: "Optimize your arrival at Tangier Boukhalef airport with our dedicated service. Vehicles available 24/7 and team present at the terminal.",
      date: "November 21, 2024",
      category: "Transport",
      image: "/tangier.webp",
      readTime: "7 min read",
      featured: false,
      views: "1.9k",
      rating: 4.8,
      tags: ["Boukhalef", "Airport", "Ibn Battuta"]
    },
    {
      id: 31,
      citySlug: "cheap-car-rental-tangier",
      title: "Cheap Car Rental Tangier 2025 - Unbeatable Rates from 170 DH",
      excerpt: "Cheap car rental in Tangier with unbeatable rates from 170 DH/day. Economy vehicles and quality service at mini prices.",
      fullPreview: "Discover our unbeatable rates for car rental in Tangier. From 170 DH/day with reliable vehicles and full service included.",
      date: "November 19, 2024",
      category: "Savings Tips",
      image: "/tangier.webp",
      readTime: "6 min read",
      featured: false,
      views: "2.8k",
      rating: 4.8,
      tags: ["Cheap", "170 DH", "Economy"]
    },
    {
      id: 32,
      citySlug: "car-rental-tetouan",
      title: "Car Rental Tetouan 2025 - From 175 DH/day ✓ Economy Service",
      excerpt: "Economy car rental service in Tetouan from 175 DH/day. Modern fleet, transparent rates, and local assistance to explore the Rif region.",
      fullPreview: "Explore Tetouan and the Rif region with our economy vehicles from 175 DH/day. Expert local service and personalized advice included.",
      date: "November 18, 2024",
      category: "Travel Guides",
      image: "/tetouan.jpeg",
      readTime: "7 min read",
      featured: false,
      views: "1.6k",
      rating: 4.7,
      tags: ["Tetouan", "175 DH", "Rif"]
    },
    {
      id: 33,
      citySlug: "cheap-car-rental",
      title: "Rent Car at Small Price Tangier 2025 - Mini Rates from 170 DH/day",
      excerpt: "Rent a car at a small price in Tangier from 170 DH/day. Economy offers, recent fleet, and quality service.",
      fullPreview: "Access mobility in Tangier with our mini rates from 170 DH/day. Economy vehicles, insurance included, and dedicated customer service.",
      date: "November 17, 2024",
      category: "Savings Tips",
      image: "/tangier.webp",
      readTime: "6 min read",
      featured: false,
      views: "2.4k",
      rating: 4.8,
      tags: ["Small Price", "170 DH", "Economy"]
    },
    // Final batch of previously orphan pages
    {
      id: 34,
      citySlug: "cheap-car-rental-tangier-airport",
      title: "Cheap Car Rental Tangier Airport 2025 - From 180 DH/day | Nassoh Car",
      excerpt: "Cheap car rental at Tangier airport from 180 DH/day. Economy service with recent vehicles and dedicated airport assistance.",
      fullPreview: "Save on your rental at Tangier airport with our rates from 180 DH/day. Recent vehicles, fast service, and airport team.",
      date: "November 16, 2024",
      category: "Savings Tips",
      image: "/tangier.webp",
      readTime: "7 min read",
      featured: false,
      views: "2.6k",
      rating: 4.9,
      tags: ["Airport", "Cheap", "180 DH"]
    },
    {
      id: 35,
      citySlug: "car-for-rent-tangier",
      title: "Car For Rent Tangier 2025 - Find Your Ideal Vehicle | Nassoh Car",
      excerpt: "Find the ideal car to rent in Tangier among our wide selection. Vehicles adapted to all needs with personalized service and expert advice.",
      fullPreview: "Discover our complete selection of vehicles to rent in Tangier. From city cars to SUVs, find the perfect car with our personalized advice.",
      date: "November 15, 2024",
      category: "Travel Guides",
      image: "/tangier.webp",
      readTime: "8 min read",
      featured: false,
      views: "2.0k",
      rating: 4.8,
      tags: ["Selection", "Ideal", "Personalized"]
    },
    {
      id: 36,
      citySlug: "car-rental-tangier-med",
      title: "Car Rental Tangier Med 2025 - Port & Ferry | Free Delivery | Nassoh Car",
      excerpt: "Car rental service at Tangier Med complex. Ferry coordination, free delivery to the port, and vehicles adapted for international travelers.",
      fullPreview: "Pick up your vehicle at the Tangier Med port complex with our specialized service. Ferry tracking and multilingual assistance for international travelers.",
      date: "November 14, 2024",
      category: "Transport",
      image: "/tanger port.webp",
      readTime: "8 min read",
      featured: false,
      views: "1.8k",
      rating: 4.8,
      tags: ["Tangier Med", "Ferry", "International"]
    },
    {
      id: 37,
      citySlug: "car-rental-agency-tangier-airport",
      title: "Car Rental Agency Tangier Airport 2025 - Premium Service | Nassoh Car",
      excerpt: "Specialized car rental agency at Tangier airport. Premium service, dedicated team, and optimized procedures for a stress-free departure.",
      fullPreview: "Our agency at Tangier airport offers you a premium service with dedicated team, premium vehicles, and personalized assistance.",
      date: "November 13, 2024",
      category: "Transport",
      image: "/tangier.webp",
      readTime: "8 min read",
      featured: false,
      views: "2.2k",
      rating: 4.9,
      tags: ["Agency", "Premium", "Airport"]
    }
  ];

  // Categories removed to prevent 404 errors - no actual category pages exist

  const featuredProducts = [
    {
      name: "DACIA SANDERO STEPWAY",
      price: "35,00 € / Day",
      image: "/cars/DACIA SANDERO STEPWAY.avif",
      rating: 4.8,
      features: ["GPS Included", "Full Insurance", "24/7 Support"]
    },
    {
      name: "TOYOTA YARIS",
      price: "30,00 € / Day",
      image: "/cars/TOYOTA YARIS.avif",
      rating: 4.9,
      features: ["Economy", "Perfect for City", "Easy Parking"]
    }
  ];

  // Function removed as category links are no longer used

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-yellow-400/30 to-amber-500/30 p-6 rounded-3xl backdrop-blur-sm border border-yellow-400/40 shadow-2xl">
              <Car className="h-8 w-8 text-yellow-400 drop-shadow-lg" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            NASSOH CAR 
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
              Blog
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Unlock Morocco's Secrets with our Tangier Car Rental Tips
          </p>
          <div className="flex items-center justify-center space-x-8 text-yellow-400">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 fill-current" />
              <span className="text-xl font-bold">Note 4.9/5</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-6 w-6" />
              <span className="text-xl font-bold">50k+ Readers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6" />
              <span className="text-xl font-bold">Local Experts</span>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Breadcrumb items={[{ label: 'Blog' }]} />
          </div>
        </div>
      </div>

      <BreadcrumbStructuredData items={[{ label: 'Blog', href: '/en/blog' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Enhanced Category Navigation */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200 mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
                <Tag className="h-8 w-8 mr-3 text-yellow-500" />
                Explore by Category
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/en/blog/guide-tangier-attractions" className="group bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 group-hover:text-green-600 transition-colors">Tangier Attractions</h3>
                      <p className="text-sm text-slate-600">Guide 2025</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">Top attractions in Tangier with car rental tips to explore the city.</p>
                </Link>

                <Link href="/en/blog/car-rental-tangier" className="group bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-yellow-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <Car className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 group-hover:text-yellow-600 transition-colors">Tangier Rental</h3>
                      <p className="text-sm text-slate-600">Full Advice</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">Complete guide to car rental in Tangier with the best tips.</p>
                </Link>
              </div>
            </div>

            {/* Enhanced Featured Posts */}
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 border border-slate-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-96">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6 flex space-x-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-full font-black text-sm shadow-lg">
              FEATURED
            </div>
                    <div className="bg-black/80 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{post.views} views</span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 bg-black/80 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{post.rating}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                    <div className="flex items-center space-x-6 text-white/90 text-sm mb-4">
                      <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                        <Tag className="h-4 w-4" />
                        <span>{post.category}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-xl leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
                    <p className="text-slate-700 text-lg font-medium italic">
                      {post.fullPreview}
                    </p>
                  </div>
                  <Link href={`/blog/${post.citySlug}`} className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-black py-4 px-8 rounded-2xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                    Read the Full Story
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Enhanced Regular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <div key={post.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 group">
                  <div className="relative h-56">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 text-slate-800 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{post.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-slate-500 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
                      <p className="text-slate-700 text-sm font-medium italic">
                        💡 Preview: {post.fullPreview.substring(0, 100)}...
                      </p>
                    </div>
                    <Link href={`/en/blog/${post.citySlug}`} className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                      🔓 Read Full Story
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Enhanced Search */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Search className="h-6 w-6 mr-3 text-yellow-500" />
                Search Articles
              </h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Find travel secrets..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                />
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                🔍 Search Now
              </button>
            </div>

            {/* Categories section removed to prevent 404 errors */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Tag className="h-6 w-6 mr-3 text-yellow-500" />
                Explore our Guides
              </h3>
              <div className="text-center py-8">
                <p className="text-slate-600 mb-4">Discover our complete guides for your trip to Morocco</p>
                <Link href="/en/blog" className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  See all guides
                </Link>
              </div>
            </div>

            {/* Enhanced Featured Products */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Car className="h-6 w-6 mr-3 text-yellow-500" />
                Featured Rentals
              </h3>
              <div className="space-y-6">
                {featuredProducts.map((product, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-center space-x-4 p-4 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 rounded-xl transition-all duration-300">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-yellow-700 transition-colors duration-300">
                          {product.name}
                        </h4>
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold text-slate-600">{product.rating}</span>
                        </div>
                        <p className="text-yellow-600 font-black text-lg">{product.price}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/en/fleet" className="block w-full mt-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-4 px-6 rounded-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 text-center transform hover:scale-105 shadow-lg">
                See All Economy Cars
              </Link>
            </div>

            {/* Enhanced Newsletter Signup */}
            <div className="bg-gradient-to-br from-yellow-400 via-amber-400 to-amber-500 rounded-3xl shadow-xl p-8 text-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-black mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-3" />
                  VIP Travel Secrets
                </h3>
                <p className="mb-6 text-black/90 font-semibold leading-relaxed">
                  🎯 Join 10,000+ smart travelers who receive exclusive insider tips, hidden deals, and secret spots every week.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email for VIP access"
                    className="w-full px-6 py-4 rounded-xl border-0 focus:ring-4 focus:ring-black/20 bg-white/95 font-semibold placeholder-slate-500"
                  />
                  <button className="w-full bg-black text-white font-bold py-4 px-6 rounded-xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    🔥 Get Instant Access
                  </button>
                </div>
                <p className="text-xs text-black/70 mt-3 text-center">
                  ✅ No spam • ✅ Unsubscribe anytime • ✅ 100% Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Chat Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 border-white">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-lg">💬 Need Help? Live Chat!</span>
          </div>
        </div>
      </div>
      <StructuredData type="Blog" countryTarget="MA" language="en" />
    </div>
  );
}
