/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      mono: ['Fira Mono', 'monospace'],
    },
    extend: {
      colors: {
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282',
        'gray-4': '#BDBDBD',
        'gray-5': '#E0E0E0',
        'gray-6': '#F2F2F2',
        primary: '#ECB22F',
        accent: '#1EA996',
        dark: '#14171A',
        gray: '#292F37',
        sass: '#CD6799',
        javascript: '#F7DF1E',
        react: '#21232A',
        tourdash: '#367AF0',
        ofadmin: '#FBF9F4',
        promotiva: '#00AEEF',
        ofmobile: '#68985c',
      },
    },
  },
  safelist: ['bg-white', 'text-3xl', 'lg:text-4xl'],
  plugins: [],
};
