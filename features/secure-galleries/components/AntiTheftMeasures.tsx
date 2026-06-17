'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function AntiTheftMeasures() {
  const t = useTranslations('SecureGalleries');

  const measures = [
    { titleKey: 'antiTheft1Title', descKey: 'antiTheft1Desc' },
    { titleKey: 'antiTheft2Title', descKey: 'antiTheft2Desc' },
    { titleKey: 'antiTheft3Title', descKey: 'antiTheft3Desc' },
    { titleKey: 'antiTheft4Title', descKey: 'antiTheft4Desc' },
    { titleKey: 'antiTheft5Title', descKey: 'antiTheft5Desc' },
    { titleKey: 'antiTheft6Title', descKey: 'antiTheft6Desc' },
  ];

  return (
    <section className="bg-gray-50/50 border-t border-b border-gray-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t('antiTheftTitle')}
          </h2>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {measures.map((measure, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              {/* Check circle SVG */}
              <div className="flex-shrink-0 text-brand mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-1">
                  {t(measure.titleKey)}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                  {t(measure.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
