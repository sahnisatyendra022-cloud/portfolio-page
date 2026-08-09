import React from 'react';

const Projects = ({ data, onProjectClick }) => {
  if (!data) return null; // Safety check

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-white border-b-4 border-sky-500 inline-block">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((proj) => (
          <div 
            key={proj.id} 
            className="bg-[#0d1117] border border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-sky-500 transition-all"
            onClick={() => onProjectClick(proj)}
          >
            <div className="h-52 bg-slate-900">
              <img src={proj.img} alt="" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{proj.title}</h3>
              <p className="text-sky-500 text-sm mt-2">View Details →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;