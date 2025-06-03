import { Code2, Sparkles, Bug, Layout, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AIToolsSection = () => {
  const aiTools = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Smart Coding Assistant",
      description: "I leverage ChatGPT to help write cleaner code, explore better solutions, and learn best practices. It's like having a senior developer to bounce ideas off.",
      examples: [
        "Getting code suggestions and improvements",
        "Understanding complex patterns and implementations",
        "Learning modern development approaches"
      ]
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Debugging Partner",
      description: "AI helps me track down bugs faster by suggesting potential issues and solutions. This means more time spent building features, less time stuck on problems.",
      examples: [
        "Quick error resolution",
        "Code optimization suggestions",
        "Performance improvement tips"
      ]
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Design Decisions",
      description: "I use AI tools to explore different layout options and UI patterns, ensuring my projects follow modern design principles while staying unique.",
      examples: [
        "UI component suggestions",
        "Responsive design patterns",
        "Accessibility improvements"
      ]
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Content Creation",
      description: "AI assists in writing clear, engaging content for my projects. This helps me communicate ideas effectively while maintaining my personal voice.",
      examples: [
        "Project descriptions",
        "Feature explanations",
        "User documentation"
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-coral-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-navy-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center text-electric-500 mb-4">
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wider">AI-Enhanced Development</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            How I Use AI Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-500 to-coral-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            I combine AI tools with human creativity to work smarter and deliver better results.
            Here's how I leverage AI while maintaining full control over the development process.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-electric-500 to-coral-500 rounded-xl text-white mr-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900">
                  {tool.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tool.description}
              </p>
              <ul className="space-y-3">
                {tool.examples.map((example, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center text-sm text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <span className="w-1.5 h-1.5 bg-electric-500 rounded-full mr-2 flex-shrink-0"></span>
                    {example}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <span className="inline-block bg-gradient-to-r from-electric-50 to-coral-50 px-6 py-3 rounded-full text-navy-900 font-medium border border-gray-200">
            AI augments my skills — but the vision, decisions, and final code are all mine.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AIToolsSection; 