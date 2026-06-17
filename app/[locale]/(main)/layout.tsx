import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/features/navigation/components/Navbar';
import Footer from '@/features/navigation/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function MainLayout({ children, params }: MainLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="flex flex-col min-h-screen">
        <Navbar locale={locale} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}