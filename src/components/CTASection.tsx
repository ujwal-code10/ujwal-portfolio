
import { Mail, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-electric-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Let's Build Your Website
          </h2>
          <p className="text-xl lg:text-2xl text-navy-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Ready to launch your website beautifully and fast?<br />
            <span className="text-electric-300 font-semibold">Let's chat about your project!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-electric-500 to-coral-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-electric-400 hover:to-coral-400 flex items-center gap-3"
            >
              <Mail size={24} />
              Start Your Project Today
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="mailto:ujwal@example.com" 
              className="text-electric-300 hover:text-electric-200 font-semibold text-lg transition-colors flex items-center gap-2"
            >
              Or email me directly
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-navy-100">
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-sm">Most projects completed in 2-7 days</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="font-bold mb-2">Premium Quality</h3>
              <p className="text-sm">Modern design with clean code</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Personal Support</h3>
              <p className="text-sm">Direct communication throughout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
