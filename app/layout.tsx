import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const oswald = Oswald({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'RÉEL — Événements et ressources pour futurs entrepreneurs',
  description:
    "Le Regroupement des Étudiants Entrepreneurs de l’Université Laval développe la culture entrepreneuriale étudiante via des événements, ressources et projets d’envergure.",
  openGraph: {
    title: 'RÉEL — Écosystème entrepreneurial étudiant',
    description:
      "Le RÉEL connecte la communauté étudiante à l’écosystème d’affaires de Québec avec une programmation moderne et accessible."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-CA">
      <body className={`${inter.variable} ${oswald.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
