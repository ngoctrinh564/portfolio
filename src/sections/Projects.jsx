import { ExternalLink, Github } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Section } from '../components/Section';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/portfolio';

export function Projects() {
  const { labels, language } = useLanguage();

  return (
    <Section id="projects" eyebrow={labels.projects.eyebrow} title={labels.projects.title}>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <GlassPanel
            key={project.title}
            className="group relative overflow-hidden rounded-[16px] border-slate-200/75 bg-white/82 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-cyan/30 hover:shadow-interface dark:border-white/10 dark:bg-slate-950/78"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent opacity-70" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/55 via-transparent to-cyan/5 opacity-80 dark:from-white/[0.035] dark:to-cyan/[0.035]" />
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="rounded-[8px] border border-slate-200/80 bg-slate-50/85 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-slate-500 dark:border-white/10 dark:bg-slate-900/75">
                  {project.type}
                </span>
                <span className="rounded-[8px] border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  {project.status}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description[language] ?? project.description.en}</p>
              <div className="mt-5 rounded-[12px] border border-slate-200/75 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-900/55">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{labels.projects.role}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{project.role}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-[8px] border border-slate-200/75 bg-white/75 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-slate-950 dark:hover:text-white"
                >
                  {labels.projects.viewProject} <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
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
