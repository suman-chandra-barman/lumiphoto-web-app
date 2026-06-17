'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle } from 'lucide-react';

export default function Certifications() {
  const t = useTranslations('SecureGalleries');

  const certs = [
    {
      titleKey: 'cert1Title',
      descKey: 'cert1Desc',
      footerKey: 'cert1Footer',
    },
    {
      titleKey: 'cert2Title',
      descKey: 'cert2Desc',
      footerKey: 'cert2Footer',
    },
    {
      titleKey: 'cert3Title',
      descKey: 'cert3Desc',
      footerKey: 'cert3Footer',
    },
    {
      titleKey: 'cert4Title',
      descKey: 'cert4Desc',
      footerKey: 'cert4Footer',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t('certTitle')}
          </h2>
          <p className="mt-4 text-[16px] text-gray-500 leading-relaxed font-normal">
            {t('certSubtitle')}
          </p>
        </div>

        {/* 4 columns grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certs.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200/80 rounded-2xl p-6 hover:border-brand/40 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[200px]"
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="text-brand mb-4">
                  <CheckCircle className="w-8 h-8 stroke-[1.8]" />
                </div>
                
                {/* Title */}
                <h3 className="text-[17px] font-bold text-gray-900 mb-2">
                  {t(cert.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-gray-500 leading-relaxed font-normal mb-6">
                  {t(cert.descKey)}
                </p>
              </div>

              {/* Status footer */}
              <span className="text-[12px] font-bold uppercase tracking-wider text-brand px-3 py-1 rounded-full bg-blue-50">
                {t(cert.footerKey)}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
