import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Formation from '../components/Formation';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

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
