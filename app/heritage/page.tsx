import { MediaPlaceholder } from '@/components/media-placeholder';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';

export default function HeritagePage() {
  return (
    <Section
      label="Héritage Entrepreneuriat"
      title="La plateforme éducative qui démocratise le savoir d’entrepreneurs québécois"
      intro="Un produit pensé pour rendre l’apprentissage entrepreneurial plus accessible, actionnable et durable."
    >
      <Card className="grid gap-8 rounded-3xl p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <h3 className="font-display text-5xl uppercase leading-[0.92] text-paper">Heritage Entrepreneuriat</h3>
          <p className="leading-relaxed text-paper/75">
            Explorez un contenu structuré autour d’expériences terrain, de perspectives locales et de ressources
            concrètes pour passer de l’idée à l’exécution avec plus de clarté.
          </p>
          <Button href="https://heritage-entrepreneuriat.vercel.app/">Découvrir la plateforme</Button>
        </div>
        <MediaPlaceholder label="Plateforme Héritage Entrepreneuriat" className="h-80" />
      </Card>
    </Section>
  );
}
