/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      },
      animation: {
        'slide-down': 'slideDown 0.5s ease-out'
      },
      colors: {
        primary: {
          300: '#8CF2B6',
          400: '#59D89F',
          500: '#42d392',
          600: '#34CF89',
          700: '#2d9e63'
        },
        'primary-light': '#008B8B',
        secondary: {
          50: '#e5f9f6',
          100: '#B2ECE2',
          200: '#d5f5f2',
          300: '#A2F6F5',
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
