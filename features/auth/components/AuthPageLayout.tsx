'use client';

import React from 'react';
import Image from 'next/image';

interface AuthPageLayoutProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function AuthPageLayout({
  imageSrc,
  imageAlt,
  children,
}: AuthPageLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full bg-white text-gray-900">
      {/* Left Column: Image (Hidden on Mobile) */}
      <div className="relative w-full h-full hidden md:block select-none overflow-hidden bg-neutral-100 border-r border-gray-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="50vw"
          className="object-cover object-center transition-all duration-700 hover:scale-102"
        />
        {/* Soft dark overlay to make it look premium */}
        <div className="absolute inset-0 bg-neutral-950/5 mix-blend-multiply" />
      </div>

      {/* Right Column: Form Content */}
      <div className="flex flex-col justify-center items-center w-full px-6 py-12 sm:px-12 md:px-16 lg:px-24 xl:px-32 bg-white overflow-y-auto">
        <div className="w-full max-w-[440px] flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
