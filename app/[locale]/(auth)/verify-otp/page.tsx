import React from 'react';
import AuthPageLayout from '@/features/auth/components/AuthPageLayout';
import VerifyOtpForm from '@/features/auth/components/VerifyOtpForm';

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ email?: string; flow?: string }>;
}

export default async function VerifyOtpPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { email, flow } = await searchParams;

  return (
    <AuthPageLayout
      imageSrc="/auth/verify-otp.jpg"
      imageAlt="Girl holding a vintage camera"
    >
      <VerifyOtpForm locale={locale} email={email} flow={flow} />
    </AuthPageLayout>
  );
}
