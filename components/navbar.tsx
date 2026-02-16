'use client';

import Image from 'next/image';
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        isTransparent ? 'border-transparent bg-transparent' : 'border-black/10 bg-[rgba(245,245,242,0.92)] backdrop-blur-md'
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="/#accueil" className="inline-flex items-center" aria-label="Retour à l'accueil RÉEL">
          <Image
            src="/images/logo-reel-round.svg"
            alt="Logo RÉEL"
            width={44}
            height={44}
            priority
            className={`h-11 w-11 rounded-full object-contain transition ${isTransparent ? 'drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]' : ''}`}
          />
        </Link>

        <nav className="hidden md:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-7">
            {onePageNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${isTransparent ? 'text-white/85' : 'text-black/65'} text-[11px] font-medium uppercase tracking-[0.16em] transition hover:text-[#7a0f14]`}
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
