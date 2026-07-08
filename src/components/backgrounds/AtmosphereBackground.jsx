import { motion } from 'framer-motion';

export function AtmosphereBackground({ safeReduce, motionProps }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_20%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(4,12,24,0.95),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_20%)]" />
      <motion.div
        className="absolute left-[-12%] top-8 h-96 w-96 rounded-full bg-cyan/15 blur-[8rem]"
        animate={safeReduce ? undefined : { x: [0, 24, -18, 0], y: [0, -16, 14, 0], opacity: [0.95, 0.75, 0.95] }}
        transition={motionProps}
      />
      <motion.div
        className="absolute right-[-14%] top-[22%] h-96 w-96 rounded-full bg-violet/15 blur-[7.5rem]"
        animate={safeReduce ? undefined : { x: [0, -20, 16, 0], y: [0, 18, -16, 0], opacity: [0.85, 0.62, 0.85] }}
        transition={motionProps}
      />
      <motion.div
        className="absolute left-[14%] top-[54%] h-72 w-72 rounded-full bg-amber-400/10 blur-[7rem]"
        animate={safeReduce ? undefined : { x: [0, -18, 18, 0], y: [0, 12, -12, 0], opacity: [0.88, 0.6, 0.88] }}
        transition={motionProps}
      />
      <motion.div
        className="absolute right-[18%] top-[62%] h-64 w-64 rounded-full bg-pink-200/10 blur-[7rem]"
        animate={safeReduce ? undefined : { x: [0, 16, -16, 0], y: [0, -14, 14, 0], opacity: [0.8, 0.5, 0.8] }}
        transition={motionProps}
      />
      <div className="absolute left-[12%] top-[10%] h-4 w-4 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute right-[18%] bottom-[16%] h-3 w-3 rounded-full bg-violet/20 blur-2xl" />
    </>
  );
}
