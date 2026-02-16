/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repo = 'reelul';

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  // obligatoire si tu utilises next/image (tu l’utilises)
  images: {
    unoptimized: true
  },

  // nécessaire pour /reelul/ sur GitHub Pages
  ...(isGithubPages
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),

  // optionnel, tu l'avais déjà
  // images: { formats: ['image/avif', 'image/webp'], unoptimized: true }
};

export default nextConfig;
