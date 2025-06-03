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
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <AIToolsSection />
        <ProjectsSection />
        <PricingSection />
        <WorkflowSection />
        <WorkProcessSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
