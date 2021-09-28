module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      gap: { 3: '10px' },
      fontSize: {
        '2xs': '0.6rem',
        '3xs': '10px',
        desc: '12px',
        nav: '13px',
        regular: '14px',
      },
      spacing: { 72: '18rem', 84: '21rem', 96: '24rem' },
      colors: {
        gray: {
          100: '#f5f5f9',
          200: '#d8d8df',
          500: '#939295',
          600: '#8b898e',
          700: '#EEEEF2',
          DEFAULT: '#939295',
        },
        white: '#ffffff',
        error: '#d00472',
        green: {
          100: '#2DA295',
          DEFAULT: '#39b5a8',
        },
        indigo: {
          850: '#2C2551',
          900: '#0a0037',
          1000: '#1d1837',
          1050: '#1f193e',
          DEFAULT: '#2601cf',
        },
        purple: {
          250: '#8e82c7',
          350: '#9287ca',
          650: '#8172FF',
          750: '#5c01cf',
        },
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
