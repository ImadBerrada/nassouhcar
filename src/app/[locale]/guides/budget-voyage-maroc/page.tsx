import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calculator, DollarSign, TrendingDown, Lightbulb } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import StructuredData from '@/components/StructuredData'
import { generateHreflangLinks } from '@/lib/hreflang-utils'

interface BudgetPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: BudgetPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  
  const titles = {
    ar: 'دليل ميزانية السفر إلى المغرب 2024: نصائح توفير المال | ناصوح كار',
    en: 'Morocco Travel Budget Guide 2024: Money-Saving Tips | Nassoh Car'
  }
  
  const descriptions = {
    ar: 'دليل شامل لميزانية السفر إلى المغرب: تكاليف الإقامة، الطعام، النقل، والأنشطة. نصائح لتوفير المال وتخطيط رحلة اقتصادية.',
    en: 'Complete guide to Morocco travel budget: accommodation, food, transport, and activity costs. Money-saving tips for an economical trip.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'ar' 
      ? 'ميزانية السفر المغرب, تكلفة السفر المغرب, نصائح توفير المال المغرب, سفر اقتصادي المغرب'
      : 'Morocco travel budget, Morocco travel costs, money saving tips Morocco, budget travel Morocco',
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'article',
      url: `https://www.nassohcar.com/${locale}/guides/budget-voyage-maroc`,
      siteName: 'Nassoh Car',
      images: [
        {
          url: 'https://www.nassohcar.com/tangier.webp',
          width: 1200,
          height: 630,
          alt: locale === 'ar' ? 'دليل ميزانية السفر إلى المغرب' : 'Morocco Travel Budget Guide'
        }
      ]
    },
    alternates: {
      canonical: `https://www.nassohcar.com/${locale}/guides/budget-voyage-maroc`,
      languages: generateHreflangLinks('/guides/budget-voyage-maroc')
    }
  }
}

