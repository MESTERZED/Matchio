'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { products } from '@/lib/data/products';

export interface CartItem {
  productId: string;
  variantId?: string;
  quantity: number;
  isSubscription?: boolean;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  add: (item: CartItem) => void;
  remove: (productId: string, variantId?: string) => void;
  updateQty: (productId: string, qty: number, variantId?: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  total: () => number;
  count: () => number;
  ecoImpact: () => { co2Saved: number; capsulesAvoided: number };
}

const sameLine = (a: CartItem, b: CartItem) =>
  a.productId === b.productId &&
  a.variantId === b.variantId &&
  Boolean(a.isSubscription) === Boolean(b.isSubscription);

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      add: (item) =>
        set((state) => {
          const existing = state.items.find((i) => sameLine(i, item));
          if (existing) {
            return {
              items: state.items.map((i) =>
                sameLine(i, item) ? { ...i, quantity: i.quantity + item.quantity } : i,
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, item], isOpen: true };
        }),
      remove: (productId, variantId) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.variantId === variantId),
          ),
        })),
      updateQty: (productId, qty, variantId) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.productId === productId && i.variantId === variantId
                ? { ...i, quantity: Math.max(0, qty) }
                : i,
            )
            .filter((i) => i.quantity > 0),
        })),
      clear: () => set({ items: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      total: () => {
        return get().items.reduce((sum, item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return sum;
          const unit = item.isSubscription ? product.price * 0.85 : product.price;
          return sum + unit * item.quantity;
        }, 0);
      },
      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      ecoImpact: () => {
        const totalItems = get().items.reduce((sum, i) => sum + i.quantity, 0);
        const co2Saved = totalItems * 30 * (87 - 12);
        const capsulesAvoided = totalItems * 30;
        return { co2Saved, capsulesAvoided };
      },
    }),
    {
      name: 'matchio-cart',
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
