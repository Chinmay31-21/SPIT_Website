import React, { useState, useEffect } from 'react';
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

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
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
