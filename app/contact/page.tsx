import { PageHeader } from '@/components/ui/PageHeader';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/animations/Reveal';
import { Accordion } from '@/components/shop/Accordion';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata = {
 title: 'Contact & FAQ',
 description: 'Une question, une demande, une remarque ? Notre équipe répond sous 24 h.',
};

const faqs = [
 {
 title: 'Comment préparer le matcha sans machine ?',
 content: (
 <p>
 Le matcha Matchio se prépare manuellement en 3 minutes. Chauffez 70 ml
 d&apos;eau filtrée à 75-80°C (jamais bouillante). Ouvrez un sachet, versez
 les 5 g dans un bol matcha (chawan) tiède. Ajoutez deux cuillères d&apos;eau,
 formez une pâte, puis versez le reste. Fouettez au chasen (fouet bambou) en
 W rapide pendant 20 secondes. C&apos;est ce geste qui fait du matcha un
 rituel et non une boisson. Le Ritual Set (45 €) contient tout le nécessaire
 pour démarrer.
 </p>
 ),
 },
 {
 title: 'Comment fonctionne le programme consigne Heritage Box ?',
 content: (
 <p>
 Quand votre Heritage Box est usée, demandez votre étiquette de retour gratuite
 depuis votre compte. Glissez la boîte dans son emballage d&apos;origine ou dans
 l&apos;enveloppe Mondial Relay fournie. À réception à notre atelier
 d&apos;Aubervilliers, vous recevez automatiquement 10 € de crédit utilisable sur
 votre prochaine commande.
 </p>
 ),
 },
 {
 title: 'Quelle est votre politique de livraison ?',
 content: (
 <p>
 Livraison Colissimo neutre en carbone offerte à partir de 35 €. Sous 48 h en
 France métropolitaine. Compensation carbone via reboisement Reforest&apos;Action
 incluse. Pour la livraison express (24 h), surcoût 6 €.
 </p>
 ),
 },
 {
 title: 'Puis-je retourner un produit ?',
 content: (
 <p>
 Tout produit Matchio peut être retourné dans les 30 jours suivant la réception,
 s&apos;il est intact ou en cas de défaut. Étiquette de retour gratuite. Le
 remboursement intervient sous 7 jours après réception. Les Refill Pack ouverts
 ne sont pas repris pour des raisons d&apos;hygiène.
 </p>
 ),
 },
 {
 title: 'Vos sachets sont-ils vraiment compostables chez moi ?',
 content: (
 <p>
 Oui. Nos sachets sont 100 % en papier kraft non blanchi, sans plastification,
 certifiés OK Compost HOME. Vous pouvez les mettre directement dans un
 composteur de jardin, un lombricomposteur d&apos;appartement, ou dans le bac
 à déchets organiques de votre commune. Comptez 6 à 8 semaines pour un retour
 complet à la terre. Les résidus de matcha à l&apos;intérieur sont un
 excellent activateur, riches en azote.
 </p>
 ),
 },
 {
 title: 'Comment fonctionne l\'abonnement ?',
 content: (
 <p>
 L&apos;abonnement est mensuel, modifiable à tout moment, annulable en un clic.
 Réduction de 15 % automatique sur chaque livraison. Vous pouvez changer de
 formule, sauter un mois, ou stopper depuis votre compte. Aucun engagement.
 </p>
 ),
 },
 {
 title: 'Je n\'ai pas reçu ma commande, que faire ?',
 content: (
 <p>
 Vérifiez d&apos;abord votre point relais Colissimo. Si elle n&apos;y est pas après
 72 h, écrivez-nous depuis le formulaire ci-dessous avec votre numéro de
 commande, nous renvoyons un colis sous 48 h.
 </p>
 ),
 },
];

export default function ContactPage() {
 return (
 <>
 <PageHeader
 eyebrow="Contact"
 title="Une question. Une réponse, sous 24 h."
 lead="Notre équipe lit, prend le temps, répond. Pas de chatbot, pas de file d'attente artificielle."
 />

 <section className="bg-cream pb-24">
 <div className="container-wide grid lg:grid-cols-2 gap-16 lg:gap-24">
 <Reveal>
 <Eyebrow>Nous écrire</Eyebrow>
 <h2 className="mt-4 font-display italic text-3xl md:text-4xl text-matcha-deep">
 Le formulaire.
 </h2>
 <div className="mt-10">
 <ContactForm />
 </div>
 </Reveal>

 <Reveal>
 <Eyebrow>Joindre directement</Eyebrow>
 <h2 className="mt-4 font-display italic text-3xl md:text-4xl text-matcha-deep">
 Trois canaux.
 </h2>
 <div className="mt-10 space-y-8">
 <div>
 <p className="text-xs uppercase tracking-[0.18em] text-clay">Email</p>
 <a
 href="mailto:bonjour@matchio.fr"
 className="mt-2 block text-2xl font-display italic text-matcha-deep link-underline"
 >
 bonjour@matchio.fr
 </a>
 <p className="mt-2 text-xs text-ink-muted">Réponse sous 24 h ouvrées</p>
 </div>
 <div>
 <p className="text-xs uppercase tracking-[0.18em] text-clay">Téléphone</p>
 <a
 href="tel:+33145000000"
 className="mt-2 block text-2xl font-display italic text-matcha-deep link-underline"
 >
 +33 1 45 00 00 00
 </a>
 <p className="mt-2 text-xs text-ink-muted">Lundi au vendredi, 9h–18h</p>
 </div>
 <div>
 <p className="text-xs uppercase tracking-[0.18em] text-clay">Adresse</p>
 <p className="mt-2 text-lg text-ink leading-relaxed">
 Matchio SAS<br />
 12 rue du Faubourg Saint-Honoré<br />
 75008 Paris
 </p>
 <p className="mt-2 text-xs text-ink-muted">Atelier consigne : Aubervilliers</p>
 </div>
 </div>
 </Reveal>
 </div>
 </section>

 <section id="faq" className="bg-cream-dark/30 py-24 md:py-32">
 <div className="container-narrow">
 <Reveal>
 <Eyebrow>Foire aux questions</Eyebrow>
 <h2 className="mt-4 font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-matcha-deep">
 Sept questions qui reviennent souvent.
 </h2>
 </Reveal>

 <Reveal className="mt-12">
 <Accordion items={faqs} />
 </Reveal>
 </div>
 </section>
 </>
 );
}
