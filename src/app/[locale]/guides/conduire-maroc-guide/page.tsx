import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Car, AlertTriangle, MapPin, Shield, Fuel, Navigation, Phone } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

interface DrivingGuidePageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: DrivingGuidePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  
  const titles = {
    ar: 'دليل القيادة في المغرب 2024: نصائح وقوانين المرور | ناصوح كار',
    en: 'Driving in Morocco Guide 2024: Traffic Rules and Tips | Nassoh Car'
  }
  
  const descriptions = {
    ar: 'دليل شامل للقيادة في المغرب: قوانين المرور، نصائح السلامة، أفضل الطرق، ومتطلبات الرخصة. كل ما تحتاجه للقيادة الآمنة.',
    en: 'Complete guide to driving in Morocco: traffic laws, safety tips, best routes, and license requirements. Everything you need for safe driving.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'ar' 
      ? 'القيادة في المغرب, قوانين المرور المغرب, رخصة القيادة المغرب, نصائح القيادة المغرب'
      : 'driving Morocco, Morocco traffic laws, Morocco driving license, Morocco driving tips',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
      url: `https://www.nassohcar.com/${locale}/guides/conduire-maroc-guide`,
      siteName: 'Nassoh Car',
      images: [
        {
          url: 'https://www.nassohcar.com/tangier.webp',
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'دليل القيادة في المغرب' : 'Driving in Morocco Guide'
        }
      ]
    },
    alternates: {
      canonical: `https://www.nassohcar.com/${locale}/guides/conduire-maroc-guide`,
      languages: generateHreflangLinks('/guides/conduire-maroc-guide')
    }
  }
}