const budgetData = {
  ar: {
    title: 'دليل ميزانية السفر إلى المغرب 2024',
    subtitle: 'دليل شامل لتخطيط رحلة اقتصادية إلى المغرب مع نصائح توفير المال والتكاليف المتوقعة',
    budgetOverview: {
      title: 'نظرة عامة على الميزانية',
      categories: [
        {
          type: 'ميزانية محدودة',
          dailyBudget: '30-50 دولار',
          description: 'نزل، طعام محلي، نقل عام',
          color: 'green'
        },
        {
          type: 'ميزانية متوسطة',
          dailyBudget: '50-100 دولار',
          description: 'فنادق متوسطة، مطاعم جيدة، تاكسي',
          color: 'blue'
        },
        {
          type: 'ميزانية مرتفعة',
          dailyBudget: '100-200 دولار',
          description: 'فنادق فاخرة، مطاعم راقية، سيارة خاصة',
          color: 'purple'
        }
      ]
    },
    expenseCategories: {
      title: 'فئات المصروفات',
      categories: [
        {
          name: 'الإقامة',
          icon: 'MapPin',
          budget: '15-80 دولار/ليلة',
          medium: '30-60 دولار/ليلة',
          luxury: '80-200 دولار/ليلة',
          tips: [
            'النزل: 10-25 دولار/ليلة',
            'الرياض التقليدي: 40-100 دولار/ليلة',
            'الفنادق الفاخرة: 150+ دولار/ليلة',
            'الحجز المسبق يوفر 20-30%'
          ]
        },
        {
          name: 'الطعام',
          icon: 'DollarSign',
          budget: '10-20 دولار/يوم',
          medium: '20-40 دولار/يوم',
          luxury: '40-80 دولار/يوم',
          tips: [
            'طعام الشارع: 2-5 دولار/وجبة',
            'المطاعم المحلية: 8-15 دولار/وجبة',
            'المطاعم السياحية: 20-40 دولار/وجبة',
            'تجربة الطاجين والكسكس محلياً'
          ]
        },
        {
          name: 'النقل',
          icon: 'MapPin',
          budget: '10-25 دولار/يوم',
          medium: '25-50 دولار/يوم',
          luxury: '50-100 دولار/يوم',
          tips: [
            'الحافلات المحلية: 1-3 دولار',
            'القطارات: 10-30 دولار',
            'التاكسي: 5-20 دولار/رحلة',
            'تأجير السيارات: 25-60 دولار/يوم'
          ]
        },
        {
          name: 'الأنشطة',
          icon: 'MapPin',
          budget: '5-15 دولار/يوم',
          medium: '15-30 دولار/يوم',
          luxury: '30-80 دولار/يوم',
          tips: [
            'دخول المتاحف: 2-5 دولار',
            'الجولات المحلية: 20-50 دولار',
            'رحلة الصحراء: 100-300 دولار',
            'الأنشطة المجانية: المدن القديمة والأسواق'
          ]
        }
      ]
    },
    moneySavingTips: {
      title: 'نصائح توفير المال',
      tips: [
        {
          category: 'الإقامة',
          suggestions: [
            'احجز في النزل أو الرياض المحلي',
            'تجنب المناطق السياحية الرئيسية',
            'احجز مسبقاً للحصول على خصومات',
            'فكر في الإقامة خارج وسط المدينة'
          ]
        },
        {
          category: 'الطعام',
          suggestions: [
            'تناول الطعام حيث يأكل المحليون',
            'جرب طعام الشارع الآمن',
            'تسوق من الأسواق المحلية',
            'تجنب المطاعم في المناطق السياحية'
          ]
        },
        {
          category: 'النقل',
          suggestions: [
            'استخدم وسائل النقل العام',
            'تفاوض على أسعار التاكسي',
            'امش في المدن القديمة',
            'شارك تكلفة التاكسي مع مسافرين آخرين'
          ]
        },
        {
          category: 'التسوق',
          suggestions: [
            'تفاوض في الأسواق',
            'قارن الأسعار في عدة محلات',
            'تجنب المحلات السياحية',
            'اشتر الهدايا من الأسواق المحلية'
          ]
        }
      ]
    },
    budgetCalculator: {
      title: 'حاسبة الميزانية',
      description: 'احسب ميزانيتك المتوقعة للسفر إلى المغرب'
    }
  },
  en: {
    title: 'Morocco Travel Budget Guide 2024',
    subtitle: 'Complete guide to planning an economical trip to Morocco with money-saving tips and expected costs',
    budgetOverview: {
      title: 'Budget Overview',
      categories: [
        {
          type: 'Budget Travel',
          dailyBudget: '$30-50',
          description: 'Hostels, local food, public transport',
          color: 'green'
        },
        {
          type: 'Mid-Range',
          dailyBudget: '$50-100',
          description: 'Mid-range hotels, good restaurants, taxis',
          color: 'blue'
        },
        {
          type: 'Luxury',
          dailyBudget: '$100-200',
          description: 'Luxury hotels, fine dining, private car',
          color: 'purple'
        }
      ]
    },
    expenseCategories: {
      title: 'Expense Categories',
      categories: [
        {
          name: 'Accommodation',
          icon: 'MapPin',
          budget: '$15-80/night',
          medium: '$30-60/night',
          luxury: '$80-200/night',
          tips: [
            'Hostels: $10-25/night',
            'Traditional Riads: $40-100/night',
            'Luxury Hotels: $150+/night',
            'Book in advance for 20-30% savings'
          ]
        },
        {
          name: 'Food',
          icon: 'DollarSign',
          budget: '$10-20/day',
          medium: '$20-40/day',
          luxury: '$40-80/day',
          tips: [
            'Street food: $2-5/meal',
            'Local restaurants: $8-15/meal',
            'Tourist restaurants: $20-40/meal',
            'Try tagine and couscous locally'
          ]
        },
        {
          name: 'Transport',
          icon: 'MapPin',
          budget: '$10-25/day',
          medium: '$25-50/day',
          luxury: '$50-100/day',
          tips: [
            'Local buses: $1-3',
            'Trains: $10-30',
            'Taxis: $5-20/trip',
            'Car rental: $25-60/day'
          ]
        },
        {
          name: 'Activities',
          icon: 'MapPin',
          budget: '$5-15/day',
          medium: '$15-30/day',
          luxury: '$30-80/day',
          tips: [
            'Museum entries: $2-5',
            'Local tours: $20-50',
            'Desert trips: $100-300',
            'Free activities: medinas and souks'
          ]
        }
      ]
    },
    moneySavingTips: {
      title: 'Money-Saving Tips',
      tips: [
        {
          category: 'Accommodation',
          suggestions: [
            'Stay in hostels or local riads',
            'Avoid main tourist areas',
            'Book in advance for discounts',
            'Consider staying outside city centers'
          ]
        },
        {
          category: 'Food',
          suggestions: [
            'Eat where locals eat',
            'Try safe street food',
            'Shop at local markets',
            'Avoid restaurants in tourist areas'
          ]
        },
        {
          category: 'Transport',
          suggestions: [
            'Use public transportation',
            'Negotiate taxi prices',
            'Walk in old cities',
            'Share taxi costs with other travelers'
          ]
        },
        {
          category: 'Shopping',
          suggestions: [
            'Bargain in souks',
            'Compare prices in multiple shops',
            'Avoid tourist shops',
            'Buy souvenirs from local markets'
          ]
        }
      ]
    },
    budgetCalculator: {
      title: 'Budget Calculator',
      description: 'Calculate your expected budget for traveling to Morocco'
    }
  }
}

