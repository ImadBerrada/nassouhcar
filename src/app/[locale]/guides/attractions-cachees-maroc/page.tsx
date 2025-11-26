import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, MapPin, Camera, Star, Eye, Compass, Lightbulb } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

interface HiddenAttractionsPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HiddenAttractionsPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  
  const titles = {
    ar: 'المعالم السياحية المخفية في المغرب 2024: اكتشف الجواهر المخفية | ناصوح كار',
    en: 'Hidden Attractions in Morocco 2024: Discover Secret Gems | Nassoh Car'
  }
  
  const descriptions = {
    ar: 'اكتشف المعالم السياحية المخفية والجواهر السرية في المغرب: أماكن بعيدة عن الحشود، قرى تقليدية، مناظر طبيعية خلابة وتجارب أصيلة.',
    en: 'Discover hidden attractions and secret gems in Morocco: off-the-beaten-path places, traditional villages, stunning landscapes and authentic experiences.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'ar' 
      ? 'معالم مخفية المغرب, جواهر سرية المغرب, أماكن غير مكتشفة المغرب, قرى تقليدية المغرب'
      : 'hidden attractions Morocco, secret gems Morocco, off beaten path Morocco, traditional villages Morocco',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
      url: `https://www.nassohcar.com/${locale}/guides/attractions-cachees-maroc`,
      siteName: 'Nassoh Car',
      images: [
        {
          url: 'https://www.nassohcar.com/tangier.webp',
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'المعالم السياحية المخفية في المغرب' : 'Hidden Attractions in Morocco'
        }
      ]
    },
    alternates: {
      canonical: `https://www.nassohcar.com/${locale}/guides/attractions-cachees-maroc`,
      languages: generateHreflangLinks('/guides/attractions-cachees-maroc')
    }
  }
}

