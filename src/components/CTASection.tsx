
import { Mail, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-electric-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            Let's Build Your Website
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-navy-100 mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
            Ready to launch your website beautifully and fast?<br />
            <span className="text-electric-300 font-semibold">Let's chat about your project!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-8 lg:mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-electric-500 to-coral-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-electric-400 hover:to-coral-400 flex items-center gap-2 lg:gap-3"
            >
              <Mail size={20} className="sm:size-6" />
              Start Your Project Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform sm:size-6" />
            </button>
            
            <a 
              href="mailto:ujwal@example.com" 
              className="text-electric-300 hover:text-electric-200 font-semibold text-sm sm:text-base lg:text-lg transition-colors flex items-center gap-2"
            >
              Or email me directly
              <ArrowRight size={16} className="sm:size-5" />
            </a>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-8 text-navy-100">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl mb-2 lg:mb-3">🚀</div>
              <h3 className="font-bold mb-1 lg:mb-2 text-sm sm:text-base">Fast Delivery</h3>
              <p className="text-xs sm:text-sm">Most projects completed in 2-7 days</p>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl mb-2 lg:mb-3">💎</div>
              <h3 className="font-bold mb-1 lg:mb-2 text-sm sm:text-base">Premium Quality</h3>
              <p className="text-xs sm:text-sm">Modern design with clean code</p>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl mb-2 lg:mb-3">🤝</div>
              <h3 className="font-bold mb-1 lg:mb-2 text-sm sm:text-base">Personal Support</h3>
              <p className="text-xs sm:text-sm">Direct communication throughout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
