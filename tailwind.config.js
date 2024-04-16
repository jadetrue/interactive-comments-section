/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "hsl(var(--clr-primary-400) / <alpha-value>)",
          200: "hsl(var(--clr-primary-200) / <alpha-value>)",
        },
        secondary: {
          500: "hsl(var(--clr-secondary-500) / <alpha-value>)",
          200: "hsl(var(--clr-secondary-200) / <alpha-value>)",
        },
        light: {
          800: "hsl(var(--clr-light-800) / <alpha-value>)",
          400: "hsl(var(--clr-light-400) / <alpha-value>)",
          300: "hsl(var(--clr-light-300) / <alpha-value>)",
          200: "hsl(var(--clr-light-200) / <alpha-value>)",
          100: "hsl(var(--clr-light-100) / <alpha-value>)",
        },
      },
      fontWeight: {
        regular: "var(--fw-regular)",
        medium: "var(--fw-medium)",
        bold: "var(--fw-bold)",
      },
      fontFamily: {
        primary: "var(--ff-primary)",
      },
    },
  },
  plugins: [],
};
