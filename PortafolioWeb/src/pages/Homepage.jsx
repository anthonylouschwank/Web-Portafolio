// src/pages/HomePage.jsx
import FrostpunkButton from '../components/FrostpunkButton';
import MenuBackground from '../components/MenuBackground';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const menuItems = [
        { text: "ÁRBOL DE HABILIDADES", disabled: false, route: "/skilltree" },
        { text: "BIOGRAFÍA", disabled: false, route: "/biography" }, // Nueva opción
        { text: "EXPEDICIONES", disabled: true },
        { text: "ARCHIVOS", disabled: true },
        { text: "CONFIGURACIÓN", disabled: true },
        { text: "CRÉDITOS", disabled: true },
        { text: "SALIR", disabled: true }
    ];

    const handleMenuClick = (item) => {
        if (!item.disabled && item.route) {
            navigate(item.route);
        }
    };

  return (
    <div className="homepage">
      <style jsx>{`
        .homepage {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 69, 0, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(255, 140, 0, 0.05) 50%, transparent 51%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          font-family: 'Arial', sans-serif;
          color: #d4af37;
        }

        .homepage::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              rgba(255, 140, 0, 0.03) 100px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 98px,
              rgba(255, 140, 0, 0.03) 100px
            );
          pointer-events: none;
        }

        .content-wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 8rem;
          position: relative;
          z-index: 1;
        }

        .title-section {
          flex: 1;
        }

        .main-title {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          margin: 0 0 1rem 0;
          text-shadow: 
            0 0 10px rgba(212, 175, 55, 0.5),
            0 0 20px rgba(212, 175, 55, 0.3),
            2px 2px 4px rgba(0, 0, 0, 0.8);
          background: linear-gradient(45deg, #d4af37, #ffd700, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .subtitle {
          font-size: 1.2rem;
          letter-spacing: 0.1em;
          color: #8b7355;
          margin-bottom: 2rem;
        }

        .menu-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1rem;
          padding-left: 4rem;
        }

        .frostpunk-btn {
          background: transparent;
          border: none;
          position: relative;
          padding: 1rem 2.5rem;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          min-width: 280px;
          text-align: center;
          margin: 0.2rem 0;
        }

        .frostpunk-btn:not(.disabled):hover {
          transform: translateX(-5px);
        }

        .frostpunk-btn.disabled {
          cursor: not-allowed;
        }

        .btn-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          transition: all 0.3s ease;
        }

        .line-top {
          top: 0;
        }

        .line-bottom {
          bottom: 0;
        }

        .frostpunk-btn:not(.disabled):hover .line {
          background: linear-gradient(90deg, transparent, #ffd700, #d4af37, #ffd700, transparent);
          box-shadow: 0 0 5px rgba(212, 175, 55, 0.6);
        }

        .btn-text {
          position: relative;
          z-index: 2;
          color: #d4af37;
          transition: all 0.3s ease;
          display: block;
        }

        .frostpunk-btn.disabled .btn-text {
          color: #5a5a5a;
        }

        .frostpunk-btn:not(.disabled):hover .btn-text {
          color: #ffd700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .btn-glow {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ffd700, transparent);
          transform: translateY(-50%);
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .industrial-details {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: #5a5a5a;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
        }

        .version-info {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          color: #5a5a5a;
          font-size: 0.8rem;
        }

        @media (max-width: 1200px) {
          .content-wrapper {
            flex-direction: column;
            text-align: center;
            padding: 4rem 2rem;
          }
          
          .menu-section {
            align-items: center;
            padding-left: 0;
            margin-top: 3rem;
          }
          
          .main-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          
          .frostpunk-btn {
            min-width: 250px;
            padding: 0.8rem 2rem;
          }
        }
      `}</style>

      <div className="content-wrapper">
        <MenuBackground />
        <div className="title-section">
          <h1 className="main-title">PORTAFOLIO</h1>
          <h2 className="main-title" style={{fontSize: '3rem', marginTop: '-1rem'}}>INDUSTRIAL</h2>
          <p className="subtitle">EXPERIENCIA • HABILIDADES • PROYECTOS</p>
        </div>

        <div className="menu-section">
          {menuItems.map((item, index) => (
            <FrostpunkButton
              key={index}
              text={item.text}
              disabled={item.disabled}
              onClick={() => handleMenuClick(item)}
            />
          ))}
        </div>
      </div>

      <div className="industrial-details">
        SISTEMA OPERATIVO v2.1
      </div>

      <div className="version-info">
        BUILD 2025.06.06
      </div>
    </div>
  );
};

export default HomePage;