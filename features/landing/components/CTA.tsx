'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CTA() {
  const t = useTranslations('CTA');

  return (
    <section id="trial" className="bg-brand-gradient py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">

        <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
          {t('title')}
        </h2>

        <p className="text-[15px] text-blue-100">
          {t('subtitle')}
        </p>

        <div className="pt-2">
          <Link
            href="#trial"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[14px] font-bold px-7 py-3.5 rounded-lg transition-colors shadow-sm"
          >
            {t('button')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <p className="text-[13px] text-blue-200 pt-1">
          {t('trust')}
        </p>

      </div>
    </section>
  );
}
