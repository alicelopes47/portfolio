import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: "#CF96DF",
      primaryLight: "#F4DDFB",
      primaryBold: "#9D6BAB",
      white: "#FFFFFF",
      black: "#252525",
    },
    backgroundImage: {
      hexagonPattern: "var(--hexagon-pattern)",
    },
  },
  darkMode: "selector",
  plugins: [],
}
export default config
