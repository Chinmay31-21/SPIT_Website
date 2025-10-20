import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const AdminLoginButton = () => {
  return (
    <Link to="/admin/login">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#00BFFF] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
      >
        <Lock className="w-4 h-4" />
        <span>Admin</span>
      </motion.button>
    </Link>
  );
};
