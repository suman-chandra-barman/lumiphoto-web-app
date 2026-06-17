'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Clock, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

interface WhyChooseProps {
  locale: string;
}

export default function WhyChoose({ locale }: WhyChooseProps) {
  const t = useTranslations('SchoolPhotography');

  const items = [
    {
      Icon: Clock,
      title: t('why1Title'),
      description: t('why1Desc'),
      highlight: t('why1Badge'),
    },
    {
      Icon: TrendingUp,
      title: t('why2Title'),
      description: t('why2Desc'),
      highlight: t('why2Badge'),
    },
    {
      Icon: ShieldCheck,
      title: t('why3Title'),
      description: t('why3Desc'),
      highlight: t('why3Badge'),
    },
    {
      Icon: Zap,
      title: t('why4Title'),
      description: t('why4Desc'),
      highlight: t('why4Badge'),
    },
  ];

  return (
    <section className="bg-gray-50/50 dark:bg-neutral-900/30 w-full py-24 border-t border-b border-gray-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center tracking-tight mb-16">
          {t('whyTitle')}
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900/60 rounded-3xl p-8 border border-gray-100 dark:border-neutral-800 flex flex-col justify-between items-start hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-brand dark:text-blue-400">
                  <item.Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-neutral-400 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Highlight callout text */}
              <div className="mt-6 pt-4 border-t border-gray-50 dark:border-neutral-800 w-full">
                <span className="text-[13px] font-bold text-brand dark:text-blue-400">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
