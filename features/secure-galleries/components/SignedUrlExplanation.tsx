'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function SignedUrlExplanation() {
  const t = useTranslations('SecureGalleries');

  const steps = [
    {
      num: '1',
      titleKey: 'step1Title',
      descKey: 'step1Desc',
    },
    {
      num: '2',
      titleKey: 'step2Title',
      descKey: 'step2Desc',
    },
    {
      num: '3',
      titleKey: 'step3Title',
      descKey: 'step3Desc',
    },
  ];

  return (
    <section className="bg-gray-50/50 border-t border-b border-gray-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t('signedUrlTitle')}
          </h2>
          <p className="mt-4 text-[16px] text-gray-500 leading-relaxed font-normal">
            {t('signedUrlSubtitle')}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200/80 rounded-2xl p-8 hover:border-brand/40 hover:shadow-xl transition-all duration-300 flex flex-col items-start"
            >
              {/* Step Number */}
              <span className="text-[32px] font-black text-brand mb-4 leading-none">
                {step.num}
              </span>
              
              {/* Step Title */}
              <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                {t(step.titleKey)}
              </h3>

              {/* Step Description */}
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
