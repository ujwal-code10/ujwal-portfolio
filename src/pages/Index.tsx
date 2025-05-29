
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import WorkflowSection from '../components/WorkflowSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WorkProcessSection from '../components/WorkProcessSection';
import PricingSection from '../components/PricingSection';
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
        <ProjectsSection />
        <ServicesSection />
        <WorkflowSection />
        <TestimonialsSection />
        <WorkProcessSection />
        <PricingSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
