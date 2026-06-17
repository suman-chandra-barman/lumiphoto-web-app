'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureComparisonProps {
  locale: string;
}

export default function FeatureComparison({ locale }: FeatureComparisonProps) {
  const t = useTranslations('Pricing');

  const rows = [
    { name: t('qrEvents'), starter: '5', pro: t('unlimited'), studio: t('unlimited') },
    { name: t('imagesEvent'), starter: '500', pro: '2,000', studio: t('unlimited') },
    { name: t('storage'), starter: '50 GB', pro: '200 GB', studio: '1 TB' },
    { name: t('aiSorting'), starter: t('basic'), pro: t('advanced'), studio: t('enterprise') },
    { name: t('secureGalleries'), starter: true, pro: true, studio: true },
    { name: t('ecommerce'), starter: true, pro: true, studio: true },
    { name: t('printFulfillment'), starter: false, pro: true, studio: true },
    { name: t('revenueAnalytics'), starter: false, pro: true, studio: true },
    { name: t('watermarkProtection'), starter: false, pro: true, studio: true },
    { name: t('customBranding'), starter: false, pro: true, studio: true },
    { name: t('whiteLabeling'), starter: false, pro: false, studio: true },
    { name: t('prioritySupport'), starter: false, pro: true, studio: true },
    { name: t('accountManager'), starter: false, pro: false, studio: true },
    { name: t('slaGuarantee'), starter: false, pro: false, studio: true },
  ];

  const renderValue = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/40 text-brand dark:text-blue-400">
          <Check className="w-4 h-4 stroke-[3]" />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-50 dark:bg-neutral-800/60 text-gray-300 dark:text-neutral-700">
          <X className="w-3.5 h-3.5 stroke-[3]" />
        </div>
      );
    }
    return <span className="font-semibold text-gray-900 dark:text-white text-[14px]">{val}</span>;
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white text-center tracking-tight mb-12">
        {t('detailedComparison')}
      </h2>

      {/* Comparison Table Wrap */}
      <div className="w-full overflow-hidden border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-xs bg-white dark:bg-neutral-900/40">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/80">
                <th className="p-5 text-sm font-bold text-gray-900 dark:text-white w-2/5">
                  {t('featureCol')}
                </th>
                <th className="p-5 text-sm font-bold text-gray-900 dark:text-white text-center w-1/5">
                  {t('starterTitle')}
                </th>
                <th className="p-5 text-sm font-bold text-gray-900 dark:text-white text-center w-1/5">
                  {t('proTitle')}
                </th>
                <th className="p-5 text-sm font-bold text-gray-900 dark:text-white text-center w-1/5">
                  {t('studioTitle')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50/40 dark:hover:bg-neutral-900/20 transition-colors"
                >
                  <td className="p-5 text-sm font-medium text-gray-700 dark:text-neutral-300">
                    {row.name}
                  </td>
                  <td className="p-5 text-center">
                    {renderValue(row.starter)}
                  </td>
                  <td className="p-5 text-center bg-brand/5 dark:bg-brand/10">
                    {renderValue(row.pro)}
                  </td>
                  <td className="p-5 text-center">
                    {renderValue(row.studio)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
