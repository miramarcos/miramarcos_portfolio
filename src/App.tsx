import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Home } from '@/pages/Home';
import { useLenis } from '@/hooks/useLenis';

export default function App() {
  useLenis();

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-background text-text-primary font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <Home />
        <Footer />
      </div>
    </AnimatePresence>
  );
}
