'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { articles, type ArticleCategory } from '@/lib/data/articles';
import { Reveal } from '@/components/animations/Reveal';
import { ArticleHero } from '@/components/journal/ArticleHero';
import { cn } from '@/lib/utils';

const categories: Array<{ id: 'all' | ArticleCategory; label: string }> = [
 { id: 'all', label: 'Tous' },
 { id: 'science', label: 'Science' },
 { id: 'rituel', label: 'Rituel' },
 { id: 'engagement', label: 'Engagement' },
 { id: 'producteurs', label: 'Producteurs' },
];

export default function JournalPage() {
 const [filter, setFilter] = useState<'all' | ArticleCategory>('all');
 const filtered = filter === 'all' ? articles : articles.filter((a) => a.category === filter);

 return (
 <>
 <PageHeader
 eyebrow="Journal"
 title="Articles, reportages, méthodologies."
 lead="Notre journal éditorial : approfondissements scientifiques, reportages chez nos producteurs, méthodologies de calcul, portraits de rituels. Lu, pas scrollé."
 />

 <section className="bg-cream pb-24 md:pb-32">
 <div className="container-wide">
 <div className="flex flex-wrap gap-2 mb-12">
 {categories.map((c) => (
 <button
 key={c.id}
 onClick={() => setFilter(c.id)}
 className={cn(
 'px-5 py-2.5 text-xs uppercase tracking-[0.18em] border transition-colors',
 filter === c.id
 ? 'bg-matcha-deep text-cream border-matcha-deep'
 : 'border-cream-dark text-ink-soft hover:border-matcha-deep/40 hover:text-ink',
 )}
 >
 {c.label}
 </button>
 ))}
 </div>

 <Reveal stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
 {filtered.map((article) => (
 <Link
 key={article.slug}
 href={`/journal/${article.slug}`}
 className="group block bg-cream border border-cream-dark/60 hover:border-matcha-deep/30 transition-all duration-500 overflow-hidden"
 >
 <div className="overflow-hidden">
 <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
 <ArticleHero
 slug={article.slug}
 eyebrow={article.hero.eyebrow}
 variant="card"
 />
 </div>
 </div>
 <div className="p-6 md:p-7">
 <h2 className="font-display italic text-xl md:text-2xl text-matcha-deep leading-tight">
 {article.title}
 </h2>
 <p className="mt-3 text-sm text-ink-soft line-clamp-3 leading-relaxed">
 {article.excerpt}
 </p>
 <div className="mt-5 flex items-center justify-between text-xs text-ink-muted">
 <span>{new Date(article.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
 <span>{article.readingTime} min de lecture</span>
 </div>
 </div>
 </Link>
 ))}
 </Reveal>

 {filtered.length === 0 && (
 <p className="text-center py-20 text-ink-soft italic">
 Aucun article dans cette catégorie.
 </p>
 )}
 </div>
 </section>
 </>
 );
}
