interface Props {
  params: { ciudad: string }
}

export default function BlogCiudadES({ params }: Props) {
  const title = params.ciudad.replace(/-/g, ' ')
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Alquiler de coches en {title}</h1>
        <p className="text-gray-700 mb-4">Artículos y guías sobre alquiler de coches en {title}.</p>
      </div>
    </div>
  )
}
