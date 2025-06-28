import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground = ({ className = "" }: ParticleBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // Optional callback for when particles are loaded
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className={className}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: ["#16a34a", "#22c55e", "#4ade80"],
          },
          links: {
            color: "#16a34a",
            distance: 130,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 50,
          },
          opacity: {
            value: 0.4,
            random: {
              enable: true,
              minimumValue: 0.2,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
