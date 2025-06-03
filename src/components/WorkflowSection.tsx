
const WorkflowSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We discuss your vision, goals, and requirements. I analyze your needs and create a project roadmap using AI-assisted planning tools.",
      tools: ["Initial consultation", "Requirement analysis", "Project scope"]
    },
    {
      number: "02", 
      title: "AI-Enhanced Design",
      description: "Using tools like V0 and Lovable, I rapidly prototype and iterate on designs, ensuring we get the perfect look and feel quickly.",
      tools: ["V0 for rapid prototyping", "Design iterations", "Real-time feedback"]
    },
    {
      number: "03",
      title: "Smart Development", 
      description: "I leverage Bolt, Lovable, and other AI tools to write clean, efficient code while maintaining full control over quality and customization.",
      tools: ["Lovable for UI development", "Bolt for rapid coding", "Quality assurance"]
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Thorough testing across devices and browsers, followed by deployment and handover with full documentation and support.",
      tools: ["Cross-browser testing", "Mobile optimization", "Performance optimization"]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 mb-4 lg:mb-6">
            How I Work
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            My AI-enhanced workflow ensures faster delivery without compromising on quality. 
            Here's how I turn your vision into reality.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-electric-400 to-coral-400 rounded-full"></div>
          
          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 animate-fade-in-up ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex-1 lg:max-w-md">
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-6' : 'lg:text-left lg:pl-6'}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-electric-500 to-coral-500 text-white text-lg sm:text-xl font-bold rounded-xl lg:rounded-2xl mb-4 lg:mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-navy-900 mb-3 lg:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                      {step.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="bg-navy-100 text-navy-700 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 lg:mx-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white border-4 border-electric-400 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-electric-500 to-coral-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex-1 lg:max-w-md">
                  <div className={`bg-gradient-to-br ${
                    index % 2 === 0 
                      ? 'from-electric-50 to-navy-50 lg:ml-6' 
                      : 'from-coral-50 to-electric-50 lg:mr-6'
                  } rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg`}>
                    <div className="space-y-3 lg:space-y-4">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">AI-Powered Process</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-electric-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">Human Creativity</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-coral-400 rounded-full"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">Quality Assurance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 lg:mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 lg:mb-6">
              Ready to experience AI-enhanced development?
            </h3>
            <p className="text-navy-200 text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how modern tools can bring your vision to life 
              faster than traditional development methods.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-electric-500 to-coral-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Start Your Project
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
