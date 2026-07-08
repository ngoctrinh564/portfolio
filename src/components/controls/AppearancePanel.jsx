import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Orbit, Sparkles, SunMedium } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const backgroundOptions = [
  { value: 'orbit', labelKey: 'orbit', icon: Orbit },
  { value: 'solar', labelKey: 'solar', icon: SunMedium },
];

export function AppearancePanel({ theme, onThemeChange, backgroundMode, onBackgroundChange }) {
  const { language, setLanguage, labels } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onMouseDown = (event) => {
      const clickedPanel = panelRef.current?.contains(event.target);
      const clickedButton = buttonRef.current?.contains(event.target);

      if (!clickedPanel && !clickedButton) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2 md:right-6 md:bottom-6">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={labels.appearance.title}
          aria-expanded={open}
          className="inline-flex items-center gap-2 rounded-[14px] border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 shadow-interface transition hover:border-cyan/40 hover:bg-cyan/10 dark:border-white/10 dark:bg-slate-950/90 dark:text-white"
        >
          <Sparkles className="h-5 w-5 text-cyan" aria-hidden="true" />
          <span className="hidden md:inline">{labels.appearance.title}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            ref={panelRef}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-x-4 bottom-[4.75rem] z-50 mx-auto max-w-sm rounded-[18px] border border-slate-200/80 bg-white/95 p-4 shadow-interface backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 md:right-6 md:left-auto md:bottom-[5.25rem] md:mx-0"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{labels.appearance.title}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">{labels.appearance.title}</h3>
              </div>
              <div className="rounded-[12px] bg-slate-100/80 p-2 text-slate-600 shadow-sm dark:bg-slate-800/80 dark:text-slate-300">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[14px] border border-slate-200/80 bg-slate-50/80 p-3 dark:border-white/10 dark:bg-slate-950/70">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{labels.appearance.theme}</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onThemeChange('light')}
                    aria-label={labels.appearance.light}
                    className={`rounded-[11px] border px-3 py-2 text-sm font-semibold transition ${
                      theme === 'light'
                        ? 'border-slate-900 bg-slate-950 text-white dark:border-cyan dark:bg-cyan/10 dark:text-white'
                        : 'border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300'
                    }`}
                  >
                    <SunMedium className="mr-2 inline h-4 w-4" aria-hidden="true" />
                    {labels.appearance.light}
                  </button>
                  <button
                    type="button"
                    onClick={() => onThemeChange('dark')}
                    aria-label={labels.appearance.dark}
                    className={`rounded-[11px] border px-3 py-2 text-sm font-semibold transition ${
                      theme === 'dark'
                        ? 'border-cyan bg-cyan/10 text-cyan'
                        : 'border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300'
                    }`}
                  >
                    <Moon className="mr-2 inline h-4 w-4" aria-hidden="true" />
                    {labels.appearance.dark}
                  </button>
                </div>
              </div>

              <div className="rounded-[14px] border border-slate-200/80 bg-slate-50/80 p-3 dark:border-white/10 dark:bg-slate-950/70">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{labels.appearance.background}</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {backgroundOptions.map((option) => {
                    const Icon = option.icon;
                    const active = backgroundMode === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => onBackgroundChange(option.value)}
                        aria-label={labels.appearance[option.labelKey]}
                        title={labels.appearance[option.labelKey]}
                        className={`grid h-12 place-items-center rounded-[11px] border transition ${
                          active
                            ? 'border-cyan bg-cyan/10 text-cyan shadow-[0_0_24px_rgba(56,189,248,0.16)]'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-cyan/35 hover:bg-cyan/10 hover:text-cyan dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300'
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[14px] border border-slate-200/80 bg-slate-50/80 p-3 dark:border-white/10 dark:bg-slate-950/70">
                <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
                  <span>{labels.appearance.language}</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {['en', 'vi'].map((locale) => (
                    <button
                      key={locale}
                      type="button"
                      onClick={() => setLanguage(locale)}
                      aria-label={labels.appearance[locale]}
                      className={`rounded-[11px] border px-3 py-2 text-sm font-semibold transition ${
                        language === locale
                          ? 'border-cyan bg-cyan/10 text-slate-900 dark:text-white'
                          : 'border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300'
                      }`}
                    >
                      {labels.appearance[locale]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
