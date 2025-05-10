import { FaReact, FaGithub } from 'react-icons/fa';

interface ProjectsProps {
  lightMode: boolean;
}

const projects = [
  {
    title: "Application de gestion des produits, fournisseurs et ventes (Association) DIGITAL ZONE ",
    description: [
      "Ajout, mise à jour et suppression de produits.",
      "Gestion des commandes et des factures. Suivi des niveaux de stocks avec des alertes.",
      "Reporting des recettes/dépenses mensuelles."
    ],
    tags: ["C#", ".NET", "SQL Server", "T-SQL"],
    github: "https://github.com/Souhailaouzi/DIGITAL_ZONE",
    demo: "",
    image: "/img/img1.SVg",
  },
  {
    title: "Application web de gestion de restaurant",
    description: [
      "Conception d'une interface utilisateur responsive et conviviale avec HTML, CSS et JavaScript.",
      "Implémentation de PHP pour gérer la logique serveur, traiter les requêtes et interagir avec la base de données.",
      "Utilisation de MySQL pour stocker et gérer efficacement les données des utilisateurs, des réservations et des menus."
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Souhailaouzi/website_Menu-des-Cultures",
    demo: "",
    image: "/img/img2.svg",
  },
  {
    title: "UPVOTY – Application de gestion de feedbacks utilisateurs",
    description: [
      "Conception et développement d'une application web moderne pour centraliser, organiser et exploiter les retours, suggestions et commentaires des utilisateurs.",
      "Facilite la communication entre clients et équipes de développement pour optimiser la prise de décision et l'amélioration continue.",
      "Mise en œuvre complète : analyse des besoins, modélisation, développement fullstack (React, Node.js, GraphQL), gestion de base de données, sécurité, déploiement Docker.",
      "Gestion de projet, travail collaboratif et intégration de technologies modernes."
    ],
    tags: ["Next.js", "Express.js", "GraphQL", "Redux", "Docker", "Typescript", "Tailwind CSS", "Redis"],
    github: "https://github.com/Souhailaouzi",
    demo: "",
    image: "/img/img4.svg",
  },
  {
    title: "Application de gestion de la coopérative de miel APIGOLD",
    description: [
      "Conception d'une boutique en ligne permettant aux utilisateurs de parcourir les produits",
      "de se connecter, d'ajouter des articles au panier et de passer des commandes.Et meme le moderateur",
      "de la boutique a son interface personnelle afin",
      "d y acceder et ajouter,modifier,supprimer des produits"
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    github: "https://github.com/Souhailaouzi/COOPERATIVE_DE_MIEL",
    demo: "",
    image: "/img/img3.svg",
  },
];

export default function Projects({ lightMode }: ProjectsProps) {
  return (
    <section id="project" className={`py-24 ${lightMode ? "bg-white" : "bg-[#0a192f]"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-10 font-mono ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${lightMode ? "bg-white" : "bg-[#112240]"}`}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-contain mb-4"
                />
              )}
              <div className="p-4">
                <h3 className={`text-xl font-bold mb-2 ${lightMode ? "text-[#0a192f]" : "text-[#64ffda]"}`}>
                  {project.title}
                </h3>
                <ul className={`mb-4 list-disc pl-5 ${lightMode ? "text-[#0a192f]" : "text-[#ccd6f6]"}`}>
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${lightMode ? "bg-[#e0f7fa] text-[#00796b]" : "bg-[#233554] text-[#64ffda]"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#1976d2] hover:underline font-bold"
                    >
                      <FaReact /> Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#1976d2] hover:underline font-bold"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 