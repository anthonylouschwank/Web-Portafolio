// Utilidades para el árbol de habilidades

/**
 * Genera un path SVG para conexión orgánica entre dos nodos
 */
export const generateConnection = (fromNode, toNode) => {
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

/**
 * Genera grietas aleatorias desde un nodo central
 */
export const generateCracks = (centerNode) => {
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

/**
 * Encuentra un nodo por su ID
 */
export const findNodeById = (nodes, id) => {
  return nodes.find(node => node.id === id);
};

/**
 * Calcula la distancia entre dos puntos
 */
export const calculateDistance = (point1, point2) => {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;
  return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Genera una posición de cámara centrada en un nodo
 */
export const generateCameraPosition = (node, scale = 1.5) => {
  return {
    x: -node.x,
    y: -node.y,
    scale: scale
  };
};

/**
 * Valida si un nodo tiene todas las propiedades requeridas
 */
export const validateNode = (node) => {
  const requiredProps = ['id', 'x', 'y', 'size', 'title', 'content'];
  return requiredProps.every(prop => node.hasOwnProperty(prop));
};

/**
 * Obtiene todos los nodos conectados a un nodo específico
 */
export const getConnectedNodes = (nodes, nodeId) => {
  const targetNode = findNodeById(nodes, nodeId);
  if (!targetNode || !targetNode.connections) return [];
  
  return targetNode.connections
    .map(connectionId => findNodeById(nodes, connectionId))
    .filter(Boolean);
};