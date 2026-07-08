import { motion } from 'framer-motion';

const planets = [
  {
    name: 'mercury',
    orbit: 'clamp(7rem, 17vmin, 10rem)',
    size: 'clamp(0.34rem, 0.75vmin, 0.48rem)',
    duration: 22,
    delay: -4,
    angle: 18,
    surface: 'radial-gradient(circle at 30% 28%, #f8fafc 0 10%, #cbd5e1 22%, #64748b 54%, #334155 100%)',
  },
  {
    name: 'venus',
    orbit: 'clamp(10rem, 24vmin, 14rem)',
    size: 'clamp(0.54rem, 1.05vmin, 0.74rem)',
    duration: 35,
    delay: -13,
    angle: 78,
    surface: 'radial-gradient(circle at 32% 28%, #fff7ed 0 10%, #fed7aa 32%, #f97316 62%, #9a3412 100%)',
  },
  {
    name: 'earth',
    orbit: 'clamp(13rem, 32vmin, 18rem)',
    size: 'clamp(0.68rem, 1.25vmin, 0.92rem)',
    duration: 49,
    delay: -22,
    angle: 142,
    moon: true,
    surface:
      'radial-gradient(circle at 32% 28%, #e0f2fe 0 9%, #38bdf8 26%, transparent 27%), radial-gradient(circle at 58% 62%, #166534 0 16%, transparent 17%), radial-gradient(circle at 34% 55%, #22c55e 0 11%, transparent 12%), radial-gradient(circle at 62% 36%, #0f766e 0 10%, transparent 11%), linear-gradient(135deg, #1d4ed8 0%, #0284c7 58%, #082f49 100%)',
  },
  {
    name: 'mars',
    orbit: 'clamp(16rem, 40vmin, 22rem)',
    size: 'clamp(0.6rem, 1.08vmin, 0.8rem)',
    duration: 66,
    delay: -34,
    angle: 218,
    surface: 'radial-gradient(circle at 35% 30%, #fed7aa 0 11%, #fb923c 34%, #c2410c 68%, #7c2d12 100%)',
  },
  {
    name: 'jupiter',
    orbit: 'clamp(20rem, 51vmin, 28rem)',
    size: 'clamp(1.1rem, 2.1vmin, 1.55rem)',
    duration: 95,
    delay: -52,
    angle: 288,
    surface:
      'linear-gradient(165deg, #fef3c7 0 12%, #b45309 13% 22%, #fde68a 23% 34%, #92400e 35% 45%, #fef3c7 46% 58%, #d97706 59% 70%, #78350f 71% 100%)',
  },
  {
    name: 'saturn',
    orbit: 'clamp(24rem, 64vmin, 36rem)',
    size: 'clamp(0.92rem, 1.78vmin, 1.3rem)',
    duration: 124,
    delay: -73,
    angle: 328,
    ring: true,
    surface: 'radial-gradient(circle at 34% 30%, #fefce8 0 11%, #fde68a 32%, #ca8a04 65%, #713f12 100%)',
  },
];

const stars = [
  ['6%', '14%', 1, 0.34],
  ['10%', '52%', 1.4, 0.24],
  ['14%', '82%', 1, 0.3],
  ['22%', '22%', 1.2, 0.22],
  ['31%', '9%', 1, 0.28],
  ['38%', '72%', 1.4, 0.2],
  ['47%', '17%', 1, 0.28],
  ['56%', '86%', 1, 0.2],
  ['64%', '31%', 1.5, 0.3],
  ['72%', '58%', 1, 0.22],
  ['81%', '18%', 1.4, 0.3],
  ['88%', '43%', 1, 0.22],
  ['94%', '78%', 1.2, 0.25],
];

const asteroidAngles = [9, 28, 47, 71, 96, 119, 143, 166, 192, 217, 241, 268, 291, 317, 342];
const cometTrails = [
  ['9%', '26%', '18rem', '-24deg', 0],
  ['70%', '13%', '15rem', '18deg', 1.5],
  ['62%', '84%', '20rem', '-15deg', 3],
];

