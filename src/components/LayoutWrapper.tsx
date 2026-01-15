'use client';

import { usePathname } from 'next/navigation';

interface LayoutWrapperProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}

export default function LayoutWrapper({ children, header, footer }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Check if the current path is for 'en', 'es' locales, or admin panel
  // We want to suppress the default header/footer for these paths
  // because they have their own layouts with their own headers/footers.
  const isExcludedPath = pathname?.startsWith('/en') || 
                        pathname?.startsWith('/es') || 
                        pathname?.startsWith('/admin');

  if (isExcludedPath) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
