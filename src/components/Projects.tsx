import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const Projects = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Déploiement d'un Serveur Linux",
      description: "Configuration d'un serveur Linux avec services DHCP, DNS, FTP et mail",
      period: "Décembre 2024 - Février 2025",
      achievements: [
        "Configuration et gestion des services DHCP et DNS",
        "Installation et paramétrage d'un serveur FTP",
        "Mise en place d'un serveur mail",
        "Déploiement de GLPI pour la gestion du parc"
      ],
      technologies: ["Linux", "DHCP", "DNS", "FTP", "GLPI", "Mail Server"],
      githubLink: "#",
      demoLink: "#",
      gradient: "gradient-purple"
    },
    {
      title: "Développement d'un site web dynamique",
      description: "Site web dynamique avec gestion des utilisateurs et base de données",
      period: "Septembre 2024 - Novembre 2024",
      achievements: [
        "Développement frontend avec React et Tailwind CSS",
        "Création d'une API REST avec PHP",
        "Gestion des utilisateurs et authentification",
        "Administration de la base de données MySQL"
      ],
      technologies: ["React", "PHP", "MySQL", "Tailwind CSS", "API REST"],
      githubLink: "#",
      demoLink: "#",
      gradient: "gradient-indigo"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Mes Projets</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="project-card fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="project-card-content">
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.period}
                </p>
                <p className="text-gray-200 mb-6">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium mb-2">Réalisations :</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`tech-tag ${project.gradient}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end gap-4 mt-6">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt className="text-lg" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
