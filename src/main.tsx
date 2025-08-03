import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerServiceWorker } from './utils/sw-register'
import { trackWebVitals } from './utils/performance'

// Register service worker for caching
registerServiceWorker();

// Initialize performance tracking
trackWebVitals();

createRoot(document.getElementById("root")!).render(<App />);
