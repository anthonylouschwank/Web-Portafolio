// src/pages/BiographyPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Biography.css'; // Importaremos los estilos por separado
import AmTiredBoss from '../../assets/AmTiredBoss.png'; // Asegúrate de que la ruta sea correcta

const Biography = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigatePortfolio = () => {
    navigate('/skilltree'); // O cualquier otra ruta que tengas
  };

  return (
    <div className="biography-container">
      {/* Botones de navegación */}
      <div className="nav-buttons">
        <button onClick={handleNavigateHome} className="frostpunk-control-btn">
          <div className="btn-lines">
            <div className="line line-top"></div>
            <div className="line line-bottom"></div>
          </div>
          <span className="btn-text">VOLVER AL MENÚ</span>
        </button>
        
        <button onClick={handleNavigatePortfolio} className="frostpunk-control-btn">
          <div className="btn-lines">
            <div className="line line-top"></div>
            <div className="line line-bottom"></div>
          </div>
          <span className="btn-text">VER PORTAFOLIO</span>
        </button>
      </div>

      <div className="container">
        {/* Header principal */}
        <header className="main-header">
          <div className="profile-container">
            <img 
              src={AmTiredBoss}
              alt="Anthony Lou Schwank" 
              className="profile-image"
            />
            <div className="profile-info">
              <h1>Anthony Lou Schwank</h1>
              <p className="subtitle">Desarrollador Web de Backend</p>
            </div>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>anthonylouschwank@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <span>+502 3001-0033</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>Mixco, Ciudad de Guatemala</span>
            </div>
            <div className="contact-item">
              <span className="icon">🔗</span>
              <span>https://github.com/anthonylouschwank</span>
            </div>
          </div>
        </header>

        {/* Acerca de Mí */}
        <section className="section">
          <div className="section-header">
            <h2>Acerca de Mí</h2>
          </div>
          <div className="section-content">
            <p>
              Anthony Lou Schwank, quien nació en La Ciudad de Guatemala en la fecha del 1 de enero 2005, es un estudiante de ingeniería en sistemas dentro de la Universidad del Valle de Guatemala. 
            </p>
            <p>
             Es una persona que le agrada socializar, convivir con sus compañeros del aula, además de practicar y escuchar música, le gustan los videojuegos que se centran en la gestión de macroeconomías. Me encantan los retos en lógica, además que la cooperación con otros compañeros es clave, el aporte de otras perspectivas son necesarias para la invención de nuevas ideas para las soluciones de problemas.
            </p>
          </div>
        </section>

        {/* Objetivo Profesional */}
        <section className="section">
          <div className="section-header">
            <h2>Objetivo Profesional</h2>
          </div>
          <div className="section-content">
            <p>
              Un espacio abierto para aprender, crecer y contribuir al desarrollo de soluciones tecnológicas innovadoras. Busco oportunidades que me permitan aplicar mis habilidades en programación y mi pasión por la tecnología, mientras colaboro con un equipo dinámico y creativo.
            </p>
            <p>
              Resolver problemas complejos, aprender nuevas tecnologías y contribuir a proyectos que impacten positivamente a la sociedad son mis principales motivaciones. Estoy comprometido con el aprendizaje continuo y la mejora constante, buscando siempre superar las expectativas en cada proyecto en el que participo.
            </p>
          </div>
        </section>

        {/* Educación */}
        <section className="section">
          <div className="section-header">
            <h2>Educacion</h2>
          </div>
          <div className="section-content">
            <div className="education-item">
              <div className="education-institution">Universidad del Valle de Guatemala</div>
              
              <ul className="education-highlights">
                <li>Entendimiento profundo en la estructura de datos</li>
                <li>Proyectos dinámicos aplicados a conocimientos de la Web</li>
                <li>Participación en actividades de desarrollo estudiantil</li>
                <li>Enfoque es habilidades de trabajo colaborativo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Filosofía Personal */}
        <section className="section">
          <div className="section-header">
            <h2>Filosofía Personal</h2>
          </div>
          <div className="section-content">
            <p>
              Creo firmemente que las personas son el motor de la innovación y el cambio. Mi filosofía personal se basa en la colaboración, la curiosidad y la búsqueda constante de la excelencia. Estoy convencido de que cada desafío es una oportunidad para aprender y crecer, tanto a nivel personal como profesional.
            </p>
            <p>
              La ética y la responsabilidad son pilares fundamentales en mi enfoque hacia el desarrollo de software. Me esfuerzo por crear soluciones que no solo sean técnicamente sólidas, sino que también respeten los principios de sostenibilidad y accesibilidad. La diversidad de pensamiento y la inclusión son esenciales para fomentar un ambiente creativo y productivo.
            </p>
            <p>
              Estoy comprometido con el aprendizaje continuo y la adaptación a un entorno tecnológico en constante evolución. Mi objetivo es contribuir a proyectos que no solo resuelvan problemas actuales, sino que también anticipen las necesidades futuras de la sociedad. La innovación responsable y el impacto positivo son mis principales motivaciones en cada proyecto que emprendo.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Biography;