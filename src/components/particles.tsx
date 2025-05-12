"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground({ height }: { height: number }) {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="w-full relative" style={{ height }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "0",
          },
          particles: {
            number: { value: 150 },
            color: { value: ["#FFD700", "#ffffff"] },
            links: {
              enable: true,
              color: "#FFD700",
              distance: 170,
              opacity: 0.5,
              width: 1.5,
            },
            move: { enable: true, speed: 0.8 },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.3,
                sync: false,
              },
            },
            size: {
              value: 2.5,
              random: { enable: true, minimumValue: 1 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false,
              },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
