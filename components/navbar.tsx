'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/content';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-display text-2xl uppercase tracking-[0.12em] text-ink">
          RÉEL
        </Link>
        <ul className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-[0.14em] transition ${
                    active ? 'text-accent' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button href="/contact" className="hidden md:inline-flex">
          Rejoindre
        </Button>
      </Container>
    </header>
  );
}
