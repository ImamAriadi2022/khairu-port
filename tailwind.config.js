/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        manga: {
          paper: '#FAFAFA',
          paperDark: '#F0EFEA',
          ink: '#0A0A0A',
          black: '#000000',
          red: '#E63946',
          redDark: '#C1121F',
          yellow: '#FFD166',
          yellowDark: '#F4A261',
          gray: '#E2E2E2',
          muted: '#737373',
          border: '#0A0A0A',
        },
      },
      fontFamily: {
        comic: ['Bangers', 'cursive', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'manga-sm': '3px 3px 0px #0A0A0A',
        'manga': '5px 5px 0px #0A0A0A',
        'manga-lg': '8px 8px 0px #0A0A0A',
        'manga-xl': '12px 12px 0px #0A0A0A',
        'manga-red': '6px 6px 0px #E63946',
        'manga-yellow': '6px 6px 0px #FFD166',
        'manga-white': '5px 5px 0px #FFFFFF',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      backgroundImage: {
        'halftone-subtle': 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
        'halftone-dense': 'radial-gradient(circle, #0A0A0A 1.5px, transparent 1.5px)',
      },
    },
  },
  plugins: [],
}
