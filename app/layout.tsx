import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PwaRegister } from '@/components/pwa-register';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'RÉEL — Événements et ressources pour futurs entrepreneurs',
  description:
    "Le Regroupement des Étudiants Entrepreneurs de l’Université Laval développe la culture entrepreneuriale étudiante via des événements, ressources et projets d’envergure.",
  manifest: '/manifest.webmanifest',
  themeColor: '#f5f5f2',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg'
  },
  openGraph: {
    title: 'RÉEL — Écosystème entrepreneurial étudiant',
    description:
      "Le RÉEL connecte la communauté étudiante à l’écosystème d’affaires de Québec avec une programmation moderne et accessible."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-CA">
      <body className={inter.variable}>
        <PwaRegister />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
