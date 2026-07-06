import { CircleDotDashed } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Section } from '../components/Section';
import { timeline } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export function Experience() {
  const { labels } = useLanguage();

  return (
    <Section id="activity" eyebrow={labels.activity.eyebrow} title={labels.activity.title}>
      <GlassPanel className="rounded-[2rem] p-6 shadow-interface">
        <div className="relative">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan via-violet to-transparent sm:block" />
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={`${item.period}-${item.title}`} className="relative grid gap-4 rounded-[1.75rem] border border-slate-200/60 bg-slate-50/85 p-5 transition hover:border-cyan/30 dark:border-white/10 dark:bg-slate-950/70 sm:grid-cols-[10rem_1fr] sm:pl-12">
                <CircleDotDashed className="absolute left-[0.92rem] top-6 hidden h-5 w-5 rounded-full bg-slate-50 text-cyan sm:block dark:bg-slate-950" aria-hidden="true" />
                <div className="font-mono text-sm uppercase tracking-[0.22em] text-cyan">{item.period}</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                    {item.tags?.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200/80 bg-slate-100/80 px-2 py-1 dark:border-white/10 dark:bg-slate-800/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </Section>
  );
}
