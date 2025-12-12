import { generateHreflangLinks } from '@/lib/hreflang-utils'

interface HreflangTagsProps {
  basePath: string
}

export default function HreflangTags({ basePath }: HreflangTagsProps) {
  const links = generateHreflangLinks(basePath)
  return (
    <> 
      {Object.entries(links).map(([hreflang, href]) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}
    </>
  )
}
