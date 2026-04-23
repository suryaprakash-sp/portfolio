// Google Analytics 4 wrapper. Loads gtag.js only when VITE_GA_MEASUREMENT_ID is set,
// so local builds and GitHub Pages builds without the env var gracefully no-op.

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initAnalytics(): void {
  if (!GA_ID || typeof window === 'undefined') return;

  const loader = document.createElement('script');
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(loader);

  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
}

export type CalendlyCtaLocation = 'service-card' | 'hero' | 'final-cta' | 'footer';

export function trackCalendlyClick(location: CalendlyCtaLocation): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'calendly_cta_click', { cta_location: location });
}
