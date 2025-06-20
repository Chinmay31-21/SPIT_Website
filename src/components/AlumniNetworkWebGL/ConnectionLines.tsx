import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { AlumniMember } from './types';

interface ConnectionLinesProps {
  alumni: AlumniMember[];
  hoveredAlumni: string | null;
}

export const ConnectionLines: React.FC<ConnectionLinesProps> = ({ alumni, hoveredAlumni }) => {
  const linesRef = useRef<THREE.Group>(null);
  
  const connections = useMemo(() => {
    const lines: Array<{
      start: THREE.Vector3;
      end: THREE.Vector3;
      opacity: number;
      color: string;
    }> = [];
    
    // Create connections between alumni in the same company or related fields
    for (let i = 0; i < alumni.length; i++) {
      for (let j = i + 1; j < alumni.length; j++) {
        const alumniA = alumni[i];
        const alumniB = alumni[j];
        
        // Connect if same company or related departments
        const shouldConnect = 
          alumniA.company === alumniB.company ||
          (alumniA.department === alumniB.department && Math.random() > 0.7) ||
          Math.random() > 0.9; // Random connections for network effect
        
        if (shouldConnect) {
          // Calculate positions based on orbit logic
          const orbitA = i % 3;
          const orbitB = j % 3;
          const radiusA = [15, 25, 35][orbitA];
          const radiusB = [15, 25, 35][orbitB];
          
          const angleA = (Math.floor(i / 3) / Math.ceil(alumni.length / 3)) * Math.PI * 2;
          const angleB = (Math.floor(j / 3) / Math.ceil(alumni.length / 3)) * Math.PI * 2;
          
          const startPos = new THREE.Vector3(
            Math.cos(angleA) * radiusA,
            Math.sin(angleA) * radiusA,
            0
          );
          
          const endPos = new THREE.Vector3(
            Math.cos(angleB) * radiusB,
            Math.sin(angleB) * radiusB,
            0
          );
          
          lines.push({
            start: startPos,
            end: endPos,
            opacity: alumniA.company === alumniB.company ? 0.6 : 0.3,
            color: alumniA.company === alumniB.company ? '#00FF94' : '#7B2FFE'
          });
        }
      }
    }
    
    return lines;
  }, [alumni]);
  
  useFrame((state) => {
    if (linesRef.current) {
      // Subtle animation for connection lines
      linesRef.current.children.forEach((line, index) => {
        const material = (line as THREE.Line).material as THREE.LineBasicMaterial;
        const baseOpacity = connections[index]?.opacity || 0.3;
        material.opacity = baseOpacity + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
      });
    }
  });
  
  return (
    <group ref={linesRef}>
      {connections.map((connection, index) => {
        // Create curved line using QuadraticBezierCurve3
        const midPoint = new THREE.Vector3()
          .addVectors(connection.start, connection.end)
          .multiplyScalar(0.5)
          .add(new THREE.Vector3(0, 0, Math.random() * 5 - 2.5)); // Random curve height
        
        const curve = new THREE.QuadraticBezierCurve3(
          connection.start,
          midPoint,
          connection.end
        );
        
        const points = curve.getPoints(20);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <line key={index} geometry={geometry}>
            <lineBasicMaterial
              color={connection.color}
              transparent
              opacity={hoveredAlumni ? 0.1 : connection.opacity}
              linewidth={2}
            />
          </line>
        );
      })}
    </group>
  );
};