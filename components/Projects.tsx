import { FaGithub } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';

const projects = [
  {
    title: "DIGITAL ZONE",
    subtitle: "Product & Sales Management",
    description: "Product, supplier, and sales management application for an association. Order management, invoicing, and stock tracking with alerts.",
    tags: ["C#", ".NET", "SQL Server", "T-SQL"],
    github: "https://github.com/Souhailaouzi/DIGITAL_ZONE",
  },
  {
    title: "Restaurant Management",
    subtitle: "Web Application",
    description: "Restaurant management web application with responsive interface. Reservation, menu, and user data management.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Souhailaouzi/website_Menu-des-Cultures",
  },
  {
    title: "UPVOTY",
    subtitle: "User Feedback Platform",
    description: "Modern web application to centralize and leverage user feedback. Facilitates communication between clients and development teams.",
    tags: ["Next.js", "Express.js", "GraphQL", "Docker", "Redis"],
    github: "https://github.com/Souhailaouzi",
  },
  {
    title: "APIGOLD",
    subtitle: "Honey Cooperative E-commerce",
    description: "Online store for a honey cooperative. Product browsing, cart, orders, and admin interface for management.",
    tags: ["J2EE", "PL-SQL", "JWT"],
    github: "https://github.com/Souhailaouzi/COOPERATIVE_DE_MIEL",
  },
];

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
