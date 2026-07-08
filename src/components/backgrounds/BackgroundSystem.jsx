import { OrbitBackground } from './OrbitBackground';
import { SolarSystemBackground } from './SolarSystemBackground';

export function BackgroundSystem({ mode = 'orbit', reduceMotion = false }) {
  const safeReduce = reduceMotion;
  const motionProps = safeReduce ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: 'easeInOut' };

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,247,253,0.94),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_20%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(8,13,30,0.96),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,232,255,0.08),transparent_20%)]" />
      {mode === 'orbit' && <OrbitBackground safeReduce={safeReduce} motionProps={motionProps} />}
      {mode === 'solar' && <SolarSystemBackground safeReduce={safeReduce} />}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-100/10 dark:to-[rgba(5,7,13,0.7)]" />
    </div>
  );
}
