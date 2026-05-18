'use client';
import Image from 'next/image';
import { basePath } from '@/lib/utils';
import { Reveal } from '@/components/animations/Reveal';

export default function BienfaitsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center bg-matcha-deep">
        <Image
          src={`${basePath}/images/products/02-garden-kit-alt.png`}
          alt="Bienfaits du Matchio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        
        <div className="container-wide relative z-10 text-center text-cream">
          <h1 className="font-display italic text-6xl md:text-7xl">Les bienfaits</h1>
          <p className="mt-4 text-xl">Pourquoi le matcha Matchio change tout</p>
        </div>
      </section>

      {/* Autres sections... */}
      <section className="py-24 bg-cream">
        <div className="container-wide">
          <Reveal>
            <h2 className="font-display text-5xl text-center">Focus • Calme • Énergie propre</h2>
          </Reveal>
          {/* Ajoute ici tes autres contenus si tu veux, pour l'instant on corrige juste les images */}
        </div>
      </section>
    </div>
  );
}