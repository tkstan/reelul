import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RÉEL',
    short_name: 'RÉEL',
    description: 'RÉEL — Événements et ressources pour futurs entrepreneurs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070a12',
    theme_color: '#070a12',
    icons: [
      { src: '/images/logo-reel-round.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/images/logo-reel-round.svg', sizes: '180x180', type: 'image/svg+xml', purpose: 'any' }
    ]
  };
}
