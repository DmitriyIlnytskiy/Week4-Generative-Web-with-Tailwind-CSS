// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        // Here's "neon" accent from the static site
        neon: '#ff003c',
      },
    },
  },
  plugins: [],
};
export default config;