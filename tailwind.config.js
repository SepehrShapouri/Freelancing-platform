/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  important:'#app',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js',
],
  darkMode: ['class', '[class="dark-mode"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          700: withOpacity("--color-primary-700"),
          600: withOpacity("--color-primary-600"),
          500: withOpacity("--color-primary-500"),
          400: withOpacity("--color-primary-400"),
          300: withOpacity("--color-primary-300"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
        },
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
          900: withOpacity("--color-secondary-900"),
          800: withOpacity("--color-secondary-800"),
          700: withOpacity("--color-secondary-700"),
          600: withOpacity("--color-secondary-600"),
          500: withOpacity("--color-secondary-500"),
          400: withOpacity("--color-secondary-400"),
          300: withOpacity("--color-secondary-300"),
          200: withOpacity("--color-secondary-200"),
          100: withOpacity("--color-secondary-100"),
          50: withOpacity("--color-secondary-50"),
          0: withOpacity("--color-secondary-0"),
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

        backdropBrightness:{
          25:'.25'
        },
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
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
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Vazir", ...fontFamily.sans],
        roboto:['Roboto',...fontFamily.sans]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')(
      {strategy:"class"}
    ),
    require('flowbite/plugin'),
  ],
};


// import { fontFamily } from "tailwindcss/defaultTheme"

// /** @type {import('tailwindcss').Config} */
// export const darkMode = ["class"]
// export const content = ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"]
// export const theme = {
//   container: {
//     center: true,
//     padding: "2rem",
//     screens: {
//       "2xl": "1400px",
//     },
//   },
//   extend: {
//     colors: {
//       border: "hsl(var(--border))",
//       input: "hsl(var(--input))",
//       ring: "hsl(var(--ring))",
//       background: "hsl(var(--background))",
//       foreground: "hsl(var(--foreground))",
//       primary: {
//         DEFAULT: "hsl(var(--primary))",
//         foreground: "hsl(var(--primary-foreground))",
//       },
//       secondary: {
//         DEFAULT: "hsl(var(--secondary))",
//         foreground: "hsl(var(--secondary-foreground))",
//       },
//       destructive: {
//         DEFAULT: "hsl(var(--destructive))",
//         foreground: "hsl(var(--destructive-foreground))",
//       },
//       muted: {
//         DEFAULT: "hsl(var(--muted))",
//         foreground: "hsl(var(--muted-foreground))",
//       },
//       accent: {
//         DEFAULT: "hsl(var(--accent))",
//         foreground: "hsl(var(--accent-foreground))",
//       },
//       popover: {
//         DEFAULT: "hsl(var(--popover))",
//         foreground: "hsl(var(--popover-foreground))",
//       },
//       card: {
//         DEFAULT: "hsl(var(--card))",
//         foreground: "hsl(var(--card-foreground))",
//       },
//     },
//     borderRadius: {
//       lg: `var(--radius)`,
//       md: `calc(var(--radius) - 2px)`,
//       sm: "calc(var(--radius) - 4px)",
//     },
//     fontFamily: {
//       sans: ["var(--font-sans)", ...fontFamily.sans],
//     },
//     keyframes: {
//       "accordion-down": {
//         from: { height: "0" },
//         to: { height: "var(--radix-accordion-content-height)" },
//       },
//       "accordion-up": {
//         from: { height: "var(--radix-accordion-content-height)" },
//         to: { height: "0" },
//       },
//     },
//     animation: {
//       "accordion-down": "accordion-down 0.2s ease-out",
//       "accordion-up": "accordion-up 0.2s ease-out",
//     },
//   },
// }
// export const plugins = [require("tailwindcss-animate")]
