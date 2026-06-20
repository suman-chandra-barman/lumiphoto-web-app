import React from 'react';
import AuthPageLayout from '@/features/auth/components/AuthPageLayout';
import SigninForm from '@/features/auth/components/SigninForm';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function SigninPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <AuthPageLayout
      imageSrc="/auth/signin.jpg"
      imageAlt="Professional photographer holding a camera"
    >
      <SigninForm locale={locale} />
    </AuthPageLayout>
  );
}
