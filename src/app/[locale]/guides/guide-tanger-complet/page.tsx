import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, MapPin, Camera, Utensils, Bed, Car, Clock, Star, Phone } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

interface TangierGuidePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: TangierGuidePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  
  const titles = {
    ar: 'دليل طنجة الشامل 2024: أفضل الأماكن والمطاعم والفنادق | ناصوح كار',
    en: 'Complete Tangier Guide 2024: Best Places, Restaurants & Hotels | Nassoh Car'
  }
  
  const descriptions = {
    ar: 'دليل شامل لمدينة طنجة: أفضل المعالم السياحية، المطاعم، الفنادق، وسائل النقل، ونصائح السفر. كل ما تحتاجه لزيارة طنجة.',
    en: 'Complete guide to Tangier: best attractions, restaurants, hotels, transportation, and travel tips. Everything you need for visiting Tangier.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'ar' 
      ? 'طنجة المغرب, السياحة في طنجة, معالم طنجة, مطاعم طنجة, فنادق طنجة'
      : 'Tangier Morocco, Tangier tourism, Tangier attractions, Tangier restaurants, Tangier hotels',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
      url: `https://www.nassohcar.com/${locale}/guides/guide-tanger-complet`,
      siteName: 'Nassoh Car',
      images: [
        {
          url: 'https://www.nassohcar.com/tangier.webp',
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'دليل طنجة الشامل' : 'Complete Tangier Guide'
        }
      ]
    },
    alternates: {
      canonical: `https://www.nassohcar.com/${locale}/guides/guide-tanger-complet`,
      languages: generateHreflangLinks('/guides/guide-tanger-complet')
    }
  }
}

