import { Lightbulb, GitBranch, MessageSquare } from 'lucide-react';

interface BuildStoryProps {
  projectId: 'saas-landing' | 'elevate-portfolio';
}

const buildStories = {
  'saas-landing': {
    process: [
      {
        title: "Initial Concept",
        description: "Started with a basic landing page template, but I wanted to make it more dynamic and modern. Used AI to explore current SaaS design trends and best practices."
      },
      {
        title: "Design Evolution",
        description: "Got feedback that the original design was too generic. Iterated on the color scheme and layout multiple times, using AI to generate different style combinations until I found the perfect balance."
      },
      {
        title: "Technical Challenges",
        description: "Implementing smooth animations was tricky. Studied various animation libraries and got help from AI to understand the best approaches for performance."
      }
    ],
    feedback: [
      "Original color scheme was too muted - made it more vibrant",
      "Added more interactive elements based on user engagement patterns",
      "Improved mobile responsiveness after testing on different devices"
    ],
    improvements: [
      "Optimized image loading for better performance",
      "Added smooth scroll animations",
      "Implemented better form validation",
      "Enhanced accessibility features"
    ]
  },
  'elevate-portfolio': {
    process: [
      {
        title: "Design Inspiration",
        description: "Researched modern portfolio trends and used AI to analyze what makes a portfolio stand out. Focused on creating a clean, professional look that highlights the content."
      },
      {
        title: "Component Structure",
        description: "Planned the component hierarchy carefully to make the code maintainable. Used AI to suggest best practices for React component organization."
      },
      {
        title: "Performance Focus",
        description: "Made performance a priority from the start. Implemented lazy loading and optimized animations to ensure smooth user experience."
      }
    ],
    feedback: [
      "Initial navigation was confusing - simplified the menu structure",
      "Added more visual hierarchy to project showcases",
      "Improved project description clarity based on peer feedback"
    ],
    improvements: [
      "Enhanced project filtering options",
      "Added dark mode support",
      "Improved contact form UX",
      "Added loading states for better feedback"
    ]
  }
};

const ProjectBuildStory = ({ projectId }: BuildStoryProps) => {
  const story = buildStories[projectId];

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-navy-900 mb-6">
        Behind the Build
      </h2>

      <div className="space-y-8">
        {/* Development Process */}
        <div>
          <h3 className="flex items-center text-lg font-semibold text-navy-900 mb-4">
            <LightBulb className="w-5 h-5 text-electric-500 mr-2" />
            Development Process
          </h3>
          <div className="space-y-4">
            {story.process.map((step, index) => (
              <div key={index} className="border-l-2 border-electric-200 pl-4">
                <h4 className="font-medium text-navy-900 mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback & Iterations */}
        <div>
          <h3 className="flex items-center text-lg font-semibold text-navy-900 mb-4">
            <MessageSquare className="w-5 h-5 text-electric-500 mr-2" />
            Key Feedback & Iterations
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {story.feedback.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-electric-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements Made */}
        <div>
          <h3 className="flex items-center text-lg font-semibold text-navy-900 mb-4">
            <GitBranch className="w-5 h-5 text-electric-500 mr-2" />
            Improvements Made
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {story.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-electric-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span className="text-gray-600 text-sm">{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectBuildStory; 
