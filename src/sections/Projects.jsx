import { ExternalLink, Github } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Section } from '../components/Section';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/portfolio';

const accentMap = {
  cyan: 'border-cyan/25 bg-cyan/5',
  violet: 'border-violet/25 bg-violet/5',
  electric: 'border-electric/25 bg-electric/5',
};

export function Projects() {
  const { labels, language } = useLanguage();

  return (
    <Section id="projects" eyebrow={labels.projects.eyebrow} title={labels.projects.title}>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <GlassPanel
            key={project.title}
            className={`group relative overflow-hidden rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-interface ${accentMap[project.accent]}`}
          >
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="rounded-full border border-slate-200/70 bg-slate-50/80 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:bg-slate-900/70">
                  {project.type}
                </span>
                <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                  {project.status}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description[language] ?? project.description.en}</p>
              <div className="mt-5 rounded-3xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/70">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Role</p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{project.role}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200/70 bg-slate-50/80 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-slate-950 dark:hover:text-white"
                >
                  {labels.projects.viewProject} <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                >
                  {labels.projects.github} <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
    </Section>
  );
}
