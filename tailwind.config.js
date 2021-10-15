module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        mobile1: "url('/src/images/mobile-image-hero-1.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
