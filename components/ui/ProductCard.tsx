'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/data/products';
import { EcoBadge } from '@/components/ui/EcoBadge';
import { ProductImage } from '@/components/ui/ProductImage';
import { formatPrice, cn } from '@/lib/utils';
import { useCart } from '@/lib/store/cart';

interface ProductCardProps {
  product: Product;
  className?: string;
  showQuickAdd?: boolean;
  badge?: string;
}

export function ProductCard({ product, className, showQuickAdd = true, badge }: ProductCardProps) {
  const add = useCart((s) => s.add);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn('group relative flex flex-col bg-cream', className)}
    >
      {/* Badges top-left */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
        <EcoBadge type="compostable" size="sm" variant="solid" />
        {badge && (
          <span className="inline-flex items-center px-3 py-1 bg-clay text-ink text-[10px] tracking-[0.18em] uppercase font-semibold rounded-full">
            {badge}
          </span>
        )}
      </div>

      <Link
        href={`/produit/${product.slug}`}
        className="block relative aspect-[16/10] overflow-hidden bg-cream-dark/20"
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
          <ProductImage productId={product.id} className="w-full h-full object-cover" />
        </div>
      </Link>

      <div className="p-6 md:p-7 flex flex-col gap-1 text-center">
        <p className="eyebrow text-[0.65rem]">{product.tagline}</p>
        <h3 className="mt-1 font-display italic text-2xl md:text-[1.75rem] text-matcha-deep leading-none">
          {product.name}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-muted">
          {product.unitLabel}
        </p>
        <p className="mt-4 font-mono text-base text-clay font-semibold">
          {formatPrice(product.price)}
        </p>
        <p className="mt-3 text-sm text-ink-soft line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 justify-center">
          <Link
            href={`/produit/${product.slug}`}
            className="px-5 py-2.5 border border-matcha-deep text-matcha-deep text-xs tracking-[0.18em] uppercase font-medium hover:bg-matcha-deep hover:text-cream transition-colors"
          >
            Découvrir
          </Link>
          {showQuickAdd && (
            <button
              onClick={() => add({ productId: product.id, quantity: 1 })}
              className="px-5 py-2.5 bg-matcha-deep text-cream text-xs tracking-[0.18em] uppercase font-medium hover:bg-ink transition-colors"
            >
              Ajouter
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
