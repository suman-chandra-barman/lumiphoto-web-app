'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

const stepIcons = [
  // Person+ (Child Registration)
  <svg key="person" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>,
  // QR code (QR Photo Capture)
  <svg key="qr" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Image (AI Matching)
  <svg key="ai" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
  // Lock (Private Access)
  <svg key="lock" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
];

export default function Solution() {
  const t = useTranslations('Solution');

  const items = [
    { title: t('step1Title'), desc: t('step1Desc') },
    { title: t('step2Title'), desc: t('step2Desc') },
    { title: t('step3Title'), desc: t('step3Desc') },
    { title: t('step4Title'), desc: t('step4Desc') },
  ];

  return (
    <section id="successStories" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Content ── */}
          <div className="space-y-8">
            {/* Badge + Heading */}
            <div className="space-y-4">
              <span className="inline-block text-[12px] font-semibold text-brand bg-blue-100 px-3 py-1 rounded-full">
                {t('badge')}
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-extrabold text-gray-900 tracking-tight leading-[1.2]">
                {t('title')}
              </h2>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            {/* Steps List */}
            <div className="space-y-5">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Icon box */}
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    {stepIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-0.5">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <Link
              href="#details"
              className="inline-flex items-center gap-2 bg-brand-gradient hover:opacity-95 hover:shadow-md active:scale-[0.98] text-white text-[14px] font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              {t('learnMore')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* ── Right: Photo ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px] lg:max-w-none lg:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src="/child.jpg"
                alt="Smiling child school portrait"
                width={400}
                height={600}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
