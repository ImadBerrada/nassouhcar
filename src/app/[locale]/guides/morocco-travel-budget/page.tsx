import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, DollarSign, Car, Home, Utensils, MapPin, Calculator, TrendingUp, PiggyBank } from 'lucide-react'
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
    title: 'Morocco Travel Budget 2024: Complete Guide to Plan Your Trip',
    description: 'Complete guide to plan your Morocco travel budget: accommodation costs, transport, meals, activities and practical tips to optimize your expenses.',
    keywords: 'Morocco travel budget, Morocco trip cost, Morocco travel expenses, budget travel Morocco, Morocco vacation cost',
    breadcrumbs: {
      home: 'Home',
      guides: 'Guides',
      current: 'Travel Budget'
    },
    content: {
      subtitle: 'Plan your Morocco trip with our detailed budget guide and practical tips to optimize your travel expenses.',
      overview: {
        title: 'Budget Overview',
        description: 'Morocco offers excellent value for money with options for all budgets, from backpacking to luxury travel.',
        budgetTypes: {
          budget: {
            title: 'Budget Travel',
            amount: '$30-50/day',
            description: 'Hostels, local transport, street food'
          },
          mid: {
            title: 'Mid-Range',
            amount: '$50-100/day',
            description: 'Hotels, private transport, restaurants'
          },
          luxury: {
            title: 'Luxury',
            amount: '$100+/day',
            description: 'Riads, private tours, fine dining'
          }
        }
      },
      categories: {
        title: 'Expense Categories',
        accommodation: {
          title: 'Accommodation',
          icon: 'Home',
          budget: {
            title: 'Budget Options',
            items: [
              'Hostels: $10-20/night',
              'Guesthouses: $15-30/night',
              'Budget hotels: $20-40/night'
            ]
          },
          mid: {
            title: 'Mid-Range',
            items: [
              'Hotels: $40-80/night',
              'Riads: $60-120/night',
              'Boutique hotels: $80-150/night'
            ]
          },
          luxury: {
            title: 'Luxury',
            items: [
              'Luxury riads: $150-300/night',
              '5-star hotels: $200-500/night',
              'Desert camps: $100-400/night'
            ]
          }
        },
        transport: {
          title: 'Transportation',
          icon: 'Car',
          budget: {
            title: 'Budget Options',
            items: [
              'Local buses: $2-5/trip',
              'Shared taxis: $5-15/trip',
              'Train (2nd class): $10-25/trip'
            ]
          },
          mid: {
            title: 'Mid-Range',
            items: [
              'Car rental: $25-40/day',
              'Private taxi: $30-60/day',
              'Train (1st class): $15-35/trip'
            ]
          },
          luxury: {
            title: 'Luxury',
            items: [
              'Luxury car rental: $60-120/day',
              'Private driver: $80-150/day',
              'Domestic flights: $100-200/trip'
            ]
          }
        },
        food: {
          title: 'Food & Dining',
          icon: 'Utensils',
          budget: {
            title: 'Budget Options',
            items: [
              'Street food: $2-5/meal',
              'Local cafes: $3-8/meal',
              'Markets: $1-3/snack'
            ]
          },
          mid: {
            title: 'Mid-Range',
            items: [
              'Restaurant meals: $8-15/meal',
              'Hotel dining: $12-25/meal',
              'Cafe meals: $5-12/meal'
            ]
          },
          luxury: {
            title: 'Luxury',
            items: [
              'Fine dining: $25-50/meal',
              'Hotel restaurants: $30-60/meal',
              'Wine/alcohol: $20-40/bottle'
            ]
          }
        },
        activities: {
          title: 'Activities & Tours',
          icon: 'MapPin',
          budget: {
            title: 'Budget Options',
            items: [
              'Museum entries: $2-5',
              'Self-guided tours: Free-$10',
              'Local guides: $10-20/day'
            ]
          },
          mid: {
            title: 'Mid-Range',
            items: [
              'Group tours: $30-60/day',
              'Desert trips: $50-100/day',
              'Cooking classes: $25-50'
            ]
          },
          luxury: {
            title: 'Luxury',
            items: [
              'Private tours: $100-200/day',
              'Luxury desert camps: $200-400/night',
              'Spa treatments: $50-150'
            ]
          }
        }
      },
      tips: {
        title: 'Money-Saving Tips',
        items: [
          {
            title: 'Negotiate Prices',
            description: 'Bargaining is expected in markets and for services'
          },
          {
            title: 'Eat Local',
            description: 'Street food and local restaurants offer great value'
          },
          {
            title: 'Use Public Transport',
            description: 'Buses and trains are affordable and reliable'
          },
          {
            title: 'Stay in Riads',
            description: 'Traditional accommodations often include breakfast'
          },
          {
            title: 'Travel Off-Season',
            description: 'Avoid peak tourist seasons for better prices'
          },
          {
            title: 'Book in Advance',
            description: 'Early bookings can save 20-30% on accommodation'
          }
        ]
      },
      calculator: {
        title: 'Budget Calculator',
        description: 'Estimate your daily expenses based on your travel style',
        factors: [
          'Number of travelers',
          'Trip duration',
          'Accommodation type',
          'Transport preferences',
          'Dining style',
          'Activity level'
        ]
      },
      cta: {
        title: 'Start Planning Your Trip!',
        description: 'Rent a car to explore Morocco at your own pace and discover hidden gems.',
        button: 'View Our Fleet'
      }
    }
  },
  ar: {
    title: 'ميزانية السفر إلى المغرب 2024: دليل شامل لتخطيط رحلتك',
    description: 'دليل شامل لتخطيط ميزانية السفر إلى المغرب: تكاليف الإقامة، النقل، الوجبات، الأنشطة ونصائح عملية لتحسين نفقاتك.',
    keywords: 'ميزانية السفر المغرب, تكلفة رحلة المغرب, مصاريف السفر المغرب, سفر اقتصادي المغرب, تكلفة عطلة المغرب',
    breadcrumbs: {
      home: 'الرئيسية',
      guides: 'الأدلة',
      current: 'ميزانية السفر'
    },
    content: {
      subtitle: 'خطط لرحلتك إلى المغرب مع دليل الميزانية المفصل ونصائح عملية لتحسين نفقات سفرك.',
      overview: {
        title: 'نظرة عامة على الميزانية',
        description: 'يقدم المغرب قيمة ممتازة مقابل المال مع خيارات لجميع الميزانيات، من السفر الاقتصادي إلى السفر الفاخر.',
        budgetTypes: {
          budget: {
            title: 'السفر الاقتصادي',
            amount: '30-50 دولار/يوم',
            description: 'نزل، نقل محلي، طعام الشارع'
          },
          mid: {
            title: 'متوسط المدى',
            amount: '50-100 دولار/يوم',
            description: 'فنادق، نقل خاص، مطاعم'
          },
          luxury: {
            title: 'فاخر',
            amount: '100+ دولار/يوم',
            description: 'رياض، جولات خاصة، مطاعم راقية'
          }
        }
      },
      categories: {
        title: 'فئات المصروفات',
        accommodation: {
          title: 'الإقامة',
          icon: 'Home',
          budget: {
            title: 'خيارات اقتصادية',
            items: [
              'نزل: 10-20 دولار/ليلة',
              'بيوت ضيافة: 15-30 دولار/ليلة',
              'فنادق اقتصادية: 20-40 دولار/ليلة'
            ]
          },
          mid: {
            title: 'متوسط المدى',
            items: [
              'فنادق: 40-80 دولار/ليلة',
              'رياض: 60-120 دولار/ليلة',
              'فنادق بوتيك: 80-150 دولار/ليلة'
            ]
          },
          luxury: {
            title: 'فاخر',
            items: [
              'رياض فاخرة: 150-300 دولار/ليلة',
              'فنادق 5 نجوم: 200-500 دولار/ليلة',
              'مخيمات صحراوية: 100-400 دولار/ليلة'
            ]
          }
        },
        transport: {
          title: 'النقل',
          icon: 'Car',
          budget: {
            title: 'خيارات اقتصادية',
            items: [
              'حافلات محلية: 2-5 دولار/رحلة',
              'تاكسي مشترك: 5-15 دولار/رحلة',
              'قطار (درجة ثانية): 10-25 دولار/رحلة'
            ]
          },
          mid: {
            title: 'متوسط المدى',
            items: [
              'تأجير سيارة: 25-40 دولار/يوم',
              'تاكسي خاص: 30-60 دولار/يوم',
              'قطار (درجة أولى): 15-35 دولار/رحلة'
            ]
          },
          luxury: {
            title: 'فاخر',
            items: [
              'تأجير سيارة فاخرة: 60-120 دولار/يوم',
              'سائق خاص: 80-150 دولار/يوم',
              'رحلات داخلية: 100-200 دولار/رحلة'
            ]
          }
        },
        food: {
          title: 'الطعام والمطاعم',
          icon: 'Utensils',
          budget: {
            title: 'خيارات اقتصادية',
            items: [
              'طعام الشارع: 2-5 دولار/وجبة',
              'مقاهي محلية: 3-8 دولار/وجبة',
              'أسواق: 1-3 دولار/وجبة خفيفة'
            ]
          },
          mid: {
            title: 'متوسط المدى',
            items: [
              'وجبات مطاعم: 8-15 دولار/وجبة',
              'مطاعم فنادق: 12-25 دولار/وجبة',
              'وجبات مقاهي: 5-12 دولار/وجبة'
            ]
          },
          luxury: {
            title: 'فاخر',
            items: [
              'مطاعم راقية: 25-50 دولار/وجبة',
              'مطاعم فنادق: 30-60 دولار/وجبة',
              'نبيذ/كحول: 20-40 دولار/زجاجة'
            ]
          }
        },
        activities: {
          title: 'الأنشطة والجولات',
          icon: 'MapPin',
          budget: {
            title: 'خيارات اقتصادية',
            items: [
              'دخول المتاحف: 2-5 دولار',
              'جولات ذاتية: مجاني-10 دولار',
              'مرشدين محليين: 10-20 دولار/يوم'
            ]
          },
          mid: {
            title: 'متوسط المدى',
            items: [
              'جولات جماعية: 30-60 دولار/يوم',
              'رحلات صحراوية: 50-100 دولار/يوم',
              'دروس طبخ: 25-50 دولار'
            ]
          },
          luxury: {
            title: 'فاخر',
            items: [
              'جولات خاصة: 100-200 دولار/يوم',
              'مخيمات صحراوية فاخرة: 200-400 دولار/ليلة',
              'علاجات سبا: 50-150 دولار'
            ]
          }
        }
      },
      tips: {
        title: 'نصائح توفير المال',
        items: [
          {
            title: 'تفاوض على الأسعار',
            description: 'المساومة متوقعة في الأسواق وللخدمات'
          },
          {
            title: 'تناول الطعام المحلي',
            description: 'طعام الشارع والمطاعم المحلية تقدم قيمة رائعة'
          },
          {
            title: 'استخدم النقل العام',
            description: 'الحافلات والقطارات ميسورة التكلفة وموثوقة'
          },
          {
            title: 'أقم في الرياض',
            description: 'الإقامة التقليدية غالباً ما تشمل الإفطار'
          },
          {
            title: 'سافر خارج الموسم',
            description: 'تجنب مواسم الذروة السياحية للحصول على أسعار أفضل'
          },
          {
            title: 'احجز مسبقاً',
            description: 'الحجوزات المبكرة يمكن أن توفر 20-30% على الإقامة'
          }
        ]
      },
      calculator: {
        title: 'حاسبة الميزانية',
        description: 'قدر نفقاتك اليومية بناءً على أسلوب سفرك',
        factors: [
          'عدد المسافرين',
          'مدة الرحلة',
          'نوع الإقامة',
          'تفضيلات النقل',
          'أسلوب الطعام',
          'مستوى النشاط'
        ]
      },
      cta: {
        title: 'ابدأ تخطيط رحلتك!',
        description: 'استأجر سيارة لاستكشاف المغرب بوتيرتك الخاصة واكتشاف الجواهر المخفية.',
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
      url: `https://www.nassohcar.com/${locale}/guides/morocco-travel-budget`,
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
      canonical: `https://www.nassohcar.com/${locale}/guides/morocco-travel-budget`,
      languages: generateHreflangLinks('/guides/morocco-travel-budget')
    }
  }
}

