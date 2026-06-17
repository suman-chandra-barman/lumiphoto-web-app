'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function StatsSummaryBanner() {
  const t = useTranslations('SuccessStories');

  return (
    <section className="w-full bg-linear-to-r from-blue-600 via-brand to-blue-800 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 shadow-inner">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('headerStats')}
          </h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            {t('headerStatsSub')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 max-w-5xl mx-auto pt-4">
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              {t('stat1Value')}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-blue-100/70 max-w-[180px] mx-auto uppercase tracking-wider leading-relaxed">
              {t('stat1Label')}
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              {t('stat2Value')}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-blue-100/70 max-w-[180px] mx-auto uppercase tracking-wider leading-relaxed">
              {t('stat2Label')}
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              {t('stat3Value')}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-blue-100/70 max-w-[180px] mx-auto uppercase tracking-wider leading-relaxed">
              {t('stat3Label')}
            </div>
          </div>

          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              {t('stat4Value')}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-blue-100/70 max-w-[180px] mx-auto uppercase tracking-wider leading-relaxed">
              {t('stat4Label')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
