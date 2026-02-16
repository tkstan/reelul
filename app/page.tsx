import { promises as fs } from 'fs';
import path from 'path';
import { PremiumLanding } from '@/components/premium-landing';

type BlocCalendrier = {
  id: string;
  titre: string;
  date: string;
  lieu: string;
  description: string;
  image: string;
  ordre: number;
};

type MembreExecutif = {
  id: string;
  nom: string;
  role: string;
  axe: string;
  image: string;
  ordre: number;
};

async function chargerCollection<T>(dossierRelatif: string): Promise<T[]> {
  const dossier = path.join(process.cwd(), dossierRelatif);
  const fichiers = (await fs.readdir(dossier)).filter((fichier) => fichier.endsWith('.json'));

  const elements = await Promise.all(
    fichiers.map(async (fichier) => {
      const contenu = await fs.readFile(path.join(dossier, fichier), 'utf8');
      return JSON.parse(contenu) as T;
    })
  );

  return elements;
}

export default async function HomePage() {
  const calendrier = await chargerCollection<BlocCalendrier>('content/calendrier');
  const executif = await chargerCollection<MembreExecutif>('content/executif');

  calendrier.sort((a, b) => a.ordre - b.ordre);
  executif.sort((a, b) => a.ordre - b.ordre);

  return <PremiumLanding calendrier={calendrier} executif={executif} />;
}
