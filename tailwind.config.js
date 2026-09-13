/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        // PAKAI CSS VARIABLES - otomatis berubah saat toggle dark/light!
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        'accent-dim': 'var(--color-accent-dim)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, var(--color-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-grid) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
