import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { products, getProductBySlug, getRelatedProducts } from '@/lib/data/products';
import { ProductGallery3D } from '@/components/shop/ProductGallery3D';
import { AddToCartForm } from '@/components/shop/AddToCartForm';
import { Accordion } from '@/components/shop/Accordion';
import { EcoImpactChart } from '@/components/shop/EcoImpactChart';
import { ProductCard } from '@/components/ui/ProductCard';
import { EcoBadge } from '@/components/ui/EcoBadge';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { formatPrice } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} · ${product.tagline}`,
    description: product.shortDescription,
  };
}

const useSteps = [
  { num: '01', text: 'Glissez la capsule (ou versez la dose) dans votre bol-mug.' },
  { num: '02', text: 'Ajoutez 60 ml d\'eau à 70 °C, jamais bouillante.' },
  { num: '03', text: 'Fouettez en M avec le chasen pendant 20 secondes.' },
  { num: '04', text: 'Dégustez immédiatement. Compostez le contenant.' },
];

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product.id, 3);

  return (
    <>
      <div className="container-wide pt-32 pb-4 text-xs text-ink-muted">
        <Link href="/" className="hover:text-ink">Accueil</Link>
        <span className="mx-2">·</span>
        <Link href="/boutique" className="hover:text-ink">Boutique</Link>
        <span className="mx-2">·</span>
        <span className="text-ink">{product.name}</span>
      </div>

      <section className="bg-cream pt-4 pb-24">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20">
          <ProductGallery3D product={product} />

          <div className="lg:py-8">
            <Eyebrow>{product.category} · {product.unitLabel}</Eyebrow>
            <h1 className="mt-4 font-display italic text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-matcha-deep">
              {product.name}
            </h1>
            <p className="mt-3 font-display italic text-xl text-clay">{product.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.badges.map((b) => (
                <EcoBadge key={b} type={b} variant="outline" size="md" />
              ))}
            </div>

            <p className="mt-8 text-lg text-ink-soft leading-relaxed">{product.shortDescription}</p>

            <p className="mt-8 font-mono text-3xl text-ink">{formatPrice(product.price)}</p>

            <div className="mt-10">
              <AddToCartForm product={product} />
            </div>

            <div className="mt-12">
              <Accordion
                items={[
                  {
                    title: 'Composition',
                    content: (
                      <ul className="space-y-2 list-disc pl-5">
                        {product.composition.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    title: 'Préparation',
                    content: (
                      <ol className="space-y-2 list-decimal pl-5">
                        {product.preparation.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ol>
                    ),
                  },
                  {
                    title: 'Bilan carbone',
                    content: (
                      <p>
                        {product.carbonImpact.perCup} g CO₂eq par tasse, soit{' '}
                        {Math.round(((product.carbonImpact.vsCoffee - product.carbonImpact.perCup) / product.carbonImpact.vsCoffee) * 100)} %
                        de moins qu&apos;un café filtre. Méthodologie complète publiée en open data.
                      </p>
                    ),
                  },
                  {
                    title: 'Origine & traçabilité',
                    content: <p>{product.origin}</p>,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-dark/30 py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <Eyebrow>Comment l&apos;utiliser</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-matcha-deep max-w-3xl">
              Quatre gestes. Trois minutes. Un rituel.
            </h2>
          </Reveal>

          <Reveal stagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useSteps.map((step) => (
              <div key={step.num} className="border-t border-matcha-deep/30 pt-6">
                <span className="font-mono text-xs text-clay tracking-widest">{step.num}</span>
                <p className="mt-4 font-display italic text-2xl text-matcha-deep leading-snug">
                  {step.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <Eyebrow>L&apos;impact en chiffres</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-matcha-deep">
              Une tasse, comparée à ce qu&apos;elle remplace.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Tous les chiffres sont calculés selon la méthodologie ADEME pour le bilan carbone,
              et publiés en sources ouvertes dans notre rapport annuel.
            </p>
          </Reveal>
          <Reveal>
            <EcoImpactChart
              perCup={product.carbonImpact.perCup}
              vsCoffee={product.carbonImpact.vsCoffee}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-dark/30 py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <Eyebrow>Vous aimerez aussi</Eyebrow>
            <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-matcha-deep">
              Le rituel se compose.
            </h2>
          </Reveal>

          <Reveal stagger className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
