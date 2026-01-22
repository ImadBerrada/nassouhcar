import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/dashboard/profile/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/dashboard/profile/',
        ],
      },
    ],
    sitemap: 'https://www.nassohcar.com/sitemap.xml',
    host: 'https://www.nassohcar.com',
  }
}
