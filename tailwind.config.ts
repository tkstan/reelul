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
        soft: '0 16px 32px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: []
};

export default config;
