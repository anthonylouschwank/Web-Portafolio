import { useState, useCallback } from 'react';
import { generateCameraPosition } from './skillTreeUtils';
import { animationConfig } from './SkillTreeData';

/**
 * Hook personalizado para manejar el estado del árbol de habilidades
 */
export const useSkillTree = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, scale: 1 });
  const [crackAnimation, setCrackAnimation] = useState(null);

  // Función para seleccionar un nodo
  const handleNodeClick = useCallback((node) => {
    setActiveNode(node);
    setCrackAnimation(node);
    setCameraPosition(generateCameraPosition(node));
    
    // Desactivar efectos después del tiempo configurado
    setTimeout(() => {
      setCrackAnimation(null);
    }, animationConfig.crackDuration);
  }, []);

  // Función para reiniciar la vista
  const resetView = useCallback(() => {
    setActiveNode(null);
    setCameraPosition({ x: 0, y: 0, scale: 1 });
    setCrackAnimation(null);
  }, []);

  // Función para cambiar el zoom
  const setZoom = useCallback((scale) => {
    setCameraPosition(prev => ({ ...prev, scale }));
  }, []);

  // Función para mover la cámara
  const moveCamera = useCallback((x, y) => {
    setCameraPosition(prev => ({ ...prev, x, y }));
  }, []);

  return {
    // Estado
    activeNode,
    cameraPosition,
    crackAnimation,
    
    // Acciones
    handleNodeClick,
    resetView,
    setZoom,
    moveCamera,
    
    // Setters directos (por si se necesitan)
    setActiveNode,
    setCameraPosition,
    setCrackAnimation
  };
};

/**
 * Hook para manejar interacciones del viewport
 */
export const useViewportInteractions = (cameraPosition, moveCamera, setZoom) => {
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePosition.x;
    const deltaY = e.clientY - lastMousePosition.y;

    moveCamera(
      cameraPosition.x + deltaX,
      cameraPosition.y + deltaY
    );

    setLastMousePosition({ x: e.clientX, y: e.clientY });
  }, [isDragging, lastMousePosition, cameraPosition, moveCamera]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.5, Math.min(3, cameraPosition.scale * zoomFactor));
    setZoom(newScale);
  }, [cameraPosition.scale, setZoom]);

  return {
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleWheel
  };
};