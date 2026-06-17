'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface SecureCTAProps {
  locale: string;
}

export default function SecureCTA({ locale }: SecureCTAProps) {
  const t = useTranslations('SecureGalleries');

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Banner with gradient background */}
        <div className="relative rounded-3xl overflow-hidden bg-brand-gradient px-8 py-12 md:py-16 text-center shadow-xl">
          
          {/* Subtle background glow decoration */}
          <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent pointer-events-none opacity-50" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t('ctaTitle')}
            </h2>
            
            {/* Subtitle */}
            <p className="mt-4 text-[15px] md:text-[16px] text-blue-100 font-normal leading-relaxed">
              {t('ctaSubtitle')}
            </p>
            
            {/* Action button */}
            <div className="mt-8 flex justify-center">
              <Link 
                href={`/${locale}/trial`}
                className="bg-white hover:bg-blue-50 text-[14px] font-bold px-6 py-3 rounded-xl transition-all duration-150 hover:shadow-lg active:scale-98 select-none"
              >
                {t('ctaButton')}
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
