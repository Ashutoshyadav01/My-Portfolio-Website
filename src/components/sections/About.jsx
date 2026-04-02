import React from "react";
import Section from "../Section";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React.js (Advanced)", "React Native", "Tailwind CSS", "HTML5, CSS3", "Responsive UI Design"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "REST API Development", "Authentication Systems"]
    },
    {
      category: "Database & Optimization",
      items: ["SQL (Advanced Queries)", "Query Optimization", "Data Handling & Performance"]
    },
    {
      category: "Core Concepts",
      items: ["System Design", "API Architecture", "Performance Optimization", "Problem Solving", "Clean Code Practices"]
    }
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="text-zinc-400 space-y-6 text-lg leading-relaxed">
          <p>
            Full-Stack Engineer with 2 years of experience building scalable web applications and real-time systems. 
            I specialize in designing efficient APIs, optimizing performance, and creating seamless user experiences.
          </p>
          <p>
            I enjoy solving complex problems and transforming ideas into real-world applications. 
            My focus is on writing clean, maintainable code while ensuring high performance and scalability.
          </p>
          <p>
            I am constantly learning and adapting to new technologies to stay ahead in the evolving tech landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-fit">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-purple-400 font-bold text-sm uppercase tracking-widest bg-purple-900/10 px-3 py-1 rounded w-fit">
                {skillGroup.category}
              </h4>
              <ul className="space-y-2 text-zinc-300 font-mono text-sm">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-default">
                    <span className="text-purple-500">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
