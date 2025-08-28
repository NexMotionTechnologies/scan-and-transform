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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					alt: 'hsl(var(--background-alt))'
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					hover: 'hsl(var(--surface-hover))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' 
					},
					'50%': { 
						transform: 'translateY(-20px) rotateX(5deg) rotateY(10deg)' 
					}
				},
				'float-reverse': {
					'0%, 100%': { 
						transform: 'translateY(-10px) rotateX(5deg) rotateY(-5deg)' 
					},
					'50%': { 
						transform: 'translateY(10px) rotateX(-5deg) rotateY(5deg)' 
					}
				},
				'phone-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotateX(0deg) rotateY(-10deg) rotateZ(5deg)' 
					},
					'50%': { 
						transform: 'translateY(-30px) rotateX(10deg) rotateY(5deg) rotateZ(-5deg)' 
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--secondary) / 0.4)' 
					}
				},
				'slide-up': {
					'0%': { 
						transform: 'translateY(100px)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateY(0px)',
						opacity: '1' 
					}
				},
				'zoom-in': {
					'0%': { 
						transform: 'scale(0.8)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '1' 
					}
				},
				'bounce-in': {
					'0%': { 
						transform: 'scale(0.3)',
						opacity: '0' 
					},
					'50%': { 
						transform: 'scale(1.05)' 
					},
					'70%': { 
						transform: 'scale(0.9)' 
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '1' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-reverse': 'float-reverse 8s ease-in-out infinite',
				'phone-float': 'phone-float 10s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out',
				'zoom-in': 'zoom-in 0.6s ease-out',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-glow': 'var(--gradient-glow)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)',
				'3d': '0 20px 40px hsl(var(--primary) / 0.1), 0 0 0 1px hsl(var(--border))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
