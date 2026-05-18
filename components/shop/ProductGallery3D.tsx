'use client';
import { useState } from 'react';
import Image from 'next/image';
import { basePath } from '@/lib/utils';

const productPhotos: Record<string, string[]> = {
  'heritage-box': [
    `${basePath}/images/products/06-heritage-box-unboxing.png`,
    `${basePath}/images/products/05-heritage-box-flatlay.png`,
    `${basePath}/images/products/08-heritage-box-3quarter.png`,
  ],
  'refill-pack': [
    `${basePath}/images/products/03-refill-pack-hero.png`,
    `${basePath}/images/products/07-capsule-isolated.png`,
  ],
  focus: [`${basePath}/images/products/12-focus-box-hero.png`],
  'deep-work': [`${basePath}/images/products/11-deepwork-box-hero.png`],
  'calm-focus': [`${basePath}/images/products/13-calmfocus-box-hero.png`],
  'matchio-garden': [
    `${basePath}/images/products/01-garden-kit-hero.png`,
    `${basePath}/images/products/02-garden-kit-alt.png`,
  ],
};

interface ProductGallery3DProps {
  productId: string;
}

export function ProductGallery3D({ productId }: ProductGallery3DProps) {
  const photos = productPhotos[productId] || [`${basePath}/images/products/hero-heritage-box.png`];

  const [activePhoto, setActivePhoto] = useState(0);

  const currentPhoto = photos[activePhoto] || photos[0];

  return (
    <div className="relative">
      {/* Image principale */}
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream-dark">
        <Image
          src={currentPhoto!}
          alt="Produit Matchio"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Miniatures */}
      {photos.length > 1 && (
        <div className="flex gap-3 mt-6 justify-center">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setActivePhoto(index)}
              className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                activePhoto === index
                  ? 'border-matcha-deep scale-110'
                  : 'border-transparent'
              }`}
            >
              <Image
                src={photo}
                alt={`Vue ${index + 1}`}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}