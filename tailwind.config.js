/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fragment Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        framer: {
          bg: '#f2f2f2',
          card: '#ffffff',
          cardDark: '#101010',
          text: '#000000',
          textMuted: '#4d4d4d',
          border: '#e5e5e5',
          accent: '#000000',
          grayBg: '#fafafa',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
