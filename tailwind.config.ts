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
              50: '#09100c',
              100: '#132017',
              200: '#25412e',
              300: '#386146',
              400: '#4a825d',
              500: '#5da274',
              600: '#7db590',
              700: '#9ec7ac',
              800: '#bedac7',
              900: '#dfece3',
              950: '#eff6f1',
            },
            'fondo': {
              50: '#09110b',
              100: '#112217',
              200: '#22442d',
              300: '#336644',
              400: '#44885b',
              500: '#55aa71',
              600: '#77bb8e',
              700: '#99ccaa',
              800: '#bbddc6',
              900: '#ddeee3',
              950: '#eef6f1',
            },
            'primario': {
              50: '#09110c',
              100: '#112218',
              200: '#23432f',
              300: '#346547',
              400: '#45875e',
              500: '#57a876',
              600: '#78ba91',
              700: '#9acbad',
              800: '#bcdcc8',
              900: '#ddeee4',
              950: '#eef6f1',
            },
            'secundario': {
              50: '#091011',
              100: '#112122',
              200: '#224244',
              300: '#336266',
              400: '#448388',
              500: '#55a4aa',
              600: '#77b6bb',
              700: '#99c8cc',
              800: '#bbdbdd',
              900: '#ddedee',
              950: '#eef6f6',
            },
            'acento': {
              50: '#090e11',
              100: '#111c22',
              200: '#233843',
              300: '#345565',
              400: '#457187',
              500: '#578da8',
              600: '#78a4ba',
              700: '#9abbcb',
              800: '#bcd1dc',
              900: '#dde8ee',
              950: '#eef4f6',
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

// light mode
// https://www.realtimecolors.com/?colors=02120a-f1fef8-27ec8a-50edd8-48eaef&fonts=Inter-Inter
// colors: {
//   'text': '#02120a',
//   'background': '#f1fef8',
//   'primary': '#27ec8a',
//   'secondary': '#50edd8',
//   'accent': '#48eaef',
//  },

// dark mode
// https://www.realtimecolors.com/?colors=edfdf5-010e08-13d875-12af9a-10b1b7&fonts=Inter-Inter
// colors: {
//   'text': '#edfdf5',
//   'background': '#010e08',
//   'primary': '#13d875',
//   'secondary': '#12af9a',
//   'accent': '#10b1b7',
//  },

export default config