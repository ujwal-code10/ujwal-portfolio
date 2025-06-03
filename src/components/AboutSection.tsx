import AboutContent from './AboutContent';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-gray-50 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 mb-6 lg:mb-8">
              About Me
            </h2>
            <AboutContent />
          </div>
          
          <div className="lg:ml-auto">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-electric-600 mb-1 lg:mb-2">Fast</div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">AI-accelerated development</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-coral-500 mb-1 lg:mb-2">Modern</div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">Latest tech & trends</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-electric-600 mb-1 lg:mb-2">Quality</div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">No compromise on standards</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-coral-500 mb-1 lg:mb-2">Original</div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">Unique, custom solutions</p>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-12">
              <div className="bg-gradient-to-br from-electric-100 to-coral-100 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-electric-500 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-lg">
                      AI
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 text-xs sm:text-sm lg:text-base">AI-Enhanced Tools</h3>
                      <p className="text-gray-600 text-xs lg:text-sm">Lovable, Bolt, V0, ChatGPT</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-coral-500 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-lg">
                      💻
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 text-xs sm:text-sm lg:text-base">Tech Stack</h3>
                      <p className="text-gray-600 text-xs lg:text-sm">React, TypeScript, Tailwind CSS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-navy-600 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-lg">
                      🎨
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 text-xs sm:text-sm lg:text-base">Design Focus</h3>
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
