import AboutContent from './AboutContent';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Modern Development",
      description: "React, TypeScript, and modern web technologies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Enhanced",
      description: "Leveraging AI tools for smarter development"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Focused",
      description: "Clean, responsive, and user-friendly interfaces"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-500 to-coral-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutContent />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-electric-500 to-coral-500 rounded-lg text-white">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
