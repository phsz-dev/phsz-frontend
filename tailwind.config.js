/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300:'#ffebec',
          400:'#ff9f9b',
          500:'#ffb6b9',
          600:'#ff8c94',
          700:'#ff6060',
          800:'#e84545',
          900:'#d81b60',

        },
        'primary-light':'#fae3d9',
        secondary: {
          50:'#e5f9f6',
          100:'#e0f2f1',
          200:'#d5f5f2',
          300:'#b0f0e6',
          400:'#8ce7e0',
          500:'#61c0bf',
          600:'#3aafa9',
          700:'#2e8989',
          800:'#1f5f5f',
          900:'#0f3535'

        },
        'secondary-light':'#bbded6'

      },
      backgroundImage: {
        'role-play-assistant': "url('/src/assets/role/assistant.webp')",
        'role-play-doctor': "url('/src/assets/role/doctor.webp')",
        'role-play-reception': "url('/src/assets/role/reception.webp')"
      }
    }
  },
  plugins: [],
  darkMode: 'selector'
}
