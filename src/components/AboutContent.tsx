import { motion } from 'framer-motion';
import { Brain, Rocket, Wrench, Users } from 'lucide-react';

const AboutContent = () => {
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

  const cardVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-32"
      >
        <h2 className="text-6xl font-bold text-[#0A2472] text-center mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-[#0066FF] mx-auto mb-24"></div>
        <motion.p variants={itemVariants} className="text-lg text-[#0A2472] max-w-4xl mx-auto text-center leading-relaxed">
          I'm a web developer passionate about turning ideas into clean, modern websites. 
          I specialize in building responsive UIs using React and Tailwind, with a strong 
          focus on user experience and quality. I move fast, adapt to new tools, and enjoy 
          solving real-world problems with simple, effective solutions.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div 
            variants={itemVariants} 
            initial="initial"
            whileHover="hover"
            className="bg-gray-50 rounded-2xl p-8 cursor-pointer transition-colors hover:bg-white"
          >
            <motion.div variants={cardVariants} className="h-full">
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  variants={iconVariants}
                  className="bg-[#0066FF] p-4 rounded-xl"
                >
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#0A2472]">AI-Enhanced Learning</h3>
              </div>
              <p className="text-[#0A2472] transition-all duration-300 group-hover:text-[#0066FF]">
                I combine traditional learning with AI tools to accelerate my growth. 
                This modern approach helps me learn and adapt quickly to new technologies and challenges.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="initial"
            whileHover="hover"
            className="bg-gray-50 rounded-2xl p-8 cursor-pointer transition-colors hover:bg-white"
          >
            <motion.div variants={cardVariants} className="h-full">
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  variants={iconVariants}
                  className="bg-[#0066FF] p-4 rounded-xl"
                >
                  <Users className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#0A2472]">Future-Ready Skills</h3>
              </div>
              <p className="text-[#0A2472] transition-all duration-300 group-hover:text-[#0066FF]">
                Though I haven't worked with clients yet, I build projects as if I'm serving real users. 
                Every feature is thoughtfully considered and thoroughly tested.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div 
            variants={itemVariants}
            initial="initial"
            whileHover="hover"
            className="bg-gray-50 rounded-2xl p-8 cursor-pointer transition-colors hover:bg-white"
          >
            <motion.div variants={cardVariants} className="h-full">
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  variants={iconVariants}
                  className="bg-[#0066FF] p-4 rounded-xl"
                >
                  <Wrench className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#0A2472]">Smart Work Approach</h3>
              </div>
              <p className="text-[#0A2472] transition-all duration-300 group-hover:text-[#0066FF]">
                While I'm early in my journey, I work with the mindset of a professional developer. 
                I focus on code quality, documentation, and maintainable solutions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="initial"
            whileHover="hover"
            className="bg-gray-50 rounded-2xl p-8 cursor-pointer transition-colors hover:bg-white"
          >
            <motion.div variants={cardVariants} className="h-full">
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  variants={iconVariants}
                  className="bg-[#0066FF] p-4 rounded-xl"
                >
                  <Rocket className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#0A2472]">Rapid Growth Mindset</h3>
              </div>
              <p className="text-[#0A2472] transition-all duration-300 group-hover:text-[#0066FF]">
                I believe in constant improvement. Each project is an opportunity to learn 
                something new and refine my skills further.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent; 