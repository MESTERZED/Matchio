'use client';

import { useState, useMemo } from 'react';
import { products, type ProductCategory } from '@/lib/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/animations/Reveal';
import { cn, formatPrice } from '@/lib/utils';

type SortKey = 'pertinence' | 'price-asc' | 'price-desc' | 'new';
type EcoFilter = 'all' | 'compostable' | 'refill' | 'consigne';

const categories: Array<{ id: 'all' | ProductCategory; label: string }> = [
 { id: 'all', label: 'Toute la gamme' },
 { id: 'capsules', label: 'Capsules' },
 { id: 'refill', label: 'Refill' },
 { id: 'accessoires', label: 'Accessoires' },
 { id: 'garden', label: 'Garden' },
];

export default function BoutiquePage() {
 const [category, setCategory] = useState<'all' | ProductCategory>('all');
 const [eco, setEco] = useState<EcoFilter>('all');
 const [maxPrice, setMaxPrice] = useState(100);
 const [sort, setSort] = useState<SortKey>('pertinence');

 const filtered = useMemo(() => {
 let result = products.filter((p) => {
 if (category !== 'all' && p.category !== category) return false;
 if (p.price > maxPrice) return false;
 if (eco === 'compostable' && !p.badges.includes('compostable')) return false;
 if (eco === 'refill' && !p.badges.includes('refill')) return false;
 if (eco === 'consigne' && !p.badges.includes('consigne')) return false;
 return true;
 });
 if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
 if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
 return result;
 }, [category, eco, maxPrice, sort]);

 return (
 <>
 <PageHeader
 eyebrow="La boutique"
 title="La gamme."
 lead="Sept produits, deux logiques. Capsules en transition, Refill en cœur de marque. Tous compostables, tous traçables, tous fabriqués en France ou au Japon."
 />

 <section className="bg-cream pb-24 md:pb-32">
 <div className="container-wide grid lg:grid-cols-12 gap-10">
 <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start">
 <div className="space-y-10">
 <div>
 <h3 className="eyebrow mb-4">Catégorie</h3>
 <ul className="space-y-2">
 {categories.map((c) => (
 <li key={c.id}>
 <button
 onClick={() => setCategory(c.id)}
 className={cn(
 'text-sm transition-colors',
 category === c.id
 ? 'text-matcha-deep font-medium'
 : 'text-ink-soft hover:text-ink',
 )}
 >
 {c.label}
 </button>
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h3 className="eyebrow mb-4">Éco-impact</h3>
 <ul className="space-y-2">
 {[
 { id: 'all', label: 'Tous' },
 { id: 'compostable', label: 'Compostable' },
 { id: 'refill', label: 'Refill, zéro déchet' },
 { id: 'consigne', label: 'Consigne' },
 ].map((c) => (
 <li key={c.id}>
 <button
 onClick={() => setEco(c.id as EcoFilter)}
 className={cn(
 'text-sm transition-colors',
 eco === c.id
 ? 'text-matcha-deep font-medium'
 : 'text-ink-soft hover:text-ink',
 )}
 >
 {c.label}
 </button>
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h3 className="eyebrow mb-4">Prix maximum</h3>
 <input
 type="range"
 min={10}
 max={100}
 step={5}
 value={maxPrice}
 onChange={(e) => setMaxPrice(parseInt(e.target.value))}
 className="w-full accent-matcha-deep"
 aria-label="Prix maximum"
 />
 <p className="mt-2 font-mono text-sm text-ink">
 Jusqu&apos;à {formatPrice(maxPrice)}
 </p>
 </div>

 <div>
 <h3 className="eyebrow mb-4">Tri</h3>
 <select
 value={sort}
 onChange={(e) => setSort(e.target.value as SortKey)}
 className="w-full bg-transparent border border-cream-dark px-3 py-2.5 text-sm text-ink focus:border-matcha-deep outline-none"
 >
 <option value="pertinence">Pertinence</option>
 <option value="price-asc">Prix croissant</option>
 <option value="price-desc">Prix décroissant</option>
 <option value="new">Nouveautés</option>
 </select>
 </div>
 </div>
 </aside>

 <div className="lg:col-span-9">
 <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
 {filtered.map((p) => (
 <ProductCard key={p.id} product={p} />
 ))}
 </Reveal>

 {filtered.length === 0 && (
 <p className="text-center py-20 text-ink-soft italic">
 Aucun produit ne correspond à ces filtres.
 </p>
 )}

 <div className="mt-16 p-8 md:p-10 bg-matcha-mist/40 border border-matcha-deep/15 rounded-sm">
 <h3 className="font-display italic text-2xl md:text-3xl text-matcha-deep">
 Recevez votre Refill Pack chaque mois, −15 %
 </h3>
 <p className="mt-3 text-sm text-ink-soft max-w-xl">
 L&apos;abonnement Matchio : un Refill Pack au format choisi, tous les 30 jours.
 Vous arrêtez quand vous voulez. Livraison neutre en carbone incluse.
 </p>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
