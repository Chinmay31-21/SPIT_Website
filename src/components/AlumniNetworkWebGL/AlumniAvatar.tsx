import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import type { AlumniMember } from './types';

interface AlumniAvatarProps {
  alumni: AlumniMember;
  position: [number, number, number];
  onClick: () => void;
  isHovered: boolean;
  onHover: () => void;
  onUnhover: () => void;
  index: number;
}

export const AlumniAvatar: React.FC<AlumniAvatarProps> = ({
  alumni,
  position,
  onClick,
  isHovered,
  onHover,
  onUnhover,
  index
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

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
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = alumni.isActive ? '#00FF94' : '#FF69B4';
          ctx.fillRect(0, 0, 128, 128);
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 48px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(alumni.name.charAt(0).toUpperCase(), 64, 64);
          const fallbackTexture = new THREE.CanvasTexture(canvas);
          setTexture(fallbackTexture);
        }
      }
    );
  }, [alumni.avatar, alumni.isActive]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
      meshRef.current.scale.setScalar(isHovered ? 1.2 : 1);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 2;
      if (alumni.isActive) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
        ringRef.current.scale.setScalar(scale);
      }
    }
  });

  return (
    <motion.group
      position={position}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
    >
      <mesh ref={ringRef}>
        <ringGeometry args={[1.8, 2.2, 6]} />
        <meshBasicMaterial
          color={alumni.isActive ? '#00FF94' : '#FF69B4'}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerEnter={onHover}
        onPointerLeave={onUnhover}
      >
        <circleGeometry args={[1.5, 32]} />
        <meshBasicMaterial
          map={texture || undefined}
          transparent
          opacity={isHovered ? 1.2 : 1}
        />
      </mesh>

      <mesh>
        <ringGeometry args={[1.6, 1.8, 6]} />
        <meshBasicMaterial
          color="#7B2FFE"
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {isHovered && (
        <Html position={[0, 3, 0]} center style={{ pointerEvents: 'none', userSelect: 'none' }}>
          <div className="bg-black/80 backdrop-blur-lg border border-white/20 rounded-lg p-4 min-w-[200px] transform -translate-x-1/2">
            <h3 className="text-white font-semibold text-sm">{alumni.name}</h3>
            <p className="text-[#7B2FFE] text-xs">{alumni.position}</p>
            <p className="text-white/70 text-xs">{alumni.company}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className={`w-2 h-2 rounded-full ${alumni.isActive ? 'bg-[#00FF94]' : 'bg-[#FF69B4]'}`} />
              <span className="text-xs text-white/60">
                {alumni.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </Html>
      )}

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
    </motion.group>
  );
};