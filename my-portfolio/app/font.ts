import { Inter, Fira_Code } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: '400',  // Add a weight since Fira Code might need it
  display: 'swap',
});