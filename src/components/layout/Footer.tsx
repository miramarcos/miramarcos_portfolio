import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mirakrismarcos/',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:mirakrismarcos@gmail.com',
  },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-2xl font-bold text-primary-light">M.</span>
            <p className="text-sm text-text-secondary">
              Engineering software that solves real problems.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/8 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Marcos. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary">
            Built with{' '}
            <span className="text-primary-light">React + TypeScript</span>
            {' '}·{' '}
            <span className="text-primary-light">Framer Motion</span>
            {' '}·{' '}
            <span className="text-primary-light">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
