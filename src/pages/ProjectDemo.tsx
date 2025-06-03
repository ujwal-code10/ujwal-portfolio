import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const projects = {
  'portfolio-website': {
    title: "Portfolio Website",
    demoUrl: "https://elevate-personal-page.vercel.app"
  },
  'saas-landing': {
    title: "SaaS Landing Page",
    demoUrl: "https://saas-project-landing-page-pi.vercel.app/"
  }
};

const ProjectDemo = () => {
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
    <div className="h-screen w-screen flex flex-col bg-white">
      {/* Fixed header */}
      <div className="h-12 bg-white border-b shadow-sm px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <Link
          to={`/project/${projectId}`}
          className="inline-flex items-center text-electric-600 hover:text-electric-700"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to Project
        </Link>
        <h1 className="text-lg font-semibold text-navy-900">{project.title} Demo</h1>
        <div className="w-24"></div> {/* Spacer for centering */}
      </div>
      
      {/* Iframe container with offset for header */}
      <div className="flex-1 mt-12">
        <iframe
          src={project.demoUrl}
          title={`${project.title} Demo`}
          className="w-full h-full border-0"
          style={{
            height: 'calc(100vh - 48px)', // Subtracting header height
            width: '100vw',
            display: 'block'
          }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default ProjectDemo; 