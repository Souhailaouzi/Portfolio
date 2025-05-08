"use client";
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaReact, FaNodeJs, FaDocker, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiRedis, SiExpress } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';

const skillGroups = [
  {
    title: "Front-end",
    skills: [
      { name: "React", icon: <FaReact className="text-[#61dafb] w-7 h-7" />, percent: 90 },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6] w-7 h-7" />, percent: 85 },
      { name: "Redux", icon: <SiRedux className="text-[#764abc] w-7 h-7" />, percent: 80 },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#3c873a] w-7 h-7" />, percent: 80 },
      { name: "Express", icon: <SiExpress className="text-white w-7 h-7" />, percent: 75 },
      { name: "Redis", icon: <SiRedis className="text-[#d82c20] w-7 h-7" />, percent: 70 },
    ],
  },
  {
    title: "Outils / DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-[#2496ed] w-7 h-7" />, percent: 70 },
      { name: "Git", icon: <FaGitAlt className="text-[#f34f29] w-7 h-7" />, percent: 85 },
      { name: "Cursor", icon: <MdDesignServices className="text-[#64ffda] w-7 h-7" />, percent: 65 },
    ],
  },
  {
    title: "UI / UX",
    skills: [
      { name: "Figma", icon: <FaFigma className="text-[#a259ff] w-7 h-7" />, percent: 60 },
    ],
  },
];

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
            {["Home", "skills","Formation","Experience" , "Project", "Contact me"].map((item, index) => (
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
          <h2 className="text-[#0a192f] text-4xl md:text-5xl font-mono font-bold mb-16 text-center">
            Formation
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* LICENCE INFORMATIQUE */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#64ffda]">LICENCE INFORMATIQUE</h3>
                  <span className="text-[#0a192f] font-mono bg-[#64ffda]/10 px-3 py-1 rounded-full">2023 - 2024</span>
                </div>
                <div className="space-y-3">
                  <p className="text-[#8892b0] flex items-center">
                    <span className="mr-2">📍</span>
                    FST BENI MELLAL, MAROC
                  </p>
                  <p className="text-[#0a192f] leading-relaxed">
                    Spécialisation en développement web et applications mobiles.
                    Focus sur les technologies modernes et l'architecture logicielle.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#64ffda] to-[#0a192f]"></div>
            </div>

            {/* DEUST */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#64ffda]">DEUST en MIPC</h3>
                  <span className="text-[#0a192f] font-mono bg-[#64ffda]/10 px-3 py-1 rounded-full">2021 - 2023</span>
                </div>
                <div className="space-y-3">
                  <p className="text-[#8892b0] flex items-center">
                    <span className="mr-2">📍</span>
                    FST BENI MELLAL, MAROC
                  </p>
                  <p className="text-[#0a192f] leading-relaxed">
                    Formation pluridisciplinaire avec une forte base scientifique.
                    Développement des compétences analytiques et résolution de problèmes.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#64ffda] to-[#0a192f]"></div>
            </div>

            {/* Baccalauréat */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#64ffda]">Baccalauréat Science Physique</h3>
                  <span className="text-[#0a192f] font-mono bg-[#64ffda]/10 px-3 py-1 rounded-full">2020 - 2021</span>
                </div>
                <div className="space-y-3">
                  <p className="text-[#8892b0] flex items-center">
                    <span className="mr-2">📍</span>
                    ANISSE INTERNATIONAL SCHOOL, CASABLANCA
                  </p>
                  <p className="text-[#0a192f] leading-relaxed">
                    Formation scientifique avec excellence en physique et mathématiques.
                    Développement de la rigueur et de la méthodologie scientifique.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#64ffda] to-[#0a192f]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a192f] text-center mb-2 font-mono">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 mx-auto bg-[#64ffda] rounded mb-8"></div>
          <br/><br/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Développement Web */}
            <div>
              <h3 className="text-2xl font-bold text-[#000000] mb-8 flex items-center gap-2 font-mono">
                <span className="w-2 h-6 bg-[#000000] rounded-sm inline-block"></span>
                Développement Web
              </h3>
              <div className="space-y-8">
                {/* Box */}
                <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg text-[#0a192f] font-medium">React</span>
                    <span className="text-lg text-[#64ffda] font-bold">90%</span>
                  </div>
                  <div className="w-full h-3 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#64ffda] rounded-full transition-all duration-700" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg text-[#0a192f] font-medium">Redux</span>
                    <span className="text-lg text-[#64ffda] font-bold">80%</span>
                  </div>
                  <div className="w-full h-3 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#64ffda] rounded-full transition-all duration-700" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg text-[#0a192f] font-medium">Express</span>
                    <span className="text-lg text-[#64ffda] font-bold">75%</span>
                  </div>
                  <div className="w-full h-3 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#64ffda] rounded-full transition-all duration-700" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg text-[#0a192f] font-medium">JEE (Java)</span>
                    <span className="text-lg text-[#64ffda] font-bold">75%</span>
                  </div>
                  <div className="w-full h-3 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#64ffda] rounded-full transition-all duration-700" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Outils et Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-[#0f100f] mb-8 flex items-center gap-2 font-mono">
                <span className="w-2 h-6 bg-[#000000] rounded-sm inline-block"></span>
                Outils et Technologies
              </h3>
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg text-[#0a192f] font-medium">Python</span>
                    <span className="text-lg text-[#64ffda] font-bold">90%</span>
                  </div>
                  <div className="w-full h-3 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#64ffda] rounded-full transition-all duration-700" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg text-[#0a192f] font-medium">SQL</span>
                    <span className="text-lg text-[#64ffda] font-bold">85%</span>
                  </div>
                  <div className="w-full h-3 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#64ffda] rounded-full transition-all duration-700" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg text-[#0a192f] font-medium">Docker</span>
                    <span className="text-lg text-[#64ffda] font-bold">80%</span>
                  </div>
                  <div className="w-full h-3 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#64ffda] rounded-full transition-all duration-700" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg text-[#0a192f] font-medium">Git/GitHub</span>
                    <span className="text-lg text-[#64ffda] font-bold">85%</span>
                  </div>
                  <div className="w-full h-3 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#64ffda] rounded-full transition-all duration-700" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg text-[#0a192f] font-medium">Figma</span>
                    <span className="text-lg text-[#64ffda] font-bold">70%</span>
                  </div>
                  <div className="w-full h-3 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#64ffda] rounded-full transition-all duration-700" style={{ width: "70%" }}></div>
                  </div>
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