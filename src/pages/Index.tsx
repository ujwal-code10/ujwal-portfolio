import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AIToolsSection from '../components/AIToolsSection';
import ProjectsSection from '../components/ProjectsSection';
import PricingSection from '../components/PricingSection';
import WorkflowSection from '../components/WorkflowSection';
import WorkProcessSection from '../components/WorkProcessSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Navigation />
      <div className="flex flex-col items-center justify-center w-full">
        <main className="w-full">
          <HeroSection />
          <div className="max-w-[2000px] mx-auto">
            <AboutSection />
            <AIToolsSection />
            <ProjectsSection />
            <PricingSection />
            <WorkflowSection />
            <WorkProcessSection />
            <CTASection />
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
