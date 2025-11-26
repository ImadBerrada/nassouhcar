import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Star, Utensils, Waves, Mountain } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

interface LocalePageProps {
  params: Promise<{
    locale: string
  }>
}

const localeContent = {
  en: {
    title: 'Complete Tangier Guide 2024: Ultimate Travel Guide to Morocco\'s Gateway',
    description: 'Comprehensive guide to Tangier, Morocco: top attractions, best restaurants, where to stay, transportation tips, and insider secrets for the perfect visit.',
    keywords: 'Tangier guide, Tangier Morocco travel, Tangier attractions, Tangier restaurants, Tangier hotels, Morocco travel guide',
    breadcrumbs: {
      home: 'Home',
      guides: 'Guides',
      current: 'Tangier Guide'
    },
    content: {
      subtitle: 'Discover the magic of Tangier, where Africa meets Europe at the crossroads of the Mediterranean and Atlantic.',
      sections: {
        overview: {
          title: 'About Tangier',
          description: 'Tangier, Morocco\'s northern gateway, is a captivating blend of cultures where European and African influences merge. This historic port city offers stunning coastal views, rich history, vibrant markets, and a unique cosmopolitan atmosphere.',
          highlights: [
            'Strategic location at the Strait of Gibraltar',
            'Rich multicultural heritage',
            'Beautiful beaches and coastal scenery',
            'Historic medina and modern districts',
            'Gateway to Europe and Africa'
          ]
        },
        attractions: {
          title: 'Top Attractions',
          places: [
            {
              name: 'Kasbah of Tangier',
              description: 'Historic fortress with panoramic views and the Kasbah Museum',
              category: 'Historical',
              duration: '2-3 hours',
              icon: 'Mountain'
            },
            {
              name: 'Medina of Tangier',
              description: 'Bustling old town with traditional souks and narrow alleys',
              category: 'Cultural',
              duration: '3-4 hours',
              icon: 'MapPin'
            },
            {
              name: 'Cape Spartel',
              description: 'Northwestern tip of Africa with lighthouse and Atlantic views',
              category: 'Natural',
              duration: '1-2 hours',
              icon: 'Waves'
            },
            {
              name: 'Hercules Caves',
              description: 'Legendary caves with unique rock formations and sea views',
              category: 'Natural',
              duration: '1 hour',
              icon: 'Mountain'
            },
            {
              name: 'Grand Socco',
              description: 'Main square connecting old and new city with cafes and shops',
              category: 'Cultural',
              duration: '1 hour',
              icon: 'MapPin'
            },
            {
              name: 'American Legation Museum',
              description: 'First American public property outside the United States',
              category: 'Historical',
              duration: '1-2 hours',
              icon: 'Star'
            }
          ]
        },
        dining: {
          title: 'Where to Eat',
          categories: [
            {
              title: 'Traditional Moroccan',
              restaurants: [
                {
                  name: 'Restaurant Dar Naji',
                  description: 'Authentic Moroccan cuisine in traditional setting',
                  specialty: 'Tagines and couscous',
                  priceRange: '$$'
                },
                {
                  name: 'Le Saveur du Poisson',
                  description: 'Fresh seafood with harbor views',
                  specialty: 'Grilled fish and seafood tagines',
                  priceRange: '$$$'
                }
              ]
            },
            {
              title: 'International Cuisine',
              restaurants: [
                {
                  name: 'El Morocco Club',
                  description: 'Upscale dining with international menu',
                  specialty: 'Mediterranean and Moroccan fusion',
                  priceRange: '$$$$'
                },
                {
                  name: 'Café Hafa',
                  description: 'Historic café with mint tea and pastries',
                  specialty: 'Traditional mint tea and views',
                  priceRange: '$'
                }
              ]
            }
          ]
        },
        accommodation: {
          title: 'Where to Stay',
          areas: [
            {
              name: 'Medina',
              description: 'Traditional riads and authentic atmosphere',
              pros: ['Authentic experience', 'Walking distance to attractions', 'Traditional architecture'],
              cons: ['Can be noisy', 'Narrow streets for cars', 'Limited parking']
            },
            {
              name: 'Ville Nouvelle',
              description: 'Modern hotels and European-style accommodations',
              pros: ['Modern amenities', 'Easy parking', 'Restaurant variety'],
              cons: ['Less authentic', 'Further from historic sites', 'More expensive']
            },
            {
              name: 'Malabata',
              description: 'Beachfront hotels with sea views',
              pros: ['Beach access', 'Sea views', 'Resort amenities'],
              cons: ['Far from city center', 'Need transportation', 'Limited dining nearby']
            }
          ]
        },
        transportation: {
          title: 'Getting Around',
          options: [
            {
              method: 'Walking',
              description: 'Best for exploring the medina and old town',
              cost: 'Free',
              pros: ['Authentic experience', 'No traffic concerns', 'Discover hidden gems'],
              cons: ['Limited range', 'Can be tiring', 'Not suitable for all areas']
            },
            {
              method: 'Petit Taxi',
              description: 'Small blue taxis for city travel',
              cost: '10-50 MAD',
              pros: ['Convenient', 'Affordable', 'Available everywhere'],
              cons: ['Meter issues', 'Language barrier', 'Traffic delays']
            },
            {
              method: 'Car Rental',
              description: 'Freedom to explore Tangier and surroundings',
              cost: '200-500 MAD/day',
              pros: ['Complete freedom', 'Day trips possible', 'Comfortable'],
              cons: ['Parking challenges', 'Traffic in city', 'Navigation difficulty']
            },
            {
              method: 'Bus',
              description: 'Public buses connecting different districts',
              cost: '3-7 MAD',
              pros: ['Very cheap', 'Extensive network', 'Local experience'],
              cons: ['Crowded', 'Language barrier', 'Limited schedules']
            }
          ]
        },
        tips: {
          title: 'Insider Tips',
          categories: [
            {
              title: 'Best Time to Visit',
              tips: [
                'Spring (March-May) and Fall (September-November) offer ideal weather',
                'Summer can be hot and crowded',
                'Winter is mild but can be rainy',
                'Ramadan affects restaurant hours and atmosphere'
              ]
            },
            {
              title: 'Cultural Etiquette',
              tips: [
                'Dress modestly, especially in religious areas',
                'Learn basic Arabic or French phrases',
                'Bargaining is expected in souks',
                'Remove shoes when entering mosques',
                'Ask permission before photographing people'
              ]
            },
            {
              title: 'Money & Shopping',
              tips: [
                'Moroccan Dirham (MAD) is the local currency',
                'ATMs are widely available',
                'Credit cards accepted in hotels and upscale restaurants',
                'Bargain in markets but not in fixed-price shops',
                'Tipping is customary (10-15%)'
              ]
            },
            {
              title: 'Safety & Health',
              tips: [
                'Tangier is generally safe for tourists',
                'Be aware of pickpockets in crowded areas',
                'Drink bottled water',
                'Use sunscreen and stay hydrated',
                'Keep copies of important documents'
              ]
            }
          ]
        }
      },
      cta: {
        title: 'Ready to Explore Tangier?',
        description: 'Rent a car from our Tangier location and discover this amazing city at your own pace.',
        button: 'Book Your Car'
      }
    }
  },
  ar: {
    title: 'دليل طنجة الشامل 2024: الدليل النهائي للسفر إلى بوابة المغرب',
    description: 'دليل شامل لطنجة، المغرب: أهم المعالم، أفضل المطاعم، أماكن الإقامة، نصائح النقل، وأسرار من الداخل للزيارة المثالية.',
    keywords: 'دليل طنجة, سفر طنجة المغرب, معالم طنجة, مطاعم طنجة, فنادق طنجة, دليل السفر المغرب',
    breadcrumbs: {
      home: 'الرئيسية',
      guides: 'الأدلة',
      current: 'دليل طنجة'
    },
    content: {
      subtitle: 'اكتشف سحر طنجة، حيث تلتقي أفريقيا بأوروبا عند ملتقى البحر الأبيض المتوسط والمحيط الأطلسي.',
      sections: {
        overview: {
          title: 'حول طنجة',
          description: 'طنجة، بوابة المغرب الشمالية، هي مزيج آسر من الثقافات حيث تندمج التأثيرات الأوروبية والأفريقية. تقدم هذه المدينة الساحلية التاريخية مناظر ساحلية خلابة وتاريخاً غنياً وأسواقاً نابضة بالحياة وأجواء كوزموبوليتانية فريدة.',
          highlights: [
            'موقع استراتيجي في مضيق جبل طارق',
            'تراث متعدد الثقافات غني',
            'شواطئ جميلة ومناظر ساحلية',
            'المدينة القديمة والأحياء الحديثة',
            'بوابة إلى أوروبا وأفريقيا'
          ]
        },
        attractions: {
          title: 'أهم المعالم',
          places: [
            {
              name: 'قصبة طنجة',
              description: 'قلعة تاريخية مع مناظر بانورامية ومتحف القصبة',
              category: 'تاريخي',
              duration: '2-3 ساعات',
              icon: 'Mountain'
            },
            {
              name: 'المدينة القديمة لطنجة',
              description: 'البلدة القديمة الصاخبة مع الأسواق التقليدية والأزقة الضيقة',
              category: 'ثقافي',
              duration: '3-4 ساعات',
              icon: 'MapPin'
            },
            {
              name: 'رأس سبارطيل',
              description: 'أقصى نقطة شمال غرب أفريقيا مع منارة ومناظر المحيط الأطلسي',
              category: 'طبيعي',
              duration: '1-2 ساعة',
              icon: 'Waves'
            },
            {
              name: 'مغارات هرقل',
              description: 'كهوف أسطورية مع تشكيلات صخرية فريدة ومناظر البحر',
              category: 'طبيعي',
              duration: '1 ساعة',
              icon: 'Mountain'
            },
            {
              name: 'السوق الكبير',
              description: 'الساحة الرئيسية التي تربط المدينة القديمة والجديدة مع المقاهي والمحلات',
              category: 'ثقافي',
              duration: '1 ساعة',
              icon: 'MapPin'
            },
            {
              name: 'متحف البعثة الأمريكية',
              description: 'أول ممتلكات أمريكية عامة خارج الولايات المتحدة',
              category: 'تاريخي',
              duration: '1-2 ساعة',
              icon: 'Star'
            }
          ]
        },
        dining: {
          title: 'أماكن تناول الطعام',
          categories: [
            {
              title: 'المأكولات المغربية التقليدية',
              restaurants: [
                {
                  name: 'مطعم دار ناجي',
                  description: 'مأكولات مغربية أصيلة في بيئة تقليدية',
                  specialty: 'الطاجين والكسكس',
                  priceRange: '$$'
                },
                {
                  name: 'نكهة السمك',
                  description: 'مأكولات بحرية طازجة مع إطلالة على الميناء',
                  specialty: 'السمك المشوي وطاجين المأكولات البحرية',
                  priceRange: '$$$'
                }
              ]
            },
            {
              title: 'المأكولات العالمية',
              restaurants: [
                {
                  name: 'نادي المغرب',
                  description: 'مطعم راقي مع قائمة عالمية',
                  specialty: 'مزيج متوسطي ومغربي',
                  priceRange: '$$$$'
                },
                {
                  name: 'مقهى الهفة',
                  description: 'مقهى تاريخي مع الشاي بالنعناع والمعجنات',
                  specialty: 'الشاي التقليدي بالنعناع والمناظر',
                  priceRange: '$'
                }
              ]
            }
          ]
        },
        accommodation: {
          title: 'أماكن الإقامة',
          areas: [
            {
              name: 'المدينة القديمة',
              description: 'رياضات تقليدية وأجواء أصيلة',
              pros: ['تجربة أصيلة', 'مسافة قريبة من المعالم', 'عمارة تقليدية'],
              cons: ['يمكن أن تكون صاخبة', 'شوارع ضيقة للسيارات', 'مواقف محدودة']
            },
            {
              name: 'المدينة الجديدة',
              description: 'فنادق حديثة وإقامة على الطراز الأوروبي',
              pros: ['وسائل راحة حديثة', 'مواقف سهلة', 'تنوع المطاعم'],
              cons: ['أقل أصالة', 'أبعد من المواقع التاريخية', 'أغلى']
            },
            {
              name: 'مالاباطا',
              description: 'فنادق على الشاطئ مع إطلالة على البحر',
              pros: ['الوصول للشاطئ', 'إطلالة البحر', 'مرافق المنتجع'],
              cons: ['بعيد عن وسط المدينة', 'يحتاج نقل', 'خيارات طعام محدودة قريباً']
            }
          ]
        },
        transportation: {
          title: 'التنقل',
          options: [
            {
              method: 'المشي',
              description: 'الأفضل لاستكشاف المدينة القديمة والبلدة القديمة',
              cost: 'مجاني',
              pros: ['تجربة أصيلة', 'لا مخاوف من المرور', 'اكتشاف جواهر مخفية'],
              cons: ['نطاق محدود', 'يمكن أن يكون متعباً', 'غير مناسب لجميع المناطق']
            },
            {
              method: 'التاكسي الصغير',
              description: 'تاكسيات زرقاء صغيرة للسفر في المدينة',
              cost: '10-50 درهم',
              pros: ['مريح', 'بأسعار معقولة', 'متاح في كل مكان'],
              cons: ['مشاكل العداد', 'حاجز اللغة', 'تأخيرات المرور']
            },
            {
              method: 'تأجير السيارات',
              description: 'حرية استكشاف طنجة والمناطق المحيطة',
              cost: '200-500 درهم/يوم',
              pros: ['حرية كاملة', 'رحلات يومية ممكنة', 'مريح'],
              cons: ['تحديات الوقوف', 'مرور في المدينة', 'صعوبة الملاحة']
            },
            {
              method: 'الحافلة',
              description: 'حافلات عامة تربط الأحياء المختلفة',
              cost: '3-7 درهم',
              pros: ['رخيص جداً', 'شبكة واسعة', 'تجربة محلية'],
              cons: ['مزدحم', 'حاجز اللغة', 'جداول محدودة']
            }
          ]
        },
        tips: {
          title: 'نصائح من الداخل',
          categories: [
            {
              title: 'أفضل وقت للزيارة',
              tips: [
                'الربيع (مارس-مايو) والخريف (سبتمبر-نوفمبر) يوفران طقساً مثالياً',
                'الصيف يمكن أن يكون حاراً ومزدحماً',
                'الشتاء معتدل لكن يمكن أن يكون ممطراً',
                'رمضان يؤثر على ساعات المطاعم والأجواء'
              ]
            },
            {
              title: 'آداب الثقافة',
              tips: [
                'ارتدِ ملابس محتشمة، خاصة في المناطق الدينية',
                'تعلم عبارات أساسية بالعربية أو الفرنسية',
                'المساومة متوقعة في الأسواق',
                'اخلع الحذاء عند دخول المساجد',
                'اطلب الإذن قبل تصوير الأشخاص'
              ]
            },
            {
              title: 'المال والتسوق',
              tips: [
                'الدرهم المغربي (MAD) هو العملة المحلية',
                'أجهزة الصراف الآلي متاحة على نطاق واسع',
                'البطاقات الائتمانية مقبولة في الفنادق والمطاعم الراقية',
                'فاوض في الأسواق وليس في المحلات ذات الأسعار الثابتة',
                'الإكرامية عادة (10-15%)'
              ]
            },
            {
              title: 'السلامة والصحة',
              tips: [
                'طنجة آمنة عموماً للسياح',
                'كن حذراً من النشالين في المناطق المزدحمة',
                'اشرب المياه المعبأة',
                'استخدم واقي الشمس وابق رطباً',
                'احتفظ بنسخ من الوثائق المهمة'
              ]
            }
          ]
        }
      },
      cta: {
        title: 'مستعد لاستكشاف طنجة؟',
        description: 'استأجر سيارة من موقعنا في طنجة واكتشف هذه المدينة الرائعة بوتيرتك الخاصة.',
        button: 'احجز سيارتك'
      }
    }
  }
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as 'en' | 'ar'
  const content = localeContent[locale] || localeContent.en

  return {
    title: `${content.title} | Nassoh Car`,
    description: content.description,
    keywords: content.keywords,
    openGraph: {
      title: `${content.title} | Nassoh Car`,
      description: content.description,
      type: 'article',
      url: `https://www.nassohcar.com/${locale}/guides/complete-tangier-guide`,
      siteName: 'Nassoh Car',
      images: [
        {
          url: 'https://www.nassohcar.com/tangier.webp',
          width: 1200,
          height: 630,
          alt: content.title
        }
      ]
    },
    alternates: {
      canonical: `https://www.nassohcar.com/${locale}/guides/complete-tangier-guide`,
      languages: generateHreflangLinks('/guides/complete-tangier-guide')
    }
  }
}

