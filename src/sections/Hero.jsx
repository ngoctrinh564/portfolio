import { motion } from 'framer-motion';
import { Activity, CircleDot, Code2, RadioTower } from 'lucide-react';
import { Button } from '../components/Button';
import { GlassPanel } from '../components/GlassPanel';
import { TripleReel } from '../components/TripleReel';
import { commandStats, orbitNodes, profile } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

function OrbitVisual() {
  return (
    <GlassPanel className="relative min-h-[30rem] overflow-hidden rounded-[2rem] p-5 shadow-interface">
      <div className="absolute inset-0 bg-radial-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20" />
      <div className="absolute left-1/2 top-1/2 h-84 w-84 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/20" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {orbitNodes.map((node, index) => {
          const Icon = node.icon;
          const positions = [
            'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
            'bottom-8 right-0 translate-x-1/2',
            'bottom-8 left-0 -translate-x-1/2',
          ];
          return (
            <div
              key={node.label}
              className={`absolute ${positions[index]} grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/5 shadow-glow backdrop-blur`}
            >
              <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
              <span className="sr-only">{node.label}</span>
            </div>
          );
        })}
      </motion.div>
      <div className="relative z-10 flex h-full min-h-[26rem] flex-col justify-between">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono uppercase tracking-[0.22em]">Interface Core</span>
          <span className="flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 font-mono text-cyan">
            <CircleDot className="h-3 w-3" aria-hidden="true" />
            Online
          </span>
        </div>
        <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border border-cyan/30 bg-cyan/10 shadow-[0_0_80px_rgba(56,232,255,0.18)]">
          <div className="grid h-28 w-28 place-items-center rounded-full border border-violet/30 bg-violet/10">
            <RadioTower className="h-11 w-11 text-white" aria-hidden="true" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {commandStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
              <p className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}

export function Hero({ reduceMotion }) {
  const { labels } = useLanguage();

  return (
    <section id="profile" className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/20 bg-slate-50/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan shadow-interface dark:border-white/10 dark:bg-slate-950/60">
          <Activity className="h-4 w-4" aria-hidden="true" />
          {labels.hero.badge}
        </div>
        <h1 className="text-balance font-display text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
          {labels.hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {labels.hero.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#projects">{labels.hero.primaryCta}</Button>
          <Button href="#contact" variant="secondary">
            {labels.hero.secondaryCta}
          </Button>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {labels.hero.status.map((status) => (
            <div key={status} className="rounded-3xl border border-slate-200/70 bg-slate-50/85 px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300">
              {status}
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 22 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-5">
          <GlassPanel className="rounded-[2rem] p-5 shadow-interface">
            <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Signature module</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              A refined three-reel interface that speaks to systems, direction, and creative product logic.
            </p>
            <div className="mt-6">
              <TripleReel reduceMotion={reduceMotion} />
            </div>
          </GlassPanel>
          <OrbitVisual />
        </div>
      </motion.div>
    </section>
  );
}
