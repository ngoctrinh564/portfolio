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

export default function App() {
  const [theme, setTheme] = useLocalStorage('portfolio-theme', 'dark');
  const [backgroundMode, setBackgroundMode] = useLocalStorage('portfolio-background', 'orbit');
  const [motionMode, setMotionMode] = useLocalStorage('portfolio-motion', 'normal');
  const [language, setLanguage] = useLocalStorage('portfolio-language', 'en');
  const reduceMotion = useReducedMotionPreference();
  const labels = translations[language] || translations.en;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.lang = language;
  }, [theme, language]);

  return (
    <LanguageProvider value={{ language, setLanguage, labels }}>
      <BackgroundSystem mode={backgroundMode} motionLevel={motionMode} reduceMotion={reduceMotion} />
      <AppearancePanel
        theme={theme}
        onThemeChange={setTheme}
        backgroundMode={backgroundMode}
        onBackgroundChange={setBackgroundMode}
        motionMode={motionMode}
        onMotionChange={setMotionMode}
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
        <footer className="mx-auto max-w-7xl px-4 pb-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          Built as a high-end creative tech interface portfolio.
        </footer>
      </div>
    </LanguageProvider>
  );
}
