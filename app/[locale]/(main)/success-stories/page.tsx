import React from 'react';
import { getTranslations } from 'next-intl/server';
import SuccessStoriesPage from '@/features/success-stories/components/SuccessStoriesPage';

interface SuccessStoriesPageRouteProps {
  params: Promise<{ locale: string }>;
}

// Automatically implement SEO metadata
export async function generateMetadata({ params }: SuccessStoriesPageRouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SuccessStories' });

  return {
    title: `${t('title')} | Lumiphoto`,
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/success-stories`,
    },
  };
}

export default async function SuccessStoriesPageRoute({ params }: SuccessStoriesPageRouteProps) {
  const { locale } = await params;
  
  return <SuccessStoriesPage locale={locale} />;
}
