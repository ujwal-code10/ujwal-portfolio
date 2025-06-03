import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProjectBuildStory from '../components/ProjectBuildStory';

const projects = {
  'portfolio-website': {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and optimized performance.",
    fullDescription: `
      A modern and elegant portfolio website designed to showcase professional work and achievements. 
      The site features smooth animations, optimized performance, and a clean, professional layout 
      that effectively presents content across all devices.

      Key Features:
      • Clean and modern design
      • Smooth scroll animations
      • Optimized image loading
      • Contact form integration
      • Responsive layout
    `,
    tech: ["React", "Tailwind", "Framer Motion"],
    images: [
      "/laptop.jpg",
    ],
    demoUrl: "https://elevate-personal-page.vercel.app",
    features: [
      "Modern Design",
      "Smooth Animations",
      "Responsive Layout",
      "Performance Optimized",
      "Contact Integration"
    ]
  },
  'saas-landing': {
    title: "SaaS Landing Page",
    description: "Responsive and modern landing page for a fictional project management SaaS product. Features clean layout, CTA focus, and built with Tailwind and React.",
    fullDescription: `
      This project showcases a modern SaaS landing page with a focus on user experience and conversion optimization. 
      The page features a clean, professional design that effectively communicates the product's value proposition 
      while maintaining excellent performance and accessibility standards.

      Key Features:
      • Responsive design that works flawlessly across all devices
      • Optimized performance with lazy-loaded images and components
      • Interactive elements with smooth animations
      • Clear call-to-action sections
      • Modern tech stack using React and Tailwind CSS
    `,
    tech: ["React", "Tailwind", "Responsive"],
    images: [
      "/saas.jpg",
    ],
    demoUrl: "https://saas-project-landing-page-pi.vercel.app/",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "Modern UI/UX",
      "Cross-browser Compatibility",
      "SEO Best Practices"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/" className="text-electric-600 hover:text-electric-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/project/${projectId}/demo`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/#projects"
          className="inline-flex items-center text-electric-600 hover:text-electric-700 mb-6"
        >
          <ChevronLeft size={18} className="mr-1" />
          Back to Projects
        </Link>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="h-48 sm:h-56 lg:h-64 relative">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-electric-100 text-electric-800 px-2 py-0.5 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-sm max-w-none mb-6">
              {project.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-3 text-gray-600 text-sm">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-bold text-navy-900 mb-3">Key Features</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-electric-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleDemoClick}
              className="inline-block bg-electric-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-electric-700 transition-colors"
            >
              View Live Demo
            </button>
          </div>
        </div>

        {/* Add ProjectBuildStory component */}
        <ProjectBuildStory projectId={projectId as 'saas-landing' | 'portfolio-website'} />
      </div>
    </div>
  );
};

export default ProjectDetail; 