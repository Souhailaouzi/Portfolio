export type SkillCategory = 'FRONTEND' | 'BACKEND' | 'DATABASE' | 'DEVOPS';

export const skillsData: Record<SkillCategory, { name: string; percent: number }[]> = {
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
