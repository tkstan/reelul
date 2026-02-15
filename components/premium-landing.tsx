'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

type ImmersiveSection = {
  title: string;
  description: string;
  image: string;
  align: 'left' | 'right';
};

const immersiveSections: ImmersiveSection[] = [
  {
    title: 'Vision clarifiée, exécution immédiate',
    description:
      'Des expériences conçues pour transformer une intuition en trajectoire concrète, avec un cadre rigoureux et inspirant.',
    image: '/images/DSC08797-Edit-scaled.jpg',
    align: 'left'
  },
  {
    title: 'Réseau stratégique de haut niveau',
    description:
      'Des échanges ciblés avec des entrepreneur·e·s, leaders et partenaires qui accélèrent la qualité des décisions.',
    image: '/images/DSC08898-Edit-scaled.jpg',
    align: 'right'
  }
];

const features = [
  {
    title: 'Expériences curatoriales',
    description: 'Programmation pensée comme un produit : structurée, exigeante et orientée impact.'
  },
  {
    title: 'Mentorat précis',
    description: 'Accès à des perspectives terrain pour valider rapidement les idées à fort potentiel.'
  },
  {
    title: 'Rythme premium',
    description: 'Cadence fluide, interfaces claires et interactions discrètes pour rester focalisé sur l’essentiel.'
  }
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PremiumLanding() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <>
      <section id="accueil" ref={heroRef} className="relative min-h-screen overflow-hidden border-b border-black/10 bg-[#f5f5f2]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-105">
          <Image src="/images/MMP03629-scaled.jpg" alt="Communauté entrepreneuriale RÉEL" fill priority className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/50" />

        <Container className="relative z-10 flex min-h-screen items-end pb-20 pt-40 md:pb-24">
          <Reveal>
            <div className="max-w-4xl space-y-7 text-white">
              <p className="text-xs uppercase tracking-[0.36em] text-white/80">RÉEL — Université Laval</p>
              <h1 className="text-5xl font-semibold uppercase leading-[0.84] tracking-[0.06em] md:text-7xl lg:text-8xl">
                Build
                <br />
                The Next
                <br />
                Standard
              </h1>
              <p className="max-w-2xl text-sm font-light tracking-[0.14em] text-white/88 md:text-base">
                Une landing immersive pensée pour les entrepreneur·e·s qui veulent avancer avec clarté, ambition et
                précision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="#experience">Découvrir l’expérience</Button>
                <Button href="#features" kind="ghost" className="border-white/40 text-white hover:border-white/80 hover:text-white">
                  Explorer les features
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="experience" className="bg-[#f5f5f2] py-20 md:py-28">
        <Container className="space-y-10 md:space-y-14">
          {immersiveSections.map((item, index) => (
            <Reveal key={item.title}>
              <article className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white">
                <Image src={item.image} alt={item.title} width={1400} height={820} className="h-[26rem] w-full object-cover md:h-[34rem]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div
                  className={`absolute bottom-8 w-full px-7 md:bottom-12 md:px-12 ${
                    item.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`mx-auto max-w-xl space-y-4 text-white ${item.align === 'right' ? 'md:mr-0' : 'md:ml-0'}`}
                  >
                    <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-5xl">{item.title}</h2>
                    <p className="text-sm leading-relaxed tracking-[0.04em] text-white/85 md:text-base">{item.description}</p>
                  </motion.div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <section id="features" className="border-y border-black/10 bg-[#fbfbf9] py-20 md:py-28">
        <Container>
          <Reveal>
            <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
              <p className="text-xs uppercase tracking-[0.32em] text-[#7a0f14]">Features</p>
              <h2 className="mt-4 text-4xl font-semibold uppercase tracking-[0.08em] text-[#101214] md:text-6xl">Designé pour performer</h2>
            </header>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.08}>
                <article className="group rounded-3xl border border-black/10 bg-white p-7 transition duration-500 hover:scale-[1.02] hover:border-[#7a0f14]/35 hover:shadow-[0_14px_36px_-32px_rgba(122,15,20,0.45)]">
                  <div className="mb-6 h-10 w-10 rounded-full border border-black/15 transition-colors duration-500 group-hover:border-[#7a0f14]/60">
                    <div className="m-auto mt-[17px] h-px w-4 bg-black/35 transition-colors duration-500 group-hover:bg-[#7a0f14]" />
                  </div>
                  <h3 className="text-xl font-semibold uppercase tracking-[0.07em] text-[#141618]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed tracking-[0.03em] text-black/65">{feature.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden">
        <Image src="/images/Sans-titre-7.png" alt="Audience attentive lors d'un événement RÉEL" width={2000} height={1200} className="h-[70vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        <Container className="absolute inset-0 z-10 flex h-full items-center justify-center text-center">
          <Reveal>
            <div className="space-y-6 text-white">
              <h2 className="text-4xl font-semibold uppercase tracking-[0.1em] md:text-6xl">Passez de l’idée à l’élan</h2>
              <p className="mx-auto max-w-2xl text-sm tracking-[0.08em] text-white/85 md:text-base">
                Rejoignez un collectif qui traite l’entrepreneuriat étudiant comme une discipline de précision.
              </p>
              <Button href="#contact">Nous rejoindre</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
