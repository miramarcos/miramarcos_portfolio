import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-white/5">
      <motion.div
        className="h-full bg-primary origin-left"
        style={{ scaleX: progress }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
}
