import { useState, useEffect, useCallback } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const SkillTree = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, scale: 1 });
  const [blizzardMode, setBlizzardMode] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);


  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: blizzardMode ? 200 : 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: { value: "#ffffff" },
      opacity: {
        value: 0.7,
        random: true,
        animation: {
          enable: blizzardMode,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 3 },
        random: true
      },
      move: {
        enable: true,
        speed: blizzardMode ? { min: 5, max: 10 } : { min: 1, max: 3 },
        direction: blizzardMode ? "bottom-right" : "bottom",
        outModes: "out",
        random: true,
        straight: false
      }
    }
  };

  // Configuración de nodos
  const nodes = [
    {
      id: 'center',
      x: 0,
      y: 0,
      size: 80,
      title: 'Núcleo Principal',
      content: 'Este es el centro de todo el sistema. Aquí comienza tu viaje hacia el desarrollo de habilidades avanzadas.',
      isCenter: true
    },
    {
      id: 'node1',
      x: -300,
      y: -200,
      size: 60,
      title: 'Desarrollo Frontend',
      content: 'Especialización en tecnologías de frontend como React, Vue.js, y desarrollo de interfaces de usuario modernas.',
      connections: ['center']
    },
    {
      id: 'node2',
      x: 280,
      y: -150,
      size: 60,
      title: 'Backend & APIs',
      content: 'Dominio de tecnologías backend, bases de datos, y desarrollo de APIs escalables y seguras.',
      connections: ['center']
    },
    {
      id: 'node3',
      x: -200,
      y: 250,
      size: 60,
      title: 'DevOps & Cloud',
      content: 'Implementación, despliegue y gestión de aplicaciones en la nube con herramientas modernas.',
      connections: ['center']
    },
    {
      id: 'node4',
      x: 320,
      y: 220,
      size: 60,
      title: 'Data Science',
      content: 'Análisis de datos, machine learning y desarrollo de modelos predictivos para soluciones inteligentes.',
      connections: ['center']
    }
  ];

  // Al hacer clic en un nodo
  const handleNodeClick = (node) => {
    setActiveNode(node);
    setBlizzardMode(true); // Activa ventisca

    setCameraPosition({
      x: -node.x,
      y: -node.y,
      scale: 1.5
    });
    // Desactiva después de 3 segundos
    setTimeout(() => setBlizzardMode(false), 3000);

  };

  const resetView = () => {
    setActiveNode(null);
    setCameraPosition({ x: 0, y: 0, scale: 1 });
  };

  // Función para generar path de conexión orgánica
  const generateConnection = (from, to) => {
    const fromNode = nodes.find(n => n.id === from);
    const toNode = nodes.find(n => n.id === to);
    
    if (!fromNode || !toNode) return '';

    const midX = (fromNode.x + toNode.x) / 2;
    const midY = (fromNode.y + toNode.y) / 2;
    
    // Añadir curva orgánica
    const controlOffset = 50;
    const angle = Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x);
    const perpAngle = angle + Math.PI / 2;
    
    const controlX = midX + Math.cos(perpAngle) * controlOffset;
    const controlY = midY + Math.sin(perpAngle) * controlOffset;

    return `M ${fromNode.x} ${fromNode.y} Q ${controlX} ${controlY} ${toNode.x} ${toNode.y}`;
  };

  return (
    <div className="skill-tree-container">
      {init && <Particles id="tsparticles" options={particlesOptions} />}

      {/* Partículas de fondo */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />


      {/* Controles */}
      <div className="controls">
        <button onClick={resetView} className="reset-btn">
          Reiniciar Vista
        </button>
      </div>

      {/* Área principal del árbol */}
      <div className="tree-viewport">
        <div 
          className="tree-canvas"
          style={{
            transform: `translate(${cameraPosition.x}px, ${cameraPosition.y}px) scale(${cameraPosition.scale})`,
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* SVG para las conexiones */}
          <svg className="connections" width="2000" height="2000" viewBox="-1000 -1000 2000 2000">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffd700" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#ffd700" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#ffd700" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            
            {nodes.map(node => 
              node.connections?.map(connectionId => (
                <path
                  key={`${node.id}-${connectionId}`}
                  d={generateConnection(node.id, connectionId)}
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  className="connection-path"
                />
              ))
            )}
          </svg>

          {/* Nodos */}
          {nodes.map(node => (
            <div
              key={node.id}
              className={`node ${node.isCenter ? 'center-node' : ''} ${activeNode?.id === node.id ? 'active' : ''}`}
              style={{
                left: `${node.x}px`,
                top: `${node.y}px`,
                width: `${node.size}px`,
                height: `${node.size}px`,
              }}
              onClick={() => handleNodeClick(node)}
            >
              <div className="node-inner">
                <div className="node-glow"></div>
                <div className="node-core"></div>
                {node.isCenter && <div className="center-symbol">⚡</div>}
              </div>
              <div className="node-title">{node.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Panel de información */}
      {activeNode && (
        <div className="frostpunk-panel">
          <div className="frostpunk-header">
            <h2>DECISIÓN: {activeNode.title.toUpperCase()}</h2>
            <div className="frostpunk-border"></div>
          </div>
          <p className="frostpunk-content">{activeNode.content}</p>
          <button 
            className="frostpunk-button" 
            onClick={resetView}
          >
            RATIFICAR
          </button>
        </div>
      )}

      <style jsx>{`
        .skill-tree-container {
          width: 100vw;
          height: 100vh;
          background: radial-gradient(ellipse at center, #1a1a1a 0%, #2a2a2a 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Arial', sans-serif;
        }

        .controls {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 100;
        }

        .reset-btn {
          background: rgba(255, 215, 0, 0.2);
          border: 2px solid #ffd700;
          color: #ffd700;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .reset-btn:hover {
          background: rgba(255, 215, 0, 0.3);
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        }

        .tree-viewport {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .tree-canvas {
          position: absolute;
          left: 50%;
          top: 50%;
          transform-origin: center;
        }

        .connections {
          position: absolute;
          top: -1000px;
          left: -1000px;
          pointer-events: none;
          z-index: 1;
        }

        .connection-path {
          opacity: 0.6;
          animation: pulse 3s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0% { opacity: 0.4; }
          100% { opacity: 0.8; }
        }

        .node {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .node:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        .node-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .node-glow {
          position: absolute;
          width: 120%;
          height: 120%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
          top: -10%;
          left: -10%;
          animation: nodeGlow 2s ease-in-out infinite alternate;
        }

        .node-core {
          position: relative;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: linear-gradient(135deg, #3d3d3d 0%, #2a2a2a 100%);
          border: 2px solid #c9a66b;
          box-shadow: 
            inset 0 0 20px rgba(255, 215, 0, 0.3),
            0 0 30px rgba(255, 215, 0, 0.2);
        }

        .center-node .node-core {
          background: linear-gradient(135deg, #5a5a5a 0%, #3d3d3d 100%);
          border-color: #e8c070;
          border-width: 4px;
          box-shadow: 
            inset 0 0 30px rgba(255, 215, 0, 0.5),
            0 0 50px rgba(255, 215, 0, 0.4);
        }

        .center-symbol {
          position: absolute;
          font-size: 24px;
          color: #ffd700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
          animation: centerPulse 2s ease-in-out infinite;
        }

        .node-title {
          position: absolute;
          top: 110%;
          left: 50%;
          transform: translateX(-50%);
          color: #ffd700;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
          white-space: nowrap;
          text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .node:hover .node-title {
          opacity: 1;
        }

        .active {
          transform: translate(-50%, -50%) scale(1.2) !important;
        }

        .active .node-core {
          box-shadow: 
            inset 0 0 30px rgba(255, 215, 0, 0.6),
            0 0 60px rgba(255, 215, 0, 0.8);
        }

        @keyframes nodeGlow {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.1); opacity: 0.6; }
        }

        @keyframes centerPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .info-panel {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(26, 26, 46, 0.95), transparent);
          backdrop-filter: blur(10px);
          padding: 40px 20px 20px;
          z-index: 50;
          animation: slideUp 0.5s ease-out;
        }

        .info-content {
          max-width: 800px;
          margin: 0 auto;
          color: white;
          text-align: center;
        }

        .info-content h2 {
          color: #ffd700;
          font-size: 2rem;
          margin-bottom: 1rem;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .info-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: #e2e8f0;
        }

        .close-btn {
          background: transparent;
          border: 2px solid #ffd700;
          color: #ffd700;
          padding: 10px 25px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(255, 215, 0, 0.1);
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Efectos de partículas de fondo */
        .skill-tree-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, rgba(255, 215, 0, 0.1), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255, 215, 0, 0.1), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255, 215, 0, 0.1), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255, 215, 0, 0.1), transparent);
          background-repeat: repeat;
          background-size: 200px 150px;
          animation: particleFloat 20s linear infinite;
          pointer-events: none;
        }

        @keyframes particleFloat {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-200px); }
        }

        .frostpunk-panel {
          background: rgba(10, 26, 47, 0.9);
          border: 2px solid #c9a66b;
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .frostpunk-header h2 {
          color: #e8c070;
          font-size: 1.5rem;
          letter-spacing: 1px;
        }

        .frostpunk-border {
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a66b, transparent);
          margin: 10px 0;
        }

        .frostpunk-button {
          background: transparent;
          border: 1px solid #e8c070;
          color: #e8c070;
          padding: 8px 25px;
          margin-top: 15px;
        }

        #tsparticles {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 0; /* Asegúrate que esté detrás de tu contenido */
        }
      `}</style>
    </div>
  );
};

export default SkillTree;