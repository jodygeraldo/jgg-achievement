/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: 'var(--bronze1)',
          2: 'var(--bronze2)',
          3: 'var(--bronze3)',
          4: 'var(--bronze4)',
          5: 'var(--bronze5)',
          6: 'var(--bronze6)',
          7: 'var(--bronze7)',
          8: 'var(--bronze8)',
          9: 'var(--bronze9)',
          10: 'var(--bronze10)',
          11: 'var(--bronze11)',
          12: 'var(--bronze12)',
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
      },
    },
  },
  plugins: [require('tailwindcss-radix'), require('@tailwindcss/forms')],
}