const attractionsData = {
  ar: {
    title: 'المعالم السياحية المخفية في المغرب 2024',
    subtitle: 'اكتشف الجواهر المخفية والأماكن السرية في المغرب بعيداً عن الحشود السياحية',
    regions: [
      {
        name: 'جبال الأطلس المخفية',
        description: 'قرى بربرية أصيلة ومناظر طبيعية خلابة',
        attractions: [
          {
            name: 'قرية إملشيل',
            description: 'قرية بربرية تقليدية مشهورة بمهرجان الخطوبة السنوي وبحيراتها الجميلة',
            difficulty: 'متوسط',
            bestTime: 'مايو - أكتوبر',
            highlights: ['مهرجان الخطوبة', 'بحيرة إسلي وتيسليت', 'ثقافة أمازيغية أصيلة'],
            tips: 'يُنصح بزيارة القرية خلال مهرجان الخطوبة في سبتمبر'
          },
          {
            name: 'وادي أيت بوكماز',
            description: 'وادي مخفي بمناظر طبيعية خلابة وقرى تقليدية محفوظة',
            difficulty: 'صعب',
            bestTime: 'أبريل - نوفمبر',
            highlights: ['مناظر جبلية مذهلة', 'قرى بربرية أصيلة', 'مسارات تريكنغ'],
            tips: 'يتطلب سيارة دفع رباعي ودليل محلي'
          },
          {
            name: 'بحيرة إفني',
            description: 'بحيرة جبلية مخفية على ارتفاع 2300 متر في جبال الأطلس الكبير',
            difficulty: 'صعب',
            bestTime: 'يونيو - سبتمبر',
            highlights: ['بحيرة جبلية نقية', 'مناظر بانورامية', 'تريكنغ جبلي'],
            tips: 'يتطلب مشي لمدة 3-4 ساعات من أقرب نقطة وصول'
          }
        ]
      },
      {
        name: 'الصحراء السرية',
        description: 'أماكن صحراوية بعيدة عن الطرق السياحية المعتادة',
        attractions: [
          {
            name: 'عرق الشبي',
            description: 'كثبان رملية مذهلة أقل ازدحاماً من مرزوقة مع تجربة صحراوية أصيلة',
            difficulty: 'متوسط',
            bestTime: 'أكتوبر - أبريل',
            highlights: ['كثبان رملية عذراء', 'سماء مرصعة بالنجوم', 'هدوء مطلق'],
            tips: 'أفضل للمسافرين الباحثين عن تجربة صحراوية هادئة'
          },
          {
            name: 'واحة فيجيج',
            description: 'واحة حدودية تاريخية مع نخيل كثيف وثقافة صحراوية أصيلة',
            difficulty: 'سهل',
            bestTime: 'نوفمبر - مارس',
            highlights: ['واحة نخيل كثيفة', 'تاريخ تجاري عريق', 'ثقافة صحراوية'],
            tips: 'نقطة انطلاق ممتازة لاستكشاف الصحراء الشرقية'
          },
          {
            name: 'جبل صاغرو',
            description: 'سلسلة جبلية بركانية مع مناظر طبيعية فريدة وقرى نومادية',
            difficulty: 'متوسط إلى صعب',
            bestTime: 'أكتوبر - أبريل',
            highlights: ['تكوينات صخرية فريدة', 'ثقافة نومادية', 'مناظر بانورامية'],
            tips: 'مثالي للتريكنغ والتصوير الفوتوغرافي'
          }
        ]
      },
      {
        name: 'الساحل المخفي',
        description: 'شواطئ وقرى ساحلية بعيدة عن الحشود السياحية',
        attractions: [
          {
            name: 'سيدي إفني',
            description: 'مدينة ساحلية بتأثيرات معمارية إسبانية وشواطئ هادئة',
            difficulty: 'سهل',
            bestTime: 'على مدار السنة',
            highlights: ['عمارة آرت ديكو', 'شواطئ هادئة', 'تاريخ استعماري فريد'],
            tips: 'مثالية لمحبي التاريخ والهدوء'
          },
          {
            name: 'ميرلفت',
            description: 'قرية ساحلية صغيرة مع شواطئ رملية ذهبية وأجواء هادئة',
            difficulty: 'سهل',
            bestTime: 'أبريل - أكتوبر',
            highlights: ['شواطئ رملية ذهبية', 'قرية صيد تقليدية', 'أجواء هادئة'],
            tips: 'مثالية للاسترخاء والهروب من الحشود'
          },
          {
            name: 'إمسوان',
            description: 'شاطئ مخفي بين الصخور مع مياه فيروزية صافية',
            difficulty: 'متوسط',
            bestTime: 'مايو - سبتمبر',
            highlights: ['مياه فيروزية صافية', 'تكوينات صخرية طبيعية', 'خصوصية تامة'],
            tips: 'يتطلب مشي قصير عبر الصخور للوصول إليه'
          }
        ]
      },
      {
        name: 'القرى الجبلية المنسية',
        description: 'قرى تقليدية محفوظة في أعماق الجبال',
        attractions: [
          {
            name: 'أكا إيغان',
            description: 'قرية بربرية معلقة على منحدر جبلي مع بيوت حجرية تقليدية',
            difficulty: 'صعب',
            bestTime: 'أبريل - أكتوبر',
            highlights: ['عمارة بربرية أصيلة', 'مناظر جبلية خلابة', 'ثقافة محفوظة'],
            tips: 'يتطلب سيارة دفع رباعي ودليل محلي'
          },
          {
            name: 'تيزي نتيشكا',
            description: 'ممر جبلي مرتفع مع قرى صغيرة وإطلالات بانورامية مذهلة',
            difficulty: 'متوسط',
            bestTime: 'مايو - أكتوبر',
            highlights: ['ممر جبلي مرتفع', 'قرى تقليدية', 'إطلالات بانورامية'],
            tips: 'طريق متعرج يتطلب قيادة حذرة'
          },
          {
            name: 'تافراوت',
            description: 'قرية في وادي اللوز مشهورة بصخورها الوردية وثقافتها الأمازيغية',
            difficulty: 'سهل إلى متوسط',
            bestTime: 'فبراير - أبريل (موسم اللوز)',
            highlights: ['صخور وردية فريدة', 'أشجار اللوز المزهرة', 'فن الصخور'],
            tips: 'أفضل وقت للزيارة خلال موسم إزهار اللوز'
          }
        ]
      }
    ],
    practicalTips: {
      title: 'نصائح عملية',
      tips: [
        {
          category: 'التحضير',
          advice: [
            'احجز سيارة دفع رباعي للوصول للأماكن النائية',
            'احمل خرائط مفصلة أو GPS موثوق',
            'أحضر مؤن كافية من الماء والطعام',
            'أخبر شخصاً عن خط سير رحلتك'
          ]
        },
        {
          category: 'السلامة',
          advice: [
            'سافر مع دليل محلي في المناطق النائية',
            'تحقق من أحوال الطقس قبل السفر',
            'احمل معدات الإسعافات الأولية',
            'احترم البيئة المحلية والثقافات'
          ]
        },
        {
          category: 'أفضل الأوقات',
          advice: [
            'تجنب الصيف في المناطق الصحراوية',
            'الربيع والخريف مثاليان للجبال',
            'الشتاء جيد للساحل والصحراء',
            'تحقق من المهرجانات المحلية'
          ]
        }
      ]
    }
  },
  en: {
    title: 'Hidden Attractions in Morocco 2024',
    subtitle: 'Discover hidden gems and secret places in Morocco away from tourist crowds',
    regions: [
      {
        name: 'Hidden Atlas Mountains',
        description: 'Authentic Berber villages and stunning natural landscapes',
        attractions: [
          {
            name: 'Imilchil Village',
            description: 'Traditional Berber village famous for its annual engagement festival and beautiful lakes',
            difficulty: 'Moderate',
            bestTime: 'May - October',
            highlights: ['Engagement Festival', 'Isli and Tislit Lakes', 'Authentic Amazigh Culture'],
            tips: 'Best visited during the engagement festival in September'
          },
          {
            name: 'Ait Bouguemez Valley',
            description: 'Hidden valley with stunning landscapes and preserved traditional villages',
            difficulty: 'Difficult',
            bestTime: 'April - November',
            highlights: ['Amazing mountain views', 'Authentic Berber villages', 'Trekking trails'],
            tips: 'Requires 4WD vehicle and local guide'
          },
          {
            name: 'Lake Ifni',
            description: 'Hidden mountain lake at 2300m altitude in the High Atlas Mountains',
            difficulty: 'Difficult',
            bestTime: 'June - September',
            highlights: ['Pure mountain lake', 'Panoramic views', 'Mountain trekking'],
            tips: 'Requires 3-4 hours hike from nearest access point'
          }
        ]
      },
      {
        name: 'Secret Desert',
        description: 'Desert places away from usual tourist routes',
        attractions: [
          {
            name: 'Erg Chebbi',
            description: 'Stunning sand dunes less crowded than Merzouga with authentic desert experience',
            difficulty: 'Moderate',
            bestTime: 'October - April',
            highlights: ['Virgin sand dunes', 'Starry skies', 'Complete tranquility'],
            tips: 'Best for travelers seeking quiet desert experience'
          },
          {
            name: 'Figuig Oasis',
            description: 'Historic border oasis with dense palm groves and authentic desert culture',
            difficulty: 'Easy',
            bestTime: 'November - March',
            highlights: ['Dense palm oasis', 'Rich trading history', 'Desert culture'],
            tips: 'Excellent starting point for eastern desert exploration'
          },
          {
            name: 'Jebel Saghro',
            description: 'Volcanic mountain range with unique landscapes and nomadic villages',
            difficulty: 'Moderate to Difficult',
            bestTime: 'October - April',
            highlights: ['Unique rock formations', 'Nomadic culture', 'Panoramic views'],
            tips: 'Perfect for trekking and photography'
          }
        ]
      },
      {
        name: 'Hidden Coast',
        description: 'Beaches and coastal villages away from tourist crowds',
        attractions: [
          {
            name: 'Sidi Ifni',
            description: 'Coastal town with Spanish architectural influences and quiet beaches',
            difficulty: 'Easy',
            bestTime: 'Year-round',
            highlights: ['Art Deco architecture', 'Quiet beaches', 'Unique colonial history'],
            tips: 'Perfect for history lovers and tranquility seekers'
          },
          {
            name: 'Mirleft',
            description: 'Small coastal village with golden sandy beaches and peaceful atmosphere',
            difficulty: 'Easy',
            bestTime: 'April - October',
            highlights: ['Golden sandy beaches', 'Traditional fishing village', 'Peaceful atmosphere'],
            tips: 'Perfect for relaxation and escaping crowds'
          },
          {
            name: 'Imsouane',
            description: 'Hidden beach between rocks with crystal clear turquoise waters',
            difficulty: 'Moderate',
            bestTime: 'May - September',
            highlights: ['Crystal clear turquoise waters', 'Natural rock formations', 'Complete privacy'],
            tips: 'Requires short walk through rocks to reach it'
          }
        ]
      },
      {
        name: 'Forgotten Mountain Villages',
        description: 'Traditional villages preserved in the depths of mountains',
        attractions: [
          {
            name: 'Ait Ighane',
            description: 'Berber village hanging on mountain slope with traditional stone houses',
            difficulty: 'Difficult',
            bestTime: 'April - October',
            highlights: ['Authentic Berber architecture', 'Stunning mountain views', 'Preserved culture'],
            tips: 'Requires 4WD vehicle and local guide'
          },
          {
            name: 'Tizi n\'Tichka',
            description: 'High mountain pass with small villages and amazing panoramic views',
            difficulty: 'Moderate',
            bestTime: 'May - October',
            highlights: ['High mountain pass', 'Traditional villages', 'Panoramic views'],
            tips: 'Winding road requires careful driving'
          },
          {
            name: 'Tafraoute',
            description: 'Village in almond valley famous for its pink rocks and Amazigh culture',
            difficulty: 'Easy to Moderate',
            bestTime: 'February - April (almond season)',
            highlights: ['Unique pink rocks', 'Blooming almond trees', 'Rock art'],
            tips: 'Best time to visit during almond blossom season'
          }
        ]
      }
    ],
    practicalTips: {
      title: 'Practical Tips',
      tips: [
        {
          category: 'Preparation',
          advice: [
            'Book a 4WD vehicle to reach remote places',
            'Carry detailed maps or reliable GPS',
            'Bring sufficient water and food supplies',
            'Inform someone about your travel itinerary'
          ]
        },
        {
          category: 'Safety',
          advice: [
            'Travel with local guide in remote areas',
            'Check weather conditions before traveling',
            'Carry first aid equipment',
            'Respect local environment and cultures'
          ]
        },
        {
          category: 'Best Times',
          advice: [
            'Avoid summer in desert regions',
            'Spring and autumn are ideal for mountains',
            'Winter is good for coast and desert',
            'Check local festivals'
          ]
        }
      ]
    }
  }
}

