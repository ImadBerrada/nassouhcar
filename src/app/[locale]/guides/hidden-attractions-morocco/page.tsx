import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Mountain, Clock, Star, Eye, Shield } from 'lucide-react'
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
    title: 'Hidden Attractions of Morocco 2024: Secret Treasures to Discover',
    description: 'Discover Morocco\'s secret treasures: authentic Berber villages, lost oases, wild beaches and preserved natural sites away from tourist crowds.',
    keywords: 'hidden Morocco attractions, secret places Morocco, off beaten path Morocco, authentic Morocco travel, hidden gems Morocco',
    breadcrumbs: {
      home: 'Home',
      guides: 'Guides',
      current: 'Hidden Attractions'
    },
    content: {
      subtitle: 'Discover the authentic Morocco, away from mass tourism, where traditions and local culture remain intact.',
      whyExplore: {
        title: 'Why Explore Hidden Attractions?',
        authenticity: {
          title: 'Preserved Authenticity',
          description: 'Discover authentic Morocco, away from mass tourism, where traditions and local culture remain intact.'
        },
        unique: {
          title: 'Unique Experiences',
          description: 'Live exceptional moments in preserved landscapes and create unforgettable memories.'
        }
      },
      regions: {
        title: 'Hidden Treasures to Discover',
        north: {
          title: 'Northern Morocco',
          subtitle: 'Green mountains and preserved coasts',
          attractions: ['Akchour', 'Rif Villages', 'Wild Beaches']
        },
        atlas: {
          title: 'Central Atlas',
          subtitle: 'Snow-capped peaks and secret valleys',
          attractions: ['Berber Villages', 'Mountain Lakes', 'Waterfalls']
        },
        atlantic: {
          title: 'South Atlantic',
          subtitle: 'Wild and authentic coast',
          attractions: ['Arch Beaches', 'Fishing Villages', 'Cliffs']
        },
        presahara: {
          title: 'Pre-Sahara',
          subtitle: 'Desert gates and lunar landscapes',
          attractions: ['Hidden Oases', 'Isolated Kasbahs', 'Canyons']
        }
      },
      tips: {
        title: 'Exploration Tips',
        preparation: {
          title: 'Trip Preparation',
          items: [
            'Rent a 4x4 to access remote sites',
            'Download offline maps',
            'Bring water and provisions',
            'Check weather conditions'
          ]
        },
        environment: {
          title: 'Environmental Respect',
          items: [
            'Leave no trace of your passage',
            'Respect local fauna and flora',
            'Use marked trails',
            'Avoid picking plants'
          ]
        },
        local: {
          title: 'Local Interaction',
          items: [
            'Learn a few words of Arabic or Berber',
            'Respect customs and traditions',
            'Ask permission before photographing',
            'Support local economy'
          ]
        },
        safety: {
          title: 'Safety',
          items: [
            'Travel in groups in isolated areas',
            'Inform someone of your itinerary',
            'Keep your phone charged',
            'Carry a first aid kit'
          ]
        }
      },
      equipment: {
        title: 'Recommended Equipment',
        transport: {
          title: 'Transport',
          items: ['4x4 or SUV vehicle', 'GPS and offline maps', 'Spare tire', 'Basic tools']
        },
        gear: {
          title: 'Equipment',
          items: ['Hiking shoes', 'Appropriate clothing', 'Hat and sunglasses', 'Sunscreen']
        },
        provisions: {
          title: 'Provisions',
          items: ['Plenty of water', 'Energy snacks', 'First aid kit', 'Flashlight']
        }
      },
      cta: {
        title: 'Start Your Adventure!',
        description: 'Rent a robust 4x4 to explore Morocco\'s hidden treasures safely.',
        button: 'Rent a 4x4'
      }
    }
  },
  ar: {
    title: 'المعالم المخفية في المغرب 2024: كنوز سرية للاكتشاف',
    description: 'اكتشف كنوز المغرب السرية: قرى أمازيغية أصيلة، واحات مفقودة، شواطئ برية ومواقع طبيعية محفوظة بعيداً عن الحشود السياحية.',
    keywords: 'معالم المغرب المخفية, أماكن سرية المغرب, طرق غير مطروقة المغرب, سفر أصيل المغرب, جواهر مخفية المغرب',
    breadcrumbs: {
      home: 'الرئيسية',
      guides: 'الأدلة',
      current: 'المعالم المخفية'
    },
    content: {
      subtitle: 'اكتشف المغرب الأصيل، بعيداً عن السياحة الجماعية، حيث تبقى التقاليد والثقافة المحلية سليمة.',
      whyExplore: {
        title: 'لماذا استكشاف المعالم المخفية؟',
        authenticity: {
          title: 'أصالة محفوظة',
          description: 'اكتشف المغرب الأصيل، بعيداً عن السياحة الجماعية، حيث تبقى التقاليد والثقافة المحلية سليمة.'
        },
        unique: {
          title: 'تجارب فريدة',
          description: 'عش لحظات استثنائية في مناظر طبيعية محفوظة واخلق ذكريات لا تُنسى.'
        }
      },
      regions: {
        title: 'كنوز مخفية للاكتشاف',
        north: {
          title: 'شمال المغرب',
          subtitle: 'جبال خضراء وسواحل محفوظة',
          attractions: ['أقشور', 'قرى الريف', 'شواطئ برية']
        },
        atlas: {
          title: 'الأطلس الأوسط',
          subtitle: 'قمم مثلجة ووديان سرية',
          attractions: ['قرى أمازيغية', 'بحيرات جبلية', 'شلالات']
        },
        atlantic: {
          title: 'الأطلسي الجنوبي',
          subtitle: 'ساحل بري وأصيل',
          attractions: ['شواطئ الأقواس', 'قرى الصيادين', 'منحدرات']
        },
        presahara: {
          title: 'ما قبل الصحراء',
          subtitle: 'بوابات الصحراء ومناظر قمرية',
          attractions: ['واحات مخفية', 'قصبات معزولة', 'أخاديد']
        }
      },
      tips: {
        title: 'نصائح الاستكشاف',
        preparation: {
          title: 'تحضير الرحلة',
          items: [
            'استأجر سيارة دفع رباعي للوصول للمواقع النائية',
            'حمّل خرائط غير متصلة',
            'أحضر الماء والمؤن',
            'تحقق من الأحوال الجوية'
          ]
        },
        environment: {
          title: 'احترام البيئة',
          items: [
            'لا تترك أي أثر لمرورك',
            'احترم الحيوانات والنباتات المحلية',
            'استخدم المسارات المحددة',
            'تجنب قطف النباتات'
          ]
        },
        local: {
          title: 'التفاعل المحلي',
          items: [
            'تعلم بعض الكلمات العربية أو الأمازيغية',
            'احترم العادات والتقاليد',
            'اطلب الإذن قبل التصوير',
            'ادعم الاقتصاد المحلي'
          ]
        },
        safety: {
          title: 'السلامة',
          items: [
            'سافر في مجموعات في المناطق المعزولة',
            'أعلم شخصاً بخط سيرك',
            'حافظ على شحن هاتفك',
            'احمل حقيبة إسعافات أولية'
          ]
        }
      },
      equipment: {
        title: 'المعدات الموصى بها',
        transport: {
          title: 'النقل',
          items: ['مركبة دفع رباعي أو SUV', 'GPS وخرائط غير متصلة', 'إطار احتياطي', 'أدوات أساسية']
        },
        gear: {
          title: 'المعدات',
          items: ['أحذية المشي', 'ملابس مناسبة', 'قبعة ونظارات شمسية', 'كريم واقي من الشمس']
        },
        provisions: {
          title: 'المؤن',
          items: ['ماء بكثرة', 'وجبات خفيفة للطاقة', 'حقيبة إسعافات أولية', 'مصباح يدوي']
        }
      },
      cta: {
        title: 'ابدأ مغامرتك!',
        description: 'استأجر سيارة دفع رباعي قوية لاستكشاف كنوز المغرب المخفية بأمان.',
        button: 'استأجر سيارة دفع رباعي'
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
      url: `https://www.nassohcar.com/${locale}/guides/hidden-attractions-morocco`,
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
      canonical: `https://www.nassohcar.com/${locale}/guides/hidden-attractions-morocco`,
      languages: generateHreflangLinks('/guides/hidden-attractions-morocco')
    }
  }
}

