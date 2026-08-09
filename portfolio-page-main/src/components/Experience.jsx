import React from 'react';

const Experience = ({ data }) => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 inline-block border-b-4 border-sky-500 pb-2">
        Professional Experience
      </h2>
      <div className="space-y-12">
        {data.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-slate-800">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-sky-500 rounded-full border-4 border-[#010409]"></div>
            
            <div className="mb-1">
              <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
              <p className="text-sky-500 font-bold">{exp.role}</p>
              <span className="text-slate-500 text-sm">{exp.period}</span>
            </div>
            
            <ul className="mt-4 space-y-2">
              {exp.tasks.map((task, i) => (
                <li key={i} className="text-slate-400 flex gap-2">
                  <span className="text-sky-500">▹</span> {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;