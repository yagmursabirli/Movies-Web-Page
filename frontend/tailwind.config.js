/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgNavbar: '#000000',
        hoverColor: 'rgba(255, 255, 255, 0.1)',
        bgFavorites: 'rgba(255, 255, 255, 0.05)',
        h2: '#e50914',
        p: '#999',
        bgHome: '#333',
        bgSearch: '#e50914',
        hoverSearch: '#f40612',
        movieCard: '1a1a1a',
        favButton: 'rgba(0, 0, 0, 0.5)',
        hoverFav: 'rgba(0, 0, 0, 0.8)',
        activeFav: '#ff4757',
      },
      boxShadow:{
        custom: '0 2px 4px rgba(0, 0, 0, 0.1)',
        home: ' 0 0 0 2px #666',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
  ],
}