const drivingData = {
  ar: {
    title: 'دليل القيادة في المغرب 2024',
    subtitle: 'دليل شامل للقيادة الآمنة في المغرب مع قوانين المرور ونصائح عملية',
    sections: [
      {
        title: 'متطلبات الرخصة والوثائق',
        icon: 'Shield',
        content: [
          {
            subtitle: 'الرخصة المطلوبة',
            items: [
              'رخصة قيادة دولية (IDP) مع رخصة بلدك الأصلية',
              'صالحة لمدة سنة واحدة من تاريخ الإصدار',
              'يجب الحصول عليها قبل السفر من بلدك',
              'رخصة القيادة المحلية وحدها غير كافية'
            ]
          },
          {
            subtitle: 'الوثائق المطلوبة',
            items: [
              'جواز السفر أو بطاقة الهوية',
              'رخصة القيادة الدولية والمحلية',
              'وثائق تأمين السيارة',
              'وثائق تسجيل السيارة (للسيارات المستأجرة)'
            ]
          }
        ]
      },
      {
        title: 'قوانين المرور الأساسية',
        icon: 'AlertTriangle',
        content: [
          {
            subtitle: 'قواعد القيادة',
            items: [
              'القيادة على الجانب الأيمن من الطريق',
              'حزام الأمان إجباري لجميع الركاب',
              'منع استخدام الهاتف أثناء القيادة',
              'إعطاء الأولوية للمركبات القادمة من اليمين'
            ]
          },
          {
            subtitle: 'حدود السرعة',
            items: [
              'داخل المدن: 60 كم/ساعة',
              'الطرق الرئيسية: 100 كم/ساعة',
              'الطرق السريعة: 120 كم/ساعة',
              'المناطق السكنية: 40 كم/ساعة'
            ]
          }
        ]
      },
      {
        title: 'نصائح السلامة',
        icon: 'Shield',
        content: [
          {
            subtitle: 'القيادة الدفاعية',
            items: [
              'كن حذراً من المشاة والدراجات',
              'انتبه للحيوانات على الطرق الريفية',
              'تجنب القيادة ليلاً في المناطق النائية',
              'احتفظ بمسافة أمان كافية'
            ]
          },
          {
            subtitle: 'الطقس والطرق',
            items: [
              'تحقق من أحوال الطقس قبل السفر',
              'كن حذراً من الأمطار والضباب',
              'بعض الطرق الجبلية قد تكون خطيرة',
              'استخدم سيارة دفع رباعي للمناطق الوعرة'
            ]
          }
        ]
      },
      {
        title: 'أنواع الطرق',
        icon: 'Navigation',
        content: [
          {
            subtitle: 'الطرق السريعة',
            items: [
              'طرق حديثة ومجهزة جيداً',
              'رسوم مرور في معظم الأقسام',
              'محطات خدمة منتظمة',
              'الربط بين المدن الرئيسية'
            ]
          },
          {
            subtitle: 'الطرق الوطنية',
            items: [
              'طرق جيدة بشكل عام',
              'مجانية في معظم الأحيان',
              'قد تمر عبر المدن والقرى',
              'مناظر طبيعية جميلة'
            ]
          },
          {
            subtitle: 'الطرق الريفية',
            items: [
              'حالة متغيرة حسب المنطقة',
              'قد تتطلب سيارة دفع رباعي',
              'انتبه للحيوانات والمشاة',
              'خذ احتياطات إضافية'
            ]
          }
        ]
      },
      {
        title: 'الوقود ومحطات الخدمة',
        icon: 'Fuel',
        content: [
          {
            subtitle: 'أنواع الوقود',
            items: [
              'بنزين عادي (95 أوكتان)',
              'بنزين ممتاز (98 أوكتان)',
              'ديزل متوفر على نطاق واسع',
              'أسعار مدعومة من الحكومة'
            ]
          },
          {
            subtitle: 'محطات الخدمة',
            items: [
              'متوفرة في المدن الرئيسية',
              'أقل كثافة في المناطق الريفية',
              'معظمها يقبل النقد فقط',
              'بعضها يعمل 24 ساعة'
            ]
          }
        ]
      },
      {
        title: 'نصائح عملية',
        icon: 'Car',
        content: [
          {
            subtitle: 'التخطيط للرحلة',
            items: [
              'خطط طريقك مسبقاً',
              'احمل خرائط مطبوعة كاحتياط',
              'تحقق من حالة السيارة قبل السفر',
              'أخبر شخصاً عن خط سير رحلتك'
            ]
          },
          {
            subtitle: 'في حالة الطوارئ',
            items: [
              'رقم الطوارئ: 190 (الشرطة)',
              'رقم الإسعاف: 150',
              'احمل معدات الإسعافات الأولية',
              'احتفظ بأرقام شركة التأجير'
            ]
          }
        ]
      }
    ],
    roadTypes: {
      title: 'خريطة الطرق الرئيسية',
      routes: [
        {
          name: 'الطريق السريع A1',
          description: 'الدار البيضاء - الرباط',
          distance: '90 كم',
          duration: '1 ساعة',
          toll: 'نعم'
        },
        {
          name: 'الطريق السريع A7',
          description: 'الدار البيضاء - مراكش',
          distance: '240 كم',
          duration: '2.5 ساعة',
          toll: 'نعم'
        },
        {
          name: 'الطريق الوطني N1',
          description: 'طنجة - الرباط',
          distance: '250 كم',
          duration: '3 ساعات',
          toll: 'لا'
        },
        {
          name: 'الطريق الوطني N9',
          description: 'مراكش - ورزازات',
          distance: '200 كم',
          duration: '3.5 ساعة',
          toll: 'لا'
        }
      ]
    },
    emergencyContacts: {
      title: 'أرقام الطوارئ',
      contacts: [
        { service: 'الشرطة', number: '190' },
        { service: 'الإسعاف', number: '150' },
        { service: 'الإطفاء', number: '150' },
        { service: 'الدرك الملكي', number: '177' }
      ]
    }
  },
  en: {
    title: 'Driving in Morocco Guide 2024',
    subtitle: 'Complete guide to safe driving in Morocco with traffic laws and practical tips',
    sections: [
      {
        title: 'License and Document Requirements',
        icon: 'Shield',
        content: [
          {
            subtitle: 'Required License',
            items: [
              'International Driving Permit (IDP) with your home country license',
              'Valid for one year from issue date',
              'Must be obtained before travel from your home country',
              'Local driving license alone is not sufficient'
            ]
          },
          {
            subtitle: 'Required Documents',
            items: [
              'Passport or national ID card',
              'International and local driving licenses',
              'Car insurance documents',
              'Vehicle registration documents (for rental cars)'
            ]
          }
        ]
      },
      {
        title: 'Basic Traffic Laws',
        icon: 'AlertTriangle',
        content: [
          {
            subtitle: 'Driving Rules',
            items: [
              'Drive on the right side of the road',
              'Seat belts mandatory for all passengers',
              'Mobile phone use while driving prohibited',
              'Give priority to vehicles coming from the right'
            ]
          },
          {
            subtitle: 'Speed Limits',
            items: [
              'Urban areas: 60 km/h',
              'Main roads: 100 km/h',
              'Highways: 120 km/h',
              'Residential areas: 40 km/h'
            ]
          }
        ]
      },
      {
        title: 'Safety Tips',
        icon: 'Shield',
        content: [
          {
            subtitle: 'Defensive Driving',
            items: [
              'Be cautious of pedestrians and bicycles',
              'Watch for animals on rural roads',
              'Avoid night driving in remote areas',
              'Maintain adequate safety distance'
            ]
          },
          {
            subtitle: 'Weather and Roads',
            items: [
              'Check weather conditions before traveling',
              'Be careful of rain and fog',
              'Some mountain roads can be dangerous',
              'Use 4WD vehicle for rough terrain'
            ]
          }
        ]
      },
      {
        title: 'Road Types',
        icon: 'Navigation',
        content: [
          {
            subtitle: 'Highways',
            items: [
              'Modern and well-equipped roads',
              'Tolls on most sections',
              'Regular service stations',
              'Connect major cities'
            ]
          },
          {
            subtitle: 'National Roads',
            items: [
              'Generally good roads',
              'Free in most cases',
              'May pass through towns and villages',
              'Beautiful natural scenery'
            ]
          },
          {
            subtitle: 'Rural Roads',
            items: [
              'Variable condition by region',
              'May require 4WD vehicle',
              'Watch for animals and pedestrians',
              'Take extra precautions'
            ]
          }
        ]
      },
      {
        title: 'Fuel and Service Stations',
        icon: 'Fuel',
        content: [
          {
            subtitle: 'Fuel Types',
            items: [
              'Regular gasoline (95 octane)',
              'Premium gasoline (98 octane)',
              'Diesel widely available',
              'Government subsidized prices'
            ]
          },
          {
            subtitle: 'Service Stations',
            items: [
              'Available in major cities',
              'Less dense in rural areas',
              'Most accept cash only',
              'Some operate 24 hours'
            ]
          }
        ]
      },
      {
        title: 'Practical Tips',
        icon: 'Car',
        content: [
          {
            subtitle: 'Trip Planning',
            items: [
              'Plan your route in advance',
              'Carry printed maps as backup',
              'Check vehicle condition before travel',
              'Inform someone about your itinerary'
            ]
          },
          {
            subtitle: 'In Case of Emergency',
            items: [
              'Emergency number: 190 (Police)',
              'Ambulance number: 150',
              'Carry first aid equipment',
              'Keep rental company numbers'
            ]
          }
        ]
      }
    ],
    roadTypes: {
      title: 'Main Road Network Map',
      routes: [
        {
          name: 'Highway A1',
          description: 'Casablanca - Rabat',
          distance: '90 km',
          duration: '1 hour',
          toll: 'Yes'
        },
        {
          name: 'Highway A7',
          description: 'Casablanca - Marrakech',
          distance: '240 km',
          duration: '2.5 hours',
          toll: 'Yes'
        },
        {
          name: 'National Road N1',
          description: 'Tangier - Rabat',
          distance: '250 km',
          duration: '3 hours',
          toll: 'No'
        },
        {
          name: 'National Road N9',
          description: 'Marrakech - Ouarzazate',
          distance: '200 km',
          duration: '3.5 hours',
          toll: 'No'
        }
      ]
    },
    emergencyContacts: {
      title: 'Emergency Numbers',
      contacts: [
        { service: 'Police', number: '190' },
        { service: 'Ambulance', number: '150' },
        { service: 'Fire Department', number: '150' },
        { service: 'Royal Gendarmerie', number: '177' }
      ]
    }
  }
}

