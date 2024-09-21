/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      ssm: "440px",
      smm: "560px",
      lgg: "1440px",
      ss: "120px",
      "2sm": "350px",
      "3sm": "250px"
    }
  },
  plugins: [],
}

