import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { UseScrollOptions } from 'framer-motion';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: UseScrollOptions['offset'];
}

export function ParallaxWrapper({
  children,
  speed = 0.5,
  className,
  offset = ['start end', 'end start'],
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-50 * speed}px`, `${50 * speed}px`]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
