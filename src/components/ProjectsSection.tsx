
import { ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work using AI-enhanced development to create modern, 
            responsive websites that deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Featured Project */}
          <div className="lg:col-span-2 animate-scale-in">
            <div className="bg-gradient-to-br from-navy-50 to-electric-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-electric-400 to-coral-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold">Elevate – Personal Portfolio</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Completed
                  </span>
                  <a
                    href="https://elevate-personal-page.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-500 hover:text-electric-600 text-sm font-medium"
                  >
                    Visit Live
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Responsive Portfolio Landing Page
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A modern and responsive personal portfolio landing page built to showcase a freelancer's work, skills, and contact details. Designed with a clean layout, smooth animations, and optimized for all devices.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-electric-100 text-electric-800 text-sm px-3 py-1 rounded-full">React</span>
                  <span className="bg-electric-100 text-electric-800 text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
                  <span className="bg-electric-100 text-electric-800 text-sm px-3 py-1 rounded-full">JavaScript</span>
                  <span className="bg-coral-100 text-coral-800 text-sm px-3 py-1 rounded-full">Responsive Design</span>
                </div>
                <a
                  href="https://elevate-personal-page.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-electric-600 font-semibold hover:text-electric-700 transition-colors"
                >
                  View Project <ChevronRight size={20} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Coming Soon Projects */}
          {[
            {
              title: "Restaurant Landing Page",
              description: "Modern, responsive landing page for a local restaurant with online ordering system.",
              tech: ["React", "Animations", "Mobile-First"]
            },
            {
              title: "Portfolio Website",
              description: "Creative portfolio site for a photographer with gallery and booking system.",
              tech: ["Next.js", "Image Optimization", "CMS"]
            },
            {
              title: "SaaS Dashboard",
              description: "Analytics dashboard for a startup with real-time data visualization.",
              tech: ["React", "Charts", "API Integration"]
            }
          ].map((project, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-electric-200 transition-all duration-300 hover:shadow-lg group">
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-4xl opacity-50">🚧</div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-electric-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
