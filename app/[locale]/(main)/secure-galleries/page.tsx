import React from 'react';
import { getTranslations } from 'next-intl/server';
import SecureGalleriesPage from '@/features/secure-galleries/components/SecureGalleriesPage';

interface SecureGalleriesPageRouteProps {
  params: Promise<{ locale: string }>;
}

// Implement SEO metadata
export async function generateMetadata({ params }: SecureGalleriesPageRouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SecureGalleries' });

  return {
    title: `${t('heroTitle')} | Lumiphoto`,
    description: t('heroSubtitle'),
    alternates: {
      canonical: `/${locale}/secure-galleries`,
    },
  };
}

export default async function SecureGalleriesPageRoute({ params }: SecureGalleriesPageRouteProps) {
  const { locale } = await params;

  return <SecureGalleriesPage locale={locale} />;
}
