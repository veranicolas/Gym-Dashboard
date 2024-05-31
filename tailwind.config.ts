import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        colors: {
            'texto': {
              50: '#070813',
              100: '#0e1025',
              200: '#1b214b',
              300: '#293170',
              400: '#364196',
              500: '#4452bb',
              600: '#6974c9',
              700: '#8f97d6',
              800: '#b4bae4',
              900: '#dadcf1',
              950: '#eceef8',
            },
            'fondo': {
              50: '#050514',
              100: '#0a0a29',
              200: '#141452',
              300: '#1f1f7a',
              400: '#2929a3',
              500: '#3333cc',
              600: '#5c5cd6',
              700: '#8585e0',
              800: '#adadeb',
              900: '#d6d6f5',
              950: '#ebebfa',
            },
            'primario': {
              50: '#060714',
              100: '#0b0d28',
              200: '#171b4f',
              300: '#222877',
              400: '#2e359e',
              500: '#3943c6',
              600: '#6168d1',
              700: '#888edd',
              800: '#b0b4e8',
              900: '#d7d9f4',
              950: '#ebecf9',
            },
            'secundario': {
              50: '#030416',
              100: '#06082d',
              200: '#0d1159',
              300: '#131986',
              400: '#1921b3',
              500: '#2029df',
              600: '#4c54e6',
              700: '#797fec',
              800: '#a6aaf2',
              900: '#d2d4f9',
              950: '#e9eafc',
            },
            'acento': {
              50: '#060614',
              100: '#0b0d28',
              200: '#171a4f',
              300: '#222777',
              400: '#2e349e',
              500: '#3940c6',
              600: '#6167d1',
              700: '#888ddd',
              800: '#b0b3e8',
              900: '#d7d9f4',
              950: '#ebecf9',
            },
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

// https://www.realtimecolors.com/?colors=0a0c1c-fbfbfe-3942c6-eaebfc-3c44c6&fonts=Inter-Inter URL for the color scheme

export default config