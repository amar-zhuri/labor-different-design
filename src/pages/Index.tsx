import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ErrorBoundary from "@/components/ui/error-boundary";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Lazy load non-critical components
const About = lazy(() => import("@/components/About"));
const TechnologySection = lazy(() => import("@/components/TechnologySection"));
const Services = lazy(() => import("@/components/Services"));
const ExpertTeam = lazy(() => import("@/components/ExpertTeam"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <div id="about">
            <About />
          </div>
          <TechnologySection />
          <Services />
          <ExpertTeam />
          <Contact />
          <Footer />
          <WhatsAppFloat />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Index;
