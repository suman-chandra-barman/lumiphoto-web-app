'use client';

import React from 'react';
import SupportChannels from './SupportChannels';
import SupportContact from './SupportContact';

interface SupportPageProps {
  locale: string;
}

export default function SupportPage({ locale }: SupportPageProps) {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-blue-100/20 via-transparent to-transparent dark:from-blue-950/5 dark:bg-neutral-950/20 overflow-x-hidden">
      <div className="relative pt-16 lg:pt-20 space-y-12 sm:space-y-16">
        {/* Support Channels (Email, Phone, Visit Cards) */}
        <SupportChannels />

        {/* Separator / visual transition */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="border-t border-gray-200/60 dark:border-neutral-800/60" />
        </div>

        {/* Contact Form Section */}
        <SupportContact />
      </div>
    </div>
  );
}
