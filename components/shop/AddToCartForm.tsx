'use client';

import { useState } from 'react';
import { Minus, Plus, Check } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import { useCart } from '@/lib/store/cart';
import { Button } from '@/components/ui/Button';
import { formatPrice, cn } from '@/lib/utils';

interface AddToCartFormProps {
 product: Product;
}

export function AddToCartForm({ product }: AddToCartFormProps) {
 const add = useCart((s) => s.add);
 const [variantId, setVariantId] = useState<string | undefined>(product.variants?.[0]?.id);
 const [quantity, setQuantity] = useState(1);
 const [isSubscription, setIsSubscription] = useState(false);
 const [added, setAdded] = useState(false);

 const unitPrice = isSubscription ? product.price * 0.85 : product.price;

 function handleAdd() {
 add({ productId: product.id, variantId, quantity, isSubscription });
 setAdded(true);
 setTimeout(() => setAdded(false), 1800);
 }

 return (
 <div className="space-y-6">
 {product.variants && product.variants.length > 0 && (
 <div>
 <label className="eyebrow block mb-3">Variante</label>
 <div className="flex flex-wrap gap-2">
 {product.variants.map((v) => (
 <button
 key={v.id}
 onClick={() => setVariantId(v.id)}
 className={cn(
 'px-4 py-2.5 text-sm border transition-colors',
 variantId === v.id
 ? 'border-matcha-deep bg-matcha-deep text-cream'
 : 'border-cream-dark text-ink hover:border-matcha-deep/40',
 )}
 >
 {v.label}
 </button>
 ))}
 </div>
 </div>
 )}

 <div>
 <label className="eyebrow block mb-3">Quantité</label>
 <div className="inline-flex items-center border border-cream-dark">
 <button
 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
 aria-label="Diminuer"
 className="w-12 h-12 flex items-center justify-center hover:bg-cream-dark"
 >
 <Minus size={14} />
 </button>
 <span className="w-12 text-center font-mono">{quantity}</span>
 <button
 onClick={() => setQuantity((q) => Math.min(99, q + 1))}
 aria-label="Augmenter"
 className="w-12 h-12 flex items-center justify-center hover:bg-cream-dark"
 >
 <Plus size={14} />
 </button>
 </div>
 </div>

 <label className="flex items-start gap-4 p-5 border border-matcha-deep/15 bg-matcha-mist/40 cursor-pointer hover:border-matcha-deep/30 transition-colors">
 <input
 type="checkbox"
 checked={isSubscription}
 onChange={(e) => setIsSubscription(e.target.checked)}
 className="mt-1 accent-matcha-deep w-4 h-4"
 />
 <div className="flex-1">
 <p className="font-medium text-sm text-matcha-deep">
 Abonnement mensuel, −15 %
 </p>
 <p className="mt-1 text-xs text-ink-soft">
 Recevez ce produit chaque mois. Modifiable et annulable à tout moment.
 </p>
 </div>
 <span className="font-mono text-sm text-matcha-deep">
 {formatPrice(product.price * 0.85)}
 </span>
 </label>

 <div className="flex gap-3">
 <Button onClick={handleAdd} variant="secondary" size="xl" className="flex-1">
 {added ? (
 <>
 <Check size={18} /> Ajouté · {formatPrice(unitPrice * quantity)}
 </>
 ) : (
 <>Ajouter au panier · {formatPrice(unitPrice * quantity)}</>
 )}
 </Button>
 </div>

 <p className="text-xs text-ink-muted text-center">
 Livraison neutre en carbone · Retour gratuit sous 30 jours · Programme consigne
 </p>
 </div>
 );
}
