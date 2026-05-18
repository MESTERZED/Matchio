'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/lib/store/cart';
import { products } from '@/lib/data/products';
import { formatPrice, formatNumber } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ProductImage } from '@/components/ui/ProductImage';

export function CartDrawer() {
  const { items, isOpen, close, updateQty, remove, total, ecoImpact } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  const subtotal = total();
  const impact = ecoImpact();

  return (
    <>
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-ink/40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      <aside
        role="dialog"
        aria-label="Panier"
        aria-modal="true"
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-xl flex flex-col transition-transform duration-500 ease-expo-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-cream-dark">
          <div>
            <p className="eyebrow">Panier</p>
            <h2 className="font-display italic text-2xl text-matcha-deep mt-1 leading-none">
              Votre rituel
            </h2>
          </div>
          <button
            onClick={close}
            aria-label="Fermer le panier"
            className="p-2 -mr-2 text-ink hover:text-matcha-deep"
          >
            <X size={22} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-display italic text-2xl text-matcha-deep">
                Votre panier est vide.
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Le rituel commence ici.
              </p>
              <Button href="/boutique" variant="secondary" className="mt-6" onClick={close}>
                Explorer la gamme
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-cream-dark">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                if (!product) return null;
                const unit = item.isSubscription ? product.price * 0.85 : product.price;
                return (
                  <li
                    key={`${item.productId}-${item.variantId ?? ''}-${item.isSubscription ?? ''}`}
                    className="py-5 flex gap-4"
                  >
                    <div className="w-20 h-24 flex-shrink-0 relative overflow-hidden bg-cream-dark/30">
                      <ProductImage product={product} size="card" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="font-sans font-semibold text-sm text-ink uppercase tracking-wide">
                            {product.name}
                          </h3>
                          {item.variantId && (
                            <p className="text-xs text-ink-soft mt-0.5">
                              {product.variants?.find((v) => v.id === item.variantId)?.label}
                            </p>
                          )}
                          {item.isSubscription && (
                            <span className="inline-block mt-1 text-[10px] uppercase tracking-[0.15em] text-matcha-mid">
                              · Abonnement −15 %
                            </span>
                          )}
                        </div>
                        <p className="font-mono text-sm text-ink whitespace-nowrap">
                          {formatPrice(unit * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-cream-dark">
                          <button
                            onClick={() =>
                              updateQty(item.productId, item.quantity - 1, item.variantId)
                            }
                            aria-label="Diminuer la quantité"
                            className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream-dark"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQty(item.productId, item.quantity + 1, item.variantId)
                            }
                            aria-label="Augmenter la quantité"
                            className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream-dark"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => remove(item.productId, item.variantId)}
                          className="text-xs text-ink-muted hover:text-ink underline-offset-2 hover:underline"
                        >
                          Retirer
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-cream-dark p-6 bg-cream-dark/30">
            <div className="bg-matcha-mist/60 px-4 py-3 mb-5">
              <p className="text-xs text-matcha-deep">
                Avec cette commande, vous économisez{' '}
                <strong className="font-mono">{formatNumber(impact.co2Saved)} g</strong> de CO₂
                {' · '}
                <strong className="font-mono">{formatNumber(impact.capsulesAvoided)}</strong> capsules café évitées.
              </p>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span className="text-ink-soft">Sous-total</span>
              <span className="font-mono">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-ink-soft">Livraison</span>
              <span className="font-mono text-matcha-mid">Calculée à l&apos;étape suivante</span>
            </div>
            <Link
              href="/checkout"
              onClick={close}
              className="block w-full py-4 bg-matcha-deep text-cream text-center text-sm font-medium tracking-wider uppercase hover:bg-matcha-mid transition-colors"
            >
              Commander · {formatPrice(subtotal)}
            </Link>
            <Link
              href="/panier"
              onClick={close}
              className="block w-full mt-3 text-center text-xs text-ink-soft hover:text-ink"
            >
              Voir le panier complet
            </Link>
          </footer>
        )}
      </aside>
    </>
  );
}
