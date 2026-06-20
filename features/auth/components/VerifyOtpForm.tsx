'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import { VerifyOtpSchema, VerifyOtpInput } from '../schemas';

interface VerifyOtpFormProps {
  locale: string;
  email?: string;
  flow?: string;
}

export default function VerifyOtpForm({ locale, email, flow }: VerifyOtpFormProps) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(599); // 09:59 is 599 seconds
  const [isSubmitting, setIsSubmitting] = useState(false);

  const displayEmail = email || 'doe@example.com';
  
  // Mask email as ******doe@example.com
  const getMaskedEmail = (fullEmail: string) => {
    const parts = fullEmail.split('@');
    if (parts.length !== 2) return '******doe@example.com';
    const name = parts[0];
    const domain = parts[1];
    if (name.length <= 3) {
      return `******${name}@${domain}`;
    }
    return `******${name.slice(-3)}@${domain}`;
  };

  const maskedEmail = getMaskedEmail(displayEmail);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time to MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResend = () => {
    // Reset timer to 09:59
    setTimeLeft(599);
    console.log('Resending OTP to:', displayEmail);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyOtpInput>({
    resolver: zodResolver(VerifyOtpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const onSubmit = async (data: VerifyOtpInput) => {
    setIsSubmitting(true);
    try {
      // Simulate API OTP verification delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('OTP verification success:', data.otp);
      
      if (flow === 'reset-password') {
        // Go to reset password page
        router.push(`/${locale}/reset-password`);
      } else {
        // Registration flow or other, complete login/registration and go to home
        router.push(`/${locale}`);
      }
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
        Email OTP Verification
      </h1>
      <p className="text-sm text-gray-500 text-center leading-relaxed mb-8">
        OTP sent to your Email Address ending <span className="font-medium text-gray-700">{maskedEmail}</span>
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left flex flex-col items-center">
        {/* OTP Input Grid */}
        <div className="w-full flex flex-col items-center gap-2">
          <Label className="text-xs font-semibold text-gray-700 uppercase tracking-wider self-start sm:self-center mb-1">
            Verification Code
          </Label>
          <Controller
            control={control}
            name="otp"
            render={({ field }) => (
              <InputOTP
                maxLength={4}
                value={field.value}
                onChange={field.onChange}
                containerClassName="flex gap-4 justify-center items-center"
              >
                {/* 4 separate spaced out slots */}
                <InputOTPGroup className="shadow-none">
                  <InputOTPSlot
                    index={0}
                    className="w-14 h-14 border border-gray-200 rounded-lg text-[22px] font-bold text-gray-900 bg-white data-[active=true]:border-gray-950 data-[active=true]:ring-0 first:rounded-lg first:border-l"
                  />
                </InputOTPGroup>
                <InputOTPGroup className="shadow-none">
                  <InputOTPSlot
                    index={1}
                    className="w-14 h-14 border border-gray-200 rounded-lg text-[22px] font-bold text-gray-900 bg-white data-[active=true]:border-gray-950 data-[active=true]:ring-0 first:rounded-lg first:border-l"
                  />
                </InputOTPGroup>
                <InputOTPGroup className="shadow-none">
                  <InputOTPSlot
                    index={2}
                    className="w-14 h-14 border border-gray-200 rounded-lg text-[22px] font-bold text-gray-900 bg-white data-[active=true]:border-gray-950 data-[active=true]:ring-0 first:rounded-lg first:border-l"
                  />
                </InputOTPGroup>
                <InputOTPGroup className="shadow-none">
                  <InputOTPSlot
                    index={3}
                    className="w-14 h-14 border border-gray-200 rounded-lg text-[22px] font-bold text-gray-900 bg-white data-[active=true]:border-gray-950 data-[active=true]:ring-0 first:rounded-lg first:border-l"
                  />
                </InputOTPGroup>
              </InputOTP>
            )}
          />
          {errors.otp && (
            <p className="text-xs text-destructive mt-1 font-medium">{errors.otp.message}</p>
          )}
        </div>

        {/* Timer Badge (Mockup Design) */}
        <div className="flex justify-center w-full pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-[11px] font-bold text-red-500 rounded-full border border-red-100 uppercase tracking-wider select-none animate-pulse">
            <Clock className="h-3 w-3" /> {formatTime(timeLeft)} s
          </div>
        </div>

        {/* Resend Code Prompt */}
        <div className="text-center text-xs text-gray-600 w-full">
          Didn't get the OTP?{' '}
          <button
            type="button"
            onClick={handleResend}
            className="font-bold text-brand hover:underline cursor-pointer transition-colors"
          >
            Resend OTP
          </button>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 bg-brand hover:bg-brand/95 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
        >
          {isSubmitting ? (
            'Verifying...'
          ) : (
            <>
              Verify & proceed <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>

        {/* Return to Login */}
        <div className="text-center w-full pt-2">
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
