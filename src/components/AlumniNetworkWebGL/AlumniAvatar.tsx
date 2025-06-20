import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import type { AlumniMember } from './types';

interface AlumniAvatarProps {
  alumni: AlumniMember;
  position: [number, number, number];
  onClick: () => void;
  isHovered: boolean;
  onHover: () => void;
  onUnhover: () => void;
}

export const AlumniAvatar: React.FC<AlumniAvatarProps> = ({
  alumni,
  position,
  onClick,
  isHovered,
  onHover,
  onUnhover
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  
  // Load avatar texture
  React.useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      alumni.avatar,
      (loadedTexture) => {
        loadedTexture.wrapS = THREE.ClampToEdgeWrapping;
        loadedTexture.wrapT = THREE.ClampToEdgeWrapping;
        setTexture(loadedTexture);
      },
      undefined,
      () => {
        // Fallback to a colored circle if image fails to load
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = alumni.isActive ? '#00FF94' : '#FF69B4';
          ctx.fillRect(0, 0, 128, 128);
          const fallbackTexture = new THREE.CanvasTexture(canvas);
          setTexture(fallbackTexture);
        }
      }
    );
  }, [alumni.avatar, alumni.isActive]);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
      
      // Hover effects
      if (isHovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
    
    if (ringRef.current) {
      // Status ring rotation
      ringRef.current.rotation.z = state.clock.elapsedTime * 2;
      
      // Pulsing effect for active members
      if (alumni.isActive) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
        ringRef.current.scale.setScalar(scale);
      }
    }
  });
  
  return (
    <group position={position}>
      {/* Status Ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[1.8, 2.2, 6]} />
        <meshBasicMaterial
          color={alumni.isActive ? '#00FF94' : '#FF69B4'}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Avatar Circle */}
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerEnter={onHover}
        onPointerLeave={onUnhover}
      >
        <circleGeometry args={[1.5, 32]} />
        <meshBasicMaterial
          map={texture}
          transparent
          opacity={isHovered ? 1.2 : 1}
        />
      </mesh>
      
      {/* Hexagonal Border */}
      <mesh>
        <ringGeometry args={[1.6, 1.8, 6]} />
        <meshBasicMaterial
          color="#7B2FFE"
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Hover Card */}
      {isHovered && (
        <Html
          position={[0, 3, 0]}
          center
          style={{
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          <div className="bg-black/80 backdrop-blur-lg border border-white/20 rounded-lg p-4 min-w-[200px] transform -translate-x-1/2">
            <h3 className="text-white font-semibold text-sm">{alumni.name}</h3>
            <p className="text-[#7B2FFE] text-xs">{alumni.position}</p>
            <p className="text-white/70 text-xs">{alumni.company}</p>
            <div className="flex items-center gap-2 mt-2">
              <div 
                className={`w-2 h-2 rounded-full ${alumni.isActive ? 'bg-[#00FF94]' : 'bg-[#FF69B4]'}`}
              />
              <span className="text-xs text-white/60">
                {alumni.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </Html>
      )}
      
      {/* Ripple Effect on Hover */}
      {isHovered && (
        <mesh>
          <ringGeometry args={[2.5, 3, 32]} />
          <meshBasicMaterial
            color="#7B2FFE"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
};