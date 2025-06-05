import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    // Same logic as CTA section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:ujwal@example.com?subject=New Project Inquiry';
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-electric-400 to-coral-400 bg-clip-text text-transparent">
                Ujwal
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light mb-4 lg:mb-6 text-navy-100">
              Frontend Developer & UI Designer
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-navy-200 mb-6 lg:mb-8 leading-relaxed max-w-lg">
              I craft responsive, modern websites with clean design, smart layouts, and fast delivery—powered by React, Tailwind CSS, and AI-enhanced tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={handleStartProject}
                className="bg-gradient-to-r from-electric-500 to-coral-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-electric-400 hover:to-coral-400 text-sm sm:text-base"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="border-2 border-electric-400 text-electric-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-electric-400 hover:text-navy-900 transition-all duration-300 text-sm sm:text-base"
              >
                View My Work
              </button>
            </div>
          </div>
          
          <div className="lg:flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-to-br from-electric-400 to-coral-400 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-3 sm:inset-4 bg-navy-800 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-4">💻</div>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium">AI-Enhanced</p>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium">Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <ChevronDown size={32} className="cursor-pointer" onClick={() => scrollToSection('about')} />
      </div>
    </section>
  );
};

export default HeroSection;
