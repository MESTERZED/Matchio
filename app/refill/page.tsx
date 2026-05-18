import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/animations/Reveal';
import { CountUp } from '@/components/animations/CountUp';
import { RefillCalculator } from '@/components/refill/RefillCalculator';
import { ecoStats } from '@/lib/data/eco-stats';

export const metadata = {
  title: 'Refill, Un rituel. Aucune trace.',
  description:
    'Heritage Box + Refill Pack + Consigne. Le système circulaire qui élimine les capsules jetables. Sans aluminium, sans plastique, sans compromis.',
};

const consigneSteps = [
  {
    num: '01',
    title: 'Vous achetez la Heritage Box',
    text: 'Mug-bol en grès de Limoges, chasen Takayama, doseur, 30 doses incluses. Un objet permanent.',
    image: '/images/products/06-heritage-box-unboxing.png',
  },
  {
    num: '02',
    title: 'Chaque mois, un Refill Pack',
    text: '30 doses pré-mesurées en sachet kraft compostable. Sans capsule, sans plastique, à composter à la maison.',
    image: '/images/products/07-capsule-isolated.png',
  },
  {
    num: '03',
    title: 'Renvoyez la boîte usée',
    text: 'Quand votre Heritage Box est marquée par les ans, glissez-la dans l\'enveloppe pré-affranchie. Crédit de 10 €.',
    image: '/images/products/05-heritage-box-flatlay.png',
  },
];

const consignePractical = [
  { step: 'Étape 1', text: 'Demandez votre étiquette de retour gratuite depuis votre compte.' },
  { step: 'Étape 2', text: 'Glissez la Heritage Box vide dans son carton d\'origine, ou l\'enveloppe Mondial Relay fournie.' },
  { step: 'Étape 3', text: 'Déposez-la en point relais. Trajet pris en charge.' },
  { step: 'Étape 4', text: 'Notre atelier nettoie, vérifie, remet en circulation. Vous recevez 10 € de crédit immédiat.' },
];

export default function RefillPage() {
  return (
    <>
      {/* Hero immersif plein écran avec photo */}
      <section className="relative bg-matcha-deep text-cream min-h-screen flex items-end pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/03-refill-pack-hero.png"
            alt="Heritage Box Matchio ouverte avec bol matcha, chasen et accessoires"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Vignettage doux pour lisibilité du texte */}
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
              Une seule boîte, à vie. Une recharge mensuelle, compostable. Une consigne, à
              chaque cycle. Le système circulaire qui ferme la boucle.
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

      {/* Comment ça marche, avec photos */}
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
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
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

      {/* Consigne en pratique avec image overhead */}
      <section id="consigne" className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <Eyebrow>Programme Return &amp; Renew</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-matcha-deep">
              La consigne en pratique.
            </h2>
            <p className="mt-8 max-w-xl text-ink-soft leading-relaxed">
              Quatre étapes simples, prises en charge à chaque maillon. Vous récupérez
              10 € de crédit dès que la boîte arrive à l&apos;atelier, utilisable sur votre
              prochain Refill ou tout autre produit.
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
              src="/images/products/06-heritage-box-unboxing.png"
              alt="Heritage Box avec ritual card et sachets, vue overhead"
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
            <p className="mt-2 text-xs text-ink/55">
              objectif 2027 : 35 %
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
