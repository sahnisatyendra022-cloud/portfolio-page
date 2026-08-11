import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const NAV_SECTION_IDS = [
  'home',
  'projects',
  'experience',
  'about',
  'skills',
  'education',
  'other-projects',
  'contact',
];

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getHashValue = () => window.location.hash.slice(1).toLowerCase();

export default function useHashNavigation(projects) {
  const projectBySlug = useMemo(
    () => new Map(projects.map((project) => [project.slug, project])),
    [projects],
  );
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const ignoreObserverUntil = useRef(0);

  const scrollToSection = useCallback((sectionId, behavior = 'smooth') => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    ignoreObserverUntil.current = performance.now() + 900;
    section.scrollIntoView({
      behavior: prefersReducedMotion() || behavior === 'auto' ? 'instant' : behavior,
      block: 'start',
    });
  }, []);

  const syncFromLocation = useCallback(
    (behavior = 'auto') => {
      const hashValue = getHashValue();
      const projectSlug = hashValue.startsWith('project-')
        ? hashValue.slice('project-'.length)
        : null;
      const project = projectSlug ? projectBySlug.get(projectSlug) : null;

      if (project) {
        setSelectedProject(project);
        setActiveSection('projects');
        scrollToSection('projects', behavior);
        return;
      }

      const sectionId = NAV_SECTION_IDS.includes(hashValue) ? hashValue : 'home';
      if (hashValue !== sectionId) {
        window.history.replaceState(null, '', `#${sectionId}`);
      }
      setSelectedProject(null);
      setActiveSection(sectionId === 'other-projects' ? 'projects' : sectionId);
      scrollToSection(sectionId, behavior);
    },
    [projectBySlug, scrollToSection],
  );

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => syncFromLocation('auto'));
    const handleHistoryNavigation = () => syncFromLocation('auto');

    window.addEventListener('hashchange', handleHistoryNavigation);
    window.addEventListener('popstate', handleHistoryNavigation);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('hashchange', handleHistoryNavigation);
      window.removeEventListener('popstate', handleHistoryNavigation);
    };
  }, [syncFromLocation]);

  useEffect(() => {
    if (selectedProject) return undefined;

    const sections = NAV_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (performance.now() < ignoreObserverUntil.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const sectionId = visible.target.id;
        setActiveSection(sectionId === 'other-projects' ? 'projects' : sectionId);
        if (getHashValue() !== sectionId) {
          window.history.replaceState(null, '', `#${sectionId}`);
        }
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [selectedProject]);

  const navigateToSection = useCallback(
    (sectionId) => {
      setSelectedProject(null);
      setActiveSection(sectionId === 'other-projects' ? 'projects' : sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
      scrollToSection(sectionId);
    },
    [scrollToSection],
  );

  const openProject = useCallback(
    (project) => {
      if (getHashValue() !== 'projects') {
        window.history.pushState(null, '', '#projects');
        scrollToSection('projects', 'auto');
      }
      window.history.pushState(null, '', `#project-${project.slug}`);
      setActiveSection('projects');
      setSelectedProject(project);
    },
    [scrollToSection],
  );

  const closeProject = useCallback(() => {
    window.history.replaceState(null, '', '#projects');
    setSelectedProject(null);
    setActiveSection('projects');
  }, []);

  return {
    activeSection,
    selectedProject,
    navigateToSection,
    openProject,
    closeProject,
  };
}