export default async function MoroccoTravelBudgetPage({ params }: LocalePageProps) {
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
    "url": `https://www.nassohcar.com/${locale}/guides/morocco-travel-budget`,
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nassohcar.com/${locale}/guides/morocco-travel-budget`
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
          { label: content.breadcrumbs.current, href: `/${locale}/guides/morocco-travel-budget` }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">{content.title}</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.content.subtitle}
          </p>
        </div>

        {/* Budget Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.overview.title}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            {content.content.overview.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(content.content.overview.budgetTypes).map(([key, budget]) => (
              <div key={key} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <PiggyBank className={`h-8 w-8 ${key === 'budget' ? 'text-green-600' : key === 'mid' ? 'text-blue-600' : 'text-purple-600'} mr-3`} />
                  <h3 className="text-xl font-semibold text-gray-900">{budget.title}</h3>
                </div>
                <div className={`text-3xl font-bold mb-2 ${key === 'budget' ? 'text-green-600' : key === 'mid' ? 'text-blue-600' : 'text-purple-600'}`}>
                  {budget.amount}
                </div>
                <p className="text-gray-600">{budget.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expense Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.categories.title}
          </h2>
          <div className="space-y-12">
            {Object.entries(content.content.categories)
              .filter(([key, value]) => key !== 'title' && typeof value === 'object')
              .map(([key, category]) => {
                const categoryData = category as { title: string; icon: string; budget: { title: string; items: string[] }; mid: { title: string; items: string[] }; luxury: { title: string; items: string[] } };
                return (
                  <div key={key} className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      {key === 'accommodation' && <Home className="h-6 w-6 text-blue-600 mr-3" />}
                      {key === 'transport' && <Car className="h-6 w-6 text-blue-600 mr-3" />}
                      {key === 'food' && <Utensils className="h-6 w-6 text-blue-600 mr-3" />}
                      {key === 'activities' && <MapPin className="h-6 w-6 text-blue-600 mr-3" />}
                      <h3 className="text-2xl font-bold text-gray-900">{categoryData.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.entries(categoryData)
                        .filter(([subKey, value]) => subKey !== 'title' && subKey !== 'icon' && typeof value === 'object')
                        .map(([subKey, subcategory]) => {
                          const subcategoryData = subcategory as { title: string; items: string[] };
                          return (
                            <div key={subKey} className="border rounded-lg p-4">
                              <h4 className={`font-semibold mb-3 ${subKey === 'budget' ? 'text-green-600' : subKey === 'mid' ? 'text-blue-600' : 'text-purple-600'}`}>
                                {subcategoryData.title}
                              </h4>
                              <ul className="space-y-2">
                                {subcategoryData.items.map((item: string, index: number) => (
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
                );
              })}
          </div>
        </div>

        {/* Money-Saving Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.content.tips.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.content.tips.items.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Calculator */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold">{content.content.calculator.title}</h2>
            </div>
            <p className="text-xl text-center mb-6 opacity-90">
              {content.content.calculator.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {content.content.calculator.factors.map((factor, index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                  <span className="text-sm">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{content.content.cta.title}</h2>
          <p className="text-xl mb-6 opacity-90">
            {content.content.cta.description}
          </p>
          <Link 
            href={`/${locale}/fleet`}
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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