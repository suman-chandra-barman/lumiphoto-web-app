'use client';

import React from 'react';
import FeaturesGrid from './FeaturesGrid';
import BestFeaturesList from './BestFeaturesList';
import Contact from '@/features/landing/components/Contact';

interface AllFeaturesPageProps {
  locale: string;
}

export default function AllFeaturesPage({ locale }: AllFeaturesPageProps) {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-blue-100/20 via-transparent to-transparent dark:from-blue-950/5 dark:bg-neutral-950/20 overflow-x-hidden">
      <div className="relative pt-16 lg:pt-20">
        {/* Features Card Grid */}
        <FeaturesGrid locale={locale} />

        {/* Alternate Background Showcase List */}
        <BestFeaturesList />

        {/* Contact/Support Form section */}
        <Contact />
      </div>
    </div>
  );
}
