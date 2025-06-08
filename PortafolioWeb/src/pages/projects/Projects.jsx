// src/pages/projects/Projects.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateBiography = () => {
    navigate('/biography');
  };

  const handleNavigateSkillTree = () => {
    navigate('/skilltree');
  };

  // Datos de proyectos - puedes modificar estos para tus proyectos reales
  const projects = [
    {
      id: 1,
      title: "Proyecto Desarrolo de IA",
      subtitle: "Manejo de Machine Learning",
      description: "Un proyecto diseñado para la aplicacion de tecnicas de Machine Learning cortando el conocimiento de la IA. Con una interfaz amigable, este proyecto permite a los usuarios interactuar con modelos de IA de manera eficiente.",
      technologies: ["Python", "Css", "ChatGPT", "Express", "Node.js"],
      githubUrl: "https://github.com/anthonylouschwank/Proyecto-2-IA.git",
      status: "COMPLETADO",
      year: "2025"
    },
    {
      id: 2,
      title: "Raices de Vida",
      subtitle: "Conexiones y Análisis de Datos",
      description: "Es una herramienta de ayuda para la gestion de datos sobre emergencias y recursos de diferentes comunidades, pensado para ayudar a las organizaciones a tomar decisiones informadas y mejorar la respuesta ante emergencias.",
      technologies: ["JavaScript", "Node.js", "Express", "PSQL", "Docker"],
      githubUrl: "https://github.com/Raices-de-Vida/Raices_de_Vida.git",
      status: "EN DESARROLLO",
      year: "2025"
    },
    {
      id: 3,
      title: "Friomania",
      subtitle: "Aplicación de Comercio Electrónico",
      description: "Una plataforma de comercio que permite a los usuarios consultar los precios de varios productos, ademas de recibir la informacion de los productos que se encuentran en oferta. Con una interfaz intuitiva, los usuarios pueden navegar fácilmente por las categorías de productos y realizar compras de manera segura.",
      technologies: ["Prisma", "PostgreSQL", "Docker", "React", "Vue.js"],
      githubUrl: "https://github.com/Cisco890/Friomania.git",
      status: "PLANIFICADO",
      year: "2025"
    }
  ];

  const handleProjectClick = (githubUrl) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <div className="projects-container">
      {/* Botones de navegación */}
      <div className="nav-buttons">
        <button onClick={handleNavigateHome} className="frostpunk-control-btn">
          <div className="btn-lines">
            <div className="line line-top"></div>
            <div className="line line-bottom"></div>
          </div>
          <span className="btn-text">VOLVER AL MENÚ</span>
        </button>
        
        <button onClick={handleNavigateBiography} className="frostpunk-control-btn">
          <div className="btn-lines">
            <div className="line line-top"></div>
            <div className="line line-bottom"></div>
          </div>
          <span className="btn-text">BIOGRAFÍA</span>
        </button>

        <button onClick={handleNavigateSkillTree} className="frostpunk-control-btn">
          <div className="btn-lines">
            <div className="line line-top"></div>
            <div className="line line-bottom"></div>
          </div>
          <span className="btn-text">HABILIDADES</span>
        </button>
      </div>

      <div className="container">
        {/* Header principal */}
        <header className="main-header">
          <div className="header-content">
            <div className="title-section">
              <h1>ARCHIVO DE PROYECTOS</h1>
              <div className="subtitle-section">
                <span className="subtitle">REPOSITORIO GITHUB</span>
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span className="status-text">SISTEMA ACTIVO</span>
                </div>
              </div>
            </div>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{projects.length}</span>
                <span className="stat-label">PROYECTOS</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{projects.filter(p => p.status === "COMPLETADO").length}</span>
                <span className="stat-label">COMPLETADOS</span>
              </div>
            </div>
          </div>
        </header>

        {/* Grid de proyectos */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.status.toLowerCase().replace(' ', '-')}`}
              onClick={() => handleProjectClick(project.githubUrl)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-header">
                <div className="project-title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-meta">
                  <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>

              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="technologies">
                  <h4 className="tech-title">TECNOLOGÍAS</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-footer">
                <div className="github-link">
                  <span className="github-icon">📂</span>
                  <span className="github-text">VER EN GITHUB</span>
                </div>
                <div className="project-arrow">→</div>
              </div>

              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        {/* Footer de información */}
        <div className="projects-footer">
          <div className="footer-info">
            <p>Todos los proyectos están disponibles bajo licencias de código abierto</p>
            <p>Última actualización: Junio 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;