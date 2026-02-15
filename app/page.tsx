import Link from 'next/link';
import { EventCard } from '@/components/event-card';
import { SectionHeading } from '@/components/section-heading';
import { MediaPlaceholder } from '@/components/media-placeholder';
import { events, partners } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <section className="section-shell pb-14 pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-8">
            <p className="kicker">Écosystème entrepreneurial UL</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Événements et ressources pour <span className="text-accent">futurs entrepreneurs</span>.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-mist">
              Le Regroupement des Étudiants Entrepreneurs de l’Université Laval fait rayonner la culture
              entrepreneuriale sur le campus et connecte les talents au monde des affaires.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/events" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90">
                Découvrir les événements
              </Link>
              <Link href="/heritage" className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/60">
                Explorer Héritage Entrepreneuriat
              </Link>
            </div>
          </div>
          <div className="surface overflow-hidden">
            <MediaPlaceholder label="Membres du RÉEL en événement" className="h-[24rem]" />
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <SectionHeading kicker="Highlights" title="Ce qui vous attend" intro="Une programmation concrète pour apprendre, connecter et lancer des projets." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-8">
        <SectionHeading kicker="Partenaires" title="Merci à nos partenaires officiels" />
        <div className="surface grid gap-4 p-8 sm:grid-cols-2 md:grid-cols-4">
          {partners.map((partner) => (
            <p key={partner} className="text-sm font-medium text-white/90">
              {partner}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
