'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqSectionProps {
  locale: string;
}

export default function FaqSection({ locale }: FaqSectionProps) {
  const t = useTranslations('Pricing');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') },
    { question: t('q5'), answer: t('a5') },
    { question: t('q6'), answer: t('a6') },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-24 px-4 sm:px-6">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white text-center tracking-tight mb-10">
        {t('faqTitle')}
      </h2>

      {/* FAQ Items */}
      <div className="border-t border-gray-100 dark:border-neutral-800 divide-y divide-gray-100 dark:divide-neutral-800">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div key={idx} className="py-4">
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center text-left py-2 font-semibold text-gray-800 dark:text-neutral-200 hover:text-brand dark:hover:text-blue-400 transition-colors duration-150 cursor-pointer select-none"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] pr-4 leading-snug">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0",
                    isOpen && "rotate-180 text-brand dark:text-blue-400"
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-200 ease-in-out overflow-hidden text-sm text-gray-500 dark:text-neutral-400 leading-relaxed",
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-2 pb-2" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-[14px]">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
