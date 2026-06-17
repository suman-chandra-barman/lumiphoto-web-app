'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import CaseStudiesList from './CaseStudiesList';
import StatsSummaryBanner from './StatsSummaryBanner';
import SuccessStoriesCTA from './SuccessStoriesCTA';

interface SuccessStoriesPageProps {
  locale: string;
}

export default function SuccessStoriesPage({ locale }: SuccessStoriesPageProps) {
  const t = useTranslations('SuccessStories');

  return (
    <div className="relative min-h-screen bg-linear-to-b from-blue-100/20 via-transparent to-transparent dark:from-blue-950/5 dark:bg-neutral-950/20 overflow-x-hidden">
      <div className="relative pt-16 lg:pt-20">
        
        {/* Top Header Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 mb-12 sm:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/10 border border-blue-200/40 dark:border-blue-800/30">
            <span className="text-xs font-semibold text-brand dark:text-blue-400 tracking-wide uppercase">
              {t('badge')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] max-w-3xl mx-auto">
            {t('title')}
          </h1>

          <p className="text-base sm:text-lg text-gray-500 dark:text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Case Studies Row Items */}
        <CaseStudiesList locale={locale} />

        {/* summary dark blue banner */}
        <StatsSummaryBanner />

        {/* Success stories closing CTA buttons */}
        <SuccessStoriesCTA locale={locale} />

      </div>
    </div>
  );
}
