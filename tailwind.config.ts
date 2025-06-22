import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        accent: {
          orange: '#FFB347',
          yellow: '#FFE066',
        },
      },
    },
  },
  plugins: [],
};

export default config; 