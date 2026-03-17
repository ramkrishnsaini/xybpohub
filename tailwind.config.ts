import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F1C35',
        'warm-white': '#FAFAF8',
        'slate-bpo': '#3D4A5C',
        mist: '#F0F2F5',
        teal: {
          DEFAULT: '#00C9A7',
          dark: '#009E84',
        },
        'orange-bpo': '#FF5C35',
        'purple-bpo': '#7C5CFC',
        mint: '#C2F5EC',
        coral: '#FFD4C2',
        lavender: '#DDD6FF',
        'lime-bpo': '#D4F5C2',
        'amber-bpo': '#FFF0C2',
        'rose-bpo': '#FFD6E8',
      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 1.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      boxShadow: {
        card: '0 4px 24px rgba(15,28,53,0.08)',
        'card-hover': '0 16px 40px rgba(15,28,53,0.12)',
        hero: '0 24px 80px rgba(15,28,53,0.12)',
        orange: '0 8px 24px rgba(255,92,53,0.35)',
        'orange-lg': '0 12px 32px rgba(255,92,53,0.45)',
      },
      letterSpacing: {
        tighter2: '-0.05em',
        tighter3: '-0.07em',
      },
    },
  },
  plugins: [],
}

export default config
