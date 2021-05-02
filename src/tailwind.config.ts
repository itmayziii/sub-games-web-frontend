const tailwindConfig = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#4E18F0',
      secondary: '#B798FB',
      gray: {
        DEFAULT: '#808080',
        light: '#F2F2F2',
        dark: '#5B5561'
      },
      white: '#FFF',
      error: '#F01818'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}

export default tailwindConfig