const tangierData = {
  ar: {
    title: 'دليل طنجة الشامل 2024',
    subtitle: 'اكتشف جوهرة المغرب حيث يلتقي الأطلسي بالمتوسط',
    overview: {
      title: 'نظرة عامة على طنجة',
      description: 'طنجة، المدينة التي تقع عند ملتقى المحيط الأطلسي والبحر الأبيض المتوسط، هي بوابة المغرب إلى أوروبا. تتميز بتاريخها العريق، ثقافتها المتنوعة، ومناظرها الطبيعية الخلابة.',
      highlights: [
        'المدينة القديمة التاريخية (المدينة العتيقة)',
        'مضيق جبل طارق وإطلالات رائعة على إسبانيا',
        'الثقافة المتنوعة والتاريخ العريق',
        'الشواطئ الجميلة والمناخ المعتدل'
      ]
    },
    attractions: {
      title: 'أهم المعالم السياحية',
      places: [
        {
          name: 'المدينة القديمة (المدينة العتيقة)',
          description: 'قلب طنجة التاريخي بأزقتها الضيقة وأسواقها التقليدية',
          highlights: ['القصبة', 'الأسواق التقليدية', 'المساجد التاريخية'],
          duration: '3-4 ساعات',
          bestTime: 'الصباح الباكر أو بعد الظهر'
        },
        {
          name: 'كهوف هرقل',
          description: 'كهوف طبيعية مذهلة تطل على المحيط الأطلسي',
          highlights: ['الكهوف الطبيعية', 'إطلالات المحيط', 'الأساطير القديمة'],
          duration: '1-2 ساعة',
          bestTime: 'أي وقت من اليوم'
        },
        {
          name: 'رأس سبارطيل',
          description: 'أقصى نقطة شمال غرب أفريقيا حيث يلتقي المحيطان',
          highlights: ['منارة تاريخية', 'إطلالات خلابة', 'نقطة التقاء المحيطين'],
          duration: '1-2 ساعة',
          bestTime: 'وقت الغروب'
        },
        {
          name: 'القصبة',
          description: 'القلعة التاريخية مع متحف القصبة وحدائق جميلة',
          highlights: ['متحف القصبة', 'الحدائق الأندلسية', 'إطلالات المدينة'],
          duration: '2-3 ساعات',
          bestTime: 'الصباح'
        },
        {
          name: 'السوق الكبير (السوق الداخل)',
          description: 'السوق الرئيسي في المدينة القديمة',
          highlights: ['الحرف التقليدية', 'التوابل والعطور', 'السجاد المغربي'],
          duration: '1-2 ساعة',
          bestTime: 'الصباح'
        }
      ]
    },
    dining: {
      title: 'أفضل المطاعم والمقاهي',
      categories: [
        {
          category: 'المطاعم الفاخرة',
          restaurants: [
            {
              name: 'Le Saveur du Poisson',
              cuisine: 'مأكولات بحرية',
              location: 'المدينة الجديدة',
              priceRange: '200-400 درهم',
              specialty: 'السمك الطازج والمأكولات البحرية'
            },
            {
              name: 'El Morocco Club',
              cuisine: 'مغربية وعالمية',
              location: 'المدينة الجديدة',
              priceRange: '300-500 درهم',
              specialty: 'الطاجين والكسكس الفاخر'
            }
          ]
        },
        {
          category: 'المطاعم التقليدية',
          restaurants: [
            {
              name: 'مطعم الأندلس',
              cuisine: 'مغربية تقليدية',
              location: 'المدينة القديمة',
              priceRange: '80-150 درهم',
              specialty: 'الطاجين والحريرة'
            },
            {
              name: 'مقهى الحافة',
              cuisine: 'مقهى تقليدي',
              location: 'المدينة القديمة',
              priceRange: '20-50 درهم',
              specialty: 'الشاي المغربي والحلويات'
            }
          ]
        }
      ]
    },
    accommodation: {
      title: 'أفضل أماكن الإقامة',
      categories: [
        {
          category: 'فنادق فاخرة',
          hotels: [
            {
              name: 'فندق الكونتيننتال',
              location: 'المدينة القديمة',
              priceRange: '800-1500 درهم/ليلة',
              features: ['إطلالة على البحر', 'مطعم فاخر', 'سبا', 'موقف سيارات']
            },
            {
              name: 'فندق فيلا جوزفين',
              location: 'المدينة الجديدة',
              priceRange: '600-1200 درهم/ليلة',
              features: ['حديقة جميلة', 'مسبح', 'مطعم', 'واي فاي مجاني']
            }
          ]
        },
        {
          category: 'رياضات تقليدية',
          hotels: [
            {
              name: 'رياض طنجة',
              location: 'المدينة القديمة',
              priceRange: '300-600 درهم/ليلة',
              features: ['تصميم مغربي أصيل', 'فناء داخلي', 'إفطار تقليدي']
            },
            {
              name: 'دار نور',
              location: 'المدينة القديمة',
              priceRange: '250-500 درهم/ليلة',
              features: ['ديكور تقليدي', 'تراس مع إطلالة', 'خدمة شخصية']
            }
          ]
        }
      ]
    },
    transportation: {
      title: 'وسائل النقل والتنقل',
      options: [
        {
          type: 'تأجير السيارات',
          description: 'الخيار الأفضل لاستكشاف طنجة والمناطق المحيطة',
          pros: ['حرية التنقل', 'راحة أكبر', 'إمكانية زيارة المناطق النائية'],
          cons: ['تكلفة أعلى', 'حاجة لرخصة قيادة دولية'],
          cost: '200-500 درهم/يوم'
        },
        {
          type: 'سيارات الأجرة',
          description: 'متوفرة بكثرة في المدينة',
          pros: ['متوفرة دائماً', 'لا حاجة للقيادة', 'تكلفة معقولة للمسافات القصيرة'],
          cons: ['قد تكون مكلفة للمسافات الطويلة', 'ضرورة التفاوض على السعر'],
          cost: '10-50 درهم حسب المسافة'
        },
        {
          type: 'الحافلات المحلية',
          description: 'وسيلة نقل اقتصادية',
          pros: ['رخيصة جداً', 'تغطي معظم أنحاء المدينة'],
          cons: ['قد تكون مزدحمة', 'مواعيد غير منتظمة'],
          cost: '3-7 درهم'
        }
      ]
    },
    tips: {
      title: 'نصائح مهمة للزوار',
      categories: [
        {
          category: 'نصائح ثقافية',
          tips: [
            'احترم التقاليد المحلية والثقافة الإسلامية',
            'تعلم بعض العبارات الأساسية بالعربية أو الفرنسية',
            'كن مهذباً عند التصوير، خاصة للأشخاص',
            'اللباس المحتشم مطلوب، خاصة عند زيارة المساجد'
          ]
        },
        {
          category: 'نصائح عملية',
          tips: [
            'احمل نقوداً نقدية، فالعديد من الأماكن لا تقبل البطاقات',
            'تفاوض على الأسعار في الأسواق التقليدية',
            'احذر من النشالين في الأماكن المزدحمة',
            'اشرب الماء المعبأ أو المفلتر'
          ]
        },
        {
          category: 'أفضل الأوقات للزيارة',
          tips: [
            'الربيع (مارس-مايو) والخريف (سبتمبر-نوفمبر) هما أفضل الأوقات',
            'تجنب الصيف إذا كنت لا تحب الحرارة العالية',
            'الشتاء معتدل ولكن قد يكون ممطراً',
            'رمضان قد يؤثر على مواعيد المطاعم والمحلات'
          ]
        }
      ]
    }
  },
  en: {
    title: 'Complete Tangier Guide 2024',
    subtitle: 'Discover Morocco\'s gem where the Atlantic meets the Mediterranean',
    overview: {
      title: 'Tangier Overview',
      description: 'Tangier, the city located at the meeting point of the Atlantic Ocean and Mediterranean Sea, is Morocco\'s gateway to Europe. It features rich history, diverse culture, and stunning natural landscapes.',
      highlights: [
        'Historic Old City (Medina)',
        'Strait of Gibraltar with stunning views of Spain',
        'Diverse culture and rich history',
        'Beautiful beaches and mild climate'
      ]
    },
    attractions: {
      title: 'Top Tourist Attractions',
      places: [
        {
          name: 'Old City (Medina)',
          description: 'Tangier\'s historic heart with narrow alleys and traditional markets',
          highlights: ['The Kasbah', 'Traditional souks', 'Historic mosques'],
          duration: '3-4 hours',
          bestTime: 'Early morning or afternoon'
        },
        {
          name: 'Caves of Hercules',
          description: 'Stunning natural caves overlooking the Atlantic Ocean',
          highlights: ['Natural caves', 'Ocean views', 'Ancient legends'],
          duration: '1-2 hours',
          bestTime: 'Any time of day'
        },
        {
          name: 'Cap Spartel',
          description: 'The northwesternmost point of Africa where two oceans meet',
          highlights: ['Historic lighthouse', 'Stunning views', 'Meeting point of oceans'],
          duration: '1-2 hours',
          bestTime: 'Sunset time'
        },
        {
          name: 'The Kasbah',
          description: 'Historic fortress with Kasbah Museum and beautiful gardens',
          highlights: ['Kasbah Museum', 'Andalusian gardens', 'City views'],
          duration: '2-3 hours',
          bestTime: 'Morning'
        },
        {
          name: 'Grand Socco (Souk Dakhel)',
          description: 'Main market in the old city',
          highlights: ['Traditional crafts', 'Spices and perfumes', 'Moroccan carpets'],
          duration: '1-2 hours',
          bestTime: 'Morning'
        }
      ]
    },
    dining: {
      title: 'Best Restaurants and Cafes',
      categories: [
        {
          category: 'Fine Dining',
          restaurants: [
            {
              name: 'Le Saveur du Poisson',
              cuisine: 'Seafood',
              location: 'New City',
              priceRange: '200-400 MAD',
              specialty: 'Fresh fish and seafood'
            },
            {
              name: 'El Morocco Club',
              cuisine: 'Moroccan & International',
              location: 'New City',
              priceRange: '300-500 MAD',
              specialty: 'Gourmet tagine and couscous'
            }
          ]
        },
        {
          category: 'Traditional Restaurants',
          restaurants: [
            {
              name: 'Restaurant Al Andalus',
              cuisine: 'Traditional Moroccan',
              location: 'Old City',
              priceRange: '80-150 MAD',
              specialty: 'Tagine and harira'
            },
            {
              name: 'Cafe Hafa',
              cuisine: 'Traditional Cafe',
              location: 'Old City',
              priceRange: '20-50 MAD',
              specialty: 'Moroccan tea and pastries'
            }
          ]
        }
      ]
    },
    accommodation: {
      title: 'Best Accommodation Options',
      categories: [
        {
          category: 'Luxury Hotels',
          hotels: [
            {
              name: 'Hotel Continental',
              location: 'Old City',
              priceRange: '800-1500 MAD/night',
              features: ['Sea view', 'Fine dining restaurant', 'Spa', 'Parking']
            },
            {
              name: 'Villa Josephine Hotel',
              location: 'New City',
              priceRange: '600-1200 MAD/night',
              features: ['Beautiful garden', 'Swimming pool', 'Restaurant', 'Free WiFi']
            }
          ]
        },
        {
          category: 'Traditional Riads',
          hotels: [
            {
              name: 'Riad Tangier',
              location: 'Old City',
              priceRange: '300-600 MAD/night',
              features: ['Authentic Moroccan design', 'Interior courtyard', 'Traditional breakfast']
            },
            {
              name: 'Dar Nour',
              location: 'Old City',
              priceRange: '250-500 MAD/night',
              features: ['Traditional decor', 'Terrace with view', 'Personal service']
            }
          ]
        }
      ]
    },
    transportation: {
      title: 'Transportation and Getting Around',
      options: [
        {
          type: 'Car Rental',
          description: 'Best option for exploring Tangier and surrounding areas',
          pros: ['Freedom of movement', 'Greater comfort', 'Access to remote areas'],
          cons: ['Higher cost', 'Need international driving license'],
          cost: '200-500 MAD/day'
        },
        {
          type: 'Taxis',
          description: 'Widely available throughout the city',
          pros: ['Always available', 'No need to drive', 'Reasonable cost for short distances'],
          cons: ['Can be expensive for long distances', 'Need to negotiate price'],
          cost: '10-50 MAD depending on distance'
        },
        {
          type: 'Local Buses',
          description: 'Economical transportation option',
          pros: ['Very cheap', 'Cover most of the city'],
          cons: ['Can be crowded', 'Irregular schedules'],
          cost: '3-7 MAD'
        }
      ]
    },
    tips: {
      title: 'Important Tips for Visitors',
      categories: [
        {
          category: 'Cultural Tips',
          tips: [
            'Respect local traditions and Islamic culture',
            'Learn some basic phrases in Arabic or French',
            'Be polite when taking photos, especially of people',
            'Modest dress required, especially when visiting mosques'
          ]
        },
        {
          category: 'Practical Tips',
          tips: [
            'Carry cash, many places don\'t accept cards',
            'Negotiate prices in traditional markets',
            'Beware of pickpockets in crowded areas',
            'Drink bottled or filtered water'
          ]
        },
        {
          category: 'Best Times to Visit',
          tips: [
            'Spring (March-May) and autumn (September-November) are best',
            'Avoid summer if you don\'t like high temperatures',
            'Winter is mild but can be rainy',
            'Ramadan may affect restaurant and shop hours'
          ]
        }
      ]
    }
  }
}

