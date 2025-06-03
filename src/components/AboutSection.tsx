import AboutContent from './AboutContent';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-500 to-coral-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <AboutContent />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
