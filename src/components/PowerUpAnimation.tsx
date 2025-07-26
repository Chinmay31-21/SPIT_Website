import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

type AnimationStage = 'initial' | 'loading' | 'complete';

// --- Colorful Fluid Animation Component (Keep As Is) ---
const ColorfulFluidAnimation: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const animationRef = React.useRef<number>();
  const fluidPointsRef = React.useRef<any[]>([]);
  const mouseRef = React.useRef({ x: 0, y: 0, down: false });
  const colorPalette = [
    { h: 200, s: 100, l: 60 }, // Neon Blue
  { h: 170, s: 100, l: 55 }, // Electric Cyan
  { h: 280, s: 90, l: 65 },  // Futuristic Purple
  { h: 320, s: 95, l: 60 },  // Neon Magenta
  { h: 45,  s: 100, l: 60 }, // Gold/Yellow
  { h: 160, s: 95, l: 55 },  // Aqua Green
  { h: 220, s: 100, l: 70 }, // Light Blue
  { h: 30,  s: 100, l: 60 }, // Orange/Amber
  ];
  const maxPoints = 120;
  const timeRef = React.useRef(0);

  const addFluidPoint = (x: number, y: number, forceColor?: { h: number; s: number; l: number }) => {
    const baseColor = forceColor || colorPalette[Math.floor(Math.random() * colorPalette.length)];
    const hueVariation = (Math.random() - 0.5) * 60;
    fluidPointsRef.current.push({
      x, y,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      size: Math.random() * 60 + 30,
      color: `hsl(${baseColor.h + hueVariation}, ${baseColor.s}%, ${baseColor.l}%)`,
      life: 1.0,
      decay: 0.002 + Math.random() * 0.005,
      density: Math.random() * 0.9 + 0.1,
      hue: baseColor.h + hueVariation,
      saturation: baseColor.s,
      lightness: baseColor.l
    });
    if (fluidPointsRef.current.length > maxPoints) fluidPointsRef.current.shift();
  };

  const updateCursor = (x: number, y: number) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = x - 20 + 'px';
      cursorRef.current.style.top = y - 20 + 'px';
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    timeRef.current += 0.02;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = fluidPointsRef.current.length - 1; i >= 0; i--) {
      const point = fluidPointsRef.current[i];
      const turbulence = Math.sin(timeRef.current + point.x * 0.01) * 0.5;
      point.x += point.vx + turbulence;
      point.y += point.vy + Math.sin(timeRef.current + point.y * 0.01) * 0.3;
      point.vx *= 0.98;
      point.vy *= 0.98;
      point.vy += 0.01;
      point.vx += Math.sin(timeRef.current * 0.5 + point.y * 0.005) * 0.1;
      point.hue += Math.sin(timeRef.current + point.x * 0.001) * 0.5;
      point.lightness = Math.max(30, Math.min(80, point.lightness + Math.sin(timeRef.current * 2) * 0.5));
      point.life -= point.decay;
      point.size *= 0.999;
      if (point.life <= 0 || point.size <= 10) {
        fluidPointsRef.current.splice(i, 1);
        continue;
      }
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, point.size
      );
      const alpha = point.life * point.density;
      const centerColor = `hsla(${point.hue}, ${point.saturation}%, ${point.lightness}%, ${alpha * 0.8})`;
      const midColor = `hsla(${point.hue + 20}, ${point.saturation}%, ${point.lightness - 15}%, ${alpha * 0.4})`;
      const outerColor = `hsla(${point.hue + 40}, ${point.saturation}%, ${point.lightness - 30}%, 0)`;
      gradient.addColorStop(0, centerColor);
      gradient.addColorStop(0.4, midColor);
      gradient.addColorStop(1, outerColor);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = 'screen';
    for (let i = 0; i < fluidPointsRef.current.length; i++) {
      for (let j = i + 1; j < fluidPointsRef.current.length; j++) {
        const p1 = fluidPointsRef.current[i];
        const p2 = fluidPointsRef.current[j];
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        if (distance < 120) {
          const blendStrength = (120 - distance) / 120;
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          const blendSize = (p1.size + p2.size) / 2 * blendStrength;
          const avgHue = (p1.hue + p2.hue) / 2;
          const avgSat = (p1.saturation + p2.saturation) / 2;
          const avgLight = (p1.lightness + p2.lightness) / 2;
          const blendGradient = ctx.createRadialGradient(
            midX, midY, 0,
            midX, midY, blendSize
          );
          const blendAlpha = blendStrength * 0.3;
          blendGradient.addColorStop(0, `hsla(${avgHue}, ${avgSat}%, ${avgLight}%, ${blendAlpha})`);
          blendGradient.addColorStop(0.6, `hsla(${avgHue + 30}, ${avgSat}%, ${avgLight - 20}%, ${blendAlpha * 0.5})`);
          blendGradient.addColorStop(1, `hsla(${avgHue + 60}, ${avgSat}%, ${avgLight - 40}%, 0)`);
          ctx.fillStyle = blendGradient;
          ctx.beginPath();
          ctx.arc(midX, midY, blendSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.globalCompositeOperation = 'source-over';
    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    updateCursor(x, y);
    if (mouseRef.current.down) addFluidPoint(x, y);
  };
  const handleMouseDown = (e: MouseEvent) => {
    mouseRef.current.down = true;
    if (cursorRef.current) cursorRef.current.style.transform = 'scale(2)';
    addFluidPoint(e.clientX, e.clientY);
  };
  const handleMouseUp = () => {
    mouseRef.current.down = false;
    if (cursorRef.current) cursorRef.current.style.transform = 'scale(1)';
  };
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    updateCursor(x, y);
    if (mouseRef.current.down) addFluidPoint(x, y);
  };
  const handleTouchStart = (e: TouchEvent) => {
    mouseRef.current.down = true;
    const touch = e.touches[0];
    addFluidPoint(touch.clientX, touch.clientY);
  };
  const handleTouchEnd = () => {
    mouseRef.current.down = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);
  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{ filter: 'blur(1px) saturate(1.2)' }}
      />
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out"
        style={{
          background: 'conic-gradient(from 0deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607, #ff006e)',
          filter: 'blur(1px)',
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
};
// --- End Colorful Fluid Animation ---

export const PowerUpAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<AnimationStage>('initial');
  const [loading, setLoading] = useState(0);

  // Effect to handle loading progress
  useEffect(() => {
    if (stage === 'loading') {
      const interval = setInterval(() => {
        setLoading(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 30); // 3 seconds to load
      return () => clearInterval(interval);
    }
  }, [stage]);

  // Effect to handle completion
  useEffect(() => {
    if (loading === 100) {
      setTimeout(() => {
        setStage('complete');
        // Wait for exit animation before calling onComplete
        setTimeout(onComplete, 500);
      }, 500);
    }
  }, [loading, onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {stage === 'initial' && (
          <motion.div
            key="initial"
            className="w-full h-full flex flex-col items-center justify-center"
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
          >
            <ColorfulFluidAnimation />
            <div className="relative z-10 flex flex-col items-center">
              <motion.button
                className="w-40 h-40 rounded-full backdrop-blur-md bg-white/5 border border-[#00BFFF] shadow-[0_0_20px_rgba(0,191,255,0.3)] relative overflow-hidden group animate-pulse"
                onClick={() => setStage('loading')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-16 h-16 text-[#00BFFF] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-[#FFD700] transition-colors duration-300" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/20 to-transparent"
                  animate={{ x: ['0%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </motion.button>
              <p className="text-center mt-6 text-lg font-medium text-white/80 tracking-wide">
                Click to Power Up the <span className="text-[#00BFFF] font-semibold">SPIT Network ⚡</span>
              </p>
            </div>
          </motion.div>
        )}

        {stage === 'loading' && (
          <motion.div
            key="loading"
            className="flex flex-col items-center justify-center text-center font-sans"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="relative w-48 h-48">
              {/* Circular Progress Bar */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="4"
                />
                {/* Progress Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: loading / 100 }}
                  transition={{ duration: 0.5, ease: 'linear' }}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00BFFF" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Logo */}
              <motion.img
                src="/assets/SPIT_Logo.png"
                alt="SPIT Logo"
                className="w-full h-full p-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.5 } }}
              />
            </div>
            <motion.h1
              className="text-2xl font-semibold mt-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
            >
              Initializing Network...
            </motion.h1>
            <motion.p
              className="text-white/70 mt-2 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}
            >
              {Math.round(loading)}%
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};