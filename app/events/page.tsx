import { EventCard } from '@/components/event-card';
import { SectionHeading } from '@/components/section-heading';
import { events } from '@/lib/content';

export default function EventsPage() {
  return (
    <section className="section-shell">
      <SectionHeading
        kicker="Événements"
        title="Conférences, réseautage et expériences à impact"
        intro="Filtrez bientôt par format, niveau et thématique. Pour le moment, explorez notre programmation active."
      />
      <div className="mb-8 flex flex-wrap gap-3 text-xs">
        {['Tous', 'Réseautage', 'Conférence', 'Communauté'].map((chip) => (
          <button
            key={chip}
            type="button"
            className="rounded-full border border-line px-4 py-2 text-mist transition hover:border-accent/50 hover:text-white"
            aria-label={`Filtrer par ${chip}`}
          >
            {chip}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </section>
  );
}
