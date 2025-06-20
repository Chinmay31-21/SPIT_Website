import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F0F23]">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-[#7B2FFE]/30 border-t-[#7B2FFE] rounded-full mx-auto mb-4"
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-[#7B2FFE] to-[#FF69B4] bg-clip-text text-transparent mb-2"
        >
          Initializing Network
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/60"
        >
          Connecting alumni across the globe...
        </motion.p>
      </div>
    </div>
  );
};