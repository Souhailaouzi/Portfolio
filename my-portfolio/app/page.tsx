"use client";
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

export default function Home() {
  const [showFreelancer, setShowFreelancer] = useState(false);

  useEffect(() => {
    // Afficher FREELANCER après 3 secondes
    const timer = setTimeout(() => {
      setShowFreelancer(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a192f] text-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm py-4 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-[#64ffda] text-xl font-mono font-bold hover:text-white transition-colors duration-300">
            سهيل اوزي
          </a>
          
          <div className="hidden md:flex space-x-10">
            {["Home", "Formation", "Skills", "Project", "Contact me"].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300 font-mono text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
          {/* Texte côté gauche */}
          <div className="md:w-1/2 mb-12 md:mb-0 max-w-xl">
            <h1 className="text-[#8892b0] text-3xl md:text-4xl font-mono mb-6 animate-professional-glow">
              HY I'M SOUHAIL
            </h1>
            
            <div className="text-[#64ffda] font-mono text-lg mb-8 flex gap-2">
              <span className="inline-block animate-text">
                Full Stack Developer
              </span>
              {showFreelancer && (
                <span className="inline-block animate-text delay-animation">
                  | FREELANCER
                </span>
              )}
            </div>
            
            <div className="text-[#8892b0] font-mono space-y-4 mb-8">
              <p className="text-base">
              I build complete web applications from the ground up,
               combining strong frontend aesthetics with robust backend architecture.
              </p>
              <p className="text-base">
              My focus is on creating efficient, scalable solutions
               using modern JavaScript technologies across the entire development stack.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="px-5 py-2 rounded-md font-mono text-sm transition-all duration-300 bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/80">
                Contact me
              </a>
              <a href="#projects" className="px-5 py-2 rounded-md font-mono text-sm transition-all duration-300 border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10">
                See my projects
              </a>
            </div>

            {/* Social Media Buttons */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Souhailaouzi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/souhail-aouzi-1949sou" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:souhailaouzi1949@gmail.com" 
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
              >
                <MdEmail size={20} />
              </a>
              <a 
                href="tel:+212693991850" 
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
              >
                <BsTelephoneFill size={20} />
              </a>
            </div>
          </div>

          {/* Image côté droite */}
          <div className="md:w-1/3 flex justify-end">
            <div className="relative w-80 h-80">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#64ffda] animate-professional-border">
                <img 
                  src="/img/souhail.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0a192f] text-4xl md:text-5xl font-mono font-bold mb-8 text-center">
            Formation
          </h2>

          {/* Réduire l'espacement vertical avec space-y-8 au lieu de space-y-12 */}
          <div className="timeline-container relative space-y-4">
            <div className="timeline-line bg-[#0a192f]"></div>

            {/* LICENCE INFORMATIQUE */}
            <div className="flex flex-col md:flex-row items-center justify-between animate-fade-in">
              <div className="md:w-5/12">
                <div className="formation-card right bg-white shadow-lg p-4"> {/* Réduire le padding */}
                  <div className="text-[#0a192f] font-mono mb-2">2023 - 2024</div>
                  <h3 className="text-[#64ffda] text-xl font-bold mb-2">LICENCE INFORMATIQUE</h3>
                  <p className="text-[#0a192f] text-sm mb-3">MAROC, Beni Mellal</p>
                  <p className="text-[#8892b0]">FST BENI MELLAL</p>
                  <p className="text-[#8892b0] mt-4">
                    Spécialisation en développement web et applications mobiles.
                    Focus sur les technologies modernes et l'architecture logicielle.
                  </p>
                </div>
              </div>
            </div>

            {/* DEUST */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between animate-fade-in delay-300">
              <div className="md:w-5/12">
                <div className="formation-card left bg-white shadow-lg p-4"> {/* Réduire le padding */}
                  <div className="text-[#0a192f] font-mono mb-2">2021 - 2023</div>
                  <h3 className="text-[#64ffda] text-xl font-bold mb-2">DEUST en MIPC</h3>
                  <p className="text-[#0a192f] text-sm mb-3">MAROC, Beni Mellal</p>
                  <p className="text-[#8892b0]">FST BENI MELLAL</p>
                  <p className="text-[#8892b0] mt-4">
                    Formation pluridisciplinaire avec une forte base scientifique.
                    Développement des compétences analytiques et résolution de problèmes.
                  </p>
                </div>
              </div>
            </div>

            {/* Baccalauréat */}
            <div className="flex flex-col md:flex-row items-center justify-between animate-fade-in delay-600">
              <div className="md:w-5/12">
                <div className="formation-card right bg-white shadow-lg p-4"> {/* Réduire le padding */}
                  <div className="text-[#0a192f] font-mono mb-2">2020 - 2021</div>
                  <h3 className="text-[#64ffda] text-xl font-bold mb-2">Baccalauréat Science Physique</h3>
                  <p className="text-[#0a192f] text-sm mb-3">MAROC, Casablanca</p>
                  <p className="text-[#8892b0]">ANISSE INTERNATIONAL SCHOOL</p>
                  <p className="text-[#8892b0] mt-4">
                    Formation scientifique avec excellence en physique et mathématiques.
                    Développement de la rigueur et de la méthodologie scientifique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le reste de votre code... */}
    </main>
  )
}