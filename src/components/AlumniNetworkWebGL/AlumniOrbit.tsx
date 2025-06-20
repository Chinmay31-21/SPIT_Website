import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { AlumniAvatar } from './AlumniAvatar';
import type { AlumniMember } from './types';

interface AlumniOrbitProps {
  orbitIndex: number;
  alumni: AlumniMember[];
  onAlumniClick: (alumni: AlumniMember) => void;
  hoveredAlumni: string | null;
  setHoveredAlumni: (id: string | null) => void;
}

const orbitConfigs = [
  { radius: 15, speed: 0.3, direction: 1 },
  { radius: 25, speed: 0.2, direction: -1 },
  { radius: 35, speed: 0.15, direction: 1 }
];

export const AlumniOrbit: React.FC<AlumniOrbitProps> = ({
  orbitIndex,
  alumni,
  onAlumniClick,
  hoveredAlumni,
  setHoveredAlumni
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const config = orbitConfigs[orbitIndex];
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * config.speed * config.direction;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Orbit Ring Visualization */}
      <mesh>
        <ringGeometry args={[config.radius - 0.1, config.radius + 0.1, 64]} />
        <meshBasicMaterial
          color="#7B2FFE"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Alumni Avatars */}
      {alumni.map((member, index) => {
        const angle = (index / alumni.length) * Math.PI * 2;
        const x = Math.cos(angle) * config.radius;
        const y = Math.sin(angle) * config.radius;
        
        return (
          <AlumniAvatar
            key={member.id}
            alumni={member}
            position={[x, y, 0]}
            onClick={() => onAlumniClick(member)}
            isHovered={hoveredAlumni === member.id}
            onHover={() => setHoveredAlumni(member.id)}
            onUnhover={() => setHoveredAlumni(null)}
          />
        );
      })}
    </group>
  );
};