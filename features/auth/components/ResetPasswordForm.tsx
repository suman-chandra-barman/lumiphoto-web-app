'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ResetPasswordSchema, ResetPasswordInput } from '../schemas';

interface ResetPasswordFormProps {
  locale: string;
}

export default function ResetPasswordForm({ locale }: ResetPasswordFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ResetPasswordInput) => {
    setIsSubmitting(true);
    try {
      // Simulate API reset password delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Password reset success:', data);
      
      // Redirect back to signin page
      router.push(`/${locale}/signin?reset=success`);
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
        Reset your password
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Type in your new password
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
        {/* New Password */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
            New Password
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400 select-none pointer-events-none">
              <Lock className="h-4.5 w-4.5" />
            </span>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password"
              {...register('password')}
              className={`h-11 pl-11 pr-11 bg-[#f0f4fa]/60 border-gray-200/80 rounded-lg text-gray-900 focus-visible:ring-brand/20 focus-visible:border-brand ${
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
            Re-Type Password
          </Label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400 select-none pointer-events-none">
              <Lock className="h-4.5 w-4.5" />
            </span>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Re-Type Password"
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

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 bg-brand hover:bg-brand/95 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm mt-2"
        >
          {isSubmitting ? 'Resetting Password...' : 'Reset password'}
        </Button>
      </form>
    </div>
  );
}
