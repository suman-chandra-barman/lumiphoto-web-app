import React from 'react';
import { getTranslations } from 'next-intl/server';
import SupportPage from '@/features/support/components/SupportPage';

interface SupportPageRouteProps {
  params: Promise<{ locale: string }>;
}

// Automatically implement SEO metadata
export async function generateMetadata({ params }: SupportPageRouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Support' });

  return {
    title: `${t('title')} | Lumiphoto`,
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/support`,
    },
  };
}

export default async function SupportPageRoute({ params }: SupportPageRouteProps) {
  const { locale } = await params;
  
  return <SupportPage locale={locale} />;
}
