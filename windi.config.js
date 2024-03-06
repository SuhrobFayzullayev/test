import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  theme: {
    extend: {
      screens: {
        xs: "576px",
        "2md": "895px",
        "2xl": "1320px",
      },

      colors: {
        cgreen: "#88CA4E",
        clight: "#E9F2F7",
        cblue: "#20A6E5",
        "cdark-blue": "#022D58",
        cgray: "#697F95",
        cwhite: "#fff",
      },
    },
  },
});
