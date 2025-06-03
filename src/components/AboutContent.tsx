import { Brain, Rocket, Wrench, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  const qualities = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Enhanced Learning",
      description: "I combine traditional learning with AI tools to accelerate my growth. This modern approach helps me learn and adapt quickly to new technologies and challenges."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Smart Work Approach", 
      description: "While I'm early in my journey, I work with the mindset of a professional developer. I focus on code quality, documentation, and maintainable solutions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Future-Ready Skills",
      description: "Though I haven't worked with clients yet, I build projects as if I'm serving real users. Every feature is thoughtfully considered and thoroughly tested."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Rapid Growth Mindset",
      description: "I believe in constant improvement. Each project is an opportunity to learn something new and refine my skills further."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-12"
    >
      <motion.div 
        variants={itemVariants}
        className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            I'm Ujwal, a frontend developer focused on building fast, responsive, and user-friendly websites. 
            I blend modern technologies with a strong design sense to create clean, accessible digital experiences.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            My workflow is optimized for speed and quality, allowing me to go from idea to polished product efficiently. 
            Whether it's prototyping, refining UI, or launching a full project, I prioritize usability, performance, 
            and clarity in everything I build.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            I believe in thoughtful design, clean code, and staying ahead of the curve — constantly learning, 
            iterating, and improving.
          </p>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="grid sm:grid-cols-2 gap-6"
      >
        {qualities.map((quality, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-electric-500 to-coral-500 rounded-lg text-white mr-4">
                {quality.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900">
                {quality.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {quality.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="bg-gradient-to-br from-electric-50 via-white to-coral-50 rounded-2xl p-8 border border-gray-100 shadow-lg"
      >
        <h3 className="text-xl font-bold text-navy-900 mb-6">
          My Development Philosophy
        </h3>
        <ul className="space-y-4 max-w-3xl mx-auto">
          {[
            "Build for real users, even in practice projects",
            "Focus on clean, maintainable code from day one",
            "Embrace AI tools while understanding the fundamentals",
            "Learn from every project and iteration"
          ].map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-gray-700"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-electric-500 to-coral-500 rounded-full mr-3 flex-shrink-0"></span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent; 