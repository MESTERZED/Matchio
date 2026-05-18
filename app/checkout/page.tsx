'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, ChevronRight } from 'lucide-react';
import { useCart } from '@/lib/store/cart';
import { products } from '@/lib/data/products';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/PageHeader';
import { formatPrice, formatNumber, cn } from '@/lib/utils';

const shippingSchema = z.object({
 firstName: z.string().min(2, 'Au moins 2 caractères'),
 lastName: z.string().min(2, 'Au moins 2 caractères'),
 email: z.string().email('Email invalide'),
 phone: z.string().min(10, 'Numéro invalide'),
 address: z.string().min(5, 'Adresse trop courte'),
 city: z.string().min(2),
 zip: z.string().min(5).max(5),
 country: z.string(),
});

const paymentSchema = z.object({
 cardName: z.string().min(2),
 cardNumber: z.string().regex(/^\d{16}$/, 'Numéro invalide (16 chiffres)'),
 cardExpiry: z.string().regex(/^\d{2}\/\d{2}$/, 'Format MM/AA'),
 cardCVC: z.string().regex(/^\d{3,4}$/, 'CVC invalide'),
 plantTree: z.boolean().optional(),
 acceptCgv: z.literal(true, { errorMap: () => ({ message: 'Vous devez accepter les CGV' }) }),
});

type ShippingData = z.infer<typeof shippingSchema>;
type PaymentData = z.infer<typeof paymentSchema>;

const stepLabels = ['Récap', 'Livraison', 'Paiement'];

