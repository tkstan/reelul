'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/content';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8" aria-label="Navigation principale">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-white">
          RÉEL
        </Link>
        <ul className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors hover:text-white ${active ? 'text-white' : 'text-mist'}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href="/contact"
          className="rounded-full border border-accent/40 bg-accent/15 px-4 py-2 text-xs font-semibold text-accent transition hover:bg-accent/25"
        >
          Rejoindre
        </Link>
      </nav>
    </header>
  );
}
