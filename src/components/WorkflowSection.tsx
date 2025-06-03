import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkflowSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We discuss your vision, goals, and requirements. I analyze your needs and create a project roadmap using AI-assisted planning tools.",
      tools: ["Initial consultation", "Requirement analysis", "Project scope"],
      icon: "🎯"
    },
    {
      number: "02", 
      title: "AI-Enhanced Design",
      description: "Using tools like V0 and Lovable, I rapidly prototype and iterate on designs, ensuring we get the perfect look and feel quickly.",
      tools: ["V0 for rapid prototyping", "Design iterations", "Real-time feedback"],
      icon: "🎨"
    },
    {
      number: "03",
      title: "Smart Development", 
      description: "I leverage Bolt, Lovable, and other AI tools to write clean, efficient code while maintaining full control over quality and customization.",
      tools: ["Lovable for UI development", "Bolt for rapid coding", "Quality assurance"],
      icon: "💻"
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Thorough testing across devices and browsers, followed by deployment and handover with full documentation and support.",
      tools: ["Cross-browser testing", "Mobile optimization", "Performance optimization"],
      icon: "🚀"
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-500 via-purple-500 to-coral-500 mb-6">
            How I Work
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            My AI-enhanced workflow ensures faster delivery without compromising on quality. 
            Here's how I turn your vision into reality.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            <div className="h-full w-full bg-gradient-to-b from-electric-400 via-purple-400 to-coral-400 rounded-full blur-sm"></div>
          </div>
          
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:max-w-xl">
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white shadow-xl rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-electric-500 to-coral-500 text-white text-xl font-bold rounded-xl mb-4 transform -rotate-12">
                      {step.number}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {step.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="bg-white shadow-md text-navy-700 px-4 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-transform duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-500 via-purple-500 to-coral-500 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-electric-500 to-coral-500 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-12 lg:p-16 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to experience AI-enhanced development?
              </h3>
              <p className="text-lg text-navy-200 mb-8">
                Let's discuss your project and see how modern tools can bring your vision to life 
                faster than traditional development methods.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-electric-500 via-purple-500 to-coral-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:brightness-110"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
