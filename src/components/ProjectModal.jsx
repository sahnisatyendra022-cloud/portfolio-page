import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { X, PlayCircle, Cpu, CheckCircle2, Layout, Info } from 'lucide-react';
import LazyYouTubeEmbed from './LazyYouTubeEmbed';

const EMPTY_IMAGES = [];

const ProjectModal = ({ project, onClose }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeVideoKey, setActiveVideoKey] = useState(null);
  const images = project?.images ?? EMPTY_IMAGES;

  useEffect(() => {
    if (images.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setCurrentImgIndex((previousIndex) => (previousIndex + 1) % images.length);
      setImageFailed(false);
      setImageLoaded(false);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [images]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const currentImage = images[currentImgIndex];

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative flex max-h-[95vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-[#30363d] bg-[#0d1117] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 z-[60] rounded-full bg-white/10 p-2 text-white shadow-xl transition-colors hover:bg-red-500/40"
          aria-label="Close project details"
        >
          <X size={28} />
        </button>

        <div className="custom-scrollbar flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-7">
              <div>
                <h2 id="project-modal-title" className="mb-2 text-4xl font-black uppercase leading-tight tracking-tighter text-white lg:text-5xl">
                  {project.title}
                </h2>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0ea5e9]">
                  {project.category} // {project.tag}
                </p>
              </div>

              <div className="relative h-[350px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#161b22] shadow-2xl lg:h-[450px]">
                {currentImage && !imageFailed ? (
                  <img
                    key={currentImage}
                    src={currentImage}
                    alt={`${project.title} visualization ${currentImgIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="960"
                    height="720"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageFailed(true)}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  />
                ) : (
                  <div className="media-placeholder absolute inset-0 p-10 text-center" role="img" aria-label={`${project.title} image unavailable`}>
                    <span>{project.title}</span>
                  </div>
                )}

                <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/75 px-4 py-2">
                  <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
                    <Layout size={12} className="text-[#0ea5e9]" /> Visualization Gallery
                  </p>
                </div>
              </div>

              <div className="space-y-8 pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-1 rounded-full bg-[#0ea5e9]" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">System Architecture & Logic</h3>
                </div>

                <div className="grid gap-4">
                  {project.detailedDesc?.map((point, index) => (
                    <div key={index} className="flex gap-4 rounded-[1.5rem] border border-white/5 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]">
                      <CheckCircle2 className="shrink-0 text-[#0ea5e9]" size={20} />
                      <p className="text-sm font-medium leading-relaxed text-gray-400">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                    <Cpu size={18} className="text-[#0ea5e9]" /> Core Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech, index) => (
                      <span key={index} className="rounded-xl border border-[#0ea5e9]/20 bg-[#0ea5e9]/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#0ea5e9]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 border-white/5 lg:col-span-5 lg:border-l lg:pl-10">
              <div className="sticky top-0 z-10 flex items-center justify-between bg-[#0d1117] pb-4">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                  <PlayCircle className="text-[#0ea5e9]" /> Demo Recordings
                </h3>
              </div>

              <div className="space-y-8 pb-10">
                {project.videoData?.map((video, index) => {
                  const videoKey = `${project.id}-${index}`;

                  return (
                    <div key={videoKey} className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-black shadow-xl transition-colors hover:border-[#0ea5e9]/40">
                      <div className="relative aspect-video">
                        <LazyYouTubeEmbed
                          video={video}
                          isActive={activeVideoKey === videoKey}
                          onPlay={() => setActiveVideoKey(videoKey)}
                        />
                      </div>

                      <div className="flex items-center justify-between border-t border-white/5 bg-[#161b22] p-5">
                        <div>
                          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white">{video.title}</p>
                          <p className="text-[9px] font-black uppercase tracking-[0.1em] text-[#0ea5e9]">{video.type}</p>
                        </div>
                        <div className="rounded-lg bg-white/5 p-2">
                          <Info size={14} className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="mt-6 rounded-[2rem] border border-[#0ea5e9]/10 bg-gradient-to-br from-[#0ea5e9]/5 to-transparent p-8">
                  <p className="text-center text-xs italic leading-relaxed text-gray-500">
                    Demonstration videos are hosted on YouTube to keep the portfolio fast and lightweight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProjectModal;
