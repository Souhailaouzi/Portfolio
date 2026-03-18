import Navbar from '@/components/layout/navbar';
import Hero from '@/components/sections/hero';
import Formation from '@/components/sections/formation';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Formation />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
