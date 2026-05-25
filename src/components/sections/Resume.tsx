import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, CheckCircle2, Briefcase } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { experiences } from '@/data/experience';
import type { Experience } from '@/types';

const expertise = [
  'React & TypeScript SPA/SSR architectures',
  'NestJS microservices and REST API design',
  'PostgreSQL schema design and query optimization',
  'Azure cloud deployment and CI/CD automation',
  'Third-party API integrations at production scale',
  'Cross-functional collaboration and technical leadership',
];

function TimelineItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative pl-8"
    >
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow-lg shadow-primary/40 z-10" />

      <div className="bg-card rounded-xl border border-white/8 p-6 hover:border-white/15 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-semibold text-text-primary">{experience.role}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Briefcase className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm text-primary-light font-medium">
                {experience.company}
              </span>
            </div>
          </div>
          <span className="text-xs font-mono text-text-secondary bg-white/5 border border-white/8 px-3 py-1 rounded-full whitespace-nowrap">
            {experience.period}
          </span>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {experience.description}
        </p>

        <ul className="flex flex-col gap-2">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Resume() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.7], ['0%', '100%']);

  return (
    <section id="resume" className="relative py-28 bg-background overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <FadeIn direction="up">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Experience
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
              Work History
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-[1fr,420px] gap-16 items-start">
          {/* Timeline */}
          <div className="relative">
            {/* Animated vertical line */}
            <div className="absolute left-[6px] top-0 bottom-0 w-px bg-white/8">
              <motion.div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary to-primary/30 rounded-full"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="flex flex-col gap-6">
              {experiences.map((exp, i) => (
                <TimelineItem key={exp.id} experience={exp} index={i} />
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-card rounded-2xl border border-white/8 p-7">
                <h3 className="font-semibold text-text-primary mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Key Expertise
                </h3>
                <ul className="flex flex-col gap-3">
                  {expertise.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl border border-primary/25 p-7">
                <p className="text-sm font-semibold text-primary mb-1">Full Resume</p>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Download my CV
                </h3>
                <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                  Get the full picture — detailed work history, technical skills, and
                  project highlights in a clean PDF format.
                </p>
                <Button
                  as="a"
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  icon={<Download className="w-4 h-4" />}
                >
                  Download Resume
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
              <div className="bg-card rounded-2xl border border-white/8 p-7 text-center">
                <p className="text-text-secondary text-sm mb-4">
                  Looking for a reliable engineer to join your team or build your next product?
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Let&apos;s work together
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
