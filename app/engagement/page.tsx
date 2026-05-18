import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { Reveal } from '@/components/animations/Reveal';
import { CountUp } from '@/components/animations/CountUp';
import { FallingLeavesVisual } from '@/components/ui/FallingLeavesVisual';
import { GlobeSection } from '@/components/engagement/GlobeSection';
import {
  ecoStats,
  ecoPartners,
  honestLimits,
  futureCommitments,
  environmentalKpis,
} from '@/lib/data/eco-stats';

export const metadata = {
  title: 'Engagement, Notre comptabilité environnementale',
  description:
    'Six régions de plantation. Bilan carbone, partenaires éco, limites honnêtes. La transparence environnementale, sans superlatifs.',
};

export default function EngagementPage() {
  return (
    <>
      {/* §1 HERO */}
      <section className="relative bg-matcha-deep text-cream min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/09-focus-box-hero.png"
            alt="Kit Matchio Garden : pot fibre de coco, plantule, guide"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-matcha-deep via-matcha-deep/80 to-matcha-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-matcha-deep/80 via-transparent to-matcha-deep/20" />
        </div>
        <FallingLeavesVisual />
        <div className="container-narrow relative z-10">
          <Reveal>
            <Eyebrow className="text-clay">Notre comptabilité environnementale</Eyebrow>
            <h1 className="mt-6 font-display italic text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-tight text-cream text-balance">
              Notre engagement n&apos;est pas un argument.
              <br />
              <span className="text-matcha-soft">C&apos;est une comptabilité environnementale.</span>
            </h1>
            <Divider className="mt-10" />
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream/85 leading-relaxed">
              Sur cette page : où nous plantons, combien de CO₂ nous évitons, qui sont nos
              partenaires, et surtout, ce que nous ne savons pas encore faire. Pas de
              superlatifs, juste des chiffres et des méthodologies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* §2 GLOBE 3D */}
      <GlobeSection />

      {/* §3 BILAN ENVIRONNEMENTAL */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <Eyebrow>Le bilan en chiffres</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-matcha-deep max-w-3xl">
              Quatre données qui résument.
            </h2>
            <p className="mt-8 max-w-xl text-ink-soft leading-relaxed">
              Toutes les valeurs sont calculées selon la méthodologie ADEME et publiées en
              open data dans notre rapport annuel d&apos;impact.
            </p>
          </Reveal>

          <Reveal stagger className="mt-16 grid sm:grid-cols-2 gap-6 md:gap-8">
            {environmentalKpis.map((kpi, i) => (
              <article
                key={i}
                className="p-8 md:p-10 bg-cream-dark/40 border-l-2 border-clay"
              >
                <p className="font-display italic text-[clamp(2.5rem,4vw,3.75rem)] leading-none text-matcha-deep">
                  {kpi.value}
                </p>
                <p className="mt-5 text-sm uppercase tracking-[0.18em] text-ink font-medium">
                  {kpi.label}
                </p>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{kpi.detail}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* §4 LE PIVOT 2025 */}
      <section className="bg-matcha-deep text-cream py-24 md:py-32">
        <div className="container-narrow">
          <Reveal>
            <Eyebrow className="text-clay">Le pivot de 2025</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-cream max-w-3xl">
              Pourquoi nous avons abandonné les capsules.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 space-y-6 text-cream/85 body-text text-pretty">
              <p>
                Nous avons commencé en 2024 avec des capsules PLA Ingeo, compostables en
                milieu industriel. Sur le papier, c&apos;était une victoire : pas
                d&apos;aluminium, pas de plastique fossile, bilan carbone divisé par sept.
                Sur le terrain, c&apos;était un compromis.
              </p>
              <p>
                38 % seulement des Français ont accès à un bac à déchets organiques. Le
                reste finit en incinération, où le PLA brûle comme n&apos;importe quel autre
                plastique. Le compostage domestique ne suffit pas : il manque les 60 °C
                d&apos;une plateforme industrielle.
              </p>
              <p>
                Nous avons pivoté en septembre 2025. Le matcha est maintenant en sachet
                papier kraft 5 g, compostable chez vous, dans n&apos;importe quel jardin ou
                lombricomposteur de balcon. Bilan carbone optimisé à 8 g CO₂ par tasse. Plus
                de machine, plus de capsule, plus de dépendance industrielle.
              </p>
              <p className="font-display italic text-2xl text-clay leading-snug pt-4">
                Le geste du chasen ne se délègue pas à une machine. C&apos;est ce qui en
                fait un rituel.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* §5 PARTENAIRES */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <Eyebrow>Nos partenaires</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-matcha-deep max-w-3xl">
              Ceux sans qui rien ne tient.
            </h2>
          </Reveal>

          <Reveal stagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ecoPartners.map((partner) => (
              <article
                key={partner.name}
                className="p-8 md:p-10 border border-cream-dark hover:border-matcha-deep/30 transition-colors group"
              >
                <p className="eyebrow">{partner.role}</p>
                <h3 className="mt-3 font-display italic text-3xl text-matcha-deep leading-tight">
                  {partner.name}
                </h3>
                <p className="mt-5 text-sm text-ink-soft leading-relaxed">
                  {partner.description}
                </p>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-block link-underline text-xs uppercase tracking-[0.18em] text-matcha-deep"
                >
                  Visiter le site →
                </a>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* §6 COMPTEURS VIVANTS */}
      <section className="bg-clay py-24 md:py-28">
        <div className="container-wide grid md:grid-cols-3 gap-8 md:gap-12 text-center">
          <Reveal>
            <p className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-none text-matcha-deep">
              <CountUp end={ecoStats.treesPlantedToDate} />
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink/70">
              arbres plantés depuis 2026
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-none text-matcha-deep">
              <CountUp end={ecoStats.heritageBoxesInCirculation} />
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-ink/70">
              boîtes Heritage en circulation
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
        </div>
      </section>

      {/* §7 HONNÊTETÉ RADICALE — LIMITES + ROADMAP */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <Eyebrow>Honnêteté radicale</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] text-matcha-deep max-w-3xl">
              Ce que nous ne savons pas encore faire.
            </h2>
            <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">
              Une marque honnête est une marque qui dit ce qu&apos;elle ne fait pas bien.
              Voici nos quatre principaux points d&apos;amélioration, dans le détail.
            </p>
          </Reveal>

          <Reveal stagger className="mt-16 grid md:grid-cols-2 gap-6">
            {honestLimits.map((limit, i) => (
              <article
                key={i}
                className="p-8 md:p-10 bg-cream-dark/40 border-l-2 border-clay"
              >
                <h3 className="font-display italic text-2xl text-matcha-deep leading-tight">
                  {limit.title}
                </h3>
                <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                  {limit.description}
                </p>
              </article>
            ))}
          </Reveal>

          <Reveal className="mt-20">
            <h3 className="font-display italic text-3xl text-matcha-deep">
              Notre calendrier d&apos;amélioration.
            </h3>
            <ul className="mt-10 divide-y divide-cream-dark border-y border-cream-dark">
              {futureCommitments.map((c, i) => (
                <li key={i} className="py-5 flex items-baseline gap-6">
                  <span className="font-mono text-xs text-clay tracking-[0.15em] w-20 flex-shrink-0">
                    {c.date}
                  </span>
                  <span className="text-ink leading-relaxed">{c.commitment}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* §8 RAPPORT PDF */}
      <section className="bg-matcha-deep text-cream py-24 md:py-32">
        <Reveal className="container-narrow text-center">
          <Eyebrow className="text-clay">Rapport d&apos;impact 2026</Eyebrow>
          <h2 className="mt-6 font-display italic text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-cream">
            68 pages. Tous les chiffres. Toutes les sources.
          </h2>
          <p className="mt-8 text-cream/80 max-w-xl mx-auto">
            Le rapport complet : bilan carbone détaillé, audit fournisseurs, plantations
            géolocalisées, calendrier d&apos;amélioration. Mis à jour chaque trimestre.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button href="#" variant="primary" size="lg">
              Télécharger le PDF (3,2 Mo)
            </Button>
            <Button href="#" variant="ghost" size="lg" external>
              Voir les données brutes →
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
