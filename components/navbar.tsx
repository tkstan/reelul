'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const onePageNav = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#experience', label: 'Expérience' },
  { href: '/#features', label: 'Features' },
  { href: '/#contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        !isHome || scrolled
          ? 'border-black/10 bg-[rgba(248,248,246,0.78)] backdrop-blur-md'
          : 'border-transparent bg-[rgba(248,248,246,0.42)] backdrop-blur-md'
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="/#accueil" className="text-xl font-semibold uppercase tracking-[0.2em] text-[#101214]">
          RÉEL
        </Link>

        <nav className="hidden md:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-7">
            {onePageNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/60 transition hover:text-[#7a0f14]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="/#contact" className="hidden md:inline-flex">
          Rejoindre
        </Button>
      </Container>
    </header>
  );
}
