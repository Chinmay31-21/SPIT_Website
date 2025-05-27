// src/components/ThemeToggle.tsx
import { useTheme } from '../theme/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full shadow-inner transition-colors duration-500 ease-in-out focus:outline-none"
        aria-label="Toggle theme"
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-500 ${
            theme === 'dark' ? 'translate-x-6' : ''
          }`}
        >
          {theme === 'dark' ? (
            <MoonIcon className="w-4 h-4 text-yellow-300 m-1" />
          ) : (
            <SunIcon className="w-4 h-4 text-yellow-500 m-1" />
          )}
        </div>
      </button>
    </div>
  );
}
