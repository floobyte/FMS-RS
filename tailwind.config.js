/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        slideIn2:'slideIn2 0.5s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideIn2: {
          '0%': { transform: 'translatey(-100%)'},
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}