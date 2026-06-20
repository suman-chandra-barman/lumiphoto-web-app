'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Contact() {
  const t = useTranslations('Contact');
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', form);
  };

  return (
    <section id="support" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Left: Form ── */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6">
            {/* Section Label */}
            <div className="space-y-3">
              <p className="text-[11px] font-bold tracking-[0.12em] text-brand uppercase">
                {t('badge')}
              </p>
              <h2 className="text-[26px] sm:text-[30px] font-extrabold text-gray-900 tracking-tight">
                {t('title')}
              </h2>
              <p className="text-[14px] text-gray-500">
                {t('subtitle')}
              </p>
            </div>

            {/* Form Card */}
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-xl p-7 space-y-5"
            >
              <h3 className="text-[18px] font-bold text-gray-900">
                {t('formTitle')}
              </h3>

              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-gray-700">
                    {t('firstName')}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder={t('firstName')}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-gray-700">
                    {t('lastName')}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder={t('lastName')}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-[13px] font-medium text-gray-700">
                  {t('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('emailPlaceholder')}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="block text-[13px] font-medium text-gray-700">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t('phonePlaceholder')}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="block text-[13px] font-medium text-gray-700">
                  {t('subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t('subject')}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-[13px] font-medium text-gray-700">
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('messagePlaceholder')}
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-brand-gradient hover:opacity-90 cursor-pointer text-white text-[14px] font-semibold py-3 rounded-lg transition-colors"
              >
                {t('send')}
              </button>
            </form>
          </div>

          {/* ── Right: Photographer Image ── */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 relative min-h-[500px] xl:min-h-[600px]">
            <div>
              <Image
                src="/contact.jpg"
                alt="Support team"
                fill
                className="object-contain object-bottom w-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
