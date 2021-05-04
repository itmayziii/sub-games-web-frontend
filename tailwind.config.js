/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // https://material.io/design/color/the-color-system.html#color-usage-and-palettes
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#4E18F0',
        50: '#EFE6FE',
        100: '#D5C2FC',
        200: '#B798FB'
      },
      'on-primary': '#FFF',
      secondary: {
        DEFAULT: '#03DAC6'
      },
      'on-secondary': '#000',
      background: '#F2F2F2',
      'on-background': '#5B5561',
      surface: '#FFF',
      'on-surface': '#5B5561',
      error: '#F01818',
      'on-error': '#FFF'
    },
    extend: {}
  },
  variants: {
    extend: {
      scale: ['active'],
      boxShadow: ['active']
    }
  },
  plugins: []
}
