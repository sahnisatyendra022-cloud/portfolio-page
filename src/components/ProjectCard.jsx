import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

function ProjectCard({ project, onClick, featured = false }) {
  const [imageFailed, setImageFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const showImage = Boolean(project.img) && !imageFailed;

  const copyProjectLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#project-${project.slug}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#30363d] bg-[#0d1117] transition-colors hover:border-[#0ea5e9]/50">
      <a
        href={`#project-${project.slug}`}
        onClick={(event) => {
          event.preventDefault();
          onClick(project);
        }}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0ea5e9]"
        aria-label={`View details for ${project.title}`}
      >
        <div className="relative aspect-video overflow-hidden bg-black">
          {showImage ? (
            <img
              src={project.img}
              alt={`${project.title} project`}
              loading="lazy"
              decoding="async"
              width="640"
              height="360"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover opacity-85 transition-opacity duration-200 group-hover:opacity-100"
            />
          ) : (
            <div className="media-placeholder px-8 text-center" role="img" aria-label={`${project.title} image unavailable`}>
              <span>{project.title}</span>
            </div>
          )}
          {featured && (
            <span className="absolute left-3 top-3 rounded-full border border-sky-300/20 bg-[#030a1c]/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-sky-300">
              Featured
            </span>
          )}
        </div>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 text-[10px] font-black uppercase tracking-widest text-[#0ea5e9]">{project.category}</span>
        <h3 className="mb-2 text-xl font-bold leading-tight text-white">{project.title}</h3>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-sky-300/80">{project.role}</p>
        <p className="mb-5 text-sm leading-relaxed text-gray-400">{project.summary}</p>

        <div className="mb-6 flex flex-wrap gap-2" aria-label="Core technologies">
          {project.techStack?.slice(0, 6).map((tech) => (
            <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-semibold text-gray-400">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2">
          <a
            href={`#project-${project.slug}`}
            onClick={(event) => {
              event.preventDefault();
              onClick(project);
            }}
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#0ea5e9] px-4 py-2 text-sm font-bold text-white hover:bg-sky-400"
          >
            View Details <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={copyProjectLink}
            className="grid min-h-11 min-w-11 place-items-center rounded-xl border border-white/10 text-gray-300 hover:border-[#0ea5e9]/50 hover:text-white"
            aria-label={`Copy direct link to ${project.title}`}
            title="Copy direct project link"
          >
            {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </article>
  );
}

export default React.memo(ProjectCard);
