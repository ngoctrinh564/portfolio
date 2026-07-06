import { motion } from 'framer-motion';

export function SignalBackground({ safeReduce, motionProps }) {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.85)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.85)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] dark:opacity-25" />
      <motion.div
        className="absolute top-16 left-8 h-1 w-40 rounded-full bg-cyan/20"
        animate={safeReduce ? undefined : { x: [0, 18, 0] }}
        transition={motionProps}
      />
      <motion.div
        className="absolute top-24 right-10 h-28 w-0.5 rounded-full bg-violet/20"
        animate={safeReduce ? undefined : { y: [0, 18, 0] }}
        transition={motionProps}
      />
      <motion.div
        className="absolute left-[22%] top-[38%] h-1 w-32 rounded-full bg-amber/18"
        animate={safeReduce ? undefined : { x: [0, -16, 0] }}
        transition={motionProps}
      />
      <motion.div
        className="absolute left-[12%] bottom-[22%] h-24 w-0.5 rounded-full bg-cyan/15"
        animate={safeReduce ? undefined : { y: [0, -16, 0] }}
        transition={motionProps}
      />
      <div className="absolute left-[20%] top-[18%] h-3 w-3 rounded-full bg-cyan/70" />
      <div className="absolute right-[26%] top-[24%] h-3 w-3 rounded-full bg-violet/70" />
      <div className="absolute left-[30%] bottom-[28%] h-3 w-3 rounded-full bg-amber/70" />
      <div className="absolute left-[45%] top-[12%] h-2 w-2 rounded-full bg-slate-900/20 dark:bg-white/20" />
      <div className="absolute right-[12%] bottom-[18%] h-2 w-2 rounded-full bg-slate-900/20 dark:bg-white/20" />
    </>
  );
}
