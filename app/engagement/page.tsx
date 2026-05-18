'use client';
import Image from 'next/image';
import { basePath } from '@/lib/utils';
import { Reveal } from '@/components/animations/Reveal';

export default function EngagementPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-matcha-deep">
        <Image
          src={`${basePath}/images/products/09-focus-box-hero.png`}
          alt="Notre engagement environnemental"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        <div className="relative z-10 text-center text-cream px-6 max-w-4xl">
          <h1 className="font-display italic text-6xl md:text-7xl mb-6">
            Notre engagement
          </h1>
          <p className="text-xl md:text-2xl">
            Parce que le vrai luxe, c’est de respecter la planète.
          </p>
        </div>
      </section>

      {/* Image forte */}
      <section className="py-24 bg-cream">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden aspect-video">
            <Image
              src={`${basePath}/images/products/06-heritage-box-unboxing.png`}
              alt="Heritage Box et engagement"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}