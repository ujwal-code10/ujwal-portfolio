'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github, Send } from 'lucide-react';
import { type ChangeEvent, type FormEvent } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'landing-page',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [email] = useState('magarujal6@gmail.com');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your server
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      setSubmitStatus('success');
      window.location.href = `mailto:${email}?subject=New Project Inquiry&body=Name: ${formData.name}%0D%0AProject Type: ${formData.projectType}%0D%0AMessage: ${formData.message}`;
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "magarujal6@gmail.com",
      action: copyEmail,
      actionText: copied ? "Copied!" : "Copy email",
      link: "mailto:magarujal6@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/ujwalmagar/",
      actionText: "View Profile"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Check out my repos",
      link: "https://github.com/ujwal-code10/ujwal-portfolio.git",
      actionText: "View Profile"
    },
    {
      icon: MessageSquare,
      title: "Discord",
      value: "ujwal_patil",
      action: () => navigator.clipboard.writeText("ujwal_patil"),
      actionText: "Copy Username"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Let's Work Together
          </h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Fill out the form or choose your preferred way to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact Form - Takes up 3 columns */}
          <div className="lg:col-span-3 bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-navy-700">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-navy-700/50 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-navy-700/50 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1">
                  What Service Are You Looking For?
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-navy-700/50 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent"
                >
                  <option value="custom-website">Custom Website Development</option>
                  <option value="ui-design">UI/UX Design</option>
                  <option value="frontend-development">Frontend Development</option>
                  <option value="responsive-design">Responsive Design & Mobile Optimization</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Tell Me About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-navy-700/50 border border-navy-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent resize-none"
                  placeholder="Share your project goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-electric-500 to-coral-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-electric-600 hover:to-coral-600 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:ring-offset-2 focus:ring-offset-navy-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Sending...' : 'Start Your Project'}</span>
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>

          {/* Contact Methods - Takes up 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-navy-800 rounded-xl p-4 text-center hover:bg-navy-700 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-electric-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <method.icon className="w-5 h-5 text-electric-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{method.title}</h3>
                  <p className="text-xs text-gray-400 mb-2">{method.value}</p>
                  <a
                    href={method.link}
                    onClick={method.action}
                    target={method.link ? "_blank" : undefined}
                    rel={method.link ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center px-3 py-1 bg-electric-500/10 hover:bg-electric-500/20 text-electric-500 rounded-lg text-xs font-medium transition-colors duration-300"
                  >
                    {method.actionText}
                    {method.link && <Send className="w-3 h-3 ml-1" />}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-5 border border-navy-700">
              <h3 className="text-base font-semibold text-white mb-3">Why Work With Me?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-electric-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-electric-500 text-sm">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Fast Delivery</h4>
                    <p className="text-xs text-gray-400">Most projects completed in 2-7 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-coral-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-coral-500 text-sm">💎</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Quality First</h4>
                    <p className="text-xs text-gray-400">Clean code, modern design, responsive layout</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-500 text-sm">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Full Support</h4>
                    <p className="text-xs text-gray-400">Direct communication and post-launch assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Typically respond within 24 hours • Available for projects worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
