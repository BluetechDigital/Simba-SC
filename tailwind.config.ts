// Import
import type { Config } from "tailwindcss";
import {PluginAPI, CSSRuleObject} from "tailwindcss/types/config";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "320px",
				sm: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			fontSize: {
				xs: ".75rem",
				sm: ".8rem",
				tiny: ".9rem",
				base: "1rem",
				medium: "1.15rem",
				paragraph: "1.05rem",
				lg: "1.25rem",
				xl: "1.5rem",
				"2xl": "1.75rem",
				"3xl": "1.85rem",
				"4xl": "2rem",
				"5xl": "2.25rem",
				"6xl": "2.5rem",
				"7xl": "3rem",
				"8xl": "4rem",
				"9xl": "4rem",
				"10xl": "4.5rem",
				"11xl": "5rem",
				"12xl": "5.5rem",
			},
			colors: {
				// Base colors Variables
				black: "#111",
				grey: "#cecece",
				white: "#ffffff",
				pureBlack: "#000",
				darkGrey: "#8f8f8f",
				lightGrey: "#f7f7f7",
				lightBlack: "#292929",
				lightGreyTwo: "#fafafa",

				// Main colors
				primary: {
					default: "#fa0008",
					two: "#ea1d25",
					three: "#c90a12",
					dark: "#99070e",
				},
				accent: {
					default: "#2563eb",
					two: "#3978ff",
					dark: "#103fac",
					darker: "#24315f",
				},
				tertiary: {
					default: "#ffb000",
					light: "#ffca10",
					two: "#fb8c00",
					dark: "#91744c",
				},
				quaternary: {
					default: "#d7d3d3",
					two: "#cccccc",
					dark: "#a4a4a4",
				},
			},
		},
	},
	plugins: [
		function ({addUtilities}: PluginAPI) {
			addUtilities({
				".font-primary": {
					fontFamily: '"primary"',
				},
				".font-inter": {
					fontFamily: '"Inter"',
				},
				".font-secondaryBlack": {
					fontFamily: '"secondaryBlack"',
				},
				".font-secondaryThin": {
					fontFamily: '"secondaryThin"',
				},
				".font-secondaryRegular": {
					fontFamily: '"secondaryRegular"',
				},
				".font-secondaryBold": {
					fontFamily: '"secondaryBold"',
				},
				".font-secondarBlack": {
					fontFamily: '"secondaryBlack"',
				},
			} as CSSRuleObject);
		},
	],
};
export default config;
