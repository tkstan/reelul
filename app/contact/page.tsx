import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export default function ContactPage() {
  return (
    <Section
      label="Nous joindre"
      title="Parlez-nous de votre projet, de votre idée ou d’une collaboration"
    >
      <form className="grid gap-5 border border-line bg-paper-soft p-8 md:grid-cols-2" aria-label="Formulaire de contact">
        <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
          Prénom et nom
          <input
            className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent"
            name="name"
            type="text"
            required
          />
        </label>
        <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
          Courriel
          <input
            className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent"
            name="email"
            type="email"
            required
          />
        </label>
        <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted md:col-span-2">
          Sujet
          <input
            className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent"
            name="subject"
            type="text"
            required
          />
        </label>
        <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted md:col-span-2">
          Message
          <textarea
            className="min-h-36 w-full border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-accent"
            name="message"
            required
          />
        </label>
        <div className="md:col-span-2">
          <Button type="submit">Envoyer le message</Button>
        </div>
      </form>
    </Section>
  );
}
