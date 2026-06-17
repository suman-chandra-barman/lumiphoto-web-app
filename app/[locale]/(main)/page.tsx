import Hero from '@/features/landing/components/Hero';
import Stats from '@/features/landing/components/Stats';
import PainPoints from '@/features/landing/components/PainPoints';
import Steps from '@/features/landing/components/Steps';
import Solution from '@/features/landing/components/Solution';
import Security from '@/features/landing/components/Security';
import Features from '@/features/landing/components/Features';
import Revenue from '@/features/landing/components/Revenue';
import Testimonials from '@/features/landing/components/Testimonials';
import CTA from '@/features/landing/components/CTA';
import Contact from '@/features/landing/components/Contact';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <PainPoints />
      <Steps />
      <Solution />
      <Security />
      <Features />
      <Revenue />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}