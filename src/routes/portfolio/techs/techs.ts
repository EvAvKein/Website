export const techs = [
	"HTML",
	"CSS",
	"JavaScript",
	"JSDoc",
	"TypeScript",
	"React",
	"React Native",
	"Vue",
	"Svelte",
	"PostgreSQL",
	"MongoDB",
	"Express",
	"C",
	"GDB",
	"Jest",
	"Playwright",
	"Visual Studio Code",
	"Vim",
	"Figma",
	"Chrome Devtools",
	"GitHub",
	"Git",
	"Docker",
	"Expo",
	"NodeJS",
	"Linux",
	"Bash",
] as const;

export type tech = (typeof techs)[number];

export type techsList = tech[];
