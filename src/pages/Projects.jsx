import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    title: "Site Web du BDE Info",
    description: "Développement d'un site web complet pour le Bureau des Étudiants – gestion d'événements, publications et interface d'administration.",
    tags: ["PHP", "SQL", "HTML/CSS", "JavaScript"],
    image: "/assets/site_bde/img_site_bde.png",
    github: "https://github.com/NicolasCHANTEUX/SAE_4.01_site_BDE",
    demoLink: "",
    detailLink: "/projects/bde-info"
  },
  {
    id: 2,
    title: "Application Sportive",
    description: "Application Java pour le suivi d'entraînements sportifs, avec interface graphique et base de données PostgreSQL.",
    tags: ["Java", "JavaFX", "PostgreSQL"],
    image: "/assets/app_muscu/img_app_muscu.png",
    github: "https://github.com/NicolasCHANTEUX/MusculationApp",
    demoLink: "",
    detailLink: "/projects/app-sport"
  },
  {
    id: 3,
    title: "L'âge de Psyché",
    description: "Virtualisation du jeu de société \"L'âge de Psyché\" avec une architecture MVC, une interface graphique Swing, et génération dynamique de la carte de jeu.",
    tags: ["Java", "Architecture MVC", "Travail en équipe"],
    image: "/assets/age_psyché/img_app_age_psyche.png",
    github: "https://github.com/A1exPrdgc/SAE-2.01---application-final",
    demoLink: "",
    detailLink: "/projects/psyche"
  },
  {
    id: 4,
    title: "Application QCM Builder",
    description: "Application pour enseignants permettant de créer des évaluations interactives avec différents types de questions, générées en HTML/CSS/JS.",
    tags: ["Java", "Architecture MVC", "Travail en équipe"],
    image: "/assets/app_qcm_builder/img_app_qcm_builder.png",
    github: "https://github.com/pierrecvn/QCMBuilder",
    demoLink: "",
    detailLink: "/projects/qcm-builder"
  },
  {
    id: 5,
    title: "Site Web Musculation",
    description: "Version web de l'application de suivi sportif avec gestion des utilisateurs, enregistrement des séances, et visualisation de la progression.",
    tags: ["PHP", "JavaScript", "SQL", "HTML/CSS"],
    image: "/assets/site_muscu/img_site_muscu.png",
    github: "https://github.com/NicolasCHANTEUX/Site_Web_Musculation",
    demoLink: "",
    detailLink: "/projects/muscu-web"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Mes Projets</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Découvrez mes travaux récents à travers une sélection de projets développés dans différents contextes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x200?text=${project.title}`;
            e.target.onerror = null;
          }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center py-2 px-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Code source
          </a>
          <Link 
            to={project.detailLink}
            className="text-center py-2 px-3 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
            </svg>
            Voir le projet
          </Link>
          
          {project.demoLink && (
            <div className="col-span-2 mt-2">
              <a 
                href={project.demoLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center py-2 px-3 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium block"
              >
                Démo en ligne
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}