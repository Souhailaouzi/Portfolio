'use client'
import Link from 'next/link'

export default function NavigationBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-[#0a192f]/90 backdrop-blur-md border-b border-[#1e2a47]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo à gauche */}
            <Link 
              href="#home" 
              className="text-[#64ffda] text-xl font-mono hover:text-[#64ffda]/80 transition-colors"
            >
              سهيل اوزي
            </Link>
            
            {/* Liens à droite */}
            <div className="flex space-x-8">
              {['Home', 'Skills', 'Formation', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#ccd6f6] hover:text-[#64ffda] text-sm font-mono transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}