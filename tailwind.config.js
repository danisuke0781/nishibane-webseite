/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Verkehrs‑Blau (Beispiel: #0057B8)
        primary: '#0057B8',
      },
    },
  },
  plugins: [],
}
