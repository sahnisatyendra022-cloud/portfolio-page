import React, { useMemo } from 'react';
import { ArrowLeft, ArrowRight, ChevronRight, Download, FolderOpen, Github, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import useHashNavigation from './hooks/useHashNavigation';
import resumePdf from './assets/documents/satyendra_resume_r.pdf';

const FEATURED_PROJECT_IDS = [25, 1, 23, 22, 21, 20, 19, 18, 17, 24, 16, 15, 14];

function SectionHeading({ eyebrow, children, description }) {
  return (
    <header className="mb-10 max-w-3xl">
      {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#0ea5e9]">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{children}</h2>
      {description && <p className="mt-4 leading-relaxed text-gray-400">{description}</p>}
    </header>
  );
}

export default function App() {
  const projects = PORTFOLIO_DATA.projects;
  const { activeSection, selectedProject, navigateToSection, openProject, closeProject } = useHashNavigation(projects);

  const featuredProjects = useMemo(
    () => FEATURED_PROJECT_IDS.map((id) => projects.find((project) => project.id === id)).filter(Boolean),
    [projects],
  );
  const otherProjects = useMemo(
    () => projects.filter((project) => !FEATURED_PROJECT_IDS.includes(project.id)),
    [projects],
  );
  const deltaProject = projects.find((project) => project.slug === 'delta-robot');

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#010409] text-[#e6edf3]">
      {!selectedProject && <div className="portfolio-static-background" aria-hidden="true" />}
      <Sidebar activeSection={activeSection} onNavigate={navigateToSection} />

      <main className="relative z-10 pt-16 lg:ml-72 lg:pt-0">
        <section id="home" className="section-shell flex min-h-[calc(100svh-4rem)] items-center justify-center lg:min-h-screen">
          <div className="hero-reveal mx-auto w-full max-w-6xl text-center">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#0ea5e9] sm:text-sm">Robotics Systems Engineer</p>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl xl:text-8xl">
                SATYENDRA <span className="text-[#0ea5e9]">SAHNI</span>
              </h1>
              <p className="mx-auto mt-6 max-w-4xl text-sm font-semibold leading-relaxed text-sky-200 sm:text-base">
                Motion Control • ROS 2 • Embedded Systems • Vision Integration • System Integration
              </p>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Building complete robotic systems across firmware, electronics, kinematics, perception and real-hardware integration.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#project-delta-robot"
                  onClick={(event) => {
                    event.preventDefault();
                    openProject(deltaProject);
                  }}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0ea5e9] px-6 py-3 font-bold text-white hover:bg-sky-400"
                >
                  View Delta Robot <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href="#projects"
                  onClick={(event) => {
                    event.preventDefault();
                    navigateToSection('projects');
                  }}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-bold text-white hover:border-sky-400/60 hover:bg-white/5"
                >
                  View Robotics Projects
                </a>
                <a
                  href="#experience"
                  onClick={(event) => {
                    event.preventDefault();
                    navigateToSection('experience');
                  }}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-bold text-white hover:border-sky-400/60 hover:bg-white/5"
                >
                  View Experience
                </a>
                <a
                  href={resumePdf}
                  download="Satyendra-Sahni-Resume.pdf"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-bold text-white hover:border-sky-400/60 hover:bg-white/5"
                >
                  <Download size={18} aria-hidden="true" /> Download Resume
                </a>
              </div>
          </div>
        </section>

        <section id="projects" className="section-shell border-t border-white/5 bg-[#010409]/70">
          <div className="mb-10 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Selected Work" description="Robotics, manipulation, navigation, control, simulation and perception projects.">
              Featured Robotics Projects
            </SectionHeading>
            <a
              href="#other-projects"
              onClick={(event) => {
                event.preventDefault();
                navigateToSection('other-projects');
              }}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/[0.07] px-5 py-3 font-bold text-sky-200 hover:bg-sky-400/15"
            >
              <FolderOpen size={19} aria-hidden="true" /> Other Projects
            </a>
          </div>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={openProject} featured />
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell border-t border-white/5">
          <SectionHeading eyebrow="Professional Background">Experience</SectionHeading>
          <div className="max-w-5xl space-y-10">
            {PORTFOLIO_DATA.experience.map((experience) => (
              <article key={`${experience.company}-${experience.period}`} className="relative border-l-2 border-[#30363d] pl-7 sm:pl-10">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[#0ea5e9]" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white sm:text-2xl">{experience.company}</h3>
                <p className="mb-5 mt-2 text-sm font-bold text-[#0ea5e9]">{experience.role} | {experience.period}</p>
                <ul className="space-y-3">
                  {experience.tasks.map((task) => (
                    <li key={task} className="flex gap-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                      <ChevronRight className="mt-0.5 shrink-0 text-[#0ea5e9]" size={18} aria-hidden="true" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell border-t border-white/5 bg-[#010409]/70">
          <SectionHeading eyebrow="Profile">About</SectionHeading>
          <p className="mb-10 max-w-5xl text-base leading-relaxed text-gray-300 sm:text-lg">{PORTFOLIO_DATA.profile.bio}</p>
          <div className="grid max-w-6xl gap-5 md:grid-cols-2">
            {PORTFOLIO_DATA.profile.highlights.map((highlight) => (
              <article key={highlight.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <ChevronRight className="mt-1 shrink-0 text-[#0ea5e9]" size={22} aria-hidden="true" />
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">{highlight.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{highlight.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell border-t border-white/5">
          <SectionHeading eyebrow="Toolbox">Technical Skills</SectionHeading>
          <div className="grid max-w-6xl gap-5 md:grid-cols-2">
            {PORTFOLIO_DATA.skills.map((skill) => (
              <article key={skill.category} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <h3 className="mb-4 text-lg font-bold text-white">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-lg border border-[#0ea5e9]/15 bg-[#0ea5e9]/10 px-3 py-1.5 text-xs font-medium text-gray-300">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-shell border-t border-white/5 bg-[#010409]/70">
          <SectionHeading eyebrow="Academic Foundation">Education & Training</SectionHeading>
          <div className="grid max-w-6xl gap-5 md:grid-cols-2">
            {PORTFOLIO_DATA.education.map((education) => (
              <article key={`${education.degree}-${education.period}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">{education.period}</p>
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <p className="mt-2 text-gray-400">{education.institution}</p>
              </article>
            ))}
          </div>

          <h3 className="mb-6 mt-14 text-2xl font-bold text-white">Training & Certifications</h3>
          <div className="grid max-w-6xl gap-5 md:grid-cols-2">
            {PORTFOLIO_DATA.training.map((training) => (
              <article key={`${training.course}-${training.period}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">{training.company} | {training.period}</p>
                <h4 className="text-lg font-bold text-white">{training.course}</h4>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{training.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="other-projects" className="section-shell border-t border-white/5">
          <div className="mb-10 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Project Archive" description="Additional embedded, IoT and electronics projects retained from the complete portfolio.">
              Other Projects
            </SectionHeading>
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                navigateToSection('projects');
              }}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-bold text-white hover:border-sky-400/50 hover:bg-white/5"
            >
              <ArrowLeft size={18} aria-hidden="true" /> Back to Featured Robotics Projects
            </a>
          </div>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={openProject} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell border-t border-white/5 bg-[#030a1c]/70 text-center">
          <SectionHeading eyebrow="Get in Touch">Contact Satyendra Sahni</SectionHeading>
          <p className="mx-auto mb-8 max-w-xl text-gray-400">Open to robotics systems, embedded engineering and industrial automation opportunities.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:nsatyendr12@gmail.com" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0ea5e9] px-8 py-3 font-bold text-white hover:bg-sky-400">
              <Mail size={19} aria-hidden="true" /> Say Hello
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Satyendra Sahni's GitHub profile"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-3 font-bold text-white hover:border-sky-400/60"
            >
              <Github size={19} aria-hidden="true" /> GitHub
            </a>
          </div>
        </section>
      </main>

      {selectedProject && (
        <ProjectModal key={selectedProject.slug} project={selectedProject} onClose={closeProject} />
      )}
    </div>
  );
}
