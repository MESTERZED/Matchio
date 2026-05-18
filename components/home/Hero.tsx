'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax au scroll : l'image descend de 80px et scale jusqu'à 1.08
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-matcha-deep"
      aria-label="Le matcha qui pense avec vous"
    >
      {/* IMAGE HERO en parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/images/products/hero-heritage-box.png"
          alt="Matchio Heritage Box · coffret cérémonial ouvert avec bol de matcha, chasen et chashaku"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[80%_center] md:object-right"
        />

        {/* Overlay desktop : sombre à gauche → transparent à droite */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              'linear-gradient(to right, rgba(14,59,46,1) 0%, rgba(14,59,46,0.95) 25%, rgba(14,59,46,0.6) 45%, rgba(14,59,46,0) 65%)',
          }}
        />

        {/* Overlay mobile : sombre du haut vers le bas */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, rgba(14,59,46,0.5) 0%, rgba(14,59,46,0.85) 55%, rgba(14,59,46,0.98) 100%)',
          }}
        />
      </motion.div>

      {/* CONTENU TEXTUEL */}
      <div className="relative z-10 w-full container-wide py-32 md:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-clay text-xs lg:text-sm tracking-[0.22em] uppercase font-semibold mb-8 opacity-90"
          >
            Matcha cérémonial · Nootropiques · Made in France
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display italic text-cream leading-[1.05] tracking-[-0.015em] mb-8"
          >
            <span className="block text-[clamp(3.5rem,8vw,7.5rem)]">Le matcha</span>
            <span className="block text-[clamp(3.5rem,8vw,7.5rem)]">qui pense</span>
            <span className="block text-[clamp(3.5rem,8vw,7.5rem)] text-matcha-soft">
              avec vous.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-matcha-soft text-lg lg:text-xl max-w-xl leading-relaxed mb-12"
          >
            Trois heures de clarté. Zéro déchet. Un rituel.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href="/boutique">
              Découvrir la gamme
            </Button>
            <Button variant="ghost" size="lg" href="/bienfaits">
              Pourquoi le matcha →
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-cream/65 text-xs uppercase tracking-[0.18em]"
          >
            <span>· 12 g CO₂ par tasse</span>
            <span>· 100 % compostable</span>
            <span>· Programme consigne</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-px h-12 bg-clay/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-clay animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
