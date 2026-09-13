/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- TAMBAHKAN BARIS INI
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
        // Kita buat warna ini adaptif. 
        // Default adalah Dark. Kita akan override di komponen untuk Light mode.
        background: '#0A0A0C', 
        surface: '#121216',    
        primary: '#F4F4F5',    
        secondary: '#A1A1AA',  
        accent: '#22D3EE',     
        'accent-dim': 'rgba(34, 211, 238, 0.1)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f1f23 1px, transparent 1px), linear-gradient(to bottom, #1f1f23 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
