import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {(eyebrow || title) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.26em] text-cyan">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}
