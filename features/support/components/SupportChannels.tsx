'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function SupportChannels() {
  const t = useTranslations('Support');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-500/10 border border-blue-200/40 dark:border-blue-800/30 text-xs font-semibold text-brand dark:text-blue-400 tracking-wide uppercase mb-6">
        {t('badge')}
      </div>

      {/* Main Headers */}
      <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
        {t('title')}
      </h1>
      <p className="text-lg text-gray-500 dark:text-neutral-400 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
        {t('subtitle')}
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Email Card */}
        <div className="bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800/60 rounded-2xl p-8 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-brand dark:text-blue-400 mb-6">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {t('emailTitle')}
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400 mb-6">
            {t('emailDesc')}
          </p>
          <a
            href={`mailto:${t('emailValue')}`}
            className="text-brand dark:text-blue-400 font-semibold hover:underline text-sm mt-auto"
          >
            {t('emailValue')}
          </a>
        </div>

        {/* Call Card */}
        <div className="bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800/60 rounded-2xl p-8 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-brand dark:text-blue-400 mb-6">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {t('callTitle')}
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400 mb-6">
            {t('callDesc')}
          </p>
          <a
            href={`tel:${t('callValue').replace(/\s+/g, '')}`}
            className="text-brand dark:text-blue-400 font-semibold hover:underline text-sm mt-auto"
          >
            {t('callValue')}
          </a>
        </div>

        {/* Visit Card */}
        <div className="bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800/60 rounded-2xl p-8 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-brand dark:text-blue-400 mb-6">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {t('visitTitle')}
          </h3>
          <div className="text-sm text-gray-500 dark:text-neutral-400 space-y-1 mt-auto">
            <p>{t('visitDesc1')}</p>
            <p>{t('visitDesc2')}</p>
            <p>{t('visitDesc3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
