import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useActiveSection } from '@/hooks/useActiveSection';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a
            href="#hero"
            className="text-2xl font-bold text-primary-light tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            M.
          </motion.a>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                      isActive
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-primary rounded-full"
                        layoutId="activeNav"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <motion.a
            href="mailto:mirakrismarcos@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary/40 rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Me
          </motion.a>

          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-16 left-0 right-0 bg-surface border-b border-white/8 shadow-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <ul className="py-4 px-6 flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={cn(
                          'w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                          isActive
                            ? 'text-primary bg-primary/10'
                            : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                        )}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  );
                })}
                <li className="pt-2 border-t border-white/8 mt-2">
                  <a
                    href="mailto:mirakrismarcos@gmail.com"
                    className="block px-4 py-3 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
