'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { NavCTAButton } from '@/components/common/NavCTAButton';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="bg-hero-grid py-20 lg:py-28 border-b border-gray-100 dark:border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="space-y-7">

            {/* Badge */}
            <p className="text-[11px] font-bold tracking-[0.12em] text-brand uppercase">
              {t('badge')}
            </p>

            {/* Headline */}
            <h1 className="text-[40px] sm:text-[48px] lg:text-[54px] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              {t('title')}
            </h1>

            {/* Description */}
            <p className="text-base text-gray-500 leading-relaxed max-w-[520px]">
              {t('description')}
            </p>

            {/* ── CTAs ── */}
            <div className="flex flex-wrap gap-3 pt-1">
              {/* Primary — gradient shadcn button */}
              <NavCTAButton
                href="#trial"
                variant="gradient"
                className="inline-flex items-center gap-2 px-6 py-3 text-[14px]"
              >
                {t('startFreeTrial')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NavCTAButton>

              {/* Secondary — outline */}
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 text-[14px] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {t('viewDemo')}
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3">
              {([t('trust1'), t('trust2'), t('trust3')] as string[]).map((text, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[13px] text-gray-500">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Circular Photo ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer light-blue ring */}
              <div className="w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] rounded-full bg-[linear-gradient(135deg,#2F74BB99_0%,#2F74BB00_100%)] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="Professional Photographer"
                    className="w-full h-full"
                    width={480}
                    height={480}
                  />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
