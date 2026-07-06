import { ArrowRight } from 'lucide-react';

const styles = {
  primary:
    'border-cyan/40 bg-cyan/70 text-slate-950 shadow-[0_0_24px_rgba(56,232,255,0.2)] hover:border-cyan hover:bg-cyan/80 dark:border-cyan/40 dark:bg-cyan/15 dark:text-white',
  secondary:
    'border-slate-200 bg-slate-100 text-slate-950 hover:border-slate-300 hover:bg-slate-200 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/[0.08]',
};

export function Button({ children, href, variant = 'primary', icon = true }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition duration-300 ${styles[variant]}`}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight
          className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
