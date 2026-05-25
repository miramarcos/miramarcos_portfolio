import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Copy, Check, Send, CheckCircle, type LucideProps } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import type { ContactForm } from '@/types';

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
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setSubmitState('loading');
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        publicKey
      );
      setSubmitState('success');
      reset();
      setTimeout(() => setSubmitState('idle'), 5000);
    } catch {
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-surface pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
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
            </div>

            <div className="flex flex-col gap-3">
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
                  value="linkedin.com/in/miramarcos"
                  href="https://linkedin.com/in/miramarcos"
                  color="#0A66C2"
                />
              </FadeIn>
            </div>
          </div>

          {/* Right: Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-card rounded-2xl border border-white/8 p-8">
              <AnimatePresence mode="wait">
                {submitState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-text-primary">Message sent!</h3>
                    <p className="text-text-secondary text-sm max-w-xs">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      Send a message
                    </h3>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-text-secondary" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Jane Smith"
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-400">{errors.name.message}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-text-secondary" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="jane@company.com"
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email',
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-400">{errors.email.message}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-sm font-medium text-text-secondary"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
                        {...register('message', {
                          required: 'Message is required',
                          minLength: { value: 20, message: 'Please write at least 20 characters' },
                        })}
                      />
                      {errors.message && (
                        <span className="text-xs text-red-400">{errors.message.message}</span>
                      )}
                    </div>

                    {submitState === 'error' && (
                      <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                        Failed to send message. Please try emailing directly.
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={submitState === 'loading'}
                      icon={submitState !== 'loading' ? <Send className="w-4 h-4" /> : undefined}
                      className="w-full"
                    >
                      {submitState === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
