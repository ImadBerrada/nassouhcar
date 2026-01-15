export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="flex-grow">
        {children}
      </main>
      {/* GTranslate Widget - Fixed position like the old widget */}
      <div className="gtranslate_wrapper hidden lg:block" style={{ position: 'fixed', top: '80px', right: '20px', zIndex: 1000 }}></div>
      {/* GTranslate Widget - Mobile version - Bottom left */}
      <div className="gtranslate_wrapper lg:hidden" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}></div>
    </>
  )
}
