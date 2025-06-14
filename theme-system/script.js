/**
 * Advanced Theme Management System
 * Handles dark/light mode switching with smooth animations and system preference detection
 */

class ThemeManager {
  constructor() {
    this.themes = ['light', 'dark'];
    this.currentTheme = this.getInitialTheme();
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    this.init();
  }

  /**
   * Initialize the theme system
   */
  init() {
    this.setTheme(this.currentTheme);
    this.bindEvents();
    this.addThemeTransition();
    this.handleSystemThemeChange();
  }

  /**
   * Get the initial theme based on saved preference or system setting
   */
  getInitialTheme() {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && this.themes.includes(savedTheme)) {
      return savedTheme;
    }

    // Fall back to system preference
    return this.mediaQuery.matches ? 'dark' : 'light';
  }

  /**
   * Set the theme and update the DOM
   */
  setTheme(theme) {
    if (!this.themes.includes(theme)) {
      console.warn(`Invalid theme: ${theme}`);
      return;
    }

    // Update the current theme
    this.currentTheme = theme;

    // Update the DOM
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Update meta theme-color for mobile browsers
    this.updateMetaThemeColor(theme);

    // Dispatch custom event for other components to listen to
    this.dispatchThemeChangeEvent(theme);

    // Update toggle button state
    this.updateToggleButton();
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    
    // Add a subtle animation to the toggle button
    this.animateToggleButton();
  }

  /**
   * Bind event listeners
   */
  bindEvents() {
    // Theme toggle button
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => this.toggleTheme());
      
      // Add keyboard support
      toggleButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleTheme();
        }
      });
    }

    // Listen for system theme changes
    this.mediaQuery.addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });

    // Listen for storage changes (for multi-tab sync)
    window.addEventListener('storage', (e) => {
      if (e.key === 'theme' && e.newValue && this.themes.includes(e.newValue)) {
        this.setTheme(e.newValue);
      }
    });
  }

  /**
   * Add smooth transition class to prevent flash during theme change
   */
  addThemeTransition() {
    const root = document.documentElement;
    root.classList.add('theme-transition');
    
    // Remove transition class after animation completes
    setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 300);
  }

  /**
   * Handle system theme changes
   */
  handleSystemThemeChange() {
    // If user hasn't set a manual preference, follow system
    if (!localStorage.getItem('theme')) {
      this.mediaQuery.addEventListener('change', (e) => {
        this.setTheme(e.matches ? 'dark' : 'light');
      });
    }
  }

  /**
   * Update meta theme-color for mobile browsers
   */
  updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }

    // Set appropriate color based on theme
    const colors = {
      light: '#ffffff',
      dark: '#0f172a'
    };

    metaThemeColor.content = colors[theme];
  }

  /**
   * Dispatch custom theme change event
   */
  dispatchThemeChangeEvent(theme) {
    const event = new CustomEvent('themechange', {
      detail: { theme, previousTheme: this.currentTheme }
    });
    document.dispatchEvent(event);
  }

  /**
   * Update toggle button accessibility attributes
   */
  updateToggleButton() {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      const isLight = this.currentTheme === 'light';
      toggleButton.setAttribute('aria-label', 
        `Switch to ${isLight ? 'dark' : 'light'} mode`
      );
      toggleButton.setAttribute('title', 
        `Switch to ${isLight ? 'dark' : 'light'} mode`
      );
    }
  }

  /**
   * Add animation to toggle button when clicked
   */
  animateToggleButton() {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.style.transform = 'scale(0.95)';
      setTimeout(() => {
        toggleButton.style.transform = '';
      }, 150);
    }
  }

  /**
   * Get current theme
   */
  getCurrentTheme() {
    return this.currentTheme;
  }

  /**
   * Check if current theme is dark
   */
  isDarkMode() {
    return this.currentTheme === 'dark';
  }

  /**
   * Force set theme (useful for testing or admin controls)
   */
  forceTheme(theme) {
    if (this.themes.includes(theme)) {
      this.setTheme(theme);
      return true;
    }
    return false;
  }

  /**
   * Reset to system preference
   */
  resetToSystemPreference() {
    localStorage.removeItem('theme');
    const systemTheme = this.mediaQuery.matches ? 'dark' : 'light';
    this.setTheme(systemTheme);
  }
}

