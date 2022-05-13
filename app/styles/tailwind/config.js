const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});

module.exports = {
  mode: 'jit',
  content: ['./app/**/*.hbs'],
  theme: {
    fontFamily: {
      lato: ['Lato'],
    },
    extend: {},
  },
  plugins: [rotateY],
};
