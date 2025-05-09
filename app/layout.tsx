import './globals.css'
import { inter, firaCode } from './font'

export const metadata = {
  title: 'Souhail Portfolio',
  description: 'Computer Engineering Student Portfolio',
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