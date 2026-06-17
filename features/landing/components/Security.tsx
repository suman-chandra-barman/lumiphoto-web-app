'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Security() {
  const t = useTranslations('Security');

  const items = [
    t('item1'), t('item2'), t('item3'),
    t('item4'), t('item5'), t('item6'),
  ];

  return (
    <section id="pricing" className="bg-[#f7f9fc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Photo (no frame, just rounded) ── */}
          <div className="flex justify-center lg:justify-start order-last lg:order-first">
            <div className="w-full max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/security.png"
                alt="Professional Photographer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="space-y-7">
            {/* Badge */}
            <span className="inline-block text-[12px] font-semibold text-brand bg-blue-100 px-3 py-1 rounded-full">
              {t('badge')}
            </span>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-[28px] sm:text-[34px] font-extrabold text-gray-900 tracking-tight leading-[1.2]">
                {t('title')}
              </h2>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[14px] text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#security-details"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 px-5 py-2.5 rounded-lg transition-colors"
            >
              {t('viewDetails')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
