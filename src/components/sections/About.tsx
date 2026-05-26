import { FadeIn } from '@/components/animations/FadeIn';
import { ParallaxWrapper } from '@/components/animations/ParallaxWrapper';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '3', label: 'Industries' },
  { value: 'Full', label: 'Stack' },
];


export function About() {
  return (
    <section id="about" className="relative py-28 bg-surface overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-surface pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <FadeIn direction="up" delay={0}>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                About Me
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                Engineering software{' '}
                <span className="text-primary-light">with purpose</span>
                {' '}and precision.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col gap-4 text-text-secondary leading-relaxed">
                <p>
                  I&apos;m a full-stack developer with 5+ years of experience specializing
                  in the Microsoft/.NET stack — building enterprise web applications, REST APIs,
                  and desktop solutions using C#, ASP.NET Core, Blazor, and SQL Server.
                </p>
                <p>
                  I&apos;ve worked across a range of industries and project types, from
                  multi-country corporate platforms to internal CRMs and ETL automation.
                  I&apos;m comfortable across the full stack — backend services, frontend
                  interfaces with React or Blazor, Azure DevOps pipelines, and database
                  design. I ship clean, maintainable code and thrive in Agile teams.
                </p>
              </div>
            </FadeIn>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} direction="up" delay={0.3 + i * 0.08}>
                  <div className="bg-card rounded-xl p-5 border border-white/8 text-center hover:border-primary/30 transition-colors duration-300">
                    <div className="text-2xl font-extrabold text-primary-light">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-secondary mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: Profile photo */}
          <ParallaxWrapper speed={0.3} className="hidden lg:block">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative flex justify-center">
                {/* Glow */}
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full bg-purple-500/15 blur-2xl" />

                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full max-w-sm">
                  <img
                    src="/profile.jpg"
                    alt="Mira Kris Marcos"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle overlay gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
                </div>

                {/* Floating accent */}
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
              </div>
            </FadeIn>
          </ParallaxWrapper>
        </div>
      </div>
    </section>
  );
}
