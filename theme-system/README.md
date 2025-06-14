# Beautiful Dark/Light Mode Theme System

A comprehensive, production-ready theme system for vanilla HTML/CSS/JavaScript websites with smooth animations, accessibility features, and modern design patterns.

## Features

### 🎨 **Beautiful Design**
- Carefully crafted color palettes for both light and dark modes
- Smooth transitions and animations
- Modern glassmorphism effects
- Responsive design that works on all devices

### ⚡ **Performance Optimized**
- CSS variables for instant theme switching
- Intersection Observer for efficient animations
- Reduced motion support for accessibility
- Optimized font loading

### 🔧 **Developer Friendly**
- Clean, modular code structure
- Comprehensive documentation
- Easy to customize and extend
- TypeScript-ready architecture

### ♿ **Accessibility First**
- WCAG 2.1 compliant color contrasts
- Keyboard navigation support
- Screen reader friendly
- Respects user's motion preferences

## Quick Start

1. **Include the files in your project:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Your content here -->
    
    <!-- Theme toggle button -->
    <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
        <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
        <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    </button>
    
    <script src="script.js"></script>
</body>
</html>
```

2. **Use CSS variables in your styles:**
```css
.my-component {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
    transition: all var(--transition-normal);
}
```

## CSS Variables Reference

### Colors
```css
/* Light/Dark mode colors */
--bg-primary          /* Main background */
--bg-secondary        /* Secondary background */
--bg-tertiary         /* Tertiary background */
--text-primary        /* Primary text */
--text-secondary      /* Secondary text */
--text-tertiary       /* Tertiary text */
--border-primary      /* Primary borders */
--border-secondary    /* Secondary borders */

/* Accent colors (consistent across themes) */
--accent-primary      /* Primary accent (blue) */
--accent-secondary    /* Secondary accent (purple) */
--accent-success      /* Success color (green) */
--accent-warning      /* Warning color (yellow) */
--accent-error        /* Error color (red) */
```

### Gradients
```css
--gradient-primary    /* Primary gradient */
--gradient-secondary  /* Secondary gradient */
--gradient-success    /* Success gradient */
```

### Shadows
```css
--shadow-sm          /* Small shadow */
--shadow-md          /* Medium shadow */
--shadow-lg          /* Large shadow */
--shadow-xl          /* Extra large shadow */
```

### Transitions
```css
--transition-fast    /* 0.15s ease */
--transition-normal  /* 0.3s ease */
--transition-slow    /* 0.5s ease */
```

## JavaScript API

### ThemeManager Class

```javascript
// Get the theme manager instance
const themeManager = window.themeManager;

// Toggle theme
themeManager.toggleTheme();

// Set specific theme
themeManager.setTheme('dark');
themeManager.setTheme('light');

// Get current theme
const currentTheme = themeManager.getCurrentTheme();

// Check if dark mode
const isDark = themeManager.isDarkMode();

// Reset to system preference
themeManager.resetToSystemPreference();
```

### Global Functions

```javascript
// Quick access functions
window.toggleTheme();           // Toggle theme
window.setTheme('dark');        // Set theme
window.getCurrentTheme();       // Get current theme
```

### Events

```javascript
// Listen for theme changes
document.addEventListener('themechange', (e) => {
    console.log('Theme changed to:', e.detail.theme);
    console.log('Previous theme:', e.detail.previousTheme);
    
    // Your custom logic here
});
```

## Customization

### Adding New Colors

1. **Add to CSS variables:**
```css
:root {
    --my-custom-color: #your-light-color;
}

[data-theme="dark"] {
    --my-custom-color: #your-dark-color;
}
```

2. **Use in your components:**
```css
.my-component {
    background-color: var(--my-custom-color);
}
```

### Creating Custom Components

```css
.custom-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-primary);
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
}

.custom-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
```

### Adding Theme-Specific Styles

```css
/* Styles that only apply in dark mode */
[data-theme="dark"] .special-component {
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
}

/* Styles that only apply in light mode */
[data-theme="light"] .special-component {
    background: linear-gradient(45deg, #f0f0f0, #ffffff);
}
```

## Browser Support

- **Modern browsers:** Full support with all features
- **IE11:** Basic theme switching (no CSS custom properties)
- **Mobile browsers:** Full support including meta theme-color

## Performance Tips

1. **Use CSS variables** instead of JavaScript for color changes
2. **Minimize DOM queries** by caching elements
3. **Use `will-change`** for elements that will be animated
4. **Respect `prefers-reduced-motion`** for accessibility

## Accessibility Features

- **High contrast ratios** for WCAG compliance
- **Keyboard navigation** support
- **Screen reader** friendly labels
- **Reduced motion** support
- **Focus indicators** for all interactive elements

## File Structure

```
theme-system/
├── index.html          # Demo page with examples
├── styles.css          # Complete CSS with theme system
├── script.js           # JavaScript theme management
└── README.md           # This documentation
```

## Integration Examples

### With Existing CSS Frameworks

```css
/* Bootstrap integration */
.btn-primary {
    background-color: var(--accent-primary) !important;
    border-color: var(--accent-primary) !important;
}

/* Tailwind CSS integration */
.bg-primary {
    background-color: var(--bg-primary);
}
```

### With JavaScript Frameworks

```javascript
// React integration
useEffect(() => {
    const handleThemeChange = (e) => {
        setTheme(e.detail.theme);
    };
    
    document.addEventListener('themechange', handleThemeChange);
    return () => document.removeEventListener('themechange', handleThemeChange);
}, []);

// Vue integration
mounted() {
    document.addEventListener('themechange', (e) => {
        this.theme = e.detail.theme;
    });
}
```

## License

MIT License - feel free to use in personal and commercial projects.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

**Made with ❤️ for the web development community**