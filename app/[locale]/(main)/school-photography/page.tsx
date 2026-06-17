import React from 'react';
import { getTranslations } from 'next-intl/server';
import SchoolPhotographyPage from '@/features/school-photography/components/SchoolPhotographyPage';

interface SchoolPhotographyPageRouteProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: SchoolPhotographyPageRouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SchoolPhotography' });

  return {
    title: `${t('heroTitle')} | Lumiphoto`,
    description: t('heroSubtitle'),
    alternates: {
      canonical: `/${locale}/school-photography`,
    },
  };
}

export default async function SchoolPhotographyPageRoute({ params }: SchoolPhotographyPageRouteProps) {
  const { locale } = await params;

  return <SchoolPhotographyPage locale={locale} />;
}
