/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C64F4FB8",
      },
      backgroundImage: {
        'role-play-assistant': "url('/src/assets/role/assistant.webp')", 
        'role-play-doctor': "url('/src/assets/role/doctor.webp')", 
        'role-play-reception': "url('/src/assets/role/reception.webp')", 
      }
    },

  },
  plugins: [],
  darkMode: 'selector'
}

