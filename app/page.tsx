import { EventCard } from '@/components/event-card';
import { ExecutiveCard } from '@/components/executive-card';
import { MediaPlaceholder } from '@/components/media-placeholder';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Label } from '@/components/ui/label';
import { Timeline } from '@/components/ui/timeline';
import { events, executives, partners, timeline } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <section id="accueil" className="relative min-h-[92vh] overflow-hidden border-b border-line bg-ink text-paper">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(236,242,255,0.18),transparent_38%),linear-gradient(180deg,#1f335f_0%,#111c3b_42%,#080d19_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

        <Container className="relative z-10 grid min-h-[92vh] gap-8 py-10 md:items-end md:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 pb-8 md:pb-12">
            <h1 className="display-title animate-in-view max-w-5xl text-7xl leading-[0.82] text-paper md:text-[11rem]">RÉEL</h1>
            <p className="max-w-2xl text-base leading-relaxed text-paper/85 md:text-lg">
              Événements et ressources pour futurs entrepreneurs. Le Regroupement des Étudiants Entrepreneurs de
              l’Université Laval connecte la communauté étudiante au monde des affaires.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#evenements">Voir les événements</Button>
              <Button href="#heritage" kind="ghost">
                Découvrir Héritage
              </Button>
            </div>
          </div>
          <MediaPlaceholder label="RÉEL en action" src="/images/Sans-titre-7.png" className="h-[22rem] md:h-[34rem] lg:h-[42rem]" />
        </Container>
      </section>

      <section id="about" className="border-b border-line bg-[#090f1f] py-16 text-paper md:py-24">
        <Container>
          <Label className="text-accent">À propos</Label>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="display-title animate-in-view text-5xl leading-[0.9] md:text-7xl">
              Après des années à coacher des entrepreneur·e·s, on continue à connecter les idées aux actions.
            </h2>
            <MediaPlaceholder
              label="Portraits de la communauté RÉEL"
              src="/images/DSC08797-Edit-scaled.jpg"
              className="h-72 rounded-2xl border-paper/20"
            />
          </div>
          <div className="mt-8">
            <Timeline items={timeline} tone="dark" />
          </div>
        </Container>
      </section>

      <section id="evenements" className="bg-[#0a111f] py-16 md:py-24">
        <Container>
          <header className="mb-10 max-w-3xl space-y-4 md:mb-14">
            <Label>Événements</Label>
            <h2 className="display-title animate-in-view text-5xl leading-[0.9] text-paper md:text-7xl">
              Conférences, réseautage et expériences à impact
            </h2>
            <p className="text-base leading-relaxed text-paper/75 md:text-lg">
              Une programmation concrète pour apprendre, connecter et lancer des projets.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </Container>
      </section>

      <section id="executif" className="border-y border-line bg-[#070c17] py-16 md:py-24">
        <Container>
          <header className="mb-10 max-w-3xl space-y-4 md:mb-14">
            <Label>Exécutif</Label>
            <h2 className="display-title animate-in-view text-5xl leading-[0.9] text-paper md:text-7xl">
              Une équipe engagée pour activer l’ambition étudiante
            </h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {executives.map((member) => (
              <ExecutiveCard key={member.name} {...member} />
            ))}
          </div>
        </Container>
      </section>

      <section id="heritage" className="bg-[#090f1e] py-16 md:py-24">
        <Container>
          <div className="grid gap-8 rounded-3xl border border-line bg-[#0e1628] p-8 shadow-soft lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <Label>Héritage Entrepreneuriat</Label>
              <h2 className="display-title animate-in-view text-5xl leading-[0.9] text-paper md:text-7xl">
                Une plateforme éducative pour démocratiser le savoir entrepreneurial
              </h2>
              <p className="leading-relaxed text-paper/75">
                Explorez un contenu structuré autour d’expériences terrain, de perspectives locales et de ressources
                concrètes pour passer de l’idée à l’exécution avec plus de clarté.
              </p>
              <Button href="https://www.heritageentrepreneuriat.ca/">Accéder à la plateforme</Button>
            </div>
            <MediaPlaceholder label="Plateforme Héritage Entrepreneuriat" src="/images/DSC08963-scaled.jpg" className="h-80 rounded-2xl" />
          </div>
        </Container>
      </section>

      <section id="contact" className="border-t border-line bg-[#060b15] py-16 md:py-24">
        <Container>
          <header className="mb-10 max-w-3xl space-y-4">
            <Label>Nous joindre</Label>
            <h2 className="display-title animate-in-view text-5xl leading-[0.9] text-paper md:text-7xl">
              Parlez-nous de votre projet ou d’une collaboration
            </h2>
          </header>
          <form className="grid gap-5 rounded-3xl border border-line bg-[#0b1323] p-8 md:grid-cols-2" aria-label="Formulaire de contact">
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-paper/70">
              Prénom et nom
              <input className="w-full rounded-xl border border-line bg-[#060b15] px-4 py-3 text-paper outline-none transition focus:border-accent" name="name" type="text" required />
            </label>
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-paper/70">
              Courriel
              <input className="w-full rounded-xl border border-line bg-[#060b15] px-4 py-3 text-paper outline-none transition focus:border-accent" name="email" type="email" required />
            </label>
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-paper/70 md:col-span-2">
              Sujet
              <input className="w-full rounded-xl border border-line bg-[#060b15] px-4 py-3 text-paper outline-none transition focus:border-accent" name="subject" type="text" required />
            </label>
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-paper/70 md:col-span-2">
              Message
              <textarea className="min-h-36 w-full rounded-xl border border-line bg-[#060b15] px-4 py-3 text-paper outline-none transition focus:border-accent" name="message" required />
            </label>
            <div className="md:col-span-2">
              <Button type="submit">Envoyer le message</Button>
            </div>
          </form>
          <div className="mt-8 grid gap-0 rounded-2xl border border-line md:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner) => (
              <p
                key={partner}
                className="border-b border-line px-6 py-5 text-xs font-semibold uppercase tracking-[0.08em] text-paper/75 md:border-r md:last:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 xl:border-b-0"
              >
                {partner}
              </p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
