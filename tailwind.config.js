/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    'bg-red',
    'text-pink',
    'bg-yellow',
    'text-orange',
    'bg-cream',
    'text-blue',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				dark: '#0056B3',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				dark: '#4B5563',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			grey: '#D9D9D9',
  			black: '#252523',
  			white: '#ffffff',
  			red: '#E70000',
  			pink: '#FFCDE8',
  			orange: '#CC4624',
  			yellow: '#F2E47F',
  			blue: '#0074C9',
  			cream: '#FFFAE0',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-geist-mono)',
  				'monospace'
  			],
  			exposure: [
  				'EXPOSURE',
  				'sans-serif'
  			],
  			helvetica: [
  				'helvetica-bold',
  				'helvetica-medium',
  				'helvetica-thin',
  				'helvetica-light',
  				'helvetica-roman'
  			],
  			'helvetica-bold': [
  				'helvetica-bold',
  				'sans-serif'
  			],
  			'helvetica-medium': [
  				'helvetica-medium',
  				'sans-serif'
  			],
  			'helvetica-thin': [
  				'helvetica-thin',
  				'sans-serif'
  			],
  			'helvetica-light': [
  				'helvetica-light',
  				'sans-serif'
  			],
  			'helvetica-roman': [
  				'helvetica-roman',
  				'sans-serif'
  			]
  		},
  		spacing: {
  			'128': '32rem',
  			'144': '36rem'
  		},
  		borderRadius: {
  			'4xl': '2rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'bounce-slow': 'bounce 3s infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			slideRight: {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  // Enable dark mode
  darkMode: ["media", "class"], // or 'class' for manual dark mode
};
