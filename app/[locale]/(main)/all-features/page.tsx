import React from 'react';
import { getTranslations } from 'next-intl/server';
import AllFeaturesPage from '@/features/all-features/components/AllFeaturesPage';

interface AllFeaturesPageRouteProps {
  params: Promise<{ locale: string }>;
}

// Automatically implement SEO metadata
export async function generateMetadata({ params }: AllFeaturesPageRouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AllFeatures' });

  return {
    title: `${t('title')} | Lumiphoto`,
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/all-features`,
    },
  };
}

export default async function AllFeaturesPageRoute({ params }: AllFeaturesPageRouteProps) {
  const { locale } = await params;
  
  return <AllFeaturesPage locale={locale} />;
}
