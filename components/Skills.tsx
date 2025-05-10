import { useState } from 'react';

type SkillCategory = 'FRONTEND' | 'BACKEND' | 'DATABASE' | 'DEVOPS';

const skillsData: Record<SkillCategory, { name: string; percent: number }[]> = {
  FRONTEND: [
    { name: "React", percent: 90 },
    { name: "Redux", percent: 80 },
    { name: "Tailwind CSS", percent: 85 },
    { name: "bootstrap", percent: 85 },
  ],
  BACKEND: [
    { name: "Node.js", percent: 80 },
    { name: "Express.js", percent: 75 },
    { name: "Python", percent: 85 },
    { name: "JEE", percent: 85 },
    { name: "Java", percent: 75 },
    { name: "Spring Boot", percent: 75 },
    { name: "PHP", percent: 70 },
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
    { name: "Gitlab", percent: 85 },
  ],
};

interface SkillsProps {
  lightMode: boolean;
}

export default function Skills({ lightMode }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("BACKEND");

  return (
    <section
      id="skills"
      className={`py-24 ${lightMode ? "bg-white" : "bg-[#0a192f]"}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={
          `text-2xl md:text-4xl font-extrabold text-center mb-2 font-mono ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"} tracking-normal md:tracking-widest`
        }>
          Mes Compétences
        </h2>
        <div className="w-24 h-1 mx-auto bg-[#64ffda] rounded mb-6 md:mb-8"></div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          {Object.keys(skillsData).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as SkillCategory)}
              className={`px-3 py-1 md:px-4 md:py-2 rounded font-bold text-xs md:text-base ${
                selectedCategory === cat
                  ? "bg-[#64ffda] text-[#0a192f]"
                  : "bg-[#233554] text-[#ccd6f6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="w-full">
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-2 font-mono ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>
              <span className={`w-2 h-6 rounded-sm inline-block ${lightMode ? "bg-[#0a192f]" : "bg-[#64ffda]"}`}></span>
              {selectedCategory}
            </h3>
            <div className="space-y-8">
              {skillsData[selectedCategory]
                .slice(0, Math.ceil(skillsData[selectedCategory].length / 2))
                .map((skill) => (
                  <div
                    key={skill.name}
                    className={`${lightMode ? "bg-white" : "bg-[#112240]"} rounded-xl shadow-lg px-6 py-4`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-lg font-medium ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>{skill.name}</span>
                      <span className="text-lg text-[#64ffda] font-bold">{skill.percent}%</span>
                    </div>
                    <div className={`w-full h-3 rounded-full ${lightMode ? "bg-[#e5e7eb]" : "bg-[#233554]"}`}>
                      <div
                        className="h-full bg-[#64ffda] rounded-full transition-all duration-700"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full">
            <div className="space-y-8 mt-8 md:mt-0">
              {skillsData[selectedCategory]
                .slice(Math.ceil(skillsData[selectedCategory].length / 2))
                .map((skill) => (
                  <div
                    key={skill.name}
                    className={`${lightMode ? "bg-white" : "bg-[#112240]"} rounded-xl shadow-lg px-6 py-4`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-lg font-medium ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>{skill.name}</span>
                      <span className="text-lg text-[#64ffda] font-bold">{skill.percent}%</span>
                    </div>
                    <div className={`w-full h-3 rounded-full ${lightMode ? "bg-[#e5e7eb]" : "bg-[#233554]"}`}>
                      <div
                        className="h-full bg-[#64ffda] rounded-full transition-all duration-700"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 