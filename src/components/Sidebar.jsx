import React, { useState } from 'react';
import {
  Briefcase,
  Cpu,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  User,
  X,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import profileImg from '../assets/images/New_profile.jpeg';

const NAV_ITEMS = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'projects', icon: Rocket, label: 'Projects' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Cpu, label: 'Skills' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

function Navigation({ activeSection, onNavigate }) {
  return (
    <nav aria-label="Primary navigation" className="w-full space-y-1">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(event) => {
            event.preventDefault();
            onNavigate(item.id);
          }}
          aria-current={activeSection === item.id ? 'page' : undefined}
          className={`flex min-h-11 items-center gap-3 rounded-lg px-4 py-2 transition-colors ${
            activeSection === item.id
              ? 'bg-sky-500/10 text-[#0ea5e9]'
              : 'text-gray-400 hover:bg-white/5 hover:text-white'
          }`}
        >
          <item.icon size={18} aria-hidden="true" />
          <span className="text-xs font-semibold">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default function Sidebar({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const githubUrl = PORTFOLIO_DATA.profile.socials.github;
  const linkedinUrl = PORTFOLIO_DATA.profile.socials.linkedin;

  const handleNavigate = (sectionId) => {
    setMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#30363d] bg-[#030a1c]/95 px-4 lg:hidden">
        <button
          type="button"
          className="flex min-h-11 items-center gap-3 text-left"
          onClick={() => handleNavigate('home')}
          aria-label="Go to home"
        >
          <img
            src={profileImg}
            alt="Satyendra Sahni"
            decoding="async"
            width="40"
            height="40"
            className="aspect-square h-10 w-10 shrink-0 rounded-full border-2 border-[#0ea5e9] object-cover object-top"
          />
          <span className="text-sm font-extrabold uppercase tracking-wide text-white">Satyendra Sahni</span>
        </button>
        <button
          type="button"
          className="grid min-h-11 min-w-11 place-items-center rounded-lg text-white hover:bg-white/10"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      {menuOpen && (
        <div id="mobile-navigation" className="fixed inset-x-0 top-16 z-50 border-b border-[#30363d] bg-[#030a1c] p-4 shadow-2xl lg:hidden">
          <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
          <div className="mt-4 flex gap-2 border-t border-white/5 pt-3">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="grid min-h-11 min-w-11 place-items-center rounded-lg text-gray-400 hover:bg-white/5 hover:text-[#0ea5e9]"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Satyendra Sahni's GitHub profile"
                className="grid min-h-11 min-w-11 place-items-center rounded-lg text-gray-400 hover:bg-white/5 hover:text-white"
              >
                <Github size={20} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      )}

      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 flex-col items-center overflow-y-auto border-r border-[#30363d] bg-[#030a1c] p-8 text-center lg:flex">
        <div className="mb-4 aspect-square h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-[#0ea5e9] bg-black p-1 shadow-lg shadow-sky-500/20">
          <img
            src={profileImg}
            alt="Satyendra Sahni"
            decoding="async"
            width="112"
            height="112"
            className="aspect-square h-full w-full rounded-full object-cover object-top"
          />
        </div>

        <p className="mb-1 text-xl font-extrabold uppercase tracking-tight text-white">
          {PORTFOLIO_DATA.profile.name}
        </p>
        <p className="mb-6 text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9]">
          {PORTFOLIO_DATA.profile.title}
        </p>

        <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

        <div className="mt-auto flex w-full justify-center gap-4 border-t border-white/5 pt-6">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="grid min-h-11 min-w-11 place-items-center text-gray-500 hover:text-[#0ea5e9]"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Satyendra Sahni's GitHub profile"
              className="grid min-h-11 min-w-11 place-items-center text-gray-500 hover:text-white"
            >
              <Github size={20} aria-hidden="true" />
            </a>
          )}
        </div>
      </aside>
    </>
  );
}
