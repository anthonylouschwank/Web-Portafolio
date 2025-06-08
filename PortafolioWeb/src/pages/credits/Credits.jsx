// src/pages/credits/Credits.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Credits.css';

const Credits = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateBiography = () => {
    navigate('/biography');
  };

  const handleNavigateProjects = () => {
    navigate('/projects');
  };

  const handleNavigateSkillTree = () => {
    navigate('/skilltree');
  };

  // Datos de créditos - puedes modificar estos según tus necesidades
  const credits = [
    {
      id: 1,
      category: "DESARROLLO PRINCIPAL",
      people: [
        {
          name: "Anthony Lou Schwank",
          role: "Desarrollador Full Stack & Diseñador",
          description: "Arquitectura del sistema, desarrollo frontend y backend, diseño de interfaz y experiencia de usuario.",
          icon: "👨‍💻"
        }
      ]
    },
    {
      id: 2,
      category: "INSPIRACIÓN Y SOPORTE",
      people: [
        {
          name: "Denis Aldana",
          role: "Mentor Técnico",
          description: "Orientación en mejores prácticas de desarrollo y arquitectura de software web.",
          icon: "🎓"
        },
        {
          name: "Comunidad Universitaria",
          role: "Soporte y Feedback",
          description: "Retroalimentación valiosa y sugerencias para mejorar la funcionalidad del portafolio.",
          icon: "👥"
        }
      ]
    },
    {
      id: 3,
      category: "TECNOLOGÍAS Y HERRAMIENTAS",
      people: [
        {
          name: "React Development Team",
          role: "Framework Frontend",
          description: "Biblioteca principal para la construcción de la interfaz de usuario interactiva.",
          icon: "⚛️"
        },
        {
          name: "Frostpunk (11 bit studios)",
          role: "Inspiración Visual",
          description: "Estética industrial y paleta de colores que inspiró el diseño visual del portafolio.",
          icon: "🎮"
        }
      ]
    }
  ];

  return (
    <div className="credits-container">
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

        <button onClick={handleNavigateProjects} className="frostpunk-control-btn">
          <div className="btn-lines">
            <div className="line line-top"></div>
            <div className="line line-bottom"></div>
          </div>
          <span className="btn-text">PROYECTOS</span>
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
              <h1>ARCHIVO DE CRÉDITOS</h1>
              <div className="subtitle-section">
                <span className="subtitle">RECONOCIMIENTOS DEL SISTEMA</span>
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span className="status-text">REGISTRO COMPLETO</span>
                </div>
              </div>
            </div>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{credits.reduce((total, cat) => total + cat.people.length, 0)}</span>
                <span className="stat-label">CONTRIBUCIONES</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{credits.length}</span>
                <span className="stat-label">CATEGORÍAS</span>
              </div>
            </div>
          </div>
        </header>

        {/* Secciones de créditos */}
        <div className="credits-sections">
          {credits.map((category, categoryIndex) => (
            <section 
              key={category.id} 
              className="credits-category"
              style={{ animationDelay: `${categoryIndex * 0.3}s` }}
            >
              <div className="category-header">
                <h2 className="category-title">{category.category}</h2>
                <div className="category-line"></div>
              </div>

              <div className="people-grid">
                {category.people.map((person, personIndex) => (
                  <div 
                    key={personIndex} 
                    className="person-card"
                    style={{ animationDelay: `${(categoryIndex * 0.3) + (personIndex * 0.1)}s` }}
                  >
                    <div className="person-header">
                      <div className="person-icon">{person.icon}</div>
                      <div className="person-info">
                        <h3 className="person-name">{person.name}</h3>
                        <p className="person-role">{person.role}</p>
                      </div>
                    </div>
                    
                    <div className="person-description">
                      <p>{person.description}</p>
                    </div>

                    <div className="card-glow"></div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Mensaje de agradecimiento */}
        <div className="thanks-section">
          <div className="thanks-content">
            <h2 className="thanks-title">AGRADECIMIENTOS ESPECIALES</h2>
            <p className="thanks-message">
              Este portafolio representa no solo el trabajo individual, sino también el resultado 
              de la colaboración, el aprendizaje continuo y el apoyo de una comunidad de desarrolladores 
              comprometidos con la excelencia técnica y la innovación.
            </p>
            <p className="thanks-message">
              Cada línea de código, cada diseño y cada funcionalidad han sido cuidadosamente 
              elaborados con el objetivo de demostrar habilidades técnicas y creatividad en el 
              desarrollo de software moderno.
            </p>
            <div className="signature">
              <div className="signature-line"></div>
              <span className="signature-text">ANTHONY LOU SCHWANK</span>
              <div className="signature-line"></div>
            </div>
          </div>
        </div>

        {/* Footer de información */}
        <div className="credits-footer">
          <div className="footer-info">
            <p>© 2025 Portafolio Industrial - Todos los derechos reservados</p>
            <p>Desarrollado con React.js • Diseño inspirado en estética industrial</p>
            <p>Versión del sistema: 2.1.0 • Última actualización: Junio 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;