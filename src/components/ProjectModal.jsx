import React, { useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, Cpu, CheckCircle2, Layout, Info } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (project?.images?.length > 0) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
      }, 4000); 
      return () => clearInterval(interval);
    }
  }, [project]);

  if (!project) return null;

  return (
    <Motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <Motion.div 
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
        className="bg-[#0d1117] border border-[#30363d] w-full max-w-7xl max-h-[95vh] rounded-3xl overflow-hidden relative flex flex-col shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute right-6 top-6 text-white z-[60] bg-white/10 p-2 rounded-full hover:bg-red-500/40 transition-all shadow-xl"
        >
          <X size={28} />
        </button>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* LEFT COLUMN: Media Gallery & Detailed Info */}
            <div className="lg:col-span-7 space-y-10">
              {/* Header */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-2">
                  {project.title}
                </h2>
                <p className="text-[#0ea5e9] font-black text-xs uppercase tracking-[0.2em]">
                  {project.category} // {project.tag}
                </p>
              </div>

              {/* Automatic Image Slider (Top Left) */}
              <div className="relative h-[350px] lg:h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#161b22] shadow-2xl">
                {project.images?.length > 0 ? (
                  <AnimatePresence mode="wait">
                    <Motion.img
                      key={currentImgIndex}
                      src={project.images[currentImgIndex]}
                      alt={`${project.title} visualization`}
                      loading="lazy"
                      decoding="async"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0d2238] to-[#030a1c] p-10 text-center">
                    <span className="text-[#0ea5e9] text-3xl font-black uppercase tracking-wider">Delta Robot Control Platform</span>
                  </div>
                )}
                
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Layout size={12} className="text-[#0ea5e9]" /> Visualization Gallery
                  </p>
                </div>
              </div>

              {/* Description & Implementation Details (Bottom Left) */}
              <div className="space-y-8 pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-1 bg-[#0ea5e9] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight">System Architecture & Logic</h3>
                </div>
                
                <div className="grid gap-4">
                  {project.detailedDesc?.map((point, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all">
                      <CheckCircle2 className="text-[#0ea5e9] shrink-0" size={20} />
                      <p className="text-gray-400 text-sm leading-relaxed font-medium">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack (Directly below description) */}
                <div className="pt-6 space-y-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-widest text-sm">
                    <Cpu size={18} className="text-[#0ea5e9]" /> Core Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] rounded-xl text-[10px] font-extrabold uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Full Video Demo Section (Top to Bottom) */}
            <div className="lg:col-span-5 border-l border-white/5 lg:pl-10 space-y-6">
              <div className="flex items-center justify-between sticky top-0 bg-[#0d1117] z-10 pb-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <PlayCircle className="text-[#0ea5e9]" /> Demo Recordings
                </h3>
              </div>
              
              <div className="space-y-8 pb-10">
                {project.videoData?.map((vid, i) => (
                  <div key={i} className="group relative rounded-[2rem] border border-white/5 overflow-hidden bg-black transition-all hover:border-[#0ea5e9]/40 shadow-xl">
                    <div className="aspect-video relative">
                      {vid.url.includes('youtube') ? (
                        <iframe 
                          className="w-full h-full" 
                          src={`${vid.url.replace("watch?v=", "embed/")}?modestbranding=1&rel=0&controls=1&showinfo=0&iv_load_policy=3`} 
                          title={vid.title}
                          loading="lazy"
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <video controls className="w-full h-full object-cover">
                          <source src={vid.url} type="video/mp4" />
                        </video>
                      )}
                    </div>

                    <div className="p-5 bg-[#161b22] border-t border-white/5 flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">{vid.title}</p>
                        <p className="text-[#0ea5e9] text-[9px] font-black uppercase tracking-[0.1em]">{vid.type}</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg">
                        <Info size={14} className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Status Box */}
                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#0ea5e9]/5 to-transparent border border-[#0ea5e9]/10 mt-6">
                  <p className="text-xs text-gray-500 italic leading-relaxed text-center">
                    Demonstration videos are hosted on YouTube to keep the portfolio fast and lightweight.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default ProjectModal;