export default async function CompleteTangierGuidePage({ params }: LocalePageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as 'en' | 'ar'
  const content = localeContent[locale]
  
  if (!content) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.description,
    "author": {
      "@type": "Organization",
      "name": "Nassoh Car"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nassoh Car",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nassohcar.com/nassouh.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-01",
    "url": `https://www.nassohcar.com/${locale}/guides/complete-tangier-guide`,
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nassohcar.com/${locale}/guides/complete-tangier-guide`
    }
  }

  const isRTL = locale === 'ar'

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <StructuredData type="@graph" data={[structuredData]} />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: content.breadcrumbs.home, href: `/${locale}` },
          { label: content.breadcrumbs.guides, href: `/${locale}/guides` },
          { label: content.breadcrumbs.current, href: `/${locale}/guides/complete-tangier-guide` }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">{content.title}</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.content.subtitle}
          </p>
        </div>

        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.overview.title}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              {content.content.sections.overview.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.content.sections.overview.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Star className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Attractions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.attractions.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.content.sections.attractions.places.map((place, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {place.icon === 'Mountain' && <Mountain className="h-6 w-6 text-blue-600 mr-3" />}
                  {place.icon === 'MapPin' && <MapPin className="h-6 w-6 text-blue-600 mr-3" />}
                  {place.icon === 'Waves' && <Waves className="h-6 w-6 text-blue-600 mr-3" />}
                  {place.icon === 'Star' && <Star className="h-6 w-6 text-blue-600 mr-3" />}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{place.name}</h3>
                    <span className="text-sm text-blue-600">{place.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{place.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {place.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dining */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.dining.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.content.sections.dining.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.restaurants.map((restaurant, restIndex) => (
                    <div key={restIndex} className="border-l-4 border-blue-600 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{restaurant.name}</h4>
                        <span className="text-blue-600 font-medium">{restaurant.priceRange}</span>
                      </div>
                      <p className="text-gray-600 mb-1">{restaurant.description}</p>
                      <p className="text-sm text-gray-500">
                        <Utensils className="h-4 w-4 inline mr-1" />
                        {restaurant.specialty}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.accommodation.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.content.sections.accommodation.areas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.name}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="space-y-1">
                      {area.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="space-y-1">
                      {area.cons.map((con, conIndex) => (
                        <li key={conIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.transportation.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.content.sections.transportation.options.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{option.method}</h3>
                  <span className="text-blue-600 font-bold">{option.cost}</span>
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-700 mb-2">Pros:</h4>
                    <ul className="space-y-1">
                      {option.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-700 mb-2">Cons:</h4>
                    <ul className="space-y-1">
                      {option.cons.map((con, conIndex) => (
                        <li key={conIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insider Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.tips.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.content.sections.tips.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-1 h-1 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{content.content.cta.title}</h2>
          <p className="text-xl mb-6 opacity-90">
            {content.content.cta.description}
          </p>
          <Link 
            href={`/${locale}/booking`}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {content.content.cta.button}
            <ArrowLeft className={`h-5 w-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ]
}