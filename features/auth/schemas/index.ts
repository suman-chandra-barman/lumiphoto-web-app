import { z } from 'zod';

export const SignupSchema = z
  .object({
    firstName: z.string().trim().min(1, { message: 'First name is required' }),
    lastName: z.string().trim().min(1, { message: 'Last name is required' }),
    email: z
      .string()
      .trim()
      .min(1, { message: 'Email address is required' })
      .email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const SigninSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' }),
});

export const VerifyOtpSchema = z.object({
  otp: z
    .string()
    .length(4, { message: 'OTP must be exactly 4 digits' })
    .regex(/^\d+$/, { message: 'OTP must contain numbers only' }),
});

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignupInput = z.infer<typeof SignupSchema>;
export type SigninInput = z.infer<typeof SigninSchema>;
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;
export type VerifyOtpInput = z.infer<typeof VerifyOtpSchema>;
export type ResetPasswordInput = z.infer<typeof ResetPasswordSchema>;
