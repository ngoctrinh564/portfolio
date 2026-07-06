import { motion } from 'framer-motion';

export function OrbitBackground({ safeReduce, motionProps }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,247,253,0.96),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.14),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(8,18,38,0.92),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,232,255,0.12),transparent_24%)]" />
      <motion.div
        className="absolute left-10 top-12 h-72 w-72 rounded-full border border-cyan/15"
        animate={safeReduce ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute right-16 top-24 h-56 w-56 rounded-full border border-violet/15"
        animate={safeReduce ? undefined : { rotate: [0, -360] }}
        transition={{ duration: 52, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-[34%] top-[24%] h-36 w-36 rounded-full border border-amber/20"
        animate={safeReduce ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-[35%] top-[23%] h-3 w-3 rounded-full bg-cyan/80 shadow-[0_0_30px_rgba(56,232,255,0.25)]"
        animate={safeReduce ? undefined : { x: [0, 16, 0, -14, 0], y: [0, -12, 0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[16%] top-[18%] h-2 w-2 rounded-full bg-violet/70 shadow-[0_0_20px_rgba(167,139,250,0.2)]"
        animate={safeReduce ? undefined : { y: [0, 14, 0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[22%] top-[68%] h-2 w-2 rounded-full bg-amber/70 shadow-[0_0_20px_rgba(245,158,11,0.22)]"
        animate={safeReduce ? undefined : { x: [0, 12, 0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute left-[18%] top-[20%] h-4 w-4 rounded-full bg-white/60 blur-md dark:bg-white/20" />
      <div className="absolute right-[24%] top-[58%] h-4 w-4 rounded-full bg-cyan/20 blur-2xl" />
    </>
  );
}
