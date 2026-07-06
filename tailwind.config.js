/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: '#0B1020',
        panel: '#111827',
        cyan: '#38BDF8',
        violet: '#A78BFA',
        electric: '#4DFFB5',
      },
      boxShadow: {
        glow: '0 0 48px rgba(56, 232, 255, 0.16)',
        violet: '0 0 44px rgba(167, 139, 250, 0.18)',
        interface: '0 18px 50px rgba(15, 23, 42, 0.14)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at center, rgba(56, 232, 255, 0.12) 0 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
