'use client'
import Image from 'next/image'
import { useState } from 'react'

const skills = [
  { name: 'HTML', image: '/img/html5.webp' },
  { name: 'CSS', image: '/img/CSS3.webp' },
  { name: 'JAVA', image: '/img/java.webp' },
  { name: 'JAVASCRIPT', image: '/img/js.webp' },
  { name: 'PHP', image: '/img/php.webp' },
  { name: 'MYSQL', image: '/img/mysql.webp' },
  { name: 'ORACLE', image: '/img/oracle.webp' },
]

export default function SkillsSection() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="skills" className="min-h-screen py-16 px-4 text-center">
      <h1 className="text-[#64ffda] text-4xl mb-16 drop-shadow-[0_0_10px_rgba(100,255,218,0.3)]">
        SKILLS
      </h1>
      
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div 
          className={`flex gap-8 ${isPaused ? '' : 'animate-scroll'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={`skill-${index}`} 
              className="flex-none w-48 bg-white/5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(100,255,218,0.2)]"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-4">
                  <Image 
                    src={skill.image} 
                    alt={skill.name}
                    fill
                    className="object-contain filter drop-shadow-[0_0_5px_rgba(100,255,218,0.3)]"
                  />
                </div>
                <h2 className="text-[#64ffda] text-xl">{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}