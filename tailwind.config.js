/** @type {import('tailwindcss').Config} */
export default {
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
        background: '#0A0A0C', // Near-black charcoal
        surface: '#121216',    // Slightly lighter for cards
        primary: '#F4F4F5',    // Off-white
        secondary: '#A1A1AA',  // Muted gray
        accent: '#22D3EE',     // Electric cyan
        'accent-dim': 'rgba(34, 211, 238, 0.1)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f1f23 1px, transparent 1px), linear-gradient(to bottom, #1f1f23 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
