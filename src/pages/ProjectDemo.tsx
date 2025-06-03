import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const projects = {
  'saas-landing': {
    title: "SaaS Landing Page",
    demoUrl: "https://saas-project-landing-page-pi.vercel.app/"
  },
  'elevate-portfolio': {
    title: "Personal Portfolio Page",
    demoUrl: "https://elevate-personal-page.vercel.app"
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
    <div className="min-h-screen flex flex-col">
      <div className="bg-white border-b shadow-sm py-2 px-4 flex items-center justify-between">
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
      
      <div className="flex-1">
        <iframe
          src={project.demoUrl}
          title={`${project.title} Demo`}
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
};

export default ProjectDemo; 