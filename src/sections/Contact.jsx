import { Send } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Section } from '../components/Section';
import { contactCards, profile } from '../data/portfolio';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { labels } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus(labels.contact.requiredMessage || labels.contact.requiredMessage);
      return;
    }
    setStatus(labels.contact.successMessage || labels.contact.successMessage);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" eyebrow={labels.contact.eyebrow} title={labels.contact.title}>
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <GlassPanel className="rounded-[18px] p-8 shadow-interface">
          <div className="space-y-6">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-[16px] border border-slate-200/70 bg-slate-50/85 p-5 transition hover:border-cyan/30 hover:bg-cyan/10 dark:border-white/10 dark:bg-slate-950/70"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-cyan/10 text-cyan">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">{card.label}</p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{card.value}</p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-[0.22em] text-cyan">Open</span>
                </a>
              );
            })}
          </div>
        </GlassPanel>
        <GlassPanel className="rounded-[18px] p-8 shadow-interface">
          <div className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              {labels.contact.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <span>{labels.contact.nameLabel}</span>
                <input
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder={labels.contact.nameLabel}
                  aria-label={labels.contact.nameLabel}
                  className="min-h-12 w-full rounded-[12px] border border-slate-200/70 bg-white/90 px-4 text-slate-900 outline-none transition focus:border-cyan/50 dark:border-white/10 dark:bg-slate-950/80 dark:text-white"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <span>{labels.contact.emailLabel}</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder={labels.contact.emailLabel}
                  aria-label={labels.contact.emailLabel}
                  className="min-h-12 w-full rounded-[12px] border border-slate-200/70 bg-white/90 px-4 text-slate-900 outline-none transition focus:border-cyan/50 dark:border-white/10 dark:bg-slate-950/80 dark:text-white"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <span>{labels.contact.messageLabel}</span>
              <textarea
                value={form.message}
                onChange={handleChange('message')}
                placeholder={labels.contact.messageLabel}
                aria-label={labels.contact.messageLabel}
                className="min-h-[12rem] w-full resize-none rounded-[12px] border border-slate-200/70 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan/50 dark:border-white/10 dark:bg-slate-950/80 dark:text-white"
              />
            </label>
            {status && <p className="text-sm text-cyan">{status}</p>}
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[12px] border border-cyan/40 bg-cyan/15 px-5 text-sm font-semibold text-slate-950 transition hover:border-cyan hover:bg-cyan/25 dark:text-white"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {labels.contact.sendButton}
            </button>
          </div>
        </GlassPanel>
      </div>
    </Section>
  );
}
