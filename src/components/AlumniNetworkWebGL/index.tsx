import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Html, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { AlumniModal } from './AlumniModal';
import { ParticleSystem } from './ParticleSystem';
import { AlumniOrbit } from './AlumniOrbit';
import { CenterLogo } from './CenterLogo';
import { ConnectionLines } from './ConnectionLines';
import { LoadingSpinner } from './LoadingSpinner';
import { alumniData } from './data';
import type { AlumniMember } from './types';

interface AlumniNetworkWebGLProps {
  className?: string;
}

const CameraController = () => {
  const { camera, mouse } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useFrame(() => {
    // Smooth mouse tracking for parallax effect
    mouseRef.current.x = THREE.MathUtils.lerp(mouseRef.current.x, mouse.x * 0.1, 0.02);
    mouseRef.current.y = THREE.MathUtils.lerp(mouseRef.current.y, mouse.y * 0.1, 0.02);
    
    camera.position.x = mouseRef.current.x * 20;
    camera.position.y = mouseRef.current.y * 20;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const Scene = ({ 
  onAlumniClick, 
  hoveredAlumni, 
  setHoveredAlumni 
}: {
  onAlumniClick: (alumni: AlumniMember) => void;
  hoveredAlumni: string | null;
  setHoveredAlumni: (id: string | null) => void;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle breathing animation for the entire network
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Particle Background */}
      <ParticleSystem />
      
      {/* Center Logo */}
      <CenterLogo />
      
      {/* Alumni Orbits */}
      {[0, 1, 2].map((orbitIndex) => (
        <AlumniOrbit
          key={orbitIndex}
          orbitIndex={orbitIndex}
          alumni={alumniData.filter((_, i) => i % 3 === orbitIndex)}
          onAlumniClick={onAlumniClick}
          hoveredAlumni={hoveredAlumni}
          setHoveredAlumni={setHoveredAlumni}
        />
      ))}
      
      {/* Connection Lines */}
      <ConnectionLines alumni={alumniData} hoveredAlumni={hoveredAlumni} />
      
      {/* Camera Controller */}
      <CameraController />
    </group>
  );
};

export const AlumniNetworkWebGL: React.FC<AlumniNetworkWebGLProps> = ({ className = '' }) => {
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniMember | null>(null);
  const [hoveredAlumni, setHoveredAlumni] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAlumniClick = (alumni: AlumniMember) => {
    setSelectedAlumni(alumni);
  };

  const closeModal = () => {
    setSelectedAlumni(null);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`relative w-full h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F0F23] overflow-hidden ${className}`}>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-center"
      >
        <h1 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#7B2FFE] to-[#FF69B4] bg-clip-text text-transparent mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Alumni Connect 2.0
        </h1>
        <p 
          className="text-xl md:text-2xl text-white/80 mb-8"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Where our past fuels your future
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-[#7B2FFE] to-[#FF69B4] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Join the Network
        </motion.button>
      </motion.div>

      {/* WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <Scene 
            onAlumniClick={handleAlumniClick}
            hoveredAlumni={hoveredAlumni}
            setHoveredAlumni={setHoveredAlumni}
          />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#7B2FFE" />
          <pointLight position={[-10, -10, 10]} intensity={0.6} color="#FF69B4" />
          
          {/* Controls (disabled for custom camera controller) */}
          <OrbitControls enabled={false} />
        </Suspense>
      </Canvas>

      {/* Stats Panel */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-8 z-20"
      >
        <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">Network Stats</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/70">Total Alumni:</span>
              <span className="text-[#00FF94]">{alumniData.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Active Members:</span>
              <span className="text-[#00FF94]">{alumniData.filter(a => a.isActive).length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Companies:</span>
              <span className="text-[#FF69B4]">{new Set(alumniData.map(a => a.company)).size}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Controls Panel */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <div className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">Controls</h3>
          <div className="space-y-2 text-sm text-white/70">
            <div>• Hover: View alumni info</div>
            <div>• Click: Open detailed profile</div>
            <div>• Mouse: Parallax camera movement</div>
          </div>
        </div>
      </motion.div>

      {/* Alumni Modal */}
      <AnimatePresence>
        {selectedAlumni && (
          <AlumniModal alumni={selectedAlumni} onClose={closeModal} />
        )}
      </AnimatePresence>

      {/* Accessibility Notice */}
      {prefersReducedMotion && (
        <div className="absolute top-4 right-4 z-30 bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-3 text-yellow-200 text-sm">
          Reduced motion mode active
        </div>
      )}
    </div>
  );
};