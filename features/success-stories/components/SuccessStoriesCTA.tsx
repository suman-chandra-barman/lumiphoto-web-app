'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface SuccessStoriesCTAProps {
  locale: string;
}

export default function SuccessStoriesCTA({ locale }: SuccessStoriesCTAProps) {
  const t = useTranslations('SuccessStories');

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          {t('ctaTitle')}
        </h2>
        <p className="text-gray-500 dark:text-neutral-400 max-w-xl mx-auto text-sm sm:text-base font-normal">
          {t('ctaSubtitle')}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link href={`/${locale}/trial`} passHref className="w-full sm:w-auto">
          <Button
            className="w-full sm:w-auto bg-brand-gradient hover:opacity-90 text-white px-8 py-6 rounded-xl font-bold flex items-center justify-center cursor-pointer transition-all duration-200 shadow-md shadow-brand/10 hover:shadow-brand/20 active:scale-[0.98]"
          >
            {t('ctaStart')}
          </Button>
        </Link>
        <Link href={`/${locale}/support`} passHref className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="w-full sm:w-auto border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-neutral-300 px-8 py-6 rounded-xl font-bold flex items-center justify-center cursor-pointer transition-all duration-200"
          >
            {t('ctaContact')}
          </Button>
        </Link>
      </div>
    </section>
  );
}
