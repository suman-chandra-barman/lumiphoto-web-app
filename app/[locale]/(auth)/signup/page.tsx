import React from 'react';
import AuthPageLayout from '@/features/auth/components/AuthPageLayout';
import SignupForm from '@/features/auth/components/SignupForm';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function SignupPage({ params }: PageProps) {
  const { locale } = await params;
  
  return (
    <AuthPageLayout
      imageSrc="/auth/signup.jpg"
      imageAlt="Children sitting together outdoors"
    >
      <SignupForm locale={locale} />
    </AuthPageLayout>
  );
}
