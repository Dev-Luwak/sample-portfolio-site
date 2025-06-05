
import React from 'react';

interface TechStackProps {
  technologies: string[];
  className?: string;
}

const TechStack = ({ technologies, className = "" }: TechStackProps) => {
  const getTechLogo = (tech: string) => {
    const logos: { [key: string]: { icon: string; color: string } } = {
      JavaScript: { icon: "🟨", color: "text-yellow-500" },
      TypeScript: { icon: "🔷", color: "text-blue-500" },
      React: { icon: "⚛️", color: "text-cyan-500" },
      "Next.js": { icon: "▲", color: "text-gray-900 dark:text-white" },
      "Node.js": { icon: "🟢", color: "text-green-500" },
      Express: { icon: "🚀", color: "text-gray-700 dark:text-gray-300" },
      MongoDB: { icon: "🍃", color: "text-green-600" },
      PostgreSQL: { icon: "🐘", color: "text-blue-600" },
      Docker: { icon: "🐳", color: "text-blue-500" },
      Git: { icon: "📂", color: "text-orange-500" },
      TailwindCSS: { icon: "🎨", color: "text-teal-500" },
      Python: { icon: "🐍", color: "text-yellow-600" },
      AWS: { icon: "☁️", color: "text-orange-500" },
      Firebase: { icon: "🔥", color: "text-yellow-500" },
      Redux: { icon: "🔄", color: "text-purple-500" },
    };
    
    return logos[tech] || { icon: "⚙️", color: "text-gray-500" };
  };

  return (
    <div className={`grid grid-cols-4 gap-6 ${className}`}>
      {technologies.map((tech, index) => {
        const logo = getTechLogo(tech);
        return (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110"
          >
            <div className={`text-4xl mb-2 ${logo.color} group-hover:scale-125 transition-transform duration-300`}>
              {logo.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
              {tech}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
