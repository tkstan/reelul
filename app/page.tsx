import { EventCard } from '@/components/event-card';
import { MediaPlaceholder } from '@/components/media-placeholder';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Label } from '@/components/ui/label';
import { Section } from '@/components/ui/section';
import { events, partners } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(160deg,#f8f4ee_0%,#f0e8de_52%,#f8f4ee_100%)] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-7">
              <Label>Écosystème entrepreneurial UL</Label>
              <h1 className="display-title max-w-4xl text-6xl leading-[0.9] text-ink md:text-8xl">
                Événements et ressources pour futurs entrepreneurs
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
                Le Regroupement des Étudiants Entrepreneurs de l’Université Laval fait rayonner la culture
                entrepreneuriale sur le campus et connecte les talents au monde des affaires.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/events">Découvrir les événements</Button>
                <Button href="/heritage" kind="ghost">
                  Explorer Héritage Entrepreneuriat
                </Button>
              </div>
            </div>
            <MediaPlaceholder label="Membres du RÉEL en événement" className="h-[24rem] shadow-soft" />
          </div>
        </Container>
      </section>

      <Section
        label="Highlights"
        title="Ce qui vous attend"
        intro="Une programmation concrète pour apprendre, connecter et lancer des projets."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </Section>

      <Section label="Partenaires" title="Merci à nos partenaires officiels">
        <div className="grid gap-0 border border-line md:grid-cols-2 xl:grid-cols-4">
          {partners.map((partner) => (
            <p
              key={partner}
              className="border-b border-line px-6 py-6 text-sm font-semibold uppercase tracking-[0.08em] text-ink md:border-r md:last:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 xl:border-b-0"
            >
              {partner}
            </p>
          ))}
        </div>
      </Section>
    </>
  );
}
