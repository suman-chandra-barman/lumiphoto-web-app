'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  const cards = [
    { quote: t('t1Quote'), name: t('t1Name'), role: t('t1Role') },
    { quote: t('t2Quote'), name: t('t2Name'), role: t('t2Role') },
    { quote: t('t3Quote'), name: t('t3Name'), role: t('t3Role') },
  ];

  return (
    <section id="successStories" className="bg-white py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 space-y-3">
          <p className="text-[11px] font-bold tracking-[0.12em] text-brand uppercase">
            {t('badge')}
          </p>
          <h2 className="text-[28px] sm:text-[34px] font-extrabold text-gray-900 tracking-tight leading-[1.2]">
            {t('title')}
          </h2>
          <p className="text-[15px] text-gray-500">
            {t('subtitle')}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-7 flex flex-col justify-between hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <p className="text-[14px] text-gray-700 leading-relaxed mb-8 italic">
                {card.quote}
              </p>
              <div>
                <p className="text-[14px] font-bold text-gray-900">{card.name}</p>
                <p className="text-[12px] text-gray-400 mt-0.5">{card.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
