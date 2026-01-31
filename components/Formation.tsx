'use client';

import { useEffect, useRef, useState } from 'react';

export default function Formation() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const formations = [
    {
      title: "MASTER'S IN NETWORK ENGINEERING",
      period: "2025 - 2027",
      location: "FST SETTAT, MOROCCO",
      description: "Specialization in web development, DevOps, Cloud Computing, and network supervision."
    },
    {
      title: "BACHELOR'S IN COMPUTER SCIENCE",
      period: "2023 - 2024",
      location: "FST BENI MELLAL, MOROCCO",
      description: "Specialization in web development and mobile applications. Focus on modern technologies."
    },
    {
      title: "ASSOCIATE DEGREE IN MIPC",
      period: "2021 - 2023",
      location: "FST BENI MELLAL, MOROCCO",
      description: "Multidisciplinary program with a strong scientific foundation."
    },
    {
      title: "HIGH SCHOOL DIPLOMA - PHYSICS",
      period: "2020 - 2021",
      location: "ANISSE INTERNATIONAL SCHOOL, CASABLANCA",
      description: "Scientific education with excellence in physics and mathematics."
    }
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="formation" className="bg-white">
      {/* Gradient transition from hero */}
      <div className="h-32 bg-gradient-to-b from-[#0a0a0a] to-white"></div>

      <div className="max-w-4xl mx-auto px-8 md:px-16 pb-20">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-3">
            EDUCATION
          </h2>
          <div className="w-20 h-1 bg-[#d4a574]"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-[#e5e5e5]"></div>

          <div className="space-y-6">
            {formations.map((formation, index) => (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`relative pl-6 md:pl-14 transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Dot */}
                <div className={`absolute left-0 md:left-6 top-2 w-2 h-2 -translate-x-1/2 rounded-full transition-all duration-500 ${
                  visibleItems.includes(index) ? 'bg-[#d4a574] scale-100' : 'bg-[#e5e5e5] scale-0'
                }`}></div>

                {/* Card */}
                <div className="group p-4 border border-[#e5e5e5] hover:border-[#d4a574]/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-base md:text-lg font-bold text-[#0a0a0a] group-hover:text-[#d4a574] transition-colors">
                      {formation.title}
                    </h3>
                    <span className="text-[#d4a574] text-xs tracking-wider mt-1 md:mt-0">
                      {formation.period}
                    </span>
                  </div>
                  <p className="text-[#888] text-xs mb-2 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#d4a574] rounded-full"></span>
                    {formation.location}
                  </p>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {formation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
