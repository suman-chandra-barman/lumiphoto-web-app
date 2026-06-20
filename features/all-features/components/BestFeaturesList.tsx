'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function BestFeaturesList() {
  const t = useTranslations('AllFeatures');

  const items = [
    {
      num: '01',
      title: t('detail1Title'),
      desc: t('detail1Desc'),
      img: '/features_school_photography.jpg',
    },
    {
      num: '02',
      title: t('detail2Title'),
      desc: t('detail2Desc'),
      img: '/features_secure_galleries.jpg',
    },
    {
      num: '03',
      title: t('detail3Title'),
      desc: t('detail3Desc'),
      img: '/features_ai_sorting.jpg',
    },
    {
      num: '04',
      title: t('detail4Title'),
      desc: t('detail4Desc'),
      img: '/features_secure_payments.jpg',
    },
    {
      num: '05',
      title: t('detail5Title'),
      desc: t('detail5Desc'),
      img: '/features_revenue_analytics.jpg',
    },
    {
      num: '06',
      title: t('detail6Title'),
      desc: t('detail6Desc'),
      img: '/features_premium_print.png',
    },
  ];

  return (
    <div className="w-full">
      {/* ── Dark Header + Item 01 Section ── */}
      <section className="bg-neutral-950 dark:bg-black pt-20 pb-28 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('bestTitle')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
            {t('bestSubtitle')}
          </p>
        </div>

        {/* Item 01 Card (Odd: Text left, Image right on desktop) */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[320px] md:min-h-[400px] lg:min-h-[460px]">
            {/* Left Column: Text content */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center text-left">
              <span className="text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
                {items[0].num}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                {items[0].title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 dark:text-neutral-400 leading-relaxed font-normal">
                {items[0].desc}
              </p>
            </div>
            {/* Right Column: Image */}
            <div className="relative min-h-[280px] md:min-h-full">
              <Image
                src={items[0].img}
                alt={items[0].title}
                fill
                className="object-cover rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Light Showcase Section for Items 02 to 06 ── */}
      <section className="bg-slate-50 dark:bg-neutral-950/40 py-20 px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {items.slice(1).map((item) => {
            return (
              <div
                key={item.num}
                className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[310px] md:min-h-[380px] lg:min-h-[430px]">
                  {/* Left Column: Text content */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center text-left">
                    <span className="text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
                      {item.num}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-neutral-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  {/* Right Column: Image */}
                  <div className="relative min-h-[280px] md:min-h-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
