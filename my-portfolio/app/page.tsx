export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm py-4 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-[#64ffda] text-xl font-mono font-bold hover:text-white transition-colors duration-300">
            سهيل اوزي
          </a>
          
          <div className="hidden md:flex space-x-10">
            {["Home", "Skills", "Formation", "Project", "Contact me"].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button className="md:hidden text-[#64ffda]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-[#64ffda] text-5xl font-bold mb-8 typing-animation">
              HY I&apos;M SOUHAIL
            </h1>
            <div className="text-[#8892b0] max-w-2xl">
              <p className="text-xl mb-4">
                Currently enrolled in a Bachelor&apos;s degree in COMPUTER ENGINEERING
              </p>
              <p className="text-xl">
                I am actively looking for an opportunity for an End-of-Studies Project (PFE) internship in order to validate my training.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#64ffda] p-1 animate-pulse-border">
                <img 
                  src="/img/souhail.jpeg" 
                  alt="Souhail Ouzi" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional sections (included but minimized) */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6]">Skills</h2>
          {/* Skills content */}
        </div>
      </section>
      
      <section id="formation" className="py-24 bg-[#0a192f]/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6]">Formation</h2>
          {/* Formation content */}
        </div>
      </section>
      
      <section id="project" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6]">Projects</h2>
          {/* Projects content */}
        </div>
      </section>
      
      <section id="contact-me" className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6]">Contact Me</h2>
          <p className="text-[#8892b0] max-w-lg mx-auto mb-8">
            I&apos;m currently looking for internship opportunities. Whether you have questions or just want to say hi, I&apos;ll do my best to get back to you!
          </p>
          <a 
            href="mailto:your-email@example.com" 
            className="inline-block border border-[#64ffda] text-[#64ffda] font-mono px-8 py-4 rounded hover:bg-[#64ffda]/10 transition-all duration-300"
          >
            Say Hello
          </a>
        </div>
      </section>
      
      <footer className="py-6 text-center text-[#8892b0] font-mono text-sm">
        <p>Designed & Built by Souhail Ouzi</p>
        <p className="mt-2">© 2025</p>
      </footer>
    </main>
  )
}