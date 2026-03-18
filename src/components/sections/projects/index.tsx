import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="project" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-[#d4a574]"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group p-6 border border-[#e5e5e5] hover:border-[#d4a574]/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#d4a574] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#d4a574] text-sm">{project.subtitle}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#e5e5e5] hover:border-[#d4a574] text-[#888] hover:text-[#d4a574] transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>

              {/* Description */}
              <p className="text-[#666] text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs text-[#888] border border-[#e5e5e5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
