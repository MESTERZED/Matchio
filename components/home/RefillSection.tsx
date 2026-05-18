'use client';
import { basePath } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export default function RefillSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img
              src={`${basePath}/images/products/03-refill-pack-hero.png`}
              alt="Pack de recharge Matchio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenu texte */}
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Programme Consigne</p>
              <h2 className="font-display text-5xl md:text-6xl leading-none mt-4">
                Rechargez. <span className="text-matcha-deep">Économisez.</span> Recommencez.
              </h2>
            </div>

            <p className="text-lg text-ink-soft max-w-md">
              Retournez votre boîte vide et recevez 30% de réduction sur votre prochaine recharge.
            </p>

            <Button variant="primary" size="lg" href="/refill">
              Découvrir le programme consigne →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}