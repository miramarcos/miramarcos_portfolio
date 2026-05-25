import { useState, useEffect } from 'react';

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    });

    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
}
