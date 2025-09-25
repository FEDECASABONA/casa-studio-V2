/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-bg': '#000000',
        'portfolio-text': '#ffffff',
        'portfolio-accent': '#ff4444',
        'portfolio-nav': '#4a90e2',
        'portfolio-gallery-1': '#90ee90',
        'portfolio-gallery-2': '#87ceeb',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'mono': ['Monaco', 'Menlo', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'nav': '14px',
        'nav-small': '8.4px', // 40% smaller than 14px
        'nav-medium': '10.08px', // 20% larger than nav-small (8.4px * 1.2)
        'marquee-xl': '69.6px', // 50% smaller than 139.2px
        'marquee-lg': '48px', // 50% smaller than 96px
        'marquee-md': '32px', // 50% smaller than 64px
        'marquee-sm': '16px', // 50% smaller than 32px
        'marquee-xs': '9.6px', // 50% smaller than 19.2px
      },
      animation: {
        'marquee': 'marquee 100s linear infinite',
        'scroll-up': 'scroll-up 0.3s ease-out',
        'scroll-down': 'scroll-down 0.3s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0.8' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0.8' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
