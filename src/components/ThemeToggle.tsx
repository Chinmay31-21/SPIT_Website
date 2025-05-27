import { useTheme } from '../ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }};
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-lg transition-colors duration-300 focus:outline-none"
      aria-label="Toggle theme"
    >
      <div className="relative w-8 h-8">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-[#FFD700]"
        >
          <Moon className="w-6 h-6" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-[#FFD700]"
        >
          <Sun className="w-6 h-6" />
        </motion.div>
      </div>
    </motion.button>
  );
};