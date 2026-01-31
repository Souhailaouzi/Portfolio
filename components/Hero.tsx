import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208]/40 via-transparent to-[#0a0a0a]" />

      {/* Subtle warm glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#d4a574]/10 rounded-full blur-[150px]" />

      {/* Main Content */}
      <div className="relative z-10 h-full flex">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-20">

          {/* Main Heading - CSS Animated */}
          <div className="mb-6">
            <div className="h-[70px] md:h-[90px] overflow-hidden">
              <div className="animate-role-slide-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1] tracking-tight h-[70px] md:h-[90px] flex items-center">FULL STACK</h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1] tracking-tight h-[70px] md:h-[90px] flex items-center">DEVOPS</h1>
              </div>
            </div>
            <div className="h-[70px] md:h-[90px] overflow-hidden">
              <div className="animate-role-slide-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight text-transparent stroke-text h-[70px] md:h-[90px] flex items-center">DEVELOPER</h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight text-transparent stroke-text h-[70px] md:h-[90px] flex items-center">ENGINEER</h1>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#a0a0a0] text-base md:text-lg font-medium max-w-md leading-relaxed mb-8">
            Building robust, scalable web solutions with a focus on clean code and
            exceptional user experiences. I transform ideas into powerful digital
            products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <a
              href="#contact"
              className="group flex items-center justify-between w-full max-w-xs px-6 py-3 border border-[#333] hover:border-[#d4a574] transition-colors duration-300"
            >
              <span className="text-white text-sm tracking-wide">GET IN TOUCH</span>
              <HiArrowDown className="w-4 h-4 text-[#d4a574] transform -rotate-90 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#project"
              className="group flex items-center gap-2 text-[#888] hover:text-white text-sm tracking-wide transition-colors duration-300"
            >
              <span>VIEW PROJECTS</span>
              <HiArrowDown className="w-4 h-4 transform -rotate-90 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Souhailaouzi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-white transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/souhail-aouzi-1949sou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:souhailaouzi1949@gmail.com"
              className="text-[#666] hover:text-white transition-colors duration-300"
            >
              <MdEmail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-10" />
            <img
              src="/img/image_souhail.jpeg"
              alt="Souhail - Full Stack Developer"
              className="w-full h-full object-cover object-center"
              style={{
                filter: 'sepia(20%) saturate(80%) brightness(90%)',
              }}
            />
            <div className="absolute inset-0 bg-[#d4a574]/10 mix-blend-overlay" />
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/60 z-10" />
          <img
            src="/img/image_souhail.jpeg"
            alt="Souhail - Full Stack Developer"
            className="w-full h-full object-cover object-top opacity-30"
            style={{
              filter: 'sepia(20%) saturate(80%) brightness(70%)',
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <a href="#formation" className="flex flex-col items-center gap-1 text-[#666] hover:text-white transition-colors">
          <span className="text-xs tracking-wider">SCROLL</span>
          <HiArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
