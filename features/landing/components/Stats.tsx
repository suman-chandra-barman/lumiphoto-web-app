'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Stats() {
  const t = useTranslations('Stats');

  const stats = [
    { value: '500+',  label: t('stat1') },
    { value: '2M+',   label: t('stat2') },
    { value: '98%',   label: t('stat3') },
    { value: '€5M+',  label: t('stat4') },
  ];

  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-8 py-4">
              <span className="block text-[42px] font-extrabold tracking-tight leading-none text-brand">
                {stat.value}
              </span>
              <span className="block mt-2 text-[13px] font-medium text-gray-400 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
