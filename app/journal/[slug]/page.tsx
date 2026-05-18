import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '@/lib/data/articles';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { ArticleHero } from '@/components/journal/ArticleHero';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        {/* Hero illustration plein écran */}
        <div className="pt-20 md:pt-24 bg-cream">
          <div className="container-wide">
            <Reveal>
              <ArticleHero slug={article.slug} variant="page" />
            </Reveal>
          </div>
        </div>

        <header className="bg-cream pt-12 md:pt-16 pb-10">
          <div className="container-narrow">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-clay">
                {article.hero.eyebrow}
              </p>
              <h1 className="mt-6 font-display italic text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-balance text-matcha-deep">
                {article.title}
              </h1>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
                <span>Par {article.author}</span>
                <span>·</span>
                <span>
                  {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span>·</span>
                <span>{article.readingTime} min de lecture</span>
              </div>
            </Reveal>
          </div>
        </header>

        <div className="bg-cream pb-20 md:pb-24">
          <div className="container-narrow">
            <Reveal>
              <p className="lead text-balance">{article.excerpt}</p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10 prose prose-lg max-w-none body-text space-y-6">
                {article.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-pretty">{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <section className="bg-cream-dark/30 py-24">
        <div className="container-wide">
          <Reveal>
            <Eyebrow>Continuer à lire</Eyebrow>
            <h2 className="mt-4 font-display italic text-3xl md:text-4xl text-matcha-deep">
              Trois autres articles.
            </h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid md:grid-cols-3 gap-6">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/journal/${other.slug}`}
                className="block bg-cream border border-cream-dark p-6 hover:border-matcha-deep/30 transition-colors"
              >
                <p className="eyebrow text-[0.65rem]">{other.hero.eyebrow}</p>
                <h3 className="mt-3 font-display italic text-xl text-matcha-deep leading-tight">
                  {other.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft line-clamp-2">{other.excerpt}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
