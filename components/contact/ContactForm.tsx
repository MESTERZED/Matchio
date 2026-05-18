'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, 'Au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.enum(['commande', 'consigne', 'partenariat', 'autre']),
  message: z.string().min(10, 'Au moins 10 caractères'),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { subject: 'commande' },
  });

  async function onSubmit(data: FormData) {
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Contact form data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="eyebrow block mb-2" htmlFor="name">
          Nom
        </label>
        <input
          id="name"
          {...register('name')}
          className={cn(
            'w-full px-4 py-3 bg-transparent border border-cream-dark text-ink focus:border-matcha-deep outline-none transition-colors',
            errors.name && 'border-red-700/50',
          )}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-800">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="eyebrow block mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={cn(
            'w-full px-4 py-3 bg-transparent border border-cream-dark text-ink focus:border-matcha-deep outline-none transition-colors',
            errors.email && 'border-red-700/50',
          )}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-800">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="eyebrow block mb-2" htmlFor="subject">
          Sujet
        </label>
        <select
          id="subject"
          {...register('subject')}
          className="w-full px-4 py-3 bg-transparent border border-cream-dark text-ink focus:border-matcha-deep outline-none transition-colors"
        >
          <option value="commande">Une commande</option>
          <option value="consigne">Le programme consigne</option>
          <option value="partenariat">Un partenariat</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label className="eyebrow block mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className={cn(
            'w-full px-4 py-3 bg-transparent border border-cream-dark text-ink focus:border-matcha-deep outline-none transition-colors resize-y',
            errors.message && 'border-red-700/50',
          )}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-800">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" variant="secondary" size="lg" disabled={isSubmitting} className="w-full">
        {submitted ? (
          <>
            <Check size={18} /> Message envoyé
          </>
        ) : isSubmitting ? (
          'Envoi…'
        ) : (
          'Envoyer le message'
        )}
      </Button>

      <p className="text-xs text-ink-muted">
        Réponse sous 24 h ouvrées. Vos données ne sont utilisées que pour cette demande.
      </p>
    </form>
  );
}
