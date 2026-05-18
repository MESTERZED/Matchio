import Image from 'next/image';
import type { Product } from '@/lib/data/products';
import { cn } from '@/lib/utils';

/**
 * Mapping basé sur le contenu réel des photos.
 *
 * 01, 02   = anciennes photos (boîte verte avec capsules) — usage générique fallback
 * 03       = Heritage Box ouverte sur table cosy
 * 04       = Capsule PLA isolée (ARCHIVÉE, pivot vers sachets)
 * 05       = Heritage Box flat lay
 * 06       = Heritage Box unboxing avec ritual card
 * 07, 08   = Refill Pack kraft + coupelle matcha
 * 09, 10   = Garden Kit
 * 11       = Boîte DEEP-WORK noire + sachet noir + bol matcha
 * 12       = Boîte FOCUS verte + sachet kraft + bol matcha (placeholder)
 * 13       = Boîte CALM-FOCUS clay + sachet kraft + bol matcha
 */

const productImageMap: Record<string, string> = {
  focus: '/images/products/12-focus-box-hero.png',
  'deep-work': '/images/products/11-deepwork-box-hero.png',
  'calm-focus': '/images/products/13-calmfocus-box-hero.png',
  'heritage-box': '/images/products/03-refill-pack-hero.png',
  'refill-pack': '/images/products/07-capsule-isolated.png',
  'ritual-set': '/images/products/05-heritage-box-flatlay.png',
  'matchio-garden': '/images/products/09-focus-box-hero.png',
};

const productCardImageMap: Record<string, string> = {
  focus: '/images/products/12-focus-box-hero.png',
  'deep-work': '/images/products/11-deepwork-box-hero.png',
  'calm-focus': '/images/products/13-calmfocus-box-hero.png',
  'heritage-box': '/images/products/06-heritage-box-unboxing.png',
  'refill-pack': '/images/products/08-heritage-box-3quarter.png',
  'ritual-set': '/images/products/06-heritage-box-unboxing.png',
  'matchio-garden': '/images/products/10-focus-box-alt.png',
};

interface ProductImageProps {
  product: Product;
  className?: string;
  size?: 'card' | 'hero' | 'gallery';
  variant?: 'main' | 'alt';
  priority?: boolean;
  fit?: 'cover' | 'contain';
}

export function ProductImage({
  product,
  className,
  size = 'card',
  variant = 'alt',
  priority = false,
  fit = 'cover',
}: ProductImageProps) {
  const src =
    variant === 'main'
      ? (productImageMap[product.id] ?? productCardImageMap[product.id])
      : (productCardImageMap[product.id] ?? productImageMap[product.id]);

  return (
    <div className={cn('relative w-full h-full overflow-hidden bg-cream-dark/20', className)}>
      <Image
        src={src ?? '/images/products/12-focus-box-hero.png'}
        alt={`${product.name} · ${product.tagline}`}
        fill
        priority={priority}
        sizes={
          size === 'hero'
            ? '(max-width: 768px) 100vw, 50vw'
            : size === 'gallery'
              ? '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 700px'
              : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px'
        }
        className={cn(
          'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
          fit === 'cover' ? 'object-cover' : 'object-contain',
        )}
      />
    </div>
  );
}