/**
 * Enhanced UI Interactions
 */
class UIEnhancements {
  constructor() {
    this.init();
  }

  init() {
    this.addScrollEffects();
    this.addHoverEffects();
    this.addClickEffects();
    this.addKeyboardNavigation();
  }

  /**
   * Add scroll-based effects
   */
  addScrollEffects() {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'var(--bg-primary)';
          navbar.style.backdropFilter = 'blur(10px)';
          navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
          navbar.style.backgroundColor = 'var(--bg-primary)';
          navbar.style.backdropFilter = 'none';
          navbar.style.boxShadow = 'none';
        }
      });
    }

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
      });
    }
  }

  /**
   * Add enhanced hover effects
   */
  addHoverEffects() {
    // Feature cards tilt effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  /**
   * Add click effects and interactions
   */
  addClickEffects() {
    // Toggle switches
    const toggleSwitches = document.querySelectorAll('.toggle-switch');
    toggleSwitches.forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
      });
    });

    // Chart bars interaction
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach((bar, index) => {
      bar.addEventListener('click', () => {
        // Simulate data update
        const newHeight = Math.random() * 80 + 20;
        bar.style.height = newHeight + '%';
        
        // Add temporary highlight
        bar.style.filter = 'brightness(1.2)';
        setTimeout(() => {
          bar.style.filter = '';
        }, 300);
      });
    });
  }

  /**
   * Enhanced keyboard navigation
   */
  addKeyboardNavigation() {
    // Focus management for better accessibility
    document.addEventListener('keydown', (e) => {
      // Escape key to close any open modals or dropdowns
      if (e.key === 'Escape') {
        // Close any open elements
        document.querySelectorAll('.dropdown-open').forEach(el => {
          el.classList.remove('dropdown-open');
        });
      }
      
      // Tab navigation enhancement
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }
}

/**
 * Performance and Accessibility Utilities
 */
class PerformanceUtils {
  constructor() {
    this.init();
  }

  init() {
    this.addIntersectionObserver();
    this.addPreloadHints();
    this.addReducedMotionSupport();
  }

  /**
   * Add intersection observer for animations
   */
  addIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements that should animate in
    const animateElements = document.querySelectorAll('.feature-card, .demo-card');
    animateElements.forEach(el => observer.observe(el));
  }

  /**
   * Add preload hints for better performance
   */
  addPreloadHints() {
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);
  }

  /**
   * Support for reduced motion preferences
   */
  addReducedMotionSupport() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      document.documentElement.classList.add('reduced-motion');
    }

    prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    });
  }
}

/**
 * Initialize everything when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme management
  window.themeManager = new ThemeManager();
  
  // Initialize UI enhancements
  new UIEnhancements();
  
  // Initialize performance utilities
  new PerformanceUtils();
  
  // Add global theme change listener for custom components
  document.addEventListener('themechange', (e) => {
    console.log(`Theme changed to: ${e.detail.theme}`);
    
    // You can add custom logic here for theme-specific behavior
    // For example, updating chart colors, map themes, etc.
  });
  
  // Expose theme manager globally for console access
  window.toggleTheme = () => window.themeManager.toggleTheme();
  window.setTheme = (theme) => window.themeManager.forceTheme(theme);
  window.getCurrentTheme = () => window.themeManager.getCurrentTheme();
});

// Add CSS for ripple effect
const rippleCSS = `
.btn {
  position: relative;
  overflow: hidden;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple-animation 0.6s linear;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.animate-in {
  animation: slideInUp 0.6s ease-out forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reduced-motion * {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}

.keyboard-navigation *:focus {
  outline: 2px solid var(--accent-primary) !important;
  outline-offset: 2px !important;
}
`;

// Inject the CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);