export function SolarSystemBackground({ safeReduce }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(253,186,116,0.16),transparent_19%),radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_86%_22%,rgba(167,139,250,0.12),transparent_22%),radial-gradient(circle_at_80%_82%,rgba(77,255,181,0.08),transparent_24%),linear-gradient(135deg,rgba(248,250,252,0.96),rgba(226,232,240,0.9))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.11),transparent_19%),radial-gradient(circle_at_16%_20%,rgba(56,189,248,0.1),transparent_25%),radial-gradient(circle_at_86%_22%,rgba(167,139,250,0.09),transparent_23%),radial-gradient(circle_at_80%_82%,rgba(77,255,181,0.06),transparent_24%),linear-gradient(135deg,rgba(5,10,22,0.97),rgba(11,17,31,0.95))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.32)_0_1px,transparent_1.3px)] bg-[size:82px_82px] opacity-30 dark:opacity-20" />

      <div className="absolute left-[6%] top-[18%] h-36 w-36 rounded-full bg-cyan/10 blur-3xl dark:bg-cyan/8" />
      <div className="absolute right-[6%] bottom-[14%] h-44 w-44 rounded-full bg-violet/10 blur-3xl dark:bg-violet/8" />
      <div className="absolute left-[70%] top-[50%] h-28 w-28 rounded-full bg-electric/10 blur-3xl dark:bg-electric/5" />

      {stars.map(([left, top, size, opacity]) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute rounded-full bg-slate-500 dark:bg-white"
          style={{ left, top, width: size, height: size, opacity }}
          animate={safeReduce ? undefined : { opacity: [opacity * 0.6, opacity, opacity * 0.6], scale: [1, 1.22, 1] }}
          transition={{ duration: 4.5 + Number.parseInt(left, 10) / 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {cometTrails.map(([left, top, width, rotate, delay]) => (
        <motion.div
          key={`${left}-${top}`}
          className="absolute h-px rounded-full bg-gradient-to-r from-transparent via-white/45 to-transparent dark:via-white/26"
          style={{ left, top, width, rotate }}
          animate={safeReduce ? undefined : { opacity: [0.08, 0.42, 0.08], x: [0, 26, 0] }}
          transition={{ duration: 7.5, delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute right-[10%] top-[18%] h-28 w-28 rounded-full border border-cyan/10 bg-[radial-gradient(circle_at_35%_28%,rgba(224,242,254,0.2),rgba(56,189,248,0.04)_62%,transparent_72%)]"
        animate={safeReduce ? undefined : { y: [0, 10, 0], x: [0, -6, 0], opacity: [0.34, 0.58, 0.34] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute left-1/2 top-1/2 h-[min(112vmin,64rem)] w-[min(112vmin,64rem)] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-[clamp(5.4rem,13vmin,8.5rem)] w-[clamp(5.4rem,13vmin,8.5rem)] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="h-full w-full rounded-full shadow-[0_0_90px_rgba(251,191,36,0.26)]"
            style={{
              background:
                'radial-gradient(circle at 34% 32%, rgba(255,247,237,0.96) 0 10%, rgba(253,224,71,0.8) 27%, rgba(245,158,11,0.38) 55%, rgba(245,158,11,0.04) 74%, rgba(245,158,11,0) 82%)',
            }}
            animate={safeReduce ? undefined : { scale: [1, 1.025, 1], opacity: [0.82, 0.96, 0.82] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.div
          className="absolute left-1/2 top-1/2 h-[clamp(18.5rem,47vmin,26rem)] w-[clamp(18.5rem,47vmin,26rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-500/10 dark:border-white/10"
          animate={safeReduce ? undefined : { rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
        >
          {asteroidAngles.map((angle, index) => (
            <span
              key={angle}
              className="absolute left-1/2 top-1/2 rounded-full bg-slate-500/30 dark:bg-white/25"
              style={{
                width: index % 3 === 0 ? 2 : 1,
                height: index % 4 === 0 ? 2 : 1,
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(clamp(9.25rem, 23.5vmin, 13rem))`,
              }}
            />
          ))}
        </motion.div>

        {planets.map((planet) => (
          <div
            key={planet.name}
            className="absolute left-1/2 top-1/2"
            style={{
              width: planet.orbit,
              height: planet.orbit,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <motion.div
              className="relative h-full w-full rounded-full border border-slate-500/15 dark:border-white/10"
              initial={{ rotate: planet.angle }}
              animate={safeReduce ? { rotate: planet.angle } : { rotate: planet.angle + 360 }}
              transition={{ duration: planet.duration, delay: planet.delay, repeat: Infinity, ease: 'linear' }}
            >
              <div
                className="absolute right-0 top-1/2 rounded-full shadow-[0_0_20px_rgba(148,163,184,0.24)]"
                style={{
                  width: planet.size,
                  height: planet.size,
                  transform: 'translate(50%, -50%)',
                  background: planet.surface,
                }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/24 via-transparent to-black/28" />
                {planet.moon && (
                  <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-slate-200/80 dark:bg-slate-100/70" style={{ transform: 'translate(-50%, -50%) rotate(36deg) translateX(1.05rem)' }} />
                )}
                {planet.ring && (
                  <span
                    className="absolute left-1/2 top-1/2 rounded-full border border-amber-100/45 dark:border-amber-100/25"
                    style={{
                      width: '260%',
                      height: '72%',
                      transform: 'translate(-50%, -50%) rotate(-16deg)',
                    }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[13%] right-[8%] h-px w-[26rem] rotate-[-21deg] bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      <div className="absolute left-[4%] top-[42%] h-px w-[24rem] rotate-[18deg] bg-gradient-to-r from-transparent via-violet/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/28 via-white/14 to-white/34 dark:from-slate-950/24 dark:via-slate-950/24 dark:to-slate-950/54" />
    </>
  );
}
