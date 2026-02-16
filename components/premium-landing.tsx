'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

type BlocCalendrier = {
  id: string;
  titre: string;
  date: string;
  lieu: string;
  description: string;
  image: string;
  ordre: number;
};

type MembreExecutif = {
  id: string;
  nom: string;
  role: string;
  axe: string;
  image: string;
  ordre: number;
};

type PremiumLandingProps = {
  calendrier: BlocCalendrier[];
  executif: MembreExecutif[];
};

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PremiumLanding({ calendrier, executif }: PremiumLandingProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const [slide, setSlide] = useState(0);
  const swipeStartX = useRef<number | null>(null);

  const evenementsDate = useMemo(
    () =>
      calendrier
        .map((event) => ({ ...event, parsedDate: parserDateFrancaise(event.date) }))
        .filter((event): event is BlocCalendrier & { parsedDate: Date } => event.parsedDate instanceof Date),
    [calendrier]
  );

  const moisInitial = evenementsDate[0]?.parsedDate ?? new Date();
  const [moisAffiche, setMoisAffiche] = useState({
    year: moisInitial.getFullYear(),
    month: moisInitial.getMonth(),
  });

  const [dateSelectionnee, setDateSelectionnee] = useState(() => toIsoDateString(moisInitial));

  const evenementsParJour = useMemo(() => {
    const map = new Map<string, (BlocCalendrier & { parsedDate: Date })[]>();
    for (const event of evenementsDate) {
      const iso = toIsoDateString(event.parsedDate);
      const current = map.get(iso) ?? [];
      current.push(event);
      map.set(iso, current);
    }
    return map;
  }, [evenementsDate]);

  const nomMois = new Intl.DateTimeFormat('fr-CA', { month: 'long', year: 'numeric' });
  const dateSelectionLabel = new Intl.DateTimeFormat('fr-CA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const dateDuMois = new Date(moisAffiche.year, moisAffiche.month, 1);
  const premierJour = getLundiFirstWeekday(dateDuMois);
  const nbJours = getDaysInMonth(moisAffiche.year, moisAffiche.month);

  const cellulesCalendrier = [
    ...Array.from({ length: premierJour }, (_, index) => ({ type: 'empty' as const, key: `empty-${index}` })),
    ...Array.from({ length: nbJours }, (_, index) => {
      const date = new Date(moisAffiche.year, moisAffiche.month, index + 1);
      const iso = toIsoDateString(date);
      const eventsCount = evenementsParJour.get(iso)?.length ?? 0;
      return {
        type: 'day' as const,
        key: iso,
        day: index + 1,
        iso,
        eventsCount,
      };
    }),
  ];

  const evenementsSelectionnes = evenementsParJour.get(dateSelectionnee) ?? [];

  useEffect(() => {
    if (evenementsParJour.has(dateSelectionnee)) return;
    const firstEventDate = evenementsDate[0]?.parsedDate;
    if (!firstEventDate) return;
    setDateSelectionnee(toIsoDateString(firstEventDate));
    setMoisAffiche({ year: firstEventDate.getFullYear(), month: firstEventDate.getMonth() });
  }, [dateSelectionnee, evenementsDate, evenementsParJour]);

  useEffect(() => {
    if (executif.length <= 1) return;

    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % executif.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [executif.length]);

  const allerPrecedent = () => {
    if (executif.length === 0) return;
    setSlide((current) => (current - 1 + executif.length) % executif.length);
  };

  const allerSuivant = () => {
    if (executif.length === 0) return;
    setSlide((current) => (current + 1) % executif.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    swipeStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (swipeStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX;
    if (typeof endX !== 'number') {
      swipeStartX.current = null;
      return;
    }

    const distance = endX - swipeStartX.current;
    swipeStartX.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance > 0) {
      allerPrecedent();
      return;
    }
    allerSuivant();
  };

  return (
    <>
      <section id="accueil" ref={heroRef} className="relative min-h-screen overflow-hidden border-b border-black/10 bg-[#f5f5f2]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-105">
          <SafeImage src="/images/hero-accueil.jpg" alt="Événement étudiant du RÉEL" fill priority className="object-cover object-[center_24%] md:object-[center_20%]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55" />

        <Container className="relative z-10 flex min-h-screen items-end pb-28 pt-24 sm:pb-24 sm:pt-32 md:pb-24 md:pt-36">
          <Reveal>
            <div className="max-w-4xl space-y-6 text-white md:space-y-7">
              <p className="text-xs uppercase tracking-[0.34em] text-white/85">RÉEL — ULaval</p>
              <h1 className="max-w-5xl text-[2.1rem] font-semibold uppercase leading-[0.92] tracking-[0.02em] sm:text-5xl sm:leading-[0.9] sm:tracking-[0.04em] md:text-6xl lg:text-7xl">
                L’entrepreneuriat étudiant en mouvement
              </h1>
              <p className="max-w-2xl text-base font-light leading-relaxed tracking-[0.02em] text-white/88 md:text-base md:tracking-[0.08em]">
                Association étudiante née à la Faculté des sciences de l’administration et ouverte à toute la communauté
                interfacultaire de l’Université Laval.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button href="#calendrier" className="w-full sm:w-auto">
                  Voir le calendrier
                </Button>
                <Button
                  href="#executif"
                  kind="ghost"
                  className="w-full border-white/40 text-white hover:border-white/80 hover:text-white sm:w-auto"
                >
                  Rencontrer l’exécutif
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="calendrier" className="bg-[#f5f5f2] py-20 md:py-28">
        <Container>
          <Reveal>
            <header className="mb-10 max-w-3xl space-y-4 md:mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a0f14]">Calendrier</p>
              <h2 className="text-4xl font-semibold uppercase tracking-[0.08em] text-[#111315] md:text-6xl">Prochains rendez-vous</h2>
              <p className="text-sm tracking-[0.04em] text-black/70 md:text-base">
                Une programmation concrète pour apprendre, connecter et faire avancer des projets avec méthode.
              </p>
            </header>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="rounded-[1.8rem] border border-black/10 bg-white p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setMoisAffiche((current) => {
                        const previous = new Date(current.year, current.month - 1, 1);
                        return { year: previous.getFullYear(), month: previous.getMonth() };
                      })
                    }
                    className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/70 transition hover:border-[#7a0f14] hover:text-[#7a0f14]"
                  >
                    Précédent
                  </button>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111315]">{nomMois.format(dateDuMois)}</p>
                  <button
                    type="button"
                    onClick={() =>
                      setMoisAffiche((current) => {
                        const next = new Date(current.year, current.month + 1, 1);
                        return { year: next.getFullYear(), month: next.getMonth() };
                      })
                    }
                    className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/70 transition hover:border-[#7a0f14] hover:text-[#7a0f14]"
                  >
                    Suivant
                  </button>
                </div>

                <div className="mb-3 grid grid-cols-7 gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 md:text-xs">
                  {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((jour) => (
                    <span key={jour}>{jour}</span>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {cellulesCalendrier.map((cellule) => {
                    if (cellule.type === 'empty') {
                      return <span key={cellule.key} className="aspect-square rounded-xl bg-black/[0.03]" aria-hidden="true" />;
                    }

                    const estSelectionnee = cellule.iso === dateSelectionnee;
                    const hasEvents = cellule.eventsCount > 0;

                    return (
                      <button
                        key={cellule.key}
                        type="button"
                        onClick={() => setDateSelectionnee(cellule.iso)}
                        className={`group relative aspect-square rounded-xl border text-sm font-semibold transition md:text-base ${
                          estSelectionnee
                            ? 'border-[#7a0f14] bg-[#7a0f14] text-white'
                            : hasEvents
                              ? 'border-[#7a0f14]/30 bg-[#7a0f14]/5 text-[#7a0f14] hover:bg-[#7a0f14]/10'
                              : 'border-black/10 bg-white text-black/75 hover:border-black/25'
                        }`}
                        aria-label={`${cellule.day} ${nomMois.format(dateDuMois)}${hasEvents ? `, ${cellule.eventsCount} événement${cellule.eventsCount > 1 ? 's' : ''}` : ''}`}
                      >
                        {cellule.day}
                        {hasEvents && (
                          <span className={`absolute bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full ${estSelectionnee ? 'bg-white/90' : 'bg-[#7a0f14]'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <aside className="rounded-[1.8rem] border border-black/10 bg-white p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a0f14]">{dateSelectionLabel.format(new Date(dateSelectionnee))}</p>
                <div className="mt-5 space-y-5">
                  {evenementsSelectionnes.length > 0 ? (
                    evenementsSelectionnes.map((event) => (
                      <article key={event.id} className="overflow-hidden rounded-2xl border border-black/10 bg-[#f8f8f5]">
                        <SafeImage src={event.image} alt={event.titre} width={800} height={540} className="h-40 w-full object-cover" />
                        <div className="space-y-2 p-4">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-[#7a0f14]">{event.lieu}</p>
                          <h3 className="text-lg font-semibold uppercase tracking-[0.05em] text-[#121416]">{event.titre}</h3>
                          {event.description ? <p className="text-sm leading-relaxed tracking-[0.02em] text-black/70">{event.description}</p> : null}
                        </div>
                      </article>
                    ))
                  ) : (
                    <p className="rounded-2xl border border-dashed border-black/20 bg-black/[0.02] p-5 text-sm tracking-[0.03em] text-black/65">
                      Aucun événement prévu pour cette date.
                    </p>
                  )}
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="executif" className="border-y border-black/10 bg-[#fbfbf9] py-20 md:py-28">
        <Container>
          <Reveal>
            <header className="mb-10 flex items-end justify-between gap-6 md:mb-14">
              <div className="max-w-3xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a0f14]">Exécutif</p>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] text-[#111315] sm:text-4xl md:text-5xl">L’EXÉCUTIF</h2>
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={allerPrecedent}
                  className="rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-black/70 transition hover:border-[#7a0f14] hover:text-[#7a0f14]"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={allerSuivant}
                  className="rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-black/70 transition hover:border-[#7a0f14] hover:text-[#7a0f14]"
                >
                  Suivant
                </button>
              </div>
            </header>
          </Reveal>

          <div
            className="relative mx-auto h-[34rem] w-full max-w-5xl overflow-visible rounded-[2rem] md:-mt-2"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {executif.map((membre, index) => {
              const offset = getOffsetCirculaire(index, slide, executif.length);
              const isVisible = Math.abs(offset) <= 1;

              return (
                <motion.article
                  key={membre.id}
                  animate={{
                    x: `${offset * 50}%`,
                    y: offset === 0 ? 0 : 18,
                    scale: offset === 0 ? 1 : 0.86,
                    opacity: isVisible ? (offset === 0 ? 1 : 0.52) : 0,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{ zIndex: offset === 0 ? 30 : 20 - Math.abs(offset), pointerEvents: offset === 0 ? 'auto' : 'none' }}
                  className="absolute left-1/2 top-0 h-full w-[84%] max-w-sm -translate-x-1/2 overflow-hidden rounded-[1.8rem] border border-black/10 bg-white shadow-[0_28px_70px_rgba(0,0,0,0.12)] md:w-[70%]"
                  aria-hidden={offset !== 0}
                >
                  <SafeImage src={membre.image} alt={membre.nom} width={900} height={1200} className="h-[56%] w-full object-cover object-[center_18%]" />
                  <div className="flex h-[44%] min-w-0 flex-col justify-center space-y-3 p-6 sm:p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7a0f14]">{membre.role}</p>
                    <h3 className="break-words text-2xl font-semibold uppercase tracking-[0.06em] text-[#111315] sm:text-3xl">{membre.nom}</h3>
                    <p className="text-sm leading-relaxed tracking-[0.03em] text-black/70">{membre.axe}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={allerPrecedent}
              className="rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-black/70 transition hover:border-[#7a0f14] hover:text-[#7a0f14]"
            >
              Précédent
            </button>
            <button
              type="button"
              onClick={allerSuivant}
              className="rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-black/70 transition hover:border-[#7a0f14] hover:text-[#7a0f14]"
            >
              Suivant
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {executif.map((membre, index) => (
              <button
                key={membre.id}
                type="button"
                aria-label={`Voir ${membre.nom}`}
                onClick={() => setSlide(index)}
                className={`h-2.5 rounded-full transition ${index === slide ? 'w-8 bg-[#7a0f14]' : 'w-2.5 bg-black/20 hover:bg-black/35'}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="heritage" className="relative overflow-hidden">
        <SafeImage
          src="/images/heritage-hero.jpg"
          alt="Communauté RÉEL lors d'une conférence"
          fill
          className="object-cover object-[center_34%] md:object-[center_24%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/65" />
        <Container className="relative z-10 flex min-h-[68vh] items-center justify-center py-16 text-center sm:min-h-[72vh] md:min-h-[78vh] md:py-20">
          <Reveal>
            <div className="space-y-5 text-white md:space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/80">Héritage Entrepreneuriat</p>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl md:text-5xl">Apprendre avec structure</h2>
              <p className="mx-auto max-w-2xl text-sm tracking-[0.04em] text-white/85 md:text-base md:tracking-[0.06em]">
                Une plateforme pour démocratiser les outils entrepreneuriaux et rendre l’action plus accessible aux étudiant·e·s.
              </p>
              <Button href="https://heritage-entrepreneuriat.vercel.app/" className="w-full sm:w-auto">
                Découvrir la plateforme
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="contact" className="bg-[#f5f5f2] py-20 md:py-28">
        <Container>
          <Reveal>
            <header className="mb-10 max-w-3xl space-y-4 md:mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a0f14]">Contact</p>
              <h2 className="text-4xl font-semibold uppercase tracking-[0.08em] text-[#111315] md:text-6xl">Parlons de votre projet</h2>
            </header>
          </Reveal>

          <Reveal>
            <form className="grid gap-5 rounded-[2rem] border border-black/10 bg-white p-7 md:grid-cols-2 md:p-10" aria-label="Formulaire de contact">
              <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/65">
                Nom complet
                <input className="w-full rounded-xl border border-black/15 px-4 py-3 text-black outline-none transition focus:border-[#7a0f14]" name="name" type="text" required />
              </label>
              <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/65">
                Courriel
                <input className="w-full rounded-xl border border-black/15 px-4 py-3 text-black outline-none transition focus:border-[#7a0f14]" name="email" type="email" required />
              </label>
              <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/65 md:col-span-2">
                Sujet
                <input className="w-full rounded-xl border border-black/15 px-4 py-3 text-black outline-none transition focus:border-[#7a0f14]" name="subject" type="text" required />
              </label>
              <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/65 md:col-span-2">
                Message
                <textarea className="min-h-36 w-full rounded-xl border border-black/15 px-4 py-3 text-black outline-none transition focus:border-[#7a0f14]" name="message" required />
              </label>
              <div className="md:col-span-2">
                <Button type="submit">Envoyer le message</Button>
              </div>
            </form>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

const MOIS_FR: Record<string, number> = {
  janvier: 0,
  fevrier: 1,
  février: 1,
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  aout: 7,
  août: 7,
  septembre: 8,
  octobre: 9,
  novembre: 10,
  decembre: 11,
  décembre: 11,
};

function parserDateFrancaise(value: string): Date | null {
  const match = value.trim().match(/^(\d{1,2})\s+([\p{L}]+)\s+(\d{4})$/u);
  if (!match) return null;

  const [, dayRaw, monthRaw, yearRaw] = match;
  const monthIndex = MOIS_FR[monthRaw.toLowerCase()];
  if (monthIndex === undefined) return null;

  return new Date(Number(yearRaw), monthIndex, Number(dayRaw));
}

function toIsoDateString(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function getLundiFirstWeekday(date: Date) {
  return (date.getDay() + 6) % 7;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getOffsetCirculaire(index: number, activeIndex: number, total: number) {
  if (total <= 0) return 0;
  const brut = index - activeIndex;
  const modulo = ((brut % total) + total) % total;
  if (modulo > total / 2) return modulo - total;
  return modulo;
}

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
};

function SafeImage({ src, alt, className = '', width, height, fill = false, priority = false }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={`flex h-full w-full items-center justify-center bg-[linear-gradient(120deg,#4a0f14_10%,#160d0e_50%,#4a0f14_90%)] px-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/80 ${className}`}
      >
        Image indisponible
      </div>
    );
  }

  if (fill) {
    return <Image src={src} alt={alt} className={className} fill priority={priority} onError={() => setHasError(true)} />;
  }

  return <Image src={src} alt={alt} className={className} width={width ?? 1200} height={height ?? 800} priority={priority} onError={() => setHasError(true)} />;
}
