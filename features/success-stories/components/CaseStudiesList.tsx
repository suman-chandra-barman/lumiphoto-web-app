'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { TrendingUp, Clock, Users, Shield, UserCheck, Star, Award, Check } from 'lucide-react';

interface CaseStudiesListProps {
  locale: string;
}

export default function CaseStudiesList({ locale }: CaseStudiesListProps) {
  const t = useTranslations('SuccessStories');

  const studies = [
    {
      id: 'mSchmidt',
      title: t('mSchmidtTitle'),
      sub: t('mSchmidtSub'),
      quote: t('mSchmidtQuote'),
      bullets: [
        t('mSchmidtBullet1'),
        t('mSchmidtBullet2'),
        t('mSchmidtBullet3'),
        t('mSchmidtBullet4'),
      ],
      metrics: [
        { icon: TrendingUp, val: t('mSchmidtMetric1Value'), label: t('mSchmidtMetric1Label') },
        { icon: Clock, val: t('mSchmidtMetric2Value'), label: t('mSchmidtMetric2Label') },
        { icon: Users, val: t('mSchmidtMetric3Value'), label: t('mSchmidtMetric3Label') },
      ],
      imageLeft: true,
    },
    {
      id: 'aMuller',
      title: t('aMullerTitle'),
      sub: t('aMullerSub'),
      quote: t('aMullerQuote'),
      bullets: [
        t('aMullerBullet1'),
        t('aMullerBullet2'),
        t('aMullerBullet3'),
        t('aMullerBullet4'),
      ],
      metrics: [
        { icon: UserCheck, val: t('aMullerMetric1Value'), label: t('aMullerMetric1Label') },
        { icon: TrendingUp, val: t('aMullerMetric2Value'), label: t('aMullerMetric2Label') },
        { icon: Shield, val: t('aMullerMetric3Value'), label: t('aMullerMetric3Label') },
      ],
      imageLeft: false,
    },
    {
      id: 'tWeber',
      title: t('tWeberTitle'),
      sub: t('tWeberSub'),
      quote: t('tWeberQuote'),
      bullets: [
        t('tWeberBullet1'),
        t('tWeberBullet2'),
        t('tWeberBullet3'),
        t('tWeberBullet4'),
      ],
      metrics: [
        { icon: Users, val: t('tWeberMetric1Value'), label: t('tWeberMetric1Label') },
        { icon: Clock, val: t('tWeberMetric2Value'), label: t('tWeberMetric2Label') },
        { icon: TrendingUp, val: t('tWeberMetric3Value'), label: t('tWeberMetric3Label') },
      ],
      imageLeft: true,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20 lg:space-y-32">
      {studies.map((study) => (
        <div
          key={study.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
        >
          {/* Image Block */}
          <div
            className={`lg:col-span-6 relative h-[280px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-neutral-800 ${
              study.imageLeft ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <Image
              src="/success_stories_studio.png"
              alt={study.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content Block */}
          <div
            className={`lg:col-span-6 space-y-6 text-left ${
              study.imageLeft ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {study.title}
              </h2>
              <p className="text-xs font-semibold text-gray-400 dark:text-neutral-500 tracking-wide uppercase mt-1">
                {study.sub}
              </p>
            </div>

            {/* Left Bordered Quote */}
            <div className="border-l-4 border-brand pl-4">
              <blockquote className="text-[14px] sm:text-[15px] italic text-gray-600 dark:text-neutral-300 font-medium leading-relaxed">
                {study.quote}
              </blockquote>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              {study.metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 dark:bg-neutral-900/60 border border-gray-100 dark:border-neutral-800/80 rounded-xl p-3 sm:p-4 text-center space-y-1 hover:shadow-xs transition duration-200"
                  >
                    <Icon className="w-4 h-4 text-brand dark:text-blue-400 mx-auto" />
                    <div className="text-[15px] sm:text-[16px] font-extrabold text-brand dark:text-blue-400 tracking-tight">
                      {m.val}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Results Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                Key Results:
              </h4>
              <ul className="space-y-2.5">
                {study.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-500 dark:text-neutral-400 font-normal">
                    <Check className="w-4 h-4 text-brand dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
