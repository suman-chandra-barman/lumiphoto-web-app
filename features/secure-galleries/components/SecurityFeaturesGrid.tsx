'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Lock, Server, Key, FileText, Eye, Shield } from 'lucide-react';

export default function SecurityFeaturesGrid() {
  const t = useTranslations('SecureGalleries');

  const features = [
    {
      icon: Lock,
      titleKey: 'f1Title',
      descKey: 'f1Desc',
    },
    {
      icon: Server,
      titleKey: 'f2Title',
      descKey: 'f2Desc',
    },
    {
      icon: Key,
      titleKey: 'f3Title',
      descKey: 'f3Desc',
    },
    {
      icon: FileText,
      titleKey: 'f4Title',
      descKey: 'f4Desc',
    },
    {
      icon: Eye,
      titleKey: 'f5Title',
      descKey: 'f5Desc',
    },
    {
      icon: Shield,
      titleKey: 'f6Title',
      descKey: 'f6Desc',
    },
  ];

  return (
    <section className="bg-gray-50/50 border-t border-b border-gray-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t('featuresTitle')}
          </h2>
          <p className="mt-4 text-[16px] text-gray-500 leading-relaxed font-normal">
            {t('featuresSubtitle')}
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-white border border-gray-200/80 rounded-2xl p-6 lg:p-8 hover:border-brand/40 hover:shadow-xl transition-all duration-300 flex flex-col items-start"
              >
                {/* Icon wrapper */}
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-50 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300 mb-6">
                  <IconComponent className="w-5.5 h-5.5 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-gray-900 group-hover:text-brand transition-colors duration-150 mb-3">
                  {t(item.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-gray-500 leading-relaxed font-normal">
                  {t(item.descKey)}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
