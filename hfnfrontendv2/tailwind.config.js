/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "black": "#212121",
      "white": "#FFFFFF",
      "red": "#E92025",
      "green": "#40B881"
    },
    fontSize: {
      "xxs": "9px",
      "xs": '11px',
      "sm": '13px',
      "base": "16px",
      "lg": "19px",
      "xl": '24px',
      "2xl": '28px',
      "3xl": "33px",
      "h3": "40px",
      "h2": "48px",
      "h1": "57px"
    },
    extend: {
      keyframes: {
        slide_in: {
          from: { transform: 'translateX(-15rem)' },
          to: { transform: 'translateX(0)' },
        }
      },
      animation: {
        slide_in: 'slide_in 0.4s ease-in',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}