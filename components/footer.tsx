import Link from 'next/link';
import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-soft">
      <Container className="flex flex-col gap-6 py-10 text-xs uppercase tracking-[0.12em] text-ink-muted md:flex-row md:items-center md:justify-between">
        <p>© 2024 RÉEL — Regroupement des Étudiants Entrepreneurs de l’Université Laval.</p>
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/reelul/" className="hover:text-accent">
            Instagram
          </Link>
          <Link href="https://www.facebook.com/REELUL" className="hover:text-accent">
            Facebook
          </Link>
          <Link
            href="https://www.linkedin.com/company/regroupement-des-étudiants-entrepreneurs-de-l'université-laval-réel-/"
            className="hover:text-accent"
          >
            LinkedIn
          </Link>
        </div>
      </Container>
    </footer>
  );
}
