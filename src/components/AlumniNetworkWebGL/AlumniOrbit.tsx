import React, { useRef, useMemo } from 'react';
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

  const positions = useMemo(() => {
    return alumni.map((_, index) => {
      const angle = (index / alumni.length) * Math.PI * 2;
      return [
        Math.cos(angle) * config.radius,
        Math.sin(angle) * config.radius,
        0
      ] as [number, number, number];
    });
  }, [alumni, config.radius]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * config.speed * config.direction;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <ringGeometry args={[config.radius - 0.1, config.radius + 0.1, 64]} />
        <meshBasicMaterial
          color="#7B2FFE"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {alumni.map((member, index) => (
        <AlumniAvatar
          key={member.id}
          alumni={member}
          position={positions[index]}
          index={index}
          onClick={() => onAlumniClick(member)}
          isHovered={hoveredAlumni === member.id}
          onHover={() => setHoveredAlumni(member.id)}
          onUnhover={() => setHoveredAlumni(null)}
        />
      ))}
    </group>
  );
};
