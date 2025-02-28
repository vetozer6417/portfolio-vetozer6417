import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d4d4d4',
        secondary: '#FFFFFF',
        lightBg: '#e5e5e5',
        greenBg: '#1e8080'
      },
      fontFamily: {
        sans: ['Fira Code', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        lato: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      screens: {
        "sm": '640px',
        "md": '768px',
        "lg": '1024px',
        "xl": '1280px',
        '2xl': '1536px'
      }         
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    }
  },
  plugins: [],
};
export default config;
