"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Formation from '../components/Formation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  const [lightMode, setLightMode] = useState(true);

  return (
    <main className="min-h-screen bg-[#0a192f] text-white">
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <Hero />
      <Formation lightMode={lightMode} />
      <Skills lightMode={lightMode} />
      <Projects lightMode={lightMode} />
      <Contact lightMode={lightMode} />
    
    </main>
  );
}