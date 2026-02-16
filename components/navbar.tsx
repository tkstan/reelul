'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const onePageNav = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#calendrier', label: 'Calendrier' },
  { href: '/#executif', label: 'Exécutif' },
  { href: '/#heritage', label: 'Héritage Entrepreneuriat' },
  { href: '/#contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        !isHome || scrolled
          ? 'border-black/10 bg-[rgba(245,245,242,0.92)] backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="/#accueil" className={`${!isHome || scrolled ? 'text-[#101214]' : 'text-white'} text-xl font-semibold uppercase tracking-[0.2em] transition`}>
          RÉEL
        </Link>

        <nav className="hidden md:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-7">
            {onePageNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${!isHome || scrolled ? 'text-black/65' : 'text-white/85'} text-[11px] font-medium uppercase tracking-[0.16em] transition hover:text-[#7a0f14]`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="/#contact" className="hidden md:inline-flex">
          Écrire
        </Button>
      </Container>
    </header>
  );
}
