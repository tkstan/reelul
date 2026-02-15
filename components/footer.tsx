import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-line/80">
      <div className="section-shell flex flex-col gap-8 py-10 text-sm text-mist md:flex-row md:items-center md:justify-between">
        <p>© 2024 RÉEL — Regroupement des Étudiants Entrepreneurs de l’Université Laval.</p>
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/reelul/" className="hover:text-white">
            Instagram
          </Link>
          <Link href="https://www.facebook.com/REELUL" className="hover:text-white">
            Facebook
          </Link>
          <Link
            href="https://www.linkedin.com/company/regroupement-des-étudiants-entrepreneurs-de-l'université-laval-réel-/"
            className="hover:text-white"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
