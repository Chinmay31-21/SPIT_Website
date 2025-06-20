import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ParticleSystem: React.FC = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  const particlesCount = 1000;
  
  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount; i++) {
      // Random positions in a sphere
      const radius = Math.random() * 100 + 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random colors between purple and pink
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        // Purple tones
        colors[i * 3] = 0.48; // R
        colors[i * 3 + 1] = 0.18; // G
        colors[i * 3 + 2] = 1.0; // B
      } else {
        // Pink tones
        colors[i * 3] = 1.0; // R
        colors[i * 3 + 1] = 0.41; // G
        colors[i * 3 + 2] = 0.71; // B
      }
      
      // Random sizes
      sizes[i] = Math.random() * 2 + 0.5;
    }
    
    return { positions, colors, sizes };
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particlesCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};