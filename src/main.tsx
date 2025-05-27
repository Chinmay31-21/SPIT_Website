import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</React.StrictMode>

);
