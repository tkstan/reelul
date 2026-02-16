# Images à prévoir pour la landing RÉEL

Ce dossier décrit **les images à fournir** pour la page d’accueil premium.

## Emplacements et formats recommandés

| Section | Chemin attendu | Usage | Format recommandé | Ratio recommandé |
|---|---|---|---|---|
| Accueil (hero) | `/public/images/hero-accueil.jpg` | Image plein écran en fond du hero | JPG/WebP | 16:9 minimum |
| Calendrier 1 | `/public/images/calendrier-reseautage.jpg` | Carte événement « Soirée Réseautage Interfacultaire » | JPG/WebP | 4:3 |
| Calendrier 2 | `/public/images/calendrier-conference.jpg` | Carte événement « Conférence Produit & Croissance » | JPG/WebP | 4:3 |
| Calendrier 3 | `/public/images/calendrier-sprint.jpg` | Carte événement « Sprint Validation d’Idée » | JPG/WebP | 4:3 |
| Exécutif 1 | `/public/images/executif-presidente.jpg` | Slide exécutif - présidence | JPG/WebP | 4:3 ou 3:2 |
| Exécutif 2 | `/public/images/executif-vpevent.jpg` | Slide exécutif - VP événements | JPG/WebP | 4:3 ou 3:2 |
| Exécutif 3 | `/public/images/executif-vpheritage.jpg` | Slide exécutif - VP Héritage | JPG/WebP | 4:3 ou 3:2 |
| Exécutif 4 | `/public/images/executif-communaute.jpg` | Slide exécutif - direction communauté | JPG/WebP | 4:3 ou 3:2 |
| Héritage Entrepreneuriat | `/public/images/heritage-hero.jpg` | Section full-bleed Héritage | JPG/WebP | 16:9 |

## Conseils qualité

- Résolution recommandée: minimum 1800px de large pour les sections immersives.
- Palette: tons neutres/lumineux avec contrastes propres (éviter filtres trop saturés).
- Style visuel: photos humaines, dynamiques, premium, cohérentes avec une association entrepreneuriale ULaval.
- Préférer des images où l’on voit la diversité interfacultaire (FSA + autres facultés) dans les scènes.

## Remplacement dans le code

Actuellement, la landing utilise des images temporaires existantes dans `/public/images`. Pour passer en production:

1. Ajouter les fichiers listés ci-dessus dans `/public/images`.
2. Mettre à jour les chemins des `src` dans `components/premium-landing.tsx`.
3. Vérifier le cadrage mobile/desktop (`object-cover`).
