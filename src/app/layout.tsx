import './globals.css'
import { inter, firaCode } from '@/lib/fonts'

export const metadata = {
  title: 'Souhail Portfolio',
  description: 'Software Engineer Portfolio',
  openGraph: {
    title: 'Portfolio — Souhail Aouzi',
    description: 'Software Engineer | Full-Stack Web & Mobile Apps | React, Next.js, Node.js, React Native',
    url: 'https://souhailaouzi.netlify.app',
    images: [
      {
        url: 'https://souhailaouzi.netlify.app/img/image_souhail.jpeg',
        width: 1200,
        height: 630,
        alt: 'Souhail Aouzi - Software Engineer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Souhail Aouzi',
    description: 'Software Engineer | Full-Stack Web & Mobile Apps | React, Next.js, Node.js, React Native',
    images: ['https://souhailaouzi.netlify.app/img/image_souhail.jpeg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0a192f] text-[#ccd6f6] font-sans">
        {children}
      </body>
    </html>
  )
}
