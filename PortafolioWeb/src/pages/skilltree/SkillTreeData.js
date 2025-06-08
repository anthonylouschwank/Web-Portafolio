// Configuración de nodos del árbol de habilidades
export const skillTreeNodes = [
  {
    id: 'center',
    x: 0,
    y: 0,
    size: 80,
    title: 'Núcleo Principal',
    content: 'Este es el centro de todo el sistema. Aquí comienza tu viaje hacia el desarrollo de habilidades avanzadas.',
    isCenter: true,
    icon: '⚙️' // Icono de engranaje para el centro
  },
  // RAMA FRONTEND
  {
    id: 'node1',
    x: -300,
    y: -200,
    size: 60,
    title: 'Desarrollo Frontend',
    content: 'Especialización en tecnologías de frontend como React, Vue.js, y desarrollo de interfaces de usuario modernas.',
    connections: ['center'],
    icon: '🎨' // Icono de paleta de colores
  },
  {
    id: 'node1-1',
    x: -450,
    y: -300,
    size: 50,
    title: 'React Avanzado',
    content: 'Dominio completo de React, hooks, context, y patrones avanzados para aplicaciones escalables.',
    connections: ['node1'],
    icon: '⚛️' // Icono de React
  },
  {
    id: 'node1-2',
    x: -450,
    y: -100,
    size: 50,
    title: 'Html/CSS/JS',
    content: 'Fundamentos sólidos en HTML, CSS y JavaScript, incluyendo técnicas modernas de desarrollo web.',
    connections: ['node1'],
    icon: '✨' // Icono de diseño
  },
  // RAMA BACKEND
  {
    id: 'node2',
    x: 280,
    y: -150,
    size: 60,
    title: 'Backend & APIs',
    content: 'Dominio de tecnologías backend, bases de datos, y desarrollo de APIs escalables y seguras.',
    connections: ['center'],
    icon: '🖥️' // Icono de servidor
  },
  {
    id: 'node2-1',
    x: 430,
    y: -250,
    size: 50,
    title: 'Python & Node.js',
    content: 'Desarrollo de aplicaciones backend con Python y Node.js (Express).',
    connections: ['node2'],
    icon: '🐳' // Icono de Docker/containers
  },
  {
    id: 'node2-2',
    x: 430,
    y: -50,
    size: 50,
    title: 'Base de Datos',
    content: 'Diseño y optimización de bases de datos SQL y NoSQL para aplicaciones de alto rendimiento.',
    connections: ['node2'],
    icon: '🗄️' // Icono de base de datos
  },
  // RAMA DEVOPS
  {
    id: 'node3',
    x: -200,
    y: 250,
    size: 60,
    title: 'Desarrollo Movil',
    content: 'Desarrollo de aplicaciones móviles nativas y multiplataforma con tecnologías modernas.',
    connections: ['center'],
    icon: '☁️' // Icono de nube
  },
  {
    id: 'node3-1',
    x: -350,
    y: 350,
    size: 50,
    title: 'Kotlin/Swift',
    content: 'Desarrollo de aplicaciones móviles nativas con Kotlin para Android y Swift para iOS.',
    connections: ['node3'],
    icon: '🔄' // Icono de ciclo
  },
  // RAMA DATA SCIENCE
  {
    id: 'node4',
    x: 320,
    y: 220,
    size: 60,
    title: 'Data Science',
    content: 'Análisis de datos, machine learning y desarrollo de modelos predictivos para soluciones inteligentes.',
    connections: ['center'],
    icon: '📊' // Icono de gráfico
  },
  {
    id: 'node4-1',
    x: 470,
    y: 320,
    size: 50,
    title: 'Herramientas de Desarrollo',
    content: 'Uso de herramientas como Git y Docker para el desarrollo y despliegue de aplicaciones.',
    connections: ['node4'],
    icon: '📈' // Icono de robot/IAz
  },
  {
    id: 'node4-2',
    x: 170,
    y: 320,
    size: 50,
    title: 'Inteligencia Artificial',
    content: 'Implementación de modelos de machine learning y deep learning para resolver problemas complejos.',
    connections: ['node4'],
    icon: '🤖' // Icono de datos
  }
];

// Configuración de colores del tema
export const themeColors = {
  primary: '#ffd700',
  secondary: '#c9a66b',
  accent: '#e8c070',
  background: {
    primary: '#1a1a1a',
    secondary: '#2a2a2a'
  },
  node: {
    core: '#3d3d3d',
    border: '#c9a66b',
    center: '#5a5a5a'
  }
};

// Configuración de animaciones
export const animationConfig = {
  crackDuration: 3000,
  transitionDuration: 1000,
  nodeHoverScale: 1.1,
  activeNodeScale: 1.2
};