export default async function DrivingGuidePage({ params }: DrivingGuidePageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  const content = drivingData[locale as keyof typeof drivingData] || drivingData.en
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
    "url": `https://www.nassohcar.com/${locale}/guides/conduire-maroc-guide`,
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nassohcar.com/${locale}/guides/conduire-maroc-guide`
    }
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="h-8 w-8 text-blue-600" />
      case 'AlertTriangle': return <AlertTriangle className="h-8 w-8 text-red-600" />
      case 'Navigation': return <Navigation className="h-8 w-8 text-green-600" />
      case 'Fuel': return <Fuel className="h-8 w-8 text-orange-600" />
      case 'Car': return <Car className="h-8 w-8 text-purple-600" />
      default: return <Car className="h-8 w-8 text-gray-600" />
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
          { label: locale === 'ar' ? 'دليل القيادة' : 'Driving Guide', href: `/${locale}/guides/conduire-maroc-guide` }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              {content.title}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Main Sections */}
        {content.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <div className="flex items-center mb-8">
              {getIcon(section.icon)}
              <h2 className="text-3xl font-bold text-gray-900 ml-4">{section.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {section.content.map((subsection, subsectionIndex) => (
                <div key={subsectionIndex} className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{subsection.subtitle}</h3>
                  <ul className="space-y-4">
                    {subsection.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Road Network */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <MapPin className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900 ml-4">{content.roadTypes.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.roadTypes.routes.map((route, routeIndex) => (
              <div key={routeIndex} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{route.name}</h3>
                <p className="text-gray-600 mb-4">{route.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">{locale === 'ar' ? 'المسافة:' : 'Distance:'}</span>
                    <span className="font-semibold ml-2">{route.distance}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">{locale === 'ar' ? 'المدة:' : 'Duration:'}</span>
                    <span className="font-semibold ml-2">{route.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">{locale === 'ar' ? 'رسوم:' : 'Toll:'}</span>
                    <span className={`font-semibold ml-2 ${route.toll === (locale === 'ar' ? 'نعم' : 'Yes') ? 'text-red-600' : 'text-green-600'}`}>
                      {route.toll}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Phone className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900 ml-4">{content.emergencyContacts.title}</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.emergencyContacts.contacts.map((contact, contactIndex) => (
                <div key={contactIndex} className="text-center p-4 bg-red-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">{contact.service}</h3>
                  <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Checklist */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {locale === 'ar' ? 'قائمة فحص السلامة' : 'Safety Checklist'}
              </h2>
              <p className="text-gray-600">
                {locale === 'ar' 
                  ? 'تأكد من هذه النقاط قبل بدء رحلتك'
                  : 'Make sure to check these points before starting your journey'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                locale === 'ar' ? 'فحص الإطارات والضغط' : 'Check tires and pressure',
                locale === 'ar' ? 'مستوى الوقود والزيت' : 'Fuel and oil levels',
                locale === 'ar' ? 'أضواء السيارة' : 'Vehicle lights',
                locale === 'ar' ? 'الفرامل والتوجيه' : 'Brakes and steering',
                locale === 'ar' ? 'معدات الطوارئ' : 'Emergency equipment',
                locale === 'ar' ? 'الوثائق المطلوبة' : 'Required documents'
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'ar' ? 'ابدأ رحلتك بأمان في المغرب' : 'Start Your Safe Journey in Morocco'}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {locale === 'ar' 
              ? 'استأجر سيارة موثوقة واستكشف المغرب بثقة وأمان'
              : 'Rent a reliable car and explore Morocco with confidence and safety'
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