/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // <== Add this line
  content: [
    './index.html',
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: ['tw-elements/dist/plugin'], // No plugin required for tw-elements v2
}