export default async function TangierGuidePage({ params }: TangierGuidePageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  const content = tangierData[locale as keyof typeof tangierData] || tangierData.en
  const isRTL = locale === 'ar'

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.subtitle,
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
    "url": `https://www.nassohcar.com/${locale}/guides/guide-tanger-complet`,
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nassohcar.com/${locale}/guides/guide-tanger-complet`
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <StructuredData type="@graph" data={[structuredData]} />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb 
        items={[
          { label: locale === 'ar' ? 'الرئيسية' : 'Home', href: `/${locale}` },
          { label: locale === 'ar' ? 'الأدلة' : 'Guides', href: `/${locale}/guides` },
          { label: locale === 'ar' ? 'دليل طنجة' : 'Tangier Guide', href: `/${locale}/guides/guide-tanger-complet` }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              {content.title}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.overview.title}</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">{content.overview.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.overview.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-yellow-500 mr-3" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Camera className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900 ml-4">{content.attractions.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.attractions.places.map((place, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{place.name}</h3>
                <p className="text-gray-600 mb-4">{place.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {locale === 'ar' ? 'المميزات:' : 'Highlights:'}
                  </h4>
                  <ul className="space-y-1">
                    {place.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">{locale === 'ar' ? 'المدة:' : 'Duration:'}</span>
                    <span className="font-semibold ml-2">{place.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">{locale === 'ar' ? 'أفضل وقت:' : 'Best time:'}</span>
                    <span className="font-semibold ml-2">{place.bestTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dining Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Utensils className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-900 ml-4">{content.dining.title}</h2>
          </div>
          
          {content.dining.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.restaurants.map((restaurant, restaurantIndex) => (
                  <div key={restaurantIndex} className="bg-white rounded-xl shadow-lg p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{restaurant.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">{locale === 'ar' ? 'المطبخ:' : 'Cuisine:'}</span>
                        <span className="font-semibold ml-2">{restaurant.cuisine}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{locale === 'ar' ? 'الموقع:' : 'Location:'}</span>
                        <span className="font-semibold ml-2">{restaurant.location}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{locale === 'ar' ? 'السعر:' : 'Price:'}</span>
                        <span className="font-semibold ml-2">{restaurant.priceRange}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{locale === 'ar' ? 'التخصص:' : 'Specialty:'}</span>
                        <span className="font-semibold ml-2">{restaurant.specialty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Accommodation Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Bed className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900 ml-4">{content.accommodation.title}</h2>
          </div>
          
          {content.accommodation.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.hotels.map((hotel, hotelIndex) => (
                  <div key={hotelIndex} className="bg-white rounded-xl shadow-lg p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{hotel.name}</h4>
                    <div className="space-y-2 text-sm mb-4">
                      <div>
                        <span className="text-gray-500">{locale === 'ar' ? 'الموقع:' : 'Location:'}</span>
                        <span className="font-semibold ml-2">{hotel.location}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{locale === 'ar' ? 'السعر:' : 'Price:'}</span>
                        <span className="font-semibold ml-2">{hotel.priceRange}</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        {locale === 'ar' ? 'المميزات:' : 'Features:'}
                      </h5>
                      <ul className="space-y-1">
                        {hotel.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transportation Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Car className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 ml-4">{content.transportation.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.transportation.options.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.type}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600 mb-2">
                    {locale === 'ar' ? 'المميزات:' : 'Pros:'}
                  </h4>
                  <ul className="space-y-1">
                    {option.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-red-600 mb-2">
                    {locale === 'ar' ? 'العيوب:' : 'Cons:'}
                  </h4>
                  <ul className="space-y-1">
                    {option.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600 font-bold">{option.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Clock className="h-8 w-8 text-yellow-600" />
            <h2 className="text-3xl font-bold text-gray-900 ml-4">{content.tips.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.tips.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <ul className="space-y-4">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Phone className="h-8 w-8 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900 ml-4">
                {locale === 'ar' ? 'أرقام الطوارئ' : 'Emergency Contacts'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { service: locale === 'ar' ? 'الشرطة' : 'Police', number: '190' },
                { service: locale === 'ar' ? 'الإسعاف' : 'Ambulance', number: '150' },
                { service: locale === 'ar' ? 'الإطفاء' : 'Fire Department', number: '150' },
                { service: locale === 'ar' ? 'السياحة' : 'Tourist Police', number: '0539-94-66-61' }
              ].map((contact, index) => (
                <div key={index} className="text-center p-4 bg-red-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">{contact.service}</h3>
                  <div className="text-xl font-bold text-red-600">{contact.number}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'ar' ? 'استكشف طنجة بحرية تامة' : 'Explore Tangier with Complete Freedom'}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {locale === 'ar' 
              ? 'استأجر سيارة واكتشف جمال طنجة وضواحيها براحة وأمان'
              : 'Rent a car and discover the beauty of Tangier and its surroundings in comfort and safety'
            }
          </p>
          <Link 
            href={`/${locale}/fleet`}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {locale === 'ar' ? 'اطلع على أسطولنا' : 'View Our Fleet'}
            <ArrowLeft className={`h-5 w-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
          </Link>
        </div>
      </div>
    </div>
  )
}