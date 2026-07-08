import { motion } from 'framer-motion';
import { GlassPanel } from '../components/GlassPanel';
import { Section } from '../components/Section';
import { skills } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';

export function Skills() {
  const { labels } = useLanguage();

  return (
    <Section id="capabilities" eyebrow={labels.capabilities.eyebrow} title={labels.capabilities.title}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <GlassPanel className="group h-full rounded-[16px] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-interface">
                <div className="flex items-center justify-between gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-[14px] border border-slate-200/20 bg-slate-50/80 text-cyan dark:border-white/10 dark:bg-slate-900/65">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-cyan">{skill.signal}%</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-950 dark:text-white">{skill.group}</h3>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.signal}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15 + index * 0.05 }}
                  />
                </div>
                <div className="mt-5 space-y-2">
                  {skill.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan/80" />
                      {item}
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
