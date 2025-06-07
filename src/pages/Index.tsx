import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AIToolsSection from '../components/AIToolsSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
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
            <ServicesSection />
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
