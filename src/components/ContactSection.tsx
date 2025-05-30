
import { useState } from 'react';
import { Mail, ChevronRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-navy-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-navy-200 max-w-3xl mx-auto">
            Ready to bring your vision to life with AI-enhanced development? 
            Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="name" className="block text-navy-200 font-medium mb-2 text-sm sm:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-800 border border-navy-700 rounded-lg lg:rounded-xl text-white placeholder-navy-400 focus:outline-none focus:border-electric-400 transition-colors text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-navy-200 font-medium mb-2 text-sm sm:text-base">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-800 border border-navy-700 rounded-lg lg:rounded-xl text-white placeholder-navy-400 focus:outline-none focus:border-electric-400 transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-navy-200 font-medium mb-2 text-sm sm:text-base">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-800 border border-navy-700 rounded-lg lg:rounded-xl text-white focus:outline-none focus:border-electric-400 transition-colors text-sm sm:text-base"
                >
                  <option value="">Select a project type</option>
                  <option value="landing-page">Landing Page ($50)</option>
                  <option value="portfolio">Portfolio Website ($80)</option>
                  <option value="3-page">3-page Website ($120)</option>
                  <option value="5-page">5-page Website ($200)</option>
                  <option value="express">Express Delivery (+$30)</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-navy-200 font-medium mb-2 text-sm sm:text-base">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-800 border border-navy-700 rounded-lg lg:rounded-xl text-white placeholder-navy-400 focus:outline-none focus:border-electric-400 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-electric-500 to-coral-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg lg:rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Send Message</span>
                <ChevronRight size={16} className="sm:size-5" />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-navy-700">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8">
                Why Choose Me?
              </h3>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-electric-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 lg:mb-2 text-sm sm:text-base">Fast Delivery</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">AI-enhanced development means faster turnaround times without compromising quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-coral-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">💰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 lg:mb-2 text-sm sm:text-base">Affordable Pricing</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Beginner-friendly rates that provide excellent value for modern, professional websites.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-navy-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 lg:mb-2 text-sm sm:text-base">AI-Enhanced</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Leveraging cutting-edge AI tools to create innovative solutions and optimize workflows.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm sm:text-base">✅</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 lg:mb-2 text-sm sm:text-base">Quality Assured</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Every project includes responsive design, cross-browser compatibility, and ongoing support.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-navy-700">
                <div className="flex items-center space-x-2 lg:space-x-3 text-gray-200">
                  <Mail size={16} className="text-electric-400 sm:size-5" />
                  <span className="text-xs sm:text-sm lg:text-base">ujwal.developer@email.com</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 lg:mt-2">
                  I typically respond within 2-4 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