export default async function HiddenAttractionsPage({ params }: LocalePageProps) {
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
    "url": `https://www.nassohcar.com/${locale}/guides/hidden-attractions-morocco`,
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nassohcar.com/${locale}/guides/hidden-attractions-morocco`
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
          { label: content.breadcrumbs.current, href: `/${locale}/guides/hidden-attractions-morocco` }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Mountain className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">{content.title}</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.content.subtitle}
          </p>
        </div>

        {/* Why Explore Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.whyExplore.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {content.content.whyExplore.authenticity.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {content.content.whyExplore.authenticity.description}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {content.content.whyExplore.unique.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {content.content.whyExplore.unique.description}
              </p>
            </div>
          </div>
        </div>

        {/* Regions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.regions.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(content.content.regions)
              .filter(([key, value]) => key !== 'title' && typeof value === 'object')
              .map(([key, region]) => {
                const regionData = region as { title: string; subtitle: string; attractions: string[] };
                return (
                  <div key={key} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">{regionData.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{regionData.subtitle}</p>
                    <ul className="space-y-1">
                      {regionData.attractions.map((attraction: string, index: number) => (
                        <li key={index} className="text-sm text-gray-700 flex items-center">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                          {attraction}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.tips.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(content.content.tips)
              .filter(([key, value]) => key !== 'title' && typeof value === 'object')
              .map(([key, tip]) => {
                const tipData = tip as { title: string; items: string[] };
                return (
                  <div key={key} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      {key === 'preparation' && <Clock className="h-5 w-5 text-blue-600 mr-2" />}
                      {key === 'environment' && <Shield className="h-5 w-5 text-green-600 mr-2" />}
                      {key === 'local' && <Star className="h-5 w-5 text-purple-600 mr-2" />}
                      {key === 'safety' && <Shield className="h-5 w-5 text-red-600 mr-2" />}
                      <h3 className="font-semibold text-gray-900">{tipData.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {tipData.items.map((item: string, index: number) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Equipment Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.equipment.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(content.content.equipment)
              .filter(([key, value]) => key !== 'title' && typeof value === 'object')
              .map(([key, equipment]) => {
                const equipmentData = equipment as { title: string; items: string[] };
                return (
                  <div key={key} className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">{equipmentData.title}</h3>
                    <ul className="space-y-2">
                      {equipmentData.items.map((item: string, index: number) => (
                        <li key={index} className="text-sm text-gray-700 flex items-center">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{content.content.cta.title}</h2>
          <p className="text-xl mb-6 opacity-90">
            {content.content.cta.description}
          </p>
          <Link 
            href={`/${locale}/fleet`}
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