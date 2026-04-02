import React from "react";
import Section from "../Section";

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "Chandigarh University",
      period: "2020 – 2024",
      details: [
        "Focused on advanced software engineering principles and computer science fundamentals.",
        "Graduated with a strong academic foundation in Algorithms, Data Structures, and System Design.",
        "Participated in multiple technical hackathons and core engineering workshops."
      ],
    },
    {
      degree: "Class 12 (CBSE)",
      school: "New RSJ Public School, Prayagraj, Uttar Pradesh",
      period: "2020",
      details: ["Completed secondary education with a focus on Science and Mathematics."],
    },
    {
      degree: "Class 10 (CBSE)",
      school: "New RSJ Public School, Prayagraj, Uttar Pradesh",
      period: "2018",
      details: ["Completed primary education with a consistent academic track record."],
    }
  ];

  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-8">
        {educationList.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-zinc-100">{edu.school}</h3>
              <p className="text-purple-400 font-mono text-xs uppercase tracking-widest mt-2">{edu.period}</p>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-xl font-semibold text-zinc-200 mb-6">{edu.degree}</h4>
              <ul className="space-y-4 text-zinc-400">
                {edu.details.map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <span className="text-purple-500 mt-1.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="group-hover:text-zinc-300 transition-colors leading-relaxed">{item}</span>
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

export default Education;
