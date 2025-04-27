/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        softcream: "#FFFBEC",
        foreground: "#4F4F4F",
        border: "#D6D3C9",
        input: "#F7F6EF",
        card: {
          DEFAULT: "#F2EAD3",
          foreground: "#4F4F4F",
        },
        ring: "#D8EAD8",

        // Primary green shades
        softgreen: {
          DEFAULT: "#D8EAD8",
          100: "#EDF5ED",
          200: "#D8EAD8",
          300: "#C1DCC1",
          400: "#AACFAA",
          500: "#93C293",
          600: "#7BA47B",
          700: "#648664",
          800: "#4D704D",
          900: "#3D5C3D",
        },

        // Secondary: soft warm gold
        secondary: {
          DEFAULT: "#E0C78C",
          50: "#FDF9EC",
          100: "#FAF1D9",
          200: "#F5E2B1",
          300: "#F0D38A",
          400: "#EBC565",
          500: "#E0C78C", // main
          600: "#C1A96F",
          700: "#A58C55",
          800: "#8B7342",
          900: "#715B33",
          foreground: "#3F3F3F",
        },

        // Accent: sage green
        accent: {
          DEFAULT: "#B6CDBD",
          50: "#F4F7F4",
          100: "#E3EFE7",
          200: "#D1E7D9",
          300: "#BFDCCB",
          400: "#B6CDBD", // main
          500: "#A2B9AA",
          600: "#889D90",
          700: "#6E8376",
          800: "#58695F",
          900: "#434F48",
          foreground: "#38443B",
        },

        // Muted and utility
        muted: {
          DEFAULT: "#C7C7C7",
          foreground: "#6F6F6F",
        },
        destructive: {
          DEFAULT: "#E57373",
          foreground: "#FDECEC",
        },
        popover: {
          DEFAULT: "#FFFBEC",
          foreground: "#4F4F4F",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
