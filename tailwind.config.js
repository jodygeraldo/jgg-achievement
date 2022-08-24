/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'var(--brown1)',
          2: 'var(--brown2)',
          3: 'var(--brown3)',
          4: 'var(--brown4)',
          5: 'var(--brown5)',
          6: 'var(--brown6)',
          7: 'var(--brown7)',
          8: 'var(--brown8)',
          9: 'var(--brown9)',
          10: 'var(--brown10)',
          11: 'var(--brown11)',
          12: 'var(--brown12)',
        },
        gray: {
          1: 'var(--sand1)',
          2: 'var(--sand2)',
          3: 'var(--sand3)',
          4: 'var(--sand4)',
          5: 'var(--sand5)',
          6: 'var(--sand6)',
          7: 'var(--sand7)',
          8: 'var(--sand8)',
          9: 'var(--sand9)',
          10: 'var(--sand10)',
          11: 'var(--sand11)',
          12: 'var(--sand12)',
        },
        overlay: {
          1: 'var(--blackA1)',
          2: 'var(--blackA2)',
          3: 'var(--blackA3)',
          4: 'var(--blackA4)',
          5: 'var(--blackA5)',
          6: 'var(--blackA6)',
          7: 'var(--blackA7)',
          8: 'var(--blackA8)',
          9: 'var(--blackA9)',
          10: 'var(--blackA10)',
          11: 'var(--blackA11)',
          12: 'var(--blackA12)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-radix'), require('@tailwindcss/forms')],
}
