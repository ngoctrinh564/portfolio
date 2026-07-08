import { useEffect } from 'react';
import { BackgroundSystem } from './components/backgrounds/BackgroundSystem';
import { AppearancePanel } from './components/controls/AppearancePanel';
import { NavBar } from './components/NavBar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useReducedMotionPreference } from './hooks/useReducedMotionPreference';
import { LanguageProvider } from './context/LanguageContext';
import { translations } from './data/i18n';

const backgroundModes = ['orbit', 'solar'];

export default function App() {
  const [theme, setTheme] = useLocalStorage('portfolio-theme', 'dark');
  const [backgroundMode, setBackgroundMode] = useLocalStorage('portfolio-background', 'orbit');
  const [language, setLanguage] = useLocalStorage('portfolio-language', 'vi');
  const reduceMotion = useReducedMotionPreference();
  const labels = translations[language] || translations.en;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.lang = language;
  }, [theme, language]);

  useEffect(() => {
    if (!backgroundModes.includes(backgroundMode)) {
      setBackgroundMode('orbit');
    }
  }, [backgroundMode, setBackgroundMode]);

  return (
    <LanguageProvider value={{ language, setLanguage, labels }}>
      <BackgroundSystem mode={backgroundMode} reduceMotion={reduceMotion} />
      <AppearancePanel
        theme={theme}
        onThemeChange={setTheme}
        backgroundMode={backgroundMode}
        onBackgroundChange={setBackgroundMode}
        language={language}
        onLanguageChange={setLanguage}
      />
      <div className="relative min-h-screen overflow-hidden">
        <NavBar />
        <Hero reduceMotion={reduceMotion} />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="mx-auto max-w-7xl px-4 pb-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500 sm:px-6 lg:px-8">
          Nguyễn Ngọc Trinh / Creative technology portfolio
        </footer>
      </div>
    </LanguageProvider>
  );
}
