import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      id: "portfolio-website",
      src: "/laptop.jpg",
      title: "Portfolio Website",
      description: "Modern portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and optimized performance.",
      tech: ["React", "Tailwind", "Framer Motion"],
      live: true,
      imageAlt: "Portfolio Website Screenshot"
    },
    {
      id: "saas-landing",
      src: "/saas.jpg",
      title: "SaaS Landing Page",
      description: "Responsive and modern landing page for a project management SaaS product. Features clean layout and strong CTA focus.",
      tech: ["React", "Tailwind", "Responsive"],
      live: true,
      imageAlt: "SaaS Landing Page Screenshot"
    },
    {
      id: "task-manager",
      title: "Task Management App",
      description: "A clean and intuitive task management application with real-time updates and collaborative features.",
      tech: ["React", "TypeScript", "Firebase"],
      live: false,
      imageAlt: "Task Manager App Preview"
    }
  ];

  return (
    <section id="projects" className="py-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2472] mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#0066FF] mx-auto mb-4"></div>
          <p className="text-base lg:text-lg text-[#0A2472] max-w-2xl mx-auto">
            A showcase of my work using modern development practices to create 
            responsive websites that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-40 sm:h-48 relative overflow-hidden">
                  {project.src ? (
                    <img
                      src={project.src}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A2472]/5 to-[#0066FF]/5 flex items-center justify-center">
                      <div className="text-4xl">🚀</div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#0066FF]/10 text-[#0066FF] text-xs font-medium px-2.5 py-1 rounded-full">
                      {project.live ? 'Live Project' : 'Coming Soon'}
                    </span>
                    {project.live && (
                      <Link
                        to={`/project/${project.id}/demo`}
                        className="text-[#0066FF] hover:text-[#0052CC] text-sm font-medium"
                      >
                        View Live
                      </Link>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2472] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#0A2472] text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-[#0066FF]/5 text-[#0A2472] text-xs px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.live && project.id && (
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center text-[#0066FF] text-sm font-semibold hover:text-[#0052CC] transition-colors"
                    >
                      View Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
