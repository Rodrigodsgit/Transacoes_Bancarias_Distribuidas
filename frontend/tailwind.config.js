/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '4xl': 48,
    },

    colors:{
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      blacktransparent: '#00000080',       
      
      gray:{
       100: '#E6E6E6',
       200:'#C8C8C8'
      },

      blue: {
        900: '#101820',
      },
    },

    extend: {
      fontFamily:{
        sans:'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

