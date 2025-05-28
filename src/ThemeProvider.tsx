import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      // Optionally, use prefers-color-scheme as fallback
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'dark';
  });

  // Add smooth transition on theme change
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add('theme-transition', theme);
    localStorage.setItem('theme', theme);

    // Remove the transition class after animation
    const timeout = setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 400); // Match your CSS transition duration

    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);