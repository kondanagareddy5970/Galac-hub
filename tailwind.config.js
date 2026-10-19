/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#000205',
        'azure': '#2E7EFF',
        'azure-deep': '#1F5FD1',
        'azure-tint': '#E8F0FF',
        'cultured': '#F7F7F7',
        'bunker': '#15191E',
        'platinum': '#E9EAEC',
        'text-muted-light': '#5B6270',
        'text-muted-dark': '#9AA3B2',
      },
      fontFamily: {
        'geist': ['Geist Variable', 'Geist', 'Inter', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
      },
      fontSize: {
        'display-1': ['clamp(52px, 6vw, 86px)', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        'display-2': ['clamp(28px, 3vw, 42px)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'body': ['clamp(16px, 1.2vw, 18px)', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'section-y': 'clamp(72px, 10vw, 160px)',
        'section-y-lg': 'clamp(96px, 12vw, 200px)',
      },
      maxWidth: {
        'container': '1320px',
      },
      borderRadius: {
        'pill': '999px',
        'frame': '24px',
        'chip': '12px',
      },
      backdropBlur: {
        'nav': '18px',
      },
      animation: {
        'orbit-slow': 'orbit 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'draw-line': 'drawLine 1.5s ease forwards',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      transitionTimingFunction: {
        'primary': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
