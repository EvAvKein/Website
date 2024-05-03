export const techs = [
	"HTML",
	"CSS",
	"JavaScript",
	"JSDoc",
	"TypeScript",
	"React",
	"Vue",
	"Svelte",
	"PostgreSQL",
	"MongoDB",
	"Express",
	"Jest",
	"Playwright",
	"Visual Studio Code",
	"Chrome Devtools",
	"GitHub",
	"Git",
	"Docker",
	"NodeJS",
	"Linux",
	"Bash",
] as const;

export type tech = (typeof techs)[number];

export type techsList = tech[];
