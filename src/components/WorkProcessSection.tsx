
import { MessageSquare, Palette, Eye, Rocket } from 'lucide-react';

const WorkProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "You send me the project details",
      description: "Share your vision, requirements, and any inspiration. I'll ask clarifying questions to understand exactly what you need.",
      icon: MessageSquare,
      color: "from-electric-400 to-electric-600"
    },
    {
      number: "2", 
      title: "I design and build it using AI tools",
      description: "Using Lovable, Tailwind CSS, and modern React tools, I create your website with precision and speed.",
      icon: Palette,
      color: "from-coral-400 to-coral-600"
    },
    {
      number: "3",
      title: "You receive a preview and 1 revision",
      description: "I'll send you a live preview link. You can request one round of changes to ensure it's perfect.",
      icon: Eye,
      color: "from-electric-500 to-coral-500"
    },
    {
      number: "4",
      title: "Final delivery in 2–7 days",
      description: "Get your completed website with all files, deployment instructions, and ongoing support.",
      icon: Rocket,
      color: "from-navy-500 to-electric-500"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            How I Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined process that combines AI efficiency with personal attention 
            to deliver exceptional results quickly.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-electric-200 via-coral-200 to-electric-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative">
                  {/* Step number */}
                  <div className={`absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <step.icon size={32} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-navy-50 to-electric-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Why This Process Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold text-navy-800 mb-2">Speed</h4>
                <p className="text-gray-600">AI tools accelerate development without sacrificing quality</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-navy-800 mb-2">Precision</h4>
                <p className="text-gray-600">Clear communication ensures we get it right the first time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-navy-800 mb-2">Collaboration</h4>
                <p className="text-gray-600">You're involved every step of the way</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
