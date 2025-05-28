
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
  };

  return (
    <section id="contact" className="py-20 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-navy-200 max-w-3xl mx-auto">
            Ready to bring your vision to life with AI-enhanced development? 
            Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-navy-200 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-white placeholder-navy-400 focus:outline-none focus:border-electric-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-navy-200 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-white placeholder-navy-400 focus:outline-none focus:border-electric-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-navy-200 font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-white focus:outline-none focus:border-electric-400 transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="landing-page">Landing Page ($199)</option>
                  <option value="portfolio">Portfolio Website ($299)</option>
                  <option value="business">Business Website ($499)</option>
                  <option value="ai-to-code">AI to Code ($149)</option>
                  <option value="redesign">Website Redesign ($299)</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-navy-200 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-white placeholder-navy-400 focus:outline-none focus:border-electric-400 transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-electric-500 to-coral-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ChevronRight size={20} />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-3xl p-8 border border-navy-700">
              <h3 className="text-2xl font-bold text-white mb-8">
                Why Choose Me?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-electric-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Fast Delivery</h4>
                    <p className="text-navy-200">AI-enhanced development means faster turnaround times without compromising quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">💰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Affordable Pricing</h4>
                    <p className="text-navy-200">Beginner-friendly rates that provide excellent value for modern, professional websites.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">AI-Enhanced</h4>
                    <p className="text-navy-200">Leveraging cutting-edge AI tools to create innovative solutions and optimize workflows.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✅</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Quality Assured</h4>
                    <p className="text-navy-200">Every project includes responsive design, cross-browser compatibility, and ongoing support.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-navy-700">
                <div className="flex items-center space-x-3 text-navy-200">
                  <Mail size={20} className="text-electric-400" />
                  <span>ujwal.developer@email.com</span>
                </div>
                <p className="text-sm text-navy-300 mt-2">
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
