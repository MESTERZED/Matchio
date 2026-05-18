import Image from 'next/image';
import { basePath } from '@/lib/utils';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { CountUp } from '@/components/animations/CountUp';
import { RefillCalculator } from '@/components/refill/RefillCalculator';
import { ecoStats } from '@/lib/data/eco-stats';

export const metadata = {
  title: 'Refill, Un rituel. Aucune trace.',
  description:
    'Heritage Box + Refill Pack + Consigne. Le système circulaire qui élimine les capsules jetables.',
};

const consigneSteps = [
  {
    num: '01',
    title: 'Vous achetez la Heritage Box',
    text: 'Mug-bol en grès de Limoges, chasen Takayama, doseur, 30 doses incluses.',
    image: `${basePath}/images/products/06-heritage-box-unboxing.png`,
  },
  {
    num: '02',
    title: 'Chaque mois, un Refill Pack',
    text: '30 doses pré-mesurées en sachet kraft compostable.',
    image: `${basePath}/images/products/07-capsule-isolated.png`,
  },
  {
    num: '03',
    title: 'Renvoyez la boîte usée',
    text: 'Quand votre Heritage Box est marquée par les ans, glissez-la dans l\'enveloppe pré-affranchie.',
    image: `${basePath}/images/products/05-heritage-box-flatlay.png`,
  },
];

const consignePractical = [
  { step: 'Étape 1', text: 'Demandez votre étiquette de retour gratuite depuis votre compte.' },
  { step: 'Étape 2', text: 'Glissez la Heritage Box vide dans son carton d\'origine.' },
  { step: 'Étape 3', text: 'Déposez-la en point relais. Trajet pris en charge.' },
  { step: 'Étape 4', text: 'Notre atelier nettoie et vous recevez 10 € de crédit.' },
];

export default function RefillPage() {
  return (
    <>
      {/* Hero immersif */}
      <section className="relative bg-matcha-deep text-cream min-h-screen flex items-end pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${basePath}/images/products/03-refill-pack-hero.png`}
            alt="Heritage Box Matchio ouverte avec bol matcha"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matcha-deep via-matcha-deep/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-matcha-deep/70 via-transparent to-transparent" />
        </div>

        <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Eyebrow className="text-clay">Le système Refill</Eyebrow>
            <h1 className="mt-6 font-display italic text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] tracking-tight text-cream">
              Un rituel.<br />
              Aucune trace.
            </h1>
            <p className="mt-8 max-w-md text-lg md:text-xl text-cream/85 leading-relaxed">
              Une seule boîte, à vie. Une recharge mensuelle, compostable.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/produit/heritage-box" variant="primary" size="lg">
                Acheter Heritage Box
              </Button>
              <Button href="/produit/refill-pack" variant="ghost" size="lg">
                Démarrer un abonnement Refill
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <Eyebrow>Comment ça marche</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-matcha-deep max-w-3xl">
              Trois étapes,<br />une boucle infinie.
            </h2>
          </Reveal>

          <Reveal stagger className="mt-20 grid md:grid-cols-3 gap-8 md:gap-12">
            {consigneSteps.map((step) => (
              <article key={step.num} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark/30 mb-6">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="border-t border-matcha-deep/20 pt-6">
                  <span className="font-mono text-xs text-clay tracking-[0.2em]">{step.num}</span>
                  <h3 className="mt-4 font-display italic text-2xl md:text-3xl text-matcha-deep leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-ink-soft leading-relaxed">{step.text}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Calculateur */}
      <RefillCalculator />

      {/* Consigne en pratique */}
      <section id="consigne" className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <Eyebrow>Programme Return &amp; Renew</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-matcha-deep">
              La consigne en pratique.
            </h2>
            <p className="mt-8 max-w-xl text-ink-soft leading-relaxed">
              Quatre étapes simples, prises en charge à chaque maillon.
            </p>
            <Reveal stagger className="mt-10 space-y-4">
              {consignePractical.map((p, i) => (
                <div key={i} className="flex gap-6 p-5 border border-cream-dark hover:border-matcha-deep/30 transition-colors">
                  <span className="font-mono text-xs text-clay tracking-[0.2em] mt-1 whitespace-nowrap">
                    {p.step}
                  </span>
                  <p className="text-ink-soft text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </Reveal>
          </Reveal>

          <Reveal className="relative h-[500px] md:h-[640px]">
            <Image
              src={`${basePath}/images/products/06-heritage-box-unboxing.png`}
              alt="Heritage Box avec ritual card"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Compteurs */}
      <section className="bg-clay py-20 md:py-28">
        <div className="container-wide grid md:grid-cols-3 gap-8 md:gap-12 text-center">
          <Reveal>
            <p className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-none text-matcha-deep">
              <CountUp end={ecoStats.heritageBoxesInCirculation} />
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink/70">
              Heritage Box en consigne
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-none text-matcha-deep">
              <CountUp end={ecoStats.plasticAvoidedKg} suffix=" kg" />
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink/70">
              plastique évité
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-none text-matcha-deep">
              <CountUp end={14} suffix=" %" />
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink/70">
              taux de retour consigne actuel
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-matcha-deep text-cream py-24 md:py-32">
        <Reveal className="container-narrow text-center">
          <h2 className="font-display italic text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-cream">
            Cinq mille tasses possibles<br />avec une seule boîte.
          </h2>
          <p className="mt-8 text-cream/80 leading-relaxed">
            Le rituel devient durable quand l&apos;objet l&apos;est aussi.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button href="/produit/heritage-box" variant="primary" size="lg">
              Acheter Heritage Box
            </Button>
            <Button href="/produit/refill-pack" variant="ghost" size="lg">
              Refill Pack →
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}