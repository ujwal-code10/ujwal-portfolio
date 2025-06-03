import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const projects = {
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
      "saas.jpg",
      // Add more image URLs
    ],
    demoUrl: "https://saas-project-landing-page-pi.vercel.app/",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "Modern UI/UX",
      "Cross-browser Compatibility",
      "SEO Best Practices"
    ]
  },
  'elevate-portfolio': {
    title: "Personal Portfolio Page",
    description: "Modern responsive portfolio landing page with clean animations and optimized design for all devices.",
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
    tech: ["React", "Tailwind", "Responsive"],
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop&crop=top",
      // Add more image URLs
    ],
    demoUrl: "https://elevate-personal-page.vercel.app",
    features: [
      "Modern Design",
      "Smooth Animations",
      "Responsive Layout",
      "Performance Optimized",
      "Contact Integration"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <Link
          to="/#projects"
          className="inline-flex items-center text-electric-600 hover:text-electric-700 mb-8"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to Projects
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 sm:h-72 lg:h-96 relative">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-electric-100 text-electric-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              {project.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-navy-900 mb-4">Key Features</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-electric-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-electric-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-electric-700 transition-colors"
              >
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 