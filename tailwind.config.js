/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#42d392',
          600: '#3ac17f',
          700: '#2d9e63',
        },
        'primary-light': '#008B8B',
        secondary: {
          50: '#e5f9f6',
          100: '#e0f2f1',
          200: '#d5f5f2',
          300: '#b0f0e6',
          400: '#8ce7e0',
          500: '#61c0bf',
          600: '#3aafa9',
          700: '#2e8989',
          800: '#1f5f5f',
          900: '#0f3535'
        },
        'secondary-light': '#bbded6',
        tertiary: {
          500: '#647eff'
        },
        'dark-block': {
          400: '#3c414c',
          500: '#32363f',
          600: '#2b2f37',
          700: '#25292f'
        }
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
