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
        divide: '67% 33%',
        thirds: '33% 34% 33%',
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
      margin: {
        middle: '40%',
      },
      height: {
        virtual: '40vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
