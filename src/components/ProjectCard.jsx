import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => (
  <Motion.div 
    whileHover={{ y: -10 }}
    className="bg-[#0d1117] border border-[#30363d] rounded-2xl overflow-hidden group cursor-pointer"
    onClick={onClick}
  >
    <div className="h-48 relative overflow-hidden bg-black">
      {project.img ? (
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0d2238] to-[#030a1c] px-8 text-center">
          <span className="text-[#0ea5e9] text-xl font-black uppercase tracking-wider">Delta Robot System</span>
        </div>
      )}
      <div className="absolute inset-0 bg-[#030a1c]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-[#0ea5e9] text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
          View Details <ExternalLink size={16} />
        </button>
      </div>
    </div>
    <div className="p-5">
      <span className="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9] bg-sky-500/10 px-2 py-1 rounded">{project.category}</span>
      <h3 className="text-xl font-bold text-white mt-3 mb-1">{project.title}</h3>
      <p className="text-gray-500 text-sm line-clamp-2">{project.desc}</p>
    </div>
  </Motion.div>
);

export default ProjectCard;