export default async function BudgetTravelPage({ params }: BudgetPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  const content = budgetData[locale as keyof typeof budgetData] || budgetData.en
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
    "url": `https://www.nassohcar.com/${locale}/guides/budget-voyage-maroc`,
    "image": "https://www.nassohcar.com/tangier.webp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nassohcar.com/${locale}/guides/budget-voyage-maroc`
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
          { label: locale === 'ar' ? 'ميزانية السفر' : 'Travel Budget', href: `/${locale}/guides/budget-voyage-maroc` }
        ]} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <DollarSign className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              {content.title}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Budget Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.budgetOverview.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.budgetOverview.categories.map((category, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 ${
                category.color === 'green' ? 'border-green-500' :
                category.color === 'blue' ? 'border-blue-500' :
                'border-purple-500'
              }`}>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.type}</h3>
                  <div className={`text-3xl font-bold mb-4 ${
                    category.color === 'green' ? 'text-green-600' :
                    category.color === 'blue' ? 'text-blue-600' :
                    'text-purple-600'
                  }`}>
                    {category.dailyBudget}
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expense Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.expenseCategories.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.expenseCategories.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">{locale === 'ar' ? 'اقتصادي' : 'Budget'}</div>
                    <div className="font-bold text-green-600">{category.budget}</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">{locale === 'ar' ? 'متوسط' : 'Medium'}</div>
                    <div className="font-bold text-blue-600">{category.medium}</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">{locale === 'ar' ? 'فاخر' : 'Luxury'}</div>
                    <div className="font-bold text-purple-600">{category.luxury}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{locale === 'ar' ? 'نصائح:' : 'Tips:'}</h4>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Money-Saving Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.moneySavingTips.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.moneySavingTips.tips.map((tipCategory, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{tipCategory.category}</h3>
                </div>
                <ul className="space-y-3">
                  {tipCategory.suggestions.map((suggestion, suggestionIndex) => (
                    <li key={suggestionIndex} className="flex items-start text-sm text-gray-700">
                      <TrendingDown className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Calculator */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {content.budgetCalculator.title}
              </h2>
              <p className="text-gray-600">
                {content.budgetCalculator.description}
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">
                {locale === 'ar' 
                  ? 'استخدم المعلومات أعلاه لحساب ميزانيتك اليومية المتوقعة'
                  : 'Use the information above to calculate your expected daily budget'
                }
              </p>
              <div className="text-2xl font-bold text-blue-600">
                {locale === 'ar' 
                  ? 'الميزانية اليومية: 30-200 دولار'
                  : 'Daily Budget: $30-200'
                }
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {locale === 'ar' ? 'ابدأ رحلتك الاقتصادية إلى المغرب' : 'Start Your Budget-Friendly Morocco Journey'}
          </h2>
          <p className="text-xl mb-6 opacity-90">
            {locale === 'ar' 
              ? 'استأجر سيارة بأسعار معقولة واستكشف المغرب بميزانية محدودة'
              : 'Rent an affordable car and explore Morocco on a budget'
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