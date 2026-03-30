/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0E4D92',
          sky: '#EAF4FF',
          yellow: '#FFC949',
          slate: '#1F2937',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(14, 77, 146, 0.12)',
      },
    },
  },
  plugins: [],
};
