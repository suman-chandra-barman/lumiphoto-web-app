'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Revenue() {
  const t = useTranslations('Revenue');

  return (
    <section id="pricing" className="bg-[#f0f4fa] py-20 lg:py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-gray-900 tracking-tight leading-[1.2]">
            {t('title')}
          </h2>
          <p className="text-[15px] text-gray-500">
            {t('subtitle')}
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Before — plain white card */}
          <div className="bg-white border border-gray-200 rounded-xl p-7">
            <p className="text-[13px] text-gray-400 mb-3">{t('beforeLabel')}</p>
            <p className="text-[40px] font-extrabold text-gray-900 tracking-tight mb-6">
              {t('beforeAmount')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-500">{t('b1Label')}</span>
                <span className="text-[13px] font-semibold text-red-500">{t('b1Value')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-500">{t('b2Label')}</span>
                <span className="text-[13px] font-semibold text-red-500">{t('b2Value')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-500">{t('b3Label')}</span>
                <span className="text-[13px] font-semibold text-red-500">{t('b3Value')}</span>
              </div>
            </div>
          </div>

          {/* With Lumiphoto — blue bordered card */}
          <div className="bg-white border-2 border-brand rounded-xl p-7">
            <p className="text-[13px] text-brand font-semibold mb-3">{t('withLabel')}</p>
            <p className="text-[40px] font-extrabold text-brand tracking-tight mb-6">
              {t('withAmount')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-500">{t('w1Label')}</span>
                <span className="text-[13px] font-semibold text-gray-800">{t('w1Value')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-500">{t('w2Label')}</span>
                <span className="text-[13px] font-semibold text-gray-800">{t('w2Value')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-500">{t('w3Label')}</span>
                <span className="text-[13px] font-semibold text-gray-800">{t('w3Value')}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
