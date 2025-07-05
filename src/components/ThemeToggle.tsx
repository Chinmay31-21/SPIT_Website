import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-white/15 dark:bg-dark-800/60 backdrop-blur-md border border-white/25 dark:border-dark-600/50 hover:bg-white/25 dark:hover:bg-dark-700/70 transition-all duration-300 group shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-amber-400 transition-all duration-500 ease-in-out ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-75'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-blue-300 transition-all duration-500 ease-in-out ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-75'
          }`}
        />
      </div>
      
      {/* Subtle glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-amber-400/10 group-hover:bg-amber-400/20' 
          : 'bg-blue-400/10 group-hover:bg-blue-400/20'
      }`} />
    </button>
  );
};