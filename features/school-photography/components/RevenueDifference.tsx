'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RevenueDifferenceProps {
  locale: string;
}

export default function RevenueDifference({ locale }: RevenueDifferenceProps) {
  const t = useTranslations('SchoolPhotography');

  return (
    <section className="bg-gray-50/50 dark:bg-neutral-900/30 w-full py-24 border-t border-gray-100 dark:border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('revTitle')}
          </h2>
          <p className="text-sm text-gray-500 dark:text-neutral-400 font-normal">
            {t('revSubtitle')}
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Workflow */}
          <div className="bg-white dark:bg-neutral-900/60 rounded-3xl p-8 border border-gray-100 dark:border-neutral-800 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="text-xs uppercase font-extrabold tracking-wider text-gray-400 dark:text-neutral-500 mb-3">
                {t('traditionalTitle')}
              </p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                  €3,500
                </span>
                <span className="text-gray-400 dark:text-neutral-500 text-sm ml-1.5 font-medium">
                  /{t('perEvent').toLowerCase()}
                </span>
              </div>

              <div className="space-y-4 border-t border-gray-50 dark:border-neutral-800/80 pt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 dark:text-neutral-400">{t('conversionRate')}</span>
                  <span className="font-bold text-red-500">25%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 dark:text-neutral-400">{t('manualSortingTime')}</span>
                  <span className="font-bold text-red-500">40 {t('hours')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 dark:text-neutral-400">{t('customerComplaints')}</span>
                  <span className="font-bold text-red-500">{t('high')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* With Lumiphoto */}
          <div className="bg-white dark:bg-neutral-900/60 rounded-3xl p-8 border-2 border-brand shadow-xl ring-4 ring-brand/5 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase font-extrabold tracking-wider text-brand dark:text-blue-400 mb-3">
                {t('lumiphotoTitle')}
              </p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black text-brand dark:text-blue-400 tracking-tight">
                  €6,200
                </span>
                <span className="text-brand/60 dark:text-blue-300/60 text-sm ml-1.5 font-medium">
                  /{t('perEvent').toLowerCase()}
                </span>
              </div>

              <div className="space-y-4 border-t border-blue-50 dark:border-neutral-800/80 pt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-700 dark:text-neutral-300 font-semibold">{t('conversionRate')}</span>
                  <span className="font-bold text-gray-900 dark:text-white">45%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-700 dark:text-neutral-300 font-semibold">{t('manualSortingTime')}</span>
                  <span className="font-bold text-gray-900 dark:text-white">0 {t('hours')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-700 dark:text-neutral-300 font-semibold">{t('customerComplaints')}</span>
                  <span className="font-bold text-gray-900 dark:text-white">{t('minimal')}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Summary Text */}
        <div className="flex items-center justify-center gap-2 mt-8 text-center bg-blue-500/10 dark:bg-blue-500/5 border border-blue-200/20 dark:border-blue-900/20 px-6 py-3 rounded-2xl w-fit mx-auto">
          <ArrowUpRight className="w-4 h-4 text-brand dark:text-blue-400 flex-shrink-0" />
          <span className="text-sm font-bold text-brand dark:text-blue-400 leading-normal">
            {t('revGainText')}
          </span>
        </div>

      </div>
    </section>
  );
}
