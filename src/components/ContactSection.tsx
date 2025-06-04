'use client';
import { useState } from 'react';
import { Mail, ChevronRight } from 'lucide-react';
import { type ChangeEvent, type FormEvent } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
  
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('project', formData.project);
    formDataToSend.append('message', formData.message);
  
    try {
      const response = await fetch('https://formspree.io/f/mbjwkzrk', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', project: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-navy-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Ready to bring your vision to life with AI-enhanced development? 
            Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-300 font-medium">
                  Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 font-medium">
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-3 text-base sm:text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-navy-800/50 border border-navy-600 rounded-xl text-white placeholder-navy-300 focus:outline-none focus:border-electric-400 focus:ring-2 focus:ring-electric-400/20 transition-all text-base sm:text-lg"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-3 text-base sm:text-lg">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-navy-800/50 border border-navy-600 rounded-xl text-white placeholder-navy-300 focus:outline-none focus:border-electric-400 focus:ring-2 focus:ring-electric-400/20 transition-all text-base sm:text-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-white font-semibold mb-3 text-base sm:text-lg">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-navy-800/50 border border-navy-600 rounded-xl text-white focus:outline-none focus:border-electric-400 focus:ring-2 focus:ring-electric-400/20 transition-all text-base sm:text-lg"
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
                <label htmlFor="message" className="block text-white font-semibold mb-3 text-base sm:text-lg">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-navy-800/50 border border-navy-600 rounded-xl text-white placeholder-navy-300 focus:outline-none focus:border-electric-400 focus:ring-2 focus:ring-electric-400/20 transition-all resize-none text-base sm:text-lg"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-electric-500 to-coral-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 text-lg sm:text-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span>{isSubmitting ? 'Sending...' : 'Start Your Project'}</span>
                {!isSubmitting && <ChevronRight size={20} className="sm:size-6" />}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-10 border border-navy-600">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 lg:mb-10">
                Why Choose Me?
              </h3>
              
              <div className="space-y-6 lg:space-y-8">
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-electric-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 lg:mb-3 text-lg sm:text-xl">Fast Delivery</h4>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">AI-enhanced development means faster turnaround times without compromising quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-coral-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl">💰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 lg:mb-3 text-lg sm:text-xl">Affordable Pricing</h4>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">Beginner-friendly rates that provide excellent value for modern, professional websites.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-navy-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 lg:mb-3 text-lg sm:text-xl">AI-Enhanced</h4>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">Leveraging cutting-edge AI tools to create innovative solutions and optimize workflows.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 lg:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl">✅</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 lg:mb-3 text-lg sm:text-xl">Quality Assured</h4>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">Every project includes responsive design, cross-browser compatibility, and ongoing support.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 lg:mt-10 pt-8 lg:pt-10 border-t border-navy-600">
                <div className="flex items-center space-x-3 lg:space-x-4 text-gray-200">
                  <Mail size={20} className="text-electric-400 sm:size-6" />
                  <span className="text-base sm:text-lg lg:text-xl">magarujal6@gmail.com</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mt-2 lg:mt-3">
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
