import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-soft': 'var(--paper-soft)',
        ink: 'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)'
      },
      boxShadow: {
        soft: '0 12px 28px rgba(22, 27, 39, 0.07)'
      }
    }
  },
  plugins: []
};

export default config;
