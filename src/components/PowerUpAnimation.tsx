import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

type AnimationStage = 'initial' | 'spark' | 'launch' | 'journey' | 'logo' | 'loading' | 'complete';

export const PowerUpAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<AnimationStage>('initial');
  const [loading, setLoading] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showSpark, setShowSpark] = useState(false);

  useEffect(() => {
    const stageTimings: { [key in AnimationStage]?: number } = {
      launch: 3000,
      journey: 3000,
      logo: 1500,
      loading: 3000,
    };

    if (isButtonClicked && stage !== 'complete' && stage !== 'spark') {
      const nextStage: { [key in AnimationStage]: AnimationStage } = {
        initial: 'spark',
        spark: 'launch',
        launch: 'journey',
        journey: 'logo',
        logo: 'loading',
        loading: 'complete',
        complete: 'complete',
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
    setStage('spark');
    setTimeout(() => {
      setShowSpark(false);
      setStage('launch');
    }, 2000);
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
        {/* Spark Effect */}
        <AnimatePresence>
          {showSpark && (
            <motion.div
              className="fixed inset-0 z-[999] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/assets/spark.gif" alt="Spark Effect" className="w-full h-full object-cover" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Power Button */}
        {stage === 'initial' && (
          <div className="relative z-10">
            <motion.button
              className="w-40 h-40 bg-black/80 rounded-2xl border-4 border-[#00BFFF] relative overflow-hidden group"
              onClick={handlePowerButtonClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-16 h-16 text-[#00BFFF] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-[#FFD700] transition-colors duration-300" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/20 to-transparent"
                animate={{ x: ['0%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.button>
            <p className="text-[#00BFFF] mt-4 text-center text-lg font-semibold">
              Press to Power Up the SPIT Network ⚡
            </p>
          </div>
        )}

        {/* Launch from Earth */}
        {stage === 'launch' && (
          <motion.div
            className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/assets/Earth.jpg"
              alt="Earth"
              className="w-80 h-80 absolute bottom-0 left-1/2 -translate-x-1/2 z-10 rounded-full"
              animate={{ scale: [1, 1.05, 1], rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ filter: 'drop-shadow(0 0 10px rgba(0, 191, 255, 0.2))' }}
            />
            <motion.img
              src="/assets/spitship.png"
              alt="Rocket"
              className="w-16 h-16 absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
              initial={{ y: 0, scale: 1 }}
              animate={{ y: '-150vh', scale: 1.5, rotate: -20 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </motion.div>
        )}

        {/* Journey through space */}
        {stage === 'journey' && (
          <motion.div className="relative w-full h-full bg-black overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{ width: Math.random() * 2 + 1 + 'px', height: Math.random() * 2 + 1 + 'px', left: Math.random() * 100 + '%', top: Math.random() * 100 + '%' }}
                animate={{ y: ['0%', '200%'], opacity: [1, 0.2, 1] }}
                transition={{ duration: Math.random() * 8 + 2, repeat: Infinity, delay: Math.random() * 2, ease: 'linear' }}
              />
            ))}
            <motion.img
              src="/assets/spitship.png"
              alt="Rocket"
              className="w-24 h-24 absolute"
              initial={{ x: '-20%', y: '100%' }}
              animate={{ x: '140%', y: '-40%', rotate: -30 }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            />
          </motion.div>
        )}

        {/* Logo */}
        {stage === 'logo' && (
          <motion.div className="text-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <motion.img
              src="https://www.spit.ac.in/wp-content/themes/spit-main/images/SPIT_logo.png"
              alt="SPIT Logo"
              className="w-40 h-40 mx-auto mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3 }}
            />
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#00BFFF] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
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
