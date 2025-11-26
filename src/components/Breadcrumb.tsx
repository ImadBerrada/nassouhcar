'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link 
        href="/" 
        className="flex items-center text-gray-400 hover:text-amber-400 transition-colors"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-gray-500" />
          {item.href ? (
            <Link 
              href={item.href} 
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

// Structured data for breadcrumbs
export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.nassohcar.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `https://www.nassohcar.com${item.href}` : undefined
      }))
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  )
}