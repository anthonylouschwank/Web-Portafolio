import React from 'react';
import { useState } from 'react';
import './SkillTree.css';
import { skillTreeNodes, animationConfig } from './SkillTreeData';

const SkillTree = ({ onNavigateHome }) => {
  const [activeNode, setActiveNode] = useState(null);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, scale: 1 });
  const [crackAnimation, setCrackAnimation] = useState(null);

  // Usar configuración externa
  const nodes = skillTreeNodes;

  // Función para calcular la posición del panel
  const calculatePanelPosition = (node) => {
    if (!node) return { left: '50%', top: '50%' };
    
    const nodeScreenX = window.innerWidth / 2 + (node.x * cameraPosition.scale) + cameraPosition.x;
    const nodeScreenY = window.innerHeight / 2 + (node.y * cameraPosition.scale) + cameraPosition.y;
    
    // Ajustar posición para que aparezca más arriba del nodo
    let panelX = nodeScreenX;
    let panelY = nodeScreenY - 250; // Aumentamos el offset hacia arriba
    
    // Límites de pantalla (considerando el ancho del panel ~320px)
    const panelWidth = 320;
    const panelHeight = 200;
    
    if (panelX - panelWidth/2 < 20) panelX = panelWidth/2 + 20;
    if (panelX + panelWidth/2 > window.innerWidth - 20) panelX = window.innerWidth - panelWidth/2 - 20;
    if (panelY < 20) panelY = nodeScreenY + 100; // Si no cabe arriba, ponerlo más abajo del nodo
    if (panelY + panelHeight > window.innerHeight - 20) panelY = window.innerHeight - panelHeight - 20;
    
    return {
      left: `${panelX}px`,
      top: `${panelY}px`
    };
  };

  // Al hacer clic en un nodo
  const handleNodeClick = (node) => {
    setActiveNode(node);
    setCrackAnimation(node);

    setCameraPosition({
      x: -node.x,
      y: -node.y,
      scale: 1.5
    });
    
    // Desactivar efectos después del tiempo configurado
    setTimeout(() => {
      setCrackAnimation(null);
    }, animationConfig.crackDuration);
  };

  const resetView = () => {
    setActiveNode(null);
    setCameraPosition({ x: 0, y: 0, scale: 1 });
    setCrackAnimation(null);
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

  // Generar grietas desde el nodo seleccionado
  const generateCracks = (centerNode) => {
    if (!centerNode) return [];
    
    const cracks = [];
    const numCracks = 6;
    
    for (let i = 0; i < numCracks; i++) {
      const angle = (i / numCracks) * Math.PI * 2;
      const length = 150 + Math.random() * 100;
      
      // Crear grieta con múltiples segmentos para efecto orgánico
      let path = `M ${centerNode.x} ${centerNode.y}`;
      const segments = 5;
      
      for (let j = 1; j <= segments; j++) {
        const progress = j / segments;
        const x = centerNode.x + Math.cos(angle) * length * progress;
        const y = centerNode.y + Math.sin(angle) * length * progress;
        
        // Añadir variación aleatoria
        const offsetX = (Math.random() - 0.5) * 20 * progress;
        const offsetY = (Math.random() - 0.5) * 20 * progress;
        
        path += ` L ${x + offsetX} ${y + offsetY}`;
      }
      
      cracks.push({
        id: i,
        path: path,
        delay: i * 0.1
      });
    }
    
    return cracks;
  };

  return (
    <div className="skill-tree-container">
      {/* Controles */}
      <div className="controls">
        <button onClick={onNavigateHome} className="frostpunk-control-btn">
          <div className="btn-lines">
            <div className="line line-top"></div>
            <div className="line line-bottom"></div>
          </div>
          <span className="btn-text">VOLVER AL MENÚ</span>
          <div className="btn-glow"></div>
        </button>
        
        <button onClick={resetView} className="frostpunk-control-btn">
          <div className="btn-lines">
            <div className="line line-top"></div>
            <div className="line line-bottom"></div>
          </div>
          <span className="btn-text">REINICIAR VISTA</span>
          <div className="btn-glow"></div>
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
          {/* SVG para las conexiones y grietas */}
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
              <linearGradient id="crackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c9a66b" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#e8c070" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#b8956a" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            
            {/* Conexiones normales */}
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

            {/* Animación de grietas */}
            {crackAnimation && generateCracks(crackAnimation).map(crack => (
              <path
                key={`crack-${crack.id}`}
                d={crack.path}
                stroke="url(#crackGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                className="crack-path"
                style={{
                  animationDelay: `${crack.delay}s`
                }}
              />
            ))}

            {/* Onda de expansión desde el nodo */}
            {crackAnimation && (
              <circle
                cx={crackAnimation.x}
                cy={crackAnimation.y}
                r="50"
                fill="none"
                stroke="#e8c070"
                strokeWidth="2"
                opacity="0.6"
                className="expansion-wave"
              />
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
                {node.icon && (
                  <div className={`node-icon ${node.isCenter ? 'center-icon' : ''}`}>
                    {node.icon}
                  </div>
                )}
              </div>
              <div className="node-title">{node.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Panel de información posicionado sobre el nodo */}
      {activeNode && (
        <div 
          className="frostpunk-panel"
          style={calculatePanelPosition(activeNode)}
        >
          <div className="frostpunk-header">
            <h2>DECISIÓN: {activeNode.title.toUpperCase()}</h2>
            <div className="frostpunk-border"></div>
          </div>
          <p className="frostpunk-content">{activeNode.content}</p>
          <div className="frostpunk-actions">
            <button 
              className="frostpunk-button" 
              onClick={resetView}
            >
              RATIFICAR
            </button>
            <button 
              className="frostpunk-button secondary" 
              onClick={resetView}
            >
              CANCELAR
            </button>
          </div>
          
          {/* Flecha apuntando al nodo */}
          <div className="frostpunk-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default SkillTree;