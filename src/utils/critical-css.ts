// Critical CSS utilities for performance optimization

export const inlineCriticalCSS = () => {
  if (typeof document === 'undefined') return;

  // Above-the-fold styles — kept in sync with src/index.css design tokens
  // so the first paint already shows the real brand (no flash/FOUC).
  const criticalCSS = `
    :root {
      --background: 168 44% 4%;
      --foreground: 150 16% 96%;
      --primary: 152 64% 46%;
      --primary-foreground: 168 50% 5%;
      --primary-dark: 158 60% 24%;
      --border: 158 24% 15%;
      color-scheme: dark;
    }

    * { border-color: hsl(var(--border)); }

    html { -webkit-text-size-adjust: 100%; background-color: hsl(168 44% 4%); }

    body {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      font-family: "Hanken Grotesk", system-ui, -apple-system, sans-serif;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }

    .header-critical {
      position: fixed;
      inset: 0 0 auto 0;
      z-index: 50;
    }

    .hero-critical {
      min-height: 100svh;
      background: linear-gradient(165deg, hsl(165 48% 11%), hsl(160 52% 7%));
    }
  `;

  if (document.querySelector('#critical-css')) return;

  const style = document.createElement('style');
  style.id = 'critical-css';
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
};

// Reserved hook — intentionally a no-op. The previous implementation
// preloaded directory paths which only produced invalid <link> warnings.
export const preloadNonCriticalCSS = () => {
  /* no-op: stylesheets are handled by the bundler */
};

// Font loading optimization.
// IMPORTANT: never mutate the Google Fonts <link rel="stylesheet"> — turning
// a CSS stylesheet into rel="preload" as="font" would break web font loading.
// We only ensure stylesheet font links carry the right loading hints.
export const optimizeFontLoading = () => {
  if (typeof document === 'undefined') return;

  const fontStylesheets = document.querySelectorAll<HTMLLinkElement>(
    'link[rel="stylesheet"][href*="fonts.googleapis.com"]'
  );

  fontStylesheets.forEach((link) => {
    // media swap trick keeps font CSS non-render-blocking without breaking it
    if (link.dataset.optimized === 'true') return;
    link.setAttribute('media', 'print');
    link.addEventListener(
      'load',
      () => link.setAttribute('media', 'all'),
      { once: true }
    );
    // Fallback in case the load event already fired
    requestAnimationFrame(() => link.setAttribute('media', 'all'));
    link.dataset.optimized = 'true';
  });
};