export default async function HiddenAttractionsPage({ params }: HiddenAttractionsPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  const content = attractionsData[locale as keyof typeof attractionsData] || attractionsData.en
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
    "url": `https://www.nassohcar.com/${locale}/guides/attractions-cachees-maroc`,
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nassohcar.com/${locale}/guides/attractions-cachees-maroc`
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
          { label: locale === 'ar' ? 'معالم مخفية' : 'Hidden Attractions', href: `/${locale}/guides/attractions-cachees-maroc` }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Eye className="h-8 w-8 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              {content.title}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Regions */}
        {content.regions.map((region, regionIndex) => (
          <div key={regionIndex} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{region.name}</h2>
              <p className="text-lg text-gray-600">{region.description}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {region.attractions.map((attraction, attractionIndex) => (
                <div key={attractionIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{attraction.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        attraction.difficulty === (locale === 'ar' ? 'سهل' : 'Easy') ? 'bg-green-100 text-green-800' :
                        attraction.difficulty === (locale === 'ar' ? 'متوسط' : 'Moderate') ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {attraction.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{attraction.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {locale === 'ar' ? 'أفضل وقت:' : 'Best Time:'} {attraction.bestTime}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {locale === 'ar' ? 'المعالم البارزة:' : 'Highlights:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {attraction.highlights.map((highlight, highlightIndex) => (
                          <span key={highlightIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-start">
                        <Lightbulb className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{attraction.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Practical Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.practicalTips.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.practicalTips.tips.map((tipCategory, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {index === 0 && <Compass className="h-6 w-6 text-blue-600 mr-3" />}
                  {index === 1 && <Star className="h-6 w-6 text-green-600 mr-3" />}
                  {index === 2 && <Camera className="h-6 w-6 text-purple-600 mr-3" />}
                  <h3 className="text-xl font-bold text-gray-900">{tipCategory.category}</h3>
                </div>
                <ul className="space-y-3">
                  {tipCategory.advice.map((advice, adviceIndex) => (
                    <li key={adviceIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {advice}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {locale === 'ar' ? 'خريطة المعالم المخفية' : 'Hidden Attractions Map'}
              </h2>
              <p className="text-gray-600">
                {locale === 'ar' 
                  ? 'استخدم هذه الخريطة لتخطيط رحلتك إلى المعالم المخفية في المغرب'
                  : 'Use this map to plan your journey to Morocco\'s hidden attractions'
                }
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">
                {locale === 'ar' 
                  ? 'خريطة تفاعلية قريباً - تواصل معنا للحصول على إحداثيات دقيقة'
                  : 'Interactive map coming soon - Contact us for precise coordinates'
                }
              </p>
              <div className="text-2xl font-bold text-blue-600">
                {locale === 'ar' ? 'قريباً' : 'Coming Soon'}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'ar' ? 'اكتشف الجواهر المخفية في المغرب' : 'Discover Morocco\'s Hidden Gems'}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {locale === 'ar' 
              ? 'استأجر سيارة دفع رباعي واستكشف الأماكن السرية في المغرب'
              : 'Rent a 4WD vehicle and explore Morocco\'s secret places'
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