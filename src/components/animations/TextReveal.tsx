import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function TextReveal({
  text,
  className,
  delay = 0,
  once = true,
  as: _Tag = 'span',
}: TextRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: once });

  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: 'inline-block', perspective: '800px' }}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <motion.span
            variants={wordVariant}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface MultiLineTextRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  once?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}

export function MultiLineTextReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  once = true,
  as: Tag = 'h1',
}: MultiLineTextRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: once });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <Tag ref={ref} className={className} aria-label={lines.join(' ')}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ display: 'block' }}
      >
        {lines.map((line, i) => (
          <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              variants={lineVariant}
              style={{ display: 'block' }}
              className={lineClassName}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
