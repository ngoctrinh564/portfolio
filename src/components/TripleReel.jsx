import { motion, useReducedMotion } from 'framer-motion';
import { CircuitBoard, Cpu, Gauge, ScanLine, Shuffle, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ITEM_HEIGHT = 52;
const VIEWPORT_HEIGHT = 208;
const LOOP_COUNT = 14;

const reelConfig = [
  {
    title: 'Core',
    code: 'NNT-01',
    accent: 'cyan',
    track: ['REACT', 'UI SYSTEM', 'COMPONENT', 'STATE', 'HOOKS', 'MOTION', 'ACCESS', 'FLOW'],
  },
  {
    title: 'Analyze',
    code: 'NNT-02',
    accent: 'electric',
    track: ['BA', 'USER STORY', 'REQ MAP', 'PROCESS', 'ACCEPTANCE', 'DATAFLOW', 'SCOPE', 'VALUE'],
  },
  {
    title: 'Deliver',
    code: 'NNT-03',
    accent: 'violet',
    track: ['PM', 'PO', 'BACKLOG', 'ROADMAP', 'SPRINT', 'PRIORITY', 'QA', 'HANDOFF'],
  },
];

const initialResult = ['REACT', 'REQ MAP', 'BACKLOG'];
const accentClasses = {
  cyan: 'bg-cyan text-cyan',
  electric: 'bg-electric text-electric',
  violet: 'bg-violet text-violet',
};

function randomFrom(values, previous) {
  if (values.length <= 1) return values[0];
  let next = previous;
  while (next === previous) {
    next = values[Math.floor(Math.random() * values.length)];
  }
  return next;
}

function buildLoopedTrack(track) {
  return Array.from({ length: LOOP_COUNT }, () => track).flat();
}

function getTargetIndex(loopedTrack, activeWord) {
  const indices = loopedTrack.map((item, index) => (item === activeWord ? index : -1)).filter((index) => index >= 0);
  return indices[Math.floor(indices.length / 2)] ?? 0;
}

export function TripleReel({ reduceMotion = false }) {
  const { labels } = useLanguage();
  const prefersReduced = useReducedMotion();
  const safeReduce = reduceMotion || prefersReduced;
  const [result, setResult] = useState(initialResult);
  const [visibleResult, setVisibleResult] = useState(null);
  const [spinId, setSpinId] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const jackpot = useMemo(() => visibleResult?.join(' / ') ?? '', [visibleResult]);

  const handleSpin = () => {
    if (isSpinning && !safeReduce) return;

    const nextResult = reelConfig.map((reel, index) => randomFrom(reel.track, result[index]));
    setVisibleResult(null);
    setResult(nextResult);
    setSpinId((current) => current + 1);
    setIsSpinning(true);

    window.setTimeout(() => {
      setIsSpinning(false);
      setVisibleResult(nextResult);
    }, safeReduce ? 260 : 3900);
  };

  return (
    <div className="slot-shell group relative overflow-hidden rounded-[18px] border border-cyan/20 bg-slate-950/92 p-3 text-left shadow-[0_28px_90px_rgba(2,8,23,0.34)] backdrop-blur-2xl sm:p-4">
      <div className="slot-corner slot-corner-tl" />
      <div className="slot-corner slot-corner-br" />
      <div className="relative z-10">
        <div className="mb-4 grid gap-3 border-b border-white/10 pb-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-[10px] border border-cyan/25 bg-cyan/10 text-cyan">
                <CircuitBoard className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-cyan/80">
                Nguyễn Ngọc Trinh
              </p>
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
              Product Capability Slot
            </h3>
          </div>
          <button
            type="button"
            onClick={handleSpin}
            disabled={isSpinning && !safeReduce}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[12px] border border-cyan/35 bg-cyan/10 px-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan transition hover:border-cyan hover:bg-cyan/20 disabled:cursor-wait disabled:opacity-70"
            aria-label="Randomize product technology slot machine"
          >
            <Shuffle className={`h-4 w-4 ${isSpinning ? 'animate-pulse' : ''}`} aria-hidden="true" />
            Spin
          </button>
        </div>

        <div className="slot-machine-frame relative rounded-[16px] border border-white/10 bg-[#050b16] p-3 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.08)] sm:p-4">
          <div className="mb-3 grid grid-cols-3 gap-2">
            {['REQ LOCK', 'FLOW SYNC', 'SHIP READY'].map((label) => (
              <div key={label} className="rounded-[10px] border border-white/10 bg-white/[0.035] px-2 py-2 text-center font-mono text-[0.58rem] uppercase tracking-[0.16em] text-slate-400">
                {label}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute left-2 top-[calc(50%+1.15rem)] z-30 h-0 w-0 -translate-y-1/2 border-y-[10px] border-l-[12px] border-y-transparent border-l-cyan/80" />
          <div className="pointer-events-none absolute right-2 top-[calc(50%+1.15rem)] z-30 h-0 w-0 -translate-y-1/2 border-y-[10px] border-r-[12px] border-y-transparent border-r-cyan/80" />

          <div className="grid gap-3 sm:grid-cols-3">
            {reelConfig.map((reel, reelIndex) => {
              const activeWord = result[reelIndex];
              const loopedTrack = buildLoopedTrack(reel.track);
              const targetIndex = getTargetIndex(loopedTrack, activeWord);
              const finalY = VIEWPORT_HEIGHT / 2 - ITEM_HEIGHT / 2 - targetIndex * ITEM_HEIGHT;
              const spinDistance = reel.track.length * ITEM_HEIGHT * (safeReduce ? 1 : 7 + reelIndex * 2);
              const initialY = finalY - spinDistance;
              const duration = safeReduce ? 0.2 : 2.65 + reelIndex * 0.48;

              return (
                <div
                  key={reel.title}
                  className="relative overflow-hidden rounded-[14px] border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 px-2 py-3"
                >
                  <div className="mb-2 flex items-center justify-between px-1">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-slate-500">
                      {reel.code}
                    </span>
                    <span className={`h-1.5 w-10 rounded-full shadow-[0_0_18px_currentColor] ${accentClasses[reel.accent]}`} />
                  </div>
                  <div
                    className="relative mx-auto max-w-[12rem] overflow-hidden rounded-[12px] border border-white/10 bg-black/35"
                    style={{ height: VIEWPORT_HEIGHT }}
                  >
                    <div className="slot-glass pointer-events-none absolute inset-0 z-30" />
                    <div className="pointer-events-none absolute inset-x-3 top-1/2 z-20 h-[52px] -translate-y-1/2 rounded-[9px] border border-white/10 bg-black/20" />
                    <motion.div
                      key={`${spinId}-${reel.title}`}
                      initial={{ y: isSpinning ? initialY : finalY }}
                      animate={{ y: finalY }}
                      transition={{ duration, ease: [0.08, 0.72, 0.12, 1] }}
                      className="absolute left-0 right-0 top-0"
                      style={{ willChange: 'transform' }}
                    >
                      {loopedTrack.map((item, itemIndex) => {
                        const active = itemIndex === targetIndex;
                        return (
                          <div
                            key={`${item}-${itemIndex}`}
                            className="flex items-center justify-center px-3"
                            style={{ height: ITEM_HEIGHT }}
                          >
                            <div
                              className={`flex h-11 w-full items-center justify-center rounded-[9px] border px-2 text-center font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] ${
                                active
                                  ? 'border-cyan/55 bg-cyan/20 text-white shadow-[0_0_30px_rgba(56,189,248,0.22)]'
                                  : 'border-white/10 bg-slate-900/92 text-slate-500'
                              }`}
                            >
                              {item}
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  </div>
                  <p className="mt-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
                    {reel.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="min-h-[4.25rem] rounded-[14px] border border-white/10 bg-white/[0.035] px-4 py-3">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">
              Output signal
            </p>
            {visibleResult ? (
              <motion.p
                key={jackpot}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 font-mono text-sm font-semibold text-white"
              >
                {jackpot}
              </motion.p>
            ) : (
              <p className="mt-1 font-mono text-xs text-slate-500">
                {isSpinning ? 'Resolving signal...' : labels.reel?.pending}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 rounded-[14px] border border-electric/25 bg-electric/10 px-4 py-3 text-electric">
            {isSpinning ? <Gauge className="h-4 w-4 animate-pulse" aria-hidden="true" /> : <Cpu className="h-4 w-4" aria-hidden="true" />}
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em]">
              {visibleResult ? 'Resolved' : 'Standby'}
            </span>
            {visibleResult ? <Sparkles className="h-4 w-4" aria-hidden="true" /> : <ScanLine className="h-4 w-4" aria-hidden="true" />}
          </div>
        </div>

      </div>
    </div>
  );
}
