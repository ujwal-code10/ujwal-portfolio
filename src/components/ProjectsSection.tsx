import { ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      <img 
        src="saas.jpg"
      title: "SaaS Landing Page",
      description: "Responsive and modern landing page for a fictional project management SaaS product. Features clean layout, CTA focus, and built with Tailwind and React.",
      href: "https://saas-project-landing-page-pi.vercel.app/",
      tech: ["React", "Tailwind", "Responsive"],
      live: true
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio site for a photographer with gallery and booking system.",
      tech: ["Next.js", "Image Optimization", "CMS"],
      live: false
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for a startup with real-time data visualization.",
      tech: ["React", "Charts", "API Integration"],
      live: false
    }
  ];

  return (
    <section id="projects" className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 mb-4 lg:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work using AI-enhanced development to create modern, 
            responsive websites that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Live Project Example */}
          <div className="animate-scale-in">
            <div className="bg-gradient-to-br from-navy-50 to-electric-50 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              <div className="h-32 sm:h-36 lg:h-40 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop&crop=top"
                  alt="Elevate Portfolio Homepage Screenshot"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                    Completed
                  </span>
                  <a
                    href="https://elevate-personal-page.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-500 hover:text-electric-600 text-xs sm:text-sm font-medium"
                  >
                    Visit Live
                  </a>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-navy-900 mb-3 lg:mb-4">
                  Personal Portfolio Page
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">
                  Modern responsive portfolio landing page with clean animations and optimized design for all devices.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 lg:mb-6">
                  <span className="bg-electric-100 text-electric-800 text-xs px-2 sm:px-3 py-1 rounded-full">React</span>
                  <span className="bg-electric-100 text-electric-800 text-xs px-2 sm:px-3 py-1 rounded-full">Tailwind</span>
                  <span className="bg-coral-100 text-coral-800 text-xs px-2 sm:px-3 py-1 rounded-full">Responsive</span>
                </div>
                <a
                  href="https://elevate-personal-page.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-electric-600 font-semibold hover:text-electric-700 transition-colors text-sm sm:text-base"
                >
                  View Project <ChevronRight size={16} className="ml-1 sm:ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Coming Soon / Additional Projects */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.2 * (index + 2)}s` }}
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-electric-200 transition-all duration-300 hover:shadow-lg group h-full">
                <div className="h-32 sm:h-36 lg:h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl lg:rounded-2xl mb-4 lg:mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-2xl sm:text-3xl lg:text-4xl opacity-50">🚧</div>
                  {!project.live && (
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-navy-900 mb-2 lg:mb-3 group-hover:text-electric-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 lg:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.live && project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-electric-600 font-semibold hover:text-electric-700 transition-colors text-sm sm:text-base"
                  >
                    View Project <ChevronRight size={16} className="ml-1 sm:ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
