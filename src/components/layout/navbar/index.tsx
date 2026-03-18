'use client';

import { useState, useEffect } from 'react';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full py-4 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#0a0a0a]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-wider text-white hover:text-[#d4a574] transition-colors duration-300"
        >
          SA
        </a>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-1 px-1 py-1 border border-[#333] rounded-full">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-xs tracking-wider px-4 py-2 rounded-full text-[#888] hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center px-5 py-2 border border-[#d4a574] text-[#d4a574] text-xs tracking-wider hover:bg-[#d4a574] hover:text-white transition-all duration-300"
        >
          GET IN TOUCH
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white transition-colors duration-300"
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
