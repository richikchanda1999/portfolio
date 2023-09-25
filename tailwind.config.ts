import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';

type Utility = {
  [key: string]: {
    [key: string]: string | number;
  }
};

type PluginFunctionParams = {
  addUtilities: (utilities: Utility, variants?: string[]) => void;
  // You can also define other plugin function parameters like addComponents, e, etc.
};

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
    },
  },
  plugins: [],
}
export default config
