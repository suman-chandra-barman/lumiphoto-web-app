'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, AtSign, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignupSchema, SignupInput } from '../schemas';

interface SignupFormProps {
  locale: string;
}

export default function SignupForm({ locale }: SignupFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignupInput) => {
    setIsSubmitting(true);
    try {
      // Simulate API registration delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Signup success:', data);
      
      // Redirect to Verify OTP screen, passing the email and flow via search params
      router.push(`/${locale}/verify-otp?email=${encodeURIComponent(data.email)}&flow=signup`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full text-center sm:text-left">
      {/* Header */}
      <h1 className="text-[28px] font-bold text-gray-900 tracking-tight text-center mb-1">
        Create your account
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Sign up for free to access to in any of our products
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
        {/* Name Fields (First Name / Last Name Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              First Name
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-gray-400 select-none pointer-events-none">
                <User className="h-4.5 w-4.5" />
              </span>
              <Input
                id="firstName"
                placeholder="John"
                {...register('firstName')}
                className={`h-11 pl-11 bg-white border-gray-200/80 rounded-lg text-gray-900 focus-visible:ring-brand/20 focus-visible:border-brand ${
                  errors.firstName ? 'border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive' : ''
                }`}
              />
            </div>
            {errors.firstName && (
              <p className="text-xs text-destructive mt-1 font-medium">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Last Name
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-gray-400 select-none pointer-events-none">
                <User className="h-4.5 w-4.5" />
              </span>
              <Input
                id="lastName"
                placeholder="Doe"
                {...register('lastName')}
                className={`h-11 pl-11 bg-white border-gray-200/80 rounded-lg text-gray-900 focus-visible:ring-brand/20 focus-visible:border-brand ${
                  errors.lastName ? 'border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive' : ''
                }`}
              />
            </div>
            {errors.lastName && (
              <p className="text-xs text-destructive mt-1 font-medium">{errors.lastName.message}</p>
            )}
          </div>
        </div>

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
              placeholder="jondoe@gmail.com"
              {...register('email')}
              className={`h-11 pl-11 bg-[#f0f4fa]/60 border-gray-200/80 rounded-lg text-gray-900 focus-visible:ring-brand/20 focus-visible:border-brand ${
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
              placeholder="Password"
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

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Confirm Password
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400 select-none pointer-events-none">
              <Lock className="h-4.5 w-4.5" />
            </span>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              {...register('confirmPassword')}
              className={`h-11 pl-11 pr-11 bg-white border-gray-200/80 rounded-lg text-gray-900 focus-visible:ring-brand/20 focus-visible:border-brand ${
                errors.confirmPassword ? 'border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive' : ''
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3.5 text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              {showConfirmPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-destructive mt-1 font-medium">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Policy Terms */}
        <div className="text-[12px] text-gray-500 leading-relaxed pt-1">
          By creating an account, you agree to our{' '}
          <Link href={`/${locale}/terms`} className="underline font-medium text-gray-700 hover:text-brand transition-colors">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href={`/${locale}/privacy`} className="underline font-medium text-gray-700 hover:text-brand transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 bg-brand hover:bg-brand/95 text-white font-medium rounded-lg shadow-sm transition-colors cursor-pointer text-sm mt-2"
        >
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </Button>

        {/* Already have an account link */}
        <div className="text-center text-xs text-gray-600 pt-3">
          Already have an account?{' '}
          <Link
            href={`/${locale}/signin`}
            className="font-bold text-brand hover:underline transition-colors"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
