import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { MediaPlaceholder } from '@/components/media-placeholder';

export default function HeritagePage() {
  return (
    <section className="section-shell">
      <SectionHeading
        kicker="Héritage Entrepreneuriat"
        title="La plateforme éducative qui démocratise le savoir d’entrepreneurs québécois"
        intro="Un produit pensé pour rendre l’apprentissage entrepreneurial plus accessible, actionnable et durable."
      />
      <div className="surface grid gap-8 overflow-hidden p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">Heritage Entrepreneuriat</h3>
          <p className="leading-relaxed text-mist">
            Explorez un contenu structuré autour d’expériences terrain, de perspectives locales et de ressources concrètes
            pour passer de l’idée à l’exécution avec plus de clarté.
          </p>
          <Link
            href="https://www.heritageentrepreneuriat.ca/"
            className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Découvrir la plateforme
          </Link>
        </div>
        <MediaPlaceholder label="Plateforme Héritage Entrepreneuriat" className="h-80 rounded-2xl border border-line" />
      </div>
    </section>
  );
}
