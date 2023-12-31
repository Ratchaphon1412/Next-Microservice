import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        //  sans:['Pixellet'],
        pixellet: ["Pixellet"],
        pixelletMedium: ["PixelletMedium"],
        pixelletBold: ["PixelletBold"],
        pixelletItalic: ["PixelletItalic"],
        pixelletBoldItalic: ["PixelletBoldItalic"],
        pixelletCircle: ["PixelletCircle"],
      },
    },
  },
  plugins: [
    daisyui,
    require("flowbite/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
