'use client';

import React from 'react';
import SchoolHero from './SchoolHero';
import AutomationSteps from './AutomationSteps';
import WhyChoose from './WhyChoose';
import QrSheets from './QrSheets';
import RevenueDifference from './RevenueDifference';

interface SchoolPhotographyPageProps {
  locale: string;
}

export default function SchoolPhotographyPage({ locale }: SchoolPhotographyPageProps) {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-blue-100/20 via-transparent to-transparent dark:from-blue-950/5 dark:bg-neutral-950/20 overflow-x-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-hero-grid opacity-50 dark:opacity-25 pointer-events-none" />

      <div className="relative">
        {/* Solution Hero Block */}
        <SchoolHero locale={locale} />

        {/* Complete End-to-End Automation steps */}
        <AutomationSteps locale={locale} />

        {/* Why Choose Benefits matrix */}
        <WhyChoose locale={locale} />

        {/* QR code sheets process explanation */}
        <QrSheets locale={locale} />

        {/* Revenue gains side-by-side comparison */}
        <RevenueDifference locale={locale} />
      </div>
    </div>
  );
}
