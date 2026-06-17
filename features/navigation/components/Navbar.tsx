'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { NavCTAButton } from '@/components/common/NavCTAButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

// ─── SVG Flag Components ──────────────────────────────────────────────────────
const FlagUK = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-3.5 rounded-[2px]">
    <clipPath id="flag-uk-a"><path d="M0 0v30h60V0z" /></clipPath>
    <clipPath id="flag-uk-b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z" /></clipPath>
    <g clipPath="url(#flag-uk-a)">
      <path d="M0 0v30h60V0z" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30m0-30L0 30" clipPath="url(#flag-uk-b)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const FlagFR = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-3.5 rounded-[2px]">
    <rect width="3" height="2" fill="#ED2939" />
    <rect width="2" height="2" fill="#fff" />
    <rect width="1" height="2" fill="#002395" />
  </svg>
);

const FlagDE = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-5 h-3.5 rounded-[2px]">
    <rect width="5" height="3" fill="#FFCE00" />
    <rect width="5" height="2" fill="#DD0000" />
    <rect width="5" height="1" fill="#000" />
  </svg>
);

// ─── Config ───────────────────────────────────────────────────────────────────
const LANGUAGES = [
  { code: 'en', name: 'English', Flag: FlagUK },
  { code: 'fr', name: 'Français', Flag: FlagFR },
  { code: 'de', name: 'Deutsch', Flag: FlagDE },
] as const;

type Locale = (typeof LANGUAGES)[number]['code'];

const NAV_ITEMS = ['successStories', 'pricing', 'support'] as const;

const ADVANTAGES_DROPDOWN = [
  { href: '/all-features', labelKey: 'advantages_allFeatures_title', descKey: 'advantages_allFeatures_desc' },
  { href: '/school-photography', labelKey: 'advantages_schoolPhotography_title', descKey: 'advantages_schoolPhotography_desc' },
  { href: '/secure-galleries', labelKey: 'advantages_secureGalleries_title', descKey: 'advantages_secureGalleries_desc' },
  { href: '/ai-sorting', labelKey: 'advantages_aiSorting_title', descKey: 'advantages_aiSorting_desc' },
  { href: '/secure-payments', labelKey: 'advantages_securePayments_title', descKey: 'advantages_securePayments_desc' },
  { href: '/revenue-analytics', labelKey: 'advantages_revenueAnalytics_title', descKey: 'advantages_revenueAnalytics_desc' },
] as const;

// ─── Props ────────────────────────────────────────────────────────────────────
interface NavbarProps {
  locale: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = LANGUAGES.find(l => l.code === locale) ?? LANGUAGES[0];

  const handleLanguageChange = (newLocale: Locale) => {
    setLangOpen(false);
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = newLocale;
      router.push(segments.join('/'));
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* ── Logo ── */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <span className="text-[22px] font-bold tracking-tight text-gray-900 select-none">
              Lumiphoto
            </span>
          </Link>

          {/* ── Desktop Centre Nav ── */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
                <NavigationMenuItem value="advantages">
                  <NavigationMenuTrigger className="flex items-center text-[14px] font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer data-[popup-open]:bg-gray-100">
                    {t('advantages')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2 w-[340px] flex flex-col gap-1 bg-white rounded-xl shadow-xl border border-gray-100">
                    {ADVANTAGES_DROPDOWN.map(({ href, labelKey, descKey }) => (
                      <NavigationMenuLink
                        key={labelKey}
                        render={<Link href={href} />}
                        closeOnClick
                        className="group flex flex-col items-start text-left select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50/60 cursor-pointer focus:bg-blue-50/60"
                      >
                        <div className="text-[14px] font-bold text-gray-900 group-hover:text-brand transition-colors duration-150">
                          {t(labelKey)}
                        </div>
                        <p className="text-[12px] text-gray-500 mt-1 font-normal leading-normal">
                          {t(descKey)}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {NAV_ITEMS.map(item => (
                  <NavigationMenuItem key={item} value={item}>
                    <NavigationMenuLink
                      render={<Link href={`/${item}`} />}
                      closeOnClick
                      className="text-[14px] font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      {t(item)}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* ── Desktop Right Actions ── */}
          <div className="hidden lg:flex items-center gap-3">

            <Link
              href={`/${locale}/login`}
              className="text-[14px] font-medium text-gray-700 hover:text-gray-900 px-3 py-2 transition-colors whitespace-nowrap"
            >
              {t('photographerLogin')}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                id="lang-switcher"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen(v => !v)}
                className="flex items-center gap-1.5 border border-gray-300 hover:border-gray-400 rounded-md px-2.5 py-1.5 text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors bg-white cursor-pointer"
              >
                <currentLang.Flag />
                <span className="uppercase tracking-wide">{currentLang.code}</span>
                <svg
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <ul
                    role="listbox"
                    aria-labelledby="lang-switcher"
                    className="absolute right-0 top-full mt-1.5 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                  >
                    {LANGUAGES.map(lang => (
                      <li key={lang.code} role="option" aria-selected={locale === lang.code}>
                        <button
                          type="button"
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors cursor-pointer ${locale === lang.code ? 'text-brand font-semibold bg-blue-50' : 'text-gray-700'
                            }`}
                        >
                          <lang.Flag />
                          <span>{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* CTA — gradient shadcn button via NavCTAButton */}
            <NavCTAButton href={`/${locale}/trial`} variant="gradient">
              {t('startFreeTrial')}
            </NavCTAButton>
          </div>

          {/* ── Mobile: lang + hamburger ── */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(v => !v)}
                className="flex items-center gap-1.5 border border-gray-300 rounded-md px-2 py-1.5 text-xs font-medium text-gray-700 cursor-pointer"
              >
                <currentLang.Flag />
                <span className="uppercase">{currentLang.code}</span>
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <ul className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    {LANGUAGES.map(lang => (
                      <li key={lang.code}>
                        <button
                          type="button"
                          onClick={() => handleLanguageChange(lang.code)}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-left hover:bg-gray-50 cursor-pointer"
                        >
                          <lang.Flag />
                          <span>{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1"
          aria-label="Mobile navigation"
        >
          <Link
            href="#advantages"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            {t('advantages')}
          </Link>
          {NAV_ITEMS.map(item => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              {t(item)}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 space-y-2 mt-2">
            <Link
              href={`/${locale}/login`}
              onClick={() => setMobileOpen(false)}
              className="block text-center py-2.5 text-sm font-medium text-gray-600"
            >
              {t('photographerLogin')}
            </Link>
            <NavCTAButton
              href={`/${locale}#trial`}
              variant="gradient"
              className="w-full justify-center"
              onClick={() => setMobileOpen(false)}
            >
              {t('startFreeTrial')}
            </NavCTAButton>
          </div>
        </nav>
      )}
    </header>
  );
}
