import React from "react";
import Section from "../Section";

const Experience = () => {
  const experiences = [
    {
      company: "Confidential Company",
      position: "Associate Software Engineer",
      period: "Feb 2025 – Present",
      isConfidential: true,
      description: [
        "Built real-time pronunciation system using Azure Speech",
        "Improved performance and reduced cost by 30%",
        "Developed EPUB reader with synced audio",
        "Built S3-based recording system"
      ],
    },
    {
      company: "Abha Technologies",
      position: "Software Engineer",
      period: "Aug 2024 – Jan 2025",
      description: [
        "Developed APIs using Node.js and SQL",
        "Implemented authentication systems",
        "Optimized API response times"
      ],
    },
    {
      company: "Intenpixel",
      position: "Software Engineer",
      period: "Mar 2024 – Aug 2024",
      description: [
        "Worked on scalable frontend applications using React",
        "Built reusable UI components and optimized rendering performance",
        "Collaborated with backend team for API integration"
      ],
    },
    {
      company: "Freelance",
      position: "Intern / Junior Developer",
      period: "Early 2024",
      description: [
        "Assisted in building web applications",
        "Learned production-level debugging and deployment",
        "Worked with REST APIs and frontend integration"
      ],
    }
  ];

  return (
    <Section id="experience" title="Work Experience">
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 group transition-all duration-300 hover:translate-x-2">
            <div className="md:w-1/3">
              <h3 className={`text-2xl font-bold text-zinc-100 transition-all duration-500 ${
                exp.isConfidential 
                  ? "blur-[4px] group-hover:blur-[1px] cursor-help select-none" 
                  : "group-hover:text-purple-400"
              }`}>
                {exp.company}
              </h3>
              <p className="text-purple-400 font-mono text-xs uppercase tracking-[0.2em] mt-1 bg-purple-900/10 px-3 py-1 rounded w-fit">
                {exp.period}
              </p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-lg font-semibold text-zinc-300 mb-6">{exp.position}</h4>
              <ul className="space-y-4 text-zinc-400">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-4 group/item">
                    <span className="text-purple-500 mt-1.5 shrink-0 group-hover/item:scale-110 transition-transform">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                       </svg>
                    </span>
                    <span className="group-hover/item:text-zinc-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
