import React from 'react';
import AuthPageLayout from '@/features/auth/components/AuthPageLayout';
import ResetPasswordForm from '@/features/auth/components/ResetPasswordForm';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ResetPasswordPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <AuthPageLayout
      imageSrc="/auth/reset-password.jpg"
      imageAlt="Smiling woman holding a professional camera close-up"
    >
      <ResetPasswordForm locale={locale} />
    </AuthPageLayout>
  );
}
