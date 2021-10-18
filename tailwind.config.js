module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        dark: "url('/src/components/images/imagedark.jpg')",
        light: "url('/src/components/images/imagelight.jpg')",
      },
      gridTemplateColumns: {
        divide: '66% 33%',
        thirds: '33% 33% 33%',
      },
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
      letterSpacing: {
        realwide: '0.5rem',
      },
      inset: {
        46: '11.4rem',
        82: '20.3rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
