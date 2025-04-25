'use client'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 pt-24"
      style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-[#64ffda] text-4xl md:text-5xl font-bold mb-6">
            <span className="typing-animation">HI I'M SOUHAIL</span>
          </h1>
          <p className="text-[#8892b0] text-lg leading-relaxed">
            Currently enrolled in a Bachelor's degree in COMPUTER ENGINEERING<br />
            I am actively looking for an opportunity for an End-of-Studies<br />
            Project (PFE) internship in order to validate my training.
          </p>
        </div>
        
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <Image
            src="/img/souhail.jpeg"
            alt="Souhail Ouzi"
            fill
            className="rounded-full object-cover border-2 border-[#64ffda] shadow-[0_0_30px_rgba(100,255,218,0.3)]"
          />
        </div>
      </div>
    </section>
  )
}