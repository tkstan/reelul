'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

type BlocCalendrier = {
  titre: string;
  date: string;
  lieu: string;
  description: string;
  image: string;
};

type MembreExecutif = {
  nom: string;
  role: string;
  axe: string;
  image: string;
};

const calendrier: BlocCalendrier[] = [
  {
    titre: 'Soirée Réseautage Interfacultaire',
    date: '12 mars 2026',
    lieu: 'Pavillon Palasis-Prince',
    description:
      'Une soirée pour connecter des étudiant·e·s de la FSA, génie, droit et sciences afin de créer des collaborations concrètes.',
    image: '/images/DSC08797-Edit-scaled.jpg'
  },
  {
    titre: 'Conférence Produit & Croissance',
    date: '4 avril 2026',
    lieu: 'Université Laval',
    description: 'Retours terrain de leaders québécois sur l’exécution, le marketing et les décisions qui font vraiment avancer un projet.',
    image: '/images/DSC08898-Edit-scaled.jpg'
  },
  {
    titre: 'Sprint Validation d’Idée',
    date: '24 avril 2026',
    lieu: 'Espace entrepreneurial ULaval',
    description: 'Atelier intensif pour transformer une idée en plan d’action testable avec mentors et ressources pratiques.',
    image: '/images/Sans-titre-7.png'
  }
];

const executif: MembreExecutif[] = [
  {
    nom: 'Camille Gagnon',
    role: 'Présidente',
    axe: 'Vision stratégique et partenariats interfacultaires.',
    image: '/images/DSC08963-scaled.jpg'
  },
  {
    nom: 'Thomas Bernier',
    role: 'Vice-président événements',
    axe: 'Expériences premium et programmation annuelle.',
    image: '/images/MMP03629-scaled.jpg'
  },
  {
    nom: 'Myriam Ouellet',
    role: 'Vice-présidente Héritage',
    axe: 'Développement de la plateforme Héritage Entrepreneuriat.',
    image: '/images/DSC08797-Edit-scaled.jpg'
  },
  {
    nom: 'Samuel Roy',
    role: 'Directeur communauté',
    axe: 'Activation du réseau étudiant ULaval et alumni.',
    image: '/images/DSC08898-Edit-scaled.jpg'
  }
];

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

export function PremiumLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % executif.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="accueil" ref={heroRef} className="relative min-h-screen overflow-hidden border-b border-black/10 bg-[#f5f5f2]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-105">
          <Image src="/images/MMP03629-scaled.jpg" alt="Événement étudiant du RÉEL" fill priority className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55" />

        <Container className="relative z-10 flex min-h-screen items-end pb-20 pt-36 md:pb-24">
          <Reveal>
            <div className="max-w-4xl space-y-7 text-white">
              <p className="text-xs uppercase tracking-[0.34em] text-white/85">RÉEL — ULaval</p>
              <h1 className="text-5xl font-semibold uppercase leading-[0.84] tracking-[0.06em] md:text-7xl lg:text-8xl">
                L’entrepreneuriat
                <br />
                étudiant
                <br />
                en mouvement
              </h1>
              <p className="max-w-2xl text-sm font-light tracking-[0.08em] text-white/88 md:text-base">
                Association étudiante née à la Faculté des sciences de l’administration et ouverte à toute la communauté
                interfacultaire de l’Université Laval.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="#calendrier">Voir le calendrier</Button>
                <Button href="#executif" kind="ghost" className="border-white/40 text-white hover:border-white/80 hover:text-white">
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

          <div className="grid gap-6 md:grid-cols-3">
            {calendrier.map((event, index) => (
              <Reveal key={event.titre} delay={index * 0.08}>
                <article className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-white">
                  <Image src={event.image} alt={event.titre} width={800} height={540} className="h-56 w-full object-cover" />
                  <div className="space-y-3 p-6">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#7a0f14]">
                      {event.date} · {event.lieu}
                    </p>
                    <h3 className="text-xl font-semibold uppercase tracking-[0.06em] text-[#121416]">{event.titre}</h3>
                    <p className="text-sm leading-relaxed tracking-[0.02em] text-black/70">{event.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="executif" className="border-y border-black/10 bg-[#fbfbf9] py-20 md:py-28">
        <Container>
          <Reveal>
            <header className="mb-10 flex items-end justify-between gap-6 md:mb-14">
              <div className="max-w-3xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a0f14]">Exécutif</p>
                <h2 className="text-4xl font-semibold uppercase tracking-[0.08em] text-[#111315] md:text-6xl">L’équipe qui propulse RÉEL</h2>
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={() => setSlide((slide - 1 + executif.length) % executif.length)}
                  className="rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-black/70 transition hover:border-[#7a0f14] hover:text-[#7a0f14]"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={() => setSlide((slide + 1) % executif.length)}
                  className="rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.16em] text-black/70 transition hover:border-[#7a0f14] hover:text-[#7a0f14]"
                >
                  Suivant
                </button>
              </div>
            </header>
          </Reveal>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white">
            <motion.div animate={{ x: `-${slide * 100}%` }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="flex">
              {executif.map((membre) => (
                <article key={membre.nom} className="min-w-full md:grid md:grid-cols-[1.1fr_0.9fr]">
                  <Image src={membre.image} alt={membre.nom} width={1200} height={900} className="h-72 w-full object-cover md:h-[30rem]" />
                  <div className="flex flex-col justify-center space-y-5 p-8 md:p-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a0f14]">{membre.role}</p>
                    <h3 className="text-3xl font-semibold uppercase tracking-[0.08em] text-[#111315] md:text-5xl">{membre.nom}</h3>
                    <p className="text-sm leading-relaxed tracking-[0.03em] text-black/70 md:text-base">{membre.axe}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {executif.map((membre, index) => (
              <button
                key={membre.nom}
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
        <Image src="/images/Sans-titre-7.png" alt="Communauté RÉEL lors d'une conférence" width={2000} height={1200} className="h-[72vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/65" />
        <Container className="absolute inset-0 z-10 flex h-full items-center justify-center text-center">
          <Reveal>
            <div className="space-y-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/80">Héritage Entrepreneuriat</p>
              <h2 className="text-4xl font-semibold uppercase tracking-[0.1em] md:text-6xl">Apprendre avec structure</h2>
              <p className="mx-auto max-w-2xl text-sm tracking-[0.06em] text-white/85 md:text-base">
                Une plateforme pour démocratiser les outils entrepreneuriaux et rendre l’action plus accessible aux étudiant·e·s.
              </p>
              <Button href="https://www.heritageentrepreneuriat.ca/">Découvrir la plateforme</Button>
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
