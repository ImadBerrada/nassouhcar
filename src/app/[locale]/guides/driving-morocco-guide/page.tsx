import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Car, Shield, AlertTriangle, MapPin, Navigation, Fuel, Clock } from 'lucide-react'
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
    title: 'Driving in Morocco Guide 2024: Complete Road Trip Safety Guide',
    description: 'Complete guide to driving in Morocco: traffic rules, road conditions, safety tips, and essential advice for a safe road trip experience.',
    keywords: 'driving Morocco guide, Morocco road trip, Morocco traffic rules, driving safety Morocco, Morocco car rental driving',
    breadcrumbs: {
      home: 'Home',
      guides: 'Guides',
      current: 'Driving Guide'
    },
    content: {
      subtitle: 'Everything you need to know for safe and confident driving in Morocco, from traffic rules to road conditions.',
      sections: {
        rules: {
          title: 'Traffic Rules & Regulations',
          items: [
            {
              title: 'Speed Limits',
              description: 'Urban areas: 50 km/h, Rural roads: 90 km/h, Highways: 120 km/h',
              icon: 'Clock'
            },
            {
              title: 'Right-Hand Traffic',
              description: 'Morocco follows right-hand traffic rules, similar to Europe and North America',
              icon: 'Navigation'
            },
            {
              title: 'Seat Belts',
              description: 'Mandatory for all passengers. Children under 10 must sit in the back seat',
              icon: 'Shield'
            },
            {
              title: 'Mobile Phones',
              description: 'Hands-free devices only. Using handheld phones while driving is prohibited',
              icon: 'AlertTriangle'
            }
          ]
        },
        documents: {
          title: 'Required Documents',
          items: [
            'Valid international driving permit',
            'Passport or national ID',
            'Vehicle registration documents',
            'Valid insurance certificate',
            'Rental agreement (if applicable)'
          ]
        },
        roads: {
          title: 'Road Conditions',
          types: [
            {
              title: 'Highways (Autoroutes)',
              description: 'Well-maintained toll roads connecting major cities',
              condition: 'Excellent',
              tips: ['Toll payments required', 'Rest areas available', 'Good signage']
            },
            {
              title: 'National Roads',
              description: 'Main roads connecting cities and regions',
              condition: 'Good to Fair',
              tips: ['Variable conditions', 'Watch for potholes', 'Some sections under construction']
            },
            {
              title: 'Rural Roads',
              description: 'Secondary roads in countryside and mountains',
              condition: 'Fair to Poor',
              tips: ['Narrow roads', 'Livestock crossings', '4WD recommended for some areas']
            },
            {
              title: 'Mountain Roads',
              description: 'Winding roads through Atlas Mountains',
              condition: 'Challenging',
              tips: ['Steep gradients', 'Sharp curves', 'Weather dependent']
            }
          ]
        },
        safety: {
          title: 'Safety Tips',
          categories: [
            {
              title: 'Urban Driving',
              tips: [
                'Be alert for pedestrians and cyclists',
                'Watch for sudden lane changes',
                'Use parking meters in city centers',
                'Avoid driving during rush hours'
              ]
            },
            {
              title: 'Highway Driving',
              tips: [
                'Maintain safe following distance',
                'Use toll lanes efficiently',
                'Plan rest stops every 2 hours',
                'Keep emergency kit in vehicle'
              ]
            },
            {
              title: 'Rural Driving',
              tips: [
                'Reduce speed on unpaved roads',
                'Watch for animals crossing',
                'Carry extra water and supplies',
                'Inform others of your route'
              ]
            },
            {
              title: 'Night Driving',
              tips: [
                'Avoid if possible in rural areas',
                'Use high beams when appropriate',
                'Watch for unlit vehicles',
                'Plan accommodation in advance'
              ]
            }
          ]
        },
        fuel: {
          title: 'Fuel & Services',
          info: [
            {
              title: 'Fuel Types',
              description: 'Gasoline (Essence) and Diesel (Gasoil) widely available',
              icon: 'Fuel'
            },
            {
              title: 'Payment Methods',
              description: 'Cash preferred, some stations accept cards',
              icon: 'Car'
            },
            {
              title: 'Availability',
              description: 'Stations common on highways and in cities, less frequent in rural areas',
              icon: 'MapPin'
            }
          ]
        },
        emergency: {
          title: 'Emergency Information',
          contacts: [
            { service: 'Police', number: '19' },
            { service: 'Fire Department', number: '15' },
            { service: 'Medical Emergency', number: '15' },
            { service: 'Highway Assistance', number: '177' }
          ],
          tips: [
            'Keep emergency numbers saved in phone',
            'Carry first aid kit and warning triangle',
            'Know basic French or Arabic phrases',
            'Have travel insurance with vehicle coverage'
          ]
        }
      },
      cta: {
        title: 'Ready to Drive in Morocco?',
        description: 'Rent a reliable vehicle from our fleet for your Morocco road trip adventure.',
        button: 'View Our Fleet'
      }
    }
  },
  ar: {
    title: 'دليل القيادة في المغرب 2024: دليل السلامة الشامل للرحلات البرية',
    description: 'دليل شامل للقيادة في المغرب: قوانين المرور، أحوال الطرق، نصائح السلامة، ونصائح أساسية لتجربة رحلة برية آمنة.',
    keywords: 'دليل القيادة المغرب, رحلة برية المغرب, قوانين المرور المغرب, سلامة القيادة المغرب, قيادة تأجير السيارات المغرب',
    breadcrumbs: {
      home: 'الرئيسية',
      guides: 'الأدلة',
      current: 'دليل القيادة'
    },
    content: {
      subtitle: 'كل ما تحتاج لمعرفته للقيادة الآمنة والواثقة في المغرب، من قوانين المرور إلى أحوال الطرق.',
      sections: {
        rules: {
          title: 'قوانين وأنظمة المرور',
          items: [
            {
              title: 'حدود السرعة',
              description: 'المناطق الحضرية: 50 كم/ساعة، الطرق الريفية: 90 كم/ساعة، الطرق السريعة: 120 كم/ساعة',
              icon: 'Clock'
            },
            {
              title: 'المرور على اليمين',
              description: 'المغرب يتبع قوانين المرور على اليمين، مشابه لأوروبا وأمريكا الشمالية',
              icon: 'Navigation'
            },
            {
              title: 'أحزمة الأمان',
              description: 'إجبارية لجميع الركاب. الأطفال تحت 10 سنوات يجب أن يجلسوا في المقعد الخلفي',
              icon: 'Shield'
            },
            {
              title: 'الهواتف المحمولة',
              description: 'أجهزة حرة اليدين فقط. استخدام الهواتف المحمولة أثناء القيادة محظور',
              icon: 'AlertTriangle'
            }
          ]
        },
        documents: {
          title: 'الوثائق المطلوبة',
          items: [
            'رخصة قيادة دولية سارية',
            'جواز سفر أو هوية وطنية',
            'وثائق تسجيل المركبة',
            'شهادة تأمين سارية',
            'اتفاقية الإيجار (إن أمكن)'
          ]
        },
        roads: {
          title: 'أحوال الطرق',
          types: [
            {
              title: 'الطرق السريعة',
              description: 'طرق مرسومة جيداً تربط المدن الرئيسية',
              condition: 'ممتازة',
              tips: ['مدفوعات الرسوم مطلوبة', 'مناطق راحة متاحة', 'لافتات جيدة']
            },
            {
              title: 'الطرق الوطنية',
              description: 'الطرق الرئيسية التي تربط المدن والمناطق',
              condition: 'جيدة إلى متوسطة',
              tips: ['ظروف متغيرة', 'احذر من الحفر', 'بعض الأقسام قيد الإنشاء']
            },
            {
              title: 'الطرق الريفية',
              description: 'طرق ثانوية في الريف والجبال',
              condition: 'متوسطة إلى ضعيفة',
              tips: ['طرق ضيقة', 'عبور الماشية', 'دفع رباعي موصى به لبعض المناطق']
            },
            {
              title: 'طرق الجبال',
              description: 'طرق متعرجة عبر جبال الأطلس',
              condition: 'صعبة',
              tips: ['منحدرات شديدة', 'منحنيات حادة', 'تعتمد على الطقس']
            }
          ]
        },
        safety: {
          title: 'نصائح السلامة',
          categories: [
            {
              title: 'القيادة الحضرية',
              tips: [
                'كن متيقظاً للمشاة وراكبي الدراجات',
                'احذر من تغيير المسارات المفاجئ',
                'استخدم عدادات الوقوف في مراكز المدن',
                'تجنب القيادة أثناء ساعات الذروة'
              ]
            },
            {
              title: 'القيادة على الطرق السريعة',
              tips: [
                'حافظ على مسافة أمان آمنة',
                'استخدم مسارات الرسوم بكفاءة',
                'خطط لتوقفات راحة كل ساعتين',
                'احتفظ بمجموعة طوارئ في المركبة'
              ]
            },
            {
              title: 'القيادة الريفية',
              tips: [
                'قلل السرعة على الطرق غير المعبدة',
                'احذر من عبور الحيوانات',
                'احمل ماء ومؤن إضافية',
                'أعلم الآخرين بطريقك'
              ]
            },
            {
              title: 'القيادة الليلية',
              tips: [
                'تجنبها إن أمكن في المناطق الريفية',
                'استخدم الأضواء العالية عند الحاجة',
                'احذر من المركبات غير المضاءة',
                'خطط للإقامة مسبقاً'
              ]
            }
          ]
        },
        fuel: {
          title: 'الوقود والخدمات',
          info: [
            {
              title: 'أنواع الوقود',
              description: 'البنزين والديزل متاحان على نطاق واسع',
              icon: 'Fuel'
            },
            {
              title: 'طرق الدفع',
              description: 'النقد مفضل، بعض المحطات تقبل البطاقات',
              icon: 'Car'
            },
            {
              title: 'التوفر',
              description: 'محطات شائعة على الطرق السريعة وفي المدن، أقل تكراراً في المناطق الريفية',
              icon: 'MapPin'
            }
          ]
        },
        emergency: {
          title: 'معلومات الطوارئ',
          contacts: [
            { service: 'الشرطة', number: '19' },
            { service: 'الإطفاء', number: '15' },
            { service: 'الطوارئ الطبية', number: '15' },
            { service: 'مساعدة الطرق السريعة', number: '177' }
          ],
          tips: [
            'احتفظ بأرقام الطوارئ محفوظة في الهاتف',
            'احمل مجموعة إسعافات أولية ومثلث تحذير',
            'اعرف عبارات أساسية بالفرنسية أو العربية',
            'احصل على تأمين سفر يغطي المركبة'
          ]
        }
      },
      cta: {
        title: 'مستعد للقيادة في المغرب؟',
        description: 'استأجر مركبة موثوقة من أسطولنا لمغامرة رحلتك البرية في المغرب.',
        button: 'اعرض أسطولنا'
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
      url: `https://www.nassohcar.com/${locale}/guides/driving-morocco-guide`,
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
      canonical: `https://www.nassohcar.com/${locale}/guides/driving-morocco-guide`,
      languages: generateHreflangLinks('/guides/driving-morocco-guide')
    }
  }
}

