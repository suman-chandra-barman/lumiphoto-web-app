'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SchoolHeroProps {
  locale: string;
}

export default function SchoolHero({ locale }: SchoolHeroProps) {
  const t = useTranslations('SchoolPhotography');

  return (
    <section className="relative w-full py-16 lg:py-20 flex flex-col items-center text-center">
      {/* Solution badge */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/10 border border-blue-200/40 dark:border-blue-800/30 mb-6">
        <span className="text-xs font-semibold text-brand dark:text-blue-400 tracking-wide uppercase">
          {t('badge')}
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.15] max-w-4xl px-4">
        {t('heroTitle')}
      </h1>

      {/* Subtext description */}
      <p className="text-base sm:text-lg text-gray-500 dark:text-neutral-400 max-w-2xl mt-4 px-4 font-normal leading-relaxed">
        {t('heroSubtitle')}
      </p>

      {/* Action CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 px-4 w-full justify-center">
        <Link href={`/${locale}/trial`} passHref className="w-full sm:w-auto">
          <Button
            className="w-full sm:w-auto bg-brand-gradient hover:opacity-90 text-white px-8 py-6 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
          >
            <span>{t('startFreeTrial')}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Link href={`/${locale}/support`} passHref className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="w-full sm:w-auto border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-800 px-8 py-6 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
          >
            <span>{t('requestDemo')}</span>
          </Button>
        </Link>
      </div>

      {/* Smiling kid portrait */}
      <div className="relative mt-16 max-w-3xl w-full px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square w-full bg-neutral-100 dark:bg-neutral-900">
          <Image
            src="/child.jpg"
            alt="School Child Portrait"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
