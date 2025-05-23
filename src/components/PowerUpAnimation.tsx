import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

type AnimationStage = 'initial' | 'spark' | 'journey' | 'landing' | 'logo' | 'loading' | 'complete';

const RocketAnimation = ({ startStage }: { startStage: AnimationStage }) => (
  <motion.img
    src="/assets/spitship.png"
    alt="Rocket"
    className="w-32 h-32 absolute"
    initial={
      startStage === 'journey'
        ? { x: '100%', y: '400%', scale: 4 }
        : { x: '0%', y: '100%', scale: 1.2 }
    }
    animate={
      startStage === 'journey'
        ? { x: '300%', y: '-30%', scale: 0.6, rotate: -45 }
        : { x: '150%', y: '-50%', scale: 0.6, rotate: -45 }
    }
    transition={{ duration: 3, ease: 'easeInOut' }}
  />
);

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
        spark: 'journey',
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
    setStage('spark');

    setTimeout(() => {
      setShowSpark(false);
      setStage('journey');
    }, 2000); // spark duration
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
        {/* Spark Overlay */}
        <AnimatePresence>
          {showSpark && (
            <motion.div
              className="fixed inset-0 z-[1000] bg-black pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/assets/spark.gif"
                alt="Spark Effect"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Power Button */}
        {(stage === 'initial' || stage === 'spark') && !showSpark && (
          <div className="relative z-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-30" />
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
                animate={{
                  scale: [1, 0, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            <RocketAnimation startStage="journey" />
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
                animate={{
                  opacity: [1, 0.5, 1],
                  scale: [1, 0.8, 1.2, 1],
                }}
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
              <RocketAnimation startStage="landing" />
            </div>
          </div>
        )}

        {/* Logo */}
        {stage === 'logo' && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
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
