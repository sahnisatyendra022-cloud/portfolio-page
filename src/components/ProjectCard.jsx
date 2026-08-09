import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  const [imageFailed, setImageFailed] = useState(false);

  const showImage = Boolean(project.img) && !imageFailed;

  return (
    <Motion.article
      whileHover={{ y: -10 }}
      className="bg-[#0d1117] border border-[#30363d] rounded-2xl overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden bg-black">
        {showImage ? (
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width="640"
            height="360"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
          />
        ) : (
          <div className="media-placeholder px-8 text-center" role="img" aria-label={`${project.title} image unavailable`}>
            <span>{project.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-[#030a1c]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button type="button" className="bg-[#0ea5e9] text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
            View Details <ExternalLink size={16} />
          </button>
        </div>
      </div>
      <div className="p-5">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9] bg-sky-500/10 px-2 py-1 rounded">{project.category}</span>
        <h3 className="text-xl font-bold text-white mt-3 mb-1">{project.title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2">{project.desc}</p>
      </div>
    </Motion.article>
  );
};

export default ProjectCard;
