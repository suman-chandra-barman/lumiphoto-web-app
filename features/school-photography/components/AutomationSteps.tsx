'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Check, QrCode, Image as ImageIcon, Upload, Send } from 'lucide-react';

interface AutomationStepsProps {
  locale: string;
}

export default function AutomationSteps({ locale }: AutomationStepsProps) {
  const t = useTranslations('SchoolPhotography');

  const steps = [
    {
      number: 1,
      title: t('step1Title'),
      description: t('step1Desc'),
      bullets: [t('step1Bullet1'), t('step1Bullet2'), t('step1Bullet3')],
      Icon: QrCode,
      align: 'left',
    },
    {
      number: 2,
      title: t('step2Title'),
      description: t('step2Desc'),
      bullets: [t('step2Bullet1'), t('step2Bullet2'), t('step2Bullet3')],
      Icon: ImageIcon,
      align: 'right',
    },
    {
      number: 3,
      title: t('step3Title'),
      description: t('step3Desc'),
      bullets: [t('step3Bullet1'), t('step3Bullet2'), t('step3Bullet3')],
      Icon: Upload,
      align: 'left',
    },
    {
      number: 4,
      title: t('step4Title'),
      description: t('step4Desc'),
      bullets: [t('step4Bullet1'), t('step4Bullet2'), t('step4Bullet3')],
      Icon: Send,
      align: 'right',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-neutral-900">
      {/* Section Header */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          {t('stepsTitle')}
        </h2>
        <p className="text-sm text-gray-500 dark:text-neutral-400 font-normal">
          {t('stepsSubtitle')}
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-24 md:space-y-32">
        {steps.map((step) => {
          const isLeft = step.align === 'left';
          return (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            >
              {/* Graphic Card (displays on left for steps 2 & 4 in desktop layout) */}
              <div className={`order-2 ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                <div className="bg-white dark:bg-neutral-900/60 rounded-3xl border border-gray-100 dark:border-neutral-800/80 p-12 md:p-16 flex items-center justify-center shadow-xs aspect-[1.8] sm:aspect-[2.2] md:aspect-[1.6]">
                  <step.Icon className="w-20 h-20 text-brand stroke-[1.5]" />
                </div>
              </div>

              {/* Text Description (displays on right for steps 2 & 4 in desktop layout) */}
              <div className={`order-1 ${isLeft ? 'md:order-1' : 'md:order-2'} space-y-6`}>
                
                {/* Step badge & title inline */}
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand text-white font-extrabold text-lg shadow-md shadow-brand/10 shrink-0">
                    {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 dark:text-neutral-400 font-normal leading-relaxed">
                  {step.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3.5 pt-2">
                  {step.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-400 dark:border-neutral-600 flex items-center justify-center text-gray-700 dark:text-neutral-300 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-gray-700 dark:text-neutral-300 font-normal leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
