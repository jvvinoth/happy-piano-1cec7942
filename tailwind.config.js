/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C2420',
        secondary: '#8B7968',
        accent: {
          DEFAULT: '#C9A687',
          hover: '#B8956F',
        },
        background: '#FAF8F5',
        surface: '#F0EBE3',
        text: {
          DEFAULT: '#2C2420',
          muted: '#6B5D52',
        },
        border: '#E5DDD5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      lineHeight: {
        relaxed: '1.8',
      },
    },
  },
  plugins: [],
}
