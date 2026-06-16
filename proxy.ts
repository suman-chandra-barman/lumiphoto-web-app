import createMiddleware from 'next-intl/middleware';

// এই ফাংশনটিই প্রক্সি হিসেবে সব রিকোয়েস্ট এবং ল্যাঙ্গুয়েজ হ্যান্ডেল করবে
export const proxy = createMiddleware({
  locales: ['en', 'ge'],
  defaultLocale: 'en'
});

// কোন কোন ইউআরএল-এ এই প্রক্সি কাজ করবে তার কনফিগারেশন
export const config = {
  matcher: ['/', '/(ge|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};

