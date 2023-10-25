import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '1/5': '20%',
      },
      colors: {
        'primary': '#FFF7DB',
        'secondary': '#102036',
        'tertiary': '#6D91AB'
      },
      height: {
        'navbar-height': '64px',
        'screen-height': 'calc(100vh - 64px)'
      }
    },
  },
  plugins: [],
}
export default config
