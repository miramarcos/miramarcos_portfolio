import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Copy, Check, type LucideProps } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  copyable,
  color,
}: {
  icon: React.ComponentType<LucideProps>;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
  color: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inner = (
    <motion.div
      className="group flex items-center gap-4 bg-card rounded-xl border border-white/8 p-4 hover:border-white/20 transition-all duration-300 cursor-pointer"
      style={{
        ['--card-color' as string]: color,
      }}
      whileHover={{ scale: 1.01, x: 4 }}
      whileTap={{ scale: 0.99 }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
        style={{ backgroundColor: `${color}18` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-text-secondary">{label}</p>
        <p className="text-sm font-medium text-text-primary truncate">{value}</p>
      </div>
      {copyable && (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleCopy();
          }}
          className="p-1.5 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <div onClick={copyable ? handleCopy : undefined}>{inner}</div>;
}

export function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-surface pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <FadeIn direction="up">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Contact
          </span>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Let&apos;s build something{' '}
            <span className="text-primary-light">great together.</span>
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Have a project in mind, a role to fill, or just want to connect?
            I&apos;m always open to meaningful conversations.
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <FadeIn direction="up" delay={0.3}>
            <ContactCard
              icon={Mail}
              label="Email"
              value="mirakrismarcos@gmail.com"
              copyable
              color="#3B82F6"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <ContactCard
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/mirakrismarcos"
              href="https://www.linkedin.com/in/mirakrismarcos/"
              color="#0A66C2"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
