import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import { cn } from '@/utils/cn';

const accentColors = [
  { border: '#3B82F6', glow: 'rgba(59,130,246,0.15)', label: 'bg-blue-500/15 text-blue-300' },
  { border: '#8B5CF6', glow: 'rgba(139,92,246,0.15)', label: 'bg-purple-500/15 text-purple-300' },
  { border: '#10B981', glow: 'rgba(16,185,129,0.15)', label: 'bg-emerald-500/15 text-emerald-300' },
  { border: '#F59E0B', glow: 'rgba(245,158,11,0.15)', label: 'bg-amber-500/15 text-amber-300' },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const accent = accentColors[index % accentColors.length];
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        'group relative bg-card rounded-2xl border border-white/8 overflow-hidden',
        'hover:border-white/15 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40',
        'transition-all duration-300',
        project.featured && 'lg:col-span-2'
      )}
    >
      {/* Left accent border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300"
        style={{ backgroundColor: accent.border }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${accent.glow}, transparent 60%)`,
        }}
      />

      <div className="relative p-7 md:p-8">
        {/* Project number */}
        <span
          className="absolute top-6 right-8 text-6xl font-extrabold select-none pointer-events-none"
          style={{ color: `${accent.border}15` }}
        >
          {number}
        </span>

        <div className="flex flex-col gap-5 relative">
          {/* Title */}
          <div>
            <h3 className="text-xl font-bold text-text-primary group-hover:text-white transition-colors pr-12">
              {project.title}
            </h3>
          </div>

          {/* Problem */}
          <p className="text-sm text-text-secondary leading-relaxed">
            <span className="font-semibold text-text-secondary/70">Problem: </span>
            {project.problem}
          </p>

          {/* Impact */}
          <div
            className={cn(
              'inline-flex items-start gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium',
              accent.label
            )}
          >
            <ArrowUpRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{project.impact}</span>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="subtle" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-1">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-white/5 hover:bg-white/10 rounded-lg border border-white/8 hover:border-white/15 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
            {project.demoUrl !== '#' && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-white/5 hover:bg-white/10 rounded-lg border border-white/8 hover:border-white/15 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-surface pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <FadeIn direction="up">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Portfolio
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              Selected Work
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 max-w-xl text-text-secondary text-lg">
              A curated selection of projects built for real business impact.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="mt-12 text-center">
            <motion.a
              href="https://github.com/miramarcos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors duration-200"
              whileHover={{ x: 3 }}
            >
              <Github className="w-4 h-4" />
              View more projects on GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
