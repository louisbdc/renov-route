import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        asphalt: '#0F172A', // Slate 900 - Cool dark
        'asphalt-light': '#1E293B', // Slate 800
        brand: {
          DEFAULT: '#3B82F6', // Blue 500
          light: '#60A5FA', // Blue 400
          dark: '#2563EB', // Blue 600
          neon: '#00F0FF', // Cyan accent for glow
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Archivo Black', 'sans-serif'],
      },
      boxShadow: {
        // Ombres Cyan/Bleues pour les effets de néon
        'neon': '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(0, 240, 255, 0.4)',
        'neon-strong': '0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
export default config

