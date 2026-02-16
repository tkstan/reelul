import Link from 'next/link';
import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-[#f5f5f2]">
      <Container className="flex flex-col gap-4 py-10 text-[11px] uppercase tracking-[0.18em] text-black/50 md:flex-row md:items-center md:justify-between">
        <p>© 2024 RÉEL — Regroupement des Étudiants Entrepreneurs.</p>
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/reelul/" className="transition hover:text-[#7a0f14]">
            Instagram
          </Link>
          <Link href="https://www.facebook.com/REELUL" className="transition hover:text-[#7a0f14]">
            Facebook
          </Link>
          <Link
            href="https://www.linkedin.com/company/regroupement-des-étudiants-entrepreneurs-de-l'université-laval-réel-/"
            className="transition hover:text-[#7a0f14]"
          >
            LinkedIn
          </Link>
        </div>
      </Container>
    </footer>
  );
}
