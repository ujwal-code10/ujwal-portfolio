
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-electric-400 to-coral-400 bg-clip-text text-transparent mb-2">
              Ujwal
            </h3>
            <p className="text-gray-300">
              Freelance Web Designer & Developer<br />
              AI-Enhanced Development Solutions
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-2">
              Built with AI-enhanced tools
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <span className="bg-navy-800 text-gray-200 px-3 py-1 rounded-full">React</span>
              <span className="bg-navy-800 text-gray-200 px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-navy-800 text-gray-200 px-3 py-1 rounded-full">Tailwind</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300">
              © {currentYear} Ujwal. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Powered by AI, crafted with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
