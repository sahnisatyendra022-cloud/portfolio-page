import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Cpu, Info, PlayCircle, X } from 'lucide-react';
import LazyYouTubeEmbed from './LazyYouTubeEmbed';

const EMPTY_IMAGES = [];

function DeltaArchitecture() {
  return (
    <div className="architecture-flow" aria-label="Delta robot system architecture">
      <div className="architecture-main-flow">
        {['Camera / Vision', 'PC SDK', 'Teensy 4.1', 'Three AC Servo Drives', 'Delta Robot'].map((label, index, nodes) => (
          <React.Fragment key={label}>
            <div className="architecture-node">{label}</div>
            {index < nodes.length - 1 && <div className="architecture-arrow" aria-hidden="true">→</div>}
          </React.Fragment>
        ))}
      </div>
      <div className="architecture-branches">
        <div className="architecture-node">Teensy 4.1</div>
        <span aria-hidden="true">→</span>
        <div className="architecture-node">Vacuum / Solenoid</div>
        <div className="architecture-node">Servo Drives</div>
        <span aria-hidden="true">→</span>
        <div className="architecture-node">Encoder / Status Feedback</div>
        <span aria-hidden="true">→</span>
        <div className="architecture-node">Teensy 4.1</div>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeVideoKey, setActiveVideoKey] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const images = project?.images ?? EMPTY_IMAGES;

  useEffect(() => {
    if (images.length <= 1) return undefined;
    const intervalId = window.setInterval(() => {
      setCurrentImgIndex((index) => (index + 1) % images.length);
      setImageFailed(false);
      setImageLoaded(false);
    }, 5500);
    return () => window.clearInterval(intervalId);
  }, [images]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  if (!project) return null;
  const currentImage = images[currentImgIndex];
  const isDeltaProject = project.slug === 'delta-robot';

  const changeImage = (direction) => {
    setCurrentImgIndex((index) => (index + direction + images.length) % images.length);
    setImageFailed(false);
    setImageLoaded(false);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-2 sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="relative flex max-h-[96dvh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-2xl sm:rounded-3xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-[60] grid min-h-11 min-w-11 place-items-center rounded-full bg-black/80 text-white shadow-xl hover:bg-red-500/70 sm:right-6 sm:top-6"
          aria-label="Close project details"
        >
          <X size={24} aria-hidden="true" />
        </button>

        <div className="custom-scrollbar flex-1 overflow-y-auto p-5 sm:p-7 lg:p-10">
          <header className="max-w-4xl pr-12">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0ea5e9]">{project.category}</p>
            <h2 id="project-modal-title" className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h2>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-sky-300">{project.role}</p>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-gray-300">{project.summary}</p>
          </header>

          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="space-y-9 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#161b22] sm:rounded-[2rem]">
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
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  />
                ) : (
                  <div className="media-placeholder absolute inset-0 p-8 text-center" role="img" aria-label={`${project.title} image unavailable`}>
                    <span>{project.title}</span>
                  </div>
                )}
                {images.length > 1 && (
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                    <button type="button" onClick={() => changeImage(-1)} className="grid min-h-11 min-w-11 place-items-center rounded-full bg-black/75 text-white" aria-label="Previous project image">
                      <ChevronLeft aria-hidden="true" />
                    </button>
                    <span className="rounded-full bg-black/75 px-3 py-1 text-xs text-white">{currentImgIndex + 1} / {images.length}</span>
                    <button type="button" onClick={() => changeImage(1)} className="grid min-h-11 min-w-11 place-items-center rounded-full bg-black/75 text-white" aria-label="Next project image">
                      <ChevronRight aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>

              {isDeltaProject && (
                <section aria-labelledby="delta-architecture-heading">
                  <h3 id="delta-architecture-heading" className="mb-5 text-2xl font-bold text-white">System Architecture</h3>
                  <DeltaArchitecture />
                </section>
              )}

              <section aria-labelledby="contribution-heading">
                <h3 id="contribution-heading" className="mb-5 text-2xl font-bold text-white">{project.contributions ? 'My Contribution' : 'Engineering Details'}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(project.contributions ?? project.detailedDesc)?.map((point) => (
                    <div key={point} className="flex gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#0ea5e9]" size={18} aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-gray-400">{point}</p>
                    </div>
                  ))}
                </div>
                {project.collaborationNote && (
                  <p className="mt-5 rounded-2xl border border-sky-400/15 bg-sky-400/[0.06] p-4 text-sm leading-relaxed text-gray-300">
                    {project.collaborationNote}
                  </p>
                )}
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white">
                  <Cpu size={18} className="text-[#0ea5e9]" aria-hidden="true" /> Core Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech) => (
                    <span key={tech} className="rounded-xl border border-[#0ea5e9]/20 bg-[#0ea5e9]/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#0ea5e9]">{tech}</span>
                  ))}
                </div>
              </section>
            </div>

            <section className="space-y-6 lg:col-span-5 lg:border-l lg:border-white/5 lg:pl-10" aria-labelledby="demo-heading">
              <h3 id="demo-heading" className="flex items-center gap-3 text-2xl font-bold text-white">
                <PlayCircle className="text-[#0ea5e9]" aria-hidden="true" /> Demo Recordings
              </h3>

              {project.videoData?.length ? (
                <div className={isDeltaProject ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-1' : 'space-y-6'}>
                  {project.videoData.map((video, index) => {
                    const videoKey = `${project.id}-${index}`;
                    return (
                      <article key={videoKey} className={`${isDeltaProject && index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''} overflow-hidden rounded-2xl border border-white/5 bg-black`}>
                        {isDeltaProject && index === 0 && (
                          <p className="border-b border-sky-400/15 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-300">Primary Working Demo</p>
                        )}
                        <div className="relative aspect-video">
                          <LazyYouTubeEmbed
                            video={video}
                            isActive={activeVideoKey === videoKey}
                            onPlay={() => setActiveVideoKey(videoKey)}
                          />
                        </div>
                        <div className="flex items-center justify-between border-t border-white/5 bg-[#161b22] p-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-white">{video.title}</p>
                            <p className="mt-1 text-[9px] font-black uppercase tracking-wider text-[#0ea5e9]">{video.type}</p>
                          </div>
                          <Info size={14} className="text-gray-500" aria-hidden="true" />
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-gray-400">No demo recording is available for this project.</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
