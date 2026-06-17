'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingContactProps {
  locale: string;
}

export default function PricingContact({ locale }: PricingContactProps) {
  const t = useTranslations('Pricing');

  return (
    <section id="contact-sales-section" className="w-full max-w-3xl mx-auto mt-24 mb-20 px-4 sm:px-6 text-center">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          {t('stillHaveQuestions')}
        </h2>
        <p className="text-sm text-gray-500 dark:text-neutral-400 font-normal">
          {t('stillHaveQuestionsSubtitle')}
        </p>
        <div className="pt-4">
          <Link href={`/${locale}/support`} passHref>
            <Button
              className="bg-brand-gradient hover:opacity-90 text-white px-8 py-6 rounded-xl font-bold flex items-center gap-2 cursor-pointer transition-all duration-200"
            >
              <span>{t('contactSales')}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
