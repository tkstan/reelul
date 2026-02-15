import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0C12',
        mist: '#8A90A2',
        line: '#1E2333',
        accent: '#4F7CFF'
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 23, 42, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
