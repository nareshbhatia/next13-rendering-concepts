import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['../movie-magic/src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
