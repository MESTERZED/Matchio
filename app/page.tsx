import { Hero } from '@/components/home/Hero';
import { EcoBanner } from '@/components/home/EcoBanner';
import { Manifesto } from '@/components/home/Manifesto';
import { StatsSection } from '@/components/home/StatsSection';
import { ProductsGrid } from '@/components/home/ProductsGrid';
import RefillSection from '@/components/home/RefillSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { LiveCounters } from '@/components/home/LiveCounters';
import { Testimonial } from '@/components/home/Testimonial';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <EcoBanner />
      <Manifesto />
      <StatsSection />
      <ProductsGrid />
      <RefillSection />
      <BenefitsSection />
      <LiveCounters />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
