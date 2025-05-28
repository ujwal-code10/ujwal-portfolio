
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-electric-400 to-coral-400 bg-clip-text text-transparent">
                Ujwal
              </span>
            </h1>
            <h2 className="text-xl lg:text-3xl font-light mb-6 text-navy-100">
              Freelance Web Designer & Developer
            </h2>
            <p className="text-lg lg:text-xl text-navy-200 mb-8 leading-relaxed max-w-lg">
              I create stunning, modern websites using AI-enhanced development tools to deliver 
              fast, custom solutions without compromising on quality or originality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-electric-500 to-coral-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-electric-400 hover:to-coral-400"
              >
                Let's Work Together
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="border-2 border-electric-400 text-electric-400 px-8 py-4 rounded-full font-semibold hover:bg-electric-400 hover:text-navy-900 transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
          
          <div className="lg:flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-electric-400 to-coral-400 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-4 bg-navy-800 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl lg:text-6xl mb-4">💻</div>
                  <p className="text-sm lg:text-lg font-medium">AI-Enhanced</p>
                  <p className="text-sm lg:text-lg font-medium">Development</p>
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
