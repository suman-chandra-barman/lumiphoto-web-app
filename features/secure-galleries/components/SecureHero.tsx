'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SecureHero() {
  const t = useTranslations('SecureGalleries');

  return (
    <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* badges/pills row */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium text-gray-700 bg-gray-50 border border-gray-200">
            <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {t('badge1')}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium text-gray-700 bg-gray-50 border border-gray-200">
            <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {t('badge2')}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium text-gray-700 bg-gray-50 border border-gray-200">
            <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            {t('badge3')}
          </span>
        </div>

        {/* title & subtitle */}
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-gray-900 leading-[1.15] max-w-4xl">
          {t('heroTitle')}
        </h1>
        <p className="mt-6 text-[16px] md:text-[18px] text-gray-500 max-w-2xl leading-relaxed">
          {t('heroSubtitle')}
        </p>

        {/* image frame */}
        <div className="relative w-full max-w-4xl mt-12 md:mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white group">
          <div className="aspect-16/10 relative w-full h-[250px] sm:h-[400px] md:h-[500px]">
            <Image
              src="/secure_database.jpg"
              alt="Data center servers representing secure hosting environment"
              fill
              priority
              className="object-cover transition-all duration-700 group-hover:scale-102"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
