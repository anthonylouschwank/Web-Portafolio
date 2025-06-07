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
      title: "PROYECTO INDUSTRIAL #001",
      subtitle: "Sistema de Gestión Web",
      description: "Una aplicación web completa desarrollada con React y Node.js para la gestión de procesos industriales. Incluye dashboard interactivo, gestión de usuarios y reportes en tiempo real.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/tu-usuario/proyecto-1",
      status: "COMPLETADO",
      year: "2024"
    },
    {
      id: 2,
      title: "PROYECTO INDUSTRIAL #002",
      subtitle: "Automatización de Datos",
      description: "Script de Python para automatización de análisis de datos industriales. Procesamiento de grandes volúmenes de información con visualizaciones dinámicas y alertas automatizadas.",
      technologies: ["Python", "Pandas", "Matplotlib", "SQLite"],
      githubUrl: "https://github.com/tu-usuario/proyecto-2",
      status: "EN DESARROLLO",
      year: "2024"
    },
    {
      id: 3,
      title: "PROYECTO INDUSTRIAL #003",
      subtitle: "API de Monitoreo",
      description: "API RESTful para monitoreo de equipos industriales en tiempo real. Incluye autenticación, logging avanzado y integración con dispositivos IoT para telemetría.",
      technologies: ["FastAPI", "PostgreSQL", "Docker", "Redis"],
      githubUrl: "https://github.com/tu-usuario/proyecto-3",
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