import { Fingerprint, ScanFace } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Section } from '../components/Section';
import { profile, profileFacts } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { labels } = useLanguage();

  return (
    <Section id="profile" eyebrow={labels.about.eyebrow} title={labels.about.title}>
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <GlassPanel className="rounded-[2rem] p-7 shadow-interface">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Profile</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-slate-950 dark:text-white">{profile.name}</h3>
              <p className="mt-2 text-cyan">{profile.role}</p>
            </div>
            <div className="grid h-16 w-16 place-items-center rounded-3xl border border-cyan/25 bg-cyan/10 text-cyan shadow-glow">
              <Fingerprint className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-8 rounded-[2rem] border border-slate-200/80 bg-slate-50/85 p-6 dark:border-white/10 dark:bg-slate-950/70">
            <ScanFace className="mb-4 h-6 w-6 text-electric" aria-hidden="true" />
            <p className="leading-8 text-slate-700 dark:text-slate-300">
              {labels.about.summary}
            </p>
          </div>
        </GlassPanel>
        <div className="grid gap-4 sm:grid-cols-2">
          {profileFacts.map((fact) => (
            <GlassPanel key={fact.label} className="rounded-[1.75rem] p-5 transition duration-300 hover:border-cyan/30 hover:bg-cyan/10 dark:hover:border-cyan/30 dark:hover:bg-cyan/10/20">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{fact.label}</p>
              <p className="mt-3 text-base font-medium leading-7 text-slate-900 dark:text-white">{fact.value}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </Section>
  );
}
