import * as React from 'react';
import Link, { type LinkProps } from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { type VariantProps } from 'class-variance-authority';

type NavCTAButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

/**
 * A shadcn/ui-styled CTA button rendered as a Next.js <Link>.
 *
 * NOTE: We intentionally skip the shadcn `size` variant here because
 * its fixed `h-*` utility conflicts with padding-driven height on <a>
 * elements. Height is controlled exclusively via `py-2` to align with
 * the navbar's language switcher and login link.
 */
export function NavCTAButton({
  className,
  variant = 'gradient',
  // size is accepted for API compatibility but not forwarded to buttonVariants
  size: _size,
  children,
  ...props
}: NavCTAButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        // Apply variant styles only — no size → no fixed h-* constraint
        buttonVariants({ variant }),
        // Explicit sizing: matches the ~34px height of the lang-switcher
        'h-auto px-5 py-2 text-[14px] font-semibold leading-5',
        className,
      )}
    >
      {children}
    </Link>
  );
}

