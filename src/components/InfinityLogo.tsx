"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 2200;
const CURVE_SCALE = 2.6;
const SPREAD = 0.14;

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uScrollProgress;

  attribute float aPhase;
  attribute vec3 aRandOffset;
  attribute float aSize;
  attribute float aSpeed;

  varying float vPhase;
  varying float vAlpha;

  void main() {
    float t = aPhase + uTime * aSpeed;

    float sinT = sin(t);
    float cosT = cos(t);
    float denom = 1.0 + sinT * sinT;
    float x = ${CURVE_SCALE.toFixed(1)} * cosT / denom;
    float y = ${CURVE_SCALE.toFixed(1)} * sinT * cosT / denom;
    float z = 0.0;

    vec3 pos = vec3(x, y, z) + aRandOffset;
    vPhase = mod(t, 6.28318) / 6.28318;

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);

    gl_PointSize = aSize * uPixelRatio * (70.0 / -mvPos.z);
    gl_Position = projectionMatrix * mvPos;

    vAlpha = smoothstep(16.0, 4.0, -mvPos.z);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorBlue;
  uniform vec3 uColorGlow;
  uniform float uTime;

  varying float vPhase;
  varying float vAlpha;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    alpha = pow(alpha, 1.8);

    // Gradient: electric blue to glowing blue
    vec3 color = mix(uColorBlue, uColorGlow, smoothstep(0.2, 0.8, vPhase));

    float pulse = 0.9 + 0.1 * sin(uTime * 1.2 + vPhase * 6.28318);

    gl_FragColor = vec4(color * pulse, alpha * vAlpha * 0.85);
  }
`;

interface InfinityLogoProps {
  scrollProgress?: number;
}

export default function InfinityLogo({ scrollProgress = 0 }: InfinityLogoProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { geometry, uniforms } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const phases = new Float32Array(PARTICLE_COUNT);
    const randOffsets = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = (i / PARTICLE_COUNT) * Math.PI * 2;
      const sinT = Math.sin(t);
      const cosT = Math.cos(t);
      const denom = 1 + sinT * sinT;

      positions[i * 3] = (CURVE_SCALE * cosT) / denom;
      positions[i * 3 + 1] = (CURVE_SCALE * sinT * cosT) / denom;
      positions[i * 3 + 2] = 0;

      phases[i] = t;

      const rx = (Math.random() + Math.random() - 1) * SPREAD;
      const ry = (Math.random() + Math.random() - 1) * SPREAD;
      const rz = (Math.random() + Math.random() - 1) * SPREAD * 0.4;
      randOffsets[i * 3] = rx;
      randOffsets[i * 3 + 1] = ry;
      randOffsets[i * 3 + 2] = rz;

      sizes[i] = Math.random() * 1.8 + 0.4;
      speeds[i] = 0.06 + Math.random() * 0.1;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    geo.setAttribute("aRandOffset", new THREE.BufferAttribute(randOffsets, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));

    const u = {
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uScrollProgress: { value: 0 },
      uColorBlue: { value: new THREE.Color("#3B82F6") },
      uColorGlow: { value: new THREE.Color("#93C5FD") },
    };

    return { geometry: geo, uniforms: u };
  }, []);

  useFrame((_state, delta) => {
    uniforms.uTime.value += delta;
    uniforms.uScrollProgress.value = scrollProgress;

    if (groupRef.current) {
      // Static at hero (scrollProgress = 0), only rotate when scrolling
      if (scrollProgress > 0.01) {
        const targetRotY = scrollProgress * Math.PI * 2;
        const targetRotX = Math.sin(scrollProgress * Math.PI) * 0.3;
        groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
        groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
      } else {
        // Smoothly return to static position
        groupRef.current.rotation.y *= 0.95;
        groupRef.current.rotation.x *= 0.95;
        groupRef.current.rotation.z *= 0.95;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={geometry}>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
