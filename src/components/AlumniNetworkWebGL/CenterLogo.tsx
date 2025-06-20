import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const CenterLogo: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
    
    if (ringRef.current) {
      // Pulsing neon ring
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      ringRef.current.scale.setScalar(scale);
      
      // Rotation
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
    
    if (innerRingRef.current) {
      // Counter-rotation for inner ring
      innerRingRef.current.rotation.z = -state.clock.elapsedTime * 0.3;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Outer Neon Ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[4.5, 5.5, 32]} />
        <meshBasicMaterial
          color="#7B2FFE"
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Inner Ring */}
      <mesh ref={innerRingRef}>
        <ringGeometry args={[3.8, 4.2, 24]} />
        <meshBasicMaterial
          color="#FF69B4"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Center Circle */}
      <mesh>
        <circleGeometry args={[3.5, 32]} />
        <meshBasicMaterial
          color="#2E1250"
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* SPIT Logo Text */}
      <Text
        position={[0, 0.5, 0.1]}
        fontSize={1.2}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/SpaceGrotesk-Bold.woff"
        fontWeight="bold"
      >
        SPIT
      </Text>
      
      {/* Subtitle */}
      <Text
        position={[0, -0.8, 0.1]}
        fontSize={0.4}
        color="#7B2FFE"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Regular.woff"
      >
        Alumni Network
      </Text>
      
      {/* Glowing effect */}
      <mesh>
        <circleGeometry args={[6, 32]} />
        <meshBasicMaterial
          color="#7B2FFE"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};