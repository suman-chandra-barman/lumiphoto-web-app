import React from 'react';
import { getTranslations } from 'next-intl/server';
import PricingPage from '@/features/pricing/components/PricingPage';

interface TrialPageRouteProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TrialPageRouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pricing' });

  return {
    title: `${t('startFreeTrial')} | Lumiphoto`,
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/trial`,
    },
  };
}

export default async function TrialPageRoute({ params }: TrialPageRouteProps) {
  const { locale } = await params;
  
  return <PricingPage locale={locale} />;
}
