
/**
 * Componente para los controles del árbol
 */
export const SkillTreeControls = ({ onResetView, onZoomIn, onZoomOut }) => (
  <div className="controls">
    <button onClick={onResetView} className="reset-btn">
      Reiniciar Vista
    </button>
    {onZoomIn && onZoomOut && (
      <div className="zoom-controls">
        <button onClick={onZoomIn} className="zoom-btn">+</button>
        <button onClick={onZoomOut} className="zoom-btn">-</button>
      </div>
    )}
  </div>
);

/**
 * Componente para las definiciones SVG reutilizables
 */
export const SVGDefinitions = () => (
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
);

/**
 * Componente para las conexiones entre nodos
 */
export const NodeConnections = ({ nodes, generateConnection }) => (
  <>
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
  </>
);

/**
 * Componente para las animaciones de grietas
 */
export const CrackAnimations = ({ crackAnimation, generateCracks }) => {
  if (!crackAnimation) return null;

  return (
    <>
      {/* Grietas */}
      {generateCracks(crackAnimation).map(crack => (
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

      {/* Onda de expansión */}
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
    </>
  );
};

/**
 * Componente para un nodo individual
 */
export const SkillNode = ({ node, isActive, onClick }) => (
  <div
    className={`node ${node.isCenter ? 'center-node' : ''} ${isActive ? 'active' : ''}`}
    style={{
      left: `${node.x}px`,
      top: `${node.y}px`,
      width: `${node.size}px`,
      height: `${node.size}px`,
    }}
    onClick={() => onClick(node)}
  >
    <div className="node-inner">
      <div className="node-glow"></div>
      <div className="node-core"></div>
      {node.isCenter && <div className="center-symbol">⚡</div>}
    </div>
    <div className="node-title">{node.title}</div>
  </div>
);

/**
 * Componente para el panel de información estilo Frostpunk
 */
export const FrostpunkPanel = ({ activeNode, onClose }) => {
  if (!activeNode) return null;

  return (
    <div className="frostpunk-panel">
      <div className="frostpunk-header">
        <h2>DECISIÓN: {activeNode.title.toUpperCase()}</h2>
        <div className="frostpunk-border"></div>
      </div>
      <p className="frostpunk-content">{activeNode.content}</p>
      <div className="frostpunk-actions">
        <button className="frostpunk-button" onClick={onClose}>
          RATIFICAR
        </button>
        {activeNode.actions && activeNode.actions.map((action, index) => (
          <button 
            key={index}
            className="frostpunk-button secondary" 
            onClick={action.handler}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

/**
 * Componente para mostrar información de debug (opcional)
 */
export const DebugInfo = ({ cameraPosition, activeNode, show = false }) => {
  if (!show) return null;

  return (
    <div className="debug-info">
      <h4>Debug Info:</h4>
      <p>Camera: x:{cameraPosition.x.toFixed(2)}, y:{cameraPosition.y.toFixed(2)}, scale:{cameraPosition.scale.toFixed(2)}</p>
      <p>Active Node: {activeNode ? activeNode.id : 'None'}</p>
    </div>
  );
};