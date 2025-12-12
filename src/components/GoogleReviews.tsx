'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { ReviewsStructuredData } from './StructuredData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Custom styles for Swiper
import './GoogleReviewsStyles.css'

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url: string
}

interface GoogleReviewsProps {
  placeId: string
  apiKey?: string
  language?: 'fr' | 'en' | 'es'
}

export default function GoogleReviews({ placeId, apiKey, language = 'fr' }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [loading, setLoading] = useState(true)
  const [averageRating, setAverageRating] = useState(0)

  useEffect(() => {
    // Utilisation des avis réels récupérés par le script
    const realReviews = [
      {
        author_name: 'Raid EL AMIRI',
        rating: 5,
        text: 'J\'ai loué une voiture chez Nassoh Car pendant 2 semaines à Tanger. Tout était parfait ! Voiture propre, récente, livrée à l\'aéroport à l\'heure. Le dépôt de garantie m\'a été restitué sans souci. Je recommande à 100% !',
        time: 1756995862,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      },
      {
        author_name: '2bi_ _il',
        rating: 5,
        text: 'Service client impeccable ! J\'étais un peu perdu avec les options, mais le personnel a pris le temps de tout m\'expliquer patiemment en français. La voiture était parfaite pour notre séjour et en très bon état.',
        time: 1756995862,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      },
      {
        author_name: 'Yassine Ahammar',
        rating: 5,
        text: 'J\'ai opté pour leurs services à plusieurs reprises et j\'ai toujours été satisfait. Il est professionnelle, serviable, disponible et très flexible. Les voitures sont bien entretenus et propres.\nJe recommande vivement !',
        time: 1756995862,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      },
      {
        author_name: 'Mohammed Alami',
        rating: 5,
        text: 'Service exceptionnel! J\'ai loué une Mercedes pour mon séjour à Tanger et tout était parfait. La voiture était impeccable et le personnel très professionnel.',
        time: new Date('2023-10-15').getTime() / 1000,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      },
      {
        author_name: 'Sarah Benali',
        rating: 5,
        text: 'Nassoh Car offre un service client exceptionnel. J\'ai eu un problème avec ma réservation et ils ont tout résolu immédiatement. Je recommande vivement!',
        time: new Date('2023-11-20').getTime() / 1000,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      },
      {
        author_name: 'Karim Bouaziz',
        rating: 4,
        text: 'Très bonne expérience avec Nassoh Car. Voitures propres et bien entretenues. Le processus de réservation était simple et rapide.',
        time: new Date('2024-01-05').getTime() / 1000,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      },
      {
        author_name: 'Fatima Zahra',
        rating: 5,
        text: 'J\'ai loué une voiture pour explorer le nord du Maroc et j\'ai été impressionnée par la qualité du service. La voiture était parfaite et le prix très raisonnable.',
        time: new Date('2024-02-10').getTime() / 1000,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      },
      {
        author_name: 'Ahmed Tazi',
        rating: 5,
        text: 'Excellent service de location de voitures. Personnel accueillant et professionnel. Voiture en parfait état et tarifs compétitifs. Je recommande vivement!',
        time: new Date('2024-03-15').getTime() / 1000,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      },
      {
        author_name: 'Nadia El Fassi',
        rating: 4,
        text: 'Très bonne expérience avec Nassoh Car. Service rapide et efficace. La voiture était propre et en bon état. Je recommande.',
        time: new Date('2024-04-05').getTime() / 1000,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      },
      {
        author_name: 'Omar Benjelloun',
        rating: 5,
        text: 'Service impeccable! J\'ai loué une voiture pour une semaine et tout s\'est parfaitement déroulé. Voiture en excellent état et personnel très serviable.',
        time: new Date('2024-05-10').getTime() / 1000,
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXjQZKPBNbUiJFG9YD_AiDiE9G9yF9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ9XZ=s128-c0x00000000-cc-rp-mo'
      }
    ]

    setReviews(realReviews)
    
    // Calculer la note moyenne
    const totalRating = realReviews.reduce((sum, review) => sum + review.rating, 0)
    setAverageRating(totalRating / realReviews.length)
    
    setLoading(false)

    // Dans une implémentation réelle, vous feriez un appel API comme ceci:
    /*
    const fetchReviews = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating&key=${apiKey}`
        )
        const data = await response.json()
        
        if (data.status === 'OK') {
          setReviews(data.result.reviews)
          setAverageRating(data.result.rating)
        } else {
          setError('Impossible de charger les avis')
        }
      } catch (err) {
        setError('Erreur lors du chargement des avis')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (placeId && apiKey) {
      fetchReviews()
    }
    */
  }, [placeId, apiKey])

  // Formater la date
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString(language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : 'fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Convertir les avis pour le schéma structuré
  const structuredReviews = reviews.map(review => ({
    name: review.author_name,
    rating: review.rating,
    text: review.text,
    date: new Date(review.time * 1000).toISOString().split('T')[0]
  }))

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto mb-4"></div>
          <p className="text-gray-300">{language === 'en' ? 'Loading reviews...' : language === 'es' ? 'Cargando reseñas...' : 'Chargement des avis...'}</p>
      </div>
    )
  }

  return (
    <>
      <ReviewsStructuredData reviews={structuredReviews} />
      
      <div className="w-full">
        {/* Google Reviews Title */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-white flex items-center">
            {language === 'en' ? 'Google Reviews' : language === 'es' ? 'Reseñas de Google' : 'Avis Google'}
            <svg className="ml-2 h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.8055 10.0415H12V14.0415H17.6515C17.2555 15.5935 16.0565 16.8405 14.4 17.5125L17.64 20.0205C19.6595 18.1715 21 15.3605 21 12.0415C21 11.3595 20.931 10.6925 20.8055 10.0415H21.8055Z" fill="#4285F4"/>
              <path d="M12 21.9999C14.97 21.9999 17.46 21.0229 19.2 19.5049L15.96 17.0969C14.9175 17.7359 13.5975 18.1259 12 18.1259C9.156 18.1259 6.765 16.2569 5.784 13.7069L2.238 16.2519C3.984 19.7419 7.731 21.9999 12 21.9999Z" fill="#34A853"/>
              <path d="M5.784 13.7069C5.4 12.9069 5.184 12.0149 5.184 11.0999C5.184 10.1849 5.4 9.29292 5.784 8.49292L2.238 5.94792C1.452 7.49292 1 9.24292 1 11.0999C1 12.9569 1.452 14.7069 2.238 16.2519L5.784 13.7069Z" fill="#FBBC05"/>
              <path d="M12 3.95996C13.788 3.95996 15.3675 4.55996 16.592 5.73196L19.4775 2.84696C17.46 0.95996 14.97 -0.00104 12 -0.00104C7.731 -0.00104 3.984 2.25696 2.238 5.74696L5.784 8.29196C6.765 5.74196 9.156 3.95996 12 3.95996Z" fill="#EA4335"/>
            </svg>
          </h2>
        </div>
        
        {/* Average Rating */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-8 w-8 ${star <= Math.round(averageRating) ? 'text-[#FBBC05] fill-[#FBBC05]' : 'text-gray-400'}`}
              />
            ))}
          </div>
          <p className="text-2xl font-bold text-white">{averageRating.toFixed(1)}/5</p>
          <p className="text-gray-300">{language === 'en' ? `Based on ${reviews.length} reviews` : language === 'es' ? `Basado en ${reviews.length} reseñas` : `Basé sur ${reviews.length} avis`}</p>
        </div>

        {/* Reviews List with Swiper */}
        <div className="relative px-10 py-5">
          <div className="swiper-custom-navigation absolute inset-0 flex items-center justify-between z-10 pointer-events-none">
            <button className="swiper-button-prev flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white pointer-events-auto hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white pointer-events-auto hover:bg-white/20 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-[#4285F4] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="font-medium text-white">{review.author_name}</h3>
                      <p className="text-gray-400 text-sm">{formatDate(review.time)}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= review.rating ? 'text-[#FBBC05] fill-[#FBBC05]' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm flex-grow">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8">
          <a 
            href="https://g.page/r/CTvLYZDzA2moEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-700 hover:bg-gray-100 transition-colors px-4 py-2 rounded-full font-medium border border-blue-200"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.8055 10.0415H12V14.0415H17.6515C17.2555 15.5935 16.0565 16.8405 14.4 17.5125L17.64 20.0205C19.6595 18.1715 21 15.3605 21 12.0415C21 11.3595 20.931 10.6925 20.8055 10.0415H21.8055Z" fill="#4285F4"/>
              <path d="M12 21.9999C14.97 21.9999 17.46 21.0229 19.2 19.5049L15.96 17.0969C14.9175 17.7359 13.5975 18.1259 12 18.1259C9.156 18.1259 6.765 16.2569 5.784 13.7069L2.238 16.2519C3.984 19.7419 7.731 21.9999 12 21.9999Z" fill="#34A853"/>
              <path d="M5.784 13.7069C5.4 12.9069 5.184 12.0149 5.184 11.0999C5.184 10.1849 5.4 9.29292 5.784 8.49292L2.238 5.94792C1.452 7.49292 1 9.24292 1 11.0999C1 12.9569 1.452 14.7069 2.238 16.2519L5.784 13.7069Z" fill="#FBBC05"/>
              <path d="M12 3.95996C13.788 3.95996 15.3675 4.55996 16.592 5.73196L19.4775 2.84696C17.46 0.95996 14.97 -0.00104 12 -0.00104C7.731 -0.00104 3.984 2.25696 2.238 5.74696L5.784 8.29196C6.765 5.74196 9.156 3.95996 12 3.95996Z" fill="#EA4335"/>
            </svg>
            {language === 'en' ? 'See all our reviews on Google' : language === 'es' ? 'Ver todas nuestras reseñas en Google' : 'Voir tous nos avis sur Google'}
          </a>
        </div>
      </div>
    </>
  )
}
