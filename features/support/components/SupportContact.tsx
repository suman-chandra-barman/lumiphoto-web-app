'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function SupportContact() {
  const t = useTranslations('Contact');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Support Form submitted:', form);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      {/* Small uppercase label */}
      <span className="text-[11px] font-bold tracking-[0.15em] text-brand dark:text-blue-400 uppercase mb-3 block">
        {t('badge')}
      </span>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
        {t('title')}
      </h2>

      {/* Subheading */}
      <p className="text-base text-gray-500 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
        {t('subtitle')}
      </p>

      {/* Form Container (Centered Form Card) */}
      <div className="max-w-xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-neutral-800/60 rounded-2xl p-8 text-left shadow-xs space-y-5"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            {t('formTitle')}
          </h3>

          {/* First + Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[13px] font-medium text-gray-700 dark:text-neutral-300">
                {t('firstName')}
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder={t('firstName')}
                className="w-full border border-gray-200 dark:border-neutral-800 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 dark:text-white bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[13px] font-medium text-gray-700 dark:text-neutral-300">
                {t('lastName')}
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder={t('lastName')}
                className="w-full border border-gray-200 dark:border-neutral-800 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 dark:text-white bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-gray-700 dark:text-neutral-300">
              {t('email')}
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('emailPlaceholder')}
              className="w-full border border-gray-200 dark:border-neutral-800 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 dark:text-white bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-gray-700 dark:text-neutral-300">
              {t('phone')}
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder={t('phonePlaceholder')}
              className="w-full border border-gray-200 dark:border-neutral-800 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 dark:text-white bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
            />
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-gray-700 dark:text-neutral-300">
              {t('subject')}
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder={t('subject')}
              className="w-full border border-gray-200 dark:border-neutral-800 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 dark:text-white bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              required
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="block text-[13px] font-medium text-gray-700 dark:text-neutral-300">
              {t('message')}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t('messagePlaceholder')}
              rows={4}
              className="w-full border border-gray-200 dark:border-neutral-800 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 dark:text-white bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition resize-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-brand-gradient hover:opacity-95 text-white font-semibold py-3 rounded-lg cursor-pointer transition-all duration-200 shadow-md shadow-brand/10 hover:shadow-brand/20 active:scale-[0.99] text-sm"
          >
            {t('send')}
          </button>
        </form>
      </div>
    </div>
  );
}
