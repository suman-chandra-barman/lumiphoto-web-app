'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// ─── Config ───────────────────────────────────────────────────────────────────
const FEATURE_LINKS = ['f1', 'f2', 'f3', 'f4', 'f5'] as const;
const COMPANY_LINKS = ['c1', 'c2', 'c3', 'c4', 'c5'] as const;
const LEGAL_LINKS   = ['l1', 'l2', 'l3', 'l4'] as const;

// ─── Props ────────────────────────────────────────────────────────────────────
interface FooterProps {
  locale: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('Footer');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up newsletter subscription API
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-100">

          {/* Logo + Description + Newsletter */}
          <div className="md:col-span-1 space-y-5">
            <Link href={`/${locale}`}>
              <span className="text-[20px] font-extrabold text-gray-900 tracking-tight">
                Lumiphoto
              </span>
            </Link>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              {t('desc')}
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <p className="text-[13px] font-semibold text-gray-700">
                {t('newsletter')}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  required
                  className="flex-1 min-w-0 border border-gray-200 rounded-lg px-3 py-2 text-[12px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                  type="submit"
                  className="bg-brand-gradient hover:opacity-90 text-white text-[12px] font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  {t('subscribe')}
                </button>
              </div>
            </form>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-[13px] font-bold text-gray-900 mb-5">
              {t('featuresTitle')}
            </h3>
            <ul className="space-y-3">
              {FEATURE_LINKS.map(key => (
                <li key={key}>
                  <Link
                    href={`#${key}`}
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[13px] font-bold text-gray-900 mb-5">
              {t('companyTitle')}
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(key => (
                <li key={key}>
                  <Link
                    href={`#${key}`}
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h3 className="text-[13px] font-bold text-gray-900 mb-5">
              {t('legalTitle')}
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map(key => (
                <li key={key}>
                  <Link
                    href={`#${key}`}
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom copyright ── */}
        <div className="pt-6 text-center">
          <p className="text-[13px] text-gray-400">
            {t('copyright')}
          </p>
        </div>

      </div>
    </footer>
  );
}
