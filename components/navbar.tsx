'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const onePageNav = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#about', label: 'À propos' },
  { href: '/#evenements', label: 'Événements' },
  { href: '/#executif', label: 'Exécutif' },
  { href: '/#heritage', label: 'Héritage' },
  { href: '/#contact', label: 'Nous joindre' }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/#accueil" className="font-display text-2xl uppercase tracking-[0.12em] text-paper">
            RÉEL
          </Link>
          <Button href="/#contact" className="hidden md:inline-flex">
            Rejoindre
          </Button>
        </div>

        <nav className="mt-3 overflow-x-auto pb-1" aria-label="Navigation principale">
          <ul className="flex min-w-max items-center gap-5 pr-4">
            {onePageNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-[0.14em] transition ${
                    pathname === '/' && item.href.includes('#accueil') ? 'text-accent' : 'text-paper/70 hover:text-paper'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
