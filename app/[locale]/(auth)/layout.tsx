import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface AuthLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function AuthLayout({ children, params }: AuthLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="min-h-screen flex flex-col justify-between">
        <main className="grow">{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
