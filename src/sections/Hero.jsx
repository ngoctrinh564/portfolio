import { motion } from 'framer-motion';
import { Activity, CircleDot, RadioTower } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '../components/Button';
import { GlassPanel } from '../components/GlassPanel';
import { TripleReel } from '../components/TripleReel';
import { commandStats, orbitNodes, workflowSignals } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

function ProductConsole() {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {workflowSignals.map((signal) => (
        <GlassPanel key={signal.label} className="relative overflow-hidden rounded-[14px] p-4">
          <div className="absolute inset-y-3 left-0 w-1 bg-gradient-to-b from-cyan via-electric to-violet" />
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-cyan">{signal.label}</p>
          <h3 className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">{signal.value}</h3>
          <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{signal.detail}</p>
        </GlassPanel>
      ))}
    </div>
  );
}

function OrbitVisual({ reduceMotion = false }) {
  const orbitConfig = useMemo(
    () =>
      orbitNodes.map((node, index) => {
        const radius = index % 2 === 0 ? 118 : 146;
        const drift = Math.round((Math.random() - 0.5) * 18);
        const duration = 22 + Math.round(Math.random() * 12) + index;

        return {
          ...node,
          angle: index * 60 + drift,
          duration,
          delay: -Math.random() * duration,
          radius,
          reverse: index % 3 === 1,
        };
      }),
    [],
  );

  return (
    <GlassPanel className="relative min-h-[27rem] overflow-hidden rounded-[18px] border-cyan/15 p-5 shadow-interface">
      <div className="absolute inset-0 bg-radial-grid opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.13),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_34%)]" />
      <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent" />
      <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/15" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/15" />

      <div className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2">
        {orbitConfig.map((node) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.label}
              className="absolute inset-0"
              initial={{ rotate: node.angle }}
              animate={reduceMotion ? { rotate: node.angle } : { rotate: node.reverse ? node.angle - 360 : node.angle + 360 }}
              transition={{ duration: node.duration, delay: node.delay, repeat: Infinity, ease: 'linear' }}
            >
              <div
                className="absolute left-1/2 top-1/2"
                style={{ transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateX(${node.radius}px) rotate(${-node.angle}deg)` }}
              >
                <motion.div
                  className="grid h-14 w-14 place-items-center rounded-[14px] border border-white/15 bg-white/10 shadow-glow backdrop-blur-md dark:bg-slate-950/70"
                  animate={reduceMotion ? undefined : { y: [0, -5, 0, 4, 0], scale: [1, 1.04, 1] }}
                  transition={{ duration: 5 + node.duration / 8, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
                  <span className="sr-only">{node.label}</span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 flex h-full min-h-[25rem] flex-col justify-between gap-5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono uppercase tracking-[0.22em]">Product Interface Core</span>
          <span className="flex items-center gap-2 rounded-[10px] border border-cyan/25 bg-cyan/10 px-3 py-1 font-mono text-cyan">
            <CircleDot className="h-3 w-3" aria-hidden="true" />
            Online
          </span>
        </div>
        <motion.div
          className="relative mx-auto grid h-40 w-40 place-items-center rounded-[28px] border border-cyan/25 bg-slate-950/8 shadow-[0_0_80px_rgba(56,232,255,0.18)] backdrop-blur-sm dark:bg-slate-950/35"
          animate={reduceMotion ? undefined : { rotate: [0, 1.6, -1.2, 0], scale: [1, 1.015, 1] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-4 rounded-[22px] border border-white/10" />
          <div className="grid h-24 w-24 place-items-center rounded-[20px] border border-violet/25 bg-violet/10 shadow-[inset_0_0_24px_rgba(167,139,250,0.12)]">
            <RadioTower className="h-10 w-10 text-slate-950 dark:text-white" aria-hidden="true" />
          </div>
        </motion.div>
        <div className="grid grid-cols-3 gap-2">
          {['BA', 'PM', 'PO'].map((item) => (
            <div key={item} className="rounded-[12px] border border-cyan/15 bg-cyan/5 px-3 py-2 text-center font-mono text-xs font-semibold text-cyan">
              {item}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {commandStats.map((stat) => (
            <div key={stat.label} className="rounded-[14px] border border-white/10 bg-white/5 p-3">
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
    <section id="profile" className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-7 px-4 pb-12 pt-24 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-[12px] border border-slate-200/20 bg-slate-50/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan shadow-interface dark:border-white/10 dark:bg-slate-950/60">
          <Activity className="h-4 w-4" aria-hidden="true" />
          {labels.hero.badge}
        </div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
          Portfolio / Nguyễn Ngọc Trinh
        </p>
        <h1 className="text-balance font-display text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
          {labels.hero.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {labels.hero.description}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href="#projects">{labels.hero.primaryCta}</Button>
          <Button href="#contact" variant="secondary">
            {labels.hero.secondaryCta}
          </Button>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {labels.hero.status.map((status) => (
            <div key={status} className="rounded-[14px] border border-slate-200/70 bg-slate-50/85 px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300">
              {status}
            </div>
          ))}
        </div>
        <ProductConsole />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 22 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-4">
          <GlassPanel className="rounded-[18px] border-cyan/15 p-3 shadow-interface sm:p-4">
            <TripleReel reduceMotion={reduceMotion} />
          </GlassPanel>
          <OrbitVisual reduceMotion={reduceMotion} />
        </div>
      </motion.div>
    </section>
  );
}
