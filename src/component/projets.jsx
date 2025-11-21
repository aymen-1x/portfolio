import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact, FaGithub } from 'react-icons/fa';
import { SiC } from 'react-icons/si';

const Projets = () => {
  const projects = [
    {
      title: "Site Web Club DO1",
      description: "Plateforme web responsive et moderne pour un club universitaire. Développée avec React.js et CSS3, cette application offre une interface intuitive pour consulter les événements, les membres et les actualités du club.",
      imgsrc: "",
      icon: <FaReact className="text-primary" size={24} />,
      technologies: ["React.js", "CSS3", "Bootstrap"]
    },
    {
      title: "Système de Gestion en C",
      description: "Application robuste de gestion de données développée en langage C. Utilise des structures de données avancées et la gestion de fichiers pour stocker et récupérer les informations de manière efficace et sécurisée.",
      imgsrc: "",
      icon: <SiC className="text-secondary" size={24} />,
      technologies: ["C", "Structures", "Fichiers"]
    },
    {
      title: "TODO List",
      description: "Application de productivité complète pour la gestion des tâches quotidiennes. Construite avec React.js et Bootstrap, elle intègre Axios pour la synchronisation et Local Storage pour la persistance des données locales.",
      imgsrc: "",
      icon: <FaReact className="text-info" size={24} />,
      technologies: ["React.js", "Bootstrap", "Axios", "Local Storage"]
    }
  ];

  return (
    <>
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Projets</h2>
          
          <div className="row g-4">
            {projects.map((PRJ, index) => (
              <div className="col-md-4" key={index}>
                <div className="project-card shadow-sm rounded-4 p-4 bg-white h-100 d-flex flex-column">
                  <div className="mb-3">
                    {PRJ.icon}
                  </div>
                  <img
                   
                    className="img-fluid rounded-3 mb-3"
                  />
                  <h5 className="fw-bold mb-2">{PRJ.title}</h5>
                  <p className="text-muted flex-grow-1">
                    {PRJ.description}
                  </p>
                  <div className="mb-3">
                    <small className="text-secondary">
                      {PRJ.technologies.join(" • ")}
                    </small>
                  </div>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    <FaGithub className="me-2" />
                    Voir le code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projets;