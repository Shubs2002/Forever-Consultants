"use client";

import { Canvas } from "@react-three/fiber";
import ParticleMorpher from "./ParticleMorpher";
import { useCallback } from "react";

interface SceneProps {
  currentSection: number;
  sectionProgress: number;
}

export default function Scene({ currentSection, sectionProgress }: SceneProps) {
  const onCreated = useCallback((state: any) => {
    const gl = state.gl;
    gl.setClearColor(0x000000, 0); // fully transparent
    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", (e: Event) => {
      e.preventDefault();
    });
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 50 }}
      dpr={[1, 2]}
      gl={{
        alpha: true,
        antialias: false,
        powerPreference: "default",
        failIfMajorPerformanceCaveat: false,
      }}
      onCreated={onCreated}
    >
      <ParticleMorpher
        currentSection={currentSection}
        sectionProgress={sectionProgress}
      />
    </Canvas>
  );
}
