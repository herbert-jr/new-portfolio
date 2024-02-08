import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-main': '#fff7ed',
        'background-burger': '#e5ded2',
        'burger-content': '#292928',
        copy: '#292928',
        'copy-light': '#faf5f5',
        'sub-title': '#464644',
        primary: '#fc7643',
        'primary-content': '#3f1201',
        'primary-dark': '#fb5111',
        'primary-light': '#fd9b75',
        secondary: '#273248',
        'secondary-content': '#a2b0cc',
        'secondary-dark': '#151b27',
        'secondary-light': '#394969',
        logo: '#ffcea9',
        menu: '#AF4F41',
      },
    },
  },
  plugins: [],
}
export default config
