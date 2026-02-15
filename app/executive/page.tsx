import { ExecutiveCard } from '@/components/executive-card';
import { Section } from '@/components/ui/section';
import { executives } from '@/lib/content';

export default function ExecutivePage() {
  return (
    <Section
      label="Exécutif"
      title="Une équipe engagée pour activer l’ambition étudiante"
      intro="Des profils complémentaires qui orchestrent les initiatives, les partenariats et l’expérience globale du RÉEL."
    >
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {executives.map((member) => (
          <ExecutiveCard key={member.name} {...member} />
        ))}
      </div>
    </Section>
  );
}
