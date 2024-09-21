import type {techsList} from "../techs/techs";

export const projectCategories = ["Fullstack", "Frontend", "C"] as const;

export class Project {
	constructor(
		public logoSrc: string,
		public logoAlt: string,
		public name: string,
		public description: string,
		public technologies: string,
		public techsList: techsList,
		public links: {type: "github" | "browser" | "chrome" | "firefox"; url: string}[] | undefined,
		public categories: (typeof projectCategories)[number][],
	) {}
}

export const projects: Project[] = [
	new Project(
		"/projects/hive.png",
		"Hive Helsinki's logo",
		"Hive Helsinki - Piscine",
		"Code from my participation in Hive Helsinki's 4-week selection process, including my first exposure to programming with C",
		"C, Vim",
		["C", "Vim"],
		[
			{
				type: "github",
				url: "https://github.com/EvAvKein/hive_piscine_july2024",
			},
		],
		["C"],
	),
	new Project(
		"/private.svg",
		"Book with lock icon",
		"Startup App Demo",
		"Demo app developed while serving as Founding Engineer of pre-seed startup",
		"React Native, Expo, TypeScript",
		["HTML", "CSS", "JavaScript", "TypeScript", "JSDoc", "React Native", "Expo"],
		undefined,
		["Frontend"],
	),
	new Project(
		"/projects/dialplan.svg",
		"The words Dial Plan, in an old-tech font",
		"Dialplan",
		"Scheduling invitations service for call centers",
		"React, TypeScript, Express, PostgreSQL, Jest & Playwright, Docker",
		[
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"React",
			"NodeJS",
			"Express",
			"PostgreSQL",
			"Jest",
			"Playwright",
			"Docker",
			"Bash",
		],
		[
			{
				type: "github",
				url: "https://github.com/EvAvKein/dialplan",
			},
		],
		["Fullstack"],
	),
	new Project(
		"/eak.svg",
		"The initials E.A.K, with E & K aligned and rotated to neatly overlap with the A inbetween",
		"This Website",
		"My personal & portfolio website",
		"SvelteKit, TypeScript, Vercel",
		["HTML", "CSS", "JavaScript", "TypeScript", "Svelte"],
		[
			{
				type: "github",
				url: "https://github.com/EvAvKein/website",
			},
		],
		["Frontend"],
	),
	new Project(
		"/projects/filterJobsFeeds.svg",
		"Icon of papers titled 'Job' dropped inside a filter",
		"Filter Jobs Feeds",
		"Browser extension for filtering jobs feeds through blacklisting text",
		"HTML, CSS, JavaScript, JSDoc",
		["HTML", "CSS", "JavaScript", "JSDoc"],
		[
			{
				type: "github",
				url: "https://github.com/EvAvKein/FilterJobsFeeds",
			},
			{
				type: "chrome",
				url: "https://chrome.google.com/webstore/detail/filter-jobs-feeds/edebgnaafidhaiepkjknfmdonoagkjhe",
			},
			{
				type: "firefox",
				url: "https://addons.mozilla.org/en-CA/firefox/addon/filter-jobs-feeds",
			},
		],
		["Frontend"],
	),
	new Project(
		"/projects/distillogue.svg",
		"Icon of chemistry flask, with bubbling liquids, hung on a stand",
		"Distillogue",
		"Forum platform with configurable interactions",
		"Vue, TypeScript, Express, MongoDB, Playwright, Docker",
		["HTML", "CSS", "JavaScript", "TypeScript", "Vue", "NodeJS", "Express", "MongoDB", "Playwright", "Docker", "Bash"],
		[
			{
				type: "github",
				url: "https://github.com/EvAvKein/distillogue",
			},
		],
		["Fullstack"],
	),
	new Project(
		"/projects/warehouse.svg",
		"Crate icon",
		"Warehouse",
		'A slot-based inventory management interface, inspired by those of various "sandbox" video-games',
		"HTML, CSS, JavaScript",
		["HTML", "CSS", "JavaScript"],
		[
			{type: "github", url: "https://github.com/EvAvKein/Warehouse"},
			{type: "browser", url: "https://warehouse.evavkein.com"},
		],
		["Frontend"],
	),
];
