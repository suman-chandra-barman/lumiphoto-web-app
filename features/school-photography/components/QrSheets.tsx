'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface QrSheetsProps {
  locale: string;
}

export default function QrSheets({ locale }: QrSheetsProps) {
  const t = useTranslations('SchoolPhotography');

  const bullets = [
    t('qrSheetsBullet1'),
    t('qrSheetsBullet2'),
    t('qrSheetsBullet3'),
    t('qrSheetsBullet4'),
    t('qrSheetsBullet5'),
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Text and bullets */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('qrSheetsTitle')}
          </h2>

          <p className="text-sm text-gray-500 dark:text-neutral-400 font-normal leading-relaxed">
            {t('qrSheetsDesc')}
          </p>

          <ul className="space-y-4 pt-4">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-brand dark:text-blue-400">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-gray-700 dark:text-neutral-300 font-medium leading-normal">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Mockup Image */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 w-full bg-neutral-50 dark:bg-neutral-900/40">
            <Image
              src="/phone_holding_qr.jpg"
              alt="Phone scanning QR Code"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
