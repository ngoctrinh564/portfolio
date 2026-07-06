import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const reelSets = [
  { label: 'Creative', values: ['CODE', 'DESIGN', 'SYSTEMS'] },
  { label: 'Process', values: ['BUILD', 'THINK', 'SHIP'] },
  { label: 'Focus', values: ['FRONTEND', 'PRODUCT', 'MOTION'] },
  { label: 'Pixel', values: ['REACT', 'UX', 'PERFORMANCE'] },
  { label: 'Signal', values: ['DATA', 'LOGIC', 'INTERFACE'] },
];

const reelConfig = [
  { title: 'Core', track: ['STRUCTURE', 'FLOW', 'TRACE', 'NODE'] },
  { title: 'Launch', track: ['ITERATE', 'REFINE', 'FRAME', 'SHIFT'] },
  { title: 'Pulse', track: ['AIM', 'SCALE', 'TRACK', 'FOCUS'] },
];

const LOOP_COUNT = 4;

const MOBILE_VIEWPORT = 220; // px (mobile: ~200-240)
const DESKTOP_VIEWPORT = 300; // px (desktop: ~260-320)

function buildReelTrack(track, activeWord) {
  const segment = [...track, activeWord];
  return Array.from({ length: LOOP_COUNT }, () => segment).flat();
}

export function TripleReel({ reduceMotion = false }) {
  const { labels } = useLanguage();
  const prefersReduced = useReducedMotion();
  const safeReduce = reduceMotion || prefersReduced;
  const [activeSet, setActiveSet] = useState(0);
  const [spinId, setSpinId] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [sparkle, setSparkle] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(() => (typeof window !== 'undefined' && window.innerWidth >= 768 ? DESKTOP_VIEWPORT : MOBILE_VIEWPORT));

  const currentSet = useMemo(() => reelSets[activeSet], [activeSet]);

  useEffect(() => {
    if (safeReduce) return undefined;
    const intro = window.setTimeout(() => {
      handleSpin(true);
    }, 450);
    return () => window.clearTimeout(intro);
  }, [safeReduce]);

  useEffect(() => {
    function onResize() {
      setViewportHeight(window.innerWidth >= 768 ? DESKTOP_VIEWPORT : MOBILE_VIEWPORT);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleSpin = (initial = false) => {
    if (isSpinning) return;
    const nextIndex = (activeSet + 1) % reelSets.length;
    setIsSpinning(true);
    setSpinId((current) => current + 1);

    const duration = safeReduce ? 0.5 : initial ? 1.2 : 1.6;
    window.setTimeout(() => {
      setActiveSet(nextIndex);
      setIsSpinning(false);
      setSparkle(true);
      window.setTimeout(() => setSparkle(false), 500);
    }, duration * 1000 + 60);
  };

  return (
    <button
      type="button"
      onClick={() => handleSpin(false)}
      disabled={isSpinning && !safeReduce}
      className="group relative w-full overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-4 text-left shadow-interface backdrop-blur-xl transition hover:border-cyan/40 dark:border-white/10 dark:bg-slate-950/80"
      aria-label="Activate triple reel spin"
    >
      <div className="flex items-center justify-between gap-3 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{labels.reel?.title}</p>
          <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{labels.reel?.title}</h3>
        </div>
        <Sparkles className="h-5 w-5 text-cyan" aria-hidden="true" />
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {reelConfig.map((reel, index) => {
          const activeWord = currentSet.values[index];
          const reelTrack = buildReelTrack(reel.track, activeWord);
          const itemCount = reelTrack.length;
          const itemHeight = Math.round(viewportHeight / 5); // 5 visible rows

          // find indices of activeWord and pick the middle occurrence so it lands in center
          const activeIndices = reelTrack.map((v, i) => (v === activeWord ? i : -1)).filter((i) => i >= 0);
          const activeIndex = activeIndices[Math.floor(activeIndices.length / 2)] ?? 0;

          const finalY = viewportHeight / 2 - itemHeight / 2 - activeIndex * itemHeight;
          const initialY = finalY - (safeReduce ? itemHeight * 2 : itemCount * itemHeight);
          const duration = safeReduce ? 0.5 : [1.4, 1.6, 1.8][index];

          return (
            <div key={reel.title} className="relative rounded-3xl border border-slate-200/70 bg-slate-100/80 p-3 dark:border-white/10 dark:bg-slate-900/60">
              <div className="reel-viewport relative overflow-hidden" style={{ height: viewportHeight }}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent dark:from-slate-950" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

                <div className="absolute left-0 right-0 top-1/2 h-16 -translate-y-1/2 border-t border-b border-slate-300/40 dark:border-slate-700 pointer-events-none rounded-xl" />

                <motion.div
                  key={`${spinId}-${index}`}
                  initial={{ y: isSpinning ? initialY : finalY }}
                  animate={{ y: finalY }}
                  transition={{ duration, ease: 'easeOut' }}
                  className="absolute left-0 right-0 top-0"
                  style={{ willChange: 'transform' }}
                >
                  {reelTrack.map((label, itemIndex) => {
                    const active = itemIndex === activeIndex;
                    return (
                      <div
                        key={`${label}-${itemIndex}`}
                        style={{ height: itemHeight }}
                        className={`flex items-center justify-center rounded-[1.5rem] px-3 text-center text-sm tracking-[0.14em] transition ${
                          active
                            ? 'bg-cyan/10 text-slate-900 dark:bg-cyan/10 dark:text-white font-semibold shadow-sm'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {label}
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              <p className="mt-3 text-center text-xs uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">{reel.title}</p>
              {sparkle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.8, 1.1, 0.8] }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="pointer-events-none absolute left-1/2 top-6 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan/20 blur-sm"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 px-3 py-2 text-xs text-slate-600 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300">
        {labels.reel?.hint}
      </div>
    </button>
  );
}
