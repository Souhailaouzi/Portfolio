import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

export default function Hero() {
  return (
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
  );
} 