import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: '1.25rem', sm: '2rem', lg: '3rem', xl: '4.5rem' },
			screens: { '2xl': '1340px' }
		},
		extend: {
			fontFamily: {
				display: ['Fraunces', 'Georgia', 'serif'],
				sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
				},
				signal: {
					DEFAULT: 'hsl(var(--signal))',
					foreground: 'hsl(var(--signal-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				ink: {
					DEFAULT: 'hsl(var(--ink))',
					foreground: 'hsl(var(--ink-foreground))',
					muted: 'hsl(var(--ink-muted))'
				},
				medical: {
					blue: 'hsl(var(--medical-blue))',
					'blue-foreground': 'hsl(var(--medical-blue-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 7px)'
			},
			letterSpacing: {
				'wider-2': '0.14em',
				'widest-2': '0.24em',
			},
			boxShadow: {
				soft: 'var(--shadow-soft)',
				medical: 'var(--shadow-medical)',
				lift: 'var(--shadow-lift)',
				glow: 'var(--glow-primary)',
				'glow-signal': 'var(--glow-signal)',
			},
			backgroundImage: {
				'grid-fine': 'var(--grid-fine)',
				mesh: 'var(--mesh)',
				'gradient-hero': 'var(--gradient-hero)',
			},
			transitionTimingFunction: {
				precision: 'cubic-bezier(0.16, 1, 0.3, 1)',
				soft: 'cubic-bezier(0.33, 1, 0.68, 1)',
			},
			keyframes: {
				'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
				'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
				aurora: {
					'0%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.85' },
					'50%': { transform: 'translate3d(2%,-2%,0) scale(1.08)', opacity: '1' },
					'100%': { transform: 'translate3d(-2%,1%,0) scale(1.04)', opacity: '0.9' }
				},
				'grid-drift': {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '58px 58px' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(28px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
				'pulse-dot': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.3', transform: 'scale(0.7)' }
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.8)', opacity: '0.7' },
					'80%, 100%': { transform: 'scale(2.4)', opacity: '0' }
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				scan: {
					'0%': { transform: 'translateY(-110%)' },
					'100%': { transform: 'translateY(320%)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.55' },
					'50%': { opacity: '1' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				aurora: 'aurora 26s ease-in-out infinite alternate',
				'fade-up': 'fade-up 1s var(--ease-precision) both',
				'fade-in': 'fade-in 1.1s var(--ease-precision) both',
				'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
				'pulse-ring': 'pulse-ring 2.8s cubic-bezier(0.2,0.6,0.3,1) infinite',
				marquee: 'marquee 40s linear infinite',
				scan: 'scan 2.4s cubic-bezier(0.4,0,0.2,1) infinite',
				float: 'float 7s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3.5s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
