import { SectionHeading } from '@/components/section-heading';
import { timeline } from '@/lib/content';

export default function AboutPage() {
  return (
    <section className="section-shell">
      <SectionHeading
        kicker="À propos"
        title="Qui sommes-nous?"
        intro="Le Regroupement des Étudiants Entrepreneurs de l’Université Laval est une association interfacultaire dédiée à la culture entrepreneuriale."
      />
      <p className="max-w-3xl text-mist">
        Chaque jour, les membres du RÉEL soutiennent les jeunes entrepreneurs en développant leurs connaissances,
        en élargissant leur réseau de contacts et en enflammant leur passion pour l’entrepreneuriat.
      </p>
      <div className="mt-14 space-y-6">
        {timeline.map((step) => (
          <article key={step.year} className="surface grid gap-4 p-6 md:grid-cols-[120px_1fr] md:items-start">
            <p className="text-lg font-semibold text-accent">{step.year}</p>
            <p className="leading-relaxed text-mist">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
