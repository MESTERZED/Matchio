'use client';
import { basePath } from '@/lib/utils';

const productImages: Record<string, string> = {
  focus: `${basePath}/images/products/12-focus-box-hero.png`,
  'deep-work': `${basePath}/images/products/11-deepwork-box-hero.png`,
  'calm-focus': `${basePath}/images/products/13-calmfocus-box-hero.png`,
  'heritage-box': `${basePath}/images/products/06-heritage-box-unboxing.png`,
  'refill-pack': `${basePath}/images/products/07-capsule-isolated.png`,
  'ritual-set': `${basePath}/images/products/05-heritage-box-flatlay.png`,
  'matchio-garden': `${basePath}/images/products/09-focus-box-hero.png`,
};

export function ProductImage({ 
  productId = 'heritage-box', 
  className = "" 
}: { 
  productId?: string; 
  className?: string; 
}) {
  const src = productImages[productId] || `${basePath}/images/products/hero-heritage-box.png`;

  return (
    <img 
      src={src} 
      alt={productId || "Produit Matchio"} 
      className={className}
    />
  );
}