/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'ff7-ul': '#0000B0',
        'ff7-ll': '#000050',
        'ff7-ur': '#000080',
        'ff7-lr': '#000020',
        'analogous-teal': '#004040',
        'analogous-purple': '#400040',
      },
      backgroundImage: theme => ({
        'ff7-gradient': `linear-gradient(to bottom right, ${theme('colors.ff7-ul')}, ${theme('colors.ff7-ur')}, ${theme('colors.ff7-lr')}, ${theme('colors.ff7-ll')})`,
        'analogous-gradient': `linear-gradient(to bottom right, ${theme('colors.analogous-teal')}, ${theme('colors.analogous-purple')})`,
      }),
      fontFamily: {
        'custom': ['Reactor7', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

