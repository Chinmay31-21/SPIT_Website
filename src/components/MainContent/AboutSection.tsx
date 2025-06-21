import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b (from-[#02365E] to-[#30036B]) relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/20 to-[#FFD700]/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold bg-gradient-to-r from-[#5E035E] to-[#30036B] dark:from-[#FFD700] dark:to-[#DAA520] bg-clip-text text-transparent mb-10"
          >
            About Sardar Patel Institute of Technology
          </motion.h2>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-6 backdrop-blur-lg bg-white/5 rounded-lg border border-[#8B3A3A]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B3A3A]/10 to-transparent rounded-lg"></div>
            <p className="text-white/90 relative z-10 leading-relaxed">
              Sardar Patel Institute Of Technology is one of the premier Engineering Institutes in Mumbai, 
              offering undergraduate and postgraduate programs in engineering and technology.
            </p>
          </motion.div>
        </div>

        {/* Right Content - 3D Animation */}
        <div className="flex-1 h-[400px] relative">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/your-scene-url" />
          </div>
          {/* Progress Indicator */}
          <div className="absolute right-0 h-full w-1 bg-[#00BFFF]/20">
            <motion.div 
              className="w-full bg-[#00BFFF]"
              style={{ 
                height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                opacity: useTransform(scrollYProgress, [0, 1], [0.2, 1])
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};