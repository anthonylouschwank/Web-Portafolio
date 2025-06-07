// src/components/MenuBackground.jsx
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const MenuBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 80,
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
          enable: true,
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
        speed: { min: 1, max: 3 },
        direction: "bottom",
        outModes: "out",
        random: true,
        straight: false
      }
    }
  };

  return (
    <Particles
      id="menu-particles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default MenuBackground;