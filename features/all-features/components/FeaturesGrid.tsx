'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { QrCode, Sparkles, Lock, CreditCard, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturesGridProps {
  locale: string;
}

export default function FeaturesGrid({ locale }: FeaturesGridProps) {
  const t = useTranslations('AllFeatures');

  const cards = [
    {
      icon: QrCode,
      title: t('card1Title'),
      desc: t('card1Desc'),
    },
    {
      icon: Sparkles,
      title: t('card2Title'),
      desc: t('card2Desc'),
    },
    {
      icon: Lock,
      title: t('card3Title'),
      desc: t('card3Desc'),
    },
    {
      icon: CreditCard,
      title: t('card4Title'),
      desc: t('card4Desc'),
    },
    {
      icon: BarChart3,
      title: t('card5Title'),
      desc: t('card5Desc'),
    },
    {
      icon: Zap,
      title: t('card6Title'),
      desc: t('card6Desc'),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/10 border border-blue-200/40 dark:border-blue-800/30 text-xs font-semibold text-brand dark:text-blue-400 tracking-wide uppercase mb-6">
        {t('badge')}
      </div>

      {/* Main Headers */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] max-w-4xl mx-auto mb-4">
        {t('title')}
      </h1>
      <p className="text-lg text-gray-500 dark:text-neutral-400 max-w-2xl mx-auto mb-16 font-normal leading-relaxed">
        {t('subtitle')}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800/60 rounded-2xl p-8 flex flex-col items-start text-left shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-brand dark:text-blue-400 mb-6">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Link href={`/${locale}/trial`} passHref className="w-full sm:w-auto">
          <Button
            className="w-full sm:w-auto bg-brand-gradient hover:opacity-90 text-white px-8 py-6 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 shadow-md shadow-brand/10 hover:shadow-brand/20 active:scale-[0.98]"
          >
            <span>{t('startTrial')}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
