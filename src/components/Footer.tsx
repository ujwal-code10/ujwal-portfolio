const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-8 sm:py-10 lg:py-12 border-t border-navy-700 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="text-center md:text-left transform transition-all duration-300 hover:scale-105 active:scale-100">
            <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-electric-400 to-coral-400 hover:from-coral-400 hover:to-electric-400 bg-clip-text text-transparent mb-2 transition-all duration-300">
              Ujwal
            </h3>
            <p className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300">
              Freelance Frontend developer & UIs<br />
              AI-Enhanced Development Solutions
            </p>
          </div>
          
          {/* Tech Stack Section */}
          <div className="text-center transform transition-all duration-300">
            <p className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300 mb-2">
              Built with AI-enhanced tools
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
              <span className="bg-navy-800 text-gray-200 px-2 py-0.5 text-xs md:text-sm rounded-full transition-all duration-300 hover:bg-navy-700 hover:text-white transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg cursor-pointer">React</span>
              <span className="bg-navy-800 text-gray-200 px-2 py-0.5 text-xs md:text-sm rounded-full transition-all duration-300 hover:bg-navy-700 hover:text-white transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg cursor-pointer">TypeScript</span>
              <span className="bg-navy-800 text-gray-200 px-2 py-0.5 text-xs md:text-sm rounded-full transition-all duration-300 hover:bg-navy-700 hover:text-white transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg cursor-pointer">Tailwind</span>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="text-center md:text-right transform transition-all duration-300 hover:scale-105 active:scale-100">
            <p className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300">
              © {currentYear} Ujwal. All rights reserved.
            </p>
            <p className="text-[10px] md:text-xs text-gray-400 hover:text-gray-200 transition-colors duration-300 mt-1">
              Powered by AI, crafted with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