export default async function DrivingMoroccoGuidePage({ params }: LocalePageProps) {
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
    "url": `https://www.nassohcar.com/${locale}/guides/driving-morocco-guide`,
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nassohcar.com/${locale}/guides/driving-morocco-guide`
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
          { label: content.breadcrumbs.current, href: `/${locale}/guides/driving-morocco-guide` }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">{content.title}</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.content.subtitle}
          </p>
        </div>

        {/* Traffic Rules */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.rules.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.content.sections.rules.items.map((rule, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {rule.icon === 'Clock' && <Clock className="h-6 w-6 text-blue-600 mr-3" />}
                  {rule.icon === 'Navigation' && <Navigation className="h-6 w-6 text-blue-600 mr-3" />}
                  {rule.icon === 'Shield' && <Shield className="h-6 w-6 text-green-600 mr-3" />}
                  {rule.icon === 'AlertTriangle' && <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />}
                  <h3 className="text-xl font-semibold text-gray-900">{rule.title}</h3>
                </div>
                <p className="text-gray-600">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.documents.title}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.content.sections.documents.items.map((document, index) => (
                <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{document}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Road Conditions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.roads.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.content.sections.roads.types.map((road, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{road.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    road.condition === 'Excellent' || road.condition === 'ممتازة' ? 'bg-green-100 text-green-800' :
                    road.condition === 'Good to Fair' || road.condition === 'جيدة إلى متوسطة' ? 'bg-yellow-100 text-yellow-800' :
                    road.condition === 'Fair to Poor' || road.condition === 'متوسطة إلى ضعيفة' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {road.condition}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{road.description}</p>
                <ul className="space-y-2">
                  {road.tips.map((tip, tipIndex) => (
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

        {/* Safety Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.safety.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.content.sections.safety.categories.map((category, index) => (
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

        {/* Fuel & Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.fuel.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.content.sections.fuel.info.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {info.icon === 'Fuel' && <Fuel className="h-8 w-8 text-blue-600" />}
                  {info.icon === 'Car' && <Car className="h-8 w-8 text-blue-600" />}
                  {info.icon === 'MapPin' && <MapPin className="h-8 w-8 text-blue-600" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.sections.emergency.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contacts</h3>
              <div className="space-y-3">
                {content.content.sections.emergency.contacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-medium text-gray-900">{contact.service}</span>
                    <span className="text-red-600 font-bold text-lg">{contact.number}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Tips</h3>
              <ul className="space-y-3">
                {content.content.sections.emergency.tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
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