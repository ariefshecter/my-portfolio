/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem"
      }
    },
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto"
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "monospace"
        ]
      },

      // STRICT color palette: only yellow, black, white shades
      colors: {
        // signature yellow (accent)
        accentYellow: {
          50:  "#fffbea",
          100: "#fff3c4",
          200: "#fce588",
          300: "#fadb5f",
          400: "#f7c948",
          500: "#ffd400",       // MAIN yellow
          600: "#f2c200",
          700: "#d4a300",
          800: "#a37500",
          900: "#7a4b00"
        },

        // White scale (for light mode usage)
        whiteScale: {
          50:  "#ffffff",
          100: "#f8f8f8",
          200: "#f0f0f0",
          300: "#e6e6e6",
          400: "#dcdcdc",
          500: "#d2d2d2"
        },

        // Black scale (for dark mode usage)
        blackScale: {
          50:  "#0b0b0b",
          100: "#0f0f0f",
          200: "#141414",
          300: "#1a1a1a",
          400: "#202020",
          500: "#262626"
        },

        // Map conventional names to our restricted palette
        primary: {
          DEFAULT: "#ffd400",
          50: "#fffbea",
          100: "#fff3c4",
          200: "#fce588",
          300: "#fadb5f",
          400: "#f7c948",
          500: "#ffd400",
          600: "#f2c200",
          700: "#d4a300",
          800: "#a37500",
          900: "#7a4b00"
        },

        accent: {
          DEFAULT: "#ffd400",
          50: "#fffbea",
          100: "#fff3c4",
          200: "#fce588",
          300: "#fadb5f",
          400: "#f7c948",
          500: "#ffd400",
          600: "#f2c200",
          700: "#d4a300",
          800: "#a37500",
          900: "#7a4b00"
        },

        // neutral is now monochrome mapped to black/white scales depending on mode
        neutral: {
          50: "#ffffff",
          100: "#f7f7f7",
          200: "#efefef",
          300: "#e6e6e6",
          400: "#bfbfbf",
          500: "#9f9f9f",
          600: "#7a7a7a",
          700: "#4d4d4d",
          800: "#2b2b2b",
          900: "#0b0b0b"
        },

        // surface tokens
        surface: {
          light: "#ffffff",
          muted: "#f5f5f5",
          dark:  "#0b0b0b"
        },

        // background tokens (explicit)
        bg: {
          light: "#ffffff",
          dark:  "#070707"
        }
      },

      boxShadow: {
        "card-sm": "0 6px 18px -6px rgba(11,11,11,0.06)",
        "card-md": "0 10px 30px -10px rgba(11,11,11,0.09)",
        "glass": "0 8px 32px rgba(11,11,11,0.12)"
      },

      borderRadius: {
        "lg-2xl": "1.25rem"
      },

      spacing: {
        "panel": "28rem",
        "side": "4.5rem"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ]
};
