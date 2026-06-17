'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Steps() {
  const t = useTranslations('Steps');

  const steps = [
    { num: '01', title: t('step1Title'), desc: t('step1Desc') },
    { num: '02', title: t('step2Title'), desc: t('step2Desc') },
    { num: '03', title: t('step3Title'), desc: t('step3Desc') },
    { num: '04', title: t('step4Title'), desc: t('step4Desc') },
  ];

  return (
    <section className="bg-brand-gradient py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold text-white tracking-tight mb-3">
            {t('title')}
          </h2>
          <p className="text-[15px] text-blue-100">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="text-[56px] sm:text-[64px] font-extrabold text-white/20 leading-none mb-3">
                {step.num}
              </div>
              <h3 className="text-[16px] font-bold text-white mb-1.5">
                {step.title}
              </h3>
              <p className="text-[13px] text-blue-200 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
