/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F4EC',
        foreground: '#000000',
        primary: '#FEB656',
        secondary: '#EFEADE',
        dark: '#000000',
        textGray: '#4F4F4F',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 