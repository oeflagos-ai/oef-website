/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saber: {
          imperial: '#1e3a8a', // Imperial Blue
          silver: '#f8fafc',    // Metallic Silver
          border: '#e2e8f0',    // Slate Border
          muted: '#94a3b8',     // Subtitles
          logo: {
            bg: '#f1f3a3',      // Pale Yellow
            border: '#165a9e',  // Scientific Blue
            text: '#000000',    // Black
          },
          accent: {
            reviewer: '#312e81',
            reviewerBg: '#eef2ff',
            offline: '#fbbf24', // Amber 400
            online: '#22c55e',  // Green 500
          }
        }
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  plugins: [],
}