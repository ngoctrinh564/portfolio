import { Cpu } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { profile } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export function NavBar() {
  const { labels } = useLanguage();
  const nav = labels.nav || {};
  const navItems = useMemo(
    () => [
      { id: 'profile', label: nav.profile },
      { id: 'capabilities', label: nav.capabilities },
      { id: 'projects', label: nav.work },
      { id: 'activity', label: nav.activity },
      { id: 'contact', label: nav.contact },
    ],
    [nav.activity, nav.capabilities, nav.contact, nav.profile, nav.work],
  );
  const [activeSection, setActiveSection] = useState('profile');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      const currentY = window.scrollY + 120;
      const documentBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0;

      setScrollProgress(progress);

      if (documentBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      const current = navItems.reduce((active, item) => {
        const section = document.getElementById(item.id);

        if (!section) {
          return active;
        }

        return section.offsetTop <= currentY ? item.id : active;
      }, navItems[0].id);

      setActiveSection(current);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [navItems]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl dark:bg-slate-950/60">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-slate-200/50 dark:bg-white/5">
        <div
          className="h-full origin-left rounded-r-full bg-gradient-to-r from-cyan via-electric to-violet shadow-[0_0_18px_rgba(56,189,248,0.45)] will-change-transform"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#profile" className="flex items-center gap-3 text-slate-900 transition hover:text-cyan dark:text-white">
          <span className="grid h-10 w-10 place-items-center rounded-[12px] border border-slate-200/20 bg-slate-50/75 text-cyan shadow-interface dark:border-white/10 dark:bg-slate-900/70">
            <Cpu className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-semibold">{profile.name}</span>
        </a>
        <div className="hidden items-center gap-1 rounded-[14px] border border-slate-200/20 bg-slate-50/80 p-1 dark:border-white/10 dark:bg-slate-950/65 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setActiveSection(item.id)}
                className={`rounded-[10px] px-4 py-2 text-xs font-medium transition ${
                  isActive
                    ? 'bg-cyan/15 text-cyan shadow-sm ring-1 ring-cyan/20'
                    : 'text-slate-700 hover:bg-cyan/10 hover:text-cyan dark:text-slate-300 dark:hover:bg-cyan/10'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-[12px] border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs font-semibold text-cyan transition hover:bg-cyan/20"
        >
          {labels.contact?.sendButton ?? 'Contact'}
        </a>
      </nav>
    </header>
  );
}
