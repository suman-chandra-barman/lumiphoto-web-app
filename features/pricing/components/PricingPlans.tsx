'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Check, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface PricingPlansProps {
  locale: string;
}

export default function PricingPlans({ locale }: PricingPlansProps) {
  const t = useTranslations('Pricing');
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      id: 'starter',
      name: t('starterTitle'),
      description: t('starterDesc'),
      priceMonthly: 49,
      priceAnnual: 39,
      priceAnnualTotal: 470,
      buttonText: t('startFreeTrial'),
      buttonVariant: 'outline' as const,
      features: [
        { text: t('qrEvents').replace('month', '1').replace('pro Monat', '1').replace('par mois', '1').replace('5', '5'), included: true },
        { text: `500 ${t('imagesEvent').split(' ').slice(1).join(' ')}`, included: true },
        { text: `50 GB ${t('storage').toLowerCase()}`, included: true },
        { text: `${t('basic')} ${t('aiSorting').toLowerCase()}`, included: true },
        { text: t('secureGalleries'), included: true },
        { text: t('ecommerce'), included: true },
        { text: t('prioritySupport').split(' ')[0] + ' support', included: true }, // Email support
        { text: t('slaGuarantee').split(' ')[0] + ' compliance', included: true }, // GDPR compliance
        { text: t('revenueAnalytics'), included: false },
        { text: t('prioritySupport'), included: false },
        { text: t('whiteLabeling'), included: false },
      ],
    },
    {
      id: 'pro',
      name: t('proTitle'),
      description: t('proDesc'),
      priceMonthly: 149,
      priceAnnual: 119,
      priceAnnualTotal: 1430,
      buttonText: t('startFreeTrial'),
      buttonVariant: 'brand' as const,
      popular: true,
      features: [
        { text: t('unlimited') + ' ' + t('qrEvents').split(' ').slice(1).join(' '), included: true },
        { text: `2,000 ${t('imagesEvent').split(' ').slice(1).join(' ')}`, included: true },
        { text: `200 GB ${t('storage').toLowerCase()}`, included: true },
        { text: `${t('advanced')} ${t('aiSorting').toLowerCase()}`, included: true },
        { text: t('secureGalleries'), included: true },
        { text: t('ecommerce'), included: true },
        { text: t('revenueAnalytics'), included: true },
        { text: t('printFulfillment'), included: true },
        { text: t('priorityEmail'), included: true },
        { text: t('slaGuarantee').split(' ')[0] + ' compliance', included: true }, // GDPR compliance
        { text: t('watermarkProtection'), included: true },
        { text: t('customBranding'), included: true },
        { text: t('accountManager'), included: false },
      ],
    },
    {
      id: 'studio',
      name: t('studioTitle'),
      description: t('studioDesc'),
      priceMonthly: 349,
      priceAnnual: 279,
      priceAnnualTotal: 3350,
      buttonText: t('contactSales'),
      buttonVariant: 'outline' as const,
      features: [
        { text: t('unlimited') + ' ' + t('qrEvents').split(' ').slice(1).join(' '), included: true },
        { text: t('unlimited') + ' ' + t('imagesEvent').split(' ').slice(1).join(' '), included: true },
        { text: `1 TB ${t('storage').toLowerCase()}`, included: true },
        { text: `${t('enterprise')} ${t('aiSorting').toLowerCase()}`, included: true },
        { text: t('secureGalleries'), included: true },
        { text: t('ecommerce'), included: true },
        { text: t('revenueAnalytics').replace('Analytics', 'Advanced Analytics').replace('Umsatzanalyse', 'Erweiterte Umsatzanalyse').replace('Analyses', 'Analyses avancées'), included: true },
        { text: t('printFulfillment'), included: true },
        { text: t('priorityPhoneEmail'), included: true },
        { text: t('slaGuarantee').split(' ')[0] + ' compliance', included: true }, // GDPR compliance
        { text: t('watermarkProtection'), included: true },
        { text: t('whiteLabeling').replace('labeling', 'Full white labeling').replace('Labeling', 'Vollständiges White-Labeling').replace('blanche', 'Marque blanche complète'), included: true },
        { text: t('accountManager'), included: true },
        { text: t('customBranding').replace('branding', 'custom integrations').replace('Branding', 'Spezifische Integrationen').replace('personnalisée', 'intégrations sur mesure'), included: true },
        { text: t('slaGuarantee'), included: true },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Monthly/Annual Switch */}
      <div className="relative mt-8 flex items-center justify-center p-1 bg-gray-100 dark:bg-neutral-900 rounded-full w-fit">
        <button
          onClick={() => setBillingInterval('monthly')}
          className={cn(
            "relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none",
            billingInterval === 'monthly'
              ? "bg-white dark:bg-neutral-800 text-gray-900 dark:text-white shadow-xs"
              : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
          )}
        >
          {t('monthly')}
        </button>
        <button
          onClick={() => setBillingInterval('annual')}
          className={cn(
            "relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5",
            billingInterval === 'annual'
              ? "bg-white dark:bg-neutral-800 text-gray-900 dark:text-white shadow-xs"
              : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
          )}
        >
          <span>{t('annual')}</span>
          <span className="text-[10px] font-bold bg-blue-100 text-brand dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 rounded-full select-none">
            {t('save20')}
          </span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-16 px-4 sm:px-6 lg:px-8 items-stretch">
        {plans.map((plan) => {
          const price = billingInterval === 'monthly' ? plan.priceMonthly : plan.priceAnnual;
          return (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col justify-between bg-white dark:bg-neutral-900/60 rounded-3xl p-8 border transition-all duration-300",
                plan.popular
                  ? "border-2 border-brand shadow-xl ring-4 ring-brand/5 lg:scale-105 z-10"
                  : "border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 hover:shadow-lg"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide shadow-md">
                  {t('mostPopular')}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400 mt-2 font-normal min-h-[40px]">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    €{price}
                  </span>
                  <span className="text-gray-500 dark:text-neutral-400 text-sm ml-1">
                    /{t('monthly').toLowerCase()}
                  </span>
                </div>

                <div className="min-h-[20px] mt-1.5">
                  {billingInterval === 'annual' ? (
                    <p className="text-[13px] text-gray-400 dark:text-neutral-500 font-normal">
                      {t('billedAnnually', { amount: `€${plan.priceAnnualTotal}` })}
                    </p>
                  ) : (
                    <div className="h-4" />
                  )}
                </div>

                <div className="mt-8">
                  {plan.buttonVariant === 'brand' ? (
                    <Button
                      onClick={() => {
                        const contactSec = document.getElementById('contact-sales-section');
                        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-brand-gradient hover:opacity-90 text-white py-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => {
                        const contactSec = document.getElementById('contact-sales-section');
                        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800 py-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                    >
                      <span>{plan.buttonText}</span>
                      {plan.id !== 'studio' && <ArrowRight className="w-4 h-4" />}
                    </Button>
                  )}
                </div>

                {/* Features List */}
                <ul className="mt-10 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      {feature.included ? (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-brand dark:text-blue-400 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-50 dark:bg-neutral-800/60 flex items-center justify-center text-gray-300 dark:text-neutral-600 mt-0.5">
                          <X className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <span
                        className={cn(
                          "leading-normal",
                          feature.included
                            ? "text-gray-700 dark:text-neutral-300 font-medium"
                            : "text-gray-400 dark:text-neutral-600 line-through decoration-gray-200 dark:decoration-neutral-800"
                        )}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
