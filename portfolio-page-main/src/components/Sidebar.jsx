import React from 'react';
import { Home, User, Briefcase, Rocket, Cpu, GraduationCap, Mail, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// 1. Apni local image ko yahan import karein
import profileImg from '../assets/profile1.jpg'; 

const Sidebar = ({ activeSection }) => (
  <aside className="fixed left-0 top-0 w-72 h-screen bg-[#030a1c] border-r border-[#30363d] z-50 hidden lg:flex flex-col p-8 items-center text-center overflow-y-auto">
    
    {/* Profile Image Section */}
    <div className="w-28 h-28 rounded-full border-4 border-[#0ea5e9] p-1 shadow-lg shadow-sky-500/20 mb-4 overflow-hidden bg-black">
      {/* 2. src me profileImg variable ka use kiya gaya hai */}
      <img 
        src={profileImg} 
        alt="Satyendra" 
        className="w-full h-full rounded-full object-cover" 
      />
    </div>

    <h1 className="text-xl font-extrabold text-white mb-1 uppercase tracking-tight">
      {PORTFOLIO_DATA.profile.name}
    </h1>
    <p className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-widest mb-6">
      {PORTFOLIO_DATA.profile.title}
    </p>
    
    <nav className="w-full space-y-1 mb-8">
      {[
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'about', icon: User, label: 'About' },
        { id: 'skills', icon: Cpu, label: 'Skills' },
        { id: 'experience', icon: Briefcase, label: 'Experience' },
        { id: 'education', icon: GraduationCap, label: 'Education' },
        { id: 'projects', icon: Rocket, label: 'Projects' },
        { id: 'contact', icon: Mail, label: 'Contact' }
      ].map((item) => (
        <a 
          key={item.id} 
          href={`#${item.id}`} 
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
            activeSection === item.id 
              ? 'bg-sky-500/10 text-[#0ea5e9]' 
              : 'text-gray-400 hover:bg-white/5 hover:text-white'
          }`}
        >
          <item.icon size={18} />
          <span className="font-semibold text-xs">{item.label}</span>
        </a>
      ))}
    </nav>

    <div className="mt-auto pt-6 border-t border-white/5 w-full flex justify-center gap-4">
      <a href={PORTFOLIO_DATA.profile.socials.linkedin} className="text-gray-500 hover:text-[#0ea5e9]">
        <Linkedin size={18} />
      </a>
      <a href={PORTFOLIO_DATA.profile.socials.github} className="text-gray-500 hover:text-white">
        <Github size={18} />
      </a>
    </div>
  </aside>
);

export default Sidebar;
