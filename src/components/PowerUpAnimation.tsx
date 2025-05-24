import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

type AnimationStage = 'initial' | 'journey' | 'landing' | 'logo' | 'loading' | 'complete';

export const PowerUpAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<AnimationStage>('initial');
  const [loading, setLoading] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showSpark, setShowSpark] = useState(false);

  // Ref for audio element
  const launchAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio once
  useEffect(() => {
    launchAudioRef.current = new Audio('/assets/space_ambience.mp3');
    if (launchAudioRef.current) {
      launchAudioRef.current.loop = true;
      launchAudioRef.current.volume = 0.5;
    }
    return () => {
      if (launchAudioRef.current) {
        launchAudioRef.current.pause();
        launchAudioRef.current = null;
      }
    };
  }, []);

  // Play/pause audio depending on stage
  useEffect(() => {
    if (stage === 'journey') {
      launchAudioRef.current?.play().catch(() => {});
    } else {
      if (launchAudioRef.current) {
        launchAudioRef.current.pause();
        launchAudioRef.current.currentTime = 0;
      }
    }
  }, [stage]);

  // Stage progression timings
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

  // Loading progress increment
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

  // On loading complete, trigger onComplete after delay
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

  // Keep spark for 2 seconds
  setTimeout(() => {
    setShowSpark(false);
  }, 2000);

  // Delay rocket launch start after 3 seconds
  setTimeout(() => {
    setStage('journey');
  }, 6000);
};


  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
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
              Power Up the <span className="text-[#00BFFF] font-semibold">SPIT Network ⚡</span>
            </p>
          </div>
        )}

        {stage === 'journey' && (
          <div className="relative w-full h-full overflow-hidden bg-black">
            {/* Stars for depth */}
            {['slow', 'mid', 'fast'].map((speed, i) => (
              <div key={i} className="absolute inset-0 z-0">
                {Array.from({ length: 25 }).map((_, j) => (
                  <motion.div
                    key={j}
                    className="absolute bg-white rounded-full"
                    style={{
                      width: Math.random() * 2 + 1 + 'px',
                      height: Math.random() * 2 + 1 + 'px',
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                      opacity: 0.8,
                    }}
                    animate={{ y: '-200%' }}
                    transition={{
                      duration: speed === 'fast' ? 6 : speed === 'mid' ? 12 : 20,
                      repeat: Infinity,
                      delay: Math.random() * 4,
                    }}
                  />
                ))}
              </div>
            ))}

            {/* Comets flying across */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`comet-${i}`}
                className="absolute w-24 h-1 bg-gradient-to-r from-white via-blue-400 to-transparent blur-md opacity-80 pointer-events-none"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 100}%`,
                  transform: 'rotate(-45deg)',
                }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x: '-150vw', y: '-150vh', opacity: 0 }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  delay: Math.random() * 3,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Earth with city lights */}
            <motion.img
              src="/assets/india.jpg"
              alt="Earth from Space"
              className="absolute bottom-0 left-0 w-full object-cover z-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
            
            {/* Rocket Fire */}
            <motion.div
              className="absolute left-1/2 bottom-[180px] w-3 h-40 bg-gradient-to-t from-yellow-400 to-transparent rounded-full blur-xl z-20"
              initial={{ opacity: 1, height: '40px' }}
              animate={{ opacity: 0, height: '80px' }}
              transition={{ duration: 2 }}
              style={{ transform: 'translateX(-50%)' }}
            />

            {/* Rocket Launch */}
            <motion.img
              src="/assets/spitship.png"
              alt="Rocket"
              className="w-32 h-32 absolute left-1/2 bottom-[180px] transform -translate-x-1/2 z-30"
              initial={{ y: 0, scale: 1.5, rotate: 0 }}
              animate={{ y: '-180vh', scale: 0.6, rotate: -15 }}
              transition={{ duration: 3.5, ease: 'easeInOut' }}
            />
          </div>
        )}

        {/* Logo Reveal */}
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
