import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerServiceWorker } from './utils/sw-register'
import { trackWebVitals } from './utils/performance'
import { initializeGA } from './utils/analytics'

// Register service worker for caching
registerServiceWorker();

// Initialize performance tracking
trackWebVitals();

// Initialize Google Analytics (replace with actual measurement ID in production)
if (import.meta.env.PROD) {
  initializeGA('GA_MEASUREMENT_ID');
}

createRoot(document.getElementById("root")!).render(<App />);
