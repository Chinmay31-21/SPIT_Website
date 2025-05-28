export function ThemeScript() {
  const script = `
    (function() {
      var theme = localStorage.getItem('theme');
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}