'use client';

import React from 'react';
import SecureHero from './SecureHero';
import SecurityFeaturesGrid from './SecurityFeaturesGrid';
import GDPRComplianceDetails from './GDPRComplianceDetails';
import SignedUrlExplanation from './SignedUrlExplanation';
import Certifications from './Certifications';
import AntiTheftMeasures from './AntiTheftMeasures';
import SecureCTA from './SecureCTA';

interface SecureGalleriesPageProps {
  locale: string;
}

export default function SecureGalleriesPage({ locale }: SecureGalleriesPageProps) {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-blue-100/20 via-transparent to-transparent dark:from-blue-950/5 dark:bg-neutral-950/20 overflow-x-hidden">
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-hero-grid opacity-50 dark:opacity-25 pointer-events-none" />

      <div className="relative">
        {/* Hero Banner Section */}
        <SecureHero />

        {/* 6-Layer Security Grid */}
        <SecurityFeaturesGrid />

        {/* European Privacy Standards & Checklist */}
        <GDPRComplianceDetails />

        {/* Signed URL Flow Steps */}
        <SignedUrlExplanation />

        {/* Certifications Check-circle Grid */}
        <Certifications />

        {/* Screenshot / Anti-theft Details */}
        <AntiTheftMeasures />

        {/* Call to Action Banner */}
        <SecureCTA locale={locale} />
      </div>

    </div>
  );
}
