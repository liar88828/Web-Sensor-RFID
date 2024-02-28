import type {Config} from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: ['corporate', "synthwave", 'garden', 'forest',],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    container: {


      padding: {
        // DEFAULT: '1rem',
        // sm: '2rem',
        md: '1rem',
        // lg: '2rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
      // maxWidth: {
      //   md: '1000px'
      // },
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
