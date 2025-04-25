/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          navy: {
            light: '#112240',
            DEFAULT: '#0a192f',
            dark: '#020c1b',
          },
          slate: {
            light: '#ccd6f6',
            DEFAULT: '#8892b0',
            dark: '#495670',
          },
          teal: {
            DEFAULT: '#64ffda',
            light: '#64ffda80',
          },
        },
        fontFamily: {
          mono: ['var(--font-fira-code)', 'monospace'],
        },
        animation: {
          'typing': 'typing 3.5s steps(40, end)',
          'blink-caret': 'blink-caret .75s step-end infinite',
        },
      },
    },
    plugins: [],
  }