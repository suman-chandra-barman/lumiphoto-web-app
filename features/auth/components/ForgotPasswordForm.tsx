'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AtSign, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ForgotPasswordSchema, ForgotPasswordInput } from '../schemas';

interface ForgotPasswordFormProps {
  locale: string;
}

export default function ForgotPasswordForm({ locale }: ForgotPasswordFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordInput) => {
    setIsSubmitting(true);
    try {
      // Simulate API forgot password delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Forgot password request email:', data.email);
      
      // Redirect to Verify OTP screen, passing the email and flow via search params
      router.push(`/${locale}/verify-otp?email=${encodeURIComponent(data.email)}&flow=reset-password`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full text-center sm:text-left">
      {/* Header */}
      <h1 className="text-[28px] font-bold text-gray-900 tracking-tight text-center mb-2">
        Forgot password?
      </h1>
      <p className="text-sm text-gray-500 text-center leading-relaxed mb-8">
        If you forgot your password, well, then we'll email you instructions to reset your password
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
        {/* Email Address */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Email Address
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400 select-none pointer-events-none">
              <AtSign className="h-4.5 w-4.5" />
            </span>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register('email')}
              className={`h-11 pl-11 bg-white border-gray-200/80 rounded-lg text-gray-900 focus-visible:ring-brand/20 focus-visible:border-brand ${
                errors.email ? 'border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive' : ''
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-destructive mt-1 font-medium">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 bg-brand hover:bg-brand/95 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
        >
          {isSubmitting ? (
            'Submitting...'
          ) : (
            <>
              Submit <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>

        {/* Return to Login */}
        <div className="text-center pt-3">
          <span className="text-xs text-gray-500 font-medium">Return to </span>
          <Link
            href={`/${locale}/signin`}
            className="text-xs font-bold underline text-gray-900 hover:text-brand transition-colors"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
