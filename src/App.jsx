import React, { useState, useEffect, useMemo } from 'react';
import { motion as Motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ChevronRight, Mail } from 'lucide-react';

// Particles Animation Imports
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

// Aapke Components aur Data
import { PORTFOLIO_DATA } from './data/portfolioData';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [activeSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [init, setInit] = useState(false);

  // 1. Particles Engine Initialize (Background Lines ke liye)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 2. Mouse Glow Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  // 3. Typing Animation Logic
  const phrases = useMemo(() => ["ROS 2", "AI & Robotics", "SLAM Expert"], []);
  
  useEffect(() => {
    let i = 0, j = 0, isDeleting = false;
    const type = () => {
      const currentPhrase = phrases[i];
      setTypedText(isDeleting ? currentPhrase.substring(0, j - 1) : currentPhrase.substring(0, j + 1));
      j = isDeleting ? j - 1 : j + 1;
      
      if (!isDeleting && j === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 2000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
      }
      setTimeout(type, isDeleting ? 50 : 100);
    };
    const timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [phrases]);

  return (
    <div className="min-h-screen bg-[#010409] text-[#e6edf3] relative overflow-hidden" 
         onMouseMove={(e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); }}>
      
      {/* BACKGROUND ANIMATION: Connectivity Lines */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            fpsLimit: 30,
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" } },
              modes: { grab: { distance: 140, links: { opacity: 0.8 } } },
            },
            particles: {
              color: { value: "#1606f3ff" },
              links: { color: "#2109f7ff", distance: 140, enable: true, opacity: 0.35, width: 1 },
              move: { enable: true, speed: 0.8 },
              number: { density: { enable: true, area: 900 }, value: 40 },
              opacity: { value: 0.8 },
              size: { value: { min: 2, max: 4 } },
            },
          }}
        />
      )}

      {/* Mouse Glow Effect */}
      <Motion.div 
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-[#0ea5e9]/10 blur-[120px] rounded-full pointer-events-none z-1"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }} 
      />

      <Sidebar activeSection={activeSection} />

      <main className="lg:ml-72 relative z-10">
        
        {/* HOME SECTION */}
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8">
          <Motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl lg:text-9xl font-black bg-gradient-to-r from-white via-[#0ea5e9] to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text"
          >
            SATYENDRA
          </Motion.h1>
          <p className="text-xl lg:text-3xl font-medium text-gray-400 mt-4">
            Expert in <span className="text-[#0ea5e9] border-b-2 border-[#0ea5e9]">{typedText}</span>
          </p>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="p-12 lg:p-24 border-t border-white/5 bg-[#010409]/60 backdrop-blur-md">
           <h2 className="text-4xl font-extrabold mb-10 border-b-4 border-[#0ea5e9] inline-block pb-2">About</h2>
           <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mb-10">{PORTFOLIO_DATA.profile.bio}</p>
           <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {PORTFOLIO_DATA.profile.details.map((d, i) => (
                <div key={i} className="flex gap-3 text-gray-400"><span className="text-[#0ea5e9]">▹</span>{d}</div>
              ))}
           </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="p-12 lg:p-24 border-t border-white/5">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-[#0ea5e9] inline-block pb-2">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
            {PORTFOLIO_DATA.skills.map((s, idx) => (
              <div key={idx} className="flex gap-4">
                <ChevronRight className="text-[#0ea5e9] shrink-0" />
                <div className="flex gap-4 font-semibold">
                  <span className="text-white min-w-[100px]">{s.category}:</span>
                  <span className="text-gray-400 font-normal">{s.items.join(", ")}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="p-12 lg:p-24 border-t border-white/5 bg-[#010409]/60">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-[#0ea5e9] inline-block pb-2">Experience</h2>
          <div className="max-w-4xl space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="pl-10 border-l-2 border-[#30363d] relative">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0ea5e9]" />
                <h3 className="text-2xl font-bold uppercase tracking-tight">{exp.company}</h3>
                <p className="text-[#0ea5e9] font-bold text-sm mb-4">{exp.role} | {exp.period}</p>
                <ul className="space-y-2">{exp.tasks.map((t, i) => <li key={i} className="text-gray-400">→ {t}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="p-12 lg:p-24 border-t border-white/5 bg-[#010409]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-[#0ea5e9] inline-block pb-2 uppercase tracking-tighter">
              Education
            </h2>
            <div className="grid gap-8">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#0ea5e9]/30 transition-all group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#0ea5e9] transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-400 font-medium text-lg">{edu.institution}</p>
                    </div>
                    <div className="px-4 py-2 bg-[#0ea5e9]/10 rounded-xl border border-[#0ea5e9]/20">
                      <span className="text-[#0ea5e9] font-bold">{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section id="training" className="p-12 lg:p-24 border-t border-white/5 bg-[#010409]/40">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-[#0ea5e9] inline-block pb-2">Training & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {PORTFOLIO_DATA.training.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0ea5e9]/50 transition-all">
                <h3 className="text-xl font-bold text-white">{t.course}</h3>
                <p className="text-[#0ea5e9] text-sm font-semibold mb-3">{t.company} | {t.period}</p>
                <ul className="space-y-1">
                  {t.tasks.map((task, i) => (
                    <li key={i} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-[#0ea5e9]">▹</span> {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="p-12 lg:p-24 border-t border-white/5">
          <h2 className="text-4xl font-extrabold mb-12 border-b-4 border-[#0ea5e9] inline-block pb-2">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} onClick={() => setSelectedProject(proj)} />
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="p-12 lg:p-24 border-t border-white/5 bg-[#030a1c]/40 text-center">
           <h2 className="text-4xl font-extrabold mb-6">Contact</h2>
           <p className="text-gray-400 mb-10 max-w-xl mx-auto">Inbox is always open for new opportunities!</p>
           <a href="mailto:nsatyendr12@gmail.com" className="px-12 py-4 bg-[#0ea5e9] rounded-xl font-bold hover:scale-105 transition-all inline-flex items-center gap-2 shadow-lg shadow-sky-500/20">
             <Mail size={20} /> Say Hello
           </a>
        </section>

      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
}