export default function CheckoutPage() {
 const router = useRouter();
 const { items, total, ecoImpact, clear } = useCart();
 const [step, setStep] = useState<0 | 1 | 2>(0);
 const [shippingData, setShippingData] = useState<ShippingData | null>(null);
 const [orderId, setOrderId] = useState<string | null>(null);

 const subtotal = total();
 const shipping = subtotal > 35 ? 0 : 4.9;

 const shippingForm = useForm<ShippingData>({
 resolver: zodResolver(shippingSchema),
 defaultValues: { country: 'France' },
 });

 const paymentForm = useForm<PaymentData>({
 resolver: zodResolver(paymentSchema),
 defaultValues: { plantTree: false },
 });

 const finalTotal = subtotal + shipping + (paymentForm.watch('plantTree') ? 1 : 0);
 const impact = ecoImpact();

 if (items.length === 0 && !orderId) {
 return (
 <>
 <PageHeader
 title="Votre panier est vide."
 lead="Impossible de continuer le checkout sans articles."
 />
 <section className="bg-cream pb-24 text-center">
 <Button href="/boutique" variant="secondary" size="lg">
 Explorer la gamme
 </Button>
 </section>
 </>
 );
 }

 if (orderId) {
 return (
 <>
 <PageHeader eyebrow="Commande confirmée" title="Merci." />
 <section className="bg-cream pb-24">
 <div className="container-narrow">
 <div className="p-10 bg-matcha-mist/60 border border-matcha-deep/20">
 <div className="w-12 h-12 bg-matcha-deep text-cream rounded-full flex items-center justify-center">
 <Check size={22} />
 </div>
 <h2 className="mt-6 font-display italic text-3xl md:text-4xl text-matcha-deep">
 Commande #{orderId} confirmée
 </h2>
 <p className="mt-4 text-ink-soft leading-relaxed">
 Un email de confirmation a été envoyé. Votre commande sera préparée à
 Aubervilliers et expédiée sous 48 h en livraison neutre en carbone.
 </p>
 <p className="mt-6 text-sm text-matcha-deep">
 Vous avez économisé <strong className="font-mono">{formatNumber(impact.co2Saved)} g</strong>{' '}
 de CO₂ avec cette commande. Merci.
 </p>
 <div className="mt-10 flex flex-wrap gap-4">
 <Button href="/" variant="secondary" size="lg">
 Retour à l&apos;accueil
 </Button>
 <Button href="/journal" variant="ghostDark" size="lg">
 Lire le journal
 </Button>
 </div>
 </div>
 </div>
 </section>
 </>
 );
 }

 return (
 <>
 <PageHeader eyebrow="Commande" title="Trois étapes." variant="cream" />

 <section className="bg-cream pb-24">
 <div className="container-wide">
 <div className="flex items-center gap-2 md:gap-6 mb-12 max-w-xl">
 {stepLabels.map((label, i) => (
 <div key={label} className="flex items-center gap-2 md:gap-4 flex-1">
 <div
 className={cn(
 'w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono border-2 transition-colors flex-shrink-0',
 step === i
 ? 'bg-matcha-deep border-matcha-deep text-cream'
 : step > i
 ? 'bg-clay border-clay text-ink'
 : 'border-cream-dark text-ink-muted',
 )}
 >
 {step > i ? <Check size={14} /> : String(i + 1).padStart(2, '0')}
 </div>
 <span className={cn('text-xs uppercase tracking-[0.15em] hidden sm:inline', step >= i ? 'text-ink' : 'text-ink-muted')}>
 {label}
 </span>
 {i < stepLabels.length - 1 && (
 <ChevronRight size={14} className="text-ink-muted flex-shrink-0" />
 )}
 </div>
 ))}
 </div>

 <div className="grid lg:grid-cols-12 gap-12">
 <div className="lg:col-span-7">
 {step === 0 && (
 <div>
 <h2 className="font-display italic text-3xl text-matcha-deep mb-8">
 Récapitulatif de votre commande
 </h2>
 <div className="border-t border-cream-dark divide-y divide-cream-dark">
 {items.map((item) => {
 const product = products.find((p) => p.id === item.productId);
 if (!product) return null;
 const unit = item.isSubscription ? product.price * 0.85 : product.price;
 return (
 <div key={`${item.productId}-${item.variantId}`} className="py-5 flex justify-between gap-4">
 <div>
 <p className="font-medium text-sm uppercase tracking-wide">
 {product.name}
 {item.isSubscription && <span className="ml-2 text-[10px] text-matcha-mid">· Abonnement</span>}
 </p>
 <p className="text-xs text-ink-muted mt-1">
 {product.tagline} · Quantité {item.quantity}
 </p>
 </div>
 <span className="font-mono text-sm whitespace-nowrap">
 {formatPrice(unit * item.quantity)}
 </span>
 </div>
 );
 })}
 </div>

 <div className="mt-8">
 <label className="eyebrow block mb-2">Code promo</label>
 <div className="flex gap-2">
 <input
 type="text"
 placeholder="MATCHA10"
 className="flex-1 px-4 py-3 bg-transparent border border-cream-dark focus:border-matcha-deep outline-none text-sm"
 />
 <Button variant="ghostDark" size="md">Appliquer</Button>
 </div>
 </div>

 <Button
 onClick={() => setStep(1)}
 variant="secondary"
 size="lg"
 className="mt-10 w-full"
 >
 Continuer · Livraison
 </Button>
 </div>
 )}

 {step === 1 && (
 <form
 onSubmit={shippingForm.handleSubmit((data) => {
 setShippingData(data);
 setStep(2);
 })}
 className="space-y-5"
 >
 <h2 className="font-display italic text-3xl text-matcha-deep mb-2">
 Adresse de livraison
 </h2>
 <div className="grid sm:grid-cols-2 gap-5">
 <FormField name="firstName" label="Prénom" form={shippingForm} />
 <FormField name="lastName" label="Nom" form={shippingForm} />
 </div>
 <FormField name="email" label="Email" form={shippingForm} type="email" />
 <FormField name="phone" label="Téléphone" form={shippingForm} type="tel" />
 <FormField name="address" label="Adresse" form={shippingForm} />
 <div className="grid sm:grid-cols-3 gap-5">
 <FormField name="zip" label="Code postal" form={shippingForm} />
 <div className="sm:col-span-2">
 <FormField name="city" label="Ville" form={shippingForm} />
 </div>
 </div>

 <div className="flex gap-3 pt-4">
 <Button
 type="button"
 onClick={() => setStep(0)}
 variant="ghostDark"
 size="lg"
 >
 ← Récap
 </Button>
 <Button type="submit" variant="secondary" size="lg" className="flex-1">
 Continuer · Paiement
 </Button>
 </div>
 </form>
 )}

 {step === 2 && (
 <form
 onSubmit={paymentForm.handleSubmit(() => {
 setOrderId(`MAT-${String(Math.floor(Math.random() * 99999)).padStart(5, '0')}`);
 clear();
 window.scrollTo({ top: 0, behavior: 'smooth' });
 })}
 className="space-y-5"
 >
 <h2 className="font-display italic text-3xl text-matcha-deep mb-2">
 Paiement
 </h2>
 <p className="text-sm text-ink-soft">
 Démo non-fonctionnelle, ce site n&apos;effectue pas de vraie transaction.
 </p>

 <FormField name="cardName" label="Nom sur la carte" form={paymentForm} />
 <FormField
 name="cardNumber"
 label="Numéro de carte"
 form={paymentForm}
 placeholder="4242 4242 4242 4242"
 />
 <div className="grid grid-cols-2 gap-5">
 <FormField name="cardExpiry" label="Expiration" form={paymentForm} placeholder="MM/AA" />
 <FormField name="cardCVC" label="CVC" form={paymentForm} placeholder="123" />
 </div>

 <label className="flex items-start gap-4 p-5 border border-matcha-deep/15 bg-matcha-mist/40 cursor-pointer">
 <input
 type="checkbox"
 {...paymentForm.register('plantTree')}
 className="mt-1 accent-matcha-deep w-4 h-4"
 />
 <div className="flex-1">
 <p className="font-medium text-sm text-matcha-deep">
 Planter un arbre supplémentaire, +1 €
 </p>
 <p className="mt-1 text-xs text-ink-soft">
 Reversé directement à Reforest&apos;Action pour un arbre planté en France.
 </p>
 </div>
 </label>

 <label className="flex items-start gap-3 text-sm text-ink-soft">
 <input
 type="checkbox"
 {...paymentForm.register('acceptCgv')}
 className="mt-1 accent-matcha-deep w-4 h-4"
 />
 <span>
 J&apos;accepte les conditions générales de vente et la politique de
 confidentialité.
 </span>
 </label>
 {paymentForm.formState.errors.acceptCgv && (
 <p className="text-xs text-red-800">
 {paymentForm.formState.errors.acceptCgv.message}
 </p>
 )}

 <div className="flex gap-3 pt-4">
 <Button
 type="button"
 onClick={() => setStep(1)}
 variant="ghostDark"
 size="lg"
 >
 ← Livraison
 </Button>
 <Button type="submit" variant="secondary" size="lg" className="flex-1">
 Confirmer · {formatPrice(finalTotal)}
 </Button>
 </div>
 </form>
 )}
 </div>

 <aside className="lg:col-span-5">
 <div className="sticky top-28 p-8 bg-cream-dark/40 border border-cream-dark">
 <h3 className="font-display italic text-2xl text-matcha-deep">Total</h3>
 <div className="mt-6 space-y-3 text-sm">
 <div className="flex justify-between">
 <span className="text-ink-soft">Sous-total</span>
 <span className="font-mono">{formatPrice(subtotal)}</span>
 </div>
 <div className="flex justify-between">
 <span className="text-ink-soft">Livraison neutre carbone</span>
 <span className="font-mono">{shipping === 0 ? 'Offerte' : formatPrice(shipping)}</span>
 </div>
 {paymentForm.watch('plantTree') && (
 <div className="flex justify-between text-matcha-mid">
 <span>+ Un arbre Reforest&apos;Action</span>
 <span className="font-mono">+ 1,00 €</span>
 </div>
 )}
 <div className="pt-3 border-t border-cream-dark flex justify-between text-base">
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

 {shippingData && step >= 2 && (
 <div className="mt-6 p-4 bg-cream text-xs text-ink-soft border border-cream-dark">
 <p className="font-semibold uppercase tracking-[0.15em] text-clay text-[0.65rem]">
 Adresse de livraison
 </p>
 <p className="mt-2 leading-relaxed">
 {shippingData.firstName} {shippingData.lastName}<br />
 {shippingData.address}<br />
 {shippingData.zip} {shippingData.city}
 </p>
 </div>
 )}
 </div>
 </aside>
 </div>
 </div>
 </section>
 </>
 );
}

interface FormFieldProps {
 name: string;
 label: string;
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 form: ReturnType<typeof useForm<any>>;
 type?: string;
 placeholder?: string;
}

function FormField({
 name,
 label,
 form,
 type = 'text',
 placeholder,
}: FormFieldProps) {
 const error = form.formState.errors[name];
 return (
 <div>
 <label className="eyebrow block mb-2" htmlFor={name}>
 {label}
 </label>
 <input
 id={name}
 type={type}
 placeholder={placeholder}
 {...form.register(name)}
 className={cn(
 'w-full px-4 py-3 bg-transparent border border-cream-dark text-ink focus:border-matcha-deep outline-none transition-colors',
 error && 'border-red-700/50',
 )}
 />
 {error && (
 <p className="mt-1.5 text-xs text-red-800">{error.message as string}</p>
 )}
 </div>
 );
}
