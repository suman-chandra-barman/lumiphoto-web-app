import React from 'react';
import AuthPageLayout from '@/features/auth/components/AuthPageLayout';
import ForgotPasswordForm from '@/features/auth/components/ForgotPasswordForm';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ForgotPasswordPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <AuthPageLayout
      imageSrc="/auth/forgot-password.jpg"
      imageAlt="Man in suit holding vintage camera and smiling"
    >
      <ForgotPasswordForm locale={locale} />
    </AuthPageLayout>
  );
}
