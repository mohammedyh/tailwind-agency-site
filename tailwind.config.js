/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Barlow', ...defaultTheme.fontFamily.sans],
        body: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        accent: '#fbbf24',
        'accent-dark': '#e2ac20',
      },
    },
  },
  plugins: [],
}
