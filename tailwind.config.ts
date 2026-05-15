import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#141619',
        'ink-soft': '#3a4148',
        muted: '#64707b',
        line: '#d7dde2',
        'line-strong': '#aeb9c2',
        paper: '#f6f7f3',
        surface: '#ffffff',
        'surface-cool': '#eef4f4',
        'surface-warm': '#f7f2e8',
        green: '#244d3f',
        'green-dark': '#17352b',
        blue: '#255d8f',
        gold: '#b26b1f',
      },
      fontFamily: {
        sans: ['var(--font-plex-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'legg-grid':
          'linear-gradient(90deg, rgba(36, 77, 63, 0.055) 1px, transparent 1px), linear-gradient(180deg, rgba(36, 77, 63, 0.045) 1px, transparent 1px)',
        'proof-soft':
          'linear-gradient(135deg, rgba(36, 77, 63, 0.08), rgba(37, 93, 143, 0.10))',
        'process-hatch':
          'repeating-linear-gradient(45deg, rgba(178, 107, 31, 0.12) 0 8px, rgba(255, 255, 255, 0.75) 8px 16px)',
      },
      boxShadow: {
        panel: '0 22px 60px rgba(20, 22, 25, 0.10)',
      },
      borderRadius: {
        brand: '8px',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '8.5': '2.125rem',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
