import { FadeIn } from '@/components/animations/FadeIn';
import { ParallaxWrapper } from '@/components/animations/ParallaxWrapper';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '3', label: 'Industries' },
  { value: 'Full', label: 'Stack' },
];

const codeSnippet = `// ASP.NET Core — REST API Controller
[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _service;

    public ProjectsController(IProjectService service)
    {
        _service = service;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var project = await _service.GetByIdAsync(id);
        if (project is null)
            return NotFound();

        return Ok(project);
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] CreateProjectDto dto)
    {
        var result = await _service.CreateAsync(dto);
        return CreatedAtAction(
            nameof(GetById),
            new { id = result.Id },
            result);
    }
}`;

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

          {/* Right: Code block */}
          <ParallaxWrapper speed={0.3} className="hidden lg:block">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl" />

                {/* Terminal window */}
                <div className="relative bg-[#0d1117] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-[#161b22]">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-xs text-text-secondary/60 font-mono">
                      ProjectsController.cs
                    </span>
                  </div>

                  {/* Code */}
                  <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto">
                    <code>
                      {codeSnippet.split('\n').map((line, i) => (
                        <span key={i} className="block">
                          <span className="select-none text-white/20 mr-4 text-right inline-block w-6">
                            {i + 1}
                          </span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: colorizeCode(line),
                            }}
                          />
                        </span>
                      ))}
                    </code>
                  </pre>
                </div>

                {/* Floating accent */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-purple-500/20 blur-xl" />
              </div>
            </FadeIn>
          </ParallaxWrapper>
        </div>
      </div>
    </section>
  );
}

function colorizeCode(line: string): string {
  return line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(
      /\/\/.*/g,
      (m) => `<span style="color:#6a737d">${m}</span>`
    )
    .replace(
      /(@\w+)/g,
      (m) => `<span style="color:#f97583">${m}</span>`
    )
    .replace(
      /\b(async|await|public|private|return|new|using|namespace|class|interface|void|var|if|null|is)\b/g,
      (m) => `<span style="color:#f97583">${m}</span>`
    )
    .replace(
      /\b(string|int|bool|Task|IActionResult|ActionResult|IProjectService|CreateProjectDto)\b/g,
      (m) => `<span style="color:#79b8ff">${m}</span>`
    )
    .replace(
      /('.*?'|".*?"|`.*?`)/g,
      (m) => `<span style="color:#9ecbff">${m}</span>`
    )
    .replace(/\s/g, (m) => m === ' ' ? '&nbsp;' : m);
}
