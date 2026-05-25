import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Plug,
  Cpu,
  type LucideProps,
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Badge } from '@/components/ui/Badge';
import { skillGroups } from '@/data/skills';
import type { SkillGroup } from '@/types';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Monitor,
  Server,
  Database,
  Cloud,
  Plug,
  Cpu,
};

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const Icon = iconMap[group.icon] ?? Monitor;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative bg-card rounded-2xl border border-white/8 p-6 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
      style={{
        ['--accent-color' as string]: group.accentColor,
      }}
    >
      {/* Top gradient */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${group.accentColor}30`,
        }}
      />

      <div className="relative">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${group.accentColor}18` }}
          >
            <Icon
              className="w-5 h-5"
              style={{ color: group.accentColor }}
            />
          </div>
          <h3 className="font-semibold text-text-primary">{group.label}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <Badge key={skill} variant="subtle" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Expertise
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              Technology Stack
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-lg">
              A modern, production-proven toolkit for building scalable, maintainable software.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
