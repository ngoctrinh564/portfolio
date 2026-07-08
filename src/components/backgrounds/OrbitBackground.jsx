import { motion } from 'framer-motion';

const orbitRings = [
  { size: 'clamp(18rem, 42vmin, 32rem)', duration: 72, opacity: 0.22, angle: 8 },
  { size: 'clamp(24rem, 58vmin, 43rem)', duration: 96, opacity: 0.16, angle: -18 },
  { size: 'clamp(30rem, 74vmin, 56rem)', duration: 128, opacity: 0.12, angle: 28 },
];

const nodes = [
  { angle: 16, radius: 'clamp(9rem, 21vmin, 16rem)', size: 8, color: 'rgba(56,189,248,0.72)', duration: 18 },
  { angle: 92, radius: 'clamp(12rem, 29vmin, 21rem)', size: 6, color: 'rgba(77,255,181,0.58)', duration: 21 },
  { angle: 166, radius: 'clamp(15rem, 37vmin, 28rem)', size: 7, color: 'rgba(167,139,250,0.62)', duration: 25 },
  { angle: 238, radius: 'clamp(11rem, 25vmin, 19rem)', size: 5, color: 'rgba(251,191,36,0.58)', duration: 19 },
  { angle: 306, radius: 'clamp(16rem, 40vmin, 30rem)', size: 6, color: 'rgba(56,189,248,0.55)', duration: 27 },
];

const stars = [
  ['8%', '18%', 1, 0.24],
  ['14%', '68%', 1.4, 0.22],
  ['23%', '31%', 1, 0.2],
  ['34%', '12%', 1.2, 0.24],
  ['47%', '79%', 1, 0.18],
  ['59%', '24%', 1.5, 0.24],
  ['72%', '68%', 1, 0.2],
  ['83%', '34%', 1.4, 0.23],
  ['91%', '18%', 1, 0.18],
  ['94%', '82%', 1.2, 0.22],
];

const dataLines = [
  ['12%', '30%', '18rem', '12deg', 'cyan'],
  ['64%', '24%', '16rem', '-18deg', 'violet'],
  ['8%', '72%', '24rem', '-10deg', 'electric'],
  ['72%', '78%', '19rem', '16deg', 'cyan'],
];

export function OrbitBackground({ safeReduce }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(56,189,248,0.16),transparent_27%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.13),transparent_25%),radial-gradient(circle_at_50%_78%,rgba(77,255,181,0.1),transparent_28%),linear-gradient(135deg,rgba(248,250,252,0.96),rgba(226,232,240,0.9))] dark:bg-[radial-gradient(circle_at_22%_18%,rgba(56,189,248,0.13),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(167,139,250,0.1),transparent_26%),radial-gradient(circle_at_50%_78%,rgba(77,255,181,0.07),transparent_28%),linear-gradient(135deg,rgba(5,10,22,0.97),rgba(10,16,30,0.95))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-65 dark:bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0_1px,transparent_1.6px)] bg-[size:34px_34px] opacity-45 dark:opacity-30" />

      <div className="absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-cyan/10 blur-3xl dark:bg-cyan/8" />
      <div className="absolute right-[8%] top-[22%] h-52 w-52 rounded-full bg-violet/10 blur-3xl dark:bg-violet/8" />
      <div className="absolute bottom-[12%] left-[42%] h-48 w-48 rounded-full bg-electric/10 blur-3xl dark:bg-electric/6" />

      {stars.map(([left, top, size, opacity]) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute rounded-full bg-slate-500 dark:bg-white"
          style={{ left, top, width: size, height: size, opacity }}
          animate={safeReduce ? undefined : { opacity: [opacity * 0.55, opacity, opacity * 0.55], scale: [1, 1.18, 1] }}
          transition={{ duration: 5 + Number.parseInt(left, 10) / 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {dataLines.map(([left, top, width, rotate, tone]) => (
        <motion.div
          key={`${left}-${top}`}
          className={`absolute h-px bg-gradient-to-r from-transparent ${
            tone === 'violet' ? 'via-violet/22' : tone === 'electric' ? 'via-electric/18' : 'via-cyan/22'
          } to-transparent`}
          style={{ left, top, width, rotate }}
          animate={safeReduce ? undefined : { opacity: [0.2, 0.55, 0.2], x: [0, 18, 0] }}
          transition={{ duration: 8 + Number.parseInt(left, 10) / 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 h-[min(92vmin,58rem)] w-[min(92vmin,58rem)] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-[clamp(8rem,20vmin,15rem)] w-[clamp(8rem,20vmin,15rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/15 bg-cyan/5 shadow-[0_0_70px_rgba(56,189,248,0.12)]" />

        {orbitRings.map((ring) => (
          <div
            key={ring.size}
            className="absolute left-1/2 top-1/2"
            style={{
              width: ring.size,
              height: ring.size,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <motion.div
              className="relative h-full w-full rounded-full border border-cyan/20"
              style={{ opacity: ring.opacity }}
              initial={{ rotate: ring.angle }}
              animate={safeReduce ? { rotate: ring.angle } : { rotate: ring.angle + 360 }}
              transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan/70 shadow-[0_0_24px_rgba(56,189,248,0.35)]" />
              <div className="absolute bottom-[16%] right-[9%] h-1.5 w-1.5 rounded-full bg-white/55 dark:bg-white/32" />
              <div className="absolute left-[14%] top-[18%] h-1 w-12 rotate-[-28deg] rounded-full bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
            </motion.div>
          </div>
        ))}

        <div className="absolute left-1/2 top-1/2 h-[min(76vmin,48rem)] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan/16 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-[min(76vmin,48rem)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-violet/16 to-transparent" />

        {nodes.map((node) => (
          <motion.div
            key={node.angle}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateX(${node.radius})`,
            }}
            animate={safeReduce ? undefined : { y: [0, -8, 0, 6, 0], opacity: [0.72, 1, 0.72] }}
            transition={{ duration: node.duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span
              className="block rounded-full shadow-[0_0_26px_currentColor]"
              style={{ width: node.size, height: node.size, backgroundColor: node.color, color: node.color }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute left-[18%] bottom-[18%] h-20 w-20 rounded-full border border-electric/10 bg-electric/5"
        animate={safeReduce ? undefined : { y: [0, -10, 0], opacity: [0.26, 0.5, 0.26] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[16%] top-[44%] h-24 w-24 rounded-full border border-violet/10 bg-violet/5"
        animate={safeReduce ? undefined : { x: [0, 10, 0], opacity: [0.22, 0.46, 0.22] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute left-[4%] top-[42%] h-px w-[26rem] rotate-[18deg] bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      <div className="absolute right-[3%] top-[64%] h-px w-[28rem] rotate-[-20deg] bg-gradient-to-r from-transparent via-violet/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/24 via-white/12 to-white/32 dark:from-slate-950/22 dark:via-slate-950/24 dark:to-slate-950/54" />
    </>
  );
}
