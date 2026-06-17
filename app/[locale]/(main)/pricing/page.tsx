import React from 'react';
import { getTranslations } from 'next-intl/server';
import PricingPage from '@/features/pricing/components/PricingPage';

interface PricingPageRouteProps {
  params: Promise<{ locale: string }>;
}

// Automatically implement SEO metadata
export async function generateMetadata({ params }: PricingPageRouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pricing' });

  return {
    title: `${t('title')} | Lumiphoto`,
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/pricing`,
    },
  };
}

export default async function PricingPageRoute({ params }: PricingPageRouteProps) {
  const { locale } = await params;
  
  return <PricingPage locale={locale} />;
}
