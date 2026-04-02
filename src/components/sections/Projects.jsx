import React from "react";
import Section from "../Section";

const Projects = () => {
  const projectList = [
    {
      title: "Open Source: Swagger UI",
      description: "Contributed to Swagger UI (10k+ GitHub stars), fixing critical Node.js 20+ compatibility issues. Successfully merged PR in production release (v5.27.1).",
      tags: ["Open Source", "Node.js", "GitHub"],
      link: "https://github.com/swagger-api/swagger-ui"
    },
    {
      title: "Group Chat App",
      description: "Built real-time chat application with multiple users. Implemented messaging, user authentication, and group features focusing on smooth UI.",
      tags: ["React", "Socket.io", "Node.js"],
      link: "https://github.com/Ashutoshyadav01/Group-chat-app"
    },
    {
      title: "Reading Score Calculator",
      description: "Developed logic to calculate reading/pronunciation scores using structured data processing and performance optimization.",
      tags: ["JavaScript", "Algorithms", "Optimization"],
      link: "https://github.com/Ashutoshyadav01/Reading-score-calculated-value"
    },
    {
      title: "Opticals Website",
      description: "Built a responsive website for optical store. Designed UI and handled product display and navigation.",
      tags: ["React", "CSS", "UI/UX"],
      link: "https://github.com/Ashutoshyadav01/opticalsWebsite"
    },
    {
      title: "Grocery Online App",
      description: "Cross-platform grocery shopping app built with React Native and .NET Web API. Features OTP-based auth and secure session handling.",
      tags: ["React Native", ".NET API", "SQL"],
      link: "https://github.com/Ashutoshyadav01"
    }
  ];

  return (
    <Section id="projects" title="Projects & Contributions">
      <div className="grid md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          >
            <div className="flex flex-col gap-6 h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-purple-400">
                  <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-100">{project.title}</h3>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-500 hover:text-purple-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <p className="text-zinc-400 leading-relaxed flex-grow">{project.description}</p>
              <div className="flex gap-4 items-center">
                <ul className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <li key={tag} className="text-xs font-mono px-3 py-1 bg-zinc-800 rounded-full text-zinc-500 uppercase tracking-widest border border-zinc-700/50">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
