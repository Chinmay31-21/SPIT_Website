import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

type AnimationStage = 'initial' | 'journey' | 'landing' | 'logo' | 'loading' | 'complete';

export const PowerUpAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<AnimationStage>('initial');
  const [loading, setLoading] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showSpark, setShowSpark] = useState(false);

  useEffect(() => {
    const stageTimings: { [key in AnimationStage]?: number } = {
      journey: 3000,
      landing: 2000,
      logo: 1500,
      loading: 3000
    };

    if (isButtonClicked && stage !== 'complete') {
      const nextStage: { [key in AnimationStage]: AnimationStage } = {
        initial: 'journey',
        journey: 'landing',
        landing: 'logo',
        logo: 'loading',
        loading: 'complete',
        complete: 'complete'
      };

      const timer = setTimeout(() => {
        setStage(nextStage[stage]);
      }, stageTimings[stage]);

      return () => clearTimeout(timer);
    }
  }, [stage, isButtonClicked]);

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
      }, 30);
      return () => clearInterval(interval);
    }
  }, [stage]);

  useEffect(() => {
    if (loading === 100) {
      setTimeout(() => {
        setStage('complete');
        setTimeout(onComplete, 1000);
      }, 500);
    }
  }, [loading, onComplete]);

  const handlePowerButtonClick = () => {
    setIsButtonClicked(true);
    setShowSpark(true);
    setStage('journey');
    setTimeout(() => setShowSpark(false), 2000);
  };

  // --- Fluid Drag Feature Integration ---
  interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    life: number;
    decay: number;
  }
  interface Mouse {
    x: number;
    y: number;
    down: boolean;
  }
  const colors = [
    '#ff006e', '#8338ec', '#3a86ff', '#06ffa5',
    '#ffbe0b', '#fb5607', '#ff006e', '#8338ec'
  ];
  const maxPoints = 50;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<Mouse>({ x: 0, y: 0, down: false });

  const createParticle = (x: number, y: number, color?: string) => {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      width: ${Math.random() * 10 + 5}px;
      height: ${Math.random() * 10 + 5}px;
      border-radius: 50%;
      background: ${color || colors[Math.floor(Math.random() * colors.length)]};
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      z-index: 1000;
      animation: particleFloat 2s ease-out forwards;
      animation-delay: ${Math.random() * 0.5}s;
    `;
    document.body.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    }, 2500);
  };
  const addPoint = (x: number, y: number) => {
    const point: Point = {
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 30 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1.0,
      decay: 0.005 + Math.random() * 0.01
    };
    pointsRef.current.push(point);
    if (pointsRef.current.length > maxPoints) {
      pointsRef.current.shift();
    }
  };
  const updateCursor = (x: number, y: number) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = x - 10 + 'px';
      cursorRef.current.style.top = y - 10 + 'px';
    }
  };
  const animateFluid = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = pointsRef.current.length - 1; i >= 0; i--) {
      const point = pointsRef.current[i];
      point.x += point.vx;
      point.y += point.vy;
      point.vx *= 0.98;
      point.vy *= 0.98;
      point.life -= point.decay;
      point.size *= 0.995;
      if (point.life <= 0 || point.size <= 1) {
        pointsRef.current.splice(i, 1);
        continue;
      }
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, point.size
      );
      gradient.addColorStop(0, point.color + Math.floor(point.life * 255).toString(16).padStart(2, '0'));
      gradient.addColorStop(1, point.color + '00');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < pointsRef.current.length; i++) {
      for (let j = i + 1; j < pointsRef.current.length; j++) {
        const p1 = pointsRef.current[i];
        const p2 = pointsRef.current[j];
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        if (distance < 150) {
          const opacity = (150 - distance) / 150 * 0.5;
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    animationRef.current = requestAnimationFrame(animateFluid);
  };
  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    updateCursor(x, y);
    if (mouseRef.current.down) {
      addPoint(x, y);
      if (Math.random() < 0.3) {
        createParticle(x, y);
      }
    }
  };
  const handleMouseDown = (e: MouseEvent) => {
    mouseRef.current.down = true;
    if (cursorRef.current) {
      cursorRef.current.style.transform = 'scale(1.5)';
    }
    addPoint(e.clientX, e.clientY);
  };
  const handleMouseUp = () => {
    mouseRef.current.down = false;
    if (cursorRef.current) {
      cursorRef.current.style.transform = 'scale(1)';
    }
  };
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    updateCursor(x, y);
    if (mouseRef.current.down) {
      addPoint(x, y);
      if (Math.random() < 0.3) {
        createParticle(x, y);
      }
    }
  };
  const handleTouchStart = (e: TouchEvent) => {
    mouseRef.current.down = true;
    const touch = e.touches[0];
    addPoint(touch.clientX, touch.clientY);
  };
  const handleTouchEnd = () => {
    mouseRef.current.down = false;
  };
  // Only enable drag listeners while on initial stage
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Only add drag listeners if stage is 'initial'
    if (stage === 'initial') {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    animateFluid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      // Remove drag listeners only if stage was 'initial'
      if (stage === 'initial') {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      }
      if (style.parentNode) {
        document.head.removeChild(style);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stage]);
  // --- End Fluid Drag Feature Integration ---

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Fluid Drag Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
          style={{
            width: '100vw',
            height: '100vh',
            opacity: stage === 'initial' ? 1 : 0,
            transition: 'opacity 0.5s'
          }}
        />
        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className="fixed w-5 h-5 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)',
            mixBlendMode: 'difference',
            opacity: stage === 'initial' ? 1 : 0,
            transition: 'opacity 0.5s'
          }}
        />
        {/* ⚡ Spark Overlay */}
        <AnimatePresence>
  {showSpark && (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 z-[9999] flex items-center justify-center">
        <img
          src="/assets/spark.gif"
          alt="Spark Effect"
          className="w-full h-full object-cover mix-blend-screen opacity-90 animate-fade"
        />
      </div>
    </motion.div>
  )}
</AnimatePresence>

        {/* Power Button */}
        {stage === 'initial' && (
          <div className="relative z-10 flex flex-col items-center">
            <motion.button
              className="w-40 h-40 rounded-full backdrop-blur-md bg-white/5 border border-[#00BFFF] shadow-[0_0_20px_rgba(0,191,255,0.3)] relative overflow-hidden group animate-pulse"
              onClick={handlePowerButtonClick}
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
              Click above to Power Up the <span className="text-[#00BFFF] font-semibold">SPIT Network ⚡</span>
            </p>
          </div>
        )}

        {/* Journey */}
        {stage === 'journey' && (
          <div className="relative w-full h-full overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 3 + 1 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
                animate={{ scale: [1, 0, 1], opacity: [1, 0.5, 1] }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            <motion.img
              src="/assets/spitship.png"
              alt="Rocket"
              className="w-32 h-32 absolute"
              initial={{ x: '100%', y: '400%', scale: 4 }}
              animate={{ x: '300%', y: '-30%', scale: 0.6, rotate: -45 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
        )}

        {/* Landing */}
        {stage === 'landing' && (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 2 + 1 + 'px',
                  height: Math.random() * 2 + 1 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
                animate={{ opacity: [1, 0.5, 1], scale: [1, 0.8, 1.2, 1] }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            <div className="relative w-96 h-96 flex items-center justify-center">
              <motion.div
                className="absolute rounded-full border-4 border-[#00BFFF]/40 blur-xl"
                style={{ width: '420px', height: '420px' }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 1, 0.6],
                  boxShadow: ['0 0 20px #00BFFF', '0 0 40px #00BFFF', '0 0 20px #00BFFF']
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute rounded-full bg-[#00BFFF]/20 blur-2xl"
                style={{ width: '500px', height: '500px' }}
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img
                src="/assets/Earth.jpg"
                alt="Earth"
                className="w-96 h-96 z-10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(0, 191, 255, 0.2))',
                  background: 'transparent',
                }}
              />
              <motion.img
                src="/assets/spitship.png"
                alt="Rocket"
                className="w-16 h-16 absolute top-0 left-1/2 -translate-x-1/2 z-20"
                initial={{ y: '-100%' }}
                animate={{ y: '100%' }}
                transition={{ duration: 2, ease: 'easeIn' }}
              />
            </div>
          </div>
        )}

        {/* Logo */}
{stage === 'logo' && (
  <motion.div
    className="text-center font-sans"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="relative inline-block p-4 rounded-full border-4 border-[#00BFFF] shadow-[0_0_40px_#00BFFF] bg-black/20 backdrop-blur-lg">
      <motion.img
        src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png"
        alt="SPIT Logo"
        className="w-40 h-40 rounded-full object-cover"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      />
    </div>

    <motion.h1
      className="text-3xl md:text-4xl font-semibold mt-6 bg-gradient-to-r from-[#FFD700] to-[#00BFFF] bg-clip-text text-transparent tracking-wide"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      Welcome to SPIT
    </motion.h1>
  </motion.div>
)}

        {/* Loading */}
        {stage === 'loading' && (
          <div className="text-center">
            <h2 className="text-[#00BFFF] mb-4">Entering the Campus Network</h2>
            <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00BFFF] to-[#FFD700]"
                style={{ width: `${loading}%` }}
              />
            </div>
            <p className="text-white/60 mt-2">{loading}%</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
