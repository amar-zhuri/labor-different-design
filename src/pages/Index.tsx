import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechnologySection from "@/components/TechnologySection";
import Services from "@/components/Services";

import ExpertTeam from "@/components/ExpertTeam";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="about">
        <About />
      </div>
      <TechnologySection />
      <Services />
      <ExpertTeam />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
