import './globals.css'
import type { Metadata } from 'next'
import NavigationBar from '@/components/NavigationBar' 

export const metadata: Metadata = {
  title: "Souhail's Portfolio",
  description: 'Computer Engineering Student Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-[#8892b0]">
        <NavigationBar />
        <main className="pt-16"> {/* Espace pour la navbar fixe */}
          {children}
        </main>
      </body>
    </html>
  )
}