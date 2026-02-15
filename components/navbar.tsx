'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const onePageNav = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#evenements', label: 'Événements' },
  { href: '/#executif', label: 'Exécutif' },
  { href: '/#about', label: 'À propos' },
  { href: '/#heritage', label: 'Héritage' },
  { href: '/#contact', label: 'Nous joindre' }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/#accueil" className="font-display text-2xl uppercase tracking-[0.12em] text-ink">
          RÉEL
        </Link>
        <ul className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
          {onePageNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  pathname === '/' && item.href.includes('#accueil') ? 'text-accent' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button href="/#contact" className="hidden md:inline-flex">
          Rejoindre
        </Button>
      </Container>
    </header>
  );
}
