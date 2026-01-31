'use client';

import { useState } from 'react';

type SkillCategory = 'FRONTEND' | 'BACKEND' | 'DATABASE' | 'DEVOPS';

const skillsData: Record<SkillCategory, { name: string; percent: number }[]> = {
  FRONTEND: [
    { name: "Next.js", percent: 90 },
    { name: "Redux", percent: 80 },
    { name: "Tailwind CSS", percent: 85 },
    { name: "Bootstrap", percent: 85 },
  ],
  BACKEND: [
    { name: "Express.js", percent: 75 },
    { name: "Python", percent: 85 },
    { name: "JEE", percent: 85 },
    { name: "Spring Boot", percent: 75 },
  ],
  DATABASE: [
    { name: "Oracle", percent: 80 },
    { name: "MySQL", percent: 85 },
    { name: "MongoDB", percent: 75 },
    { name: "SQL Server", percent: 70 },
  ],
  DEVOPS: [
    { name: "Docker", percent: 80 },
    { name: "Git/GitHub", percent: 85 },
    { name: "GitLab", percent: 85 },
  ],
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("BACKEND");

  return (
    <section id="skills" className="py-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-[#d4a574]"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {Object.keys(skillsData).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as SkillCategory)}
              className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-[#d4a574] text-white border-[#d4a574]"
                  : "bg-transparent text-[#666] border-[#e5e5e5] hover:border-[#d4a574] hover:text-[#0a0a0a]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData[selectedCategory].map((skill) => (
            <div
              key={skill.name}
              className="group p-6 bg-white border border-[#e5e5e5] hover:border-[#d4a574]/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#0a0a0a] font-medium text-lg">{skill.name}</span>
                <span className="text-[#d4a574] font-bold">{skill.percent}%</span>
              </div>
              <div className="w-full h-1 bg-[#e5e5e5]">
                <div
                  className="h-full bg-[#d4a574] transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
