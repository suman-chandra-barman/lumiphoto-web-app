'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AtSign, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SigninSchema, SigninInput } from '../schemas';

interface SigninFormProps {
  locale: string;
}

export default function SigninForm({ locale }: SigninFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninInput>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SigninInput) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Simulate API signin delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Signin success:', data);
      // Redirect to the main homepage
      router.push(`/${locale}`);
    } catch (error) {
      setSubmitError('Invalid email or password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full text-center sm:text-left">
      {/* Header */}
      <h1 className="text-[28px] font-bold text-gray-900 tracking-tight text-center mb-1">
        Sign in
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Please enter your details to access your account
      </p>

      {submitError && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center border border-red-100">
          {submitError}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
        {/* Email */}
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
              placeholder="jondoe@gmail.com"
              {...register('email')}
              className={`h-11 pl-11 pr-4 bg-[#f0f4fa]/60 border-gray-200/80 rounded-lg text-gray-900 focus-visible:ring-brand/20 focus-visible:border-brand ${
                errors.email ? 'border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive' : ''
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-destructive mt-1 font-medium">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Password
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400 select-none pointer-events-none">
              <Lock className="h-4.5 w-4.5" />
            </span>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              {...register('password')}
              className={`h-11 pl-11 pr-11 bg-white border-gray-200/80 rounded-lg text-gray-900 focus-visible:ring-brand/20 focus-visible:border-brand ${
                errors.password ? 'border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive' : ''
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-destructive mt-1 font-medium">{errors.password.message}</p>
          )}
        </div>

        {/* Forgot password */}
        <div className="flex justify-end pt-1">
          <Link
            href={`/${locale}/forgot-password`}
            className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors tracking-wide"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 bg-brand hover:bg-brand/95 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
        >
          {isSubmitting ? (
            <span className="inline-block animate-pulse">Signing in...</span>
          ) : (
            <>
              Sign In <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>

        {/* Create Account Link */}
        <div className="text-center text-xs text-gray-600 pt-3">
          Don't have an account?{' '}
          <Link
            href={`/${locale}/signup`}
            className="font-bold underline text-gray-900 hover:text-brand transition-colors"
          >
            Create Account
          </Link>
        </div>

        {/* Back to Homepage */}
        <div className="text-center pt-6">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="h-3 w-3" /> Back to homepage
          </Link>
        </div>
      </form>
    </div>
  );
}
