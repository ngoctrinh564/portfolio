import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
      <motion.div
        className="absolute left-[-12%] top-[-18%] h-[34rem] w-[34rem] rounded-full bg-cyan/20 blur-3xl"
        animate={{ x: [0, 80, 20, 0], y: [0, 40, 120, 0], scale: [1, 1.12, 0.94, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-18%] right-[-10%] h-[38rem] w-[38rem] rounded-full bg-violet/20 blur-3xl"
        animate={{ x: [0, -90, -30, 0], y: [0, -60, -20, 0], scale: [1, 0.92, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(77,255,181,0.12),transparent_32%),linear-gradient(to_bottom,transparent,rgba(5,7,13,0.88))]" />
    </div>
  );
}
