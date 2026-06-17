'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Minus, Plus, Info } from 'lucide-react';

interface RoiCalculatorProps {
  locale: string;
}

export default function RoiCalculator({ locale }: RoiCalculatorProps) {
  const t = useTranslations('Pricing');

  const [events, setEvents] = useState<number>(10);
  const [orderValue, setOrderValue] = useState<number>(45);
  const [conversion, setConversion] = useState<number>(45);

  // Baseline is 10 orders per event
  // Additional revenue = Events * 10 orders * OrderValue * ConversionRateIncrease
  const monthlyRevenue = Math.round(events * 10 * orderValue * (conversion / 100));
  const annualRevenue = monthlyRevenue * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat(locale === 'de' ? 'de-DE' : locale === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formattedAnnual = formatCurrency(annualRevenue);

  return (
    <div className="w-full max-w-5xl mx-auto mt-24 px-4 sm:px-6">
      <div className="bg-[#f0f6fc] dark:bg-neutral-900/40 border border-blue-100/50 dark:border-neutral-800 rounded-3xl p-8 md:p-10 shadow-xs relative overflow-hidden">
        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('roiTitle')}
          </h2>
          <p className="text-sm text-gray-500 dark:text-neutral-400 mt-2 font-normal">
            {t('roiSubtitle')}
          </p>
        </div>

        {/* Inputs & Outputs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Inputs (Left) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Events Per Month */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-gray-800 dark:text-neutral-200">
                <span>{t('eventsPerMonth')}</span>
                <span className="text-brand font-bold text-lg">{events}</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setEvents((prev) => Math.max(1, prev - 1))}
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 cursor-pointer shadow-xs active:scale-95 transition-transform"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={events}
                  onChange={(e) => setEvents(parseInt(e.target.value))}
                  className="flex-grow h-2 bg-gray-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <button
                  type="button"
                  onClick={() => setEvents((prev) => Math.min(50, prev + 1))}
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 cursor-pointer shadow-xs active:scale-95 transition-transform"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Average Order Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-gray-800 dark:text-neutral-200">
                <span>{t('avgOrderValue')}</span>
                <span className="text-brand font-bold text-lg">€{orderValue}</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setOrderValue((prev) => Math.max(10, prev - 5))}
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 cursor-pointer shadow-xs active:scale-95 transition-transform"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={orderValue}
                  onChange={(e) => setOrderValue(parseInt(e.target.value))}
                  className="flex-grow h-2 bg-gray-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <button
                  type="button"
                  onClick={() => setOrderValue((prev) => Math.min(200, prev + 5))}
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 cursor-pointer shadow-xs active:scale-95 transition-transform"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversion Rate Increase */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-gray-800 dark:text-neutral-200">
                <span>{t('convRateIncrease')}</span>
                <span className="text-brand font-bold text-lg">+{conversion}%</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setConversion((prev) => Math.max(10, prev - 5))}
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 cursor-pointer shadow-xs active:scale-95 transition-transform"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={conversion}
                  onChange={(e) => setConversion(parseInt(e.target.value))}
                  className="flex-grow h-2 bg-gray-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <button
                  type="button"
                  onClick={() => setConversion((prev) => Math.min(100, prev + 5))}
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 cursor-pointer shadow-xs active:scale-95 transition-transform"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            
          </div>

          {/* Results Summary (Right Card) */}
          <div className="lg:col-span-5 bg-white dark:bg-neutral-950 p-6 md:p-8 rounded-2xl border border-blue-50 dark:border-neutral-800 shadow-md flex flex-col justify-center items-center text-center">
            <p className="text-xs uppercase font-extrabold tracking-wider text-gray-400 dark:text-neutral-500 mb-2">
              {t('addMonthlyRevenue')}
            </p>
            <p className="text-4xl sm:text-5xl font-black text-brand tracking-tight">
              {formatCurrency(monthlyRevenue)}
            </p>
            <div className="w-full border-t border-gray-100 dark:border-neutral-900 my-5" />
            <div className="flex items-start gap-2 text-left justify-center text-xs text-gray-500 dark:text-neutral-400 leading-relaxed max-w-[280px]">
              <Info className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
              <p>
                {t('roiDescription', { amount: formattedAnnual })}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
