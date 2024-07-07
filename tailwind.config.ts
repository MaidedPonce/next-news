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
        'custom-gradient':
          'linear-gradient(59deg, rgba(244,63,63,1) 0%, rgba(166,17,17,1) 35%, rgba(17,39,81,1) 100%)',

        main: "url('/backgrounds/bg-periodista-de-vida.jpeg')",
      },
      colors: {
        brand: 'hsl(var(--brand))',
        'brand-secondary': 'hsl(var(--brand-secondary))',
      },
    },
  },
  plugins: [],
}
export default config
