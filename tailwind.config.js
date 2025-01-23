/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '110': '28rem',
        '120':'30rem',
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
      },
      colors: {
        'dark-azure-500' : '#007dbc',
        'dark-azure-900' : '#0d295c',
        'gray-azure-100' : '#eff2f5',
        'gray-azure-300' : '#dfe3e6',
        'white-cold-500' : '#f9fafb',
        'white-warm-500' : '#fafafa',
        'dark-cyan-600'  : '#008eb2'
      },
    },
  },
  plugins: [],
}

