
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900 mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-base lg:text-lg text-gray-700 leading-relaxed">
              <p>
                I'm a passionate beginner developer who believes in working smarter, not harder. 
                By leveraging cutting-edge AI tools and modern development practices, I create 
                exceptional web experiences that stand out in today's digital landscape.
              </p>
              <p>
                My approach combines traditional web development skills with AI-enhanced tools 
                like <span className="font-semibold text-electric-600">Lovable</span>, 
                <span className="font-semibold text-electric-600"> Bolt</span>, and 
                <span className="font-semibold text-electric-600"> V0</span> to accelerate 
                development without sacrificing creativity or quality.
              </p>
              <p>
                <span className="font-semibold text-navy-800">AI doesn't replace creativity—it amplifies it.</span> 
                I use these tools to focus on what matters most: understanding your vision and 
                delivering results that exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-electric-600 mb-2">Fast</div>
                <p className="text-sm lg:text-base text-gray-600">AI-accelerated development</p>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-coral-500 mb-2">Modern</div>
                <p className="text-sm lg:text-base text-gray-600">Latest tech & trends</p>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-electric-600 mb-2">Quality</div>
                <p className="text-sm lg:text-base text-gray-600">No compromise on standards</p>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-coral-500 mb-2">Original</div>
                <p className="text-sm lg:text-base text-gray-600">Unique, custom solutions</p>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-100 to-coral-100 rounded-3xl p-6 lg:p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-electric-500 rounded-xl flex items-center justify-center text-white font-bold text-sm lg:text-lg">
                      AI
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 text-sm lg:text-base">AI-Enhanced Tools</h3>
                      <p className="text-gray-600 text-xs lg:text-sm">Lovable, Bolt, V0, ChatGPT</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-coral-500 rounded-xl flex items-center justify-center text-white font-bold text-sm lg:text-lg">
                      💻
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 text-sm lg:text-base">Tech Stack</h3>
                      <p className="text-gray-600 text-xs lg:text-sm">React, TypeScript, Tailwind CSS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-navy-600 rounded-xl flex items-center justify-center text-white font-bold text-sm lg:text-lg">
                      🎨
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 text-sm lg:text-base">Design Focus</h3>
                      <p className="text-gray-600 text-xs lg:text-sm">Modern, responsive, user-friendly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
