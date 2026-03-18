import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        secondary: '#112240',
        navy: {
          light: '#172a45',
          DEFAULT: '#0a192f',
          dark: '#020c1b',
        },
        slate: {
          light: '#ccd6f6',
          DEFAULT: '#8892b0',
          dark: '#495670',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionProperty: {
        'width': 'width',
      },
    },
  },
  plugins: [],
};

export default config;
