'use client';

import Link from 'next/link';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/lib/store/cart';
import { products } from '@/lib/data/products';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/PageHeader';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ProductImage } from '@/components/ui/ProductImage';
import { formatPrice, formatNumber } from '@/lib/utils';

export default function CartPage() {
 const { items, updateQty, remove, total, ecoImpact } = useCart();
 const subtotal = total();
 const shipping = subtotal > 35 ? 0 : 4.9;
 const finalTotal = subtotal + shipping;
 const impact = ecoImpact();

 if (items.length === 0) {
 return (
 <>
 <PageHeader
 eyebrow="Votre panier"
 title="Votre panier est vide."
 lead="Le rituel commence par un geste, celui d'ajouter une boîte."
 />
 <section className="bg-cream pb-24 text-center">
 <Button href="/boutique" variant="secondary" size="lg">
 Explorer la gamme
 </Button>
 </section>
 </>
 );
 }

 return (
 <>
 <PageHeader eyebrow="Panier" title="Votre rituel." />

 <section className="bg-cream pb-24">
 <div className="container-wide grid lg:grid-cols-12 gap-12">
 <div className="lg:col-span-8">
 <div className="border-t border-cream-dark divide-y divide-cream-dark">
 {items.map((item) => {
 const product = products.find((p) => p.id === item.productId);
 if (!product) return null;
 const unit = item.isSubscription ? product.price * 0.85 : product.price;
 return (
 <article
 key={`${item.productId}-${item.variantId ?? ''}-${item.isSubscription ?? ''}`}
 className="py-8 grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr_auto] gap-6 items-start"
 >
 <div className="aspect-[4/5] relative overflow-hidden bg-cream-dark/20">
 <ProductImage product={product} size="card" />
 </div>

 <div>
 <Eyebrow as="p" className="text-[0.65rem]">
 {product.tagline}
 </Eyebrow>
 <h3 className="mt-1 font-display italic text-2xl text-matcha-deep">
 {product.name}
 </h3>
 {item.variantId && (
 <p className="text-sm text-ink-soft mt-1">
 {product.variants?.find((v) => v.id === item.variantId)?.label}
 </p>
 )}
 {item.isSubscription && (
 <span className="mt-2 inline-block text-xs uppercase tracking-[0.15em] text-matcha-mid">
 Abonnement −15 %
 </span>
 )}

 <div className="mt-4 flex items-center gap-4">
 <div className="inline-flex items-center border border-cream-dark">
 <button
 onClick={() =>
 updateQty(item.productId, item.quantity - 1, item.variantId)
 }
 aria-label="Diminuer la quantité"
 className="w-9 h-9 flex items-center justify-center hover:bg-cream-dark"
 >
 <Minus size={12} />
 </button>
 <span className="w-9 text-center font-mono text-sm">{item.quantity}</span>
 <button
 onClick={() =>
 updateQty(item.productId, item.quantity + 1, item.variantId)
 }
 aria-label="Augmenter la quantité"
 className="w-9 h-9 flex items-center justify-center hover:bg-cream-dark"
 >
 <Plus size={12} />
 </button>
 </div>
 <button
 onClick={() => remove(item.productId, item.variantId)}
 className="text-xs text-ink-muted hover:text-ink flex items-center gap-1"
 >
 <X size={14} /> Retirer
 </button>
 </div>
 </div>

 <div className="md:text-right col-span-2 md:col-span-1">
 <p className="font-mono text-lg text-ink">
 {formatPrice(unit * item.quantity)}
 </p>
 <p className="font-mono text-xs text-ink-muted mt-1">
 {formatPrice(unit)} / unité
 </p>
 </div>
 </article>
 );
 })}
 </div>
 </div>

 <aside className="lg:col-span-4">
 <div className="sticky top-28 bg-cream-dark/40 p-8 border border-cream-dark">
 <h2 className="font-display italic text-2xl text-matcha-deep">
 Récapitulatif
 </h2>

 <div className="mt-8 space-y-4 text-sm">
 <div className="flex justify-between">
 <span className="text-ink-soft">Sous-total</span>
 <span className="font-mono">{formatPrice(subtotal)}</span>
 </div>
 <div className="flex justify-between">
 <span className="text-ink-soft">Livraison</span>
 <span className="font-mono">
 {shipping === 0 ? 'Offerte' : formatPrice(shipping)}
 </span>
 </div>
 {shipping > 0 && (
 <p className="text-xs text-ink-muted">
 Livraison offerte dès {formatPrice(35)} d&apos;achats.
 </p>
 )}
 <div className="pt-4 border-t border-cream-dark flex justify-between text-base">
 <span className="font-medium">Total</span>
 <span className="font-mono text-lg">{formatPrice(finalTotal)}</span>
 </div>
 </div>

 <div className="mt-6 p-4 bg-matcha-mist/60 text-xs text-matcha-deep leading-relaxed">
 Avec cette commande, vous économisez{' '}
 <strong className="font-mono">{formatNumber(impact.co2Saved)} g</strong> de
 CO₂ et évitez{' '}
 <strong className="font-mono">{formatNumber(impact.capsulesAvoided)}</strong>{' '}
 capsules café.
 </div>

 <Button href="/checkout" variant="secondary" size="lg" className="w-full mt-6">
 Passer commande
 </Button>
 <Link
 href="/boutique"
 className="block mt-4 text-center text-xs text-ink-soft hover:text-ink link-underline w-fit mx-auto"
 >
 Continuer mes achats
 </Link>
 </div>
 </aside>
 </div>
 </section>
 </>
 );
}
