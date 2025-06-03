import { Brain, Rocket, Wrench, Users } from 'lucide-react';

const AboutContent = () => {
  const qualities = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Enhanced Learning",
      description: "I combine traditional learning with AI tools to accelerate my growth. This modern approach helps me learn and adapt quickly to new technologies and challenges."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Smart Work Approach", 
      description: "While I'm early in my journey, I work with the mindset of a professional developer. I focus on code quality, documentation, and maintainable solutions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Future-Ready Skills",
      description: "Though I haven't worked with clients yet, I build projects as if I'm serving real users. Every feature is thoughtfully considered and thoroughly tested."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Rapid Growth Mindset",
      description: "I believe in constant improvement. Each project is an opportunity to learn something new and refine my skills further."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <p>
          As an emerging developer in the AI era, I bring a unique blend of traditional programming skills 
          and modern AI-enhanced development practices. I'm passionate about creating efficient, user-friendly 
          solutions while continuously expanding my technical expertise.
        </p>
        <p>
          My approach combines rapid learning through AI tools with careful attention to fundamentals. 
          While I'm at the beginning of my professional journey, I treat every project as an opportunity 
          to deliver production-quality work.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        {qualities.map((quality, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-electric-50 rounded-lg text-electric-500 mr-3">
                {quality.icon}
              </div>
              <h3 className="font-bold text-navy-900">
                {quality.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              {quality.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-electric-50 to-navy-50 rounded-2xl p-6 mt-8">
        <h3 className="text-lg font-bold text-navy-900 mb-3">
          My Development Philosophy
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-electric-500 rounded-full mr-2"></span>
            Build for real users, even in practice projects
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-electric-500 rounded-full mr-2"></span>
            Focus on clean, maintainable code from day one
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-electric-500 rounded-full mr-2"></span>
            Embrace AI tools while understanding the fundamentals
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-electric-500 rounded-full mr-2"></span>
            Learn from every project and iteration
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutContent; 