import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';

const steps = [
  { num: '01', title: 'Heritage Box', text: 'Un objet permanent. Mug grès, chasen, doseur.' },
  { num: '02', title: 'Refill Pack', text: 'Recharge mensuelle en sachet kraft compostable.' },
  { num: '03', title: 'Consigne', text: 'On reprend la boîte usée. Vous gagnez 10 € de crédit.' },
];

export function RefillSection() {
  return (
    <section className="bg-matcha-deep text-cream py-24 md:py-32 overflow-hidden">
      <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <Eyebrow className="text-clay">Le système Refill</Eyebrow>
          <h2 className="mt-6 font-display italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-cream">
            Un rituel.<br />
            Aucune trace.
          </h2>
          <p className="mt-8 text-lg text-cream/80 leading-relaxed max-w-md">
            Une seule fois la boîte. Chaque mois, un sachet kraft. Jamais de capsule jetée.
            La fin de la consommation linéaire, un cycle qui se referme.
          </p>

          <ol className="mt-12 space-y-6">
            {steps.map((step) => (
              <li key={step.num} className="flex gap-5 items-start group">
                <span className="font-mono text-xs text-clay tracking-widest mt-1">{step.num}</span>
                <div className="flex-1 pb-6 border-b border-cream/15 group-last:border-0">
                  <h3 className="font-display italic text-2xl text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-cream/70 text-sm leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <Button href="/refill" variant="primary" size="lg">
              Découvrir le système Refill →
            </Button>
          </div>
        </Reveal>

        <Reveal className="relative h-[500px] md:h-[640px]">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/products/03-refill-pack-hero.png"
              alt="Heritage Box ouverte avec bol matcha, chasen et sachet kraft"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
