import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 👇 Add these two lines:
import { ThemeProvider } from './theme/ThemeProvider';
import { ThemeScript } from './theme/ThemeScript';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeScript />
      <App />
    </ThemeProvider>
  </StrictMode>
);
