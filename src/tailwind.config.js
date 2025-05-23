import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...themes["[data-theme=light]"],
          primary: "#4CAF50",
        },
        dark: {
          ...themes["[data-theme=dark]"],
          primary: "#4CAF50",
        },
      },
    ],
    darkTheme: "dark",
  },
};
