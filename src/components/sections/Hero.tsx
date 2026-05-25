import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const techStack = ['React', 'TypeScript', 'Node.js', 'Azure', 'PostgreSQL'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const orb1X = useTransform(springX, [-0.5, 0.5], [-25, 25]);
  const orb1Y = useTransform(springY, [-0.5, 0.5], [-25, 25]);
  const orb2X = useTransform(springX, [-0.5, 0.5], [20, -20]);
  const orb2Y = useTransform(springY, [-0.5, 0.5], [20, -20]);
  const orb3X = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const orb3Y = useTransform(springY, [-0.5, 0.5], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orb 1 — Blue, top right */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          x: orb1X,
          y: orb1Y,
        }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — Purple, bottom left */}
      <motion.div
        className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          x: orb2X,
          y: orb2Y,
        }}
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Orb 3 — Cyan, center right */}
      <motion.div
        className="absolute top-[40%] right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)',
          filter: 'blur(50px)',
          x: orb3X,
          y: orb3Y,
        }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Availability chip */}
          <motion.div variants={itemVariant}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariant} className="overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.08] tracking-tight">
              <span className="block">Building Modern Software</span>
              <span className="block mt-1 bg-gradient-to-r from-primary via-primary-light to-cyan-400 bg-clip-text text-transparent">
                That Solves Real Problems
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariant}
            className="max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed"
          >
            Full-stack engineer specializing in scalable applications, API integrations,
            and cloud-native solutions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariant}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            <Button
              variant="primary"
              size="lg"
              arrow
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button
              as="a"
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              Download Resume
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariant} className="flex items-center gap-4 mt-1">
            <motion.a
              href="https://github.com/miramarcos"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text-primary transition-colors"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/miramarcos"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text-primary transition-colors"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Tech stack bar */}
          <motion.div
            variants={itemVariant}
            className="flex flex-wrap items-center justify-center gap-2 mt-4"
          >
            <span className="text-xs text-text-secondary/60 mr-1">Stack:</span>
            {techStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2">
                <span className="text-sm text-text-secondary/80 font-medium">{tech}</span>
                {i < techStack.length - 1 && (
                  <span className="text-text-secondary/30">·</span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary/60 hover:text-text-secondary transition-colors"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
