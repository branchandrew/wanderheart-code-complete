import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // WanderHeart custom font sizes
      fontSize: {
        "wh-h1": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        "wh-h2": ["2.94rem", { lineHeight: "1.2", fontWeight: "700" }],
        "wh-h3": ["2.06rem", { lineHeight: "1.3", fontWeight: "600" }],
        "wh-h4": ["2.06rem", { lineHeight: "1.3", fontWeight: "600" }],
        "wh-h5": ["1.38rem", { lineHeight: "1.4", fontWeight: "600" }],
        "wh-body": ["1.12rem", { lineHeight: "1.5" }],
        "wh-button": ["1rem", { lineHeight: "1.5", fontWeight: "500" }],
        "wh-input-label": ["1rem", { lineHeight: "1.5" }],
        "wh-form-placeholder": ["1rem", { lineHeight: "1.5" }],
      },
      screens: {
        "hero-md": "765px",
        "adventure-md": "820px",
        "adventure-lg": "1080px",
      },
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
        // WanderHeart custom colors
        wanderheart: {
          "midnight-sky": "#0F0F12",
          "dull-blue": "#2D3441",
          "neon-water": "#8CEFE9",
          "mystery-plumb": "#565793",
          "dull-pink": "#E8AFAC",
          parchment: "#F3F0ED",
          orange: "#FFAC7B",
          "nearing-midnight": "#121429",
          plumb: "#1F0E1F",
          "red-sky-at-night": "#A364A3",
          "wild-teal": "#01968E",
          "wild-purple": "#8A84E2",
          "sorbet-coral": "#F07F6F",
          "sorbet-purple": "#BE63B9",
          "watch-magenta": "#A0519F",
          "watch-teal": "#6FC7D6",
          "watch-indigo": "#714BD0",
          "join-blue": "#00C3FF",
          "join-pink": "#DC2E5A",
          "join-coral": "#EF8467",
          "join-yellow": "#F6DA71",
        },
      },
      spacing: {
        "hero-padding": "58px",
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
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "300% center" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 8s linear infinite",
        "gradient-shift": "gradient-shift 3s linear infinite",
      },
      backgroundSize: {
        "200%": "200% 200%",
        "300%": "300% 100%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
