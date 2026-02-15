import { SectionHeading } from '@/components/section-heading';

export default function ContactPage() {
  return (
    <section className="section-shell">
      <SectionHeading
        kicker="Nous joindre"
        title="Parlez-nous de votre projet, de votre idée ou d’une collaboration"
      />
      <form className="surface grid gap-5 p-8 md:grid-cols-2" aria-label="Formulaire de contact">
        <label className="space-y-2 text-sm text-mist">
          Prénom et nom
          <input className="w-full rounded-xl border border-line bg-transparent px-4 py-3 text-white outline-none transition focus:border-accent" name="name" type="text" required />
        </label>
        <label className="space-y-2 text-sm text-mist">
          Courriel
          <input className="w-full rounded-xl border border-line bg-transparent px-4 py-3 text-white outline-none transition focus:border-accent" name="email" type="email" required />
        </label>
        <label className="space-y-2 text-sm text-mist md:col-span-2">
          Sujet
          <input className="w-full rounded-xl border border-line bg-transparent px-4 py-3 text-white outline-none transition focus:border-accent" name="subject" type="text" required />
        </label>
        <label className="space-y-2 text-sm text-mist md:col-span-2">
          Message
          <textarea className="min-h-36 w-full rounded-xl border border-line bg-transparent px-4 py-3 text-white outline-none transition focus:border-accent" name="message" required />
        </label>
        <div className="md:col-span-2">
          <button type="submit" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90">
            Envoyer le message
          </button>
        </div>
      </form>
    </section>
  );
}
