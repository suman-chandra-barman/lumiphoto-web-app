'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

// Thin outline icons matching the reference screenshots
const icons = [
  // Clock - Manual sorting
  <svg key="clock" className="w-[22px] h-[22px] text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
  </svg>,
  // Trending up - Lost revenue
  <svg key="trend" className="w-[22px] h-[22px] text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  // Document - GDPR risk
  <svg key="doc" className="w-[22px] h-[22px] text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 8.414V19a2 2 0 01-2 2z" />
  </svg>,
  // Eye - Image theft
  <svg key="eye" className="w-[22px] h-[22px] text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
  // Link - Slow workflows
  <svg key="link" className="w-[22px] h-[22px] text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>,
  // Chart bar - No visibility
  <svg key="chart" className="w-[22px] h-[22px] text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
];

export default function PainPoints() {
  const t = useTranslations('PainPoints');

  const points = [
    { title: t('point1Title'), desc: t('point1Desc') },
    { title: t('point2Title'), desc: t('point2Desc') },
    { title: t('point3Title'), desc: t('point3Desc') },
    { title: t('point4Title'), desc: t('point4Desc') },
    { title: t('point5Title'), desc: t('point5Desc') },
    { title: t('point6Title'), desc: t('point6Desc') },
  ];

  return (
    <section id="advantages" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-[11px] font-bold tracking-[0.12em] text-brand uppercase mb-3">
            {t('badge')}
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-extrabold text-gray-900 tracking-tight max-w-2xl leading-[1.2] mb-4">
            {t('title')}
          </h2>
          <p className="text-base text-gray-500">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              {/* Icon */}
              <div className="mb-4">
                {icons[idx]}
              </div>
              {/* Title */}
              <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                {point.title}
              </h3>
              {/* Description */}
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
