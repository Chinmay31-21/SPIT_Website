import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

 // ...existing code...
return (
  <section
    ref={sectionRef}
    className="min-h-[80vh] h-auto lg:min-h-screen bg-gradient-to-b from-[#02365E] to-[#30036B] dark:bg-gradient-to-b dark:from-[#0E1428] dark:to-[#27193f] relative overflow-hidden flex items-center"
  >
    {/* Background Animation */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/20 to-[#FFD700]/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#00BFFF] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-bounce"></div>
      </div>
    </div>

    <motion.div
      style={{ opacity, scale }}
      className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 w-full"
    >
      {/* Left Content */}
      <div className="flex-1 w-full space-y-8">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-6 md:mb-10"
        >
          About Sardar Patel Institute of Technology
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-4 md:p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/10 to-transparent rounded-xl"></div>
          <p className="text-white/90 relative z-10 leading-relaxed text-base md:text-lg">
            Sardar Patel Institute Of Technology is one of the premier Engineering Institutes in Mumbai,
            offering undergraduate and postgraduate programs in engineering and technology. We are committed
            to excellence in education, research, and innovation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-8"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 flex items-center gap-3">
            <GraduationCap className="text-[#FFD700] w-6 h-6" />
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">50+</div>
              <div className="text-white/70 text-xs md:text-sm">Years of Excellence</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 flex items-center gap-3">
            <Users className="text-[#00BFFF] w-6 h-6" />
            <div>
              <div className="text-xl md:text-2xl font-bold text-white">5000+</div>
              <div className="text-white/70 text-xs md:text-sm">Students</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Content - Interactive Visual */}
      <div className="flex-1 w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative flex items-center justify-center">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {/* Outer Rings */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-2 border-[#FFD700]/30 rounded-full"></div>
          <div className="absolute w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 border-2 border-[#00BFFF]/30 rounded-full"></div>
          <div className="absolute w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 border-2 border-white/20 rounded-full"></div>

          {/* Center Logo/Icon */}
          <motion.div
            className="relative z-10 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-[#FFD700] to-[#DAA520] rounded-full flex items-center justify-center shadow-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <GraduationCap className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-[#02365E]" />
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            className="absolute top-4 right-4 w-8 h-8 md:top-8 md:right-8 md:w-12 md:h-12 bg-[#00BFFF]/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-[#00BFFF]/30"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BookOpen className="w-4 h-4 md:w-6 md:h-6 text-[#00BFFF]" />
          </motion.div>

          <motion.div
            className="absolute bottom-4 left-4 w-8 h-8 md:bottom-8 md:left-8 md:w-12 md:h-12 bg-[#FFD700]/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-[#FFD700]/30"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <Award className="w-4 h-4 md:w-6 md:h-6 text-[#FFD700]" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-2 w-7 h-7 md:right-4 md:w-10 md:h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30"
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <Users className="w-3 h-3 md:w-5 md:h-5 text-white" />
          </motion.div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute right-0 top-0 h-full w-1 bg-[#00BFFF]/20 rounded-full">
          <motion.div
            className="w-full bg-gradient-to-b from-[#FFD700] to-[#00BFFF] rounded-full"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              opacity: useTransform(scrollYProgress, [0, 1], [0.2, 1])
            }}
          />
        </div>
      </div>
    </motion.div>
  </section>
);
// ...existing code...
};