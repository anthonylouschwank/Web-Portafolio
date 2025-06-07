// src/pages/BiographyPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Biography.css'; // Importaremos los estilos por separado

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
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='60' r='50' fill='%23e8c070'/%3E%3Ctext x='60' y='70' text-anchor='middle' font-size='40' fill='%232a2a2a'%3E👨‍💻%3C/text%3E%3C/svg%3E" 
              alt="Anthony Lou Schwank" 
              className="profile-image"
            />
            <div className="profile-info">
              <h1>Anthony Lou Schwank</h1>
              <p className="subtitle">PLACEHOLDER</p>
            </div>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>PLACEHOLDER@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <span>+PLACEHOLDER</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>SPLACEHOLDER</span>
            </div>
            <div className="contact-item">
              <span className="icon">🔗</span>
              <span>PLACEHOLDER</span>
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
              PLACEHOLDER
            </p>
            <p>
             PLACEHOLDER.
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
              PLACEHOLDER
            </p>
            <p>
              PLACEHOLDER
            </p>
          </div>
        </section>

        {/* Educación */}
        <section className="section">
          <div className="section-header">
            <h2>PLACEHOLDER</h2>
          </div>
          <div className="section-content">
            <div className="education-item">
              <div className="education-title">PLACEHOLDER</div>
              <div className="education-institution">PLACEHOLDER</div>
              <div className="education-details">PLACEHOLDER</div>
              
              <ul className="education-highlights">
                <li>PLACEHOLDER</li>
                <li>Proyectos académicos con tecnologías web modernas</li>
                <li>Participación en actividades de desarrollo estudiantil</li>
                <li>Enfoque en metodologías ágiles y buenas prácticas de programación</li>
                <li>Desarrollo de habilidades en trabajo colaborativo y resolución de problemas</li>
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
              Creo firmemente en el poder del aprendizaje continuo y la adaptabilidad en el mundo tecnológico. Para mí, cada proyecto es una oportunidad de crecimiento, cada error es una lección valiosa, y cada colaboración es una chance de aportar y aprender de otros.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, mantenible y eficiente, siempre considerando la experiencia del usuario final. Valoro la comunicación clara, el trabajo en equipo y la búsqueda constante de soluciones elegantes a problemas complejos.
            </p>
            <p>
              Aspiro a ser parte de la próxima generación de desarrolladores que no solo dominen las tecnologías actuales, sino que también contribuyan a moldear el futuro de la industria tecnológica con innovación y responsabilidad.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Biography;