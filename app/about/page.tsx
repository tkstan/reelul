import { Section } from '@/components/ui/section';
import { Timeline } from '@/components/ui/timeline';
import { timeline } from '@/lib/content';

export default function AboutPage() {
  return (
    <Section
      label="À propos"
      title="Qui sommes-nous?"
      intro="Le Regroupement des Étudiants Entrepreneurs de l’Université Laval est une association interfacultaire dédiée à la culture entrepreneuriale."
    >
      <p className="mb-14 max-w-3xl text-base leading-relaxed text-paper/75 md:text-lg">
        Chaque jour, les membres du RÉEL soutiennent les jeunes entrepreneurs en développant leurs connaissances,
        en élargissant leur réseau de contacts et en enflammant leur passion pour l’entrepreneuriat.
      </p>
      <Timeline items={timeline} tone="dark" />
    </Section>
  );
}
