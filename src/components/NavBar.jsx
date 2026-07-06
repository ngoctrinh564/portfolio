import { Cpu } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export function NavBar() {
  const { labels } = useLanguage();
  const nav = labels.nav || {};

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl dark:bg-slate-950/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-slate-900 transition hover:text-cyan dark:text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200/20 bg-slate-50/75 text-cyan shadow-interface dark:border-white/10 dark:bg-slate-900/70">
            <Cpu className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-semibold">{profile.name}</span>
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-slate-200/20 bg-slate-50/80 p-1 dark:border-white/10 dark:bg-slate-950/65 md:flex">
          <a href="#profile" className="rounded-full px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-cyan/10 hover:text-cyan dark:text-slate-300 dark:hover:bg-cyan/10">{nav.profile}</a>
          <a href="#capabilities" className="rounded-full px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-cyan/10 hover:text-cyan dark:text-slate-300 dark:hover:bg-cyan/10">{nav.capabilities}</a>
          <a href="#projects" className="rounded-full px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-cyan/10 hover:text-cyan dark:text-slate-300 dark:hover:bg-cyan/10">{nav.work}</a>
          <a href="#activity" className="rounded-full px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-cyan/10 hover:text-cyan dark:text-slate-300 dark:hover:bg-cyan/10">{nav.activity}</a>
          <a href="#contact" className="rounded-full px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-cyan/10 hover:text-cyan dark:text-slate-300 dark:hover:bg-cyan/10">{nav.contact}</a>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs font-semibold text-cyan transition hover:bg-cyan/20"
        >
          {labels.contact?.sendButton ?? 'Contact'}
        </a>
      </nav>
    </header>
  );
}
