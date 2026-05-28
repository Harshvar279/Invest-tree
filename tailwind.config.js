/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0A0A0B',
          900: '#050506',
          800: '#0A0A0B',
          700: '#111114',
          600: '#1A1A1F',
        },
        gold: {
          DEFAULT: '#C8A24B',
          50: '#FBF7EC',
          100: '#F2E8C9',
          200: '#E6D49A',
          300: '#D9BE6B',
          400: '#C8A24B',
          500: '#A8862E',
          600: '#866820',
          700: '#624C17',
        },
        navy: {
          DEFAULT: '#0B1A2A',
          900: '#050E18',
          800: '#0B1A2A',
          700: '#13263C',
        },
        pearl: {
          DEFAULT: '#F4EFE6',
          100: '#FBF8F2',
          200: '#F4EFE6',
          300: '#E6DFD1',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Bodoni Moda', 'serif'],
        display: ['"Bodoni Moda"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
        'shimmer': 'shimmer 6s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
