/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        neutral: '#2b3440',
        light: '#d7dde4',
        accent: '#93c5fd'
      }
    }
  },
  plugins: []
};