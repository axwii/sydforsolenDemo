/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: {
          DEFAULT: '#007AFF',
          dark: '#0056B3',
        },
        secondary: {
          DEFAULT: '#6B7280',
          dark: '#4B5563',
        },
      },
      fontFamily: {
        // Add your custom fonts here
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      spacing: {
        // Add your custom spacing values here
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        // Add your custom border radius values here
        '4xl': '2rem',
      },
      animation: {
        // Add your custom animations here
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
  // Enable dark mode
  darkMode: 'media', // or 'class' for manual dark mode
} 