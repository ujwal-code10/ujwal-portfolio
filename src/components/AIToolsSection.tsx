import { Code2, Sparkles, Bug, Layout, Lightbulb, Zap } from 'lucide-react';

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

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center text-electric-500 mb-4">
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wider">AI-Enhanced Development</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 mb-4 lg:mb-6">
            How I Use AI Tools
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            I combine AI tools with human creativity to work smarter and deliver better results.
            Here's how I leverage AI while maintaining full control over the development process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {aiTools.map((tool, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-electric-50 rounded-lg text-electric-500 mr-4">
                  {tool.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900">
                  {tool.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {tool.description}
              </p>
              <ul className="space-y-2">
                {tool.examples.map((example, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <Lightbulb className="w-4 h-4 text-electric-500 mr-2 flex-shrink-0" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-block bg-navy-50 rounded-full px-6 py-2 text-sm text-navy-700">
            AI augments my skills — but the vision, decisions, and final code are all mine.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection; 