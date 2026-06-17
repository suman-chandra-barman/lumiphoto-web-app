'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Database, ShieldCheck, Lock } from 'lucide-react';

export default function GDPRComplianceDetails() {
  const t = useTranslations('SecureGalleries');

  const bullets = [
    'gdprBullet1',
    'gdprBullet2',
    'gdprBullet3',
    'gdprBullet4',
    'gdprBullet5',
    'gdprBullet6',
    'gdprBullet7',
    'gdprBullet8',
  ];

  const rightCards = [
    {
      icon: Database,
      titleKey: 'gdprRightCard1Title',
      descKey: 'gdprRightCard1Desc',
    },
    {
      icon: Lock,
      titleKey: 'gdprRightCard2Title',
      descKey: 'gdprRightCard2Desc',
    },
    {
      icon: ShieldCheck,
      titleKey: 'gdprRightCard3Title',
      descKey: 'gdprRightCard3Desc',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Info + Bullets) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-bold text-brand bg-blue-50 tracking-wide uppercase mb-5">
              {t('gdprBadge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t('gdprTitle')}
            </h2>
            <p className="mt-4 text-[15px] text-gray-500 leading-relaxed font-normal">
              {t('gdprDesc')}
            </p>

            {/* Checklist */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 w-full">
              {bullets.map((bulletKey, index) => (
                <li key={index} className="flex items-start gap-2.5 text-[14px] text-gray-700">
                  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t(bulletKey)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Stacked Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-5 w-full">
            {rightCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div 
                  key={idx}
                  className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:border-brand/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-brand">
                    <CardIcon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                      {t(card.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
