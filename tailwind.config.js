/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  important: true,
  theme: {
    extend: {
      colors: {
        general: {
          DEFAULT: '#FAFBFF',
          1: '#161619',
          2: '#656D76',
          3: '#F9FAFB',
        },
        info: {
          DEFAULT: '#175CD3',
        },
      },
      fontFamily: {
        satoshiLight: ['Satoshi-Light', 'sans-serif'],
        satoshi: ['Satoshi-Regular', 'sans-serif'],
        satoshiMedium: ['Satoshi-Medium', 'sans-serif'],
        satoshiBold: ['Satoshi-Bold', 'sans-serif'],
      },
      boxShadow: {
        DEFAULT: '6px 6px 15px 0px rgba(120, 132, 149, 0.15)',
      },
    },
  },
  plugins: [],
};
