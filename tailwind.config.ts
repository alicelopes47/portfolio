import type { Config } from "tailwindcss"
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const {
	default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');


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
    extend: {
      animation: {
				spotlight: 'spotlight 2s ease .75s 1 forwards',
				"meteor-effect": "meteor 5s linear infinite",
			},
      keyframes: {
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					}
				},
      },
    },
  },
  darkMode: "selector",
  plugins: [
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					values: flattenColorPalette(theme('backgroundColor')),
					type: 'color'
				}
			);
		}
	],
}


function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}
export default config
